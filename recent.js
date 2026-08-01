// daily-intel 近期热点层 —— 由 run.py 自动累积，供「近期」入口翻阅。
// 与 data.js（仅今日新增）分离：data.js 是“今天有什么新的”，recent.js 是“近期攒了啥”。

window.INTEL_RECENT = {
  "updated": "2026-08-01 12:25",
  "cards": [
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Epic 七月学习内容更新",
      "sum": "Epic 发布七月学习内容，涵盖 Sequencer 动画、MetaHuman 动捕、Chaos 可破坏物及移动端开发教程。",
      "ta": "官方教程覆盖 TA 常用工具链，可快速跟进 UE5 动画与破坏系统的最新工作流。",
      "src": "Unreal Engine · 07-31",
      "url": "https://www.unrealengine.com/learning/julys-epic-learning-content-animation-mobile-game-development-and-more"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 体积雾插件速成",
      "sum": "Lazy3D 推出 Blender 插件，可快速创建电影级体积雾效果，支持轻雾到浓雾调节。",
      "ta": "Blender 快速体积雾方案可辅助 DCC 预览或资产制作，提升前期视觉迭代效率。",
      "src": "80 Level · 08-01",
      "url": "https://80.lv/articles/add-cinematic-volumetric-fog-to-blender-scenes-in-just-minutes/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Substance 3D 金属丝工艺材质",
      "sum": "Jinho Yum 分享 Ornamental Filigree 项目，讲解扭曲基础形状、调整曲线方向与宝石制作流程。",
      "ta": "Substance 3D 复杂金属图案程序化生成思路，对材质细节与装饰纹理制作有参考价值。",
      "src": "80 Level · 07-31",
      "url": "https://80.lv/articles/creating-intricate-filigree-metalwork-patterns-for-a-material-with-substance-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender VHS 复古效果制作",
      "sum": "Triqlide Studios 展示在 Blender 中实现的 VHS 风格复古视觉效果。",
      "ta": "VHS 风格化后处理效果在 Blender 中的实现，可借鉴用于游戏内复古滤镜或过场。",
      "src": "80 Level · 07-31",
      "url": "https://80.lv/articles/check-out-this-cool-vhs-like-effect-made-in-blender/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Double Fine 裁员 Xbox 营收下滑",
      "sum": "Double Fine 裁员，Xbox 硬件营收持续下滑，Buckshot Roulette 开发商推出马里奥派对恐怖版。",
      "ta": "行业动态速览，了解大厂人员变动与硬件趋势，对项目规划无直接影响。",
      "src": "Game Developer · 07-31",
      "url": "https://www.gamedeveloper.com/business/xbox-perpetual-hardware-revenue-decline-leon-kennedy-pays-off-and-double-fine-cuts-staff-patch-notes-63"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "单图生成可驱动高斯头模",
      "sum": "S-Avatar 提出扩散引导的单图 3D 头模生成，并支持 3DGS 动画化。",
      "ta": "单图重建可驱动高斯头模，对虚拟人资产生产管线有直接参考价值。",
      "src": "arXiv · cs.GR · 07-30",
      "url": "https://arxiv.org/abs/2607.28164v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "4D高斯时空排序新格式",
      "sum": "TSOG 扩展 SOG 框架至时间域，高效表示 4D 高斯溅射内容。",
      "ta": "4DGS 资产压缩与流式加载是实时特效和虚拟制作的关键，此格式值得关注。",
      "src": "arXiv · cs.GR · 07-30",
      "url": "https://arxiv.org/abs/2607.28049v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "共享高斯压缩SVBRDF贴图",
      "sum": "提出用共享高斯紧凑表示 mipmapped SVBRDF，降低存储负担。",
      "ta": "材质贴图内存优化新思路，可能影响 PBR 材质资产的标准格式。",
      "src": "arXiv · cs.GR · 07-30",
      "url": "https://arxiv.org/abs/2607.27943v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "时变隐式神经场体渲染",
      "sum": "提出查询高效的随机体渲染框架，用于时变隐式神经体积。",
      "ta": "动态科学体积数据交互渲染，对 Niagara 或自定义体积特效有启发。",
      "src": "arXiv · cs.GR · 07-30",
      "url": "https://arxiv.org/abs/2607.28047v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "2D特征蒸馏提升3D理解",
      "sum": "MeshFM 将视觉基础模型 2D 特征蒸馏到 3D，前馈网络无需优化推理。",
      "ta": "3D 特征提取效率提升，可加速程序化生成中的形状分析与匹配。",
      "src": "arXiv · cs.GR · 07-30",
      "url": "https://arxiv.org/abs/2607.27592v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "HDR10+助力游戏艺术表达",
      "sum": "访谈讨论 HDR10+ GAMING 在 UE 集成、HDR 工作流及显示感知渲染中的应用。",
      "ta": "HDR 管线与显示感知渲染是 TA 调色和材质输出的关键环节。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/interview-how-hdr10-can-help-game-devs-preserve-their-artistic-vision/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Mixtape同步玩法动画音乐",
      "sum": "开发者详解 UE5 中 MetaSounds、动画分层与玩法系统如何同步。",
      "ta": "MetaSounds 与动画分层联动案例，对音画同步类特效设计有参考。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/interview-how-mixtape-synchronizes-gameplay-animation-music-with-ue5/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Roblox推出Blender风格建模",
      "sum": "开发者制作 Blender 风格建模插件，可在 Roblox Studio 内直接建资产。",
      "ta": "跨工具建模流程简化，对多平台资产生产管线有潜在价值。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/modeler-creates-a-blender-style-modeling-plugin-for-roblox-studio/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "动态布料特效资产包发布",
      "sum": "一款可创建动态布料特效的资产包，售价 11.20 美元。",
      "ta": "现成布料特效方案，可快速用于原型验证或补充特效库。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/you-ll-be-able-to-create-dynamic-cloth-based-effects-with-this-pack/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender模型一键3D打印",
      "sum": "Dovetail Key 通过绘制线条，两步即可让 Blender 模型可 3D 打印。",
      "ta": "快速生成可打印资产，对实体道具或原型制作有辅助作用。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/easily-make-your-blender-models-3d-printable-by-drawing-lines/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Unity为Netflix游戏提供支持",
      "sum": "Unity 宣布为 Netflix Games 提供专用引擎支持，助力多平台开发。",
      "ta": "引擎平台生态扩展，可能影响跨平台游戏项目的技术选型。",
      "src": "Game Developer · 07-30",
      "url": "https://www.gamedeveloper.com/business/unity-brings-dedicated-engine-support-to-netflix-games"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Subnautica2销量破五百万",
      "sum": "Subnautica 2 在 22 天内售出 500 万份，助力 KRAFTON 最佳第二季度。",
      "ta": "行业销售数据，反映市场对生存类游戏的需求热度。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/subnautica-2-sold-5-million-copies-in-22-days-gave-krafton-its-best-second-quarter-ever/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "印度游戏产业持续增长",
      "sum": "GDAI 总监分析印度 5.5 亿年轻玩家与本土 IP 开发潜力。",
      "ta": "新兴市场动态，可能影响全球化发行与外包合作策略。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/india-s-gaming-boom-is-just-getting-started/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "寂静岭新作开发访谈",
      "sum": "Silent Hill: Townfall 开发者讨论苏格兰背景、复古技术与第一人称战斗。",
      "ta": "恐怖游戏技术风格参考，可关注其美术与交互设计。",
      "src": "PlayStation Blog · 07-30",
      "url": "https://blog.playstation.com/2026/07/30/silent-hill-townfall-developers-discuss-the-scottish-setting-retro-technology-first-person-combat/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "暗黑奇幻游戏角色揭晓",
      "sum": "1666: Amsterdam 公布主要角色，游戏为暗黑奇幻题材。",
      "ta": "角色美术风格参考，可关注其概念设计与渲染表现。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/meet-the-main-characters-from-dark-fantasy-game-1666-amsterdam/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏公司知识流失引担忧",
      "sum": "文章探讨游戏公司裁员导致生产知识流失的问题。",
      "ta": "行业人才流动影响项目稳定性，对团队知识管理有警示。",
      "src": "Game Developer · 07-30",
      "url": "https://www.gamedeveloper.com/production/if-knowledge-if-power-why-are-game-companies-choosing-impotence-"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "凸碰撞自由区域",
      "sum": "提出CCFR方法，用局部凸可行区域显式表示碰撞约束。",
      "ta": "对碰撞检测和物理模拟有参考价值，可关注其与网格原语的集成方式。",
      "src": "arXiv · cs.GR · 07-29",
      "url": "https://arxiv.org/abs/2607.26901v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "结构感知高斯泼溅",
      "sum": "StructureGS用于铰接物体重建，分离几何、外观和运动参数。",
      "ta": "3DGS在可动部件重建上的进展，可能影响程序化资产生成管线。",
      "src": "arXiv · cs.GR · 07-29",
      "url": "https://arxiv.org/abs/2607.26889v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "面向XR的3DGS压缩",
      "sum": "AtlasLC实现物体级3DGS快速编解码，适配XR资产管线。",
      "ta": "压缩和解码效率对实时渲染和XR部署有实际意义，可跟踪其性能数据。",
      "src": "arXiv · cs.GR · 07-29",
      "url": "https://arxiv.org/abs/2607.26525v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "全局Pass屏障研究",
      "sum": "Blade渲染器用全局屏障替代逐资源追踪，跨厂商验证性能。",
      "ta": "对Vulkan管线屏障策略有参考价值，可了解全局屏障的跨平台表现。",
      "src": "arXiv · cs.GR · 07-29",
      "url": "https://arxiv.org/abs/2607.26506v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CG世界状态数据集",
      "sum": "CG-World提供大规模工业CG世界状态数据，用于世界模型训练。",
      "ta": "数据集来自工业CG，可能为游戏场景理解或程序化生成提供训练基础。",
      "src": "arXiv · cs.GR · 07-29",
      "url": "https://arxiv.org/abs/2607.26452v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "人体运动转四足动画",
      "sum": "Two2Four从人体运动生成四足动物动作，用于虚拟制作。",
      "ta": "对角色动画管线有启发，可关注其运动重定向质量。",
      "src": "arXiv · cs.GR · 07-28",
      "url": "https://arxiv.org/abs/2607.26108v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时视觉语言动作模型",
      "sum": "TurboVLA在RTX 4090上以32Hz运行，显存低于1GB。",
      "ta": "低显存实时推理对游戏AI或交互系统有潜在应用，但未明确游戏场景。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.27205"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "游戏求解器辅助LLM",
      "sum": "CAST用游戏求解器作为回合级教师，训练LLM智能体。",
      "ta": "将游戏求解器融入LLM训练，可能提升游戏AI决策能力。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.25308"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "星战风3D场景解析",
      "sum": "Matvey Meleshko分享Ember Bazaar场景制作流程，含Marvelous Designer布料和材质。",
      "ta": "可参考其布料模拟和材质写实化工作流，适合场景美术学习。",
      "src": "80 Level · 07-29",
      "url": "https://80.lv/articles/breakdown-creating-a-star-wars-inspired-arabian-style-3d-scene-with-sci-fi-elements/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "实体木偶在数字时代价值",
      "sum": "Furry Puppet Studio讨论实体木偶制作流程及其不可替代性。",
      "ta": "对角色设计和特效制作有启发，但非直接技术参考。",
      "src": "80 Level · 07-29",
      "url": "https://80.lv/articles/interview-why-practical-puppets-still-matter-in-the-age-of-digital-characters/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "卡普空年更生化危机",
      "sum": "Capcom计划每年发布一款《生化危机》游戏，含重制版。",
      "ta": "行业动态，对游戏开发周期有参考意义，但无直接技术细节。",
      "src": "80 Level · 07-29",
      "url": "https://80.lv/articles/capcom-is-aiming-to-release-a-resident-evil-game-every-year/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏AI专家谈应用与风险",
      "sum": "Luke Dicken分析AI在游戏开发中的历史、生成式AI及风险。",
      "ta": "对AI在游戏管线中的定位有参考价值，但无具体技术方案。",
      "src": "80 Level · 07-29",
      "url": "https://80.lv/articles/game-ai-expert-explains-where-ai-actually-belongs-in-game-development-and-the-risks/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "腾讯Lightspeed LA裁员",
      "sum": "《Last Sentinel》开发商因项目方向调整裁员。",
      "ta": "行业动态，关注腾讯旗下工作室变动。",
      "src": "Game Developer · 07-29",
      "url": "https://www.gamedeveloper.com/business/tencent-owned-lightspeed-la-is-laying-off-staff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "EA CEO获3860万美元薪酬",
      "sum": "EA CEO Andrew Wilson在裁员和GenAI采用后获高额薪酬。",
      "ta": "行业动态，反映高管薪酬与公司策略的关联。",
      "src": "Game Developer · 07-29",
      "url": "https://www.gamedeveloper.com/business/ea-boss-awarded-38-6m-after-year-of-franchise-success-studio-layoffs-and-genai-adoption"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "实时视频世界模型",
      "sum": "Wonder模型支持实时、可控制摄像头的视频世界探索。",
      "ta": "关注实时可交互视频世界模型，可能影响未来游戏场景生成与动态环境构建。",
      "src": "arXiv · cs.GR · 07-28",
      "url": "https://arxiv.org/abs/2607.26037v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "高斯体渲染加速",
      "sum": "提出基于高斯的体渲染表示，用于高效剪切-扭曲可视化。",
      "ta": "体渲染加速技术，对医学可视化或体积特效有参考价值。",
      "src": "arXiv · cs.GR · 07-28",
      "url": "https://arxiv.org/abs/2607.25377v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "网格注意力机制",
      "sum": "提出内在且三角化无关的注意力机制，用于网格学习。",
      "ta": "网格上的注意力机制，可能提升3D模型处理与生成质量。",
      "src": "arXiv · cs.GR · 07-27",
      "url": "https://arxiv.org/abs/2607.24954v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "EverQuest视觉重建",
      "sum": "EverQuest Legends团队分享恢复经典视觉风格的自定义管线。",
      "ta": "经典MMO视觉重建流程，对复古风格或资产恢复项目有参考。",
      "src": "80 Level · 07-28",
      "url": "https://80.lv/articles/interview-how-everquest-legends-recreates-classic-everquest-s-iconic-visual-style/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "合作驾驶冒险游戏幕后",
      "sum": "Funselektor分享合作驾驶冒险游戏《over the hill》创作历程。",
      "ta": "独立游戏开发经验，对合作模式与公路题材有参考。",
      "src": "80 Level · 07-28",
      "url": "https://80.lv/articles/over-the-hill-creating-a-co-op-driving-adventure-game/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "电影级VFX幕后",
      "sum": "动画师分享《降世神通》电影中Appa口水特效的幕后制作。",
      "ta": "电影级VFX制作流程，对角色特效与液体模拟有参考。",
      "src": "80 Level · 07-28",
      "url": "https://80.lv/articles/animator-unveils-behind-the-scenes-of-vfx-for-appa-s-slobber-in-avatar-aang-movie/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "自定义遮挡系统",
      "sum": "为《Control》风格游戏Psych Rift开发自定义遮挡系统。",
      "ta": "自定义遮挡系统实现，对类似扭曲现实风格游戏有参考。",
      "src": "80 Level · 07-28",
      "url": "https://80.lv/articles/custom-occlusion-system-for-control-inspired-reality-bending-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "TaleWorlds联合创始人去世",
      "sum": "《骑马与砍杀》工作室TaleWorlds联合创始人İpek Yavuz逝世。",
      "ta": "行业人物讣告，了解工作室历史。",
      "src": "Game Developer · 07-28",
      "url": "https://www.gamedeveloper.com/business/obituary-taleworlds-co-founder-i-pek-yavuz-has-passed-away"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏业副业条款争议",
      "sum": "开发者讨论副业条款对创意自由的限制与困扰。",
      "ta": "行业法律问题，了解对自由职业者的影响。",
      "src": "Game Developer · 07-28",
      "url": "https://www.gamedeveloper.com/production/-i-have-been-hunted-down-by-hr-reps-lawyers-and-comms-people-developers-discuss-the-pain-and-prevalence-of-side-work-clauses"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "显式弹塑性损伤更新",
      "sum": "提出一种平滑显式弹塑性-损伤更新，适用于图形模拟。",
      "ta": "对物理模拟中的材料破坏和塑性变形有直接参考价值。",
      "src": "arXiv · cs.GR · 07-27",
      "url": "https://arxiv.org/abs/2607.24509v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "草图纹理感知着色",
      "sum": "TexSketch提出参考草图着色方法，解决数据集限制。",
      "ta": "对风格化纹理生成和草图辅助工作流有参考意义。",
      "src": "arXiv · cs.GR · 07-27",
      "url": "https://arxiv.org/abs/2607.24261v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态头发头部虚拟人",
      "sum": "DynHair用3D高斯泼溅跟踪和建模动态头发。",
      "ta": "对角色头发实时渲染和虚拟人管线有直接参考。",
      "src": "arXiv · cs.GR · 07-26",
      "url": "https://arxiv.org/abs/2607.23861v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "生成式头部测量模型",
      "sum": "GNM Head提出生成式人体头部参数模型。",
      "ta": "对角色头部建模和生成式管线有参考价值。",
      "src": "arXiv · cs.GR · 07-26",
      "url": "https://arxiv.org/abs/2607.23687v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "极小曲面神经表示",
      "sum": "提出精确神经表示方法用于极小曲面。",
      "ta": "对几何建模和曲面优化有理论参考。",
      "src": "arXiv · cs.GR · 07-26",
      "url": "https://arxiv.org/abs/2607.23437v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "光线追踪AO阴影复用",
      "sum": "提出遮挡点复用技术加速光线追踪AO和阴影。",
      "ta": "对实时光线追踪性能优化有直接参考。",
      "src": "arXiv · cs.GR · 07-25",
      "url": "https://arxiv.org/abs/2607.23122v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "无网格域随机化",
      "sum": "用3D高斯泼溅参数扰动实现无网格域随机化。",
      "ta": "对Sim-to-Real和有机体渲染有直接参考。",
      "src": "arXiv · cs.GR · 07-24",
      "url": "https://arxiv.org/abs/2607.22890v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "视差伪管道内部技巧",
      "sum": "用经典视差窗口技巧伪造地铁管道内部。",
      "ta": "对低成本环境伪装有直接参考。",
      "src": "80 Level · 07-27",
      "url": "https://80.lv/articles/fake-tube-interior-using-classic-parallax-windows-trick/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "无模拟伪流水技巧",
      "sum": "经典技巧伪造流动水面，无需流体模拟。",
      "ta": "对低性能开销水效果有参考。",
      "src": "80 Level · 07-27",
      "url": "https://80.lv/articles/classic-trick-to-fake-flowing-water-without-fluid-simulation/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "血源猎人游戏就绪资产",
      "sum": "Victor Monge López分享血源猎人粉丝资产制作流程。",
      "ta": "对角色雕刻、头发卡片和游戏就绪管线有参考。",
      "src": "80 Level · 07-27",
      "url": "https://80.lv/articles/breakdown-game-ready-bloodborne-s-old-hunter-fan-art/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "雅达利经典IP电影化",
      "sum": "Atari与环球合作制作《小行星》等经典游戏电影。",
      "ta": "对游戏IP跨媒体开发有参考。",
      "src": "Game Developer · 07-27",
      "url": "https://www.gamedeveloper.com/business/atari-and-universal-to-create-movies-based-on-classic-properties-including-asteroids-and-missile-command"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "可变形三角形Splatting",
      "sum": "新方法用非凸三角形基元实现实时辐射场渲染，减少冗余基元。",
      "ta": "实时渲染新基元，可能替代高斯泼溅，值得关注其光栅化效率。",
      "src": "arXiv · cs.GR · 07-24",
      "url": "https://arxiv.org/abs/2607.22446v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "卷发模拟新方法",
      "sum": "将卷发分解为卷曲单元，结合杆基与几何细节进行仿真。",
      "ta": "对毛发模拟管线有参考价值，尤其卷发动态与性能平衡。",
      "src": "arXiv · cs.GR · 07-24",
      "url": "https://arxiv.org/abs/2607.22103v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "无训练自回归渲染一致性",
      "sum": "提出无需训练的自回归生成渲染一致性方法。",
      "ta": "可能影响实时渲染中的生成式管线，关注其与引擎集成潜力。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.21848"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "古墓丽影新作幕后细节",
      "sum": "展示《Tomb Raider: Legacy of Atlantis》开发幕后。",
      "ta": "可观察AAA级场景美术与资产制作流程。",
      "src": "80 Level · 07-25",
      "url": "https://80.lv/articles/check-out-these-behind-the-scenes-details-of-tomb-raider-legacy-of-atlantis/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏开发模拟器内置引擎",
      "sum": "《Let's Build a Dungeon》内置编辑器，模拟真实开发流程。",
      "ta": "编辑器设计思路可参考，但非直接技术工具。",
      "src": "80 Level · 07-25",
      "url": "https://80.lv/articles/building-a-game-development-simulator-with-a-game-engine-inside-it/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前PS高管欲复兴AA游戏",
      "sum": "Shawn Layden计划填补独立与3A之间的空白。",
      "ta": "行业趋势，可能影响中小团队资源分配。",
      "src": "80 Level · 07-24",
      "url": "https://80.lv/articles/former-playstation-boss-shawn-layden-plans-to-bring-back-aa-games/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Fable风格无职业RPG访谈",
      "sum": "《Forsaken Realms》开发者谈类Fable风格与无职业系统。",
      "ta": "美术风格参考，但无具体技术细节。",
      "src": "80 Level · 07-24",
      "url": "https://80.lv/articles/interview-buidling-a-fable-inspired-classless-rpg-where-you-re-not-the-hero/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "鹅鸭杀开发经验谈",
      "sum": "Gaggle Studios分享社交推理游戏成功经验。",
      "ta": "项目管理参考，非技术向。",
      "src": "80 Level · 07-24",
      "url": "https://80.lv/articles/staying-lean-how-we-built-the-world-s-biggest-social-deduction-game/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "370+扫描PBR材质包",
      "sum": "限时96%折扣，含370+扫描PBR材质。",
      "ta": "快速填充材质库，注意许可与性能。",
      "src": "80 Level · 07-24",
      "url": "https://80.lv/articles/get-over-370-scanned-pbr-materials-in-one-bundle/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Jackbox应对后疫情销售下滑",
      "sum": "CEO谈派对游戏如何度过疫情后销售低谷。",
      "ta": "行业商业策略，非技术相关。",
      "src": "Game Developer · 07-24",
      "url": "https://www.gamedeveloper.com/business/how-jackbox-games-navigated-the-post-pandemic-sales-slump-ft-mike-bilder"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "EA收购获欧盟批准等新闻",
      "sum": "沙特-led EA收购获批，Xbox测试广告流媒体等。",
      "ta": "行业宏观动态，无直接技术影响。",
      "src": "Game Developer · 07-24",
      "url": "https://www.gamedeveloper.com/business/saudi-led-ea-buyout-receives-eu-approval-xbox-trials-ad-supported-game-streaming-and-poinpy-is-eternal-patch-notes-62"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "CATS角色动画工具系统",
      "sum": "开源角色动画工具系统，支持绑定与动画。",
      "ta": "可集成到动画管线，关注其与UE5兼容性。",
      "src": "Tech-Artists · 07-27",
      "url": "https://www.tech-artists.org/t/cats-character-animation-tool-system/18471"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "FabricatorStudio免费管线",
      "sum": "Maya到Unreal免费管线，含绑定、AI蒙皮、导出。",
      "ta": "直接提升角色资产迭代效率，值得测试。",
      "src": "Tech-Artists · 07-24",
      "url": "https://www.tech-artists.org/t/fabricatorstudio-a-free-maya-to-unreal-character-pipeline-rigging-ai-skinning-export-and-more/18470"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "可微渲染场景参数显著性",
      "sum": "利用可微渲染器生成场景参数显著性图，类比神经网络梯度方法。",
      "ta": "可微渲染用于参数优化之外，还能做场景特征重要性分析，对调试渲染效果有启发。",
      "src": "arXiv · cs.GR · 07-23",
      "url": "https://arxiv.org/abs/2607.21562v1"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "NVIDIA OptiX 光线追踪调试工具",
      "sum": "介绍使用 OptiX Toolkit 调试光线追踪应用的方法。",
      "ta": "光线追踪调试工具链更新，有助于定位 RT 管线中的性能或正确性问题。",
      "src": "NVIDIA · 07-23",
      "url": "https://developer.nvidia.com/blog/debugging-ray-tracing-applications-using-nvidia-optix-toolkit/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5 异步叙事系统拆解",
      "sum": "Tides of Tomorrow 用 UE5 状态机、蓝图、Houdini 实现玩家影响故事。",
      "ta": "UE5 状态机与 Houdini 管线结合实现异步多人叙事，对程序化叙事工具设计有参考。",
      "src": "80 Level · 07-23",
      "url": "https://80.lv/articles/how-tides-of-tomorrow-s-story-link-system-lets-players-shape-each-other-s-stories/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ArcBrush 1.5 升级 32 位浮点管线",
      "sum": "ArcBrush 1.5 引入色彩管理 32 位浮点图像管线，支持 Cryptomatte。",
      "ta": "32 位浮点管线对纹理合成与后期处理精度提升，适合高动态范围工作流。",
      "src": "80 Level · 07-23",
      "url": "https://80.lv/articles/arcbrush-1-5-upgrades-to-color-managed-32-bit-float-image-pipeline/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3D 高斯泼溅补全与 PatchMatch",
      "sum": "3D-GIMP 用 PatchMatch 改进 3D 高斯场景编辑，减少多视图不一致。",
      "ta": "3D 高斯编辑新方法，对实时场景修复与一致性维护有潜在应用。",
      "src": "arXiv · cs.GR · 07-22",
      "url": "https://arxiv.org/abs/2607.20789v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "缝纫图案缝合对应学习重建",
      "sum": "图学习框架从 2D 缝纫图案重建两级缝合信息，无需人工标注。",
      "ta": "自动缝合重建对虚拟服装建模与布料模拟管线自动化有直接帮助。",
      "src": "arXiv · cs.GR · 07-23",
      "url": "https://arxiv.org/abs/2607.21213v1"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Vermila 工作室裁员或关闭",
      "sum": "Vermila Studios 裁员，CEO 称未来数月关闭是可行可能。",
      "ta": "行业动荡信号，可能影响外包或合作项目稳定性。",
      "src": "Game Developer · 07-23",
      "url": "https://www.gamedeveloper.com/business/vermila-studios-lays-off-staff-studio-closure-a-feasible-possibility-in-coming-months"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "Disgaea 转型动作 RPG 开发谈",
      "sum": "开发团队分享从战术 RPG 转动作 RPG 的机制与模型适配经验。",
      "ta": "游戏类型转换中的模型与动画适配经验，对角色系统设计有参考。",
      "src": "80 Level · 07-24",
      "url": "https://80.lv/articles/disgaea-mayhem-shifting-from-tactical-rpg-to-action-rpg/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Halo 初代重制登陆 PlayStation",
      "sum": "Halo: Campaign Evolved 用新机制和操控现代化经典 FPS。",
      "ta": "经典 IP 跨平台重制，对引擎适配与现代化改造有参考。",
      "src": "PlayStation Blog · 07-23",
      "url": "https://blog.playstation.com/2026/07/23/13-ways-halo-campaign-evolved-modernizes-the-iconic-fps/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "漫威金刚狼故事预告发布",
      "sum": "Insomniac 在 SDCC 公布漫威金刚狼故事预告与艺术图。",
      "ta": "3A 游戏叙事与美术展示，对角色渲染与场景设计有参考。",
      "src": "PlayStation Blog · 07-23",
      "url": "https://blog.playstation.com/2026/07/23/marvels-wolverine-story-trailer-new-art-composer-details-and-more/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "四面体笼驱动海量动画几何光线追踪",
      "sum": "AMD 提出用四面体笼动画复用静态 BLAS，实时追踪数亿三角形，大幅降低植被/草丛更新开销。",
      "ta": "对植被渲染和人群系统意义重大，可显著减少每帧 BVH 重建和内存消耗。",
      "src": "AMD GPUOpen · 07-22",
      "url": "https://gpuopen.com/learn/ray-tracing-massive-amounts-animated-geometry/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "分裂辐射级联：实时全局光照新方法",
      "sum": "提出稀疏辐射探针的级联方案，解决传统探针方法细节不足问题，实现实时漫反射全局光照。",
      "ta": "可能成为 UE5 Lumen 之外的高质量 GI 替代方案，值得关注实现细节。",
      "src": "arXiv · cs.GR · 07-22",
      "url": "https://arxiv.org/abs/2607.20384v1"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 3,
      "title": "HAWKED 程序化瀑布工具制作详解",
      "sum": "Serge Filin 分享将 2D 概念转化为动态实时材质的程序化瀑布工具开发过程。",
      "ta": "直接相关植被/特效工作流，学习如何用程序化材质实现复杂水体效果。",
      "src": "80 Level · 07-22",
      "url": "https://80.lv/articles/creating-a-procedural-waterfalls-tool-for-the-game-hawked/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "优化写实水晶材质制作分解",
      "sum": "Anastasia Gorban 详解水晶材质分层结构、虹彩效果及划痕纹理制作流程。",
      "ta": "材质分层和虹彩实现技巧可复用至宝石/玻璃类 Shader 开发。",
      "src": "80 Level · 07-22",
      "url": "https://80.lv/articles/breakdown-how-to-create-an-optimized-and-realistic-crystal-material/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Tear Painter 更新支持纹理取色",
      "sum": "Blender 工具 Tear Painter 新版可直接从纹理中选取颜色。",
      "ta": "提升纹理绘制效率，对材质贴图工作流有直接帮助。",
      "src": "80 Level · 07-22",
      "url": "https://80.lv/articles/new-tear-painter-update-lets-you-pick-colors-directly-from-textures/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Unity URP 地形自适应动态雨系统",
      "sum": "Prism Works 发布 Unity URP 雨系统，支持地形自适应涟漪和建筑遮挡。",
      "ta": "Niagara 特效师可参考其地形交互逻辑，移植至 UE5 雨系统。",
      "src": "80 Level · 07-22",
      "url": "https://80.lv/articles/this-dynamic-rain-system-brings-terrain-adaptive-real-time-rain-effects-to-unity/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "MR-Compare：3D高斯与网格重建对比框架",
      "sum": "MR 框架实现 3D Gaussian Splatting 与网格重建在物理环境中的空间对齐比较。",
      "ta": "为 3D 重建质量评估提供混合现实工具，可能影响扫描资产管线。",
      "src": "arXiv · cs.GR · 07-22",
      "url": "https://arxiv.org/abs/2607.20325v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "快速波光学全息显示渲染",
      "sum": "利用多层图像实现 3D 全息显示的快速波光学渲染方法。",
      "ta": "前沿显示技术，长期可能影响实时渲染输出方式。",
      "src": "arXiv · cs.GR · 07-22",
      "url": "https://arxiv.org/abs/2607.19731v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "低功耗AR眼镜色调映射框架",
      "sum": "提出基于学习的功耗约束色调映射，在 AR 眼镜上优化显示功耗与感知质量。",
      "ta": "对移动/AR 设备渲染优化有参考价值，但非核心工作流。",
      "src": "arXiv · cs.GR · 07-21",
      "url": "https://arxiv.org/abs/2607.19509v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "ATSplat：紧凑前馈3D高斯泼溅",
      "sum": "提出自适应令牌扩展的前馈 3DGS 方法，减少存储开销。",
      "ta": "3DGS 压缩方向进展，可能影响实时 3D 重建资产格式。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.20417"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "S.T.A.L.K.E.R.2 独占费超开发预算",
      "sum": "GSC Game World 透露 Xbox 独占协议金额超过游戏自身开发预算。",
      "ta": "行业商业动态，了解平台独占策略对开发资金的影响。",
      "src": "80 Level · 07-22",
      "url": "https://80.lv/articles/s-t-a-l-k-e-r-2-s-xbox-exclusivity-deal-surpassed-the-game-s-own-development-budget/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Kinect游戏Freefall Racers 2026年复活",
      "sum": "2013年 Kinect 游戏 Freefall Racers 通过 Nex Playground 平台回归。",
      "ta": "怀旧游戏复活案例，对体感交互设计有参考意义。",
      "src": "Game Developer · 07-22",
      "url": "https://www.gamedeveloper.com/business/a-kinect-game-that-debuted-in-2013-has-been-revived-in-the-year-of-our-lord-2026"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Splatoon Raiders 原型曾是塔防游戏",
      "sum": "总监分享 Splatoon 衍生作原型为塔防，后回归系列核心玩法。",
      "ta": "游戏设计迭代案例，了解玩法原型到成品的过程。",
      "src": "Game Developer · 07-22",
      "url": "https://www.gamedeveloper.com/design/splatoon-raiders-started-as-a-tower-defense-game-but-its-splatoon-ness-got-lost"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Human Fall Flat 2取消，直接做3代",
      "sum": "No Brakes Games 创始人回顾十年历程，宣布取消 2 代直接开发 3 代。",
      "ta": "独立游戏开发决策案例，了解系列化开发策略。",
      "src": "Game Developer · 07-22",
      "url": "https://www.gamedeveloper.com/production/-human-fall-flat-2-is-cancelled-we-are-making-human-fall-flat-3-no-brakes-games-founder-looks-back-on-a-defining-decade"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Hasbro 取消多款游戏损失5600万美元",
      "sum": "Hasbro 因取消多个游戏项目记录 5600 万美元减值，将聚焦有特许经营潜力的项目。",
      "ta": "行业投资风向标，了解大厂项目筛选策略。",
      "src": "Game Developer · 07-22",
      "url": "https://www.gamedeveloper.com/business/hasbro-records-56m-write-down-after-scrapping-several-video-games"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Alpha Dog Games 脱离微软恢复独立",
      "sum": "被 Xbox 关闭两年后，Alpha Dog Games 重新获得独立运营权。",
      "ta": "工作室生存案例，了解行业并购后独立回归现象。",
      "src": "Game Developer · 07-22",
      "url": "https://www.gamedeveloper.com/business/alpha-dog-games-returns-to-independence-two-years-after-being-shuttered-by-xbox"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Fab夏季大促开启",
      "sum": "Fab商城数万资产最高70%折扣，持续至7月29日。",
      "ta": "可趁促销囤积材质、角色包等素材，但需注意资产质量与项目兼容性。",
      "src": "Unreal Engine · 07-21",
      "url": "https://www.unrealengine.com/news/the-fab-summer-mega-sale-is-now-on"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "扩散Transformer多模态区域控制",
      "sum": "提出Appearance Pointers，实现材质、对象身份等精确区域控制。",
      "ta": "对材质生成和纹理区域控制有参考价值，可能简化贴图工作流。",
      "src": "arXiv · cs.GR · 07-21",
      "url": "https://arxiv.org/abs/2607.19344v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "UV空间神经融合人脸重建",
      "sum": "UVFaceFusion实现多视角拓扑一致的人脸重建，适用于数字人。",
      "ta": "直接关联数字人制作管线，可提升面部资产重建效率与一致性。",
      "src": "arXiv · cs.GR · 07-21",
      "url": "https://arxiv.org/abs/2607.18798v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高效压缩神经高斯溅射体渲染",
      "sum": "ECoNGS提出压缩高斯原语用于交互式体数据可视化。",
      "ta": "对体积渲染和3D场景表示有启发，可能影响Niagara特效数据压缩。",
      "src": "arXiv · cs.GR · 07-20",
      "url": "https://arxiv.org/abs/2607.18466v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "交互式长时域世界建模",
      "sum": "AlayaWorld技术报告发布，聚焦长时域交互世界建模。",
      "ta": "与游戏世界模拟相关，但偏AI研究，暂不直接用于管线。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.18367"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "掩码视觉动作统一世界建模",
      "sum": "提出Masked Visual Actions方法，统一世界建模框架。",
      "ta": "对游戏AI行为建模有潜在参考，但偏学术，需跟踪后续应用。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.19343"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "皮克斯裁员",
      "sum": "迪士尼裁员数百人，皮克斯受影响最大，尽管《玩具5》票房近10亿。",
      "ta": "行业动荡信号，但无直接技术关联，仅作背景了解。",
      "src": "80 Level · 07-21",
      "url": "https://80.lv/articles/pixar-hit-with-layoffs-despite-toy-story-5-s-massive-box-office-success/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "手绘策略游戏开发幕后",
      "sum": "Fika Productions分享Unity手绘策略游戏《Don't Kill Them All》开发细节。",
      "ta": "手绘风格与策略玩法结合，可借鉴其美术管线与优化思路。",
      "src": "80 Level · 07-21",
      "url": "https://80.lv/articles/behind-the-development-of-hand-drawn-strategy-game-don-t-kill-them-all/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "SimFest 2026模拟游戏促销",
      "sum": "模拟游戏节开启，最高90%折扣。",
      "ta": "促销信息，无技术价值，可忽略。",
      "src": "80 Level · 07-21",
      "url": "https://80.lv/articles/simfest-2026-don-t-miss-these-discounted-simulation-games/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Meshy 3D Agent对话式AI",
      "sum": "Meshy推出3D Agent，用对话式AI辅助游戏艺术家生成风格一致3D资产。",
      "ta": "直接关联3D资产生成管线，可提升原型阶段效率，但需评估风格控制精度。",
      "src": "80 Level · 07-21",
      "url": "https://80.lv/articles/meshy-wants-ai-to-feel-less-like-a-prompt-and-more-like-a-creative-partner/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Cliff Bleszinski谈工作室倒闭",
      "sum": "Boss Key创始人称过于优厚的发行协议反致工作室失败。",
      "ta": "行业经验教训，无技术关联。",
      "src": "80 Level · 07-21",
      "url": "https://80.lv/articles/cliff-bleszinski-says-his-studio-s-too-good-publishing-deal-worked-against-it/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前Wreckreation团队成立新工作室",
      "sum": "原团队组建新工作室，正在开发续作。",
      "ta": "行业动态，无直接技术价值。",
      "src": "Game Developer · 07-21",
      "url": "https://www.gamedeveloper.com/business/former-wreckreation-team-starts-up-new-studio-working-on-sequel"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏批评对开发者的启示",
      "sum": "长视频游戏设计分析获数百万播放，开发者可从中学习。",
      "ta": "设计方法论参考，非技术内容。",
      "src": "Game Developer · 07-21",
      "url": "https://www.gamedeveloper.com/design/what-developers-can-learn-from-this-generation-of-games-criticism"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Splitgate开发商裁员",
      "sum": "1047 Games在《Empulse》发布不到一个月后裁员。",
      "ta": "行业裁员潮延续，无技术关联。",
      "src": "Game Developer · 07-21",
      "url": "https://www.gamedeveloper.com/business/report-splitgate-dev-1047-games-lays-off-staff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Midgar Studio清算",
      "sum": "法国工作室Midgar Studio被母公司Nacon清算。",
      "ta": "行业动荡，无技术价值。",
      "src": "Game Developer · 07-21",
      "url": "https://www.gamedeveloper.com/business/edge-of-memories-developer-midgar-studio-is-being-liquidated"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "体积数据高效有损压缩",
      "sum": "EVOLVE 提出跨域数据库上的变速率编码，用于大规模科学模拟体积压缩。",
      "ta": "体积数据压缩技术可能影响未来体积渲染管线的存储与传输效率。",
      "src": "arXiv · cs.GR · 07-20",
      "url": "https://arxiv.org/abs/2607.18187v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "无损隐式神经体积表示",
      "sum": "Lossless-INR 实现无损体积隐式神经表示，克服了现有 INR 有损问题。",
      "ta": "无损 INR 为体积数据在实时渲染中的高保真存储提供新可能。",
      "src": "arXiv · cs.GR · 07-20",
      "url": "https://arxiv.org/abs/2607.18150v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "快速VEM流体模拟",
      "sum": "提出快速虚拟元法，高效处理复杂边界下的流体-边界交互模拟。",
      "ta": "流体特效模拟新方法，可能提升Niagara中复杂边界流体性能。",
      "src": "arXiv · cs.GR · 07-20",
      "url": "https://arxiv.org/abs/2607.17725v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "特征引导扩散逆渲染",
      "sum": "非可微逆渲染方法，用特征引导扩散避免局部最优，减少工程定制。",
      "ta": "简化材质/光照逆向重建流程，可能用于自动生成PBR贴图。",
      "src": "arXiv · cs.GR · 07-19",
      "url": "https://arxiv.org/abs/2607.17411v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "点云快速符号距离计算",
      "sum": "Points as Tori 方法支持任意分辨率下点云符号距离快速逐点查询。",
      "ta": "加速点云重建和SDF场计算，对程序化植被或地形工具可能有用。",
      "src": "arXiv · cs.GR · 07-18",
      "url": "https://arxiv.org/abs/2607.16946v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "拓扑感知3DGS平面重建",
      "sum": "TopoGS 通过拓扑感知3D高斯泼溅提取结构化参数化平面几何。",
      "ta": "从图像直接生成可编辑平面几何，利于场景编辑和LOD构建。",
      "src": "arXiv · cs.GR · 07-18",
      "url": "https://arxiv.org/abs/2607.16838v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可微几何图像薄壳生成",
      "sum": "DiffGI 用可微几何图像实现高保真薄壳3D生成。",
      "ta": "薄壳模型生成新范式，对角色或道具的自动拓扑生成有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.13365"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "长尾驾驶数据生成",
      "sum": "OpenLongTail 生成式扩增长尾驾驶场景数据。",
      "ta": "自动驾驶仿真数据生成，与游戏AI或开放世界NPC行为无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.09655"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "实时多模态应用代理",
      "sum": "FlashRT 提供代理框架，引导部署实时多模态应用。",
      "ta": "实时应用部署工具，与游戏渲染管线无直接关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.18171"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型推理时对齐",
      "sum": "DiFA 在推理时进行前向过程对齐，提升扩散模型生成质量。",
      "ta": "扩散模型改进，可能间接影响AI生成纹理或资产质量。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.17972"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Unity 7路线图公布",
      "sum": "Unity 7基于Unity 6架构，提供不破坏构建的更新路径和新工具。",
      "ta": "引擎升级策略，确保项目迁移稳定性，对管线维护有影响。",
      "src": "Game Developer · 07-21",
      "url": "https://www.gamedeveloper.com/programming/unity-unveils-unity-7-roadmap-with-update-path-that-won-t-break-your-build"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "文本到动作的逐笔时间控制",
      "sum": "引入动作单元实现文本到动作的逐笔时间控制。",
      "ta": "对角色动画工作流中的动作生成精度有参考价值。",
      "src": "arXiv · cs.GR · 07-17",
      "url": "https://arxiv.org/abs/2607.15717v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频基础模型生成建模",
      "sum": "通过表示自编码器驯服视频基础模型用于生成。",
      "ta": "视频生成技术可能间接影响实时渲染中的动态内容创建。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.14088"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE Expanse体积工作流教程",
      "sum": "Reza Sarkamari发布视频教程，讲解Unreal Engine中Expanse体积效果工作流。",
      "ta": "可学习Expanse插件在UE中实现云、雾等体积特效的完整流程。",
      "src": "80 Level · 07-18",
      "url": "https://80.lv/articles/check-out-this-tutorial-on-expanse-workflow-in-unreal-engine/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Godot极地生存游戏动画",
      "sum": "Frost Kin是一款Godot引擎开发的极地生存冒险游戏，展示超现实动画。",
      "ta": "Godot引擎在动画表现上的进展可作为参考，但非UE直接相关。",
      "src": "80 Level · 07-18",
      "url": "https://80.lv/articles/surreal-animations-from-an-arctic-survival-game-made-in-godot/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "B社确认多个辐射项目",
      "sum": "Bethesda确认辐射3/新维加斯重制版及Obsidian新辐射游戏，老滚6仍是重点。",
      "ta": "辐射IP重制可能带动UE5或自研引擎的渲染管线需求，但无直接技术细节。",
      "src": "80 Level · 07-17",
      "url": "https://80.lv/articles/bethesda-confirms-multiple-fallout-projects-including-remasters-and-new-obsidian-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "蜘蛛机甲后末日游戏",
      "sum": "一款玩家操控蜘蛛状机甲的后末日游戏发布。",
      "ta": "游戏概念有趣，但无技术或工作流参考价值。",
      "src": "80 Level · 07-17",
      "url": "https://80.lv/articles/in-this-game-you-ll-be-a-spider-like-mech-navigating-a-post-apocalyptic-world/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "15年游戏合作经验分享",
      "sum": "ZiMAD首席BD官分享15年游戏合作经验，聚焦玩家信任与快速变革。",
      "ta": "商业经验分享，对TA工作流无直接帮助。",
      "src": "80 Level · 07-17",
      "url": "https://80.lv/articles/what-15-years-of-game-partnerships-taught-me/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Epic与Google和解安卓商店",
      "sum": "Epic与Google达成和解，第三方应用商店即将登陆Android。",
      "ta": "平台生态变化可能影响游戏分发，但非技术相关。",
      "src": "80 Level · 07-17",
      "url": "https://80.lv/articles/epic-games-google-withdraw-settlement-third-party-app-stores-are-coming-to-android/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "ZA/UM工作室裁员32人",
      "sum": "ZA/UM在发布新作两个月后裁员最多32人，称艺术标准不变。",
      "ta": "行业裁员新闻，无技术参考价值。",
      "src": "Game Developer · 07-17",
      "url": "https://www.gamedeveloper.com/business/za-um-studios-to-lay-off-up-to-32-workers-two-months-after-releasing-zero-parades-for-dead-spies"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Todd Howard确认与Obsidian合作",
      "sum": "辐射总监Todd Howard确认与Obsidian合作开发新辐射游戏。",
      "ta": "辐射新作可能采用UE5或自研引擎，但无具体技术细节。",
      "src": "Game Developer · 07-17",
      "url": "https://www.gamedeveloper.com/business/todd-howard-says-the-timing-is-right-for-a-collaboration-with-obsidian"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "工会挑战Xbox等业界动态",
      "sum": "工会挑战Xbox、GameStop CEO称实体游戏销售无关紧要、Glen Schofield退休。",
      "ta": "行业综合新闻，无技术或工作流参考价值。",
      "src": "Game Developer · 07-17",
      "url": "https://www.gamedeveloper.com/business/labor-unions-challenge-xbox-gamestop-ceo-says-physical-game-sales-are-irrelevant-and-glen-schofield-retires-patch-notes-61"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "交互世界模型作为游戏引擎",
      "sum": "论文提出将交互世界模型重新构想为游戏引擎，从像素到状态。",
      "ta": "可能影响未来游戏AI驱动的动态世界生成，需关注其与实时渲染的接口。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.14076"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "卡普空RE引擎实装路径追踪",
      "sum": "卡普空在《PRAGMATA》和《生化危机：安魂曲》中同时实装路径追踪。",
      "ta": "RE引擎路径追踪落地方案，对UE5 TA有直接参考价值。",
      "src": "NVIDIA · 07-16",
      "url": "https://developer.nvidia.com/blog/qa-how-capcom-brought-path-tracing-to-re-engine-across-pragmata-and-resident-evil-requiem/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "在线神经时空记忆动态视图合成",
      "sum": "提出在线神经时空记忆方法，用于多视角流视频的动态新视角合成。",
      "ta": "实时动态场景重建技术，可能影响未来游戏内动态环境渲染。",
      "src": "arXiv · cs.GR · 07-16",
      "url": "https://arxiv.org/abs/2607.15271v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Godot免费2D足球游戏课程",
      "sum": "12小时免费Godot课程，面向初/中级开发者制作2D街机足球游戏。",
      "ta": "Godot入门资源，适合TA了解轻量引擎工作流。",
      "src": "80 Level · 07-16",
      "url": "https://80.lv/articles/create-your-own-2d-arcade-soccer-game-in-godot-with-this-free-12-hour-course/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "ZeniMax工作室领导层被裁",
      "sum": "Xbox裁员波及ZeniMax Online Studios，包括工作室负责人等高层。",
      "ta": "行业裁员动态，可能影响相关项目资源分配。",
      "src": "Game Developer · 07-16",
      "url": "https://www.gamedeveloper.com/business/zenimax-online-studios-leadership-is-part-of-the-379-laid-off-workers"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "Houdini 22 发布",
      "sum": "SideFX 发布 Houdini 22，原生支持高斯泼溅、新 UI 和程序化工具。",
      "ta": "原生高斯泼溅支持意味着 TA 可直接在 Houdini 中处理实时渲染点云资产，无需外部转换。",
      "src": "80 Level · 07-15",
      "url": "https://80.lv/articles/houdini-22-is-out-now-bringing-native-gaussian-splats-new-ui-and-more/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "超快纹理图集泼溅",
      "sum": "3DGS 新方法：解耦辐射表示，实现超快纹理图集泼溅渲染。",
      "ta": "若成熟可大幅降低高斯泼溅的片段着色开销，对实时场景渲染性能优化有直接参考。",
      "src": "arXiv · cs.GR · 07-15",
      "url": "https://arxiv.org/abs/2607.13808v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "体积逆渲染新框架",
      "sum": "提出神经辐射传输方法，从图像恢复参与介质光学属性。",
      "ta": "对体积云、烟雾等参与介质的材质重建与光照模拟有潜在应用。",
      "src": "arXiv · cs.GR · 07-15",
      "url": "https://arxiv.org/abs/2607.13695v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "渐进推理室内场景生成",
      "sum": "ThinkBLOX 用 VLM 渐进推理生成 3D 室内场景布局。",
      "ta": "程序化生成室内场景的 AI 辅助方法，可加速关卡原型设计。",
      "src": "arXiv · cs.GR · 07-15",
      "url": "https://arxiv.org/abs/2607.13539v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "单目新视角合成",
      "sum": "MetaView 用尺度感知隐式几何先验实现单目新视角合成。",
      "ta": "单目重建技术，可能用于快速生成参考视角或辅助材质贴图。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.12000"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《明日方舟：终末地》PSSR 升级",
      "sum": "PS5 Pro 版 1.4 更新升级 PSSR，提升画质与时间稳定性。",
      "ta": "PSSR 升级对 UE 游戏在 PS5 Pro 上的渲染管线调优有参考意义。",
      "src": "PlayStation Blog · 07-15",
      "url": "https://blog.playstation.com/2026/07/15/arknights-endfield-on-ps5-pro-upgraded-pssr-launches-with-version-1-4/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《使命召唤》动态地图模式",
      "sum": "MW4 引入 Kill Block 模式，模块化战场每局重新配置。",
      "ta": "动态关卡生成思路，可能涉及程序化布局与碰撞检测优化。",
      "src": "PlayStation Blog · 07-15",
      "url": "https://blog.playstation.com/2026/07/15/everything-to-know-about-modern-warfare-4s-ever-changing-kill-block-multiplayer-mode/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "《Denshattack!》开发访谈",
      "sum": "开发者谈融合托尼霍克与 Jet Set Radio 的火车玩法与赛璐璐风格。",
      "ta": "赛璐璐风格与高速运动系统的实现细节对 TA 有启发。",
      "src": "80 Level · 07-15",
      "url": "https://80.lv/articles/interview-how-denshattack-blends-tony-hawk-jet-set-radio-with-trains/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前 Epic 高管加入 Saber",
      "sum": "前 Epic Games VP Steve Allison 任 Saber Interactive 首席商务官。",
      "ta": "行业人事变动，可能影响 Saber 的引擎合作策略。",
      "src": "Game Developer · 07-15",
      "url": "https://www.gamedeveloper.com/business/former-epic-games-vp-appointed-saber-interactive-s-chief-business-officer"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《死亡空间》联合创始人退休",
      "sum": "Glen Schofield 结束 35 年游戏开发生涯退休。",
      "ta": "行业资深人物退休，对恐怖游戏视觉风格有历史影响。",
      "src": "80 Level · 07-15",
      "url": "https://80.lv/articles/dead-space-creator-retires-after-35-years-in-game-development/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "GPU崩溃调试LLM助手",
      "sum": "AMD发布RGD MCP Server，用LLM分析GPU崩溃并给出修复建议。",
      "ta": "调试GPU崩溃可借助LLM自动根因分析，提升Shader/材质调试效率。",
      "src": "AMD GPUOpen · 07-14",
      "url": "https://gpuopen.com/learn/post-mortem-gpu-crash-debugging-with-llms/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "非人形头部Blendshape注册",
      "sum": "RegHead框架为可动画非人形头部构建语义Blendshape集，支持重定向。",
      "ta": "对非人形角色面部动画有直接参考价值，可简化Blendshape制作流程。",
      "src": "arXiv · cs.GR · 07-13",
      "url": "https://arxiv.org/abs/2607.12206v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "曲面自适应流体同调模拟",
      "sum": "新方法处理非单连通曲面上的无粘不可压流体，关注谐波分量动态。",
      "ta": "对曲面流体特效（如角色表面水流）有理论支撑，可能影响Niagara实现。",
      "src": "arXiv · cs.GR · 07-13",
      "url": "https://arxiv.org/abs/2607.12001v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Unity程序化节点网格框架",
      "sum": "Viktor Grigorev分享基于节点的程序化网格框架构建方法。",
      "ta": "类似Houdini的节点化工作流，可借鉴到UE程序化生成工具链。",
      "src": "80 Level · 07-14",
      "url": "https://80.lv/articles/building-procedural-node-based-mesh-framework-in-unity/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Material Maker 1.7登陆Steam",
      "sum": "程序化材质工具Material Maker发布1.7版本并上架Steam。",
      "ta": "免费程序化材质工具更新，适合快速原型和材质库扩展。",
      "src": "80 Level · 07-14",
      "url": "https://80.lv/articles/create-procedural-materials-with-material-maker-now-on-steam/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "黑旗重制版首日销量200万",
      "sum": "育碧《刺客信条：黑旗重制版》24小时销量超200万，巴塞罗那工作室罢工。",
      "ta": "重制版商业成功，但工作室劳资冲突值得关注行业动态。",
      "src": "Game Developer · 07-14",
      "url": "https://www.gamedeveloper.com/business/assassin-s-creed-black-flag-topped-2m-sales-on-its-first-day"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Compulsion Games寻求合作",
      "sum": "《午夜以南》开发商从Xbox独立后，公开招募商业伙伴。",
      "ta": "独立后工作室动向可能影响后续项目技术合作机会。",
      "src": "Game Developer · 07-14",
      "url": "https://www.gamedeveloper.com/business/compulsion-games-is-seeking-partners-after-xbox-spin-off"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Azra Games融资后裁员",
      "sum": "前《星战：银河英雄》GM创立的工作室在首作未发布前裁员。",
      "ta": "行业融资环境收紧，注意项目稳定性。",
      "src": "Game Developer · 07-14",
      "url": "https://www.gamedeveloper.com/business/ex-star-wars-galaxy-of-heroes-gm-studio-lays-off-staff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Spin Master发售后即裁员",
      "sum": "《汪汪队立大功》游戏开发商在发售后两天被裁，开发转交其他团队。",
      "ta": "发售后立即裁员反映行业不稳定，影响后续维护。",
      "src": "Game Developer · 07-14",
      "url": "https://www.gamedeveloper.com/mobile/spin-master-lays-off-paw-patrol-the-game-devs-two-days-after-launch"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "文本引导网格变形",
      "sum": "PoseAlign通过文本引导变形生成姿态一致的3D网格。",
      "ta": "文本驱动变形工具可加速角色姿态调整，减少手动雕刻。",
      "src": "arXiv · cs.GR · 07-12",
      "url": "https://arxiv.org/abs/2607.10560v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "按需属性控制界面",
      "sum": "Spatula系统生成生成式内容迭代中的按需原位属性控制界面。",
      "ta": "探索交互式生成工作流，可能改善TA在引擎内调整参数的方式。",
      "src": "arXiv · cs.GR · 07-11",
      "url": "https://arxiv.org/abs/2607.10405v1"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "跨拓扑角色动作混合",
      "sum": "新框架实现任意角色拓扑间的神经动作混合，无需固定骨架。",
      "ta": "跨拓扑动作混合可简化不同角色间的动画复用，提升动画管线效率。",
      "src": "arXiv · cs.GR · 07-11",
      "url": "https://arxiv.org/abs/2607.10370v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "双人对话动作生成",
      "sum": "Learn2Chat通过交互调制单语先验生成双人对话动作。",
      "ta": "对话动作生成技术可能用于NPC交互动画，但当前与游戏管线距离较远。",
      "src": "arXiv · cs.GR · 07-11",
      "url": "https://arxiv.org/abs/2607.10313v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "推理时动作迁移",
      "sum": "Motion4Motion实现推理时跨主体动作迁移。",
      "ta": "动作迁移技术可快速复用动画数据，但需验证实时性能。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.11644"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 5.2雕刻新功能",
      "sum": "3D艺术家分享Blender 5.2新增雕刻功能的教程。",
      "ta": "Blender雕刻更新可能影响资产制作流程，但非UE5核心。",
      "src": "80 Level · 07-13",
      "url": "https://80.lv/articles/3d-artist-shares-a-tutorial-on-new-sculpting-features-in-blender-5-2/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "11 Bit Studios裁员20人",
      "sum": "《冰汽时代》开发商11 Bit Studios裁员20人，部分员工内部转岗。",
      "ta": "行业裁员动态，反映工作室成本压力，可能影响人才流动。",
      "src": "Game Developer · 07-13",
      "url": "https://www.gamedeveloper.com/business/the-alters-and-frostpunk-developer-11-bit-studios-is-laying-off-20-employees-"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态逆渲染分解材质光照",
      "sum": "提出动态逆渲染方法，从表面辐射分解材质与光照，支持重光照与AR。",
      "ta": "逆渲染技术直接影响材质工作流，可提升PBR资产重建精度。",
      "src": "arXiv · cs.GR · 07-10",
      "url": "https://arxiv.org/abs/2607.09329v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "示例编程批量编辑碰撞网格",
      "sum": "提出通过示例编程批量编辑3D碰撞网格的方法，提升物理资产制作效率。",
      "ta": "碰撞网格是物理交互基础，批量编辑可加速关卡和角色碰撞体制作。",
      "src": "arXiv · cs.GR · 07-09",
      "url": "https://arxiv.org/abs/2607.08804v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型合成沙沸图像",
      "sum": "基于扩散模型合成沙沸缺陷图像，用于低资源堤坝检测。",
      "ta": "扩散合成技术可迁移至游戏纹理或缺陷资产生成，但当前应用领域非游戏。",
      "src": "arXiv · cs.GR · 07-08",
      "url": "https://arxiv.org/abs/2607.08794v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Ornatrix毛发烘焙管线",
      "sum": "Ornatrix毛发烘焙管线及免费Maya自动化工具发布。",
      "ta": "可简化毛发从DCC到引擎的烘焙流程，提升毛发资产制作效率。",
      "src": "Tech-Artists · 07-12",
      "url": "https://www.tech-artists.org/t/ornatrix-groom-to-bake-pipeline-a-free-maya-tool-that-automates-the-setup/18462"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CUDA核融合优化内存",
      "sum": "NVIDIA 博客介绍核融合技术改善 GPU 内存带宽与启动开销。",
      "ta": "核融合思路可借鉴到 UE Shader 合并与渲染 Pass 优化。",
      "src": "NVIDIA · 07-10",
      "url": "https://developer.nvidia.com/blog/kernel-fusion-in-nvidia-cuda-optimizing-memory-traffic-and-launch-overhead/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "事件视频重建与插帧",
      "sum": "LongE2V 用视频扩散模型实现长时域事件视频重建与插帧。",
      "ta": "视频插帧技术可应用于游戏过场或实时回放效果。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.08770"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时交互多目标视频分割",
      "sum": "SAM-MT 实现实时交互式多目标视频分割。",
      "ta": "实时分割可用于游戏内动态遮罩或后期特效。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.08688"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "赛博朋克治愈系建造游戏",
      "sum": "一款允许玩家建造雨浸世界的赛博朋克治愈游戏。",
      "ta": "环境建造玩法展示程序化天气与场景交互潜力。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/this-cyberpunk-cozy-game-allows-you-to-build-your-own-rain-soaked-world/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Poppy Playtime恐怖IP解析",
      "sum": "总监谈武器化怀旧、心理恐怖与环境叙事设计哲学。",
      "ta": "环境叙事与关卡设计思路可启发场景氛围构建。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/how-poppy-playtime-became-one-of-gaming-s-biggest-horror-franchises/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "独立工作室驾驶平台续作开发",
      "sum": "开发者谈 Stunt Paradise 2 关卡重设计及车辆行为软件。",
      "ta": "车辆物理与关卡设计经验可参考。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/how-an-indie-studio-created-a-sequel-of-a-driving-platformer-game/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Hunt: Showdown武器皮肤制作",
      "sum": "详解 Nitro Express 皮肤的金色细节与材质设置。",
      "ta": "高精度武器材质工作流，含金属细节与材质节点。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/behind-creation-of-nitro-express-checks-and-balances-skin-for-hunt-showdown-1896/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "独立游戏发行困境分析",
      "sum": "Skystone Games 谈 2026 年发行策略与 2.1 万款游戏问题。",
      "ta": "行业生态分析，对独立项目发行时机有参考。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/indie-game-publishing-the-21k-game-problem/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "浏览器内程序化藤蔓生成器",
      "sum": "基于 Three.js 的完全程序化常春藤与无花果树生成器。",
      "ta": "程序化植被生成算法可直接参考用于 UE 工具。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/this-fully-procedural-ivy-and-fig-tree-generator-runs-in-your-browser/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "NexusMods向UGC平台转型",
      "sum": "CEO 谈从文件托管向用户生成内容平台进化。",
      "ta": "Mod 生态变化影响游戏内容生产与工具需求。",
      "src": "Game Developer · 07-10",
      "url": "https://www.gamedeveloper.com/pc/nexusmods-ceo-digs-into-the-dynamics-of-video-game-modding-ft-victor-folmann"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "交互式人体动作生成",
      "sum": "ARDY用自回归扩散+混合表示实现实时3D人体动作生成。",
      "ta": "实时动作生成可加速角色动画原型，但需验证UE5管线集成度。",
      "src": "arXiv · cs.GR · 07-09",
      "url": "https://arxiv.org/abs/2607.08741v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "物理仿真统一网格重建",
      "sum": "HoloTetSphere直接优化体积基元，绕过表面提取+四面体化两步流程。",
      "ta": "直接输出物理就绪网格，可简化程序化资产到仿真管线的转换。",
      "src": "arXiv · cs.GR · 07-09",
      "url": "https://arxiv.org/abs/2607.08398v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "PBR条件视频重光照",
      "sum": "LightCrafter用PBR条件扩散模型实现可控且时序一致的重光照。",
      "ta": "PBR条件控制可提升视频重光照的物理准确性，对过场动画有用。",
      "src": "arXiv · cs.GR · 07-09",
      "url": "https://arxiv.org/abs/2607.08016v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时交互视频生成模型",
      "sum": "Vidu S1发布实时交互式视频生成模型。",
      "ta": "实时视频生成可能用于游戏内动态过场，但当前质量未知。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.03118"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型推理加速草稿",
      "sum": "Flash-BoN为扩散模型提供即时草稿以加速推理。",
      "ta": "推理加速技术可降低生成式工具在游戏工作流中的延迟。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.04461"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "端侧图像转视频相机运动",
      "sum": "CineMobile在设备上实现图像到视频的扩散，生成电影级相机运动。",
      "ta": "端侧生成相机运动可用于快速预览，但实时性存疑。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.03803"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "行星飞船动画概念",
      "sum": "用整个行星构建巨型飞船的史诗动画概念。",
      "ta": "视觉灵感参考，无直接技术细节。",
      "src": "80 Level · 07-09",
      "url": "https://80.lv/articles/epic-animation-of-giant-spaceship-built-from-entire-planets/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "免费Maya面部绑定变形器",
      "sum": "Zhenggang Deng发布免费自定义Maya变形器，用于高端面部绑定。",
      "ta": "免费面部绑定工具可提升角色管线效率，需测试兼容性。",
      "src": "80 Level · 07-09",
      "url": "https://80.lv/articles/free-custom-maya-deformer-for-high-end-facial-rigging/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "玩具手柄改Mario Kart",
      "sum": "开发者将Fisher-Price玩具手柄改造成Mario Kart陀螺仪游戏手柄。",
      "ta": "硬件改造趣味项目，与TA工作流无关。",
      "src": "80 Level · 07-09",
      "url": "https://80.lv/articles/developer-turns-fisher-price-toy-controller-into-a-mario-kart-gyro-gamepad/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "风格化角色面部绑定测试",
      "sum": "3D短片《Noah and Jade》的风格化角色面部绑定测试。",
      "ta": "风格化绑定案例参考，无新技术细节。",
      "src": "80 Level · 07-09",
      "url": "https://80.lv/articles/facial-rig-tests-for-stylized-characters-in-3d-short-film/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "游戏媒体新站Respec上线",
      "sum": "Eurogamer和VG247老将推出独立游戏媒体Respec。",
      "ta": "行业动态，可能影响游戏资讯获取渠道。",
      "src": "Game Developer · 07-09",
      "url": "https://www.gamedeveloper.com/business/eurogamer-and-vg247-veterans-launch-new-independent-site"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "风险规避游戏行业边缘化开发者",
      "sum": "Nazih Fares的卡牌游戏因行业风险规避难获融资。",
      "ta": "反映行业融资困境，与TA工作无直接关联。",
      "src": "Game Developer · 07-09",
      "url": "https://www.gamedeveloper.com/production/the-game-industry-is-failing-marginalized-developers"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "title": "黑曜石工作室裁员52+人",
      "sum": "WARN通知确认黑曜石至少52名员工被裁，涉及Pentiment和天外世界团队。",
      "ta": "3A工作室裁员影响行业信心，可能波及项目外包需求。",
      "src": "Game Developer · 07-09",
      "url": "https://www.gamedeveloper.com/business/report-obsidian-losing-around-one-quarter-of-its-staff-to-xbox-reset-"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "title": "Xbox裁减379名Zenimax员工",
      "sum": "Xbox在马里兰州裁减379名Zenimax员工，含213名ESO开发者。",
      "ta": "大规模裁员影响游戏行业生态，可能影响UE5项目资源。",
      "src": "Game Developer · 07-09",
      "url": "https://www.gamedeveloper.com/business/xbox-had-laid-off-379-zenimax-workers-in-maryland"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Maya动画层节点自连接Bug",
      "sum": "Maya 2024.2中引用绑定的动画层节点保存重开后自连接循环。",
      "ta": "直接影响绑定和动画管线，需关注修复或规避。",
      "src": "Tech-Artists · 07-09",
      "url": "https://www.tech-artists.org/t/bug-animation-layer-nodes-self-connect-cycle-after-save-reopen-on-referenced-rigs-maya-2024-2/18445"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "SPEAR 仿真器发布",
      "sum": "SPEAR 是用于具身 AI 研究的光真实感交互仿真器。",
      "ta": "关注其渲染管线与实时性能，可能影响虚拟数据生成工作流。",
      "src": "arXiv · cs.GR · 07-07",
      "url": "https://arxiv.org/abs/2607.06701v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "WildCity 城市级测试床",
      "sum": "WildCity 是真实城市规模的渲染、仿真与空间智能测试平台。",
      "ta": "可作为程序化城市生成与实时渲染的参考基准。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.06838"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "黑旗重制版无缝世界技术",
      "sum": "育碧谈黑旗重制版：Anvil 引擎升级，移除加载屏，现代化航海。",
      "ta": "直接相关：Anvil 引擎开放世界流式加载与性能优化细节。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/interview-the-tech-behind-assassin-s-creed-black-flag-resynced-s-seamless-open-world/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "黑曜石将开发新辐射",
      "sum": "微软取消 Avowed 续作，黑曜石转向新辐射项目。",
      "ta": "行业动向，可能影响后续引擎/工具需求。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/fallout-new-vegas-studio-obsidian-is-reportedly-making-a-new-fallout-game/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "法环短剑资产制作解析",
      "sum": "Maya 粗模、ZBrush 高模、Substance Painter 纹理与晶体材质。",
      "ta": "关注晶体材质挑战与 PBR 纹理流程。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/elden-ring-glintstone-kris-shortsword-made-in-maya-zbrush-substance-3d-painter/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "Godot 虫洞 Shader 关卡过渡",
      "sum": "Godot 飞行游戏用虫洞 Shader 实现无缝关卡切换，纯 GDScript。",
      "ta": "可借鉴其 Shader 实现无缝过渡的思路。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/wormhole-shader-for-seamless-level-transitions-in-godot-powered-arcade-flying-game/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "Unity 格斯特纳波海洋 Shader",
      "sum": "Unity 中实现带格斯特纳波的海洋 Shader。",
      "ta": "经典海洋渲染技术，适合实时水面效果参考。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/ocean-shader-with-gerstner-waves-in-unity/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "马里奥赛车手游停运",
      "sum": "任天堂宣布《马里奥赛车巡回赛》手游将停运，无离线版。",
      "ta": "行业新闻，无直接技术关联。",
      "src": "Game Developer · 07-08",
      "url": "https://www.gamedeveloper.com/business/mobile-game-mario-kart-tour-is-winding-down"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "id Software 裁员 136 人",
      "sum": "id Software 裁员 136 人，Xbox 游戏部门计划裁 3200 人。",
      "ta": "行业新闻，无直接技术关联。",
      "src": "Game Developer · 07-07",
      "url": "https://www.gamedeveloper.com/business/report-around-half-of-the-id-software-team-have-been-laid-off"
    }
  ]
};
