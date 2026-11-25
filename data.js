// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月25日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>NVIDIA 游戏开发月度更新</em> / <em>AMD 推出 RT-MLAS 扩展</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "hi",
      "rank": 1,
      "title": "NVIDIA 游戏开发月度更新",
      "sum": "NVIDIA 发布本月游戏开发更新，涵盖 AI 动画、RTX 工具与本地 AI 能力接入引擎。",
      "ta": "关注 AI 动画与 RTX 工具链如何接入引擎，评估对植被/特效工作流的可用性。",
      "src": "NVIDIA · 11-24",
      "url": "https://developer.nvidia.com/blog/whats-new-for-game-developers-ai-animation-and-rtx-tools/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "AMD 推出 RT-MLAS 扩展",
      "sum": "AMD 新 Vulkan 扩展 RT-MLAS 复用加速结构，降低大型动态场景光追内存与重建耗时。",
      "ta": "动态大世界光追的加速结构复用思路，对开放世界植被/地形光追有直接参考价值。",
      "src": "AMD GPUOpen · 11-24",
      "url": "https://gpuopen.com/learn/amd-rt-mlas-vulkan/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "HiGS 分层高斯泼溅加速",
      "sum": "提出分层分块架构，解决 3DGS 分块与光栅化单元冲突导致的帧时间瓶颈。",
      "ta": "3DGS 渲染分块策略优化，关注其对实时高斯渲染性能上限的影响。",
      "src": "arXiv · cs.GR · 11-24",
      "url": "https://arxiv.org/abs/2611.31918v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "SplatTok 压缩高斯泼溅",
      "sum": "用场景级 token 数据驱动压缩 3D Gaussian Splats，降低存储开销。",
      "ta": "高斯泼溅存储压缩方案，对大规模植被/场景扫描资产落地的体积问题有参考。",
      "src": "arXiv · cs.GR · 11-24",
      "url": "https://arxiv.org/abs/2611.32202v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Spectrify 高光谱图像生成",
      "sum": "用计算机图形学框架生成高光谱图像，为相机管线与重建提供训练数据。",
      "ta": "高光谱合成可服务材质/相机管线研究，与渲染色彩管线有间接关联。",
      "src": "arXiv · cs.GR · 11-24",
      "url": "https://arxiv.org/abs/2611.33042v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "视频模型即优秀运动模型",
      "sum": "论文主张视频基础模型已成为更强的运动先验生成器。",
      "ta": "运动先验若可用于角色/植被风动动画生成，值得关注其泛化能力。",
      "src": "arXiv · cs.GR · 11-24",
      "url": "https://arxiv.org/abs/2611.32432v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "MESSI 多专家足球技能控制",
      "sum": "多专家集成实现物理角色足球技能串联，解决顺序执行时的状态漂移。",
      "ta": "物理角色技能切换的稳定性思路，对复杂角色动画状态机有借鉴。",
      "src": "arXiv · cs.GR · 11-24",
      "url": "https://arxiv.org/abs/2611.33011v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "RoMo Hands 手部动作数据集",
      "sum": "发布大规模、细粒度文本标注的文本到手部动作数据集。",
      "ta": "手部动画数据补充，可关注其对精细角色动画生成的支撑。",
      "src": "arXiv · cs.GR · 11-24",
      "url": "https://arxiv.org/abs/2611.31766v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Tornado4D 稀疏视频重建",
      "sum": "物理引导从稀疏单侧视频重建实验室龙卷风 4D 高斯。",
      "ta": "稀疏视角 4D 重建思路，对流体/烟雾类特效的参考重建有启发。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.31435v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "MYSTIQUE 少样本换脸",
      "sum": "少样本实现面部身份迁移并保留表情、光照、姿态与场景。",
      "ta": "VFX 身份迁移方法，关注其表演保留能力对数字人流程的意义。",
      "src": "arXiv · cs.GR · 11-24",
      "url": "https://arxiv.org/abs/2611.32232v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "FlowVecFont 矢量字体生成",
      "sum": "用潜空间流匹配实现可扩展矢量字体轮廓生成。",
      "ta": "矢量生成思路可类比程序化资产生成，速览即可。",
      "src": "arXiv · cs.GR · 11-24",
      "url": "https://arxiv.org/abs/2611.32327v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "PreferenceScene 个性化室内生成",
      "sum": "基于用户反馈的个性化室内场景合成方法。",
      "ta": "反馈驱动的场景生成，对程序化关卡/场景工具有间接参考。",
      "src": "arXiv · cs.GR · 11-24",
      "url": "https://arxiv.org/abs/2611.32099v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Cosmos 3 本地运行指南",
      "sum": "NVIDIA 介绍用 Hugging Face Diffusers 在本地设备运行 Cosmos 3 视频生成模型。",
      "ta": "世界模型本地部署与显存优化，关注其对引擎内 AI 生成内容的可行性。",
      "src": "NVIDIA · 11-24",
      "url": "https://developer.nvidia.com/blog/how-to-run-nvidia-cosmos-3-on-local-ai-devices-using-hugging-face-diffusers/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "S-Mind 内化多视图几何",
      "sum": "通过内化多视图几何提升模型空间智能。",
      "ta": "多视图几何内化对 3D 生成与场景理解有潜在价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.28649"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "PINE 一步扩散估计",
      "sum": "单步扩散模型同时估计点、实例与法线。",
      "ta": "一步法点云/法线估计，关注其对 3D 资产重建流程的提速。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.29389"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时交互视频生成引导",
      "sum": "提出残差引导方法用于实时交互式视频生成。",
      "ta": "实时视频生成引导，关注其延迟表现对交互式内容的潜力。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.32820"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "PhyCoVE 物理反事实视频",
      "sum": "跨多种材质动力学的物理反事实视频编辑基准。",
      "ta": "物理一致性评测基准，对特效物理可信度评估有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.29184"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Coding4Games 智能体测试",
      "sum": "评测现代编码智能体能否游玩现代电子游戏。",
      "ta": "智能体与游戏交互评测，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.31974"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Qwen-Image-HD 高清生成",
      "sum": "自回归扩散实现高分辨率图像生成。",
      "ta": "高清图像生成进展，与贴图/概念图生产有间接关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.32736"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "CDPR 与索尼合作巫师4",
      "sum": "CD Projekt Red 与索尼达成合作，涵盖游戏登陆 PlayStation 及 Plus 服务。",
      "ta": "3A 发行格局变动，关注其对引擎技术选型与平台优化的影响。",
      "src": "80 Level · 11-25",
      "url": "https://80.lv/articles/cd-projekt-red-partners-with-sony-for-the-witcher-4/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "UE 可驾驶军车制作流程",
      "sum": "分享原创军车概念 3D 制作流程，含可拆卸炮塔与 UE 可驾驶搭建。",
      "ta": "载具资产与 UE 交互搭建流程，可速览参考。",
      "src": "80 Level · 11-24",
      "url": "https://80.lv/articles/creating-game-ready-fictional-military-vehicle-in-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "PS1 风格角色建模教程",
      "sum": "演示 Blender 中 PS1 风格角色的建模与贴图设计取舍。",
      "ta": "低多边形风格化流程，速览即可。",
      "src": "80 Level · 11-24",
      "url": "https://80.lv/articles/how-to-model-texture-ps1-style-character-in-blender/"
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
