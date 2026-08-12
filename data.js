// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月12日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>高斯雕刻实现可控表面重建</em> / <em>Amulet实现高频帧外推渲染</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "高斯雕刻实现可控表面重建",
      "sum": "3DGS新方法Gaussian Sculpting通过场优化实现端到端可控表面重建，解决几何误差难题。",
      "ta": "对依赖3DGS做扫描资产重建的TA，此法可显著提升表面精度与可控性，值得精读。",
      "src": "arXiv · cs.GR · 08-11",
      "url": "https://arxiv.org/abs/2608.10602v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "Amulet实现高频帧外推渲染",
      "sum": "新渲染法Amulet用稀疏分层场景表示与自适应着色，实现高频帧外推，优于重投影技术。",
      "ta": "对追求高帧率或VR体验的TA，此法可突破帧生成瓶颈，是渲染管线的重要参考。",
      "src": "arXiv · cs.GR · 08-11",
      "url": "https://arxiv.org/abs/2608.10423v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "物理野火模拟融入高斯场景",
      "sum": "WildFireGS在语义增强的高斯泼溅森林场景中实现基于物理的野火模拟，兼顾真实与规模。",
      "ta": "对做环境特效或程序化植被的TA，此方法展示了GS场景中物理模拟的集成路径。",
      "src": "arXiv · cs.GR · 08-11",
      "url": "https://arxiv.org/abs/2608.11100v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "GENEA挑战评估手势生成",
      "sum": "第四届GENEA挑战赛发布结果，大规模评估五个语音驱动手势生成系统在对话数据集上的表现。",
      "ta": "对关注NPC动画或程序化动作的TA，可了解当前语音驱动手势生成的技术水平。",
      "src": "arXiv · cs.GR · 08-11",
      "url": "https://arxiv.org/abs/2608.10839v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender几何节点制作蛛网龙卷",
      "sum": "艺术家Cartesian Caramel展示用Blender几何节点制作《蜘蛛侠》蛛网龙卷风效果。",
      "ta": "对使用程序化工具的TA，此案例是几何节点在复杂动态特效上的绝佳参考。",
      "src": "80 Level · 08-11",
      "url": "https://80.lv/articles/artist-shows-web-tornado-made-with-blender-geometry-nodes/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Three.js纯着色器构建外星生物",
      "sum": "开发者Drin展示在Three.js中完全用着色器数学构建的无网格外星生物。",
      "ta": "对WebGL或轻量级渲染的TA，此案例展示了纯Shader建模的极致技巧与思路。",
      "src": "80 Level · 08-11",
      "url": "https://80.lv/articles/this-alien-has-no-mesh-is-built-in-three-js-with-shader-math/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender光盘着色器效果惊艳",
      "sum": "一款在Blender中制作的光盘着色器效果逼真，引发社区关注。",
      "ta": "对材质研究感兴趣的TA，可快速浏览其虹彩与反射效果的实现思路。",
      "src": "80 Level · 08-11",
      "url": "https://80.lv/articles/this-compact-disc-shader-made-in-blender-looks-very-impressive/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "伊藤润二角色3D化重现",
      "sum": "艺术家将伊藤润二漫画《漩涡》中的角色以3D形式重现，展示2D风格转3D的过程。",
      "ta": "对风格化角色或非真实感渲染的TA，可参考其2D到3D的材质与造型转换。",
      "src": "80 Level · 08-11",
      "url": "https://80.lv/articles/character-from-junji-ito-s-uzumaki-manga-series-recreated-in-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "文字构建FPS游戏解析",
      "sum": "开发者Yechan Choi分享文字FPS游戏《Torizon Telecom》的创作历程与机制设计。",
      "ta": "对探索非传统渲染或UI交互的TA，此案例提供了独特的视觉与玩法结合思路。",
      "src": "80 Level · 08-11",
      "url": "https://80.lv/articles/torizon-telecom-an-fps-built-entirely-out-of-letters-and-words/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《1666阿姆斯特丹》定档",
      "sum": "Panache Digital Games宣布《1666: Amsterdam》抢先体验日期并公布新玩法视频。",
      "ta": "对关注行业动态的TA，可留意此作的开发进展与美术风格。",
      "src": "80 Level · 08-11",
      "url": "https://80.lv/articles/1666-amsterdam-s-early-access-launch-date-revealed/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《影之刃零》公布实机演示",
      "sum": "《Phantom Blade Zero》开启预购，并宣布8月17日State of Play将深度展示实机玩法。",
      "ta": "对关注动作游戏画面表现的TA，可留意其后续实机演示中的渲染与特效。",
      "src": "PlayStation Blog · 08-12",
      "url": "https://blog.playstation.com/2026/08/11/watch-the-phantom-blade-zero-gameplay-deep-dive-state-of-play-on-august-17-pre-orders-live-today/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《金刚狼》限定PS5公布",
      "sum": "Insomniac Games公布《漫威金刚狼》主题PS5数字版限定主机捆绑包及配件。",
      "ta": "对行业动态感兴趣的TA，可快速了解该作的市场营销节奏。",
      "src": "PlayStation Blog · 08-11",
      "url": "https://blog.playstation.com/2026/08/11/first-look-at-marvels-wolverine-limited-edition-ps5-console-bundle-and-accessories/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前育碧员工成立新工作室",
      "sum": "前育碧巴塞罗那员工在裁员后成立新工作室Dark Ritual Studios。",
      "ta": "对行业生态关注的TA，可留意新团队的动向与潜在项目。",
      "src": "Game Developer · 08-11",
      "url": "https://www.gamedeveloper.com/business/former-ubisoft-barcelona-devs-launch-dark-ritual-studios"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Supermassive再启裁员",
      "sum": "英国工作室Supermassive Games三年内第三轮裁员，计划裁减多达75个职位。",
      "ta": "对行业稳定性关注的TA，需了解当前游戏行业的就业形势。",
      "src": "Game Developer · 08-11",
      "url": "https://www.gamedeveloper.com/business/supermassive-games-begins-third-round-of-layoffs-in-three-years"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "英国订阅提案引担忧",
      "sum": "Ukie称英国限制性订阅提案可能损害游戏企业，阻碍投资并造成财务风险。",
      "ta": "对商业模式敏感的TA，可关注此政策对游戏发行与订阅制的影响。",
      "src": "Game Developer · 08-11",
      "url": "https://www.gamedeveloper.com/business/ukie-claims-restrictive-subscription-proposals-could-harm-uk-game-businesses-in-the-uk"
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
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：HuggingFace。"
  },
  "xStale": false
};
