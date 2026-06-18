# -*- coding: utf-8 -*-
"""
X 登录脚本：弹出真实可见的 Chromium 窗口，由用户手动登录 X。
登录态用 persistent context 存到本地 user-data 目录，下次抓取直接复用，免重复登录。
脚本全程不触碰、不记录账号密码——只在登录成功后保存浏览器自己的会话 cookie。
"""
import sys
import time
from pathlib import Path

from playwright.sync_api import sync_playwright

BASE = Path(__file__).parent
USER_DATA_DIR = BASE / "x-userdata"   # 持久化登录态目录（本地，不上传）


def is_logged_in(page) -> bool:
    """检测是否已登录：已登录时左侧导航有 '发帖/Post' 等只有登录后才出现的入口。"""
    try:
        # 已登录态：存在 compose / tweet 按钮，或 account switcher
        for sel in [
            '[data-testid="SideNav_NewTweet_Button"]',
            '[aria-label="Post"]',
            '[data-testid="AppTabBar_Profile_Link"]',
            '[data-testid="SideNav_AccountSwitcher_Button"]',
        ]:
            if page.locator(sel).count() > 0:
                return True
    except Exception:
        pass
    return False


def main():
    USER_DATA_DIR.mkdir(parents=True, exist_ok=True)
    print(f"[login] 登录态目录: {USER_DATA_DIR}")

    with sync_playwright() as p:
        ctx = p.chromium.launch_persistent_context(
            user_data_dir=str(USER_DATA_DIR),
            headless=False,                 # 关键：弹出真实可见窗口
            viewport={"width": 1280, "height": 900},
            args=["--disable-blink-features=AutomationControlled"],
            locale="en-US",
        )
        page = ctx.pages[0] if ctx.pages else ctx.new_page()

        print("[login] 打开 x.com ...")
        page.goto("https://x.com/home", wait_until="domcontentloaded", timeout=60000)
        time.sleep(3)

        if is_logged_in(page):
            print("[login] 检测到已是登录状态，无需重复登录。")
            print("LOGIN_OK")
            ctx.close()
            return

        # 跳到登录页
        try:
            page.goto("https://x.com/i/flow/login", wait_until="domcontentloaded", timeout=60000)
        except Exception:
            pass

        print("=" * 60)
        print("请在弹出的浏览器窗口中手动登录你的 X 账号。")
        print("（账号密码直接输入 X 官方登录页，脚本不会读取也不会保存密码）")
        print("脚本会自动检测登录成功，最多等待 5 分钟。")
        print("=" * 60)

        # 轮询检测登录成功，最多 5 分钟
        deadline = time.time() + 300
        while time.time() < deadline:
            if is_logged_in(page):
                print("[login] 登录成功，会话已保存到本地。")
                time.sleep(2)
                print("LOGIN_OK")
                ctx.close()
                return
            time.sleep(3)

        print("[login] 等待超时，未检测到登录成功。请重试。")
        print("LOGIN_TIMEOUT")
        ctx.close()


if __name__ == "__main__":
    main()
