# -*- coding: utf-8 -*-
"""
X 抓取脚本：复用本地登录态，依次访问指定账号主页，提取最近推文。
- 慢节奏、模拟真人，降低风控风险
- 只抓公开主页时间线，输出结构化 JSON
- 抓不到的账号如实标注，绝不编造
"""
import json
import sys
import time
import random
from pathlib import Path
from datetime import datetime

from playwright.sync_api import sync_playwright

BASE = Path(__file__).parent
USER_DATA_DIR = BASE / "x-userdata"
ACCOUNTS_FILE = BASE / "x-accounts.json"
OUT_FILE = BASE / "x-raw.json"

MAX_TWEETS_PER_ACCOUNT = 5      # 每人最多取几条
SCROLL_TIMES = 3                # 主页下滚次数（拉更多推文进 DOM）


def human_pause(a=1.5, b=3.5):
    time.sleep(random.uniform(a, b))


def is_logged_in(page) -> bool:
    for sel in [
        '[data-testid="SideNav_NewTweet_Button"]',
        '[data-testid="SideNav_AccountSwitcher_Button"]',
        '[data-testid="AppTabBar_Profile_Link"]',
    ]:
        try:
            if page.locator(sel).count() > 0:
                return True
        except Exception:
            pass
    return False


def scrape_account(page, handle: str):
    """访问 https://x.com/<handle>，提取最近推文。返回 list[dict] 或 None(失败)。"""
    url = f"https://x.com/{handle}"
    tweets = []
    try:
        page.goto(url, wait_until="domcontentloaded", timeout=45000)
    except Exception as e:
        print(f"[scrape] {handle}: 打开失败 {e}")
        return None

    human_pause(2.5, 4.0)

    # 账号不存在 / 被改名
    body_txt = ""
    try:
        body_txt = page.locator("body").inner_text(timeout=5000)[:500]
    except Exception:
        pass
    if "This account doesn’t exist" in body_txt or "This account doesn't exist" in body_txt:
        print(f"[scrape] {handle}: 账号不存在（可能已改名）")
        return None

    # 下滚加载更多推文
    seen = set()
    for _ in range(SCROLL_TIMES):
        articles = page.locator("article[data-testid='tweet']")
        n = articles.count()
        for i in range(n):
            if len(tweets) >= MAX_TWEETS_PER_ACCOUNT:
                break
            art = articles.nth(i)
            try:
                # 推文正文
                txt_loc = art.locator("[data-testid='tweetText']")
                text = txt_loc.first.inner_text(timeout=2000) if txt_loc.count() > 0 else ""
                text = text.strip()
                if not text:
                    continue
                # 时间 + 链接
                ts = ""
                link = ""
                tl = art.locator("time")
                if tl.count() > 0:
                    ts = tl.first.get_attribute("datetime") or ""
                    # time 的父 a 标签带 status 链接
                    a = art.locator("a:has(time)")
                    if a.count() > 0:
                        href = a.first.get_attribute("href") or ""
                        if href:
                            link = "https://x.com" + href if href.startswith("/") else href
                key = link or text[:50]
                if key in seen:
                    continue
                seen.add(key)
                # 跳过置顶/转推噪音不易判断，保留原文即可
                tweets.append({
                    "text": text,
                    "datetime": ts,
                    "url": link,
                })
            except Exception:
                continue
        if len(tweets) >= MAX_TWEETS_PER_ACCOUNT:
            break
        page.mouse.wheel(0, 2200)
        human_pause(1.5, 2.8)

    print(f"[scrape] {handle}: 抓到 {len(tweets)} 条")
    return tweets


def main():
    if not ACCOUNTS_FILE.exists():
        print("ERR_NO_ACCOUNTS_FILE")
        return
    cfg = json.loads(ACCOUNTS_FILE.read_text(encoding="utf-8"))
    accounts = cfg.get("accounts", [])

    result = {
        "scraped_at": datetime.now().isoformat(timespec="seconds"),
        "session_ok": False,        # 登录态健康标记
        "ok": [],
        "failed": [],
    }

    with sync_playwright() as p:
        ctx = p.chromium.launch_persistent_context(
            user_data_dir=str(USER_DATA_DIR),
            headless=True,                  # 抓取阶段无头，更快更稳
            viewport={"width": 1280, "height": 1600},
            args=["--disable-blink-features=AutomationControlled"],
            locale="en-US",
        )
        page = ctx.pages[0] if ctx.pages else ctx.new_page()

        page.goto("https://x.com/home", wait_until="domcontentloaded", timeout=60000)
        human_pause(2, 3)
        if not is_logged_in(page):
            # 登录态失效：写出明确标记，让 runbook 据此走"用旧数据+提醒重登"分支
            result["session_ok"] = False
            OUT_FILE.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
            print("STALE_SESSION")   # 关键信号：登录态已过期，需用户重新登录
            ctx.close()
            return

        result["session_ok"] = True

        for acc in accounts:
            handle = acc["handle"]
            tweets = scrape_account(page, handle)
            if tweets is None:
                result["failed"].append({**acc, "reason": "打开失败或账号不存在"})
            elif len(tweets) == 0:
                result["failed"].append({**acc, "reason": "未提取到推文"})
            else:
                result["ok"].append({**acc, "tweets": tweets})
            human_pause(2.5, 5.0)   # 账号之间拉长间隔，降低风控

        ctx.close()

    OUT_FILE.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"SCRAPE_DONE ok={len(result['ok'])} failed={len(result['failed'])}")
    print(f"OUT={OUT_FILE}")


if __name__ == "__main__":
    main()
