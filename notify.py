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

# Windows 控制台默认 GBK，emoji/中文打印会崩 —— 强制 stdout 走 UTF-8。
try:
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")
except Exception:
    pass

BASE = Path(__file__).parent
CFG = BASE / "push_config.json"
DATA = BASE / "data.js"


def load_cfg():
    """优先用环境变量（GitHub Actions Secrets），否则读 push_config.json。

    支持两类推送目标：
      - BARK_KEY ：iOS 的 Bark，逗号/空格/分号分隔多个 key
      - NTFY_TOPICS ：安卓的 ntfy，逗号/空格/分号分隔多个 topic
    只要任一环境变量存在就走环境变量分支（CI 场景）。
    """
    env_bark = os.environ.get("BARK_KEY", "").strip()
    env_ntfy = os.environ.get("NTFY_TOPICS", "").strip()
    if env_bark or env_ntfy:
        return {
            "bark": {"key": env_bark,
                     "server": os.environ.get("BARK_SERVER", "https://api.day.app")},
            "ntfy": {"topics": env_ntfy,
                     "server": os.environ.get("NTFY_SERVER", "https://ntfy.sh")},
            "github_pages": {"page_url": os.environ.get("PAGE_URL", "")},
        }
    if not CFG.exists():
        print("ERR_NO_CONFIG: 缺少 push_config.json 且未设置 BARK_KEY/NTFY_TOPICS 环境变量")
        return None
    return json.loads(CFG.read_text(encoding="utf-8"))


def _split_multi(val):
    """把字符串按逗号/空格/分号拆成列表；列表原样返回。"""
    if isinstance(val, list):
        return val
    if isinstance(val, str) and val:
        return re.split(r"[,\s;]+", val)
    return []


def _encode_header(s):
    """HTTP 头只能放 ASCII。含非 ASCII（中文）时用 RFC2047 base64 编码，
    ntfy 客户端会自动解码还原成原文标题。纯 ASCII 直接返回。"""
    try:
        s.encode("ascii")
        return s
    except UnicodeEncodeError:
        import base64
        b = base64.b64encode(s.encode("utf-8")).decode("ascii")
        return f"=?UTF-8?B?{b}?="


def collect_targets(cfg):
    """收集所有推送目标，返回 [{type, value}] 列表（去重保序）。

    type='bark'：value 是 Bark key（容错：填整条 URL 自动截最后一段）
    type='ntfy'：value 是 ntfy topic 名

    兼容写法：
      bark : key(字符串) 或 keys(数组)
      ntfy : topic(字符串) 或 topics(数组/逗号串)
    """
    targets, seen = [], set()

    bark = cfg.get("bark", {})
    bark_raw = _split_multi(bark.get("keys")) + _split_multi(bark.get("key", ""))
    for k in bark_raw:
        k = (k or "").strip().rstrip("/")
        if k.startswith("http"):
            k = k.split("/")[-1]  # 用户填了整条 URL 时截 key
        if not k or k.startswith("在此"):
            continue
        sig = ("bark", k)
        if sig not in seen:
            seen.add(sig)
            targets.append({"type": "bark", "value": k})

    ntfy = cfg.get("ntfy", {})
    ntfy_raw = _split_multi(ntfy.get("topics")) + _split_multi(ntfy.get("topic", ""))
    for t in ntfy_raw:
        t = (t or "").strip().strip("/")
        if t.startswith("http"):
            t = t.split("/")[-1]  # 填了整条 ntfy.sh/topic 时截 topic
        if not t or t.startswith("在此"):
            continue
        sig = ("ntfy", t)
        if sig not in seen:
            seen.add(sig)
            targets.append({"type": "ntfy", "value": t})

    return targets


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

    targets = collect_targets(cfg)
    bark_server = cfg.get("bark", {}).get("server", "https://api.day.app").rstrip("/")
    ntfy_server = cfg.get("ntfy", {}).get("server", "https://ntfy.sh").rstrip("/")
    page_url = cfg.get("github_pages", {}).get("page_url", "")
    has_page = bool(page_url) and not page_url.startswith("https://你的")

    if not targets:
        print("ERR_NO_TARGET: 没有任何推送目标。请填 bark.key/keys（iOS）或 ntfy.topic/topics（安卓）")
        return

    # 标题/正文：命令行优先，否则自动提取
    title, body = extract_summary()
    if "--title" in sys.argv:
        title = sys.argv[sys.argv.index("--title") + 1]
    if "--body" in sys.argv:
        body = sys.argv[sys.argv.index("--body") + 1]

    ok, fail = 0, 0
    for tg in targets:
        ttype, val = tg["type"], tg["value"]
        masked = val[:4] + "***"
        try:
            if ttype == "bark":
                # Bark：https://server/key/标题/正文?url=跳转
                seg_t = urllib.parse.quote(title, safe="")
                seg_b = urllib.parse.quote(body, safe="")
                params = {"group": "情报站", "icon": "https://api.day.app/assets/icon.png"}
                if has_page:
                    params["url"] = page_url
                url = f"{bark_server}/{val}/{seg_t}/{seg_b}?{urllib.parse.urlencode(params)}"
                req = urllib.request.Request(url, headers={"User-Agent": "intel-notify/1.0"})
                with urllib.request.urlopen(req, timeout=15) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
                good = data.get("code") == 200
            else:
                # ntfy：POST 到 server/topic，标题/优先级/点击跳转走 HTTP 头
                # 头里不能直接放中文/非 ASCII，用 RFC2047 编码标题，正文放 body。
                url = f"{ntfy_server}/{val}"
                headers = {
                    "User-Agent": "intel-notify/1.0",
                    "Title": _encode_header(title),
                    "Priority": "default",
                    "Tags": "newspaper",
                }
                if has_page:
                    headers["Click"] = page_url
                req = urllib.request.Request(
                    url, data=body.encode("utf-8"), headers=headers, method="POST")
                with urllib.request.urlopen(req, timeout=15) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
                good = bool(data.get("id"))  # ntfy 成功返回消息 id

            if good:
                ok += 1
                print(f"PUSH_OK [{ttype}:{masked}]: {title} | {body}")
            else:
                fail += 1
                print(f"PUSH_FAIL [{ttype}:{masked}]: {data}")
        except Exception as e:
            fail += 1
            print(f"PUSH_ERR [{ttype}:{masked}]: {e}")

    print(f"PUSH_SUMMARY: 共 {len(targets)} 个目标，成功 {ok}，失败 {fail}")
    if not has_page:
        print("WARN_NO_PAGE_URL: 已推送但未带跳转链接（page_url 还没填，点开横幅不会跳网页）")


if __name__ == "__main__":
    main()
