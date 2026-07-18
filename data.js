// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月18日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE Expanse体积工作流教程</em> / <em>Godot极地生存游戏动画</em> / <em>B社确认多个辐射项目</em>。其余按重要性自动排序，红色优先。",
  "channels": [
    {
      "key": "x",
      "name": "X 动态",
      "color": "#8a4fb0",
      "desc": "你关注的大佬 · 近期本人发布"
    },
    {
      "key": "tech",
      "name": "游戏技术",
      "color": "#6a52a3",
      "desc": "虚幻 / 实时渲染 / 美术工作流"
    },
    {
      "key": "flow",
      "name": "TA 工作流",
      "color": "#b06a2e",
      "desc": "Tech-Artists 论坛 · 工具/管线实操"
    },
    {
      "key": "biz",
      "name": "游戏行业",
      "color": "#3f8a6e",
      "desc": "工作室 / 商业 / 发行"
    },
    {
      "key": "gfx",
      "name": "图形学前沿",
      "color": "#2f7d8a",
      "desc": "arXiv / SIGGRAPH 论文"
    },
    {
      "key": "ai",
      "name": "AI 技术",
      "color": "#3b6fb0",
      "desc": "仅保留与游戏/实时/3D 相关"
    }
  ],
  "cards": [
    {
      "cat": "x",
      "imp": "hi",
      "title": "单图生成完整3D几何",
      "sum": "World Tracing：输入一张图，物体/场景/动态世界以完整几何浮现，每点追溯回像素。",
      "ta": "原文是单图到完整3D几何的生成，若稳定，对快速搭场景白模和资产原型有直接价值。",
      "handle": "@BenMildenhall",
      "who": "Ben Mildenhall · 06-12",
      "url": "https://x.com/HaoZhang623/status/2065455226791002472"
    },
    {
      "cat": "x",
      "imp": "hi",
      "title": "World Labs连发3篇3D论文",
      "sum": "NeRF 一作放出三篇用大规模生成模型加 2D 先验生成 3D 内容的研究。",
      "ta": "原文是文生3D/重建的最新一手研究，直接对应你关注的资产生成方向，值得追原项目页。",
      "handle": "@BenMildenhall",
      "who": "Ben Mildenhall · 06-12",
      "url": "https://x.com/theworldlabs/status/2065466830052098058"
    },
    {
      "cat": "x",
      "imp": "hi",
      "title": "全AI生成可玩游戏",
      "sum": "Aaltonen 转发：100% AI 生成资产与玩法代码，一名无编程经验设计师约一周做成。",
      "ta": "原文讲的是单人用 AI 生成全套游戏资产+代码的实例，是生成式 AI 进生产管线的极端实证，值得看其边界。",
      "handle": "@SebAaltonen",
      "who": "Sebastian Aaltonen · 06-17",
      "url": "https://x.com/SebAaltonen/status/2067202311168954689"
    },
    {
      "cat": "x",
      "imp": "mid",
      "title": "Codex群驱动机器人研究",
      "sum": "Jim Fan 发布 ENPIRE：给 8 个 Codex agent 一队机器人加 GPU 和 token 预算自主解任务。",
      "ta": "原文是 AI agent 集群自主驱动真实机器人的实验，关注“AI 进开发/生产管线”的可看其调度思路。",
      "handle": "@DrJimFan",
      "who": "Jim Fan · 06-16",
      "url": "https://x.com/DrJimFan/status/2066921736369766762"
    },
    {
      "cat": "x",
      "imp": "mid",
      "title": "UE5 State Trees敌人生成",
      "sum": "Tom Looman 给开源项目 Orion 加了 C++ 加蓝图混合做的 State Trees 敌人生成总管。",
      "ta": "原文是 UE5 State Trees 的实操案例，做敌人波次/生成调度可直接对照他的开源实现。",
      "handle": "@t_looman",
      "who": "Tom Looman · 06-08",
      "url": "https://x.com/t_looman/status/2063965540297605174"
    },
    {
      "cat": "x",
      "imp": "lo",
      "title": "UE5两款AO插件上Fab",
      "sum": "Aaltonen 转发：HBAO+ 与 GT-VBAO 两款 UE5 环境光遮蔽插件上架 Fab，HBAO+ 个人免费。",
      "ta": "原文是两款 UE5 AO 插件发布消息，做场景近景细节/接触阴影时可收一条试用。",
      "handle": "@SebAaltonen",
      "who": "转发 · 06-17",
      "url": "https://x.com/ymt3d/status/2067067075584229831"
    },
    {
      "cat": "x",
      "imp": "lo",
      "title": "Gemini视频模型登顶Arena",
      "sum": "转发：Gemini Omni Flash 在 Video Arena 文生/图生视频双榜登顶，大幅领先 Veo。",
      "ta": "原文是转发的榜单信息，视频生成模型迭代速度可作为“AI 生成素材”能力上限的参照。",
      "handle": "@poolio",
      "who": "转发 · 06-11",
      "url": "https://x.com/arena/status/2065112147093545333"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE Expanse体积工作流教程",
      "sum": "Reza Sarkamari发布视频教程，讲解Unreal Engine中Expanse体积效果工作流。",
      "ta": "可学习Expanse插件在UE中实现云、雾等体积特效的完整流程。",
      "src": "80 Level · 07-18",
      "url": "https://80.lv/articles/check-out-this-tutorial-on-expanse-workflow-in-unreal-engine/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Godot极地生存游戏动画",
      "sum": "Frost Kin是一款Godot引擎开发的极地生存冒险游戏，展示超现实动画。",
      "ta": "Godot引擎在动画表现上的进展可作为参考，但非UE直接相关。",
      "src": "80 Level · 07-18",
      "url": "https://80.lv/articles/surreal-animations-from-an-arctic-survival-game-made-in-godot/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "B社确认多个辐射项目",
      "sum": "Bethesda确认辐射3/新维加斯重制版及Obsidian新辐射游戏，老滚6仍是重点。",
      "ta": "辐射IP重制可能带动UE5或自研引擎的渲染管线需求，但无直接技术细节。",
      "src": "80 Level · 07-17",
      "url": "https://80.lv/articles/bethesda-confirms-multiple-fallout-projects-including-remasters-and-new-obsidian-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "蜘蛛机甲后末日游戏",
      "sum": "一款玩家操控蜘蛛状机甲的后末日游戏发布。",
      "ta": "游戏概念有趣，但无技术或工作流参考价值。",
      "src": "80 Level · 07-17",
      "url": "https://80.lv/articles/in-this-game-you-ll-be-a-spider-like-mech-navigating-a-post-apocalyptic-world/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "15年游戏合作经验分享",
      "sum": "ZiMAD首席BD官分享15年游戏合作经验，聚焦玩家信任与快速变革。",
      "ta": "商业经验分享，对TA工作流无直接帮助。",
      "src": "80 Level · 07-17",
      "url": "https://80.lv/articles/what-15-years-of-game-partnerships-taught-me/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Epic与Google和解安卓商店",
      "sum": "Epic与Google达成和解，第三方应用商店即将登陆Android。",
      "ta": "平台生态变化可能影响游戏分发，但非技术相关。",
      "src": "80 Level · 07-17",
      "url": "https://80.lv/articles/epic-games-google-withdraw-settlement-third-party-app-stores-are-coming-to-android/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "ZA/UM工作室裁员32人",
      "sum": "ZA/UM在发布新作两个月后裁员最多32人，称艺术标准不变。",
      "ta": "行业裁员新闻，无技术参考价值。",
      "src": "Game Developer · 07-17",
      "url": "https://www.gamedeveloper.com/business/za-um-studios-to-lay-off-up-to-32-workers-two-months-after-releasing-zero-parades-for-dead-spies"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Todd Howard确认与Obsidian合作",
      "sum": "辐射总监Todd Howard确认与Obsidian合作开发新辐射游戏。",
      "ta": "辐射新作可能采用UE5或自研引擎，但无具体技术细节。",
      "src": "Game Developer · 07-17",
      "url": "https://www.gamedeveloper.com/business/todd-howard-says-the-timing-is-right-for-a-collaboration-with-obsidian"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "工会挑战Xbox等业界动态",
      "sum": "工会挑战Xbox、GameStop CEO称实体游戏销售无关紧要、Glen Schofield退休。",
      "ta": "行业综合新闻，无技术或工作流参考价值。",
      "src": "Game Developer · 07-17",
      "url": "https://www.gamedeveloper.com/business/labor-unions-challenge-xbox-gamestop-ceo-says-physical-game-sales-are-irrelevant-and-glen-schofield-retires-patch-notes-61"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "交互世界模型作为游戏引擎",
      "sum": "论文提出将交互世界模型重新构想为游戏引擎，从像素到状态。",
      "ta": "可能影响未来游戏AI驱动的动态世界生成，需关注其与实时渲染的接口。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.14076"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "非对称3D高斯泼溅长序列建模",
      "sum": "AsySplat提出高效非对称3D高斯泼溅方法，用于长序列场景建模。",
      "ta": "3DGS新变体，可能提升大规模场景重建效率，对程序化生成有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.10995"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "NVIDIA",
      "PlayStation Blog",
      "AMD GPUOpen",
      "arXiv · cs.GR",
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Unreal Engine、Blender 开发博客。"
  },
  "xStale": false
};
