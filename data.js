// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月19日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>MetaSapiens v2 实时注视点渲染</em> / <em>3DGS 加速光线追踪新法</em>。其余按重要性自动排序，红色优先。",
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
      "title": "MetaSapiens v2 实时注视点渲染",
      "sum": "提出注视点感知剪枝与立体扭曲，加速点云神经渲染至实时。",
      "ta": "关注其剪枝与扭曲策略，对 VR/AR 实时渲染管线优化有直接参考价值。",
      "src": "arXiv · cs.GR · 08-18",
      "url": "https://arxiv.org/abs/2608.17969v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "3DGS 加速光线追踪新法",
      "sum": "基于粒子反向传播加速 3DGS 训练，支持反射等次级光线效果。",
      "ta": "突破光栅化近似限制，对追求真实反射的实时渲染方案意义重大。",
      "src": "arXiv · cs.GR · 08-18",
      "url": "https://arxiv.org/abs/2608.17298v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "WebGPU 六法绘制多层地形",
      "sum": "比较六种 WebGPU 渲染方法，用于可编辑多层高度场地形。",
      "ta": "游戏地形常非单值高度场，此对比对 TA 选型实时地形渲染方案有启发。",
      "src": "arXiv · cs.GR · 08-18",
      "url": "https://arxiv.org/abs/2608.17390v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "变分 r 自适应布料模拟",
      "sum": "首个面向现代布料管线的 r-自适应方法，模拟褶皱与摩擦接触。",
      "ta": "自适应分辨率可提升布料细节模拟效率，对角色布料系统有参考价值。",
      "src": "arXiv · cs.GR · 08-18",
      "url": "https://arxiv.org/abs/2608.17833v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RADmesh 重网格感知形变",
      "sum": "提出重网格增强的网格形变方法，避免大形变时三角质量恶化。",
      "ta": "对程序化形变或绑定系统，可改善大形变下的网格质量与稳定性。",
      "src": "arXiv · cs.GR · 08-17",
      "url": "https://arxiv.org/abs/2608.17182v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "PXDepth 像素级单目深度",
      "sum": "像素空间建模提升单目深度估计对细粒度结构与边界的保持。",
      "ta": "对基于深度估计的自动 LOD、植被放置等 TA 工具链有潜在价值。",
      "src": "arXiv · cs.GR · 08-17",
      "url": "https://arxiv.org/abs/2608.16984v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Love Handles 形变手柄简化",
      "sum": "为形变手柄提供低内存、紧支撑的网格简化方法。",
      "ta": "可优化物理模拟中形变手柄的存储与计算效率。",
      "src": "arXiv · cs.GR · 08-18",
      "url": "https://arxiv.org/abs/2608.17930v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Lambda-Hold 肌肉骨骼模拟",
      "sum": "最小任务奖励即可让肌肉骨骼模型涌现类人运动。",
      "ta": "对角色动画或生物力学模拟的 RL 训练策略有参考意义。",
      "src": "arXiv · cs.GR · 08-17",
      "url": "https://arxiv.org/abs/2608.17030v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "aDSL 智能体 3D 程序化创建",
      "sum": "联合智能体与程序设计，提升 LLM 生成 3D 程序的稳定性。",
      "ta": "对探索 LLM 辅助程序化资产生成工作流的 TA 有参考价值。",
      "src": "arXiv · cs.GR · 08-18",
      "url": "https://arxiv.org/abs/2608.17975v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "ZBrush 2D 概念转 3D 角色",
      "sum": "David Papunashvili 分享 Punk Knight 项目，投影 2D 概念到雕刻并 PolyPaint 上色。",
      "ta": "2D 概念直接投影参考的工作流，可提升风格化角色制作效率。",
      "src": "80 Level · 08-18",
      "url": "https://80.lv/articles/creating-a-stylized-3d-character-in-a-2d-illustrated-look-with-zbrush/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 程序化手绘风 Shader",
      "sum": "lassyla 发布教程与下载，制作程序化手绘外观 Blender 着色器。",
      "ta": "程序化手绘风 Shader 对风格化渲染有直接参考价值。",
      "src": "80 Level · 08-18",
      "url": "https://80.lv/articles/tutorial-procedural-blender-shader-with-hand-painted-look/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 雕刻感边缘贴花",
      "sum": "在 Blender 中快速生成贴花，用于创建雕刻感边缘细节。",
      "ta": "贴花生成工具可加速硬表面或风格化资产的细节制作。",
      "src": "80 Level · 08-18",
      "url": "https://80.lv/articles/create-sculpted-looking-edge-details-with-decals-in-blender/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "珊瑚生长模拟视觉效果",
      "sum": "展示一个美观且令人着迷的珊瑚生长模拟。",
      "ta": "可关注其模拟算法与视觉表现，对自然现象特效有启发。",
      "src": "80 Level · 08-18",
      "url": "https://80.lv/articles/this-coral-growth-simulation-looks-beautiful-and-mesmerizing/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "尼龙张力模拟设置展示",
      "sum": "展示一个令人印象深刻的 3D 尼龙张力模拟设置。",
      "ta": "可关注其布料/张力模拟设置，对角色布料或道具模拟有参考。",
      "src": "80 Level · 08-18",
      "url": "https://80.lv/articles/check-out-this-impressive-nylon-tension-simulation-set-up-in-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 专业 VFX 工具捆绑",
      "sum": "RBDLab、VDBLab 和 FluidLab 三款 Blender VFX 工具捆绑销售。",
      "ta": "工具捆绑可提升 Blender 特效制作效率，值得关注。",
      "src": "80 Level · 08-18",
      "url": "https://80.lv/articles/three-professional-vfx-tools-for-blender-in-one-bundle/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "OpenStudioHub 简化 Blender 管线",
      "sum": "介绍 OpenStudioHub，用于简化 Blender 工作室工具、Kitsu 与管线。",
      "ta": "对使用 Blender 的 TA 团队，可简化资产管理流程。",
      "src": "Tech-Artists · 08-18",
      "url": "https://www.tech-artists.org/t/simplifying-blender-studio-tools-kitsu-and-blender-pipeline-meet-openstudiohub/18500"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "游戏工作室转向外部开发合作",
      "sum": "Juego Studios 讨论外部开发、全流程制作、AI 辅助工作流与 LiveOps。",
      "ta": "了解行业外包趋势，对 TA 的跨团队协作与流程设计有参考。",
      "src": "80 Level · 08-18",
      "url": "https://80.lv/articles/why-game-studios-are-turning-to-external-development-partnerships/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Deus Ex 总监 Warren Spector 退休",
      "sum": "《杀出重围》总监 Warren Spector 在游戏行业近 45 年后宣布退休。",
      "ta": "行业资深人物动向，可速览。",
      "src": "Game Developer · 08-18",
      "url": "https://www.gamedeveloper.com/business/deus-ex-director-warren-spector-is-retiring-after-43-years"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "WINGS 资助独立游戏新途径",
      "sum": "独立游戏投资机构 WINGS 为 PC 项目推出新资助途径。",
      "ta": "行业投资动态，可速览。",
      "src": "Game Developer · 08-18",
      "url": "https://www.gamedeveloper.com/business/wings-really-really-wants-to-fund-your-neat-indie-video-game"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "NBA 2K27 新玩法细节公布",
      "sum": "NBA 2K27 公布 The City、合作模式、MyNBA 时代等新玩法细节。",
      "ta": "商业游戏动态，可速览。",
      "src": "PlayStation Blog · 08-18",
      "url": "https://blog.playstation.com/2026/08/18/new-nba-2k27-gameplay-details-on-the-city-co-op-mynba-eras-and-more/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Phantom Blade Zero 深度实机",
      "sum": "State of Play 深入展示《Phantom Blade Zero》战斗与武林世界。",
      "ta": "商业游戏动态，可速览。",
      "src": "PlayStation Blog · 08-18",
      "url": "https://blog.playstation.com/2026/08/17/phantom-blade-zero-state-of-play-dives-deep-into-combat-and-the-wulin-world/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS Store 七月下载榜公布",
      "sum": "PlayStation 公布 2026 年 7 月亚洲区 PS5、PS4 等下载排行榜。",
      "ta": "行业数据，可速览。",
      "src": "PlayStation Blog · 08-18",
      "url": "https://blog.playstation.com/2026/08/17/20260818-top/"
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
