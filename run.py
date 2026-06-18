# -*- coding: utf-8 -*-
"""
run.py —— 一键生成当天日报的独立主脚本（彻底脱离 WorkBuddy）。

链路：
  1. fetch_sources.fetch_all()  抓网页源 + 预筛（不花钱）
  2. denoise.denoise()          调 DeepSeek 把素材压成卡片（几分钱）
  3. 合并 X 卡片                 沿用本地 data.js 现存的 x 频道卡片（云端不抓 X）
  4. 写 data.js                  按 window.INTEL_DATA 格式落盘
  5. publish.py                  归档自包含快照（+ 本机会打开浏览器）
  6. deploy.py / notify.py       上云 + 推送（由 GitHub Actions 或本机跑）

环境变量：
  DEEPSEEK_API_KEY  必填（降噪）
  RUN_PUBLISH=0     跳过 publish（CI 里无浏览器时设 0，默认 1）
  RUN_DEPLOY=1      跑 deploy.py（CI 里设 1）
  RUN_NOTIFY=1      跑 notify.py（CI 里设 1）

用法：
    python run.py
"""
import os
import re
import sys
import json
import subprocess
from pathlib import Path
from datetime import datetime, timezone, timedelta

BASE = Path(__file__).parent
DATA = BASE / "data.js"
PY = sys.executable

sys.path.insert(0, str(BASE))
import fetch_sources
import denoise


WEEK_CN = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]


def now_bj():
    return datetime.now(timezone(timedelta(hours=8)))


def load_existing_x_cards():
    """从现有 data.js 里提取 x 频道卡片原样保留（云端不抓 X）。"""
    if not DATA.exists():
        return []
    try:
        # 用 node 解析最稳；无 node 时用正则兜底
        node = _find_node()
        if node:
            script = (
                "global.window={};require(%s);"
                "process.stdout.write(JSON.stringify("
                "(window.INTEL_DATA.cards||[]).filter(c=>c.cat==='x')));"
                % json.dumps(str(DATA).replace("\\", "/"))
            )
            r = subprocess.run([node, "-e", script],
                               capture_output=True, text=True,
                               encoding="utf-8", timeout=30)
            if r.returncode == 0 and r.stdout.strip():
                return json.loads(r.stdout)
    except Exception as ex:
        print("  [warn] node 提取 X 卡片失败，转正则: %s" % ex, file=sys.stderr)
    return _regex_x_cards()


def _find_node():
    for cand in ("node",
                 r"C:/Users/jimiding/.workbuddy/binaries/node/versions/22.22.2/node.exe"):
        try:
            subprocess.run([cand, "-v"], capture_output=True, timeout=10)
            return cand
        except Exception:
            continue
    return None


def _regex_x_cards():
    txt = DATA.read_text(encoding="utf-8")
    m = re.search(r"cards\s*:\s*\[(.*)\]\s*,\s*sources", txt, re.S)
    if not m:
        return []
    body = m.group(1)
    cards = []
    for block in re.findall(r"\{[^{}]*\}", body):
        if 'cat:"x"' in block.replace(" ", "") or "cat:'x'" in block.replace(" ", ""):
            try:
                obj = block
                obj = re.sub(r"(\w+)\s*:", r'"\1":', obj)
                obj = obj.replace("\\u", "\\\\u")
                cards.append(json.loads(obj))
            except Exception:
                pass
    return cards


def render_today_html(cards):
    """生成「今日一句」：挑 rank/hi 的标题串起来。"""
    hi = [c for c in cards if c.get("imp") == "hi"]
    hi.sort(key=lambda c: c.get("rank", 99))
    picks = [c["title"] for c in hi[:4]]
    if not picks:
        picks = [c["title"] for c in cards[:3]]
    em = " / ".join("<em>%s</em>" % p for p in picks)
    return "今天值得停下精读的有：%s。其余按重要性自动排序，红色优先。" % em


def write_data_js(cards, ok, missed, x_cards):
    dt = now_bj()
    date_str = "%d年%d月%d日 · %s" % (dt.year, dt.month, dt.day, WEEK_CN[dt.weekday()])
    all_cards = x_cards + cards
    data = {
        "date": date_str,
        "tagline": "为留存而读，不为刷新而读",
        "todayHtml": render_today_html(cards),
        "channels": [
            {"key": "x",    "name": "X 动态",    "color": "#8a4fb0", "desc": "你关注的大佬 · 近期本人发布"},
            {"key": "tech", "name": "游戏技术",  "color": "#6a52a3", "desc": "虚幻 / 实时渲染 / 美术工作流"},
            {"key": "flow", "name": "TA 工作流", "color": "#b06a2e", "desc": "Tech-Artists 论坛 · 工具/管线实操"},
            {"key": "biz",  "name": "游戏行业",  "color": "#3f8a6e", "desc": "工作室 / 商业 / 发行"},
            {"key": "gfx",  "name": "图形学前沿", "color": "#2f7d8a", "desc": "arXiv / SIGGRAPH 论文"},
            {"key": "ai",   "name": "AI 技术",   "color": "#3b6fb0", "desc": "仅保留与游戏/实时/3D 相关"},
        ],
        "cards": all_cards,
        "sources": {
            "ok": ok + (["X（沿用上次本机抓取）"] if x_cards else []),
            "missed": ("未覆盖：%s。" % "、".join(missed)) if missed else "",
        },
        "xStale": False,
    }
    js = "window.INTEL_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"
    header = (
        "// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。\n"
        "// 骨架 index.html 永不动；此文件每天重写。\n"
        "// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。\n\n"
    )
    DATA.write_text(header + js, encoding="utf-8")
    return len(all_cards)


def _run_step(name, env_flag, default="1"):
    if os.environ.get(env_flag, default) != "1":
        print("  [skip] %s（%s != 1）" % (name, env_flag))
        return
    script = BASE / name
    if not script.exists():
        print("  [skip] %s 不存在" % name)
        return
    print("  $ python %s" % name)
    r = subprocess.run([PY, str(script)], cwd=str(BASE))
    if r.returncode != 0:
        print("  [warn] %s 退出码 %d（不中断）" % (name, r.returncode))


def main():
    print("=== [1/6] 抓取 + 预筛 ===")
    items, ok, missed = fetch_sources.fetch_all()
    print("  成功源: %s" % ", ".join(ok))
    print("  预筛后: %d 条" % len(items))

    print("=== [2/6] DeepSeek 降噪 ===")
    cards = denoise.denoise(items)
    print("  降噪后: %d 张卡片" % len(cards))

    print("=== [3/6] 合并 X 卡片（沿用本机上次抓取）===")
    x_cards = load_existing_x_cards()
    print("  X 卡片: %d 张" % len(x_cards))

    print("=== [4/6] 写 data.js ===")
    total = write_data_js(cards, ok, missed, x_cards)
    print("  共写入: %d 张" % total)

    print("=== [5/6] 归档 publish.py ===")
    _run_step("publish.py", "RUN_PUBLISH", default="1")

    print("=== [6/6] 上云 + 推送 ===")
    _run_step("deploy.py", "RUN_DEPLOY", default="0")
    _run_step("notify.py", "RUN_NOTIFY", default="0")

    print("=== 完成 ===")


if __name__ == "__main__":
    main()
