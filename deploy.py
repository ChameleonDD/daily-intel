# -*- coding: utf-8 -*-
"""
deploy.py —— 把当天的自包含日报快照推到 GitHub Pages，得到一个手机能打开的网址。

策略：
- 取 archive/<今天>.html（publish.py 生成的自包含快照）
- 复制成两份推到 GitHub 仓库：
    today.html        ← 推送链接永远指向它（最新一期）
    YYYY-MM-DD.html   ← 历史存档，可回看
- 用 git 命令提交推送（需本机已装 git 且对该仓库有推送权限）

首次使用前：
1. 在 GitHub 建一个仓库，Settings→Pages 开启（Source: main 分支 / root）
2. 在本机把该仓库 clone 到下面 LOCAL_REPO 指向的位置，或改 LOCAL_REPO 为你已有的本地仓库路径
3. push_config.json 填好 github_pages.repo 和 page_url

用法：
    python deploy.py
"""
import sys
import json
import shutil
import subprocess
from pathlib import Path
from datetime import datetime

BASE = Path(__file__).parent
CFG = BASE / "push_config.json"
ARCHIVE_DIR = BASE / "archive"

# 本地仓库工作区：默认放在 daily-intel 同级的 _pages_repo。
# 你也可以改成你已 clone 好的仓库路径。
LOCAL_REPO = BASE / "_pages_repo"


def run(cmd, cwd):
    print("  $ " + " ".join(cmd))
    r = subprocess.run(cmd, cwd=str(cwd), capture_output=True, text=True)
    if r.stdout.strip():
        print("    " + r.stdout.strip().replace("\n", "\n    "))
    if r.returncode != 0:
        print("    ! " + r.stderr.strip().replace("\n", "\n    "))
    return r.returncode == 0


def main():
    if not CFG.exists():
        print("ERR_NO_CONFIG")
        return
    cfg = json.loads(CFG.read_text(encoding="utf-8")).get("github_pages", {})
    repo = cfg.get("repo", "")
    branch = cfg.get("branch", "main")
    if not repo or repo.startswith("在此"):
        print("ERR_NO_REPO: 请先在 push_config.json 填 github_pages.repo（如 yourname/intel-daily）")
        return

    today = datetime.now().strftime("%Y-%m-%d")
    snapshot = ARCHIVE_DIR / f"{today}.html"
    if not snapshot.exists():
        print(f"ERR_NO_SNAPSHOT: 没找到 {snapshot}，请先运行 publish.py 生成当天快照")
        return

    # 准备本地仓库
    if not (LOCAL_REPO / ".git").exists():
        print(f"INIT_REPO: clone {repo} → {LOCAL_REPO}")
        if not run(["git", "clone", f"https://github.com/{repo}.git", str(LOCAL_REPO)], BASE):
            print("CLONE_FAIL: 请确认仓库存在、本机已配置 git 凭据（建议用 gh auth 或 PAT）")
            return
    else:
        run(["git", "pull", "--ff-only"], LOCAL_REPO)

    # 复制快照到仓库：today.html（最新）+ 日期存档
    shutil.copy(snapshot, LOCAL_REPO / "today.html")
    shutil.copy(snapshot, LOCAL_REPO / f"{today}.html")
    print(f"COPIED: today.html + {today}.html")

    # 提交推送
    run(["git", "add", "-A"], LOCAL_REPO)
    run(["git", "commit", "-m", f"daily intel {today}"], LOCAL_REPO)
    if run(["git", "push", "origin", branch], LOCAL_REPO):
        page_url = cfg.get("page_url", "")
        print(f"DEPLOY_OK: {page_url}")
    else:
        print("PUSH_FAIL: 推送失败，检查 git 凭据/网络")


if __name__ == "__main__":
    main()
