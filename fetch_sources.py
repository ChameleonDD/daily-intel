# -*- coding: utf-8 -*-
"""
fetch_sources.py —— 纯 Python 抓取 + 预筛（不调任何 LLM，零成本）。

职责：把十几个网页源拉下来，做去重 + 关键词粗筛 + 正文截断，
输出一个精简的 items 列表（每条只留 标题/摘要/来源/日期/链接/频道猜测），
供 denoise.py 喂给便宜 API 降噪。

这一步把要喂给 LLM 的量砍掉 80% 以上 —— 这是省钱的关键（治本）。

源类型：
  - Discourse 论坛 latest.json（Tech-Artists 等）
  - 通用 RSS/Atom（虚幻官方、Game Developer、NVIDIA blog 等）
  - arXiv API（cs.GR 最新）
  - HuggingFace daily papers（HTML 提取）
  - 80 Level（RSS）

依赖：requests、feedparser（requirements.txt 已列）。
用法：
    python fetch_sources.py            # 抓取并打印 JSON 到 stdout
    items = fetch_all()                # 作为模块被 run.py 调用
"""
import sys
import json
import re
import html
from datetime import datetime, timezone

try:
    import requests
except ImportError:
    requests = None
try:
    import feedparser
except ImportError:
    feedparser = None

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 daily-intel/1.0"
TIMEOUT = 25

# --------------------------------------------------------------------------
# 关键词粗筛：命中任一即保留。覆盖 TA / 渲染 / 虚幻 / 游戏 / 3D 生成 / 图形学
# --------------------------------------------------------------------------
KEYWORDS = [
    # 引擎/工具
    "unreal", "ue5", "ue6", "uefn", "niagara", "lumen", "nanite", "blueprint",
    "houdini", "blender", "maya", "substance", "zbrush", "megascans", "fab",
    # 渲染/图形学
    "render", "rendering", "shader", "ray tracing", "path tracing", "raytrac",
    "global illumination", "gpu", "real-time", "realtime", "neural render",
    "gaussian splat", "nerf", "siggraph", "material", "lighting", "shading",
    "vfx", "fluid", "simulation", "procedural", "volumetric", "subsurface",
    # 3D 生成 / AI
    "3d generation", "text-to-3d", "image-to-3d", "world model", "diffusion",
    "generative", "mesh", "geometry", "asset", "avatar", "character",
    "hair", "cloth", "animation", "motion",
    # 游戏行业/技术
    "game", "studio", "developer", "tech art", "tech-art", "pipeline",
    "open world", "level design",
]

# 噪音过滤：标题命中即丢（招聘、纯促销等）
NEG_KEYWORDS = ["hiring", "job opening", "sponsored", "giveaway", "coupon"]

MAX_SUMMARY_CHARS = 400   # 喂给 LLM 前正文截断长度
MAX_ITEMS_PER_SRC = 12    # 每源最多保留条数


