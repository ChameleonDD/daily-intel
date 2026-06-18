# -*- coding: utf-8 -*-
"""
notify.py —— 链路最后一步：往 iPhone 弹一条「日报已就绪」锁屏推送（Bark）。

读 push_config.json 里的 bark.key 和 github_pages.page_url。
推送标题/正文从当天 data.js 自动提取（条数 + 今日头条标题），点开横幅直接跳云端日报。

用法：
    python notify.py                      # 自动提取摘要并推送
    python notify.py --title "x" --body "y"  # 手动指定标题正文

依赖：仅标准库（urllib）。无需 pip 安装。
"""
import os
import sys
import json
import re
import urllib.parse
import urllib.request
from pathlib import Path
from datetime import datetime

BASE = Path(__file__).parent
CFG = BASE / "push_config.json"
DATA = BASE / "data.js"


def load_cfg():
    """优先用环境变量（GitHub Actions Secrets），否则读 push_config.json。"""
    env_key = os.environ.get("BARK_KEY", "").strip()
    if env_key:
        return {
            "bark": {"key": env_key,
                     "server": os.environ.get("BARK_SERVER", "https://api.day.app")},
            "github_pages": {"page_url": os.environ.get("PAGE_URL", "")},
        }
    if not CFG.exists():
        print("ERR_NO_CONFIG: 缺少 push_config.json 且未设置 BARK_KEY 环境变量")
        return None
    return json.loads(CFG.read_text(encoding="utf-8"))


def extract_summary():
    """从 data.js 里粗略提取：卡片总数 + 第一条 rank/hi 的标题作为头条。"""
    if not DATA.exists():
        return "今日情报站日报已就绪", "点开查看今天的内容"
    txt = DATA.read_text(encoding="utf-8")
    # 统计 title 出现次数作为条数（够用）
    titles = re.findall(r'title\s*:\s*["\']([^"\']+)["\']', txt)
    n = len(titles)
    # 找 rank:1 那条作为头条；找不到就用第一个 hi；再找不到用第一条
    headline = None
    m = re.search(r'\{[^{}]*rank\s*:\s*1[^{}]*\}', txt)
    if m:
        t = re.search(r'title\s*:\s*["\']([^"\']+)["\']', m.group(0))
        if t:
            headline = t.group(0) if False else t.group(1)
    if not headline and titles:
        headline = titles[0]
    today = datetime.now().strftime("%m-%d")
    title = f"📰 {today} 情报站日报已就绪"
    body = f"今日 {n} 条 · 头条：{headline}" if headline else f"今日 {n} 条，点开查看"
    return title, body


def main():
    cfg = load_cfg()
    if not cfg:
        return

    key = cfg.get("bark", {}).get("key", "")
    server = cfg.get("bark", {}).get("server", "https://api.day.app").rstrip("/")
    page_url = cfg.get("github_pages", {}).get("page_url", "")

    if not key or key.startswith("在此"):
        print("ERR_NO_BARK_KEY: 请先在 push_config.json 填 bark.key（见文件里的_怎么拿）")
        return

    # 标题/正文：命令行优先，否则自动提取
    title, body = extract_summary()
    if "--title" in sys.argv:
        title = sys.argv[sys.argv.index("--title") + 1]
    if "--body" in sys.argv:
        body = sys.argv[sys.argv.index("--body") + 1]

    # Bark URL 规则：https://server/key/标题/正文?url=点击跳转
    seg_title = urllib.parse.quote(title, safe="")
    seg_body = urllib.parse.quote(body, safe="")
    url = f"{server}/{key}/{seg_title}/{seg_body}"
    params = {"group": "情报站", "icon": "https://api.day.app/assets/icon.png"}
    if page_url and not page_url.startswith("https://你的"):
        params["url"] = page_url  # 点横幅跳转的目标
    url += "?" + urllib.parse.urlencode(params)

    try:
        req = urllib.request.Request(url, headers={"User-Agent": "intel-notify/1.0"})
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode("utf-8"))
        if data.get("code") == 200:
            print(f"PUSH_OK: {title} | {body}")
            if "url" not in params:
                print("WARN_NO_PAGE_URL: 已推送但未带跳转链接（page_url 还没填，点开横幅不会跳网页）")
        else:
            print(f"PUSH_FAIL: {data}")
    except Exception as e:
        print(f"PUSH_ERR: {e}")


if __name__ == "__main__":
    main()
