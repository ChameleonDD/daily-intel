// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月25日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>MD新增布料撕裂捏合</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "mid",
      "title": "虚拟人表情生成新法",
      "sum": "CVAE模型基于真实人脸数据合成可控虚拟人面部表情。",
      "ta": "关注表情强度控制与真实感，对角色动画管线有参考价值。",
      "src": "arXiv · cs.GR · 08-22",
      "url": "https://arxiv.org/abs/2608.21697v1"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "武侠沙盒万人NPC",
      "sum": "《太吾绘卷》实现一万动态NPC与七百武学技能的系统设计。",
      "ta": "大规模NPC系统与程序化生成思路，对开放世界TA有借鉴意义。",
      "src": "80 Level · 08-24",
      "url": "https://80.lv/articles/interview-building-a-wuxia-sandbox-rpg-with-up-to-10-000-dynamic-npcs/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Unity地图交互资产包",
      "sum": "Unity资产包支持游戏内2D与3D交互地图，现五折促销。",
      "ta": "可快速集成地图功能，节省TA开发时间。",
      "src": "80 Level · 08-24",
      "url": "https://80.lv/articles/this-unity-asset-pack-allows-you-to-add-interactive-2d-and-3d-maps-to-your-games/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "独立钓鱼游戏两日百万",
      "sum": "一款独立钓鱼模拟游戏发售两天内销量破百万。",
      "ta": "独立游戏市场表现参考，与TA技术关联弱。",
      "src": "80 Level · 08-24",
      "url": "https://80.lv/articles/this-indie-fishing-simulation-game-sold-1-million-copies-in-2-days/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "异形生物眼部系统开发",
      "sum": "电影与游戏角色工作坊展示复杂异形生物眼部系统制作。",
      "ta": "眼部着色与材质细节技术，对生物角色TA有参考价值。",
      "src": "80 Level · 08-24",
      "url": "https://80.lv/articles/developing-complex-eye-system-for-strange-alien-creature/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "空间流式3D资产交付",
      "sum": "Miris将视频自适应流式技术引入3D资产传输，实现近即时加载。",
      "ta": "空间流式传输可改变大型3D资产加载方式，影响TA资源管线。",
      "src": "80 Level · 08-24",
      "url": "https://80.lv/articles/how-spatial-streaming-is-unlocking-new-possibilities-in-3d-asset-delivery/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "title": "MD新增布料撕裂捏合",
      "sum": "Marvelous Designer 2026.1新增缝线撕裂、笔刷捏合与模拟覆盖工具。",
      "ta": "布料塑形工具增强，直接提升TA制作服装与布料模拟效率。",
      "src": "80 Level · 08-24",
      "url": "https://80.lv/articles/new-marvelous-designer-update-lets-artists-rip-pinch-shape-fabric-like-never-before/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Blender BSDF支持色散",
      "sum": "Blender 5.3 Cycles的Principled BSDF新增色散支持。",
      "ta": "材质色散效果增强，对离线渲染与材质测试有参考价值。",
      "src": "80 Level · 08-24",
      "url": "https://80.lv/articles/principled-bsdf-in-blender-s-cycles-now-supports-dispersion/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "CAA成立独立游戏基金",
      "sum": "Creative Artists Agency推出Frame1Games，支持资源不足的独立团队。",
      "ta": "行业资金动向，与TA技术无直接关联。",
      "src": "Game Developer · 08-24",
      "url": "https://www.gamedeveloper.com/business/creative-artists-agency-spins-up-indie-funding-venture-frame1games"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "科隆游戏展奖项揭晓",
      "sum": "Gamescom Dev Awards 2026在科隆颁发六个奖项。",
      "ta": "行业奖项信息，与TA技术无直接关联。",
      "src": "Game Developer · 08-24",
      "url": "https://www.gamedeveloper.com/business/mutter-and-blue-prince-among-winners-at-gamescom-dev-awards-2026"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Gamescom寻求负责任扩张",
      "sum": "Gamescom 2026规模创纪录，主办方强调本地化与市场相关性。",
      "ta": "行业展会动态，与TA技术无直接关联。",
      "src": "Game Developer · 08-24",
      "url": "https://www.gamedeveloper.com/business/-each-event-has-to-feel-local-and-relevant-to-its-market-gamescom-boss-wants-responsible-expansion-after-record-breaking-year"
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
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Blender 开发博客、HuggingFace。"
  },
  "xStale": false
};
