// daily-intel 近期热点层 —— 由 run.py 自动累积，供「近期」入口翻阅。
// 与 data.js（仅今日新增）分离：data.js 是“今天有什么新的”，recent.js 是“近期攒了啥”。

window.INTEL_RECENT = {
  "updated": "2026-06-30 13:11",
  "cards": [
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "前馈神经渲染框架RenderFormer++",
      "sum": "提出可扩展、物理基础的Transformer前馈神经渲染，用于网格场景全局光照。",
      "ta": "关注其物理一致性改进，可能影响未来实时GI管线设计。",
      "src": "arXiv · cs.GR · 06-29",
      "url": "https://arxiv.org/abs/2606.30380v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "量子碰撞模型渲染相干散射",
      "sum": "结合经典光线追踪与量子碰撞模型，处理动态光学属性散射。",
      "ta": "全新着色框架，可能颠覆材质散射模拟方法，值得深入理解。",
      "src": "arXiv · cs.GR · 06-29",
      "url": "https://arxiv.org/abs/2606.29989v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "薄几何偶极子散射误差分析",
      "sum": "揭示偶极子模型在薄/弯曲物体上的系统误差，提出光学厚度定律。",
      "ta": "直接关联次表面散射渲染精度，对皮肤/树叶等薄材质有指导意义。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29387v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可变形可重光照2D高斯泼溅",
      "sum": "DR-GS实现可变形物体的物理基可重光照，分离照明与材质。",
      "ta": "对VR/AR中动态数字人重光照有直接应用价值。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29379v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "前馈动态高斯场景重建L2D2-GS",
      "sum": "学习稠密化前馈重建动态城市场景，无需逐场景优化。",
      "ta": "提升动态高斯泼溅的可扩展性，适用于自动驾驶仿真。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29374v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "任意尺度超分共振Brane泼溅",
      "sum": "用2D高斯泼溅实现连续放大因子超分，解决平滑伪影。",
      "ta": "可能用于实时纹理/帧上采样，提升渲染质量。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29453v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "自适应分配高斯任意尺度超分",
      "sum": "学习自适应分配高斯用于图像超分，处理连续缩放。",
      "ta": "对引擎中动态缩放和VR注视点渲染有潜在应用。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29400v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实例结构化3D场景标记化",
      "sum": "前馈框架从无位姿视图分解场景为对象级token，而非基元。",
      "ta": "提升3D重建的对象感知能力，利于场景编辑。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29513v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "低计算实时可控世界模型",
      "sum": "DreamForge-World 0.1预览，低计算量实时可控世界模型。",
      "ta": "可能用于游戏内动态场景生成或交互式世界模拟。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.30292"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时扩散流视频编辑LiveEdit",
      "sum": "面向实时流式视频编辑的扩散模型。",
      "ta": "关注实时视频编辑在游戏过场或直播中的应用潜力。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.26740"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视觉世界模型长尾评估修剪",
      "sum": "修剪视觉世界模型评估中的长尾问题。",
      "ta": "对评估生成式世界模型质量有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.24256"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 5.1实时焦散教程",
      "sum": "Alan Wayne分享Blender Cycles中水与玻璃实时焦散方法。",
      "ta": "了解Blender实时焦散工作流，可迁移至UE。",
      "src": "80 Level · 06-29",
      "url": "https://80.lv/articles/tutorial-real-time-caustics-in-blender-5-1-s-cycles/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "科幻复古动漫Blender包即将发布",
      "sum": "cgchefs推出科幻复古动漫风格Blender资源包，开放alpha测试。",
      "ta": "关注风格化资源包，可能用于快速原型。",
      "src": "80 Level · 06-29",
      "url": "https://80.lv/articles/new-blender-pack-for-sci-fi-retro-anime-inspired-art-is-coming/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "角色动画幕后制作解析",
      "sum": "Framed51展示生动角色动画幕后。",
      "ta": "观察角色动画制作细节，可借鉴表情与动态设计。",
      "src": "80 Level · 06-29",
      "url": "https://80.lv/articles/check-out-this-behind-the-scenes-animation-of-an-expressive-character/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "毛发系统自碰撞宽度不一致",
      "sum": "Tech-Artists论坛讨论hairSystems自碰撞宽度缩放问题。",
      "ta": "直接关联UE毛发系统bug，需关注修复进展。",
      "src": "Tech-Artists · 06-29",
      "url": "https://www.tech-artists.org/t/hairsystems-self-collide-width-scale-is-inconsistent/18439"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Supermassive Games CEO离职",
      "sum": "Directive 8020发售后，Supermassive Games CEO离职。",
      "ta": "行业人事变动，可能影响工作室未来方向。",
      "src": "Game Developer · 06-29",
      "url": "https://www.gamedeveloper.com/business/supermassive-games-ceo-steps-down-following-launch-of-directive-8020"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "阿凡达格斗游戏新舞台公布",
      "sum": "Avatar Legends格斗游戏PS5预购开启，公布Spirit Wilds舞台。",
      "ta": "关注游戏美术风格和舞台设计。",
      "src": "PlayStation Blog · 06-29",
      "url": "https://blog.playstation.com/2026/06/29/avatar-legends-the-fighting-game-spirit-wilds-stage-revealed/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "光谱皮肤次表面散射",
      "sum": "从RGB反演生物物理参数实现光谱级皮肤次表面散射渲染。",
      "ta": "对写实角色皮肤渲染有直接参考价值，可探索管线集成。",
      "src": "arXiv · cs.GR · 06-25",
      "url": "https://arxiv.org/abs/2606.27604v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "VFX流程可视化构建器",
      "sum": "一个用于VFX/动画管线的可视化工作流构建工具发布。",
      "ta": "TA可评估该工具能否简化特效与动画的管线搭建。",
      "src": "Tech-Artists · 06-27",
      "url": "https://www.tech-artists.org/t/visual-workflow-builder-for-vfx-animation-pipelines/18433"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE免费学习内容更新",
      "sum": "本月免费内容含MetaHuman、Mesh Terrain及手机拍电影教程。",
      "ta": "Mesh Terrain和MetaHuman教程直接关联植被工具与角色管线，值得快速浏览。",
      "src": "Unreal Engine · 06-26",
      "url": "https://www.unrealengine.com/learning/junes-epic-learning-content-metahumans-mesh-terrain-and-more"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "PUBG Ally AI同伴系统",
      "sum": "KRAFTON用NVIDIA ACE为PUBG构建可对话AI同伴，突破固定对话限制。",
      "ta": "AI同伴系统在实时游戏中落地，可关注其对话与行为逻辑对NPC管线的启发。",
      "src": "NVIDIA · 06-25",
      "url": "https://developer.nvidia.com/blog/how-krafton-built-pubg-ally-a-co-playable-character-powered-by-nvidia-ace/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Temtem开发幕后",
      "sum": "Crema分享Temtem: Pioneers的多人生物收集与生存建造开发挑战。",
      "ta": "多人游戏技术挑战案例，可快速了解其程序化生成与实时战斗管线。",
      "src": "80 Level · 06-26",
      "url": "https://80.lv/articles/temtem-developing-massively-multiplayer-creature-collection-adventure/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "精灵塔光照场景展示",
      "sum": "Daniel Novillo展示精美沉浸式精灵塔光照场景。",
      "ta": "光照与场景艺术参考，可快速浏览其材质与光照设置。",
      "src": "80 Level · 06-26",
      "url": "https://80.lv/articles/take-a-look-at-this-beautiful-and-immersive-elven-tower-lighting-scene/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "2026游戏注意力经济",
      "sum": "玩家时间碎片化，游戏需争夺注意力，Lexi Sydow分析趋势。",
      "ta": "行业趋势分析，对游戏设计方向有参考价值。",
      "src": "80 Level · 06-26",
      "url": "https://80.lv/articles/the-attention-economy-how-games-win-mind-share-in-2026/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "title": "WebXR汽车配置器无像素流",
      "sum": "Miris构建WebXR配置器，1.2GB资产无需云GPU实现HDR级材质。",
      "ta": "无像素流实时渲染方案，对UE5 Web部署与材质性能优化有重要参考。",
      "src": "80 Level · 06-26",
      "url": "https://80.lv/articles/miris-built-a-car-configurator-without-pixel-streaming-here-s-what-they-found/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Skybound游戏战略",
      "sum": "Skybound CEO讨论Invisible VS成功后未来游戏战略。",
      "ta": "行业战略动态，可快速了解发行商方向。",
      "src": "Game Developer · 06-26",
      "url": "https://www.gamedeveloper.com/business/analysts-attempt-to-make-sense-of-xbox-s-exclusivity-mindset-shift"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "Vulkan描述符堆端到端支持",
      "sum": "NVIDIA发布Vulkan描述符堆完整支持，简化着色器资源绑定。",
      "ta": "对UE5渲染管线开发者，这意味着更高效的多线程资源绑定和更低驱动开销。",
      "src": "NVIDIA · 06-25",
      "url": "https://developer.nvidia.com/blog/streamlining-resource-binding-with-end-to-end-support-for-vulkan-descriptor-heaps/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "交互式路径追踪即时反馈",
      "sum": "HiPR算法通过优先级调度像素更新，使路径追踪感觉像实时渲染。",
      "ta": "对实时渲染TA，这是实现电影级光照预览的关键技术，可集成到编辑器视口。",
      "src": "arXiv · cs.GR · 06-25",
      "url": "https://arxiv.org/abs/2606.26612v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "超网络神经纹理压缩",
      "sum": "用超网络学习紧凑纹理表示，实时解码还原PBR材质。",
      "ta": "可大幅降低纹理内存占用，对开放世界植被和材质流送有直接价值。",
      "src": "arXiv · cs.GR · 06-25",
      "url": "https://arxiv.org/abs/2606.26913v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "多视图图像提取神经材质",
      "sum": "NeuMatEx通过可微渲染从多视图图像提取空间变化神经材质。",
      "ta": "为扫描资产自动生成高质量PBR材质提供新路径，减少手工制作。",
      "src": "arXiv · cs.GR · 06-25",
      "url": "https://arxiv.org/abs/2606.26715v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "单色制造保留外观精炼",
      "sum": "方法精炼生成3D网格，在单色打印中保留纹理视觉信息。",
      "ta": "对需要3D打印原型的TA，可减少纹理丢失导致的反复迭代。",
      "src": "arXiv · cs.GR · 06-25",
      "url": "https://arxiv.org/abs/2606.26850v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "城市街景Blender+Substance流程",
      "sum": "Pauline Ferrand分享可平铺纹理制作与顶点着色植物颜色变化。",
      "ta": "可平铺纹理和顶点着色技巧可直接用于UE5植被工具和材质层。",
      "src": "80 Level · 06-25",
      "url": "https://80.lv/articles/creating-an-immersive-urban-street-environment-using-blender-and-substance-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "诅咒骑士建模纹理分解",
      "sum": "Gábor Meggyesi详解盔甲、武器建模及毛发叙事用法。",
      "ta": "角色建模与毛发细节工作流可参考，但非核心TA技术。",
      "src": "80 Level · 06-25",
      "url": "https://80.lv/articles/breakdown-how-to-model-and-texture-a-cursed-knight-with-melancholic-vibes/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "石萨满角色幕后制作",
      "sum": "Mike-Amir El Frangi分享Spellcasters Chronicles角色制作过程。",
      "ta": "角色艺术流程参考，无新技术点。",
      "src": "80 Level · 06-25",
      "url": "https://80.lv/articles/check-out-how-spellcasters-chronicles-stone-shaman-was-made/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "130+毛发卡片资源包",
      "sum": "提供预制毛发卡片集合，可快速创建维京等风格发型。",
      "ta": "节省毛发制作时间，但非技术突破，仅资源推荐。",
      "src": "80 Level · 06-25",
      "url": "https://80.lv/articles/save-time-on-creating-hair-for-your-3d-characters-with-this-collection-of-130-hair-cards/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Bungie大规模裁员",
      "sum": "Sony确认Bungie裁员，影响大部分命运团队和部分Marathon开发者。",
      "ta": "行业动荡可能影响UE5项目人才流动和外包市场。",
      "src": "80 Level · 06-25",
      "url": "https://80.lv/articles/bungie-hit-with-major-layoffs-impacting-most-of-the-destiny-team-and-more/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Meccha Chameleon两周700万销量",
      "sum": "捉迷藏游戏成为最新多人游戏爆款。",
      "ta": "市场趋势参考，无直接技术关联。",
      "src": "Game Developer · 06-25",
      "url": "https://www.gamedeveloper.com/business/meccha-chameleon-sells-7m-copies-in-first-two-weeks"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "VR工作室Combat Waffle裁员",
      "sum": "Ghosts of Tabor开发团队裁员，但仍看好VR未来。",
      "ta": "VR行业动态，可能影响UE5 VR项目生态。",
      "src": "Game Developer · 06-25",
      "url": "https://www.gamedeveloper.com/business/vr-dev-combat-waffle-studios-lays-off-staff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "34BigThings脱离Embracer独立",
      "sum": "意大利工作室从Embracer集团回购独立权。",
      "ta": "行业并购动态，无直接技术影响。",
      "src": "Game Developer · 06-25",
      "url": "https://www.gamedeveloper.com/business/italian-studio-34bigthings-regains-independence-from-embracer"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "万智牌竞技场开发者成功工会化",
      "sum": "尽管被指控干预，万智牌竞技场开发者成功成立工会。",
      "ta": "行业劳工动态，无技术关联。",
      "src": "Game Developer · 06-25",
      "url": "https://www.gamedeveloper.com/business/magic-the-gathering-arena-unionize-despite-allegations-of-interference"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "TensorRT多GPU推理扩展",
      "sum": "NVIDIA TensorRT支持多设备推理，扩展生成式AI跨GPU。",
      "ta": "对游戏AI推理性能有潜在影响，但非实时渲染核心。",
      "src": "NVIDIA · 06-25",
      "url": "https://developer.nvidia.com/blog/scaling-ai-inference-across-multiple-gpus-using-nvidia-tensorrt-with-multi-device-inference-support/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "折纸协同设计AI管线",
      "sum": "COrigami管线协同设计可折叠视觉识别折纸。",
      "ta": "与游戏3D资产生成无直接关联，仅泛AI。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.26299"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "FSR 4.1支持RDNA 3",
      "sum": "AMD FSR SDK 2.3发布，ML超分4.1.1支持RX 7000系列，帧生成与光线重建更新。",
      "ta": "FSR 4.1引入ML超分，对UE5渲染管线中的性能优化与跨平台画质策略有直接影响。",
      "src": "AMD GPUOpen · 06-24",
      "url": "https://gpuopen.com/learn/amd-fsr-sdk-2-3-blog/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "路径追踪立体视差捷径",
      "sum": "路径追踪合成立体数据中MC噪声方差场存在隐藏捷径，影响训练。",
      "ta": "对依赖路径追踪合成训练数据的视差估计管线有潜在影响，需关注数据偏差。",
      "src": "arXiv · cs.GR · 06-24",
      "url": "https://arxiv.org/abs/2606.25483v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "多智能体运动逆设计",
      "sum": "EvoFlock自动调优鸟群、人群等多智能体运动模型参数。",
      "ta": "可用于程序化人群或生物群系动画的自动调参，提升模拟真实感。",
      "src": "arXiv · cs.GR · 06-24",
      "url": "https://arxiv.org/abs/2606.25280v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "基于笼形变纹理传递",
      "sum": "实时纹理传递方法，结合几何滤波，适用于角色化妆与程序化汽车纹理。",
      "ta": "为实时纹理投影提供新方案，可优化角色或载具的细节贴花工作流。",
      "src": "arXiv · cs.GR · 06-23",
      "url": "https://arxiv.org/abs/2606.25220v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "自监督布料持久褶皱",
      "sum": "自监督神经布料模拟引入塑性持久褶皱，提升视觉真实感。",
      "ta": "布料模拟更真实，对角色服装动态与褶皱效果有直接改进潜力。",
      "src": "arXiv · cs.GR · 06-23",
      "url": "https://arxiv.org/abs/2606.25065v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时交互基础模型",
      "sum": "Wan-Streamer端到端实时低延迟全双工音视频交互模型。",
      "ta": "虽非游戏专用，但实时音视频交互能力可能用于NPC对话或直播特效。",
      "src": "arXiv · cs.GR · 06-23",
      "url": "https://arxiv.org/abs/2606.25041v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "改进大语言扩散模型",
      "sum": "改进版大语言扩散模型发布，提升生成质量。",
      "ta": "扩散模型在文本生成领域进展，与游戏内容生成间接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.25331"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "视频虚拟试穿4D代理",
      "sum": "TryOnCrafter利用相机轨迹生成可渲染4D代理实现视频虚拟试穿。",
      "ta": "4D试穿代理技术可迁移至游戏角色换装或虚拟化身系统。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.26092"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "SEGA老兵谈自走棋",
      "sum": "前SEGA开发者Yasuhiro Nishiyama访谈，讨论自走棋类型与三国题材新作。",
      "ta": "行业趋势参考，对TA工作流无直接影响。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/interview-the-sega-veteran-behind-get-wrapped-up-on-sangokushi-bond-and-the-future-of-auto-battlers/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "极限竞速地平线6美术",
      "sum": "Playground Games艺术家分享《极限竞速地平线6》世界创作细节。",
      "ta": "可观摩AAA级开放世界环境美术的资产与场景制作水准。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/take-a-closer-look-at-the-world-of-forza-horizon-6/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 2,
      "title": "UE5.6森林环境教程",
      "sum": "Michael Gerard指导在UE5.6中从零创建生产级森林环境全流程。",
      "ta": "直接关联植被工具与程序化生成工作流，是TA必读的实战教程。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/create-production-quality-forest-environments-from-scratch-in-ue5-6/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Maya免费动画工具包",
      "sum": "Animo工具包加速Maya动画工作流，含空间切换、弧线追踪、烘焙等功能。",
      "ta": "动画辅助工具，可提升角色动画制作效率，间接影响TA的动画数据准备。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/new-free-toolkit-released-for-maya-animators/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "免费人群反应动捕动画",
      "sum": "Anderson Rohr发布免费人群反应动捕动画包。",
      "ta": "可直接用于人群模拟或NPC动画，节省动捕成本。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/check-out-these-free-crowd-reaction-mocap-animations/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Tim Sweeney谈游戏经济",
      "sum": "Epic CEO称新游戏成功需连接其他游戏经济体系。",
      "ta": "行业战略观点，对TA技术决策无直接影响。",
      "src": "Game Developer · 06-24",
      "url": "https://www.gamedeveloper.com/business/tim-sweeney-says-only-hope-for-new-games-is-to-connect-to-economies-of-other-games-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Denmu设立5000万基金",
      "sum": "投资公司Denmu宣布5000万美元游戏开发基金，优先支持作者型开发者。",
      "ta": "行业资金动态，对TA工作流无直接影响。",
      "src": "Game Developer · 06-24",
      "url": "https://www.gamedeveloper.com/business/investment-house-denmu-announces-auteur-first-50-million-fund-for-game-devs"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Trailmark Games成立",
      "sum": "《尼克儿童频道全明星大乱斗》开发商创立授权游戏新发行商。",
      "ta": "行业发行动态，对TA工作流无直接影响。",
      "src": "Game Developer · 06-24",
      "url": "https://www.gamedeveloper.com/business/new-publisher-trailmark-games-promises-new-path-forward-for-licensed-games"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "GTA6定价80美元",
      "sum": "《侠盗猎车手6》预购价80美元，平息百元游戏争议。",
      "ta": "行业定价趋势，对TA技术决策无直接影响。",
      "src": "Game Developer · 06-24",
      "url": "https://www.gamedeveloper.com/console/grand-theft-auto-6-s-80-price-settles-the-100-question"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "UE 5.8 HMI模板发布",
      "sum": "Epic发布UE 5.8 HMI模板与数据缩减管线插件，加速HMI开发。",
      "ta": "UE 5.8新模板与插件可能影响TA在车载/工业HMI项目的渲染管线与数据流设计。",
      "src": "Unreal Engine · 06-23",
      "url": "https://www.unrealengine.com/news/unreal-engine-hmi-template-available-now"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "单图即时高斯编码头像",
      "sum": "FiCA从单张肖像图前馈生成可驱动的高斯编码头像。",
      "ta": "单图生成可驱动3D头像，对角色管线与实时面部动画有潜在应用。",
      "src": "arXiv · cs.GR · 06-23",
      "url": "https://arxiv.org/abs/2606.24232v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "文本嵌入语义融合对齐",
      "sum": "提出Token-to-Token对齐方法，改进文本到图像生成的语义混合。",
      "ta": "文本嵌入对齐技术可提升材质/贴图生成中语义控制的精确度。",
      "src": "arXiv · cs.GR · 06-22",
      "url": "https://arxiv.org/abs/2606.24021v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "扩散Transformer全面评估",
      "sum": "DiffusionBench提出扩散Transformer模型的全面评估基准。",
      "ta": "扩散Transformer评估基准可能影响未来实时生成模型的选型与优化。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.24888"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "FLUX3D高保真高斯生成",
      "sum": "FLUX3D用扩散对齐稀疏表示生成高保真3D高斯场。",
      "ta": "3D高斯生成新方法，对程序化资产与场景生成管线有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.24874"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Epic首席布道师离职",
      "sum": "Epic Games首席布道师Sjoerd De Jong工作12年后离职。",
      "ta": "Epic核心人物离职可能影响引擎社区策略与开发者关系。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/lead-evangelist-sjoerd-de-jong-leaves-epic-games-after-12-years/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ILM灯光TD谈VFX挑战",
      "sum": "ILM资深灯光TD分享动画与实拍VFX灯光差异及全息灯光工作流。",
      "ta": "全息投影灯光与渲染效率平衡经验，对TA在特效灯光设计有启发。",
      "src": "80 Level · 06-23",
      "url": "https://80.lv/articles/ilm-s-senior-lighting-td-on-vfx-challenges-building-hologram-lighting-for-transformers-one-entering-the-industry/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "腾讯考虑退出日本工作室",
      "sum": "报道称腾讯正评估退出多个日本工作室，聚焦UGC平台。",
      "ta": "腾讯投资策略转向可能影响日本合作工作室的引擎技术选型。",
      "src": "Game Developer · 06-23",
      "url": "https://www.gamedeveloper.com/business/report-tencent-mulling-exits-from-multiple-japanese-studios"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Epic免费UE专业课程",
      "sum": "Epic开发者社区免费开放20+门UE专业课程，涵盖动画、游戏开发等。",
      "ta": "可作为团队新人培训或TA技能拓展的免费学习资源。",
      "src": "Unreal Engine · 06-15",
      "url": "https://www.unrealengine.com/news/free-professional-unreal-engine-courses-now-available-on-the-epic-developer-community"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "等变流匹配网格生成",
      "sum": "MeshFlow直接生成三角网格，保持顶点和面的置换不变性。",
      "ta": "直接输出网格的生成方法，可能简化3D资产管线。",
      "src": "arXiv · cs.GR · 06-22",
      "url": "https://arxiv.org/abs/2606.23489v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可控纹理平铺扩散模型",
      "sum": "用变换RoPE增强扩散模型实现可控纹理平铺。",
      "ta": "对材质贴图自动生成和纹理合成有潜在应用。",
      "src": "arXiv · cs.GR · 06-22",
      "url": "https://arxiv.org/abs/2606.22945v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "紧凑位移映射基网格",
      "sum": "DJM用三角形雅可比计算紧凑基网格，支持位移映射。",
      "ta": "直接优化置换贴图基网格，对植被/地形LOD和内存压缩有价值。",
      "src": "arXiv · cs.GR · 06-22",
      "url": "https://arxiv.org/abs/2606.22880v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "光照一致对象迁移",
      "sum": "在辐射场间迁移对象并保持光照一致性。",
      "ta": "对3DGS场景合成和VFX工作流有参考意义。",
      "src": "arXiv · cs.GR · 06-21",
      "url": "https://arxiv.org/abs/2606.22481v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "网格转3DGS白盒构建",
      "sum": "Mesh2GS通过全光采样将网格转换为3DGS表示。",
      "ta": "桥接网格和3DGS管线，可用于资产格式转换。",
      "src": "arXiv · cs.GR · 06-20",
      "url": "https://arxiv.org/abs/2606.21898v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "物理信息微光学合成引擎",
      "sum": "OSOG为微光学环境提供可微物理合成数据引擎。",
      "ta": "专业领域工具，与游戏图形学关联较弱。",
      "src": "arXiv · cs.GR · 06-19",
      "url": "https://arxiv.org/abs/2606.21381v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "物理交互虚拟人化身",
      "sum": "PIAvatar通过变形梯度解耦实现物理交互化身。",
      "ta": "对角色物理交互和动画系统有参考价值。",
      "src": "arXiv · cs.GR · 06-19",
      "url": "https://arxiv.org/abs/2606.21162v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5/Houdini短片制作解析",
      "sum": "Argentum Studio分享UE5/Houdini/Blender短片《The Cradle》制作流程。",
      "ta": "包含自定义毛发渲染系统，对特效和工具开发有参考。",
      "src": "80 Level · 06-22",
      "url": "https://80.lv/articles/creating-surreal-short-film-the-cradle-with-ue5-houdini-blender/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Substance 3D瓢虫材质教程",
      "sum": "Romain Lemaire讲解用Substance 3D SDF制作瓢虫材质。",
      "ta": "材质设计流程参考，SDF用法可迁移到其他生物材质。",
      "src": "80 Level · 06-22",
      "url": "https://80.lv/articles/how-to-design-a-vibrant-ladybug-material-using-substance-3d/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "小团队游戏22小时回本",
      "sum": "独立游戏《Thank You For Your Application》22小时收回开发成本。",
      "ta": "行业案例，与TA技术无直接关联。",
      "src": "Game Developer · 06-22",
      "url": "https://www.gamedeveloper.com/business/-larger-budgets-and-longer-schedules-do-not-lead-to-better-games-thank-you-for-your-application-recoups-dev-costs-in-22-hours"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多模态扩散语言模型",
      "sum": "提出并行区域感知的多模态扩散语言模型。",
      "ta": "与游戏实时渲染无直接关联，可速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.19534"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Houdini泡沫模拟",
      "sum": "Houdini泡沫模拟效果逼真，视觉上令人满足。",
      "ta": "可作为Niagara流体特效的参考，研究泡沫生成算法。",
      "src": "80 Level · 06-19",
      "url": "https://80.lv/articles/this-houdini-foam-simulation-it-s-very-satisfying-to-watch/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "UEFN创作者分成超10亿",
      "sum": "Epic通过UEFN向独立创作者支付超10亿美元。",
      "ta": "UEFN生态成熟，可关注其工具链对TA工作流的影响。",
      "src": "80 Level · 06-19",
      "url": "https://80.lv/articles/epic-games-has-paid-out-over-usd1-billion-to-indie-creators-through-unreal-editor-for-fortnite/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "UE6发布引发行业热议",
      "sum": "开发者对UE5.8、UE6、MCP、AI工作流、Verse等公告反应不一。",
      "ta": "UE6路线图直接影响TA的管线规划，需深入评估新特性。",
      "src": "80 Level · 06-19",
      "url": "https://80.lv/articles/state-of-unreal-ue6-reactions-hype-skepticism-and-what-it-means-for-game-devs/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "Unity线框着色器",
      "sum": "一个使用真实拓扑的Unity线框效果着色器。",
      "ta": "可用于调试或风格化渲染，快速集成到Unity项目。",
      "src": "80 Level · 06-19",
      "url": "https://80.lv/articles/render-wireframe-effects-in-unity-with-this-shader/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Kabam裁员并合并LA办公室",
      "sum": "《漫威冠军之争》开发商Kabam裁员并整合洛杉矶办公室。",
      "ta": "行业裁员动态，但无直接技术关联。",
      "src": "Game Developer · 06-19",
      "url": "https://www.gamedeveloper.com/business/kabam-making-layoffs-after-choosing-to-consolidate-la-office"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏高管卷入秘密社团",
      "sum": "前Xbox总裁和Take-Two CEO被曝与Peter Thiel秘密会议有关。",
      "ta": "行业八卦，无技术价值。",
      "src": "Game Developer · 06-19",
      "url": "https://www.gamedeveloper.com/business/report-former-xbox-president-sarah-bond-and-take-two-ceo-strauss-zelnick-involved-in-peter-thiel-backed-secret-society"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "R星法律挫折与FF税收优惠",
      "sum": "R星法律受挫、最终幻想税收优惠、PlayStation用AI替代PC。",
      "ta": "行业新闻汇总，无直接技术细节。",
      "src": "Game Developer · 06-19",
      "url": "https://www.gamedeveloper.com/business/rockstar-s-legal-setback-final-fantasy-tax-incentives-and-playstation-swaps-pc-for-ai-patch-notes-57"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "李群注意力机制新架构",
      "sum": "首次将注意力token定义为矩阵李群元素，无特征载荷。",
      "ta": "纯数学理论，与实时渲染无直接关联，但可能影响未来几何学习。",
      "src": "arXiv · cs.GR · 06-18",
      "url": "https://arxiv.org/abs/2606.20547v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "TriFlow生成类艺术家网格拓扑",
      "sum": "从SDF等输入直接生成紧凑三角网格，拓扑类似艺术家手工。",
      "ta": "对程序化生成和资产管线有潜在价值，可减少手动拓扑重拓扑工作。",
      "src": "arXiv · cs.GR · 06-18",
      "url": "https://arxiv.org/abs/2606.20131v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "JanusMesh零样本3D视错觉生成",
      "sum": "跨空间去噪实现快速零样本3D视错觉生成。",
      "ta": "3D生成方向新方法，但视错觉在游戏资产中应用有限。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.20563"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "自适应体积力学属性场",
      "sum": "提出分辨率无关的自适应体积力学属性场。",
      "ta": "与物理模拟相关，但未提及实时或游戏引擎应用。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.18231"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Holo-World视频世界模型控制",
      "sum": "统一控制相机、物体和天气的视频世界模型。",
      "ta": "视频生成方向，与游戏实时渲染无直接关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.20083"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型缺乏持久状态核心",
      "sum": "指出当前世界模型缺少持久状态核心。",
      "ta": "AI研究，对游戏引擎管线无直接影响。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.20545"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "JAMER游戏引擎代码框架数据集",
      "sum": "发布专业游戏引擎项目级代码框架数据集和基准。",
      "ta": "对引擎代码分析和工具开发有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.19830"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "AERO 1.7 Unity体积雾着色器",
      "sum": "免费Unity体积雾和薄雾着色器AERO 1.7发布。",
      "ta": "可直接用于Unity项目的体积雾效果，免费资源。",
      "src": "80 Level · 06-18",
      "url": "https://80.lv/articles/aero-1-7-a-volumetric-fog-and-mist-shader-in-unity/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "育碧谈《飙酷车神》RC模式开发",
      "sum": "育碧分享RC Frenzy的自定义物理、关卡设计和玩法系统。",
      "ta": "了解大厂在特殊物理和玩法系统上的技术挑战。",
      "src": "80 Level · 06-18",
      "url": "https://80.lv/articles/interview-ubisoft-transformed-the-crew-motorfest-into-an-rc-playground/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Houdini/EmberGen特效课程",
      "sum": "VFX Apprentice推出Houdini、EmberGen和LiquiGen模拟课程。",
      "ta": "学习特效模拟工作流的培训资源。",
      "src": "80 Level · 06-18",
      "url": "https://80.lv/articles/create-stunning-vfx-in-houdini-embergen-liquigen-with-this-course/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Pocketpair称玩家不想要生成式AI",
      "sum": "Pocketpair公关总监认为生成式AI不会在游戏中太突出。",
      "ta": "行业对AI在游戏中应用的态度参考。",
      "src": "Game Developer · 06-18",
      "url": "https://www.gamedeveloper.com/business/palworld-lead-on-genai-gamers-don-t-want-it"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Maya-Blender资产桥免费工具",
      "sum": "GitHub上发布免费Maya到Blender资产桥工具。",
      "ta": "跨DCC工作流工具，方便资产迁移。",
      "src": "Tech-Artists · 06-18",
      "url": "https://www.tech-artists.org/t/free-maya-blender-asset-bridge-github-link-provided/18419"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "HYPERyuki滑雪游戏开发",
      "sum": "Wabisabi Games 分享多人滑雪游戏 HYPERyuki 的艺术风格与物理设计。",
      "ta": "可了解滑雪物理与艺术风格的结合思路，但非硬核技术突破。",
      "src": "80 Level · 06-18",
      "url": "https://80.lv/articles/wabisabi-games-on-creating-the-sports-game-hyperyuki-snowboard-syndicate/"
    }
  ]
};
