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
import seen_store


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


# 今日新增 <= 此阈值时，补几条「前几天最爆的」做回顾。
FLASHBACK_TRIGGER = 5
# 回顾候选的「前几天」窗口（不含今天）：1~3 天前。
FLASHBACK_LOOKBACK_DAYS = 3
# 最多补几条回顾。
FLASHBACK_MAX = 3
FLASHBACK_TITLE = "今天的刷完了，来回顾下前几天的"


def _imp_rank(c):
    """卡片「爆」的排序键：imp(hi>mid>lo) 优先，其次 rank 越小越爆。返回元组用于 sort。"""
    order = {"hi": 0, "mid": 1, "lo": 2}
    return (order.get(c.get("imp"), 1), c.get("rank") if c.get("rank") is not None else 9999)


def pick_flashback(today_cards, seen, exclude_sigs):
    """今日新增太少时，从 recent.js 里挑「前 1~3 天最爆的」2~3 条做回顾。

    判定「前几天」：用 seen.json 的首发日期（指纹 -> YYYY-MM-DD），
    取首发日在 [今天-3, 今天-1] 区间的卡片（排除今天首发的、排除本次已展示的）。
    在候选里按 imp+rank 排序取前 FLASHBACK_MAX 条，打 flashback 标记返回。
    """
    if len(today_cards) > FLASHBACK_TRIGGER:
        return []
    recent = _load_recent_cards()
    if not recent:
        return []
    today = now_bj().date()
    lo = today - timedelta(days=FLASHBACK_LOOKBACK_DAYS)
    hi = today - timedelta(days=1)
    cands = []
    for c in recent:
        sig = fetch_sources.item_signature(c) or (c.get("url") or c.get("title") or "")
        if not sig or sig in exclude_sigs:
            continue
        first = seen.get(sig)
        if not first:
            continue
        try:
            d = datetime.strptime(first, "%Y-%m-%d").date()
        except Exception:
            continue
        if lo <= d <= hi:
            cands.append(c)
    cands.sort(key=_imp_rank)
    picks = []
    for c in cands[:FLASHBACK_MAX]:
        c = dict(c)            # 拷一份，不污染 recent
        c["flashback"] = True
        picks.append(c)
    return picks


