// daily-intel 近期热点层 —— 由 run.py 自动累积，供「近期」入口翻阅。
// 与 data.js（仅今日新增）分离：data.js 是“今天有什么新的”，recent.js 是“近期攒了啥”。

window.INTEL_RECENT = {
  "updated": "2026-09-17 13:58",
  "cards": [
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
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "发丝卡片自动转发丝几何",
      "sum": "HairCS 提出自动流水线，把发丝卡片模型重建为高质量发丝级发型。",
      "ta": "植被/毛发类程序化生成的同类思路：从低模代理还原高精度几何，可迁移到草叶卡片转真实草簇。",
      "src": "arXiv · cs.GR · 09-15",
      "url": "https://arxiv.org/abs/2609.16465v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "拓扑无关自动面部绑定",
      "sum": "TopoRig 用多源监督实现跨异构网格拓扑的自动面部绑定。",
      "ta": "角色管线里绑定环节的自动化尝试，值得关注其如何绕开标准模板的对应误差。",
      "src": "arXiv · cs.GR · 09-14",
      "url": "https://arxiv.org/abs/2609.15746v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "文本生成物理一致动态场景",
      "sum": "ESG 从自然语言描述生成物理一致的动态3D场景，需联合推理结构与时间。",
      "ta": "程序化场景生成从静态走向动态，关注其物理约束如何与场景结构联合求解。",
      "src": "arXiv · cs.GR · 09-14",
      "url": "https://arxiv.org/abs/2609.15392v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "流式物理视频生成可细控",
      "sum": "PhysStream 用结构化场景记忆与细粒度运动控制实现流式物理视频生成。",
      "ta": "交互式视频生成的控制粒度提升，对实时预览类工具链有潜在参考价值。",
      "src": "arXiv · cs.GR · 09-15",
      "url": "https://arxiv.org/abs/2609.17521v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "超光速物体延迟光渲染",
      "sum": "论文提出非相对论设定下有限光速信号的实时渲染方法，超光速物体会呈现多重像。",
      "ta": "纯图形学趣味课题，延迟光/多重像的实时实现思路可作渲染技巧储备。",
      "src": "arXiv · cs.GR · 09-14",
      "url": "https://arxiv.org/abs/2609.16180v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "不透明度不只是遮挡",
      "sum": "论文指出 Web 图形中 opacity 实际控制的是对象与背景的混合方式，而非单纯遮挡程度。",
      "ta": "材质混合语义的澄清，写 UI/材质透明度时值得留意其与背景色的耦合。",
      "src": "arXiv · cs.GR · 09-14",
      "url": "https://arxiv.org/abs/2609.14971v2"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "GPIS 当参与介质渲染",
      "sum": "论文用水平穿越统计把高斯过程隐式曲面与参与介质散射理论双向打通。",
      "ta": "隐式曲面与体积散射的统一理论，对体积雾/参与介质渲染有理论参考。",
      "src": "arXiv · cs.GR · 09-13",
      "url": "https://arxiv.org/abs/2609.14695v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "HKTex 去掉网格特征系统",
      "sum": "论文用局部展开与随机热特征加速 HKTex，免去50次全局拉普拉斯特征分解。",
      "ta": "表面外观表示的性能优化案例，思路可类比到其他依赖全局基的材质方案。",
      "src": "arXiv · cs.GR · 09-12",
      "url": "https://arxiv.org/abs/2609.14105v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "高雅可比六面体细分模板",
      "sum": "论文提出平面面片与高雅可比的两种六面体细分模板，用于自动生成高质量共形六面体网格。",
      "ta": "网格生成偏仿真方向，程序化几何与碰撞体生成可留意其细分策略。",
      "src": "arXiv · cs.GR · 09-13",
      "url": "https://arxiv.org/abs/2609.14729v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "基础模型时代的游戏AI",
      "sum": "HuggingFace 收录论文探讨基础模型时代游戏中的 AI 应用。",
      "ta": "游戏+基础模型的综述性方向，可快速扫一眼其分类框架。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.16679"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 绑定还原 Deadlock 表情",
      "sum": "zombielord999 用 Blender 绑定展示 Deadlock 角色 Mina 的面部表演表现力。",
      "ta": "面部绑定与表演参考，可看其骨骼/形态键组织方式。",
      "src": "80 Level · 09-15",
      "url": "https://80.lv/articles/see-how-expressive-deadlock-s-mina-s-face-can-be-with-this-blender-rig/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "复古FPS敌人AI设计复盘",
      "sum": "独立开发者分享 Agent 64 如何复刻90年代末主机射击游戏的敌人AI，强调可读性优先于智能。",
      "ta": "战斗可读性优先的设计取舍，对特效/反馈设计有借鉴意义。",
      "src": "80 Level · 09-15",
      "url": "https://80.lv/articles/solo-developer-on-recreating-the-late-90s-console-shooter-enemy-ai-for-an-fps/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "角色动画社区挑战作品",
      "sum": "Trần Quốc Khánh 分享其为 Pwnisher 社区挑战制作的 Hellsing 风格角色动画。",
      "ta": "动画表现参考，速览即可。",
      "src": "80 Level · 09-15",
      "url": "https://80.lv/articles/hellsing-ultimate-inspired-character-animation-for-pwnisher-s-community-challenge/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Roblox 允许游戏独立上架",
      "sum": "Roblox 将允许开发者把游戏作为独立应用发布到其他商店，仍沿用相同分成经济。",
      "ta": "平台分发策略变化，关注其对跨平台打包与资源规格的潜在影响。",
      "src": "Game Developer · 09-15",
      "url": "https://www.gamedeveloper.com/business/roblox-will-allow-devs-to-release-games-as-standalone-apps-on-other-stores"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Wardogs 主创拒招批评加班者",
      "sum": "Wardogs 负责人称不会雇佣在社交媒体上抨击 crunch 的人。",
      "ta": "行业劳资话题，速览。",
      "src": "Game Developer · 09-15",
      "url": "https://www.gamedeveloper.com/business/wardogs-lead-says-the-studio-won-t-hire-people-who-decry-crunch-on-social-media"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "政客谈游戏软实力",
      "sum": "华盛顿州州务卿 Steve Hobbs 在 SLICE 与 PAX West 2026 上向开发者推销游戏作为软实力的概念。",
      "ta": "行业政策话题，速览。",
      "src": "Game Developer · 09-15",
      "url": "https://www.gamedeveloper.com/business/why-does-this-prominent-washington-state-politician-think-video-games-can-be-soft-power-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Bohemia 入股 Enjoy Studio",
      "sum": "Bohemia Interactive 收购 Everwind 开发商 Enjoy Studio 的少数股权。",
      "ta": "工作室资本动向，速览。",
      "src": "Game Developer · 09-15",
      "url": "https://www.gamedeveloper.com/business/bohemia-interactive-acquires-minority-stake-in-everwind-developer-enjoy-studio"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "NVIDIA 加速 JAX 无丢弃 MoE 训练",
      "sum": "NVIDIA 用 Transformer Engine 在 JAX 中实现 dropless MoE 训练加速。",
      "ta": "MoE 训练优化与 TA 本职关联弱，但可留意其并行/通信策略对大规模管线调度的思路。",
      "src": "NVIDIA · 09-14",
      "url": "https://developer.nvidia.com/blog/accelerating-dropless-moe-training-in-jax-with-nvidia-transformer-engine/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《漫威金刚狼》9月15日发售",
      "sum": "Insomniac 团队谈如何还原罗根的角色气质，游戏 9 月 15 日登陆 PS5。",
      "ta": "美术向访谈，可速览角色与美术方向，无技术管线细节。",
      "src": "PlayStation Blog · 09-14",
      "url": "https://blog.playstation.com/2026/09/14/marvels-wolverine-developers-discuss-capturing-the-essence-of-logan-out-september-15/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Vidu S2 实时可编辑空间视频生成",
      "sum": "Vidu S2 提出实时交互、可编辑且具空间性的视频生成方案。",
      "ta": "实时可编辑视频生成若成熟，可能影响过场与预渲染素材流程，值得关注其延迟与可控性。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.11638"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "BVB：用 Blender 重建评测视频理解",
      "sum": "BVB 通过 Blender 程序化重建来基准测试智能体视频理解能力。",
      "ta": "用 Blender 做程序化重建评测，与 DCC 工具链和 3D 数据生成有交集，可看其重建管线设计。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.15478"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "LLaDA-UI 引入块状扩散 GUI 智能体",
      "sum": "LLaDA-UI 将块状扩散引入视觉语言 GUI 智能体。",
      "ta": "GUI 智能体方向，与游戏 TA 工作流关联有限，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.13287"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Realtime-Venus 全双工交互系统",
      "sum": "Realtime-Venus 提出带异步委派的全双工交互系统。",
      "ta": "实时交互系统架构，可留意其异步调度思路，与图形管线无直接关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.13814"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Attention-DP3 空间物体感知 3D 扩散策略",
      "sum": "Attention-DP3 通过几何对齐注意力条件实现空间物体感知的 3D 扩散策略。",
      "ta": "偏机器人 3D 策略，与游戏实时渲染关联弱，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.13318"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "EVE Frontier 打造高可模组宇宙",
      "sum": "Fenris 谈 EVE Frontier 的数字物理、模组系统与生产管线如何借鉴 EVE Online。",
      "ta": "可模组化系统与生产管线设计对工具链与内容扩展性有参考价值。",
      "src": "80 Level · 09-14",
      "url": "https://80.lv/articles/interview-how-fenris-is-building-eve-frontier-as-a-massively-moddable-universe/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《Wardogs》24小时破百万销量",
      "sum": "《Wardogs》发售首 24 小时销量突破 100 万份。",
      "ta": "纯销量消息，速览即可。",
      "src": "80 Level · 09-14",
      "url": "https://80.lv/articles/wardogs-sold-over-1-million-copies-in-its-first-24-hours/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender OVERGROWN 预告片发布",
      "sum": "Blender Studio 发布 OVERGROWN 首支预告，展示绘画感后人类世界与开源工作流。",
      "ta": "开源影视制作流程的验证案例，可关注其工具与工作流沉淀。",
      "src": "80 Level · 09-14",
      "url": "https://80.lv/articles/blender-s-overgrown-teaser-is-a-proof-of-concept-for-open-filmmaking/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "80 Level 本周招聘汇总",
      "sum": "汇总 Playground、Insomniac、Respawn、Naughty Dog 等工作室本周职位。",
      "ta": "招聘信息，按规则丢弃价值低，速览。",
      "src": "80 Level · 09-14",
      "url": "https://80.lv/articles/80-level-job-digest-this-week-s-featured-creative-roles/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Psych Rift 动画参考 Old Spice",
      "sum": "分享《Psych Rift》玩法动画制作中引用 Old Spice 广告的参考思路。",
      "ta": "动画参考趣闻，速览即可。",
      "src": "80 Level · 09-14",
      "url": "https://80.lv/articles/unexpected-old-spice-deodorant-reference-for-gameplay-animation/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "2D 插画转双人写实 3D 作品",
      "sum": "Anna Smirnova 分享 No Mercy 项目，用基础网格并在贴图中直接构建细节而非程序化着色器。",
      "ta": "贴图内建细节替代程序化 shader 的做法，对材质制作思路有直接参考。",
      "src": "80 Level · 09-14",
      "url": "https://80.lv/articles/turning-a-2d-illustration-into-a-realistic-two-character-3d-piece/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Valve Steam Frame 售价 1059 美元起",
      "sum": "Valve 公布 Steam Frame 头显定价 1059 美元起，并推出面向 VR 开发者的开发套件。",
      "ta": "新 VR 硬件与开发套件，关注其对 VR 内容性能预算与渲染目标的影响。",
      "src": "Game Developer · 09-14",
      "url": "https://www.gamedeveloper.com/extended-reality/valve-s-steam-frame-will-retail-for-1-059"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "《Moss》开发商 Polyarc 关闭",
      "sum": "西雅图 VR 工作室 Polyarc 在运营十余年后关闭。",
      "ta": "VR 工作室关停，反映 VR 内容市场现状，值得关注。",
      "src": "Game Developer · 09-14",
      "url": "https://www.gamedeveloper.com/business/moss-developer-polyarc-has-shut-down"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "KO_OP 确认裁员 13 人",
      "sum": "工人自治工作室 KO_OP 确认裁撤 13 个岗位。",
      "ta": "行业裁员消息，速览。",
      "src": "Game Developer · 09-14",
      "url": "https://www.gamedeveloper.com/business/worker-owned-studio-ko_op-confirms-layoffs"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "免费Blender工具简化头发绑定",
      "sum": "一款免费Blender工具可沿风格化发丝自动生成变形骨骼链。",
      "ta": "植被/毛发类程序化绑定的思路可借鉴，自动骨骼链生成逻辑或能迁移到草叶、藤蔓等植被骨骼化流程。",
      "src": "80 Level · 09-12",
      "url": "https://80.lv/articles/this-free-blender-tool-makes-hair-rigging-easier/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "科幻恐怖游戏实现视线外房间变换",
      "sum": "开发者liamflannery56在一周内做出「移开视线房间即变化」的科幻恐怖游戏。",
      "ta": "视线触发场景切换是低成本空间叙事技巧，可参考其可见性判定与场景流式加载的实现思路。",
      "src": "80 Level · 09-12",
      "url": "https://80.lv/articles/rooms-change-when-you-look-away-in-this-sci-fi-horror-game/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Cycles 实现真光子焦散",
      "sum": "Blender Cycles 新增真光子追踪焦散，渲染设置勾选即可，兼容现有场景。",
      "ta": "焦散长期是离线渲染痛点，若实现足够稳健，可参考其光子映射思路反哺实时近似方案。",
      "src": "80 Level · 09-11",
      "url": "https://80.lv/articles/true-photon-traced-caustics-for-blender-s-cycles/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "Godot 复刻 PS1 渲染",
      "sum": "开发者基于硬件原理拆解 PS1 图形管线，做成 Godot 复古渲染插件。",
      "ta": "顶点抖动、仿射贴图、低精度深度等 PS1 特性拆解，对理解固定管线与风格化渲染有参考价值。",
      "src": "80 Level · 09-11",
      "url": "https://80.lv/articles/try-this-authentic-ps1-style-rendering-add-on-for-godot/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE+ZBrush 复刻毁灭博士",
      "sum": "作者用 MetaHuman 建模面部、ZBrush 与 Marvelous Designer 制作服装，并做披风磨损。",
      "ta": "MetaHuman 面部 + 传统服装建模的混合流程，磨损细节处理值得一看。",
      "src": "80 Level · 09-11",
      "url": "https://80.lv/articles/making-a-recreation-of-dr-doom-using-unreal-engine-and-zbrush/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "EchoForge 用声音建 3D 世界",
      "sum": "研究结合空间音频分析、场景图与程序化生成，把录音转成 Unity 可探索 3D 环境。",
      "ta": "音频驱动的程序化生成思路，对植被/场景工具的程序化管线设计有启发。",
      "src": "80 Level · 09-11",
      "url": "https://80.lv/articles/echoforge-uses-spatial-sound-to-build-3d-worlds-in-unity/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Steam 泄露未公布成就",
      "sum": "Exophase 发现 Steam 泄露了未发售与未公布游戏的成就信息。",
      "ta": "行业情报向，与 TA 工作无直接关联，速览即可。",
      "src": "80 Level · 09-11",
      "url": "https://80.lv/articles/steam-leak-reveals-achievements-for-unreleased-and-unannounced-games/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rockstar 工会案核心论点",
      "sum": "Rockstar 与被解雇 GTA 开发者双方在工会打压仲裁中提交法律文件陈述论点。",
      "ta": "劳动法务向行业新闻，与 TA 技术工作无关。",
      "src": "Game Developer · 09-11",
      "url": "https://www.gamedeveloper.com/production/rockstar-and-fired-gta-developers-outline-core-arguments-during-union-busting-tribunal"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "13D高斯混合解全局光照",
      "sum": "将光传输方程解表示为位置、方向、法线与材质上的13D高斯混合模型。",
      "ta": "把GI求解统一进高斯表示，若可实时化将直接影响UE5 Lumen类方案的替代思路。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.11430v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "ABCD恒定显存训练大高斯场景",
      "sum": "Alpha合成块坐标下降法将大辐射场分块训练，保持全场景上下文且显存恒定。",
      "ta": "大场景高斯泼溅训练的显存瓶颈解法，对程序化植被/大世界扫描资产重建有直接参考价值。",
      "src": "80 Level · 09-10",
      "url": "https://80.lv/articles/how-abcd-trains-large-gaussian-splat-scenes-with-constant-vram/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "二次相位高斯做全息表示",
      "sum": "CVQPG用2D二次相位函数替换2D高斯，附加可学习曲率参数表示全息图。",
      "ta": "高斯泼溅的复数域扩展，关注其可学习参数设计对泼溅基元表达力的启发。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.11434v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "毫米波雷达点泼溅新视角合成",
      "sum": "提出物理忠实、复值、多视角可解的可微蒙特卡洛雷达光线追踪器。",
      "ta": "非可见光波段的泼溅渲染，关注其复值渲染框架对特殊传感器可视化的借鉴。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.11894v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "反射驱动神经肌肉强化学习",
      "sum": "结合反射机制与强化学习，生成生理合理且可适应扰动的肌肉驱动运动。",
      "ta": "肌肉驱动运动生成，对角色动画物理拟真与程序化运动有潜在参考。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.11733v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "无示范学习高速冲刺运动",
      "sum": "将生物力学运动员模型接入高性能GPU模拟器，无需动作示范生成冲刺运动。",
      "ta": "GPU模拟器+生物力学模型，关注其高性能仿真架构对物理动画的启发。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.11083v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "ReCHOIR跨角色交互动作重定向",
      "sum": "以接触为引导，将人-物交互动作迁移到多样化人形角色并保留语义。",
      "ta": "接触引导的重定向，对角色动画复用与交互资产管线有参考价值。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.10982v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "图像与布局先验联合生成模板",
      "sum": "提出联合图像-布局生成方法，从文本直接产出和谐的设计模板。",
      "ta": "图形设计生成，与实时渲染关联弱，速览即可。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.11519v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "GeoTrussRover可重构机器人",
      "sum": "结合可变几何桁架与移动底座，用接触语义控制原语解决高维协调问题。",
      "ta": "机器人形态计算，与游戏渲染管线无直接关联。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.11361v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "递归代码世界模型构建复杂场景",
      "sum": "通过递归场景程序构建复杂世界，探索代码化世界模型表示。",
      "ta": "若世界模型以程序化场景代码表达，可能影响程序化生成与关卡自动化思路。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.11499"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "World in World世界模型探索",
      "sum": "提出World in World方法，用世界模型进行环境探索。",
      "ta": "世界模型探索方向，关注其对程序化环境生成与AI驱动的潜在影响。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.11548"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "可玩游戏片段助独立游戏曝光",
      "sum": "Ludeo讨论云端即时可玩片段如何降低营销门槛、提升独立游戏愿望单转化。",
      "ta": "发行侧营销手段，与TA日常无直接关系，速览。",
      "src": "80 Level · 09-10",
      "url": "https://80.lv/articles/how-playable-game-moments-could-help-indie-games-get-discovered/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "id老将谈十年后转独立开发",
      "sum": "Doom Eternal艺术总监Tony Garza等分享离开id后创办Turnkey Games的经历。",
      "ta": "行业人物访谈，无技术信息量。",
      "src": "Game Developer · 09-10",
      "url": "https://www.gamedeveloper.com/production/-ship-a-good-game-learn-from-it-and-build-from-there-lessons-from-going-indie-after-a-decade-at-id-software"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Control Resonant扩展辅助模式",
      "sum": "Control Resonant公布围绕新战斗系统设计的扩展Assist Mode，9月24日发售。",
      "ta": "游戏功能宣发，无技术细节。",
      "src": "PlayStation Blog · 09-10",
      "url": "https://blog.playstation.com/2026/09/10/play-your-way-with-control-resonants-expanded-assist-mode/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Muramasa新作定档2027年2月",
      "sum": "Vanillaware与Marvelous公布Muramasa: Revenant Blades将于2027年2月4日发售。",
      "ta": "发售日宣发，速览。",
      "src": "PlayStation Blog · 09-10",
      "url": "https://blog.playstation.com/2026/09/10/muramasa-revenant-blades-launches-february-4-2027/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS商店8月下载榜公布",
      "sum": "亚洲区PS5/PS4/PS VR2下载榜公布，黑神话悟空等居前。",
      "ta": "榜单数据，无技术信息。",
      "src": "PlayStation Blog · 09-10",
      "url": "https://blog.playstation.com/2026/09/09/20260910-top/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "星际大战新作获月度玩家选择",
      "sum": "Star Wars Zero Company获PlayStation玩家选择2026年8月最佳新游。",
      "ta": "玩家投票结果，速览。",
      "src": "PlayStation Blog · 09-10",
      "url": "https://blog.playstation.com/2026/09/10/players-choice-vote-for-augusts-best-new-game-3/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "单步扩散实现实时全局光照",
      "sum": "AMD提出单步潜扩散模型做实时GI，无需迭代即可输出时序稳定的高质量光照。",
      "ta": "若落地，可替代部分光追GI方案，重点关注其时序稳定性与显存/延迟开销。",
      "src": "AMD GPUOpen · 09-09",
      "url": "https://gpuopen.com/learn/temporally-stable-generative-illumination/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "路径追踪按重要性优先渲染",
      "sum": "HiPR分层渐进渲染利用场景变化与光传输，优先渲染最关键的像素。",
      "ta": "对离线/实时PT交互响应有直接参考价值，可借鉴其像素优先级调度思路。",
      "src": "80 Level · 09-09",
      "url": "https://80.lv/articles/how-hipr-makes-path-tracing-feel-more-responsive-by-rendering-what-matters-first/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "CUDA 13.4支持Windows on Arm",
      "sum": "CUDA Toolkit 13.4新增Windows on Arm支持，并加强对共享GPU的控制能力。",
      "ta": "若团队有Arm笔记本或共享GPU调度需求，可评估工具链迁移成本。",
      "src": "NVIDIA · 09-09",
      "url": "https://developer.nvidia.com/blog/cuda-toolkit-13-4-adds-windows-on-arm-support-and-greater-control-over-shared-gpus/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多模态推理EPD解耦优化",
      "sum": "NVIDIA介绍编码-预填充-解码解耦，用于加速多模态模型推理服务。",
      "ta": "偏服务端推理优化，与实时渲染管线关联弱，速览即可。",
      "src": "NVIDIA · 09-09",
      "url": "https://developer.nvidia.com/blog/when-to-use-encode-prefill-decode-disaggregation-to-accelerate-multimodal-model-serving/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "动画VFX前期评审意图对齐",
      "sum": "MOONWALK研究动画/VFX前期评审中意图-证据-动作对齐，减少反复澄清。",
      "ta": "对TA与美术协作流程有参考，可借鉴其评审信息结构化思路。",
      "src": "arXiv · cs.GR · 09-09",
      "url": "https://arxiv.org/abs/2609.10385v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "非局部连续介质半隐式模拟",
      "sum": "SIPD将FEM运动方程重构为成对力表示，统一模拟大规模超弹性材料接触摩擦。",
      "ta": "布料/软组织模拟的潜在新解法，关注其在大规模接触场景的稳定性。",
      "src": "arXiv · cs.GR · 09-09",
      "url": "https://arxiv.org/abs/2609.09834v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "在线真实到仿真自适应",
      "sum": "RealSimLoop用可微降阶仿真与视觉反馈，在线恢复形变物体的内部物理量。",
      "ta": "对数字孪生式物理校准有启发，可关注其视觉反馈闭环的工程可行性。",
      "src": "arXiv · cs.GR · 09-09",
      "url": "https://arxiv.org/abs/2609.09828v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "秒级学习物理角色技能",
      "sum": "InstantMimic提出高性能系统，可在数秒内学习基于物理的角色技能。",
      "ta": "对物理动画与角色控制管线有潜在价值，关注其训练效率与泛化性。",
      "src": "arXiv · cs.GR · 09-09",
      "url": "https://arxiv.org/abs/2609.09821v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "可编程世界模型",
      "sum": "HuggingFace收录Programmable World Model论文，探索可编程的世界模型构建。",
      "ta": "若涉及3D场景生成与可控仿真，值得关注其接口设计。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.10540"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "奇幻RPG角色绑定与动画",
      "sum": "Yeyo Studio拆解兽人、龙等不同解剖结构角色的绑定、蒙皮、移动与战斗动画。",
      "ta": "可复用动画集与引擎测试经验，对多角色管线搭建有直接参考。",
      "src": "80 Level · 09-09",
      "url": "https://80.lv/articles/behind-the-rigging-animation-of-fantasy-action-rpg-characters-like-orcs-and-dragons/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender免费CAD重拓扑工具",
      "sum": "Hardcraft提供免费CAD数据重拓扑，输出四边面与三角面混合网格。",
      "ta": "硬表面资产导入Blender后的拓扑处理可省事，速览工具即可。",
      "src": "80 Level · 09-09",
      "url": "https://80.lv/articles/try-this-free-cad-data-retopology-tool-for-blender/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "老年矮人皱纹皮肤纹理",
      "sum": "Nikita Popp分享矮人项目，讲解老化皮肤纹理难点与Paragon毛发材质使用。",
      "ta": "角色皮肤与毛发材质参考，速览其纹理分层思路。",
      "src": "80 Level · 09-09",
      "url": "https://80.lv/articles/mastering-wrinkly-skin-texture-by-making-an-old-medieval-dwarf-in-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "RAID角色同人建模与贴图",
      "sum": "Dahye Han分享RAID: Shadow Legends爱丽丝同人，讲解皮革与兔毛贴图流程。",
      "ta": "材质细节处理参考，速览即可。",
      "src": "80 Level · 09-09",
      "url": "https://80.lv/articles/modeling-and-texturing-a-fan-art-of-alice-from-raid-shadow-legends/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Cerny与Keighley设游戏奖学金",
      "sum": "Nova Games Foundation每年向20名年轻游戏设计师提供六位数资助。",
      "ta": "行业人才项目，与TA日常无直接关联，速览。",
      "src": "Game Developer · 09-09",
      "url": "https://www.gamedeveloper.com/business/mark-cerny-and-geoff-keighley-launch-university-affiliated-fellowship-program"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xsolla推出游戏B2B平台",
      "sum": "Game Biz Institute是Xsolla推出的游戏行业B2B平台，提供开发者与运营者实践洞察。",
      "ta": "偏商务资讯，速览即可。",
      "src": "80 Level · 09-09",
      "url": "https://80.lv/articles/game-biz-institute-is-a-new-b2b-platform-for-the-game-industry-by-xsolla/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "UE5 Niagara实时VFX教程合集",
      "sum": "Tech-Artists论坛汇总UE5 Niagara实时VFX的教程与拆解。",
      "ta": "Niagara特效学习资源，可按需查阅。",
      "src": "Tech-Artists · 09-07",
      "url": "https://www.tech-artists.org/t/realtimevfx-in-unreal-engine-5-niagara-tutorials-breakdowns/18538"
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
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "开源贴图神器发布",
      "sum": "开源 Substance 3D Painter 替代品 ArmorPaint 1.0 发布，体积极小。",
      "ta": "可作为轻量级贴图工具，适合快速迭代或原型验证，关注其功能覆盖度。",
      "src": "80 Level · 09-07",
      "url": "https://80.lv/articles/open-source-substance-3d-painter-alternative-armorpaint-1-0-released/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "程序化风格天空生成器",
      "sum": "Blender 全程序化风格化天空生成器发布，支持一键生成、动画与导出。",
      "ta": "风格化场景开发中可快速生成天空背景，减少手工贴图依赖，便于迭代。",
      "src": "80 Level · 09-07",
      "url": "https://80.lv/articles/fully-procedural-stylized-sky-generator-for-blender-released/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "头发液态化着色器",
      "sum": "免费 VRChat 着色器可将头发变为动画液体效果，附带水材质贴图。",
      "ta": "实时渲染中探索非传统材质表现，可借鉴其液体动画原理用于特效。",
      "src": "80 Level · 09-07",
      "url": "https://80.lv/articles/this-free-vrchat-shader-turns-hair-into-beautiful-animated-liquid/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "黎明行者销量破百万",
      "sum": "游戏《The Blood of Dawnwalker》全球销量已超过 100 万份。",
      "ta": "行业销量数据可作市场参考，但与本职能关联度低。",
      "src": "80 Level · 09-07",
      "url": "https://80.lv/articles/the-blood-of-dawnwalker-sold-over-1-million-copies-worldwide/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前BioWare设计师辩护",
      "sum": "前 BioWare 设计师为工作室辩护，回应《质量效应》新作质疑。",
      "ta": "行业舆论动态，与 TA 技术工作无直接关联。",
      "src": "80 Level · 09-07",
      "url": "https://80.lv/articles/former-bioware-designer-defends-studio-amid-next-mass-effect-doubts/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前R星开发者盗窃判刑",
      "sum": "前《RuneScape》开发者因窃取玩家超 40 万美元被判刑。",
      "ta": "行业法律事件，与 TA 技术工作无直接关联。",
      "src": "80 Level · 09-08",
      "url": "https://80.lv/articles/former-runescape-developer-sentenced-for-stealing-over-usd400k-from-players/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "木工游戏原型展示",
      "sum": "独立开发者展示木工游戏原型片段，效果惊艳。",
      "ta": "可关注其程序化建模或物理交互实现，但信息有限。",
      "src": "80 Level · 09-07",
      "url": "https://80.lv/articles/indie-dev-shows-a-prorotype-of-a-woodworking-game-and-it-s-amazing/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "统一骨骼动画生成模型",
      "sum": "UniMate 提出统一模型，可驱动多种骨架的动画生成，无需逐骨架微调。",
      "ta": "关注其跨骨架泛化能力，有望简化程序化生成资产的动画绑定流程。",
      "src": "arXiv · cs.GR · 09-04",
      "url": "https://arxiv.org/abs/2609.05415v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高斯泼溅紧凑外观模型",
      "sum": "新方法用紧凑神经模型替代球谐函数，降低高斯泼溅存储与内存带宽。",
      "ta": "对实时渲染性能敏感，此方法可减少显存占用，提升复杂场景渲染效率。",
      "src": "arXiv · cs.GR · 09-04",
      "url": "https://arxiv.org/abs/2609.05255v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高斯泼溅可微蒙皮权重",
      "sum": "GradRig 提出可微权重方法，用于高斯泼溅的骨骼变形，提升动态形变质量。",
      "ta": "涉及高斯泼溅与骨骼动画结合，对程序化生成角色的动态表现有参考价值。",
      "src": "arXiv · cs.GR · 09-04",
      "url": "https://arxiv.org/abs/2609.05127v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "少样本动作风格迁移",
      "sum": "STyMo 实现少样本动作风格迁移，无需大型风格化数据集或预训练模型。",
      "ta": "可快速为角色动作库添加风格变体，提升动画资产多样性。",
      "src": "arXiv · cs.GR · 09-03",
      "url": "https://arxiv.org/abs/2609.04500v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "端到端语音驱动全身动作",
      "sum": "Motion-Omni 实现语音到全身动作的端到端生成，面向对话场景。",
      "ta": "对 NPC 对话动画生成有潜在应用，但需评估其动作质量与实时性。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.04250"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "地铁2039主机光追4K60",
      "sum": "《地铁2039》2月发售，PS5/Xbox实现4K60帧与光线追踪。",
      "ta": "主机平台光追性能标杆，可参考其渲染优化策略与画质取舍。",
      "src": "80 Level · 09-04",
      "url": "https://80.lv/articles/metro-2039-runs-at-4k-with-60-fps-and-ray-tracing-even-on-ps5-and-xbox/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ZBrush雕刻人树角色",
      "sum": "Andrea Buitrago分享将人树角色Uri雕刻成大理石质感3D作品的流程。",
      "ta": "关注角色与植物形态融合的雕刻思路及材质质感表现手法。",
      "src": "80 Level · 09-04",
      "url": "https://80.lv/articles/book-character-to-a-3d-piece-sculpting-human-tree-character-in-zbrush-and-maya/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Deadlock风格蜡烛人动画",
      "sum": "Folio为pwnisher挑战赛创作蜡烛头角色Paraffin的动画作品。",
      "ta": "社区挑战赛作品，可快速浏览角色动画与风格化表现。",
      "src": "80 Level · 09-04",
      "url": "https://80.lv/articles/deadlock-inspired-candleman-animation-for-the-gauntlet-of-gods-challenge/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox云游戏月度时长限制",
      "sum": "Xbox对Game Pass云游戏订阅设置每月5至15小时的游玩上限。",
      "ta": "云游戏服务策略变化，可能影响远程测试与协作流程的可行性。",
      "src": "80 Level · 09-04",
      "url": "https://80.lv/articles/xbox-puts-monthly-limits-on-cloud-gaming-for-game-pass-subscribers/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "VeriPhy世界模型物理推理",
      "sum": "论文提出VeriPhy，用于世界模型评估与改进的智能体物理推理框架。",
      "ta": "世界模型与物理推理结合，或为程序化生成与场景仿真提供新思路。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.03153"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "Capcom详解RE引擎刀剑战斗",
      "sum": "Capcom访谈：RE引擎实时计算刀剑碰撞，含京都环境美术管线。",
      "ta": "RE引擎的实时物理与美术管线结合案例，对战斗特效与场景制作有直接参考价值。",
      "src": "80 Level · 09-03",
      "url": "https://80.lv/articles/how-capcom-built-onimushas-real-time-sword-combat-re-engine/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "TileGS优化高斯溅射光栅化",
      "sum": "TileGS提出瓦片局部深度分箱，减少全局排序流量，提升3DGS渲染效率。",
      "ta": "3DGS光栅化新优化，直接关系实时渲染性能，值得深入评估其对管线的影响。",
      "src": "arXiv · cs.GR · 09-03",
      "url": "https://arxiv.org/abs/2609.03613v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3DGS实时调色编辑框架",
      "sum": "新框架支持3DGS基于调色板的实时颜色与亮度编辑，含独立色调曲线。",
      "ta": "为3DGS场景提供专业级调色工具，可能简化TA在场景后期色彩调整的工作流。",
      "src": "arXiv · cs.GR · 09-03",
      "url": "https://arxiv.org/abs/2609.03897v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "点云神经编辑表面一致性",
      "sum": "P-CORE提出自监督表面一致性方法，用于点云神经表示的非刚性编辑。",
      "ta": "点云表示的可编辑性增强，对TA在资产编辑与变形工作流中有潜在应用。",
      "src": "arXiv · cs.GR · 09-03",
      "url": "https://arxiv.org/abs/2609.03349v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "点云表示几何纹理同编",
      "sum": "PointGT实现点云表示的几何与纹理同步编辑，支持高保真重建。",
      "ta": "点云编辑新方案，可能简化TA对扫描资产的后期处理与修改流程。",
      "src": "arXiv · cs.GR · 09-03",
      "url": "https://arxiv.org/abs/2609.03341v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "相机条件世界模型奖励建模",
      "sum": "WorldReward提出为相机条件世界模型设计奖励建模方法。",
      "ta": "世界模型训练新方向，可能影响未来AI驱动的场景生成工具。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.03952"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "少步生成渲染新方法",
      "sum": "FlashRender通过相机控制视频MeanFlow实现少步生成渲染。",
      "ta": "生成式渲染新思路，可能对实时预览或快速迭代有潜在价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.03563"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "自然肩部衣物绑定技巧",
      "sum": "展示高质量过肩衣物绑定的权重绘制细节。",
      "ta": "衣物绑定权重示例，对角色特效与布料模拟有直接参考价值。",
      "src": "80 Level · 09-03",
      "url": "https://80.lv/articles/perfectly-natural-over-the-shoulder-clothing-rig/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Supercell收购Metacore将完成",
      "sum": "Supercell收购Metacore交易预计本月完成，Merge Mansion将入其组合。",
      "ta": "行业并购动态，对游戏市场格局有间接影响。",
      "src": "Game Developer · 09-03",
      "url": "https://www.gamedeveloper.com/business/supercell-s-acquisition-of-metacore-expected-to-close-this-month"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "汉堡游戏原型资助启动",
      "sum": "Gamecity Hamburg启动第二轮原型资助，最高提供8万欧元。",
      "ta": "地区性资助机会，对独立开发者或小团队有参考价值。",
      "src": "Game Developer · 09-03",
      "url": "https://www.gamedeveloper.com/business/gamecity-hamburg-launches-second-round-of-prototype-funding"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "投影仿射刚体动力学",
      "sum": "提出多体系统投影仿射动力学方法，处理非光滑交互与复杂约束。",
      "ta": "关注其约束求解与稳定性，或可借鉴到植被/布料等程序化物理模拟。",
      "src": "arXiv · cs.GR · 09-02",
      "url": "https://arxiv.org/abs/2609.02675v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "文本驱动图形诗生成",
      "sum": "Telligram用扩散引导骨架优化，从纯文本生成紧凑图形诗。",
      "ta": "文本驱动字形布局思路，或可启发程序化纹理与装饰图案生成。",
      "src": "arXiv · cs.GR · 09-02",
      "url": "https://arxiv.org/abs/2609.02511v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "统一动作重定向至人形",
      "sum": "利用点云对应学习，将人类动作统一重定向到不同人形机器人。",
      "ta": "跨形态动作迁移方法，或可用于多角色动画系统与程序化绑定。",
      "src": "arXiv · cs.GR · 09-02",
      "url": "https://arxiv.org/abs/2609.02134v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "长时程视频世界模型",
      "sum": "SolarWM开放数据与可扩展训练，用于长时程视频世界模型。",
      "ta": "世界模型进展或影响未来实时场景生成与游戏AI预测。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.02886"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "野外视频生成动物动作",
      "sum": "Kirin从野外视频生成动物运动，无需专门动捕设备。",
      "ta": "动物动作生成新数据源，或可辅助游戏内非人形角色动画。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.01823"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Nexus收购SteamDB",
      "sum": "Nexus Mods所有者收购SteamDB，计划利用版本历史识别不兼容模组。",
      "ta": "模组生态数据整合，影响游戏更新对玩家模组兼容性管理。",
      "src": "80 Level · 09-02",
      "url": "https://80.lv/articles/nexus-mods-owner-acquires-steamdb-after-co-founder-struggled-with-burnout/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动森启发六边形球体",
      "sum": "利用《动物森友会》启发技巧构建六边形球体，附Shader展示。",
      "ta": "六边形球体Shader技巧，对风格化植被与几何体生成有借鉴。",
      "src": "80 Level · 09-02",
      "url": "https://80.lv/articles/building-hexagon-sphere-using-animal-crossing-inspired-trick/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 2,
      "title": "鬼武者动捕怪物动画",
      "sum": "CAPCOM分享《鬼武者》多臂怪物动捕动画制作流程。",
      "ta": "多臂怪物动捕与重定向案例，对非人形角色动画管线有直接参考。",
      "src": "80 Level · 09-02",
      "url": "https://80.lv/articles/how-onimusha-way-of-the-sword-s-team-used-motion-capture-for-animating-monsters/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "2.5D视差动画幕后",
      "sum": "Guillaume Scoffié展示音乐艺术家2.5D视差动画制作视口。",
      "ta": "2.5D视差动画工作流，对风格化过场与UI特效有启发。",
      "src": "80 Level · 09-02",
      "url": "https://80.lv/articles/inside-the-making-of-2-5d-parallax-animation-for-music-artist/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "PSX风格恐怖海水",
      "sum": "为DREDGE类恐怖游戏制作PSX风格海水，氛围出色。",
      "ta": "PSX风格水体Shader案例，对低多边形恐怖游戏视觉有参考。",
      "src": "80 Level · 09-02",
      "url": "https://80.lv/articles/beautiful-psx-style-water-for-dredge-like-game-but-scarier/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "金刚狼日本扫描之旅",
      "sum": "Insomniac 团队赴日本进行实景扫描，采集自然与建筑资产用于《金刚狼》开发。",
      "ta": "展示了 3A 工作室外景扫描的流程与规模，可参考其资产采集与整理思路。",
      "src": "PlayStation Blog · 09-01",
      "url": "https://blog.playstation.com/2026/09/01/marvels-wolverine-inside-insomniac-games-location-scanning-trip-to-japan/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "三角形神经渲染基准发布",
      "sum": "MeshSplatBench 提出统一基准，评估基于三角形的神经渲染在标准光栅硬件上的表现。",
      "ta": "为评估可光栅化的神经渲染方法提供标准，对探索混合渲染管线的 TA 有参考价值。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.01306v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "程序化生成可编辑科学图表",
      "sum": "新方法将科学图表生成视为程序合成，可递归生成并支持编辑，优于纯图像生成。",
      "ta": "程序化生成思路或可迁移至技术文档与资产管线中的可编辑图表制作。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.01006v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "可控视频素描风格生成",
      "sum": "HyperSketch 在风格超空间中实现可控的矢量素描动画生成，提升风格多样性与控制力。",
      "ta": "矢量风格化动画的可控生成，对探索非写实渲染与动态分镜的 TA 有启发。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.00919v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "填补动漫上色遗漏区域",
      "sum": "研究聚焦动画上色流程中常见的小面积未上色缝隙，提出针对性填补方法。",
      "ta": "针对 2D 动画管线的痛点，其思路或可辅助 3D 风格化贴图与手绘资产的自动化处理。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.00800v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "线条图逆向绑定优化",
      "sum": "提出从手绘轮廓线逆向推断并优化角色绑定参数的方法，以直接表达艺术意图。",
      "ta": "将 2D 轮廓意图映射到 3D 绑定，为风格化角色动画的创作提供新交互范式。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.00732v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "线图元逆向渲染建模",
      "sum": "新方法利用线图元逆向渲染，捕捉毛发、纤维等模糊各向异性结构用于实时可视化。",
      "ta": "针对毛发等复杂结构的实时渲染建模，对植被与特效资产的程序化生成有直接参考。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.00625v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频推断参数化折纸程序",
      "sum": "FoldingAgent 框架从演示视频中推断显式参数化折纸程序，结合 VLM 与专用工具。",
      "ta": "从视频学习程序化几何操作，或可启发程序化生成中从演示到规则提取的思路。",
      "src": "arXiv · cs.GR · 08-31",
      "url": "https://arxiv.org/abs/2609.00377v1"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "实时体素建筑破坏演示",
      "sum": "Dennis Gustafsson 发布新演示，展示令人满意的实时体素建筑拆除效果。",
      "ta": "体素破坏的实时效果演示，可关注其物理模拟与渲染性能平衡的实现细节。",
      "src": "80 Level · 09-01",
      "url": "https://80.lv/articles/this-real-time-voxel-building-demolition-is-so-satisfying/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "免费高级 Maya 绑定发布",
      "sum": "一款包含面部表情的免费 Maya 绑定，提供高级控制功能供下载。",
      "ta": "可直接用于动画测试与绑定学习，节省制作高质量面部绑定原型的时间。",
      "src": "80 Level · 09-01",
      "url": "https://80.lv/articles/get-this-free-maya-rig-with-advanced-controls/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "免费获取 70+ Shader 教程",
      "sum": "XorDev 提供超过 70 个 Shader 教程的免费访问权限。",
      "ta": "大量 Shader 教程资源，适合系统学习或查漏补缺，提升材质编写能力。",
      "src": "80 Level · 09-01",
      "url": "https://80.lv/articles/get-free-access-to-over-70-shader-tutorials/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "C4D 与 Blender 损伤插件",
      "sum": "Edgy 插件为 C4D 与 Blender 提供六种预设，可创建逼真损伤效果并支持扩展。",
      "ta": "快速生成逼真损伤效果，适合用于场景破坏与资产老化，提升效率。",
      "src": "80 Level · 09-01",
      "url": "https://80.lv/articles/check-out-this-plug-in-for-c4d-blender-that-created-realistic-damage/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Paradox 新作吸引策略新手",
      "sum": "《Afterworld》游戏总监解释如何用 RPG 钩子吸引新玩家进入宏大策略游戏。",
      "ta": "了解策略游戏设计趋势，对理解玩家体验与引导机制设计有参考。",
      "src": "Game Developer · 09-01",
      "url": "https://www.gamedeveloper.com/design/paradox-interactive-s-afterworld-wants-to-entice-new-players-to-grand-strategy-with-tasty-rpg-hooks"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "高斯辐射场刚体变形新法",
      "sum": "提出ARAP约束下的3DGS变形方法，保持局部刚性，提升编辑质量。",
      "ta": "3DGS资产变形是TA做动态场景或角色特效的关键，此方法直接提升可控性。",
      "src": "arXiv · cs.GR · 08-30",
      "url": "https://arxiv.org/abs/2608.29538v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "扩散残差风格化高斯泼溅",
      "sum": "DReSG用扩散模型残差增强3DGS风格化，更好捕捉参考风格细节。",
      "ta": "风格化3DGS是快速迭代概念美术的利器，此方法能提升风格迁移的保真度。",
      "src": "arXiv · cs.GR · 08-29",
      "url": "https://arxiv.org/abs/2608.29048v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "实时流式交互世界模型增强",
      "sum": "Matrix-Game 3.5引入Patch Memory，增强实时流式交互世界模型性能。",
      "ta": "实时交互世界模型是游戏AI和动态环境生成的前沿，值得关注其技术演进。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.29910"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "生成先于重建的潜变量模型",
      "sum": "GenFirst提出先生成后重建的端到端潜变量生成建模，提升稳定性。",
      "ta": "潜变量生成模型稳定性提升，可能影响未来3D资产生成工具的开发方向。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.29335"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "2XKO角色特效制作解析",
      "sum": "Sonia Firsova展示《英雄联盟》格斗游戏2XKO的角色VFX制作细节。",
      "ta": "角色特效的材质和Shader设计是TA核心技能，此案例提供实战参考。",
      "src": "80 Level · 08-31",
      "url": "https://80.lv/articles/take-closer-look-at-character-vfx-made-for-2xko/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Unity闪耀特效制作展示",
      "sum": "展示用Unity制作的精细闪耀VFX效果，视觉上很魔幻。",
      "ta": "Unity特效案例可对比UE5工作流，关注粒子系统和Shader实现差异。",
      "src": "80 Level · 08-31",
      "url": "https://80.lv/articles/check-out-these-detailed-sparkling-vfx-made-with-unity/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender与Krita纹理绘制桥接",
      "sum": "新工具连接Blender场景与Krita绘制，支持投影式纹理绘画。",
      "ta": "纹理绘制工作流优化，可减少DCC工具切换成本，提升贴图制作效率。",
      "src": "80 Level · 08-31",
      "url": "https://80.lv/articles/this-tool-connects-blender-krita-for-texture-painting/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Steam 13TB数据泄露事件",
      "sum": "Steam公开端点泄露13TB数据，含Valve及EA、WB等厂商预发布内容。",
      "ta": "数据泄露可能暴露未发布引擎特性或资产，但需关注官方后续声明。",
      "src": "Game Developer · 08-31",
      "url": "https://www.gamedeveloper.com/pc/report-13tb-of-steam-data-leaked-after-users-access-publicly-accessible-endpoint-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Gamescom设备盗窃事件",
      "sum": "Gamescom独立展区遭窃，多家小团队笔记本电脑和Steam Deck被盗。",
      "ta": "行业展会安全事件，对独立开发者影响大，但无直接技术关联。",
      "src": "Game Developer · 08-31",
      "url": "https://www.gamedeveloper.com/business/indie-devs-and-publishers-hit-in-gamescom-equipment-thefts"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CAD透明渲染综述",
      "sum": "综述CAD中透明渲染的工业部署与底层算法，梳理方法、权衡与挑战。",
      "ta": "透明排序与性能权衡是实时渲染常客，可借鉴CAD工业方案。",
      "src": "arXiv · cs.GR · 08-28",
      "url": "https://arxiv.org/abs/2608.28310v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "铜氧化外观预测PBR化",
      "sum": "提出管线预测铜表面氧化后外观，并转为albedo、法线、粗糙度、金属度贴图。",
      "ta": "材质老化预测直接服务PBR工作流，可扩展至植被或场景风化。",
      "src": "arXiv · cs.GR · 08-28",
      "url": "https://arxiv.org/abs/2608.28102v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "神经纹理压缩线程高效解码",
      "sum": "提出共享解码器MLP与渐进冻结训练，解决NTC的GPU线程分歧问题。",
      "ta": "NTC性能瓶颈在分歧，此方案直接提升运行时解码效率，值得精读。",
      "src": "arXiv · cs.GR · 08-28",
      "url": "https://arxiv.org/abs/2608.27888v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "恒定显存辐射场训练",
      "sum": "ABCD框架以块坐标下降实现3DGS外核训练，仅激活一个空间块参数。",
      "ta": "3DGS训练显存受限，此方法可支撑更大场景，对程序化生成有参考。",
      "src": "arXiv · cs.GR · 08-27",
      "url": "https://arxiv.org/abs/2608.27735v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频生成模型学几何",
      "sum": "论文探讨视频生成模型作为几何学习器的能力，未提游戏或实时应用。",
      "ta": "视频模型几何能力或影响未来3D重建，但当前无直接TA关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.28549"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "自回归视频扩散长记忆",
      "sum": "提出Ring Forcing方法提升自回归视频扩散的长期记忆精度。",
      "ta": "视频扩散长时一致性或影响特效预览，但无实时渲染关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.26794"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频时空定位新方法",
      "sum": "提出高效生成式时空视频定位方法，用于视频中目标定位。",
      "ta": "视频定位与TA工作流无直接关联，仅作AI技术速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.28192"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Claude Code驱动Blender工具",
      "sum": "用Claude Code快速生成Blender工具，提升自动化效率。",
      "ta": "AI辅助工具开发是趋势，可探索用于DCC脚本自动化。",
      "src": "Tech-Artists · 08-29",
      "url": "https://www.tech-artists.org/t/claude-in-blender-quick-blender-tools-with-claude-code/18530"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 1,
      "title": "Roji端到端OpenUSD工作流",
      "sum": "Roji提供场景组装、外观开发、灯光渲染的完整OpenUSD流程。",
      "ta": "OpenUSD标准化是TA管线核心，端到端方案值得深入评估。",
      "src": "Tech-Artists · 08-29",
      "url": "https://www.tech-artists.org/t/introducing-roji-an-end-to-end-openusd-workflow-for-scene-assembly-look-development-lighting-and-rendering/18528"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Epic 八月学习内容发布",
      "sum": "Epic 发布免费学习内容，涵盖网络物理、Mesh Terrain、项目优化与材质创建。",
      "ta": "Mesh Terrain 与材质工作流是 TA 日常，可快速获取官方最新实践。",
      "src": "Unreal Engine · 08-28",
      "url": "https://www.unrealengine.com/learning/augusts-epic-learning-content-networked-physics-dynamic-audio-and-more"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Tripo 攻克 3D 资产拓扑",
      "sum": "Tripo 推出 Smart Mesh，数秒生成可用拓扑，增强艺术家对生成资产的控制。",
      "ta": "生成式 3D 资产若具备干净拓扑，可直接进入 DCC 管线，减少重拓扑工作量。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/how-tripo-is-tackling-clean-topology-for-its-3d-asset-pipeline/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "EditaLive 实时角色视频编辑",
      "sum": "论文提出 EditaLive，用于直播场景的统一角色视频编辑方法。",
      "ta": "实时角色编辑若用于虚拟制片或直播，可能影响 TA 的实时渲染管线设计。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.27123"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Mistfall Hunter 融合魂系与撤离玩法",
      "sum": "Bellring Games 谈魂系战斗与撤离机制结合，及北欧废墟美术风格设计。",
      "ta": "PvPvE 可读性设计对 TA 的视觉引导与特效表现有参考价值。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/interview-how-mistfall-hunter-blends-soulslike-combat-with-dark-fantasy-rpg-extraction-mechanics/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Fable 展示风格化战斗系统",
      "sum": "Fable 新演示聚焦风格化战斗，强调玩家自定义英雄与技能组合。",
      "ta": "风格化战斗的视觉反馈设计，可关注其特效与动画的配合方式。",
      "src": "PlayStation Blog · 08-28",
      "url": "https://blog.playstation.com/2026/08/28/a-new-look-at-fables-style-weaving-combat/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 1,
      "title": "城市示例项目大更新",
      "sum": "City Sample 更新至 UE5.8，新增 PCG 与 Unreal MCP 工作流。",
      "ta": "PCG 与 MCP 工作流是程序化世界构建的核心，值得精读新示例。",
      "src": "Unreal Engine · 08-27",
      "url": "https://www.unrealengine.com/learning/city-sample-gets-a-major-update-with-pcg-and-unreal-mcp-workflows"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 2,
      "title": "AMD FSR 插件更新",
      "sum": "AMD FSR 插件更新至 UE5.8，支持 ML 升频与帧生成。",
      "ta": "FSR 插件更新直接影响 UE5.8 渲染管线的性能优化方案。",
      "src": "AMD GPUOpen · 08-27",
      "url": "https://gpuopen.com/learn/amd-fsr-plugin-updated-for-unreal-engine-58/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "三维重建方法对比评估",
      "sum": "对比摄影测量、NeRF、高斯泼溅等四种三维重建方法。",
      "ta": "了解不同重建方法的优劣，有助于选择资产制作技术路线。",
      "src": "arXiv · cs.GR · 08-27",
      "url": "https://arxiv.org/abs/2608.27301v1"
    },
    {
      "cat": "ai",
      "imp": "hi",
      "rank": 3,
      "title": "程序化控制的三维建模",
      "sum": "提出“形状即代码”范式，实现可编辑的程序化三维建模。",
      "ta": "该研究有望解决生成网格不可编辑的痛点，对程序化资产管线意义重大。",
      "src": "arXiv · cs.GR · 08-26",
      "url": "https://arxiv.org/abs/2608.26238v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "游戏世界动作模型",
      "sum": "GameWAM 提出用于视频游戏的世界动作模型。",
      "ta": "世界模型是游戏 AI 前沿，可能影响未来 NPC 与关卡生成。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.26200"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "代理式游戏开发引擎",
      "sum": "将代理式游戏开发作为可验证轨迹数据引擎，用于扩展世界模型。",
      "ta": "该思路可能为程序化内容生成提供新的数据驱动方法。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.25518"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "实时游戏世界渲染器",
      "sum": "Magpie 提出用于交互游戏的实时世界渲染器。",
      "ta": "实时渲染器是 TA 核心关注点，该技术可能带来渲染管线革新。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.27168"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Blender 2D 风格水门",
      "sum": "艺术家在 Blender 中制作了 2D 风格的水中传送门。",
      "ta": "视差效果制作技巧，可参考用于风格化场景。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/magical-2d-style-aquatic-portal-in-blender/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Godot 重现博德之门着色器",
      "sum": "艺术家在 Godot 中重现了《博德之门3》的遮挡着色器。",
      "ta": "跨引擎着色器实现案例，对理解遮挡效果原理有参考价值。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/artist-recreates-baldur-s-gate-3-s-occlusion-shader-in-godot/"
    }
  ]
};
