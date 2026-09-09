// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月9日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>CUDA Rust 双轨 GPU 编程</em> / <em>可微物理接触大步长模拟</em> / <em>逆向数字大理石纹生成</em>。其余按重要性自动排序，红色优先。",
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
      "title": "CUDA Rust 双轨 GPU 编程",
      "sum": "NVIDIA 宣布支持 Rust 原生 GPU 内核编程，提供两条开发路径。",
      "ta": "关注 Rust 在 GPU 计算中的成熟度，可能影响未来引擎底层工具链选型。",
      "src": "NVIDIA · 09-08",
      "url": "https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可微物理接触大步长模拟",
      "摘要": "Ostrich 提出新方法，在可微物理模拟中实现大步长刚体接触，兼顾精度与梯度可靠性。",
      "ta": "对基于物理的动画和机器人控制优化有参考价值，可关注其梯度计算效率。",
      "src": "arXiv · cs.GR · 09-08",
      "url": "https://arxiv.org/abs/2609.08800v1",
      "sum": "可微物理接触大步长模拟"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "逆向数字大理石纹生成",
      "sum": "从目标图像逆向恢复可执行的数字大理石纹生成程序。",
      "ta": "程序化纹理逆向思路，或可启发程序化资产生成工具。",
      "src": "arXiv · cs.GR · 09-08",
      "url": "https://arxiv.org/abs/2609.08722v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "神经质心 Voronoi 剖分",
      "sum": "用神经网络加速表面 CVT 计算，用于高质量采样和网格重拓扑。",
      "ta": "可能加速程序化网格生成中的重拓扑步骤，值得关注其精度与速度。",
      "src": "arXiv · cs.GR · 09-08",
      "url": "https://arxiv.org/abs/2609.08497v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "拓扑保持视频生成扩散模型",
      "sum": "提出测地线信息引导的扩散模型，用于保持图像视频生成中的拓扑结构。",
      "ta": "对生成资产的拓扑一致性有潜在价值，但需验证在实时渲染中的实用性。",
      "src": "arXiv · cs.GR · 09-08",
      "url": "https://arxiv.org/abs/2609.08153v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "语言与风格驱动的动作生成",
      "sum": "FlexMoGen 框架，根据自然语言和风格参考生成灵活的人体动作。",
      "ta": "对动画师快速生成风格化动作有参考价值，可关注其风格控制精度。",
      "src": "arXiv · cs.GR · 09-07",
      "url": "https://arxiv.org/abs/2609.08032v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "热核纹理替代 UV 贴图",
      "sum": "提出热核纹理，用测地线高斯替代传统 UV 映射，降低内存占用。",
      "ta": "可能解决 UV 映射痛点，对材质和贴图管线有潜在革新意义。",
      "src": "arXiv · cs.GR · 09-07",
      "url": "https://arxiv.org/abs/2609.07557v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "多视角物体重打光 Transformer",
      "sum": "RelightFormer 用前馈生成式 Transformer 从多视角图像实现物体重打光。",
      "ta": "对离线资产制作和光照管线有参考价值，可关注其多视角一致性。",
      "src": "arXiv · cs.GR · 09-07",
      "url": "https://arxiv.org/abs/2609.07414v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "CT 扫描重建钩针纱线路径",
      "sum": "CT2Yarn 从微 CT 扫描中恢复真实钩针制品的连续纱线路径。",
      "ta": "对程序化生成复杂编织结构有启发，但应用场景较垂直。",
      "src": "arXiv · cs.GR · 09-07",
      "url": "https://arxiv.org/abs/2609.06950v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "亚像素级太空碎片图像配准",
      "sum": "利用 Radon 点扩散函数实现太空碎片图像的亚像素仿射配准。",
      "ta": "与游戏图形学关联较弱，但亚像素配准技术或可迁移至其他图像处理。",
      "src": "arXiv · cs.GR · 09-07",
      "url": "https://arxiv.org/abs/2609.06929v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "双曲曲面网格嵌入可视化",
      "sum": "通过网格嵌入在欧几里得空间可视化双曲曲面，用于数学演示。",
      "ta": "对数学可视化有参考价值，但与游戏 TA 工作流关联不大。",
      "src": "arXiv · cs.GR · 09-06",
      "url": "https://arxiv.org/abs/2609.06766v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "自适应 Delaunay 网格重建",
      "sum": "ADELE 直接从图像重建高保真网格，无需中间 NeRF/3DGS 表示。",
      "ta": "对网格资产生产管线有直接价值，可关注其重建质量和速度。",
      "src": "arXiv · cs.GR · 09-06",
      "url": "https://arxiv.org/abs/2609.06723v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "物理人形交互统一控制器",
      "sum": "提出上下文条件交互先验，统一物理人形控制器的导航与操作。",
      "ta": "对游戏 NPC 物理动画控制有潜在参考，但工程化程度尚远。",
      "src": "arXiv · cs.GR · 09-06",
      "url": "https://arxiv.org/abs/2609.06591v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "混合智能体场景布局生成",
      "sum": "SceneMosaic 用混合智能体布局进化生成多样化、可模拟的场景。",
      "ta": "对程序化关卡和场景生成有参考价值，可关注其布局多样性与可控性。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.05594"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "自回归视频扩散蒸馏改进",
      "sum": "Mask Forcing 通过双噪声掩码滚动提升自回归视频扩散模型的蒸馏效果。",
      "ta": "对视频生成模型效率提升有参考，但直接游戏应用尚远。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.09123"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "智能体控制视觉生成",
      "sum": "探讨从生成模型到智能体控制的视觉生成范式转变。",
      "ta": "概念性文章，对 TA 工作流暂无直接关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.06758"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "几何引导法线估计模型",
      "sum": "TransNormal-2 用几何接地整流流与边缘感知解码实现精确法线估计。",
      "ta": "对材质扫描和资产重建中的法线贴图生成有直接参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.06665"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "卡普空重启老 IP 计划",
      "sum": "Capcom 表示将专注于重启近期无新作的经典 IP。",
      "ta": "行业动态，可能影响未来游戏技术方向，但无直接 TA 关联。",
      "src": "80 Level · 09-08",
      "url": "https://80.lv/articles/capcom-is-focusing-on-reactivating-ips-that-haven-t-had-a-recent-launch/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "坦克世界 HEAT 艺术管线解析",
      "sum": "WoT: HEAT 总监详解其专有引擎、载具设计、跨平台优化与艺术管线。",
      "ta": "了解大型跨平台项目的艺术与引擎协作流程，有流程参考价值。",
      "src": "80 Level · 09-08",
      "url": "https://80.lv/articles/inside-world-of-tanks-heat-s-art-engine-vehicle-design-pipeline/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "哈瑞宝小熊糖果材质制作",
      "sum": "QiYu Dai 分享用几何体建模和颜色分层实现半透明小熊糖果材质。",
      "ta": "半透明材质分层思路对食品类或软体材质制作有直接参考。",
      "src": "80 Level · 09-08",
      "url": "https://80.lv/articles/how-to-create-a-haribo-style-translucent-jelly-bear-candy-material/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "宝可梦风格全息卡牌效果",
      "sum": "Kazehaya Fuyuka 用 Clip Studio Paint Pro 和 After Effects 制作全息卡牌。",
      "ta": "2D 全息效果制作案例，对非实时渲染流程有参考。",
      "src": "80 Level · 09-08",
      "url": "https://80.lv/articles/pok-mon-style-holographic-card-effect-check-out-fuyuka-shadow-striker/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender GPU 多物理工具",
      "sum": "Pro Particles 在 Blender 中统一处理粒子、液体、Pyro 和 MPM 模拟。",
      "ta": "对 DCC 工具链中的物理模拟流程有参考价值，可关注其 GPU 性能。",
      "src": "80 Level · 09-08",
      "url": "https://80.lv/articles/advanced-gpu-powered-multi-physics-toolkit-for-blender-artists/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "EA 用生成 AI 制作 NHL 解说",
      "sum": "据报道 EA 在 NHL 27 中使用生成式 AI 制作解说员语音。",
      "ta": "行业动态，AI 语音在游戏中的应用案例，对音频管线有参考。",
      "src": "Game Developer · 09-08",
      "url": "https://www.gamedeveloper.com/business/report-ea-s-nhl-27-is-using-genai-to-create-voiceover-claims-a-sports-commentator"
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
