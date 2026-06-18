# -*- coding: utf-8 -*-
"""
发布脚本：链路最后一步。

页面已做骨架(index.html)/数据(data.js)分离。归档时把二者合成一个
自包含单文件，使历史日报被「冻结」——不会被次日新的 data.js 覆盖，
且双击即可查看（不依赖同目录 data.js）。

1. 读 index.html，把 <script src="data.js"> 替换为当天 data.js 的内联内容
   → 写出 archive/YYYY-MM-DD.html（自包含快照）
2. 用系统默认浏览器自动打开当天「实时」页面 index.html

用法：
    python publish.py            # 归档 + 打开
    python publish.py --no-open  # 只归档不打开
"""
import sys
import re
import webbrowser
from pathlib import Path
from datetime import datetime

BASE = Path(__file__).parent
INDEX = BASE / "index.html"
DATA = BASE / "data.js"
ARCHIVE_DIR = BASE / "archive"


def build_self_contained(html: str, data_js: str) -> str:
    """把外链 <script src="data.js"></script> 替换成内联脚本，生成自包含快照。"""
    inline = "<script>\n" + data_js + "\n</script>"
    # 匹配 <script src="data.js"></script>（容忍属性顺序/空格差异）
    pattern = re.compile(r'<script[^>]*\bsrc\s*=\s*["\']data\.js["\'][^>]*>\s*</script>', re.I)
    # 用替换函数（lambda 返回常量）而非替换字符串，避免 data.js 中的 \u 等
    # 反斜杠序列被 re 当成替换模板里的转义而报 bad escape。
    new_html, n = pattern.subn(lambda m: inline, html)
    if n == 0:
        # 没匹配到外链（可能已是内联版），原样归档，避免丢数据
        print("WARN_NO_DATA_SCRIPT_TAG")
        return html
    return new_html


def main():
    if not INDEX.exists():
        print("ERR_NO_INDEX")
        return

    ARCHIVE_DIR.mkdir(exist_ok=True)
    today = datetime.now().strftime("%Y-%m-%d")
    dated = ARCHIVE_DIR / f"{today}.html"

    html = INDEX.read_text(encoding="utf-8")
    if DATA.exists():
        data_js = DATA.read_text(encoding="utf-8")
        snapshot = build_self_contained(html, data_js)
    else:
        print("WARN_NO_DATA_JS")
        snapshot = html

    # 归档自包含快照：冻结当天内容，便于回看历史日报
    dated.write_text(snapshot, encoding="utf-8")
    print(f"ARCHIVED={dated}")

    # 自动打开当天「实时」页面（默认浏览器）
    if "--no-open" not in sys.argv:
        url = INDEX.resolve().as_uri()
        webbrowser.open(url)
        print(f"OPENED={url}")

    print("PUBLISH_DONE")


if __name__ == "__main__":
    main()
