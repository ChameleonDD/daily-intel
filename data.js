// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月28日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>免初始化光束法平差新法</em> / <em>Blender 无绑定2D面部动画</em> / <em>直升机起飞烟雾VFX拆解</em>。其余按重要性自动排序，红色优先。",
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
      "title": "免初始化光束法平差新法",
      "sum": "InitFree-SfM 将免初始化 Bundle Adjustment 与学习式 Structure-from-Motion 结合。",
      "ta": "若涉及扫描重建资产或相机解算，可关注其免初值收敛思路。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.31516"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 无绑定2D面部动画",
      "sum": "SouthernShotty 发布免费工具，无需绑定即可在 Blender 制作2D面部动画。",
      "ta": "快速面部表情预演的轻量方案，可作分镜参考。",
      "src": "80 Level · 11-27",
      "url": "https://80.lv/articles/create-expressive-2d-face-animations-in-blender-with-ease/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "直升机起飞烟雾VFX拆解",
      "sum": "Oleg Mendelson 分享电影感镜头中烟雾模拟的幕后制作流程。",
      "ta": "烟雾模拟分层与镜头合成思路，对流体特效节奏控制有参考价值。",
      "src": "80 Level · 11-27",
      "url": "https://80.lv/articles/check-out-this-awesome-vfx-breakdown-of-a-helicopter-taking-off/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Blender 微光帷幕教程",
      "sum": "Marinko Tambur 发布教程，复刻《基地》片头的闪烁帷幕效果。",
      "ta": "薄片类半透明材质的动态表现可借鉴到特效面片。",
      "src": "80 Level · 11-27",
      "url": "https://80.lv/articles/beautiful-shimmering-veil-in-blender-inspired-by-foundation-title-sequence/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "沿曲线在曲面雕刻工具",
      "sum": "新 Blender 工具支持沿3D表面曲线雕刻，曲线可随时编辑复用。",
      "ta": "曲线驱动雕刻对植被/地形细节的程序化笔刷思路有启发。",
      "src": "80 Level · 11-27",
      "url": "https://80.lv/articles/this-blender-tool-lets-you-sculpt-directly-along-curves-on-3d-surfaces/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "VR苏联建筑模块化拆解",
      "sum": "Stanislav Petrushin 讲解 VR 游戏中苏联砖住宅的模块化系统、光照与优化。",
      "ta": "模块化建筑与可进入室内的优化实践，对场景工具链有参考。",
      "src": "80 Level · 11-27",
      "url": "https://80.lv/articles/breakdown-designing-large-scale-soviet-era-architectural-system-for-vr-game/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "007 环境叙事设计解析",
      "sum": "Thomas Pulluelo 谈用 Glacier 引擎构建引导玩法的氛围环境与细节区域。",
      "ta": "看环境如何服务玩法引导，以及引擎内细节密度控制。",
      "src": "80 Level · 11-27",
      "url": "https://80.lv/articles/designing-environments-that-tell-a-story-for-007-first-light/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Houdini Vellum 服装模拟",
      "sum": "用 Houdini Vellum 解算器模拟角色时尚服装，项目可免费下载研究。",
      "ta": "Vellum 布料参数与褶皱表现可直接对照学习。",
      "src": "80 Level · 11-27",
      "url": "https://80.lv/articles/cute-girl-in-stylish-outfit-simulated-with-houdini-s-vellum-solver/"
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
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": ""
  },
  "xStale": false
};
