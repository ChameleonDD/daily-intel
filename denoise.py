# -*- coding: utf-8 -*-
"""
denoise.py —— 调便宜 API（DeepSeek，OpenAI 兼容接口）做降噪。

把 fetch_sources.py 预筛后的 items，按「碎片知识吸收媒介-科学设计规则」
压成卡片数组（title≤12中文字 / sum≤40字 / ta 只复述原文 / imp 三级 / cat 频道 / rank 置顶）。

替代「WorkBuddy agent 现场读全文」这一环 —— 这是唯一原本绑 WorkBuddy 的步骤。

API key 从环境变量 DEEPSEEK_API_KEY 读（GitHub Actions 用 Secrets 注入；
本机测试可临时 set DEEPSEEK_API_KEY=...）。

用法：
    cards = denoise(items)             # 作为模块被 run.py 调用
    python denoise.py < items.json     # 调试：从 stdin 读 items
"""
import os
import sys
import json
import re

try:
    import requests
except ImportError:
    requests = None

API_BASE = os.environ.get("DEEPSEEK_API_BASE", "https://api.deepseek.com")
API_KEY = os.environ.get("DEEPSEEK_API_KEY", "").strip()
MODEL = os.environ.get("DEEPSEEK_MODEL", "deepseek-chat")
TIMEOUT = 120

# --------------------------------------------------------------------------
# 系统提示词：把认知科学规则 + TA 视角 + 字段约束固化进 prompt
# 这段就是当初「WorkBuddy agent 现场做降噪」时遵循的规则，搬进 API。
# --------------------------------------------------------------------------
SYSTEM_PROMPT = """你是一名资深技术美术（TA）的私人情报降噪助手。你的读者是一名腾讯 3A 游戏技术美术/特效师，方向是植被工具、程序化生成、UE5 渲染管线、材质/Shader 性能、Niagara 流体特效。

任务：把我给你的一批英文资讯（标题+摘要+来源），筛选并改写成中文「科学卡片」数组。严格遵守以下规则：

【筛选】
- 只保留与 游戏 / 虚幻引擎 / 实时渲染 / 图形学 / TA工作流 / 3D生成 真正相关的条目。
- 纯泛 AI、纯商业八卦、招聘、促销一律丢弃。
- AI 类条目：只保留原文真实提到游戏/实时/3D/引擎关联的，绝不脑补延伸。

【每张卡片字段】
- cat：频道，取值只能是 tech(游戏技术) / flow(TA工作流) / biz(游戏行业) / gfx(图形学前沿) / ai(AI技术) 之一。
- imp：重要性，"hi"=必须停下精读(重大引擎发版/与本职强相关的硬核突破) / "mid"=值得关注 / "lo"=速览即可。
- rank：可选。仅给当天最重磅的 1-3 条填 1/2/3（数字越小越靠前），且这些卡必须 imp="hi"。重大引擎版本发布、行业地震级新闻才配 rank。其余卡片绝对不要填 rank。
- title：中文标题，断言式，≤12 个中文字。
- sum：一句话中文摘要，≤40 字，只说原文事实。
- ta：TA 视角的一句话，说明「这条对一名 TA 意味着什么/值得看什么」，只能基于原文已有信息，绝不脑补不存在的关联。
- src：原样回填我给你的来源串（如 "80 Level · 06-17"）。
- url：原样回填我给你的链接。

【输出格式】
- 只输出一个 JSON 数组，不要任何解释、不要 markdown 代码块围栏。
- 数组元素就是卡片对象。条数控制在 18-26 张，宁缺毋滥。
- 同一事件多源报道只留一张。
"""


def _build_user_msg(items):
    lines = ["以下是今天预筛后的资讯，请按规则降噪成卡片 JSON 数组：\n"]
    for i, it in enumerate(items, 1):
        date = (" · " + it["date"]) if it.get("date") else ""
        lines.append("【%d】来源:%s%s" % (i, it.get("src", ""), date))
        lines.append("标题:%s" % it.get("title", ""))
        if it.get("summary"):
            lines.append("摘要:%s" % it.get("summary", "")[:300])
        lines.append("链接:%s" % it.get("url", ""))
        lines.append("")
    return "\n".join(lines)


def _extract_json_array(text):
    """从模型输出里抠出 JSON 数组（容错代码块围栏/前后废话）。"""
    text = text.strip()
    text = re.sub(r"^```(?:json)?", "", text).strip()
    text = re.sub(r"```$", "", text).strip()
    start = text.find("[")
    end = text.rfind("]")
    if start == -1 or end == -1:
        raise ValueError("模型输出里找不到 JSON 数组")
    return json.loads(text[start:end + 1])


def denoise(items):
    """主入口：items -> cards（list of dict）。"""
    if not API_KEY:
        raise RuntimeError(
            "未设置 DEEPSEEK_API_KEY。\n"
            "  本机测试：set DEEPSEEK_API_KEY=你的key（Windows）\n"
            "  GitHub Actions：在仓库 Settings→Secrets 添加 DEEPSEEK_API_KEY")
    if requests is None:
        raise RuntimeError("requests 未安装：pip install requests")
    if not items:
        return []

    payload = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": _build_user_msg(items)},
        ],
        "temperature": 0.3,
        "max_tokens": 4000,
    }
    r = requests.post(
        API_BASE.rstrip("/") + "/v1/chat/completions",
        headers={"Authorization": "Bearer " + API_KEY,
                 "Content-Type": "application/json"},
        json=payload, timeout=TIMEOUT)
    r.raise_for_status()
    content = r.json()["choices"][0]["message"]["content"]
    cards = _extract_json_array(content)

    # 兜底清洗：确保字段齐、imp 合法、rank 只在 hi 上
    clean = []
    for c in cards:
        if not c.get("title"):
            continue
        if c.get("imp") not in ("hi", "mid", "lo"):
            c["imp"] = "mid"
        if "rank" in c and (c.get("imp") != "hi"):
            c.pop("rank", None)
        if c.get("cat") not in ("tech", "flow", "biz", "gfx", "ai"):
            c["cat"] = "tech"
        # 字段缺失兜底：sum/ta/src/url 任一缺失都补成安全值，
        # 避免页面渲染出 "undefined"。sum 缺失时降级用 title 兜底。
        for k in ("sum", "ta", "src", "url"):
            v = c.get(k)
            if v is None or (isinstance(v, str) and v.strip().lower() in ("", "undefined", "null")):
                c[k] = c.get("title", "") if k == "sum" else ""
        clean.append(c)
    return clean


if __name__ == "__main__":
    raw = sys.stdin.read()
    data = json.loads(raw)
    items = data.get("items", data) if isinstance(data, dict) else data
    cards = denoise(items)
    print(json.dumps(cards, ensure_ascii=False, indent=2))
