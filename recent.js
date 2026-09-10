// daily-intel 近期热点层 —— 由 run.py 自动累积，供「近期」入口翻阅。
// 与 data.js（仅今日新增）分离：data.js 是“今天有什么新的”，recent.js 是“近期攒了啥”。

window.INTEL_RECENT = {
  "updated": "2026-09-10 13:46",
  "cards": [
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
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "3D物体直接生成高分辨率贴图",
      "sum": "SceneHI将2D扩散的高分辨率光照先验提升到3D，无需微调即可在3D物体上生成纹理。",
      "ta": "程序化植被/道具贴图流程的潜在加速点，关注其光照可控性与UV一致性。",
      "src": "arXiv · cs.GR · 09-09",
      "url": "https://arxiv.org/abs/2609.10363v1"
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
      "imp": "mid",
      "title": "暴雪工会合同限制生成式AI",
      "sum": "暴雪工会成员批准覆盖1900名员工的合同，含生成式AI使用护栏与裁员保护。",
      "ta": "AI工具在3A生产中的使用边界正被制度化，值得关注对TA工作流的影响。",
      "src": "Game Developer · 09-09",
      "url": "https://www.gamedeveloper.com/production/blizzard-union-workers-ratify-historic-contract-covering-1-900-employees"
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
      "title": "Blender顶点吸附工具",
      "sum": "免费一键式 Blender 工具，可将顶点吸附至最近表面，修复网格穿插。",
      "ta": "程序化生成或手工建模时，可快速修复植被与地形穿插问题，提升效率。",
      "src": "80 Level · 09-07",
      "url": "https://80.lv/articles/free-one-click-blender-tool-to-snap-vertices-to-nearest-surface/"
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
      "imp": "mid",
      "title": "Blender开放OVERGROWN幕后档案",
      "sum": "Blender Studio限时免费开放动画、绑定、毛发、着色、水效等制作日志。",
      "ta": "毛发与水效等环节的完整生产记录，对植被与特效工作流有参考价值。",
      "src": "80 Level · 09-04",
      "url": "https://80.lv/articles/blender-studio-opens-overgrown-s-free-behind-the-scenes-archive/"
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
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Nomad Sculpt 直连 Blender",
      "sum": "Nomad Sculpt 新增直接链接 Blender 与 ZBrush 功能。",
      "ta": "移动端雕刻到桌面软件的直连，简化了资产制作流程。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/nomad-sculpt-adds-direct-app-linking-to-blender-zbrush/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "低成本 Nanite 视差着色器",
      "sum": "POM 着色器以更低成本实现类似 Nanite 的位移效果。",
      "ta": "支持贴花、材质和地形，是性能敏感场景下的重要替代方案。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/pom-shader-that-achieves-nanite-like-displacement-at-lower-cost/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《星际公民》跳票至2027",
      "sum": "《星际公民》的 Squadron 42 因与 GTA 6 发售期重叠而延期。",
      "ta": "行业发售策略调整，对项目排期有一定参考意义。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/star-citizen-s-squadron-42-delayed-over-gta-6-release-overlap/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "矮人要塞程序化魔法系统",
      "sum": "《矮人要塞》20周年更新将加入程序化魔法系统。",
      "ta": "程序化生成在游戏玩法中的应用案例，值得关注。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/dwarf-fortress-will-get-an-update-with-procedural-magic-systems/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "模块化建筑与植被工作流",
      "sum": "Elie Paquiet 详解《庭院》项目模块化套件与多层着色器制作。",
      "ta": "模块化建筑套件与植被制作流程，对 TA 工作流有直接参考价值。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/modeling-and-texturing-assets-and-foliage-for-a-detailed-3d-environment/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "程序化贝壳石窟制作",
      "sum": "Coraline Lyu 分享用 Substance 3D Designer 与 UE 制作程序化石窟。",
      "ta": "节点式程序化建模与材质流程，是 TA 技能树的重要参考。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/building-a-procedural-shell-grotto-with-substance-3d-designer-unreal-engine/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "巫师4全平台同步开发",
      "sum": "CD Projekt Red 吸取《赛博朋克2077》教训，全平台同步开发《巫师4》。",
      "ta": "跨平台开发策略调整，对多平台渲染优化有间接影响。",
      "src": "Game Developer · 08-27",
      "url": "https://www.gamedeveloper.com/production/cd-projekt-red-has-the-witcher-4-running-on-all-target-platforms-after-cyberpunk-2077-lesson"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏业需拓展北美以外市场",
      "sum": "Saber 高管称游戏行业需寻求北美以外市场以分散风险。",
      "ta": "行业市场策略讨论，对团队项目立项方向有参考意义。",
      "src": "Game Developer · 08-27",
      "url": "https://www.gamedeveloper.com/business/saber-exec-the-game-industry-must-look-beyond-north-america-and-dilute-risk"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "MBC 集团进军游戏业",
      "sum": "沙特 MBC 集团成立游戏工作室，已招募多位资深开发者。",
      "ta": "行业资本动态，可能影响未来人才市场与项目合作。",
      "src": "Game Developer · 08-27",
      "url": "https://www.gamedeveloper.com/business/saudi-owned-media-conglomerate-mbc-expands-into-the-game-industry"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "GLOSS 纹理填充新方法",
      "sum": "GLOSS 提出几何局部自相似学习，忠实参考引导纹理填充。",
      "ta": "对材质/贴图工作流有直接参考价值，可探索几何细节保持的自动纹理生成。",
      "src": "arXiv · cs.GR · 08-26",
      "url": "https://arxiv.org/abs/2608.25461v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Godot 4.8 开发新特性",
      "sum": "Godot 4.8 新增3D轨迹节点、VisualShader节点组、多反弹AO等。",
      "ta": "关注引擎进展，多反弹AO和VisualShader节点组对TA工具链有参考。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/godot-4-8-development-is-in-full-swing/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Morrowind 重制版 RTX 预览",
      "sum": "NVIDIA 展示 Morrowind 重制版路径追踪效果与新资源。",
      "ta": "看路径追踪在经典场景的落地效果，对光照管线有参考。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/nvidia-shows-preview-of-the-elder-scrolls-iii-morrowind-remastered-with-rtx/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "暗黑奇幻角色雕刻流程",
      "sum": "Kang Jeong 详解 CLOCK SAINT 角色四段雕刻与材质金属度粗糙度管理。",
      "ta": "材质参数管理思路对角色贴图工作流有实操参考。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/sculpting-a-dark-fantasy-character-with-clockwork-elements-religious-imagery/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "CDPR 与暴雪合作",
      "sum": "巫师3重制版登陆Battle.net，并推出杰洛特皮肤。",
      "ta": "行业合作动态，对TA无直接技术关联。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/the-witcher-developer-cd-projekt-red-partners-with-blizzard/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Exodus 发售定档 2027",
      "sum": "前质量效应开发者科幻RPG Exodus 2027年4月发售。",
      "ta": "行业动态，关注其技术展示但无直接TA关联。",
      "src": "80 Level · 08-26",
      "url": "https://80.lv/articles/mass-effect-sci-fi-rpg-exodus-launch-date-2027/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "GTA6 大规模泄露事件",
      "sum": "Rockstar 回应 GTA6 大规模泄露，表示心碎。",
      "ta": "行业事件，对TA工作无直接技术影响。",
      "src": "Game Developer · 08-26",
      "url": "https://www.gamedeveloper.com/business/rockstar-games-heartbroken-by-grand-theft-auto-6-leaks"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "育碧推出玩家委员会",
      "sum": "育碧启动Player Council平台，邀请测试早期概念与原型。",
      "ta": "玩家反馈机制，对TA工作流无直接关联。",
      "src": "Game Developer · 08-26",
      "url": "https://www.gamedeveloper.com/business/ubisoft-debuts-player-council-platform-to-expand-early-game-development-feedback"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "世嘉多款新作试玩亮相",
      "sum": "世嘉在Gamescom 2026展出六款可玩新作。",
      "ta": "行业动态，关注新作技术表现但无直接TA关联。",
      "src": "PlayStation Blog · 08-26",
      "url": "https://blog.playstation.com/2026/08/26/sega-gameplay-updates-persona-4-revival-crazy-taxi-world-tour-total-war-warhammer-40000-and-more/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "星球大战策略新作试玩",
      "sum": "Bit Reactor与Respawn合作开发星战策略游戏Zero Company。",
      "ta": "策略游戏技术表现可关注，但无直接TA关联。",
      "src": "PlayStation Blog · 08-26",
      "url": "https://blog.playstation.com/2026/08/26/hands-on-report-star-wars-zero-company/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "卡普空双作试玩报告",
      "sum": "Gamescom试玩洛克人双重重置与龙之信条2暗黑觉醒。",
      "ta": "行业动态，无直接TA技术关联。",
      "src": "PlayStation Blog · 08-26",
      "url": "https://blog.playstation.com/2026/08/26/hands-on-report-mega-man-dual-override-and-dragons-dogma-2-dark-arisen/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PlayStation Plus 九月阵容",
      "sum": "九月PS Plus含狙击精英抵抗、MLB秀26等四款游戏。",
      "ta": "纯商业资讯，无TA关联。",
      "src": "PlayStation Blog · 08-26",
      "url": "https://blog.playstation.com/2026/08/26/playstation-plus-monthly-games-for-september-sniper-elite-resistance-mlb-the-show-26-wobbly-life-chained-echoes/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "赛博朋克枪斗游戏定档",
      "sum": "John Wick风格赛博朋克动作游戏确认明年发售。",
      "ta": "行业动态，无直接TA关联。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/this-cyberpunk-gun-fu-game-gets-a-confirmed-release-window/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Poppy Playtime 新合作游戏",
      "sum": "Poppy Playtime宇宙推出合作生存恐怖游戏Escape from Playtime。",
      "ta": "行业动态，无直接TA关联。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/poppy-playtime-universe-gets-a-new-survival-horror-co-op-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "天野喜孝艺术访谈",
      "sum": "最终幻想艺术家天野喜孝谈视觉风格、跨媒介创作与建议。",
      "ta": "艺术风格参考，对TA审美有启发但非技术。",
      "src": "80 Level · 08-26",
      "url": "https://80.lv/articles/interview-yoshitaka-amano-on-creating-art-that-transcends-games-anime-and-generations/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "演员蒂姆·库里去世",
      "sum": "演员蒂姆·库里去世，享年80岁，曾参与多款游戏。",
      "ta": "行业悼念，无TA技术关联。",
      "src": "Game Developer · 08-26",
      "url": "https://www.gamedeveloper.com/audio/obituary-actor-tim-curry-celebrated-for-his-work-in-games-has-passed-at-age-80"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "语义优先动作编解码器",
      "sum": "SeMoCo提出语义优先的离散动作表示，用于文本生成动作。",
      "ta": "关注动作生成中语义与细节的平衡，对动画管线有参考价值。",
      "src": "arXiv · cs.GR · 08-25",
      "url": "https://arxiv.org/abs/2608.24334v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "视觉中心智能几何编辑",
      "sum": "ViSculpt利用LLM进行视觉驱动的3D几何编辑，减少手动操作。",
      "ta": "探索LLM在DCC工具中辅助几何编辑的潜力，提升效率。",
      "src": "arXiv · cs.GR · 08-25",
      "url": "https://arxiv.org/abs/2608.24169v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "多视图重建可重光照网格",
      "sum": "ExMesh++从多视图图像重建带UV和PBR材质的可编辑网格资产。",
      "ta": "直接产出可用的PBR资产，对程序化资产管线意义重大。",
      "src": "arXiv · cs.GR · 08-25",
      "url": "https://arxiv.org/abs/2608.24109v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "三参数细分曲线设计",
      "sum": "提出一种三参数9点二进制近似细分方案用于曲线形状控制。",
      "ta": "基础数学研究，对曲线建模工具的实现有潜在参考。",
      "src": "arXiv · cs.GR · 08-23",
      "url": "https://arxiv.org/abs/2608.23637v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "扩展位置动力学旋转处理",
      "sum": "利用李群统一处理XPBD中的旋转自由度，提升刚体和Cosserat杆模拟。",
      "ta": "对物理模拟中旋转约束的稳定性有改进，值得关注。",
      "src": "arXiv · cs.GR · 08-21",
      "url": "https://arxiv.org/abs/2608.23606v1"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "地铁新作展示自研引擎进化",
      "sum": "Metro 2039 gamescom预告展示4A引擎最新进化，环境更压抑。",
      "ta": "观察4A引擎在光照、氛围渲染上的技术演进。",
      "src": "80 Level · 08-25",
      "url": "https://80.lv/articles/metro-2039-looks-darker-and-more-claustrophobic-than-ever-in-new-gameplay/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "巫师3免费重制版将发布",
      "sum": "巫师3将获得包含Switch 2版本在内的免费全面重制升级。",
      "ta": "关注重制版在新技术下的画面表现与性能优化。",
      "src": "80 Level · 08-25",
      "url": "https://80.lv/articles/the-witcher-3-is-getting-a-massive-full-remaster-as-a-free-upgrade-very-soon/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Riot停止2XKO开发",
      "sum": "Riot宣布12月停止格斗游戏2XKO的积极开发，因留存不足。",
      "ta": "行业动态，关注格斗游戏市场表现与运营策略。",
      "src": "Game Developer · 08-25",
      "url": "https://www.gamedeveloper.com/business/riot-games-is-winding-down-fighter-2xko-in-december-2026"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Among Us 3D开发商裁员",
      "sum": "Schell Games被报道裁员，此前曾多次谈及避免裁员。",
      "ta": "行业动态，关注外包与协作工作室的稳定性。",
      "src": "Game Developer · 08-25",
      "url": "https://www.gamedeveloper.com/business/report-among-us-3d-dev-schell-games-lays-off-staff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "浏览器游戏新创公司融资",
      "sum": "爱尔兰浏览器游戏公司Entity融资500万美元，目标2027年推出平台。",
      "ta": "关注WebGPU等新技术在浏览器游戏中的应用前景。",
      "src": "Game Developer · 08-25",
      "url": "https://www.gamedeveloper.com/business/irish-browser-games-start-up-entity-raises-5m-in-funding-for-console-quality-games-for-the-new-web-era-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "thatgamecompany成立发行部门",
      "sum": "《光·遇》开发商thatgamecompany宣布成立发行部门thatgamepublisher。",
      "ta": "行业动态，关注独立游戏发行生态变化。",
      "src": "Game Developer · 08-25",
      "url": "https://www.gamedeveloper.com/business/journey-maker-thatgamecompany-announces-thatgamepublisher"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "W4 Games融资扩展Godot",
      "sum": "W4 Games融资1800万美元，并与腾讯合作拓展亚洲Godot生态。",
      "ta": "Godot引擎商业支持增强，可能影响跨引擎工具链选择。",
      "src": "Game Developer · 08-25",
      "url": "https://www.gamedeveloper.com/business/w4-games-raises-18m-to-expand-its-international-team"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini地理追踪器稳定版",
      "sum": "GeoTracker for Houdini发布稳定版，支持Houdini 22。",
      "ta": "用于Houdini的相机追踪工具，对特效合成工作流有用。",
      "src": "Tech-Artists · 08-25",
      "url": "https://www.tech-artists.org/t/geotracker-for-houdini-stable-release-houdini-22-support/18508"
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
      "cat": "gfx",
      "imp": "mid",
      "title": "可微矢量图前向松弛优化",
      "sum": "提出CubicSplat，用误差有界前向松弛实现矢量图可微优化。",
      "ta": "矢量图可微优化对程序化生成和资产管线有潜在价值，可关注其误差控制方法。",
      "src": "arXiv · cs.GR · 08-21",
      "url": "https://arxiv.org/abs/2608.20803v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高斯面片与网格表面重建闭环",
      "sum": "TopoSurfel方法结合高斯面片与网格，提升3DGS表面重建精度。",
      "ta": "3DGS表面重建是TA常用技术，此方法可能改善扫描资产质量。",
      "src": "arXiv · cs.GR · 08-21",
      "url": "https://arxiv.org/abs/2608.20687v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "数字解压盒触感交互",
      "sum": "一款数字解压盒游戏提供令人满足的触觉交互，可试玩。",
      "ta": "关注其交互反馈设计，对游戏手感与UI动效有参考价值。",
      "src": "80 Level · 08-22",
      "url": "https://80.lv/articles/this-digital-fidget-box-game-has-a-lot-of-satisfying-tactile-interactions/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "物理模拟剑斗游戏",
      "sum": "独立开发者用物理模拟武器实现第一人称近战，碰撞反弹锁定偏转全实时。",
      "ta": "关注物理武器交互与玩家操控的实时反馈，对战斗手感设计有参考价值。",
      "src": "80 Level · 08-21",
      "url": "https://80.lv/articles/this-first-person-sword-fighting-game-s-combat-is-100-physics-based/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "真实服装扫描工作流",
      "sum": "Render Ready用真实服装扫描替代数字布料模拟，配合自定义可摆姿势模特。",
      "ta": "了解实拍扫描在角色服装制作中的流程，可能提升资产真实度与效率。",
      "src": "80 Level · 08-21",
      "url": "https://80.lv/articles/building-a-hero-garment-from-real-world-data/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "HTML5游戏转独立网站",
      "sum": "Playgama Wrap免费服务将HTML5游戏转为带支付、分析、SEO的独立网站。",
      "ta": "对游戏分发渠道有影响，但技术含量低，可速览。",
      "src": "80 Level · 08-21",
      "url": "https://80.lv/articles/this-free-tool-turns-html5-games-into-full-standalone-websites/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "黑神话钟馗实机预告",
      "sum": "《黑神话：钟馗》发布15分钟实机预告，画面表现优于前作《悟空》。",
      "ta": "关注国产3A画面表现趋势，但非技术细节，速览即可。",
      "src": "80 Level · 08-21",
      "url": "https://80.lv/articles/see-what-black-myth-zhong-kui-brings-in-15-minute-gameplay-trailer/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rusty Lake新作开发访谈",
      "sum": "Rusty Lake联合创始人谈新作《Servant of the Lake》的谜题设计与世界观。",
      "ta": "了解解谜游戏设计思路，对关卡设计有启发，但非硬核技术。",
      "src": "80 Level · 08-21",
      "url": "https://80.lv/articles/puzzles-lore-inspiration-get-glimpse-of-rusty-lake-development/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Tails of Iron 2免费扩展",
      "sum": "《Tails of Iron 2》免费扩展包上线，新增11个任务、10个Boss和9套护甲。",
      "ta": "游戏内容更新，无技术参考价值。",
      "src": "PlayStation Blog · 08-21",
      "url": "https://blog.playstation.com/2026/08/21/tails-of-iron-2-blood-brine-free-expansion/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "生成式推荐系统新范式",
      "sum": "NVIDIA 探讨生成式推荐系统在规模化的训练挑战与重构。",
      "ta": "虽非游戏直接相关，但生成式架构思路可迁移至程序化内容推荐。",
      "src": "NVIDIA · 08-20",
      "url": "https://developer.nvidia.com/blog/how-generative-recommenders-are-redefining-recsys-at-scale/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "渐进式因果视频世界模型",
      "sum": "ForgeWM 提出少步动作条件视频世界模型的渐进式因果训练。",
      "ta": "视频世界模型进展可能影响未来实时场景生成与交互模拟。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.14022"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Human Fall Flat 开发商推 VR 新作",
      "sum": "开发商宣布一款 cozy VR 解谜游戏，风格延续轻松幽默。",
      "ta": "VR 解谜玩法或带来新的交互设计参考，但技术含量有限。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/human-fall-flat-developers-announce-a-new-cozy-vr-puzzle-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "行业动荡期入行游戏美术时机",
      "sum": "Vertex School 认为行业动荡为掌握基础与工作流的新人创造机会。",
      "ta": "对 TA 新人而言，强调工作流熟练度是入行关键信号。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/why-now-might-be-the-right-time-to-start-a-career-in-game-art/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Aura 加速 Dark and Darker 开发",
      "sum": "IRONMACE 用 Aura 让非技术设计师直接改代码，功能开发时间减半。",
      "ta": "Aura 这类工具可能改变 TA 与策划协作方式，值得关注其工作流潜力。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/how-dark-and-darker-s-devs-used-aura-to-build-a-major-feature-in-half-the-time/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前耻辱2创意总监创立新工作室",
      "sum": "Black Pony Immersive 专注单人第一人称动作 RPG，成员来自 Arkane。",
      "ta": "新工作室动向对行业人才流动有参考，但无直接技术内容。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/ex-dishonored-2-creative-director-founds-his-own-studio-with-former-arkane-devs/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "空洞骑士 Hornet 动画赏析",
      "sum": "Brad Faucheux 制作的 Hornet 动画动作流畅，2D 特效出色。",
      "ta": "2D 动画与特效结合是 TA 可借鉴的视觉表现案例。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/this-hollow-knight-s-hornet-animation-belongs-in-smash-bros/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Blender 与 3DGS 打造梦境巴士",
      "sum": "用 Blender 和 3DGS 制作巴士场景，欠训练产生有趣视觉效果。",
      "ta": "3DGS 欠训练伪影可作风格化手段，探索非写实渲染新路径。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/bus-ride-straight-out-of-dream-made-with-blender-3dgs/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Makers Fund 募资 2.5 亿美元",
      "sum": "Makers Fund 完成 2.5 亿美元融资，扩大游戏行业投资版图。",
      "ta": "资本动向影响行业生态，但对日常 TA 工作无直接指导。",
      "src": "Game Developer · 08-20",
      "url": "https://www.gamedeveloper.com/business/makers-fund-expands-game-industry-footprint-after-closing-250-million-investment-round"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "音频驱动鼓手动作合成",
      "sum": "新方法从音乐音频生成高精度鼓手演奏动作，兼顾高速动态与空间精度。",
      "ta": "对角色动画与程序化动作生成有参考价值，可关注其动作-音频对齐技术。",
      "src": "arXiv · cs.GR · 08-19",
      "url": "https://arxiv.org/abs/2608.19055v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "稻草人转人类角色设计",
      "sum": "Anna Cerutti 分享 Harvey 项目工作流，融合卡通比例与写实细节。",
      "ta": "角色建模与材质混合思路可借鉴，适合生物角色设计参考。",
      "src": "80 Level · 08-19",
      "url": "https://80.lv/articles/breakdown-how-to-design-a-scarecrow-turned-human-character/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "真菌生物雕刻与纹理制作",
      "sum": "Kamil Tondera 详解藤蔓树皮制作工具与手绘材质实现有机外观。",
      "ta": "植被与有机表面材质制作流程，对程序化植被工具开发有启发。",
      "src": "80 Level · 08-19",
      "url": "https://80.lv/articles/sculpting-and-texturing-a-fungal-creature-inspired-by-the-last-of-us/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "阴影驱动角色面部变化",
      "sum": "利用阴影效果让角色面部产生诡异变化，鼓励自行尝试复现。",
      "ta": "光影对角色表现力影响显著，可关注其着色器或光照技巧。",
      "src": "80 Level · 08-19",
      "url": "https://80.lv/articles/shadows-make-this-character-s-face-change-in-the-creepiest-way/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Arkane 老兵成立新工作室",
      "sum": "Harvey Smith 等 Arkane Austin 老将创立 Black Pony Immersive，专注第一人称动作 RPG。",
      "ta": "行业动向，关注其后续技术选型或沉浸式设计理念。",
      "src": "Game Developer · 08-19",
      "url": "https://www.gamedeveloper.com/business/harvey-smith-and-fellow-arkane-austin-veterans-launch-a-new-studio"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "3A 老兵成立合作制工作室",
      "sum": "Raze and Rebuild Studio 由 3A 老兵与无障碍专家创立，采用合作制结构。",
      "ta": "行业模式创新，可关注其协作流程对开发效率的影响。",
      "src": "Game Developer · 08-19",
      "url": "https://www.gamedeveloper.com/business/triple-a-vets-and-accessibility-experts-launch-new-game-dev-co-op-raze-and-rebuild-studio"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "索尼缩减地平线服务型游戏",
      "sum": "Guerrilla 据报因反馈不佳，移除 Horizon Hunters Gathering 的在线服务元素。",
      "ta": "服务型游戏趋势调整，影响在线渲染与后端技术需求。",
      "src": "Game Developer · 08-19",
      "url": "https://www.gamedeveloper.com/business/report-playstation-reworks-horizon-live-service-game-after-negative-feedback"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Human Fall Flat 老兵建新工作室",
      "sum": "Pretty Cool Games 在英国成立，已获融资并开始招聘。",
      "ta": "行业动态，关注其首款作品的技术栈选择。",
      "src": "Game Developer · 08-19",
      "url": "https://www.gamedeveloper.com/business/human-fall-flat-veterans-launch-new-uk-studio-pretty-cool-games"
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
      "title": "RADmesh 重网格感知形变",
      "sum": "提出重网格增强的网格形变方法，避免大形变时三角质量恶化。",
      "ta": "对程序化形变或绑定系统，可改善大形变下的网格质量与稳定性。",
      "src": "arXiv · cs.GR · 08-17",
      "url": "https://arxiv.org/abs/2608.17182v1"
    }
  ]
};
