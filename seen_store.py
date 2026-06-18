# -*- coding: utf-8 -*-
"""
seen_store.py —— 跨天去重存储（让日报变成「今日新增」而非「近期热点墙」）。

问题背景：
  管线每天重抓最近 14 天的源，所以同一条新闻（如 UE5.8）会在 14 天窗口里
  天天重复出现。本模块记一份「已经发过的指纹清单」，每天抓完后把发过的剔掉，
  只保留真正的今日新增。

数据文件：seen.json
  结构：{ "<指纹>": "YYYY-MM-DD"(首次发出的日期), ... }
  - 指纹由 fetch_sources.item_signature() 生成，与单次抓取去重共用同一套，
    保证「同一条新闻不管哪天、哪个源抓到，指纹都一致」。
  - 按 RETAIN_DAYS 滚动清理：超期记录自动剔除，文件不会无限膨胀。
    清理窗口要 >= 抓取时效窗口（FRESH_DAYS=14），否则旧记录被清掉后
    那条新闻又会“复活”被当成新增。这里取 30 天，留足余量。

对外接口：
  load_seen()              -> dict           读取（并就地清理超期项）
  filter_new(items, seen)  -> (new_items, dup_count)   滤出今日新增
  mark_seen(seen, items)   -> dict           把本次发出的条目登记进 seen
  save_seen(seen)                            落盘
"""
import json
from pathlib import Path
from datetime import datetime, timezone, timedelta

BASE = Path(__file__).parent
SEEN_FILE = BASE / "seen.json"

# 保留天数：必须 >= fetch_sources.FRESH_DAYS(14)，否则记录过早失效会让旧闻复活。
RETAIN_DAYS = 30


def _today_str():
    """北京时间当天 YYYY-MM-DD。"""
    return datetime.now(timezone(timedelta(hours=8))).strftime("%Y-%m-%d")


def _sig(item):
    """取一条 item 的指纹，复用 fetch_sources 的同一套逻辑。"""
    try:
        import fetch_sources
        return fetch_sources.item_signature(item)
    except Exception:
        # 极端兜底：fetch_sources 不可用时，用 url 或标题
        if isinstance(item, dict):
            return (item.get("url") or item.get("title") or "").strip().lower()
        return str(item).strip().lower()


def load_seen():
    """读取 seen.json，并就地剔除超过 RETAIN_DAYS 的旧记录。文件不存在返回空 dict。"""
    if not SEEN_FILE.exists():
        return {}
    try:
        raw = json.loads(SEEN_FILE.read_text(encoding="utf-8"))
        if not isinstance(raw, dict):
            return {}
    except Exception:
        return {}

    cutoff = datetime.now(timezone(timedelta(hours=8))) - timedelta(days=RETAIN_DAYS)
    cleaned = {}
    for sig, date_str in raw.items():
        try:
            d = datetime.strptime(date_str, "%Y-%m-%d").replace(
                tzinfo=timezone(timedelta(hours=8)))
            if d >= cutoff:
                cleaned[sig] = date_str
        except Exception:
            # 日期解析失败的脏数据直接丢弃
            continue
    return cleaned


def filter_new(items, seen):
    """从 items 里滤出 seen 中不存在的（今日新增）。

    返回 (new_items, dup_count)：
      new_items —— 指纹不在 seen 里的条目（保持原顺序）
      dup_count —— 被滤掉的“以前发过”的条数
    指纹为空的条目（无法去重）一律视为新增放行，避免误杀。
    """
    new_items, dup = [], 0
    for it in items:
        sig = _sig(it)
        if sig and sig in seen:
            dup += 1
            continue
        new_items.append(it)
    return new_items, dup


def mark_seen(seen, items, date_str=None):
    """把本次真正发出的条目登记进 seen（已存在的不覆盖首发日期）。返回更新后的 seen。"""
    date_str = date_str or _today_str()
    for it in items:
        sig = _sig(it)
        if sig and sig not in seen:
            seen[sig] = date_str
    return seen


def save_seen(seen):
    """落盘。键多时排序写，diff 友好。"""
    SEEN_FILE.write_text(
        json.dumps(seen, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
        encoding="utf-8")


# 自测：python seen_store.py
if __name__ == "__main__":
    demo = [
        {"title": "Unreal Engine 5.8 Released", "url": "https://x/1"},
        {"title": "Some other GR paper on diffusion", "url": "https://x/2"},
    ]
    s = load_seen()
    print("当前 seen 条数:", len(s))
    newi, dup = filter_new(demo, s)
    print("新增:", len(newi), " 重复:", dup)
    s = mark_seen(s, demo)
    print("登记后 seen 条数:", len(s))
    # 再过一遍：应全部判重
    newi2, dup2 = filter_new(demo, s)
    print("二次过滤 —— 新增:", len(newi2), " 重复:", dup2, "(应 新增0 重复2)")
