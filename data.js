// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月10日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>模块化灯塔场景制作解析</em> / <em>PS1与N64模型资产免费归档</em> / <em>节奏RPG十年三次重做</em>。其余按重要性自动排序，红色优先。",
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
      "title": "模块化灯塔场景制作解析",
      "sum": "作者分享可平铺材质、材质平滑过渡技巧，及手工雕刻植物图集做风格化植被。",
      "ta": "植被图集+可平铺材质混合方案，对程序化植被工具与风格化场景搭建有直接参考价值。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/how-to-build-an-atmospheric-stylized-lighthouse-scene-with-a-custom-modular-set/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "PS1与N64模型资产免费归档",
      "sum": "Pardall Games 建立 PS1、N64 时代 3D 模型与游戏资产的免费在线存档库。",
      "ta": "低模资产可作风格化参考或复古项目素材来源，注意版权与授权范围。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/free-online-archive-of-ps1-n64-3d-models-game-assets/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "节奏RPG十年三次重做",
      "sum": "Nocturne 开发者讲述十年开发中三次重做，及战斗、工具、像素美术与现场管弦乐制作。",
      "ta": "长周期小团队的工具与美术迭代复盘，可速览其战斗与工具链取舍。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/this-rhythm-rpg-was-rebuilt-three-times-during-its-10-year-development/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏长线运营靠主动运维",
      "sum": "文章称平稳的游戏上线并非运气，而是发布前长期准备工作的结果。",
      "ta": "偏运维与发布流程，与TA日常关联弱，速览即可。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/proactive-not-reactive-24-years-of-keeping-games-online/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "目标导向视频世界模型",
      "sum": "WorldGuide 提出面向程序化任务执行的目标导向视频世界模型。",
      "ta": "世界模型若用于任务序列生成，或可启发程序化生成与工具自动化，但需确认实时性。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12459"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型推测解码加速",
      "sum": "SpecFold 通过折叠多分支冗余，加速扩散语言模型的推测解码。",
      "ta": "推理加速方向，与实时渲染管线无直接关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.04875"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多任务强化学习GPU并行框架",
      "sum": "提出面向异构多任务强化学习的 GPU 并行框架。",
      "ta": "训练框架类论文，未提及游戏或实时渲染，关联度低。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.03335"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "仿真合成企业数据",
      "sum": "通过可扩展的智能体-系统交互仿真，生成连贯的企业数据。",
      "ta": "纯数据合成方向，与游戏/实时渲染无关，建议丢弃。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.10549"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS官方播客第550期",
      "sum": "PlayStation 官方播客回归，聊近期通关游戏、新冒险与听众来信。",
      "ta": "纯播客内容，无技术信息，速览即可。",
      "src": "PlayStation Blog · 10-09",
      "url": "https://blog.playstation.com/2026/10/09/official-playstation-podcast-episode-550-now-this-is-podcasting/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "雅达利800XL复刻开售",
      "sum": "雅达利 1980 年代经典电脑 800XL 回归，支持现代显示并内置 25 款游戏。",
      "ta": "怀旧硬件新闻，与TA工作无关，速览即可。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/atari-s-iconic-1980s-computer-is-back-available-for-purchase/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "低多边形实体家居装饰",
      "sum": "荷兰法波设计师 Jonas Hejduk 为现实世界制作低多边形实体装饰资产。",
      "ta": "低模美术的跨界应用，趣味参考，与生产管线无关。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/this-real-life-low-resolution-interior-design-decor-turns-any-space-into-a-retro-game-scene/"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "Unreal Engine",
      "NVIDIA",
      "Blender 开发博客",
      "PlayStation Blog",
      "AMD GPUOpen",
      "arXiv · cs.GR",
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Tech-Artists。"
  },
  "xStale": false
};