def write_data_js(cards, ok, missed, x_cards, dup=0, flashback=None):
    dt = now_bj()
    date_str = "%d年%d月%d日 · %s" % (dt.year, dt.month, dt.day, WEEK_CN[dt.weekday()])
    flashback = flashback or []
    all_cards = x_cards + cards + flashback
    # 空日报兜底：今日无新增时给友好文案，而不是空白。
    if cards:
        today_html = render_today_html(cards)
    elif flashback:
        today_html = "今日暂无新增 —— 近期热点此前都已读过。给你翻出了 %d 条前几天最值得回看的，往下拉「%s」。" % (len(flashback), FLASHBACK_TITLE)
    elif x_cards:
        today_html = "今日暂无新内容（近期热点此前已读过）。X 动态见下方，或点「近期」翻看本周热点。"
    else:
        today_html = "今日暂无新增内容 —— 近期 %d 条热点此前都已读过。点「近期」可翻看本周积累。" % dup
    data = {
        "date": date_str,
        "tagline": "为留存而读，不为刷新而读",
        "todayHtml": today_html,
        "channels": [
            {"key": "x",    "name": "X 动态",    "color": "#8a4fb0", "desc": "你关注的大佬 · 近期本人发布"},
            {"key": "tech", "name": "游戏技术",  "color": "#6a52a3", "desc": "虚幻 / 实时渲染 / 美术工作流"},
            {"key": "flow", "name": "TA 工作流", "color": "#b06a2e", "desc": "Tech-Artists 论坛 · 工具/管线实操"},
            {"key": "biz",  "name": "游戏行业",  "color": "#3f8a6e", "desc": "工作室 / 商业 / 发行"},
            {"key": "gfx",  "name": "图形学前沿", "color": "#2f7d8a", "desc": "arXiv / SIGGRAPH 论文"},
            {"key": "ai",   "name": "AI 技术",   "color": "#3b6fb0", "desc": "仅保留与游戏/实时/3D 相关"},
        ],
        "cards": all_cards,
        "flashbackTitle": FLASHBACK_TITLE if flashback else "",
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


RECENT = BASE / "recent.js"


def _load_recent_cards():
    """读 recent.js 里已累积的卡片（node 优先，正则兜底）。不存在返回 []。"""
    if not RECENT.exists():
        return []
    try:
        node = _find_node()
        if node:
            script = (
                "global.window={};require(%s);"
                "process.stdout.write(JSON.stringify(window.INTEL_RECENT.cards||[]));"
                % json.dumps(str(RECENT).replace("\\", "/"))
            )
            r = subprocess.run([node, "-e", script], capture_output=True,
                               text=True, encoding="utf-8", timeout=30)
            if r.returncode == 0 and r.stdout.strip():
                return json.loads(r.stdout)
    except Exception as ex:
        print("  [warn] 读取 recent.js 失败（忽略）: %s" % ex, file=sys.stderr)
    return []


def write_recent_js(today_cards):
    """累积「近期热点」到 recent.js，供前端「近期」入口翻阅。

    逻辑：旧 recent 卡片 + 今日新卡片 → 按指纹去重(今日的覆盖旧的) → 落盘。
    无需在这里按日期裁剪——能进 today_cards 的本就过了 14 天时效闸；
    旧卡片随 seen 的 30 天滚动自然淘汰（不会被重新加入）。为防膨胀仍封顶 200 条。
    """
    old = _load_recent_cards()
    merged, seen_sig = [], set()
    # 今日新卡片优先（放最前，且覆盖旧的同指纹卡）
    for c in today_cards + old:
        sig = fetch_sources.item_signature(c) or (c.get("url") or c.get("title") or "")
        if sig in seen_sig:
            continue
        seen_sig.add(sig)
        merged.append(c)
    merged = merged[:200]
    payload = {
        "updated": now_bj().strftime("%Y-%m-%d %H:%M"),
        "cards": merged,
    }
    js = "window.INTEL_RECENT = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n"
    header = (
        "// daily-intel 近期热点层 —— 由 run.py 自动累积，供「近期」入口翻阅。\n"
        "// 与 data.js（仅今日新增）分离：data.js 是“今天有什么新的”，recent.js 是“近期攒了啥”。\n\n"
    )
    RECENT.write_text(header + js, encoding="utf-8")
    print("  recent.js 累积: %d 张" % len(merged))


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
    print("=== [1/7] 抓取 + 预筛 ===")
    items, ok, missed = fetch_sources.fetch_all()
    print("  成功源: %s" % ", ".join(ok))
    print("  预筛后: %d 条" % len(items))

    print("=== [2/7] 跨天去重（只留今日新增）===")
    seen = seen_store.load_seen()
    fresh_items, dup = seen_store.filter_new(items, seen)
    print("  已发过(滤除): %d 条 | 今日新增: %d 条" % (dup, len(fresh_items)))
    if not fresh_items:
        print("  [info] 今日无新增内容（近期热点都已发过）。")

    print("=== [3/7] DeepSeek 降噪 ===")
    # 只把今日新增喂给 DeepSeek —— 既省钱又准确。
    cards = denoise.denoise(fresh_items) if fresh_items else []
    print("  降噪后: %d 张卡片" % len(cards))

    print("=== [4/7] 合并 X 卡片（沿用本机上次抓取，不参与跨天去重）===")
    x_cards = load_existing_x_cards()
    print("  X 卡片: %d 张" % len(x_cards))

    print("=== [4.5/7] 回顾：今日新增少时补「前几天最爆的」===")
    # 排除今日已展示的卡片指纹（今日新增 + X 卡片），避免回顾重复展示同一条。
    exclude = set()
    for c in cards + x_cards:
        s = fetch_sources.item_signature(c) or (c.get("url") or c.get("title") or "")
        if s:
            exclude.add(s)
    flashback = pick_flashback(cards, seen, exclude)
    if flashback:
        print("  今日新增 %d 条(<=%d)，补 %d 条前几天回顾" %
              (len(cards), FLASHBACK_TRIGGER, len(flashback)))
    else:
        print("  今日新增充足或无可回顾，跳过")

    print("=== [5/7] 写 data.js（今日新增 + 可选回顾）===")
    total = write_data_js(cards, ok, missed, x_cards, dup=dup, flashback=flashback)
    print("  共写入: %d 张" % total)
    # 给 CI 留个标记：今日新增卡片数（workflow 据此决定要不要推送，0 新增不打扰）。
    try:
        (BASE / ".today_new_count").write_text(str(len(cards)), encoding="utf-8")
    except Exception:
        pass
    # 把今日真正发出的（已降噪成卡片的）登记进 seen，明天起不再重复。
    # 注意：以“喂给降噪的 fresh_items”登记，确保即便某条被 LLM 丢弃也不会明天再翻出来。
    seen = seen_store.mark_seen(seen, fresh_items)
    seen_store.save_seen(seen)
    print("  seen.json 记录数: %d" % len(seen))

    print("=== [6/7] 写 recent.js（近期热点，供“近期”入口翻阅）===")
    write_recent_js(cards)

    print("=== [7/7] 归档 + 上云 + 推送 ===")
    _run_step("publish.py", "RUN_PUBLISH", default="1")
    _run_step("deploy.py", "RUN_DEPLOY", default="0")
    # 今日 0 新增时不必打扰用户：跳过推送（除非强制）。
    if cards or os.environ.get("NOTIFY_WHEN_EMPTY") == "1":
        _run_step("notify.py", "RUN_NOTIFY", default="0")
    else:
        print("  [skip] 今日 0 新增，跳过推送（设 NOTIFY_WHEN_EMPTY=1 可强制推）")

    print("=== 完成 ===")


if __name__ == "__main__":
    main()
