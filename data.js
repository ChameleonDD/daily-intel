// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月17日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>AI代理自动准备3D仿真场景</em> / <em>TensorRT边缘LLM提速6.4倍</em> / <em>代理AI把CUDA Tile译到Rust</em>。其余按重要性自动排序，红色优先。",
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
      "title": "AI代理自动准备3D仿真场景",
      "sum": "NVIDIA展示用Agentic AI检查3D场景并编写仿真数据，服务数字孪生。",
      "ta": "可关注代理如何自动校验场景资产，未来或用于植被/关卡批量预处理。",
      "src": "NVIDIA · 09-16",
      "url": "https://developer.nvidia.com/blog/how-to-use-ai-agents-to-prepare-3d-scenes-for-simulation/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "TensorRT边缘LLM提速6.4倍",
      "sum": "TensorRT Edge-LLM在Jetson AGX Thor上完成MLPerf边缘代理基准，快6.4倍。",
      "ta": "边缘端代理推理加速，与游戏TA关联弱，速览即可。",
      "src": "NVIDIA · 09-16",
      "url": "https://developer.nvidia.com/blog/tensorrt-edge-llm-completes-the-mlperf-edge-agentic-benchmark-6-4x-faster-on-jetson-agx-thor/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "代理AI把CUDA Tile译到Rust",
      "sum": "cuTile Rust用代理AI将Python的CUDA tile操作翻译为Rust GPU内核。",
      "ta": "GPU内核跨语言迁移思路，对写compute shader有间接参考。",
      "src": "NVIDIA · 09-16",
      "url": "https://developer.nvidia.com/blog/translating-cuda-tile-operations-from-python-to-rust-using-agentic-ai/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS Plus东京电玩展促销",
      "sum": "9月17至30日加入PS Plus可省最多25%年费。",
      "ta": "纯促销，与TA工作无关。",
      "src": "PlayStation Blog · 09-17",
      "url": "https://blog.playstation.com/2026/09/16/20260917-psplus/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "怪猎荒野资料片2027年",
      "sum": "《Monster Hunter Wilds: Ascendance》2027年发售，新增剧情区域怪物与大师等级。",
      "ta": "仅发行信息，无技术细节可参考。",
      "src": "PlayStation Blog · 09-17",
      "url": "https://blog.playstation.com/2026/09/16/monster-hunter-wilds-ascendance-hands-on-report-taking-on-new-monster-araketa-and-elder-dragon-teostra/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "洛克人新作公布Proto Man",
      "sum": "《Mega Man: Dual Override》公布第二可玩角色Proto Man。",
      "ta": "纯游戏内容新闻，无技术价值。",
      "src": "PlayStation Blog · 09-17",
      "url": "https://blog.playstation.com/2026/09/16/a-close-quarters-look-at-proto-man-in-mega-man-dual-override/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "姆明游戏9月18日发售",
      "sum": "独立游戏《Moomintroll: Winter's Warmth》9月18日登陆PS5。",
      "ta": "独立游戏发行信息，无技术内容。",
      "src": "PlayStation Blog · 09-16",
      "url": "https://blog.playstation.com/2026/09/16/moomintroll-winters-warmth-launches-on-september-18/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "寂静岭Townfall9月24日",
      "sum": "《Silent Hill: Townfall》9月24日发售，开发者解析PS5特性运用。",
      "ta": "可略看PS5特性整合方式，技术深度有限。",
      "src": "PlayStation Blog · 09-16",
      "url": "https://blog.playstation.com/2026/09/16/silent-hill-townfall-creators-break-down-ps5-features-out-september-25/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "ADLX 2.0开放AI代理控制显卡",
      "sum": "AMD ADLX 2.0新增AI扩展与MCP服务器，让代理监控管理优化AMD显卡。",
      "ta": "TA可关注用代理自动化显卡性能监控与调优的接口。",
      "src": "AMD GPUOpen · 09-16",
      "url": "https://gpuopen.com/learn/adlx-2-0-extending-graphics-control-to-ai-agents-apps/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "MoQ自适应流式传输3DGS",
      "sum": "MoQSplat用MoQ协议实现3D高斯泼溅的自适应渐进流式传输，避免TCP队头阻塞。",
      "ta": "大场景3DGS流式传输方案，对开放世界资产流送有参考价值。",
      "src": "arXiv · cs.GR · 09-16",
      "url": "https://arxiv.org/abs/2609.18624v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "统一人手机器人抓取表示",
      "sum": "InterMASH提出跨人手与机器人手的统一几何表示用于抓取合成。",
      "ta": "与游戏TA关联弱，速览。",
      "src": "arXiv · cs.GR · 09-16",
      "url": "https://arxiv.org/abs/2609.18504v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CAD先验辅助稀疏视图3DGS",
      "sum": "CADSplat用CAD形状先验正则化3DGS，从少于15视图重建逼真数字孪生。",
      "ta": "稀疏视图重建数字孪生，对资产扫描与场景重建流程有参考。",
      "src": "arXiv · cs.GR · 09-16",
      "url": "https://arxiv.org/abs/2609.18473v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "点云几何先验评估攀岩难度",
      "sum": "PointGrade用点云几何先验预测MoonBoard攀岩问题难度。",
      "ta": "与游戏TA无关，速览。",
      "src": "arXiv · cs.GR · 09-15",
      "url": "https://arxiv.org/abs/2609.17770v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "平面设计生成加入3D人体",
      "sum": "研究将3D人体引入图形设计生成，考虑姿态与构图引导视觉。",
      "ta": "与实时渲染关联弱，速览。",
      "src": "arXiv · cs.GR · 09-15",
      "url": "https://arxiv.org/abs/2609.17689v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "扩散技能发现学习可复用动作",
      "sum": "DSD用扩散技能发现让模拟角色学习多样可复用运动技能。",
      "ta": "角色动画技能复用思路，对程序化动画有潜在参考。",
      "src": "arXiv · cs.GR · 09-15",
      "url": "https://arxiv.org/abs/2609.17682v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Zing-0.5实时联合动作文本控制",
      "sum": "Zing-0.5实现实时联合动作与文本控制，面向可玩世界生成。",
      "ta": "可玩世界实时生成方向，关注其对交互式内容生成的潜力。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.17909"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "事件相机第一人称3D手部重建",
      "sum": "EventEgoHands++用事件相机与真实数据集做第一人称3D手部网格重建。",
      "ta": "与游戏TA关联弱，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.17189"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时切割撕裂虚拟人体解剖",
      "sum": "普渡大学用位置动力学、SDF与体积泼溅把冷冻切片转为可实时切割撕裂的形变模型。",
      "ta": "PBD+SDF+体积泼溅的实时形变切割方案，对可破坏物体有参考。",
      "src": "80 Level · 09-17",
      "url": "https://80.lv/articles/dissectible-anatomy-lets-users-cut-tear-virtual-bodies-in-real-time/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "几何插件生成逼真磨损边缘",
      "sum": "Egdy插件为Cinema 4D和Blender提供6个损伤模块，生成裂纹缺口等边缘磨损。",
      "ta": "程序化边缘磨损工具，可借鉴其几何损伤生成思路。",
      "src": "80 Level · 09-16",
      "url": "https://80.lv/articles/3d-artist-on-creating-a-geometry-based-plugin-that-makes-realistic-worn-edges/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Valve解释Steam Frame选Alyx",
      "sum": "Valve称Steam Frame套件附赠《半条命：Alyx》而非新VR游戏，可独立运行。",
      "ta": "硬件发行信息，无技术细节。",
      "src": "80 Level · 09-16",
      "url": "https://80.lv/articles/valve-explains-why-steam-frame-uses-half-life-alyx-instead-of-a-new-vr-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Build a Rocket Boy疑似关闭",
      "sum": "报道称《MindsEye》开发商Build a Rocket Boy在更多裁员后疑似关闭。",
      "ta": "行业裁员动态，与TA工作无直接关联。",
      "src": "Game Developer · 09-16",
      "url": "https://www.gamedeveloper.com/business/report-mindseye-developer-build-a-rocket-boy-seemingly-closing-after-more-layoffs"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "动视暴雪遭前员工起诉",
      "sum": "一名工作14年的前员工起诉动视暴雪，指控10名男性性骚扰与报复。",
      "ta": "行业法律新闻，与TA工作无关。",
      "src": "Game Developer · 09-16",
      "url": "https://www.gamedeveloper.com/production/activision-blizzard-sued-by-former-employee-over-sexual-harassment"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
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
    "missed": "未覆盖：Unreal Engine。"
  },
  "xStale": false
};
