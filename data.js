// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月13日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>Epic 推行 AI 优先制作模式</em> / <em>实时软体切割剥离仿真</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "ai",
      "imp": "mid",
      "title": "混合模型解码状态存储优化",
      "sum": "NVIDIA 提出 ReplaySSM，重构 SSM 与注意力混合模型的 state 存储以加速解码。",
      "ta": "若团队在本地跑 Nemotron/Qwen 类混合模型做工具链推理，可关注其显存与吞吐权衡。",
      "src": "NVIDIA · 10-12",
      "url": "https://developer.nvidia.com/blog/replayssm-rethinking-state-storage-for-faster-hybrid-model-decoding/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "任意分辨率曲面重建新法",
      "sum": "T3lescope 从图像做任意分辨率高保真生成式曲面重建。",
      "ta": "曲面重建若成熟，可接入扫描资产到引擎的自动化管线，值得跟踪精度与拓扑质量。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.03308"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 1,
      "title": "Epic 推行 AI 优先制作模式",
      "sum": "Epic 据报推迟一款未公布漫威与星战射击游戏，并要求开发者转向覆盖代码与美术的 AI 优先模式。",
      "ta": "引擎方亲自定调 AI 优先，TA 的脚本与工具链产出方式可能被重定义，需关注后续官方口径。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/epic-games-tells-devs-no-more-hand-written-code-to-adopt-an-ai-first-production-model/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 2,
      "title": "实时软体切割剥离仿真",
      "sum": "KAIST 的 OmniBody 用椭球粒子、局部 XPBD 约束与 GPU 并行实现可形变可破坏物体实时仿真。",
      "ta": "无需全局求解器与重网格化，对破坏类特效与程序化碎裂的实时方案有直接参考价值。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/this-soft-body-simulation-can-cut-peel-break-objects-in-real-time/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 手绘质感动画剧集",
      "sum": "BONI IS SCARED 用 Substance 3D Painter、Blender 与 Marvelous Designer 制作反乌托邦惊悚动画，含自定义 Geometry Nodes 做线缆与雪。",
      "ta": "Geometry Nodes 做线缆/雪的程序化思路可迁移到植被与场景散布工具。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/creating-a-thriller-animated-series-with-hand-drawn-textures-in-blender/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "真实物体影子玩平台跳跃",
      "sum": "导演 Tee Ken Ng 展示混合现实游戏 Plato，用现实物体投影作为玩法元素。",
      "ta": "影子识别与投影对齐的交互思路，对 AR 类玩法原型有启发。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/this-platformer-lets-you-use-shadows-of-real-life-objects-to-play/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 滤镜转绘画风格",
      "sum": "Supa Painter 可将照片与 3D 渲染图转为绘画风格，目前打折。",
      "ta": "风格化后处理参考，但属促销向内容，速览即可。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/turn-photos-3d-renders-into-paintings-with-this-blender-filter/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini 写实瀑布特效教程",
      "sum": "Arbaz Malik 分享 Houdini 写实瀑布 VFX 的完整搭建讲解与工程文件。",
      "ta": "流体与粒子分层思路可对照 Niagara 流体实现做迁移参考。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/how-to-create-realistic-waterfall-vfx-in-houdini/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "拆城建停车场游戏抢先体验",
      "sum": "Car Park Capital 上线抢先体验，玩法是拆房毁绿建停车场。",
      "ta": "与 TA 工作无直接关联，行业速览。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/this-game-where-you-replace-an-entire-city-with-shiny-parking-lots-is-out-in-early-access/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "毛线等距城市建造游戏",
      "sum": "Cotton City 让玩家用毛线质感搭建等距城市，含桥梁道路房屋与树木。",
      "ta": "等距植被与场景摆放的视觉风格参考，速览即可。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/srochet-your-own-cozy-isometric-city-with-cotton-in-this-cute-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "寂静岭将推二三波作品",
      "sum": "系列制作人称 Konami 正规划第二、第三波寂静岭游戏项目。",
      "ta": "纯行业动向，与 TA 技术工作无关。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/silent-hill-producer-says-konami-plans-second-and-third-waves-of-games/"
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