def _clean(text):
    if not text:
        return ""
    text = re.sub(r"<[^>]+>", " ", text)      # 去 HTML 标签
    text = html.unescape(text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def _hit_keyword(title, summary):
    blob = (title + " " + summary).lower()
    if any(n in title.lower() for n in NEG_KEYWORDS):
        return False
    return any(k in blob for k in KEYWORDS)


def _mk_item(title, summary, url, src, cat_guess, date_str=""):
    return {
        "title": _clean(title)[:160],
        "summary": _clean(summary)[:MAX_SUMMARY_CHARS],
        "url": (url or "").strip(),
        "src": src,
        "cat": cat_guess,
        "date": date_str,
    }


def _get(url):
    if requests is None:
        raise RuntimeError("requests 未安装：pip install requests")
    r = requests.get(url, headers={"User-Agent": UA}, timeout=TIMEOUT)
    r.raise_for_status()
    return r


def _date_from_struct(entry):
    """从 feedparser entry 取 MM-DD。"""
    for key in ("published_parsed", "updated_parsed"):
        t = entry.get(key)
        if t:
            return "%02d-%02d" % (t.tm_mon, t.tm_mday)
    return ""


# --------------------------------------------------------------------------
# 各源抓取器：返回 items 列表，失败返回 []（不抛，由 run.py 汇总缺源说明）
# --------------------------------------------------------------------------
def fetch_rss(feed_url, src_name, cat_guess):
    out = []
    try:
        if feedparser is None:
            raise RuntimeError("feedparser 未安装")
        r = _get(feed_url)
        parsed = feedparser.parse(r.content)
        for e in parsed.entries[:MAX_ITEMS_PER_SRC]:
            title = e.get("title", "")
            summary = e.get("summary", "") or e.get("description", "")
            link = e.get("link", "")
            d = _date_from_struct(e)
            if _hit_keyword(title, summary):
                out.append(_mk_item(title, summary, link, src_name, cat_guess, d))
    except Exception as ex:
        print("  [warn] RSS %s 失败: %s" % (src_name, ex), file=sys.stderr)
    return out


def fetch_discourse(base_url, src_name, cat_guess):
    """Discourse 论坛 /latest.json（Tech-Artists 等绕墙友好）。"""
    out = []
    try:
        r = _get(base_url.rstrip("/") + "/latest.json")
        data = r.json()
        topics = data.get("topic_list", {}).get("topics", [])
        for t in topics[:MAX_ITEMS_PER_SRC * 2]:
            title = t.get("title", "")
            slug = t.get("slug", "")
            tid = t.get("id", "")
            created = t.get("created_at", "") or t.get("last_posted_at", "")
            d = ""
            m = re.search(r"\d{4}-(\d{2})-(\d{2})", created)
            if m:
                d = "%s-%s" % (m.group(1), m.group(2))
            summary = t.get("excerpt", "") or ""
            link = "%s/t/%s/%s" % (base_url.rstrip("/"), slug, tid)
            if _hit_keyword(title, summary):
                out.append(_mk_item(title, summary, link, src_name, cat_guess, d))
            if len(out) >= MAX_ITEMS_PER_SRC:
                break
    except Exception as ex:
        print("  [warn] Discourse %s 失败: %s" % (src_name, ex), file=sys.stderr)
    return out


def fetch_arxiv(src_name="arXiv · cs.GR", cat_guess="gfx"):
    """arXiv API：cs.GR 最新提交。"""
    out = []
    try:
        api = ("http://export.arxiv.org/api/query?"
               "search_query=cat:cs.GR&sortBy=submittedDate&sortOrder=descending&max_results=20")
        r = _get(api)
        if feedparser is None:
            raise RuntimeError("feedparser 未安装")
        parsed = feedparser.parse(r.content)
        for e in parsed.entries[:15]:
            title = e.get("title", "")
            summary = e.get("summary", "")
            link = e.get("link", "")
            d = _date_from_struct(e)
            if _hit_keyword(title, summary):
                out.append(_mk_item(title, summary, link, src_name, cat_guess, d))
            if len(out) >= MAX_ITEMS_PER_SRC:
                break
    except Exception as ex:
        print("  [warn] arXiv 失败: %s" % ex, file=sys.stderr)
    return out


def fetch_hf_papers(src_name="HuggingFace", cat_guess="ai"):
    """HuggingFace daily papers：从页面提取标题+链接。"""
    out = []
    try:
        r = _get("https://huggingface.co/papers")
        text = r.text
        # 提取 /papers/xxxx 链接与标题
        seen = set()
        for m in re.finditer(r'href="(/papers/(\d+\.\d+))"[^>]*>\s*([^<]{8,160})<', text):
            url = "https://huggingface.co" + m.group(1)
            pid = m.group(2)
            title = _clean(m.group(3))
            if pid in seen or not title:
                continue
            seen.add(pid)
            if _hit_keyword(title, ""):
                out.append(_mk_item(title, "", url, src_name, cat_guess, ""))
            if len(out) >= MAX_ITEMS_PER_SRC:
                break
    except Exception as ex:
        print("  [warn] HuggingFace 失败: %s" % ex, file=sys.stderr)
    return out


# --------------------------------------------------------------------------
# 源清单（cat_guess 只是粗猜，最终由 LLM 校正）
# --------------------------------------------------------------------------
SOURCES = [
    ("rss",       "https://80.lv/feed/",                                   "80 Level",        "tech"),
    ("rss",       "https://www.gamedeveloper.com/rss.xml",                 "Game Developer",  "biz"),
    ("rss",       "https://www.unrealengine.com/rss",                      "Unreal Engine",   "tech"),
    ("rss",       "https://developer.nvidia.com/blog/feed",                "NVIDIA",          "tech"),
    ("discourse", "https://www.tech-artists.org",                          "Tech-Artists",    "flow"),
    ("arxiv",     "",                                                       "arXiv · cs.GR",   "gfx"),
    ("hf",        "",                                                       "HuggingFace",     "ai"),
]


def _dedupe(items):
    """按标题归一化去重。"""
    seen = set()
    out = []
    for it in items:
        key = re.sub(r"[^a-z0-9]", "", it["title"].lower())[:60]
        if key and key not in seen:
            seen.add(key)
            out.append(it)
    return out


def fetch_all():
    """主入口：返回 (items, ok_sources, missed_sources)。"""
    items, ok, missed = [], [], []
    for kind, url, name, cat in SOURCES:
        if kind == "rss":
            got = fetch_rss(url, name, cat)
        elif kind == "discourse":
            got = fetch_discourse(url, name, cat)
        elif kind == "arxiv":
            got = fetch_arxiv(name, cat)
        elif kind == "hf":
            got = fetch_hf_papers(name, cat)
        else:
            got = []
        if got:
            ok.append(name)
            items.extend(got)
        else:
            missed.append(name)
    items = _dedupe(items)
    return items, ok, missed


if __name__ == "__main__":
    items, ok, missed = fetch_all()
    print("=== 抓取完成 ===", file=sys.stderr)
    print("成功源: %s" % ", ".join(ok), file=sys.stderr)
    print("失败源: %s" % ", ".join(missed), file=sys.stderr)
    print("预筛后条数: %d" % len(items), file=sys.stderr)
    print(json.dumps({"items": items, "ok": ok, "missed": missed},
                     ensure_ascii=False, indent=2))
