// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月23日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>DLSS 5 引入 3D 引导神经渲染</em> / <em>随机高斯泼溅去噪神经推理</em> / <em>3DGS 重建升级为可交互环境</em>。其余按重要性自动排序，红色优先。",
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
      "title": "DLSS 5 引入 3D 引导神经渲染",
      "sum": "NVIDIA 发布 DLSS 5，新增 3D-Guided Neural Rendering 与细粒度控制，并更新 ACE 与 RTX Kit。",
      "ta": "3D 引导神经渲染直接关系光照与材质细节的实时重建方式，是渲染管线层面需要评估的新选项。",
      "src": "NVIDIA · 09-22",
      "url": "https://developer.nvidia.com/blog/whats-new-for-game-developers-dlss-5-with-3d-guided-neural-rendering-nvidia-ace-updates-and-new-rtx-kit-capabilities/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "随机高斯泼溅去噪神经推理",
      "sum": "针对随机高斯泼溅渲染产生的空间噪声，提出像素流上的时序神经去噪器，实现超快推理。",
      "ta": "随机泼溅省去排序与 alpha 混合，去噪质量与推理开销是能否进实时管线的关键。",
      "src": "arXiv · cs.GR · 09-22",
      "url": "https://arxiv.org/abs/2609.25604v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "3DGS 重建升级为可交互环境",
      "sum": "φ-RIE 让 3D 高斯泼溅重建结果支持物体级独立运动与接触，面向机器人仿真交互。",
      "ta": "把静态泼溅场景拆成可独立运动的物体，是程序化场景与仿真复用的关键一步。",
      "src": "arXiv · cs.GR · 09-22",
      "url": "https://arxiv.org/abs/2609.26795v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "单图生成 3D 场景的像素对齐布局",
      "sum": "Mira-Scene 提出像素对齐的布局表示，解决单图生成物体放入连贯场景时的摆放难题。",
      "ta": "布局表示方式决定生成场景能否直接落地，值得关注其对齐精度与可控性。",
      "src": "arXiv · cs.GR · 09-20",
      "url": "https://arxiv.org/abs/2609.23796v2"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "几何原生隐空间实现 3D 一致世界生成",
      "sum": "GAE 提出几何原生隐空间，用于生成具备 3D 一致性的世界内容。",
      "ta": "3D 一致性是世界生成能否用于场景搭建的前提，可留意其隐空间设计思路。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.24981"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "PartLLM 统一 3D 部件分割基础模型",
      "sum": "PartLLM 提出统一多模态基础，同时支持文本引导与点交互的 3D 部件分割。",
      "ta": "部件级分割是资产拆分与程序化重组的输入，统一多模态接口值得关注。",
      "src": "arXiv · cs.GR · 09-22",
      "url": "https://arxiv.org/abs/2609.25832v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "农业机器人仿真大规模场景生成",
      "sum": "AgriGen 提出大规模场景生成框架，用于生成逼真的农业机器人仿真环境。",
      "ta": "面向仿真的程序化场景生成思路，可借鉴其规模化与真实感兼顾的做法。",
      "src": "arXiv · cs.GR · 09-22",
      "url": "https://arxiv.org/abs/2609.25725v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "指令式视频编辑的数据中心方案",
      "sum": "VideoX-Qwen 通过构建大规模配对监督并适配视频生成骨干，实现指令驱动视频编辑。",
      "ta": "编辑需保留无关主体与场景，其数据构造与骨干适配策略对特效迭代有参考价值。",
      "src": "arXiv · cs.GR · 09-22",
      "url": "https://arxiv.org/abs/2609.26015v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散 LLM 的 IO 感知 KV 缓存",
      "sum": "Flash-dLLM 提出 IO 感知 KV 缓存与并行解码，提升扩散语言模型速度并降低显存。",
      "ta": "与图形无直接关联，仅作推理效率技术储备速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.26796"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "量子增强扩散语言模型超网络",
      "sum": "提出 Circuit Hypernetworks，用于量子增强的扩散语言模型。",
      "ta": "与实时渲染无直接关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.24657"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "NVIDIA 机密计算支持生产级推理",
      "sum": "NVIDIA 介绍机密计算如何为生产环境的 LLM 推理提供私有高性能支持。",
      "ta": "偏企业部署安全，与游戏渲染管线无关，速览。",
      "src": "NVIDIA · 09-22",
      "url": "https://developer.nvidia.com/blog/enabling-private-high-performance-production-ai-inference-with-nvidia-confidential-computing/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "Topograph 拓扑感知负载调度",
      "sum": "NVIDIA Topograph 针对 AI 工厂做拓扑感知的 GPU 工作负载调度优化。",
      "ta": "面向集群调度而非单机渲染，速览即可。",
      "src": "NVIDIA · 09-22",
      "url": "https://developer.nvidia.com/blog/topology-aware-workload-scheduling-with-nvidia-topograph/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "Isaac ROS 用 AI Agent 加速节点",
      "sum": "NVIDIA 介绍用 AI Agent 与 Isaac ROS 加速 ROS 2 节点，指出单靠 CUDA 内核不足以保证图性能。",
      "ta": "机器人方向，与游戏管线无直接关联，速览。",
      "src": "NVIDIA · 09-22",
      "url": "https://developer.nvidia.com/blog/accelerating-a-ros-2-node-with-an-ai-agent-and-nvidia-isaac-ros/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Studio Orange 三渲二管线解析",
      "sum": "80 Level 深入解析制作《Beastars》《Trigun Stampede》的 Studio Orange 的 3D 转 2D 动画管线。",
      "ta": "三渲二管线是风格化渲染的实战参考，值得看其如何用 3D 流程产出 2D 观感。",
      "src": "80 Level · 09-22",
      "url": "https://80.lv/articles/how-anime-studio-behind-beastars-trigun-stampede-makes-3d-animation-look-2d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "800+ PBR 材质合集免费获取",
      "sum": "Julio Sillet 提供包含木材、瓷砖、布料、金属、混凝土等 800 多种 PBR 材质合集。",
      "ta": "材质库可直接补充植被与场景的材质测试素材。",
      "src": "80 Level · 09-22",
      "url": "https://80.lv/articles/get-this-huge-collection-of-over-800-pbr-materials/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Xbox 重组：Halo 工作室裁员",
      "sum": "Xbox 继续重组，Halo Studios 裁员、Undead Labs 被剥离，Ninja Theory 关闭，下一部 Halo 由 Activision 开发。",
      "ta": "第一方工作室格局变动，影响后续引擎与项目技术路线走向。",
      "src": "Game Developer · 09-22",
      "url": "https://www.gamedeveloper.com/business/xbox-continues-reset-with-halo-studios-layoffs-and-undead-labs-divestment"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Bungie 称未放弃《命运》",
      "sum": "Bungie 发布视频说明《命运》与《Marathon》计划，此前下架内容将回归并有更新。",
      "ta": "运营层面消息，速览。",
      "src": "80 Level · 09-22",
      "url": "https://80.lv/articles/bungie-is-not-done-with-destiny-vaulted-content-will-be-back-game-updates-are-coming/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rockstar 公布 GTA6 模组规则",
      "sum": "Rockstar 在 GTA VI 上线前明确模组规则，官方剧情、角色与既定连续性内容不可使用。",
      "ta": "模组政策影响社区内容生态，速览。",
      "src": "Game Developer · 09-22",
      "url": "https://www.gamedeveloper.com/production/-do-not-rockstar-outlines-modding-rules-before-gta-vi-touches-down"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "塔科夫开发商成立发行部门",
      "sum": "Battlestate Games 成立发行部门，计划支持硬核向游戏。",
      "ta": "行业发行动态，速览。",
      "src": "Game Developer · 09-22",
      "url": "https://www.gamedeveloper.com/business/escape-from-tarkov-dev-wants-to-bet-on-risky-games-with-its-new-publishing-arm"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "古墓丽影迎来 30 周年",
      "sum": "《古墓丽影》与劳拉将于今年 10 月迎来 30 周年纪念。",
      "ta": "纯纪念性内容，速览。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/lara-croft-and-tomb-raider-celebrate-their-30th-anniversary-this-october/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "A24 被指未联系 SCP 作者",
      "sum": "报道称 A24 就 SCP 电影从未联系 SCP 基金会作者，且存在限制其获利的授权问题。",
      "ta": "影视授权纠纷，与游戏技术无关，速览。",
      "src": "80 Level · 09-22",
      "url": "https://80.lv/articles/a24-reportedly-never-contacted-scp-foundation-authors-over-film/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Fading Echo 登陆 PS5",
      "sum": "Emeteria 开发的元素动作 RPG《Fading Echo》今日登陆 PlayStation 5。",
      "ta": "新作发售信息，速览。",
      "src": "PlayStation Blog · 09-22",
      "url": "https://blog.playstation.com/2026/09/22/fading-echo-makes-a-splash-on-playstation-5-today/"
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
