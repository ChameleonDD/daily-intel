// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月26日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE5悬浮载具场景制作拆解</em> / <em>Demogorgon皮肤材质Lookdev复盘</em> / <em>小体型角色巨武器动画拆解</em>。其余按重要性自动排序，红色优先。",
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
      "rank": 2,
      "title": "Looman加Nanite优化课",
      "sum": "Tom Looman 给优化课新增两节 Nanite 课：拆解 kitbash 网格 overdraw 与 500 个空 Shading Bin 修复。",
      "ta": "原文是 Nanite VisBuffer/overdraw 与 Shading Bin 优化实战，与你正在做的 Nanite A/B 性能对比直接相关。",
      "handle": "@t_looman",
      "who": "Tom Looman · 06-25",
      "url": "https://x.com/t_looman/status/2070126139482247654"
    },
    {
      "cat": "x",
      "imp": "hi",
      "title": "UE5.8正式发布带AI集成",
      "sum": "UE5.8 上线，终端内 Claude/Codex 经 MCP 全控编辑器，可摆放道具、程序化生成城市、调灯光。",
      "ta": "原文是 UE5.8 发布及 AI 接入编辑器，含程序化生成与 MCP 控制，与你用 MCP 跑 UE 工作流直接相关。",
      "handle": "@SebAaltonen",
      "who": "转发 · 06-17",
      "url": "https://x.com/Grummz/status/2067322819814527179"
    },
    {
      "cat": "x",
      "imp": "hi",
      "title": "UE5.8实验性网格地形",
      "sum": "UE5.8 新增实验性 Mesh Terrain，不再受限高度图，支持世界分区流送与协作分块。",
      "ta": "原文是 UE5.8 Mesh Terrain 实验特性，摆脱 heightfield 限制，与你的地形导入/植被填充管线直接相关。",
      "handle": "@SebAaltonen",
      "who": "转发 · 06-17",
      "url": "https://x.com/UnrealEngine/status/2067249231887225179"
    },
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
      "imp": "mid",
      "title": "World Labs放三篇3D生成",
      "sum": "Ben Mildenhall 团队一次分享三篇新论文，借大规模生成模型与 2D 先验生成 3D 内容。",
      "ta": "原文是借 2D 先验做 3D 内容生成的三篇研究，与你关注的程序化/AI 辅助资产生成方向相关。",
      "handle": "@BenMildenhall",
      "who": "Ben Mildenhall · 06-12",
      "url": "https://x.com/theworldlabs/status/2065466830052098058"
    },
    {
      "cat": "x",
      "imp": "mid",
      "title": "Epic布道师呼吁设性能岗",
      "sum": "Ari Arnbjörnsson 在 Unreal Fest 见到职衔含 Performance 的人，呼吁工作室专设性能优化岗。",
      "ta": "原文是 Epic 布道师主张把性能优化制度化、贯穿研发全程，做引擎性能调优时值得参考其团队配置观点。",
      "handle": "@flassari",
      "who": "Ari Arnbjörnsson · 06-24",
      "url": "https://x.com/flassari/status/2069690018059211176"
    },
    {
      "cat": "x",
      "imp": "mid",
      "title": "Codex群驱动机器人研究",
      "sum": "Jim Fan 发布 ENPIRE：给 8 个 Codex agent 一队机器人加 GPU 和 token 预算自主解任务。",
      "ta": "原文是 AI agent 集群自主驱动真实机器人的实验，关注 AI 进开发/生产管线的可看其调度思路。",
      "handle": "@DrJimFan",
      "who": "Jim Fan · 06-16",
      "url": "https://x.com/DrJimFan/status/2066921736369766762"
    },
    {
      "cat": "x",
      "imp": "lo",
      "title": "Gemini视频模型登顶Arena",
      "sum": "Gemini Omni Flash 在 Video Arena 文生/图生视频双榜登顶，文生视频大幅领先 Veo 3.1。",
      "ta": "原文是视频生成模型榜单更新，视频生成迭代速度可作为 AI 生成素材能力上限的参照。",
      "handle": "@poolio",
      "who": "Ben Poole · 06-11",
      "url": "https://x.com/arena/status/2065112147093545333"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5悬浮载具场景制作拆解",
      "sum": "作者分享基于《黑客帝国觉醒》UE5场景的悬浮载具飞行模拟制作流程与散热方案。",
      "ta": "可参考其UE5场景搭建思路与PC散热应对，适合植被/程序化场景的TA借鉴大场景性能取舍。",
      "src": "80 Level · 09-25",
      "url": "https://80.lv/articles/how-to-create-futuristic-hovercraft-flight-simulator-inspired-by-matrix/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Demogorgon皮肤材质Lookdev复盘",
      "sum": "作者复盘《怪奇物语》Demogorgon的薄苍白黏液皮肤材质，强调位移不等于真实感。",
      "ta": "对材质/Shader TA有直接参考：位移与光照配合的写实皮肤lookdev思路。",
      "src": "80 Level · 09-25",
      "url": "https://80.lv/articles/exploring-thin-pale-slimy-skin-texture-by-recreating-the-demogorgon-from-stranger-things/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "小体型角色巨武器动画拆解",
      "sum": "以《Moss: Book 2》为例讲解小角色持巨型双手武器时如何保持清晰剪影。",
      "ta": "动画剪影可读性思路对角色/特效表现有借鉴，非核心TA方向。",
      "src": "80 Level · 09-25",
      "url": "https://80.lv/articles/breakdown-animating-tiny-character-with-massive-two-handed-weapon/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "狐娘巨剑连招动画展示",
      "sum": "展示狐娘角色巨剑连招动画，强调重量感与运动节奏。",
      "ta": "速览级动画参考，重量感表现可借鉴到特效节奏设计。",
      "src": "80 Level · 09-25",
      "url": "https://80.lv/articles/fox-girl-s-powerful-giant-sword-combo-attack-animation/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "1940年杂志广告实为2D矢量动画",
      "sum": "一则1940年《Life》杂志广告实为2D矢量动画制作。",
      "ta": "与游戏TA工作流关联弱，速览即可。",
      "src": "80 Level · 09-25",
      "url": "https://80.lv/articles/this-1940-life-magazine-ad-is-actually-2d-vector-animation/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "留存玩家才是增长关键",
      "sum": "Adikteev观点：游戏增长最大杠杆不是新增安装，而是早期识别流失并召回玩家。",
      "ta": "偏运营增长，与TA本职关联弱，速览。",
      "src": "80 Level · 09-25",
      "url": "https://80.lv/articles/the-players-you-already-have-are-your-biggest-growth-opportunity/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《皇牌空战8》改用第一人称叙事",
      "sum": "Project Aces在《皇牌空战8》中改变叙事方式，以第一人称讲述更私人的故事。",
      "ta": "偏叙事设计，与TA技术方向关联弱。",
      "src": "PlayStation Blog · 09-25",
      "url": "https://blog.playstation.com/2026/09/25/how-ace-combat-8-wings-of-theve-uses-first-person-to-tell-a-more-personal-story/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS博客本周精选与播客",
      "sum": "PlayStation官方播客第548期回顾九月发售游戏，另有《金刚狼》截图精选。",
      "ta": "纯社区/营销内容，无技术信息。",
      "src": "PlayStation Blog · 09-25",
      "url": "https://blog.playstation.com/2026/09/25/official-playstation-podcast-episode-548-september-selects/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "编码智能体用于任务与运动规划",
      "sum": "论文提出用编码智能体解决广义任务与运动规划问题。",
      "ta": "原文未提及游戏/实时/3D引擎关联，仅作AI方向速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.30233"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "音视频联合生成的扩散强化学习",
      "sum": "AV-GRPO提出模态锚定解耦的扩散强化学习方法，用于音视频联合生成。",
      "ta": "原文未提及游戏/实时引擎关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.29816"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "Unreal Engine",
      "NVIDIA",
      "PlayStation Blog",
      "AMD GPUOpen",
      "arXiv · cs.GR",
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Blender 开发博客、Tech-Artists。"
  },
  "xStale": false
};
