// daily-intel 近期热点层 —— 由 run.py 自动累积，供「近期」入口翻阅。
// 与 data.js（仅今日新增）分离：data.js 是“今天有什么新的”，recent.js 是“近期攒了啥”。

window.INTEL_RECENT = {
  "updated": "2026-10-28 14:45",
  "cards": [
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "UE 5.8 Mutable 正式生产可用",
      "sum": "Mutable 工具集在 UE 5.8 转为 Production-Ready，并同步更新示例工程。",
      "ta": "运行时角色定制管线可正式上项目，值得评估其骨骼/材质变体对性能与包体的影响。",
      "src": "Unreal Engine · 10-27",
      "url": "https://www.unrealengine.com/news/mutable-sample-for-runtime-character-customization-now-updated-for-ue-5-8"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 2,
      "title": "Epic 改 EULA 允许 AI 训练",
      "sum": "Epic 更新 EULA，允许用 UE 与 MetaHuman 输出训练 AI，开发者可按项目限制。",
      "ta": "自研资产与 MetaHuman 产出可能被纳入训练语料，需确认项目合同与资产授权边界。",
      "src": "Game Developer · 10-27",
      "url": "https://www.gamedeveloper.com/programming/epic-is-updating-its-eula-to-allow-ai-training-on-outputs-from-unreal-engine-and-metahuman"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "RTX Spark 平台主打神经渲染",
      "sum": "NVIDIA 推出面向 AI 开发与游戏的 Windows PC 平台 RTX Spark，基于 Blackwell RTX。",
      "ta": "关注其神经渲染与 AI 角色在游戏端的落地形态，判断对渲染管线的新要求。",
      "src": "NVIDIA · 10-27",
      "url": "https://developer.nvidia.com/blog/nvidia-rtx-spark-powers-neural-rendering-and-ai-characters-in-games/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "六边形面元替代高斯泼溅",
      "sum": "提出 Hexels 平面六边形面元与一阶空间颜色场，降低渲染与重建开销。",
      "ta": "紧凑图元思路可参考到植被/地表点云表达，关注显存与重建质量权衡。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37668v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CT 体渲染烘焙为 3DGS",
      "sum": "CTBakeGS 无需训练即可把 CT 体渲染结果烘焙成 3D 高斯泼溅。",
      "ta": "体渲染转实时图元的烘焙思路，可类比体积雾/流体特效的离线转实时方案。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37406v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "VR 无界 3DGS 背景补全",
      "sum": "DomeGS 针对 VR 中无界 3DGS 场景做感知一致的背景补全。",
      "ta": "关注其补全策略对 VR 大场景空洞问题的处理，可迁移到环境搭建流程。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37172v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "路径追踪网格插入高斯场景",
      "sum": "GraftRay 通过路径追踪把网格物体插入 2DGS/3DGS 场景并保证光照一致。",
      "ta": "虚拟物体与扫描场景的光照/阴影一致性，是混合渲染管线的关键参考。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37036v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "MPM 强形变弹性体求解器",
      "sum": "提出基于总形变的 MPM 求解器，可在强形变下恢复且自然处理接触。",
      "ta": "对布料/软体与流体耦合特效的数值稳定性有参考价值。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.36945v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "可复用传输骨架加速 PDE",
      "sum": "用持久化传输骨架复用随机游走轨迹，加速交互式蒙特卡洛 PDE 求解。",
      "ta": "路径复用思路与实时路径追踪降噪有相通之处，可速览。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.36931v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高斯 SLAM 解耦几何与跟踪",
      "sum": "LingGS 将前馈几何预测与相机跟踪解耦，提升单目高斯 SLAM 重建质量。",
      "ta": "扫描/实景重建流程的实时化参考，关注有限优化预算下的质量表现。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.36853v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "长时序任务可视化视角规划",
      "sum": "VISTA 提出可微的视角规划方法，用于长时序任务的 3D 过程可视化。",
      "ta": "与工具链中的自动取景/演示镜头生成有潜在关联，速览即可。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.36111v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "多视图渲染合并为单张纹理",
      "sum": "提出把稀疏多视图渲染整合为单张一致纹理的系统，可接入生成模型。",
      "ta": "与程序化贴图/资产纹理烘焙流程相关，值得看其图集合并策略。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.36098v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5 主材质做风格化小屋",
      "sum": "作者分享模块化资产搭建、UE5 复杂主材质与手工雕刻风格化植被的流程。",
      "ta": "主材质组织与风格化植被手工雕刻，直接对口植被工具与材质性能。",
      "src": "80 Level · 10-27",
      "url": "https://80.lv/articles/building-a-stylized-mountain-cabin-with-modular-assets-and-custom-shaders/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 替代 AE 做 MV",
      "sum": "展示如何在 Blender 而非 After Effects 中完成音乐视频的动态设计。",
      "ta": "Blender 动效工作流可作工具链替代方案参考，速览。",
      "src": "80 Level · 10-27",
      "url": "https://80.lv/articles/see-how-this-music-video-was-made-in-blender-instead-of-after-effects/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 实时运动路径插件更新",
      "sum": "Motion Path Pro 插件新增功能，支持实时运动路径显示。",
      "ta": "动画调试辅助工具，速览即可。",
      "src": "80 Level · 10-27",
      "url": "https://80.lv/articles/real-time-motion-paths-add-on-for-blender-gets-updated/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "几何生成助力空间理解",
      "sum": "论文探讨几何生成任务如何帮助模型进行空间理解与推理。",
      "ta": "与 3D 生成模型能力边界相关，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.36022"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Rockstar 员工投票组建工会",
      "sum": "Rockstar 员工将在 GTA6 发售前两周内投票决定是否承认工会。",
      "ta": "行业劳资动向，关注对 3A 制作节奏的潜在影响。",
      "src": "Game Developer · 10-27",
      "url": "https://www.gamedeveloper.com/business/rockstar-workers-to-vote-on-unionization-ahead-of-grand-theft-auto-vi-release"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Warhorse 遭网络安全事件",
      "sum": "《天国拯救》开发商披露遭遇严重网络安全攻击，正在评估影响。",
      "ta": "提醒项目资产与源码的访问安全，速览。",
      "src": "Game Developer · 10-27",
      "url": "https://www.gamedeveloper.com/programming/warhorse-studios-hit-by-an-undetailed-cybersecurity-incident"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Sucker Punch 裁员 24 人",
      "sum": "Sucker Punch 裁减 24 人，约占团队 10%，称与市场及下个项目需求对齐。",
      "ta": "行业收缩信号，速览。",
      "src": "Game Developer · 10-27",
      "url": "https://www.gamedeveloper.com/business/sucker-punch-lays-off-24-to-align-with-current-market-next-project-needs"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Konami 谈寂静岭多形态布局",
      "sum": "制作人谈寂静岭的创作自由、第一人称恐怖与苏格兰环境还原及系列未来。",
      "ta": "环境还原与美术方向参考，速览。",
      "src": "80 Level · 10-27",
      "url": "https://80.lv/articles/interview-konami-envisions-silent-hill-like-a-premium-tv-series-with-various-game-formats/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CVTSplat 用Voronoi重建多视图",
      "sum": "以自适应质心Voronoi划分做多视图形状与外观重建，降低优化中重复重建开销。",
      "ta": "关注其自适应空间划分思路，或可借鉴到程序化植被分布与LOD划分。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.35347v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "GaussianSpline 动态4D高斯",
      "sum": "用自适应非均匀分段三次贝塞尔样条建模每个高斯运动，实现动态4D高斯泼溅。",
      "ta": "动态场景重建的运动参数化方案，对植被风动等非刚体动画重建有参考价值。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.35224v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "断件模型生成Blendshape",
      "sum": "针对含多个不连通部件的动漫风角色模型，生成ARKit/MediaPipe固定表情Blendshape。",
      "ta": "角色面部管线中处理断件网格的实用案例，可参考其部件拆分策略。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.35076v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "仿昆虫逆折纸曲面成形",
      "sum": "受昆虫变态发育褶皱展开启发，提出逆折纸方法设计曲面成形的褶皱结构。",
      "ta": "几何设计思路偏学术，暂与实时管线距离较远，速览即可。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.34903v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RacerGS 压缩3D高斯泼溅",
      "sum": "用残差自回归上下文构建紧凑3DGS压缩框架，显著降低参数存储与传输量。",
      "ta": "3DGS资产体积是落地瓶颈，压缩方案直接影响扫描植被/场景的运行时内存预算。",
      "src": "arXiv · cs.GR · 10-25",
      "url": "https://arxiv.org/abs/2610.34263v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "单相机可试穿虚拟人建模",
      "sum": "仅用单目视频或单图重建高保真、可动画、可试穿的虚拟人化身。",
      "ta": "单相机重建降低数字人采集门槛，与植被/特效本职关联较弱。",
      "src": "arXiv · cs.GR · 10-25",
      "url": "https://arxiv.org/abs/2610.34223v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "神经服装仿真显式摩擦建模",
      "sum": "为GNN服装仿真引入显式摩擦项与可设摩擦系数μ，替代隐式训练能量中的摩擦。",
      "ta": "布料/软体仿真中摩擦参数可控化，对角色与植被交互的物理表现有借鉴意义。",
      "src": "arXiv · cs.GR · 10-24",
      "url": "https://arxiv.org/abs/2610.33492v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "WorldCast 大角度相机可控角色视频",
      "sum": "提出世界一致的角色视频生成方法，支持大角度相机控制。",
      "ta": "相机可控的角色视频生成，可关注其在镜头运动一致性上的处理方式。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.33135"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "World-in-Context 交互式视频世界模型",
      "sum": "以in-context条件实现可交互的视频世界建模。",
      "ta": "交互式世界模型方向，与实时引擎结合尚早，关注其条件控制接口设计。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.33169"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox 拒Netflix五亿改编约",
      "sum": "报道称Netflix拟以5亿美元改编Xbox多个游戏IP，Xbox为抬价拒绝。",
      "ta": "IP影视化商业动向，与TA日常无直接关系，速览即可。",
      "src": "Game Developer · 10-26",
      "url": "https://www.gamedeveloper.com/business/xbox-reportedly-turned-down-a-500-million-deal-from-netflix-for-adapting-gaming-properties"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "前馈神经渲染做全局光照",
      "sum": "RADIANT 用物体为中心的前馈神经渲染器，无需逐场景优化或运行时光线追踪即可合成全局光照。",
      "ta": "关注其 token 化方式：按物体而非三角形切分，规避自注意力随网格分辨率平方增长，对实时 GI 方案有参考价值。",
      "src": "arXiv · cs.GR · 10-23",
      "url": "https://arxiv.org/abs/2610.32075v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "长时语音动作生成抗漂移",
      "sum": "提出持久状态分块流匹配方法，用状态记忆与注意力缓解长时共语动作生成的风格漂移。",
      "ta": "分块生成+持久状态的长序列一致性思路，可借鉴到程序化动作/动画长片段生成流程。",
      "src": "arXiv · cs.GR · 10-23",
      "url": "https://arxiv.org/abs/2610.32373v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "VLA 智能体玩开放世界游戏",
      "sum": "HiSTEVE 1.0 利用人机界面视觉语言动作智能体，在开放世界游戏中执行操作。",
      "ta": "关注其如何把游戏画面接口转成动作空间，对自动化测试与游戏内 AI 行为有潜在参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.31162"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多模态智能体与世界模型评测",
      "sum": "Dual Exam 提出受控评测框架，用于评估多模态智能体与世界模型。",
      "ta": "若涉及世界模型评测维度，可留意其指标设计，但原文未提引擎或渲染关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.31066"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "浏览器版 2D 动画编辑器",
      "sum": "Rigby2D v0.2.6 发布，可在浏览器中直接试用完整 2D 动画编辑器。",
      "ta": "轻量 2D 绑定/动画工具，可速览其交互设计，与植被/3D 管线关联有限。",
      "src": "Tech-Artists · 10-25",
      "url": "https://www.tech-artists.org/t/rigby2d-v0-2-6-is-out-you-can-now-try-the-full-2d-animation-editor-directly-in-your-browser/18591"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Bluey 2D 风格靠自定义 Shader",
      "sum": "Gameloft 用 SDF 贴图、2D 平面、自定义 Shader 与 UE Control Rig 复刻手绘风。",
      "ta": "看 SDF 贴图与自定义 Shader 如何在 UE 里稳定还原 2D 手绘轮廓，Control Rig 部分可参考绑定流程。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/bluey-s-simple-2d-look-required-gameloft-s-most-technically-challenging-art-pipeline/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Tripo P2.0 打通 Blender 与 Unity",
      "sum": "Tripo 介绍 P2.0 与 Astra 在 Blender、Unity 中完成生成、绑定到动画的流程。",
      "ta": "关注 3D 原生基础模型输出资产进引擎后的质量控制与人工美术指导环节。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/how-tripo-p2-0-astra-work-together-in-blender-and-unity/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Houdini 水体特效转 Solaris 复活",
      "sum": "Mario Sánchez Aguado 分享由 Maya 项目转为 Houdini 水模拟、经 Solaris 完成的作品。",
      "ta": "可看 Solaris 流程下发光水体 FX 的搭建思路，对流体特效与灯光合成衔接有参考。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/this-dreamy-wooden-cabin-scene-with-glowing-water-fx-was-made-with-houdini/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "GameMaker 新运行时将免费商用",
      "sum": "GMRT 运行时自 2027 年起对所有开发者免费商用，各档位均开放源码。",
      "ta": "2D 引擎运行时开源免费，对轻量工具链选型有影响，与 UE 主线工作关联有限。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/gamemaker-s-new-runtime-will-become-free-for-commercial-use/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "GMRT 运行时 2027 全面免费",
      "sum": "GameMaker 的 GMRT 运行时将从 2027 年起对所有开发者免费使用。",
      "ta": "同一事件另一来源，仅作速览，无需重复精读。",
      "src": "Game Developer · 10-23",
      "url": "https://www.gamedeveloper.com/programming/gamemaker-s-gmrt-runtime-will-soon-be-free-for-all-commercial-devs"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "3ds Max/Maya 肌肉模拟插件测试",
      "sum": "Shirzad Bahrami 展示受 Ziva VFX 启发的肌肉模拟插件，正式发布前开放测试。",
      "ta": "角色肌肉解算工具，偏离线建模流程，与实时管线关联较弱。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/artist-shows-ziva-vfx-inspired-muscle-simulation-plug-in-for-3ds-max-maya/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RLSplat 给 3DGS 加预算控制",
      "sum": "RLSplat 为前馈 3D Gaussian Splatting 提供资源线性预算控制。",
      "ta": "关注 3DGS 在固定显存/算力预算下的可控性，对程序化场景与实时渲染有潜在价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.27712"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "HyperDrone 实现百万帧仿真迁移",
      "sum": "HyperDrone 以每秒百万帧级仿真实现从仿真到现实的迁移。",
      "ta": "大规模仿真吞吐思路可借鉴，但与游戏实时渲染管线距离较远。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.28950"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Raw Fury CEO 谈独立游戏发行",
      "sum": "Pim Holfve 谈发行变迁、独立发行现状及选品标准。",
      "ta": "纯行业访谈，与 TA 技术工作无关，速览即可。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/on-the-lookout-for-games-that-make-you-feel-something-raw-fury-ceo-on-game-publishing/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "半条命 3 代号 HLX 再被提及",
      "sum": "Valve 员工在 GameSoundCon 上提到粉丝讨论两年的代号 HLX。",
      "ta": "传闻性质，无技术信息，速览即可。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/rumored-half-life-3-title-hlx-gets-mentioned-by-valve-employee/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "赛博朋克 2 任务团队半数出身 Mod",
      "sum": "CDPR 副总监称续作任务团队约一半成员曾是 Mod 作者。",
      "ta": "人才来源话题，与渲染/工具技术无关。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/half-of-cyberpunk-2-s-quest-team-are-former-modders-says-associate-game-director/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Saros 打造 Carcosa 首领战",
      "sum": "Housemarque 与 Nixxes 合作完成 Saros 的 Boss 遭遇设计与动画。",
      "ta": "偏关卡与动画协作流程，技术细节有限。",
      "src": "PlayStation Blog · 10-23",
      "url": "https://blog.playstation.com/2026/10/23/saros-creating-the-epic-overlords-of-carcosa/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Epic办AI游戏Jam赛",
      "sum": "2026 Epic AI MegaJam于11月12-15日举行，用UE或UEFN组队做可玩游戏赢奖金。",
      "ta": "看参赛作品能了解AI agent在UE工作流里的实际落地方式。",
      "src": "Unreal Engine · 10-22",
      "url": "https://www.unrealengine.com/news/2026-epic-ai-megajam"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高度场高斯泼溅重建曲面",
      "sum": "H-2DGS用高度场高斯泼溅做神经外科手术表面的锐利可变形重建。",
      "ta": "高度场约束2DGS的思路可借鉴到地形/植被表面的高质量重建。",
      "src": "arXiv · cs.GR · 10-22",
      "url": "https://arxiv.org/abs/2610.30910v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "跨游戏实体一致生成渲染",
      "sum": "AnyGameRenderer实现跨游戏的实体一致生成式渲染，并给出实体级基准。",
      "ta": "实体一致性是生成式渲染进游戏管线的关键卡点，值得看其评测口径。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.31466"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "HD-2D像素艺术电影化管线",
      "sum": "FF Resonance制作人谈HD-2D管线、动态镜头、精灵调整、光照与VFX。",
      "ta": "像素风下的光照与VFX处理手法，对风格化渲染有直接参考价值。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/interview-how-final-fantasy-resonance-turns-hd-2d-pixel-art-into-a-cinematic-experience/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "废弃场景自定义材质流程",
      "sum": "作者分享地中海废弃房屋场景，讲多边形分配技巧与Substance Designer自定义材质。",
      "ta": "多边形预算分配与程序化材质搭建，是环境TA的日常可复用经验。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/building-an-abandoned-the-last-of-us-inspired-mediterranean-house-with-custom-materials/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender做2D漫画角色",
      "sum": "Chloe Worthy用Blender将热门漫画封面角色做成3D版本。",
      "ta": "2D转3D的角色还原流程，可看其造型与材质简化取舍。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/these-2d-characters-from-popular-manga-are-made-in-3d-with-blender/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox新主机与掌机传闻",
      "sum": "报道称Xbox Helix主机价格已有估算，掌机计划2027年，另有Game Pass调整与裁员。",
      "ta": "平台周期与订阅策略变化，间接影响项目排期与目标硬件规格。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/xbox-helix-console-price-reportedly-estimated-handheld-planned-for-2027/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "被取消质量效应预告泄露",
      "sum": "BioWare已取消的质量效应项目预告片疑似泄露，曝光标题与剧情设定。",
      "ta": "纯行业八卦，对技术工作无直接参考。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/trailer-for-bioware-s-canceled-mass-effect-game-apparently-leaks-online/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "狼人内部重制思路披露",
      "sum": "Telltale创意副总裁谈《我们之中的狼》重制版如何在保留原作内核前提下提升表现。",
      "ta": "重制项目的取舍思路，可参考美术升级与保真之间的平衡。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/telltale-aims-to-make-the-wolf-among-us-remaster-shine-without-changing-the-heart-of-the-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "VR工作室转向XR新作",
      "sum": "Owlchemy Labs新作Hyper Visor将作为HTC XREAL Aura头显首发游戏。",
      "ta": "XR平台动向，关注其对渲染性能预算的额外约束。",
      "src": "Game Developer · 10-22",
      "url": "https://www.gamedeveloper.com/extended-reality/vr-pioneer-owlchemy-labs-pivots-to-xr-for-its-next-release"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "核心团队话语的代价",
      "sum": "评论文章讨论游戏开发中过度强调核心团队会如何影响流程与其他开发者。",
      "ta": "团队协作语境，与具体技术无关，速览即可。",
      "src": "Game Developer · 10-22",
      "url": "https://www.gamedeveloper.com/production/opinion-why-prioritizing-success-of-core-teams-risks-devaluing-other-devs"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "强化学习驱动肌肉角色动画",
      "sum": "RLMuscle 用强化学习自动生成肌肉激活，替代手工指定，提升形变物理真实感。",
      "ta": "角色形变管线可参考其自动肌肉激活思路，减少手工调参。",
      "src": "arXiv · cs.GR · 10-21",
      "url": "https://arxiv.org/abs/2610.30033v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "文本自动生成物理参数",
      "sum": "AutoPhyX 从文本条件自动生成物理属性参数，服务高保真 4D 物理仿真。",
      "ta": "程序化生成物理材质参数时可借鉴，免去逐场景优化。",
      "src": "arXiv · cs.GR · 10-21",
      "url": "https://arxiv.org/abs/2610.29517v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "XR 开发编码智能体基准",
      "sum": "GenXR-Bench 提出评估编码智能体构建交互式 XR 应用的基准。",
      "ta": "关注智能体在 XR 动态场景下的工程能力评测维度。",
      "src": "arXiv · cs.GR · 10-21",
      "url": "https://arxiv.org/abs/2610.29014v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "流式生成可交互3D世界",
      "sum": "WorldStream 用分层规划与持久状态，流式扩展可玩地形并恢复编辑过的场景。",
      "ta": "程序化世界生成可参考其持久状态与分层规划架构。",
      "src": "arXiv · cs.GR · 10-20",
      "url": "https://arxiv.org/abs/2610.28827v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "虚拟世界规模化训练具身智能",
      "sum": "研究在多样虚拟世界中持续预训练具身智能体，探索游戏环境规模化训练。",
      "ta": "游戏虚拟世界作为具身智能训练场的思路值得留意。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.28698"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频扩散块稀疏注意力分配",
      "sum": "提出免训练的输出导向块稀疏注意力分配，用于视频扩散 Transformer。",
      "ta": "视频扩散推理加速思路，可类比实时渲染中的稀疏计算。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.29441"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型视觉状态编码器",
      "sum": "ALPS 提出面向世界模型的视觉状态编码器。",
      "ta": "世界模型状态表征方法，与程序化生成潜在相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.30120"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "赛博朋克2077再推免费更新",
      "sum": "2.5 更新加入双持、义体定制、跨平台模组与重大渲染升级。",
      "ta": "关注其渲染升级具体改了什么，可作管线参考。",
      "src": "80 Level · 10-21",
      "url": "https://80.lv/articles/cdpr-somehow-found-another-reason-to-update-cyberpunk-2077-again-for-free/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "古墓丽影谈30年关卡设计",
      "sum": "游戏总监回顾 30 年 3D 关卡设计演变，涉及相机技术与可选引导系统。",
      "ta": "关卡与相机设计演进视角，对场景搭建有启发。",
      "src": "80 Level · 10-21",
      "url": "https://80.lv/articles/tomb-raider-director-explains-how-3d-level-design-has-evolved-over-30-years/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 1,
      "title": "Substance Painter 12.2 可直接绘制烘焙笼",
      "sum": "12.2 引入笼体绘制、更智能多边形填充、纹理集高亮与重叠透明材质实时渲染改进。",
      "ta": "烘焙笼绘制与透明材质实时渲染改进直接影响贴图烘焙与材质工作流。",
      "src": "80 Level · 10-21",
      "url": "https://80.lv/articles/substance-3d-painter-12-2-lets-artists-paint-baking-cages-directly-on-models/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "RPG Maker U2U 免3D做HD-2D",
      "sum": "U2U 用 P2D 地图、氛围特效与 Lua 插件，让开发者无需学 3D 构建 HD-2D 世界。",
      "ta": "HD-2D 风格化管线思路，可参考其氛围特效做法。",
      "src": "80 Level · 10-21",
      "url": "https://80.lv/articles/interview-rpg-maker-u2u-lets-you-build-hd-2d-worlds-without-learning-3d/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Houdini/C4D 风格化绘画着色器",
      "sum": "YMA Painterly 提供 12 个着色器，在 C4D 与 Houdini 中实现绘画风格化外观。",
      "ta": "风格化着色器实现思路，可借鉴到材质与 NPR 效果。",
      "src": "80 Level · 10-21",
      "url": "https://80.lv/articles/how-to-make-3d-look-like-a-stylized-painting-with-shaders-in-houdini-c4d/"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 2,
      "title": "EA 关闭 BioWare",
      "sum": "EA 关闭成立 30 年的 BioWare，裁员约 400 人，其中 50 人为其剩余员工。",
      "ta": "行业地震级工作室关闭，关注其对 3A 团队与人才流动的影响。",
      "src": "Game Developer · 10-21",
      "url": "https://www.gamedeveloper.com/business/ea-closes-mass-effect-dragon-age-creator-bioware-after-30-years-of-game-development"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "视频模型驱动可玩世界",
      "sum": "Matrix-Game 4.0 提出将游戏执行与视觉生成分离的可执行游戏框架路线图。",
      "ta": "关注其「执行与渲染解耦」思路，对实时生成式场景与低延迟交互架构有参考价值。",
      "src": "arXiv · cs.GR · 10-20",
      "url": "https://arxiv.org/abs/2610.27999v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "3DGS 遮挡感知致密化",
      "sum": "指出 3DGS 自适应密度控制的视锥可见性过滤无视遮挡，提出按贡献而非视角计数致密化。",
      "ta": "3DGS 重建质量与冗余高斯问题的直接改进点，做扫描/资产重建流程值得读。",
      "src": "arXiv · cs.GR · 10-19",
      "url": "https://arxiv.org/abs/2610.27108v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "视频动作迁移到任意骨架",
      "sum": "提出联合生成 3D 运动与视频的方法，可把视频中的动作重定向到任意 3D 骨架资产。",
      "ta": "若落地可打通视频参考到骨骼动画的管线，对程序化动画与动捕替代有想象空间。",
      "src": "arXiv · cs.GR · 10-20",
      "url": "https://arxiv.org/abs/2610.28632v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "精灵动画神经方向帧生成",
      "sum": "面向游戏精灵动画，提出可控方向帧生成，支持中间帧插值与向前外推。",
      "ta": "2D 序列帧工作流的自动化补帧方向，可关注其外推能力对循环动画的适用性。",
      "src": "arXiv · cs.GR · 10-19",
      "url": "https://arxiv.org/abs/2610.27253v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "几何感知模型排布物体",
      "sum": "GALA 用几何感知语言模型推理支撑、包含等细粒度约束，实现可控 3D 场景物体摆放。",
      "ta": "程序化场景布置的语义约束求解思路，对植被/道具散布规则设计有借鉴。",
      "src": "arXiv · cs.GR · 10-20",
      "url": "https://arxiv.org/abs/2610.28280v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "NeRF 自监督几何正则",
      "sum": "提出跨射线自监督一致性正则，缓解 vanilla NeRF 密度场几何噪声与不准。",
      "ta": "NeRF 几何质量基础改进，做体积重建或深度提取时可留意。",
      "src": "arXiv · cs.GR · 10-20",
      "url": "https://arxiv.org/abs/2610.27776v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "LiDAR 神经隐式能量优化",
      "sum": "针对稀疏噪声 LiDAR 输入，用神经隐式能量优化抑制 SDF 抖动与伪影。",
      "ta": "偏测绘/大场景重建，与游戏管线关联较弱，速览即可。",
      "src": "arXiv · cs.GR · 10-20",
      "url": "https://arxiv.org/abs/2610.28598v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "少步生成式参考渲染",
      "sum": "SolarRenderer 提出少步数的生成式参考渲染方法。",
      "ta": "少步扩散用于渲染出图，关注其是否能进入概念/参考图快速迭代流程。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.28630"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "可动画高斯化身查询",
      "sum": "HumanSkill-4D 实现免训练的语言查询时空可动画高斯化身。",
      "ta": "数字人/化身方向，与植被和特效本职距离较远，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.24452"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型校正训练",
      "sum": "提出面向扩散模型的校正训练方法。",
      "ta": "通用扩散训练技巧，暂无明确引擎/实时关联，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.14136"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "新维加斯模组加路径追踪",
      "sum": "WIP 模组为《辐射：新维加斯》加入路径追踪、物理天空体积云与真实光源改造。",
      "ta": "老引擎改造案例，可看其光源与天空系统替换手法对自研管线的启发。",
      "src": "80 Level · 10-20",
      "url": "https://80.lv/articles/this-wip-mod-adds-path-tracing-to-fallout-new-vegas/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini 水体特效拆解",
      "sum": "Yuki Ito 发布其 Houdini 水体 FX 展示卷的拆解版本。",
      "ta": "流体特效参考，可看其水体解算与渲染组织方式。",
      "src": "80 Level · 10-20",
      "url": "https://80.lv/articles/yuki-ito-released-a-breakdown-version-of-their-houdini-water-fx-showreel/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Plasticity 2026.2 发布",
      "sum": "Plasticity 2026.2 新增曲率分析着色器、边对齐选项与 PolySplines 控制点编辑。",
      "ta": "CAD 建模工具更新，曲率分析着色器对硬表面建模检查有用。",
      "src": "80 Level · 10-20",
      "url": "https://80.lv/articles/3d-modeling-cad-software-plasticity-2026-2-has-been-released/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Fuse Games 谈联合开发框架",
      "sum": "Fuse Games CEO 拆解《星球大战：银河赛车》的分布式联合开发框架。",
      "ta": "制作管理向内容，关注跨团队协作分工方式即可。",
      "src": "Game Developer · 10-20",
      "url": "https://www.gamedeveloper.com/production/fuse-games-ceo-breaks-down-codev-framework-for-star-wars-galactic-racer"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "开发者警告发行合同陷阱",
      "sum": "Innersloth 联合创始人提醒开发者市面上存在大量糟糕的发行交易。",
      "ta": "商务向提醒，与 TA 技术工作无直接关联，速览。",
      "src": "Game Developer · 10-20",
      "url": "https://www.gamedeveloper.com/business/outersloth-co-founder-warns-devs-there-are-some-very-bad-deals-out-there-"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "CUDA Tile 加速 Mamba-2 前向",
      "sum": "NVIDIA 用 Python DSL cuTile 编写 Mamba-2 前向核，自动调用 GPU 高级硬件能力。",
      "ta": "关注 cuTile 这种 Python 级并行编程模型，未来写自定义 GPU 算子可少碰底层 CUDA。",
      "src": "NVIDIA · 10-19",
      "url": "https://developer.nvidia.com/blog/accelerating-mamba-2-with-high-performance-forward-pass-kernels-in-nvidia-cuda-tile/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "LLM 生成 CAD 机构难达功能",
      "sum": "论文研究功能性 CAD 设计，指出 LLM 生成的装配体视觉合理但常无法满足物理功能。",
      "ta": "程序化生成若涉及机械结构，需警惕「看起来对」与「功能对」的差距。",
      "src": "arXiv · cs.GR · 10-19",
      "url": "https://arxiv.org/abs/2610.26861v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "开放形态几何风格迁移",
      "sum": "从一种字形族学几何设计语言，迁移到希腊字形乃至完全不同的结构上。",
      "ta": "几何风格迁移思路可参考用于程序化装饰/纹样跨形态复用。",
      "src": "arXiv · cs.GR · 10-19",
      "url": "https://arxiv.org/abs/2610.26820v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "PhysSkin++ 实时神经蒙皮",
      "sum": "自监督学习连续神经蒙皮场，从静态几何构建形变子空间，实现可泛化实时物理动画。",
      "ta": "实时物理形变泛化到多样 3D 形状，对角色/布料实时动画管线有参考价值。",
      "src": "arXiv · cs.GR · 10-19",
      "url": "https://arxiv.org/abs/2610.26067v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "矢量瓦片粒度影响压缩",
      "sum": "实证研究 MLT 列式矢量瓦片的空间粒度如何影响地图渲染压缩率。",
      "ta": "做大地图/地形分块数据时，瓦片粒度对压缩与流送的影响可借鉴。",
      "src": "arXiv · cs.GR · 10-19",
      "url": "https://arxiv.org/abs/2610.25755v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "FluidGen 物理感知流体视频",
      "sum": "针对视频生成模型在烟、火、爆炸碎片上涡旋结构缺失的问题，用运动引导后训练修正。",
      "ta": "Niagara 流体参考素材生成方向，注意其仍缺真实涡旋，不能直接当解算替代。",
      "src": "arXiv · cs.GR · 10-19",
      "url": "https://arxiv.org/abs/2610.25660v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "包络行走加速 WoS 求解",
      "sum": "Walk in Envelopes 用可验证解界变换分支扩散，缓解临界分支率附近计算爆炸。",
      "ta": "无网格 PDE 求解加速，离屏 GI/体积散射类研究可留意。",
      "src": "arXiv · cs.GR · 10-18",
      "url": "https://arxiv.org/abs/2610.25297v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "4D 可形变图元泼溅手语化身",
      "sum": "Stable Signer V3 基于 4D Deformable Primitive Splatting 构建高分辨率交互手语化身。",
      "ta": "图元泼溅做面部表情与身体形变，对虚拟人/表情驱动方案有借鉴。",
      "src": "arXiv · cs.GR · 10-18",
      "url": "https://arxiv.org/abs/2610.24926v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "SwitchSplat 学离散物体状态",
      "sum": "针对随手拍摄中开门、拨开关等交互，从 3DGS 场景学习离散物体状态表示。",
      "ta": "3DGS 从静态假设走向可交互状态，对扫描资产转可交互场景有启发。",
      "src": "arXiv · cs.GR · 10-17",
      "url": "https://arxiv.org/abs/2610.24812v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "MOMO 从移动声源生成人体动作",
      "sum": "建模人对动态空间音频的反应，生成随声源与听者空间关系变化的人体运动。",
      "ta": "角色动画可参考声源空间关系驱动的反应动作生成。",
      "src": "arXiv · cs.GR · 10-17",
      "url": "https://arxiv.org/abs/2610.24522v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "SLIM 学算子精简 3D 点阵",
      "sum": "学习一个算子，在保持均匀化弹性的前提下移除点阵冗余材料。",
      "ta": "点阵轻量化思路，对程序化结构件/支撑结构生成有参考。",
      "src": "arXiv · cs.GR · 10-17",
      "url": "https://arxiv.org/abs/2610.24459v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "GPT-6 Astra 的 CAD 能力评估",
      "sum": "对通用 AI 模型 GPT-6 Astra 做系统性 CAD 任务实证评估，看输出是否满足工程要求。",
      "ta": "了解通用模型在工程几何任务上的真实边界，避免高估其产出。",
      "src": "arXiv · cs.GR · 10-17",
      "url": "https://arxiv.org/abs/2610.24451v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多轮图像编辑稳定化 MT Forcing",
      "sum": "自回归扩散做多轮图像编辑，MT Forcing 提升稳定性与一致性。",
      "ta": "多轮一致性编辑可用于贴图/概念稿迭代，但非实时渲染直接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.25404"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "InfiniDream 程序化生成 3D 世界",
      "sum": "通过程序化生成构建开放式照片级真实 3D 世界。",
      "ta": "程序化 3D 世界生成与植被/场景工具方向直接相关，值得看其生成管线。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.26853"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "长时流式世界模型短片段训练",
      "sum": "Frechet Forcing 用短片段训练长时程流式世界模型。",
      "ta": "流式世界模型训练策略，对实时仿真/生成式场景演进有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.25666"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "状态世界模型：规则执行生成像素",
      "sum": "State World Models 先执行规则再生成像素，分离状态演化与画面合成。",
      "ta": "规则与像素解耦的思路，对可交互场景生成架构有启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.26811"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型可解释性综述",
      "sum": "从解码表征到理解潜在世界，探讨世界模型的可解释性。",
      "ta": "理解世界模型内部表征，有助于判断其生成结果可信度。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.25296"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Substance Designer 做森林地表材质",
      "sum": "Zeqi Mu 用 SD 节点做可平铺森林地表，讲根系生长纹理与 UE 场景灯光渲染设置。",
      "ta": "植被地表材质与 UE 渲染设置的完整案例，可直接对照自己的地表工作流。",
      "src": "80 Level · 10-19",
      "url": "https://80.lv/articles/making-realistic-tileable-forest-floor-material-using-substance-3d-designer-s-nodes/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ZBrush+Blender 做手绘风 3D 枪械",
      "sum": "Max Osta 用 ZBrush 雕木板玉石、Blender 修改器做绳索与程序纹理，Eevee 渲染。",
      "ta": "程序纹理+修改器做绳索的流程，可迁移到道具/植被藤蔓类资产。",
      "src": "80 Level · 10-19",
      "url": "https://80.lv/articles/gunfire-reborn-s-dragonchaser-reimagined-as-painterly-3d-asset-in-wayfinder-s-style/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Valorant 过场动画制作拆解",
      "sum": "Brunch Studio 拆解新地图 Summit 的 Valorant 过场预告制作过程。",
      "ta": "看影视级过场与实时资产的衔接方式。",
      "src": "80 Level · 10-19",
      "url": "https://80.lv/articles/brunch-studio-reveals-how-they-made-the-valorant-through-the-cracks-cinematic-trailer/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "2D 动画风格转 3D 的技巧",
      "sum": "动画导演拆解千与千寻场景，讲时序与肌肉运动表现阻力，及 2D 风格转 3D。",
      "ta": "手 K 动画的时序与阻力表现，对角色/植被摆动节奏有借鉴。",
      "src": "80 Level · 10-19",
      "url": "https://80.lv/articles/animation-director-breaks-down-the-tricks-behind-a-spirited-away-scene/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Moko 绘画编辑工作区",
      "sum": "Cubebrush 推出 Moko，主打实时笔触预览的绘画与图像编辑工作区。",
      "ta": "概念/贴图绘制工具选项，关注实时笔触预览体验。",
      "src": "80 Level · 10-19",
      "url": "https://80.lv/articles/painting-image-editing-workspace-with-live-brush-stroke-previews-meet-moko/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS6 内存成本或超 680 美元",
      "sum": "Kepler_L2 称 PS6 物料成本或达 1000 美元，内存短缺恐推迟至 2028-2029 年。",
      "ta": "次世代硬件规格与内存容量预期，影响未来资产预算规划。",
      "src": "80 Level · 10-19",
      "url": "https://80.lv/articles/ps6-ram-nand-reportedly-cost-over-usd680/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "RocketWerkz 开源 C# 框架 BRUTAL",
      "sum": "RocketWerkz 的 C# 框架 BRUTAL 向所有开发者开放，强调对游戏代码的完全控制。",
      "ta": "自研框架选型参考，与引擎内工具链集成时留意。",
      "src": "Game Developer · 10-19",
      "url": "https://www.gamedeveloper.com/programming/rocketwerkz-c-framework-brutal-is-now-available-for-all-developers"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Moonlighter 团队因 AI 克隆担忧推迟测试",
      "sum": "Digital Sun 因担心生成式 AI 克隆，将新作 ReVamp 公开测试缩至 Discord 社区。",
      "ta": "AI 克隆风险正影响测试策略，涉及资产外发时需评估。",
      "src": "Game Developer · 10-19",
      "url": "https://www.gamedeveloper.com/programming/moonlighter-developer-delays-public-playtest-of-next-game-over-concerns-of-ai-cloning"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RGB与X光联合高斯重建",
      "sum": "X-Splat用统一高斯泼溅同时重建RGB外观与X光内部结构，免去分模态重复几何。",
      "ta": "多模态高斯泼溅的统一几何表达，可关注其冗余几何与对齐问题的处理思路。",
      "src": "arXiv · cs.GR · 10-16",
      "url": "https://arxiv.org/abs/2610.23237v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "笼形变形新增结构亲和算法",
      "sum": "提出Structural Affinity算法，改善笼形变形参数化的连贯性，服务动画与交互建模。",
      "ta": "程序化建模与形变工具可参考其控制柄优化思路，非实时渲染直接相关。",
      "src": "arXiv · cs.GR · 10-16",
      "url": "https://arxiv.org/abs/2610.23173v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频世界模型记忆失效诊断",
      "sum": "论文诊断视频世界模型在记忆机制上的失败模式，提出执行先于记忆的分析框架。",
      "ta": "若关注世界模型做场景生成，可看其长时序一致性失效的归因方式。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.23542"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "生成式组织训练智能体",
      "sum": "OfficeTown构建生成式组织环境，用于演化多智能体协作能力。",
      "ta": "纯智能体仿真研究，与TA工作流无直接关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.23194"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频世界模型持久平面记忆",
      "sum": "提出持久平面记忆机制，缓解视频世界模型长序列中的场景遗忘。",
      "ta": "长时序场景一致性方案，对程序化场景生成的记忆保持有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.23795"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "玩具游戏能否迁移真实推理",
      "sum": "Game2Real-Bench评测玩具游戏训练所得视觉推理能力能否迁移到真实场景。",
      "ta": "评测类工作，与渲染或工具链无直接关系。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.18834"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "视角解耦几何状态建模",
      "sum": "GeoState学习视角解耦的几何状态表示，用于3D世界建模。",
      "ta": "解耦视角的几何表示对3D生成与场景重建有潜在借鉴，值得速读。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.22343"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "水彩手绘解谜游戏亮相",
      "sum": "《The Land Forgotten》以水彩手绘风格呈现语言解谜玩法。",
      "ta": "可速览其手绘美术风格与场景氛围，作为风格化美术参考。",
      "src": "80 Level · 10-17",
      "url": "https://80.lv/articles/this-language-based-puzzle-game-is-hand-painted-in-watercolor/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5.7 生物角色全流程",
      "sum": "ZBrush 雕鳞片、Marvelous Designer 模拟非人角色服装，最终在 UE5.7 渲染。",
      "ta": "可参考非人形角色的布料模拟思路，以及 UE5.7 下的角色渲染管线实践。",
      "src": "80 Level · 10-16",
      "url": "https://80.lv/articles/sculpting-scales-simulating-clothes-for-creature-chef-in-zbrush-marvelous-designer/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "BRUTAL 开源开发框架发布",
      "sum": "DayZ 创作者推出免费开源开发框架 BRUTAL，已被其工作室的太空模拟游戏采用。",
      "ta": "值得关注其工具链组织方式，或可作为自研管线/工具框架的参考。",
      "src": "80 Level · 10-16",
      "url": "https://80.lv/articles/dayz-creator-presents-brutal-a-free-open-source-development-framework/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "NAS 上的 Git 项目结构讨论",
      "sum": "TA 社区讨论文件存放在 NAS 时如何组织 Git 项目，含 Maya 脚本的开发版与发布版。",
      "ta": "涉及脚本版本管理与共享存储的工程实践，可看同行如何拆分 dev/published 副本。",
      "src": "Tech-Artists · 10-16",
      "url": "https://www.tech-artists.org/t/how-do-you-structure-git-projects-when-your-files-live-on-a-nas-maya-scripts-dev-vs-published-copies/18581"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "狗狗动捕效果像外星人",
      "sum": "一位艺术家对狗做动作捕捉，结果看起来像外星生物，真狗无恙。",
      "ta": "速览即可，可作为非人形动捕重定向问题的趣味案例。",
      "src": "80 Level · 10-16",
      "url": "https://80.lv/articles/artist-motion-captures-a-dog-and-it-looks-like-an-alien/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "UEFN 学生训练营作品展示",
      "sum": "UEFN 学生训练营结束，300 多名学生完成三周课程，官方放出优秀 Fortnite 岛屿集锦。",
      "ta": "可速览 UEFN 创作者生态的产出水平，与引擎工具链无直接技术关联。",
      "src": "Unreal Engine · 10-16",
      "url": "https://www.unrealengine.com/learning/check-out-the-top-fortnite-islands-from-the-uefn-student-bootcamp"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "HeroQuest 将登陆 PC",
      "sum": "Nomad Games 与 Balor Games 将经典桌游地城探索游戏 HeroQuest 数字化搬上 PC。",
      "ta": "行业动态速览，与 TA 技术工作无直接关联。",
      "src": "80 Level · 10-16",
      "url": "https://80.lv/articles/classic-tabletop-adventure-heroquest-is-coming-to-pc/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "独立游戏 Flipping Is Hard 上线",
      "sum": "融合《和班尼特福迪一起攻克难关》与诺基亚怀旧元素的独立游戏登陆 Steam，支持 16 人。",
      "ta": "行业动态速览，无技术关联。",
      "src": "80 Level · 10-16",
      "url": "https://80.lv/articles/getting-over-it-meets-nokia-nostalgia-in-new-indie-game-flipping-is-hard/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "规则驱动生成世界建模验证器",
      "sum": "OmniVerifier-C1 提出分解式分级验证器，用于规则约束的生成式世界建模。",
      "ta": "原文未明确游戏/实时关联，仅作生成式世界建模方向速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.22355"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "生成模型测试时多样性对齐",
      "sum": "论文提出 Mine、Sample、Render 流程，在测试时对生成模型做多样性对齐。",
      "ta": "通用生成模型方法，原文无游戏/实时渲染关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.21185"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多变量轨迹快速生成预测",
      "sum": "PathFM 提出多变量轨迹的快速生成式预测方法。",
      "ta": "通用时序预测研究，原文未提及游戏关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.22358"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Hadamard 码本加速图像视频压缩",
      "sum": "H-DDCM 用 Hadamard 码本实现快速的生成式图像与视频压缩。",
      "ta": "涉及图像/视频压缩，但原文未提实时或引擎关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.18125"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "OCR 严重度加权字符错误率",
      "sum": "论文提出按严重度加权的字符错误率指标，指出相同 CER 下损害程度并不相等。",
      "ta": "OCR 评测指标研究，与 TA 工作无直接关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.20461"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "单位四元数压缩新方法",
      "sum": "提出均匀分布单位四元数编码方法，降低内存与带宽占用。",
      "ta": "动画/骨骼数据压缩可参考，对大规模角色系统有潜在收益。",
      "src": "arXiv · cs.GR · 10-15",
      "url": "https://arxiv.org/abs/2610.22052v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "草图重建可重打光服装",
      "sum": "从带标注草图重建可重打光服装，草图直接表达高光与阴影意图。",
      "ta": "服装资产快速原型方向，关注其光照意图到材质的映射方式。",
      "src": "arXiv · cs.GR · 10-15",
      "url": "https://arxiv.org/abs/2610.21865v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "整体先验驱动部件化生成",
      "sum": "复用整体3D先验实现部件分解生成，兼顾部件细节与整体结构一致性。",
      "ta": "程序化资产拆分思路，对模块化场景生成有参考价值。",
      "src": "arXiv · cs.GR · 10-15",
      "url": "https://arxiv.org/abs/2610.21850v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "无细分置换面几何查询",
      "sum": "无需预细分网格即可在置换贴图表面做几何查询，省去密集三角网格内存开销。",
      "ta": "置换贴图直接求交，对地形/植被高细节表面渲染管线有直接启发。",
      "src": "arXiv · cs.GR · 10-15",
      "url": "https://arxiv.org/abs/2610.21584v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "移动体积视频双流高斯方案",
      "sum": "ResStreamGS 用残差敏感双流3DGS，在受限带宽下实现移动端体积视频流。",
      "ta": "关注其残差分层编码，对移动端3DGS流式传输有借鉴意义。",
      "src": "arXiv · cs.GR · 10-15",
      "url": "https://arxiv.org/abs/2610.21121v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "机器人采集真实布料数据集",
      "sum": "RoboCloth 用机器人控制相机与光照，采集500种真实布料约580帧HDR数据。",
      "ta": "高质量布料反射重建数据集，可作材质扫描与神经渲染训练参考。",
      "src": "arXiv · cs.GR · 10-15",
      "url": "https://arxiv.org/abs/2610.21090v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多码本扩散语言模型",
      "sum": "Intern Lumina U2 提出多码本扩散LLM，统一视觉理解与图像生成。",
      "ta": "与实时渲染无直接关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.20818"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散强化学习路由优化",
      "sum": "提出面向在线扩散强化学习的路由策略优化方法。",
      "ta": "纯训练方法，与TA工作流无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.22282"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "商用主图生成框架",
      "sum": "CommerceGen-Studio 提供端到端商用级主图生成框架。",
      "ta": "电商图像方向，与游戏渲染无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.20603"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "空间记忆提升世界模型效率",
      "sum": "Velox 通过空间记忆机制让世界模型更高效。",
      "ta": "世界模型效率方向，对实时仿真与生成式场景有潜在参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.22311"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "驾驶世界动作模型对齐",
      "sum": "SimVTA 用仿真对齐视频与轨迹，服务驾驶世界动作模型。",
      "ta": "自动驾驶方向，与游戏TA无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.13781"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "CT超分辨率扩散方法",
      "sum": "VascuSR 提出迭代式解剖感知扩散用于CT超分辨率。",
      "ta": "医学影像方向，与实时渲染无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.20509"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "视频世界模型记忆基准",
      "sum": "WorldMemBench 提出视频世界模型记忆能力的综合评测基准。",
      "ta": "若关注生成式世界模型的长时一致性，可作评测参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.19063"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "编码智能体内部世界模型",
      "sum": "ANTE 让编码智能体从验证信念中学习内部世界模型。",
      "ta": "代码智能体方向，与TA工作流无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.15368"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "CDPR原创IP用UE原型",
      "sum": "CDPR完成首个原创IP Project Hadar 世界观，正用虚幻引擎原型化玩法机制。",
      "ta": "又一大厂押注UE，关注其后续技术管线与工具链动向。",
      "src": "80 Level · 10-15",
      "url": "https://80.lv/articles/cdpr-says-its-first-original-ip-has-been-its-biggest-undertaking-yet/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "建筑坍塌融入战术玩法",
      "sum": "Brigador Killers 结合子弹穿透、系统性建筑坍塌、反应物理与可读VFX，配Blender精灵管线。",
      "ta": "系统性破坏与VFX可读性设计，对特效与物理联动有参考。",
      "src": "80 Level · 10-15",
      "url": "https://80.lv/articles/how-brigador-killers-makes-blowing-up-buildings-part-of-the-strategy/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Epic启动器性能争议",
      "sum": "Epic称新启动器快于Steam，Valve更新数据反驳。",
      "ta": "行业八卦，速览即可。",
      "src": "80 Level · 10-15",
      "url": "https://80.lv/articles/we-vibe-coded-a-new-epic-games-launcher-apparently-programming-is-hard/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前极乐迪斯科成员新RPG",
      "sum": "前ZA/UM开发者组建Red Rooster，公布物理驱动魔幻现实主义RPG。",
      "ta": "新作动向，无技术细节。",
      "src": "80 Level · 10-15",
      "url": "https://80.lv/articles/former-disco-elysium-devs-announce-new-incendiary-rpg/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前FS开发者公布ARPG",
      "sum": "前FromSoftware开发者Hytacka公布其ARPG新作Overseeker预告。",
      "ta": "独立新作，速览即可。",
      "src": "80 Level · 10-15",
      "url": "https://80.lv/articles/fromsoftware-s-ex-developer-released-trailer-for-his-upcoming-arpg-overseeker/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "寂静岭风独立冒险发售",
      "sum": "单人开发者arch1t3ct的2000年代风格梦境冒险游戏已发售。",
      "ta": "独立作品，速览即可。",
      "src": "80 Level · 10-15",
      "url": "https://80.lv/articles/this-melancholic-silent-hill-inspired-adventure-set-in-a-half-dead-place-is-out/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "B社40周年Discord问答",
      "sum": "Bethesda开设Discord问答频道庆祝40周年，玩家可向开发者提问。",
      "ta": "社区活动，无技术内容。",
      "src": "80 Level · 10-15",
      "url": "https://80.lv/articles/ask-bethesda-almost-anything-in-q-a-discord-channel-to-celebrate-its-40th-anniversary/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "UE6将整合UEFN与虚幻引擎",
      "sum": "Epic路线图显示UE6将把虚幻引擎与UEFN合并，官方推出免费UEFN训练营。",
      "ta": "UE6整合UEFN意味着编辑器与运行时工具链可能统一，植被/程序化工具需提前关注UEFN侧能力边界。",
      "src": "Unreal Engine · 10-14",
      "url": "https://www.unrealengine.com/news/uefn-professional-bootcamp-prepare-for-unreal-engine-6"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 2,
      "title": "GTA6因海量智能NPC延期",
      "sum": "彭博社披露Rockstar打造最雄心作品，海量智能NPC是GTA6延期原因之一。",
      "ta": "海量智能NPC对CPU预算、群体AI调度与LOD策略提出极高要求，值得关注其实现取舍。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/enormous-number-of-smart-npcs-was-one-of-reasons-for-gta-6-delay/"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 3,
      "title": "Epic迪士尼项目转向AI优先",
      "sum": "报道称Epic旗下星战与漫威射击项目要求大量依赖AI，尤其用于代码与美术创作。",
      "ta": "若美术生产转向AI优先，TA需重新评估资产管线、材质规范与AI产出的可维护性。",
      "src": "Game Developer · 10-14",
      "url": "https://www.gamedeveloper.com/programming/no-more-hand-written-code-epic-s-disney-project-reportedly-shifts-to-ai-first-development"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "GLoD-LVSM连续LOD场景表示",
      "sum": "提出几何锚定的紧凑场景表示，为大规模视图合成模型提供连续LOD以降低存储与渲染开销。",
      "ta": "连续LOD与token冗余削减思路，对程序化植被的层级细节与实例化策略有参考价值。",
      "src": "arXiv · cs.GR · 10-14",
      "url": "https://arxiv.org/abs/2610.20254v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "VisibilitySplat光线追踪遮挡重光照",
      "sum": "为3DGS引入显式可见性建模，用稀疏可见性预言机估计透射率加权遮挡以支持重光照与材质光照分解。",
      "ta": "3DGS重光照与材质分解若成熟，可用于扫描植被资产的光照一致化与材质复用。",
      "src": "arXiv · cs.GR · 10-14",
      "url": "https://arxiv.org/abs/2610.19847v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Q-MAGIC生成纯四边形网格",
      "sum": "提出奇点感知的循环相对偏移token化，实现自回归生成纯四边形网格。",
      "ta": "纯四边形拓扑生成对建模与重拓扑流程有潜在价值，可关注其拓扑质量与可控性。",
      "src": "arXiv · cs.GR · 10-14",
      "url": "https://arxiv.org/abs/2610.19777v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "光谱世界渲染器统一高光谱解混",
      "sum": "提出统一3D高光谱解混方法，将每个光谱解释为材质特征混合而非仅对渲染图像后处理。",
      "ta": "材质识别与解混思路或可用于程序化材质分层与扫描资产的材质分类。",
      "src": "arXiv · cs.GR · 10-14",
      "url": "https://arxiv.org/abs/2610.19520v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "DiffGIPC可微混合坐标接触动力学",
      "sum": "提出GPU上的可微混合坐标接触动力学，兼顾高效梯度与非穿透约束。",
      "ta": "可微接触仿真对布料、植被碰撞与破坏效果的可微调参有潜在借鉴意义。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.19091v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "RoboSimStudio交互式Real2Sim工具",
      "sum": "推出交互式工具包，支持机器人操作任务的快速真实到仿真，涵盖求解器与接触参数选择。",
      "ta": "接触力学与求解器选择思路对物理交互效果调参有间接参考，非直接游戏向。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.18835v2"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "RAR自适应rollout交互世界模型",
      "sum": "提出速率自适应rollout方法，用于时间一致的交互式世界模型。",
      "ta": "交互式世界模型的时间一致性若落地，可用于实时预览与程序化生成的动态验证。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.16302"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "VITAL从视觉运动到精确动作",
      "sum": "提出从视觉运动信息到精确动作的映射方法。",
      "ta": "视觉到动作的映射思路对动画驱动与动作捕捉后处理有间接参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.20604"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "TextVerifier验证中文文本渲染",
      "sum": "提出超越识别的验证方法，用于校验中文文本渲染质量。",
      "ta": "文本渲染验证对UI与贴图文字自动化质检有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.19551"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "MimicX视频驱动人形动作跟踪",
      "sum": "提出策略在环的监督精炼方法，用于视频驱动的人形动作跟踪。",
      "ta": "视频驱动动作跟踪若成熟，可降低动画捕捉与重定向成本。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.09055"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "MetaHuman动画工具免费更新",
      "sum": "Anthony Koithra的Locodrome角色动画工具更新，让虚幻引擎动画制作更简单快速。",
      "ta": "免费MetaHuman动画工具可直接用于角色动画原型与快速迭代，值得试用。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/grab-this-updated-metahuman-animation-tool-for-free/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Photoshop 3D取色器预览色相",
      "sum": "ColgArt推出Chroma Space面板，带实时3D视口，可在上色前于3D元素上预览颜色。",
      "ta": "3D取色预览可减少贴图绘制反复试错，对材质配色流程有提效价值。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/color-picker-for-photoshop-that-lets-you-see-hues-on-3d-shapes-before-painting-them/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "育碧关闭RedLynx并缩减新加坡",
      "sum": "育碧将关闭Trials工作室RedLynx并缩减育碧新加坡，影响超120个岗位。",
      "ta": "行业持续重组，关注其对引擎与工具团队规模及外包协作模式的连带影响。",
      "src": "Game Developer · 10-14",
      "url": "https://www.gamedeveloper.com/business/ubisoft-to-close-trials-studio-redlynx-downsize-ubisoft-singapore"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox Labs复活经典并移植",
      "sum": "Xbox推出Project Xbox Labs，聚焦经典游戏复活、移植到苹果电脑与网页，并支持模组作者。",
      "ta": "跨平台移植与模组支持可能带来新的资产兼容与工具链需求。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/xbox-launches-new-project-xbox-labs-to-revive-classics-port-games-explore-new-features/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "War Robots谈中国手游发行",
      "sum": "War Robots高管分享自2014年以来的留存经验，谈过度本地化风险与中国玩家差异。",
      "ta": "面向中国市场的发行经验对国内项目运营有参考，与技术管线无关。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/war-robots-exec-on-the-nuances-of-launching-mobile-games-for-chinese-players/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Annapurna发行老人公路冒险",
      "sum": "Third Shift开发的Forever Ago由Annapurna发行，是一款第三人称情感冒险游戏。",
      "ta": "叙事向独立作品，与TA技术方向无直接关联，速览即可。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/annapurna-releases-a-heartbreaking-third-person-adventure-about-an-old-man-on-a-road-trip/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender开发者BCON26演讲",
      "sum": "Blender年度主活动结束后，开发者演讲内容现已可回看。",
      "ta": "Blender开发者演讲可能涉及几何节点与渲染管线更新，值得按需回看。",
      "src": "Blender 开发博客 · 10-14",
      "url": "https://code.blender.org/2026/10/bcon26-talks-by-blender-developers/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 1,
      "title": "全UE流程做手绘风动画",
      "sum": "Dardo Studios用Control Rig、Sequencer、Lumen在UE内完成整部动画，无Maya到引擎管线。",
      "ta": "值得看小团队如何用Control Rig+Sequencer替代传统动画管线，Lumen与投影手绘叠加的合成思路可复用。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/how-this-painterly-animated-short-was-rigged-animated-entirely-in-unreal-engine/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender自动UV展开插件",
      "sum": "免费插件UVgami可快速自动展开UV，支持浏览器试用。",
      "ta": "批量资产UV自动化对植被/道具流水线有直接提效价值。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/this-free-blender-add-on-quickly-automates-uv-unwrapping/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "19个免费万圣节动捕",
      "sum": "Anderson Rohr发布僵尸、怪物、吸血鬼等19个免费动捕动画包。",
      "ta": "免费动捕资源可作原型或NPC动画填充。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/get-ready-for-halloween-with-these-19-free-mocap-animations/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Mystery House经典重制",
      "sum": "Guillotine Games谈用现代工具重制1980年Apple II经典Mystery House 3D的挑战。",
      "ta": "老游戏视觉语言现代化重制的案例参考。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/reviving-mystery-house-roberta-and-ken-williams-1980-apple-ii-classic/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "权游S3视效解析",
      "sum": "Rodeo FX分享《龙之家族》第三季视效拆解，共制作超45000帧。",
      "ta": "大规模影视VFX流程与帧量级参考。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/rodeo-fx-shared-their-house-of-the-dragon-season-3-vfx-breakdown/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "实时瀑布建造游戏",
      "sum": "Mogmek的Waterfalls Dream让玩家实时创建和编辑风格化瀑布。",
      "ta": "实时流体/瀑布编辑交互设计可作参考。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/this-game-allows-you-to-create-your-own-stylized-waterfalls-with-realistic-behavior/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "精灵动画关键帧插值",
      "sum": "低成本深度学习方案为精灵动画自动生成中间帧，避免写实插值的平滑伪影。",
      "ta": "针对像素/精灵内容的插值方法，对2D游戏动画工具链有参考价值。",
      "src": "arXiv · cs.GR · 10-12",
      "url": "https://arxiv.org/abs/2610.16423v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "相机可控图生视频框架",
      "sum": "Gen Through the Lens通过跨坐标条件融合实现物理一致的相机运镜图生视频。",
      "ta": "相机可控生成对预演/虚拟拍摄的镜头设计有潜在价值。",
      "src": "arXiv · cs.GR · 10-11",
      "url": "https://arxiv.org/abs/2610.15900v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "跨族运动补全解耦尺度",
      "sum": "Cepheid解耦尺度与结构，解决稀疏到稠密运动补全的跨几何族泛化问题。",
      "ta": "网格运动补全的泛化思路，对角色/形变动画工具有启发。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.18871v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态抓取序列合成",
      "sum": "Learning Dynamic Grasping合成可信的4D手-物抓取序列，用于角色动画与XR。",
      "ta": "手物交互合成对角色动画与VR交互有直接参考。",
      "src": "arXiv · cs.GR · 10-10",
      "url": "https://arxiv.org/abs/2610.14848v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "骨骼关节球面四边形化",
      "sum": "从无序方向向量集构造球面简单四边形化，用于骨骼关节参数化体积模型。",
      "ta": "参数化体积建模的拓扑构造方法，对程序化角色/关节建模有参考。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.17803v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CAD图纸全景符号识别",
      "sum": "TempFit用模板拟合方法解决CAD图纸的全景符号识别问题。",
      "ta": "图纸符号识别思路可迁移到场景资产/图元的自动解析。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.17776v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "投影球面行走等距嵌入",
      "sum": "WoAP将嵌入视为求解变量，改进Projected Walk on Spheres的表面PDE求解。",
      "ta": "几何PDE求解器改进，对程序化纹理/距离场有潜在价值。",
      "src": "arXiv · cs.GR · 10-11",
      "url": "https://arxiv.org/abs/2610.15573v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "可加工性拓扑优化",
      "sum": "用裁剪神经场做面向减材加工的拓扑优化，减少点铣加工。",
      "ta": "制造约束下的几何优化思路，与游戏资产关联较弱。",
      "src": "arXiv · cs.GR · 10-11",
      "url": "https://arxiv.org/abs/2610.15301v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "全息感知目标函数",
      "sum": "HoOPOE提出全息优化的感知目标函数，缓解计算机生成全息的散斑伪影。",
      "ta": "全息显示方向，与实时渲染管线关联有限。",
      "src": "arXiv · cs.GR · 10-12",
      "url": "https://arxiv.org/abs/2610.17474v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "内容编辑式版式生成",
      "sum": "CELG提出内容编辑式条件版式生成，扩展内容感知版式生成。",
      "ta": "图形设计版式生成，与游戏UI自动化有弱关联。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.17905v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "LLM协同设计空间概念",
      "sum": "Co-DSL让用户与LLM协同设计可复用的空间概念用于版式生成。",
      "ta": "人机协同的布局生成框架，可参考到关卡/场景布局工具。",
      "src": "arXiv · cs.GR · 10-11",
      "url": "https://arxiv.org/abs/2610.15290v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "机器人Real2Sim交互工具",
      "sum": "RoboSimStudio提供交互式工具包，快速实现机器人操作任务的Real2Sim。",
      "ta": "物理仿真求解器选择与接触建模，与游戏物理有间接参考。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.18835v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "多人世界模型分层通信",
      "sum": "Multics提出带分层通信的生成式多人世界模型。",
      "ta": "多人世界模型对多人游戏状态预测有潜在启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.17201"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "高分辨率扩散注意力优化",
      "sum": "AReA提出自适应感受野注意力，提升高分辨率扩散Transformer效率。",
      "ta": "注意力效率优化思路对高分辨率生成/渲染有借鉴意义。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.17227"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型自参考优势学习",
      "sum": "SALD提出自参考优势学习用于扩散模型。",
      "ta": "扩散训练方法，与游戏资产生成间接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.01496"
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
      "cat": "tech",
      "imp": "lo",
      "title": "真实物体影子玩平台跳跃",
      "sum": "导演 Tee Ken Ng 展示混合现实游戏 Plato，用现实物体投影作为玩法元素。",
      "ta": "影子识别与投影对齐的交互思路，对 AR 类玩法原型有启发。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/this-platformer-lets-you-use-shadows-of-real-life-objects-to-play/"
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
  ]
};
