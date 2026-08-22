// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月22日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>物理模拟剑斗游戏</em> / <em>真实服装扫描工作流</em> / <em>HTML5游戏转独立网站</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "tech",
      "imp": "mid",
      "title": "物理模拟剑斗游戏",
      "sum": "独立开发者用物理模拟武器实现第一人称近战，碰撞反弹锁定偏转全实时。",
      "ta": "关注物理武器交互与玩家操控的实时反馈，对战斗手感设计有参考价值。",
      "src": "80 Level · 08-21",
      "url": "https://80.lv/articles/this-first-person-sword-fighting-game-s-combat-is-100-physics-based/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "真实服装扫描工作流",
      "sum": "Render Ready用真实服装扫描替代数字布料模拟，配合自定义可摆姿势模特。",
      "ta": "了解实拍扫描在角色服装制作中的流程，可能提升资产真实度与效率。",
      "src": "80 Level · 08-21",
      "url": "https://80.lv/articles/building-a-hero-garment-from-real-world-data/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "HTML5游戏转独立网站",
      "sum": "Playgama Wrap免费服务将HTML5游戏转为带支付、分析、SEO的独立网站。",
      "ta": "对游戏分发渠道有影响，但技术含量低，可速览。",
      "src": "80 Level · 08-21",
      "url": "https://80.lv/articles/this-free-tool-turns-html5-games-into-full-standalone-websites/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "黑神话钟馗实机预告",
      "sum": "《黑神话：钟馗》发布15分钟实机预告，画面表现优于前作《悟空》。",
      "ta": "关注国产3A画面表现趋势，但非技术细节，速览即可。",
      "src": "80 Level · 08-21",
      "url": "https://80.lv/articles/see-what-black-myth-zhong-kui-brings-in-15-minute-gameplay-trailer/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rusty Lake新作开发访谈",
      "sum": "Rusty Lake联合创始人谈新作《Servant of the Lake》的谜题设计与世界观。",
      "ta": "了解解谜游戏设计思路，对关卡设计有启发，但非硬核技术。",
      "src": "80 Level · 08-21",
      "url": "https://80.lv/articles/puzzles-lore-inspiration-get-glimpse-of-rusty-lake-development/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "GTA6泄密事件升级",
      "sum": "Take-Two传唤微软和Discord，以阻止GTA VI大规模泄密，泄密者或持有可玩版本。",
      "ta": "行业安全事件，对游戏开发保密流程有警示，但非技术内容。",
      "src": "Game Developer · 08-21",
      "url": "https://www.gamedeveloper.com/business/rockstar-subpoenas-microsoft-and-discord-in-bid-to-halt-extensive-grand-theft-auto-vi-leak"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "游戏AI价值讨论",
      "sum": "开发者David 'Rez' Graham和Luke Dicken讨论AI技术及其在游戏开发中的价值。",
      "ta": "关注游戏AI技术应用与工作本质的讨论，对AI在游戏中的定位有参考。",
      "src": "Game Developer · 08-21",
      "url": "https://www.gamedeveloper.com/programming/we-re-finally-talking-about-ai-ft-david-rez-graham-and-luke-dicken"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "使命召唤现代战争4详情",
      "sum": "COD Next展示《现代战争4》多人模式、地图、武器、战区等新内容，并公布Beta测试。",
      "ta": "了解主流FPS多人模式设计，但非技术细节，速览即可。",
      "src": "PlayStation Blog · 08-21",
      "url": "https://blog.playstation.com/2026/08/21/call-of-duty-modern-warfare-4-new-multiplayer-and-early-access-beta-details/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Tails of Iron 2免费扩展",
      "sum": "《Tails of Iron 2》免费扩展包上线，新增11个任务、10个Boss和9套护甲。",
      "ta": "游戏内容更新，无技术参考价值。",
      "src": "PlayStation Blog · 08-21",
      "url": "https://blog.playstation.com/2026/08/21/tails-of-iron-2-blood-brine-free-expansion/"
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
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Blender 开发博客。"
  },
  "xStale": false
};
