// daily-intel 近期热点层 —— 由 run.py 自动累积，供「近期」入口翻阅。
// 与 data.js（仅今日新增）分离：data.js 是“今天有什么新的”，recent.js 是“近期攒了啥”。

window.INTEL_RECENT = {
  "updated": "2026-11-27 17:34",
  "cards": [
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "SIGGRAPH Asia 12月吉隆坡首办",
      "sum": "第19届SIGGRAPH Asia于12月1-4日在吉隆坡会议中心举行。",
      "ta": "图形学前沿会议，可关注程序化生成与实时渲染相关议程。",
      "src": "80 Level · 11-27",
      "url": "https://80.lv/articles/siggraph-asia-2026-makes-its-malaysian-debut-this-december/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini复刻手工模型微缩感",
      "sum": "Will Hoskin用Houdini程序化工具做棉花尘、铁丝树与塑料人偶的微缩模型质感。",
      "ta": "程序化做旧与风格化材质思路，可借鉴到植被/道具的微缩视觉。",
      "src": "80 Level · 11-26",
      "url": "https://80.lv/articles/recreating-the-scale-model-look-of-a-rally-diorama-in-houdini/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "2D插画转3D场景全流程",
      "sum": "Pedro Silva分享把2D奇幻小镇做成3D场景，涵盖建模、贴图、植被与渲染。",
      "ta": "含植被环节的完整场景工作流，可看其植被与最终渲染处理。",
      "src": "80 Level · 11-26",
      "url": "https://80.lv/articles/turning-whimsical-2d-town-into-cozy-3d-world/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "Unity实现写实断肢血腥效果",
      "sum": "THE IRONY团队拆解其Unity血腥系统与开发难点。",
      "ta": "特效向的肢解/血液实现参考，非本职核心但可速览。",
      "src": "80 Level · 11-26",
      "url": "https://80.lv/articles/creating-realistic-dismemberment-gore-effects-in-unity/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "免费篮球动捕数据包发布",
      "sum": "Anderson Rohr放出4分钟动捕数据，可商用。",
      "ta": "免费动捕资源，动画/预览可用，速览即可。",
      "src": "80 Level · 11-26",
      "url": "https://80.lv/articles/get-this-free-pack-of-motion-capture-data-for-creating-basketball-player-animations/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "世界模型细粒度投机流式生成",
      "sum": "ShowNow提出面向响应式世界模型的细粒度投机流式方法。",
      "ta": "世界模型实时生成加速，与实时渲染/程序化生成方向相关，值得关注。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.34693"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态场景逐帧重建网格新法",
      "sum": "MEMO 用多机位视频重建完整动态场景几何，并逐帧提取网格。",
      "ta": "动态高斯只能出外观，这里能出逐帧网格，值得关注其对植被/角色动态资产的可用性。",
      "src": "arXiv · cs.GR · 11-25",
      "url": "https://arxiv.org/abs/2611.34939v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "单图估 PBR 材质新思路",
      "sum": "ReMeDi 在金属与电介质假设间重参数化，从单图估计 PBR 材质。",
      "ta": "金属度判定是 albedo 估计的核心歧义，这套重参数化思路对材质生成工具有参考价值。",
      "src": "arXiv · cs.GR · 11-25",
      "url": "https://arxiv.org/abs/2611.34284v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "任意相机模型的4D高斯渲染",
      "sum": "AnyCam4D 用光线式渲染支持鱼眼广角等非针孔相机的动态高斯。",
      "ta": "免去先去畸变导致的视场/细节损失，对广角实拍素材重建管线有直接意义。",
      "src": "arXiv · cs.GR · 11-25",
      "url": "https://arxiv.org/abs/2611.34223v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "无位姿图像前馈重建表面",
      "sum": "FoundSurface 从无相机位姿图像前馈式重建连续三维表面。",
      "ta": "点图方法输出稀疏离散，这里直接出表面，关注其对扫描转资产的流程简化。",
      "src": "arXiv · cs.GR · 11-25",
      "url": "https://arxiv.org/abs/2611.34128v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "视频推断可变形物体材质",
      "sum": "从单段落地视频前馈预测可变形物体的刚度与屈服应力。",
      "ta": "sim-to-real 材质参数估计，对布料/软体解算参数标定有潜在借鉴。",
      "src": "arXiv · cs.GR · 11-25",
      "url": "https://arxiv.org/abs/2611.34894v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "手机单目手持物体扫描",
      "sum": "重新审视单目视频手持物体扫描，给出数据集、位姿估计与表面重建。",
      "ta": "低成本 3D 数字化路线，关注其重建质量是否够做道具资产。",
      "src": "arXiv · cs.GR · 11-25",
      "url": "https://arxiv.org/abs/2611.33824v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "钢琴铰链实体非流形表示",
      "sum": "用非流形胞腔复形表示并动画化钢琴铰链式刚性连接结构。",
      "ta": "铰链类机械结构的几何表示思路，偏图形学趣味，速览即可。",
      "src": "arXiv · cs.GR · 11-24",
      "url": "https://arxiv.org/abs/2611.33505v1"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "无状态页面的多人浏览器游戏",
      "sum": "教程：用无状态网页与关系数据库构建持久世界多人浏览器游戏。",
      "ta": "与渲染无关的 Web 架构教程，仅作背景速览。",
      "src": "arXiv · cs.GR · 11-24",
      "url": "https://arxiv.org/abs/2611.33256v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "部件感知3D生成偏好优化",
      "sum": "Target-Part Preference Optimization 面向部件感知的三维生成做偏好优化。",
      "ta": "部件级可控生成对程序化资产拆分有潜在价值，关注其可控粒度。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.30472"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "动态循环MoE扩散Transformer",
      "sum": "DyLoMo-DiT 提出动态循环混合专家扩散 Transformer 结构。",
      "ta": "纯生成模型架构，未见游戏/实时关联，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.30844"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "像素空间扩散做高保真抠图",
      "sum": "用像素空间扩散 Transformer 实现高保真图像抠图。",
      "ta": "抠图属贴图/素材处理环节，可留意其对植被卡片 alpha 制作的潜力。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.34929"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "几何引导注意力剪枝控相机",
      "sum": "SPARC 用几何引导的注意力剪枝做长时序相机可控视频生成。",
      "ta": "相机可控生成对预演/参考视频有用，关注其长时序稳定性。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.34064"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "生成渲染造机器人真实数据",
      "sum": "DemoFoundry 结合编码智能体与生成渲染，规模化产出逼真机器人数据。",
      "ta": "生成渲染管线搭数据工厂的思路，对程序化场景生成有旁证价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.34671"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "真实到仿真迁移统一平台",
      "sum": "Real2SimLab 提供真实到仿真迁移的统一平台。",
      "ta": "偏机器人仿真，与游戏引擎管线关联弱，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.34849"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "全景耦合的持久动态世界建模",
      "sum": "OmniPersist 通过耦合全景演化实现持久动态世界建模。",
      "ta": "世界模型方向，暂未见引擎落地路径，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.32473"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "智能体游戏开发的趣味性反馈",
      "sum": "把可玩性作为反馈信号用于智能体驱动的游戏开发。",
      "ta": "AI 辅助玩法迭代，与 TA 工具链关系不大，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.33457"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Niagara粒子做微观平台跳跃",
      "sum": "ProtoSeed 谈如何用 Niagara 粒子、顶点着色器动画与强次表面散射做微观题材平台游戏。",
      "ta": "Niagara + 顶点动画 + 极端 SSS 的实机组合案例，特效与材质方向可直接参考。",
      "src": "80 Level · 11-25",
      "url": "https://80.lv/articles/the-making-of-become-from-aaa-games-to-a-microscopic-platformer/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5模块化资产搭中世纪小镇",
      "sum": "用自定义模块化资产、Substance 材质与 UE5 灯光搭建温暖中世纪小镇场景。",
      "ta": "模块化资产 + 材质 + 大气光照的完整 UE5 场景流程，可对照自己的植被/场景工具链。",
      "src": "80 Level · 11-25",
      "url": "https://80.lv/articles/building-a-cozy-sunny-medieval-town-scene-using-custom-modular-assets/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 5.3新节点做卡通着色",
      "sum": "教程演示用 Blender 5.3 新增 Light Accumulation 节点制作彩色卡通着色器。",
      "ta": "新光照累积节点的用法，对非 UE 管线但可借鉴卡通光照思路。",
      "src": "80 Level · 11-25",
      "url": "https://80.lv/articles/learn-how-to-create-this-colorful-cel-shader-in-blender-5-3/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "自研引擎复刻复古渲染",
      "sum": "开发者谈自研 RetroEngine 及无图形背景下的复古渲染实现方式。",
      "ta": "复古渲染的取舍思路，速览即可。",
      "src": "80 Level · 11-25",
      "url": "https://80.lv/articles/inside-retroengine-the-custom-engine-behind-the-king-s-surveyor/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《Exoprimal》将停服",
      "sum": "Capcom 恐龙合作射击游戏 Exoprimal 将在不到一年内关服。",
      "ta": "服务型游戏生命周期案例，速览。",
      "src": "80 Level · 11-26",
      "url": "https://80.lv/articles/capcom-s-dinosaur-co-op-shooter-exoprimal-is-shutting-down/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《神鬼寓言》对标巫师3",
      "sum": "Playground 称仅参考原三部曲无法满足现代玩家，以《巫师3》为 RPG 黄金标准。",
      "ta": "3A 品质基准的行业表态，速览。",
      "src": "80 Level · 11-26",
      "url": "https://80.lv/articles/fable-devs-looked-to-the-witcher-3-the-gold-standard-for-rpgs/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "巫师4跨度对标GTA5到6",
      "sum": "CDPR 称《巫师3》到《巫师4》的跃升幅度类似 GTA5 到 GTA6。",
      "ta": "暗示画面与规模大幅升级，关注后续技术披露。",
      "src": "80 Level · 11-26",
      "url": "https://80.lv/articles/the-leap-between-the-witcher-3-the-witcher-4-will-be-similar-to-the-one-between-gta-5-and-gta-6/"
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
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 1,
      "title": "UE6 弃用蓝图与 Actor 框架",
      "sum": "Epic 不再计划在 UE6 初期保留蓝图与 Actor Gameplay Framework，转向 AI 驱动工具。",
      "ta": "直接影响 TA 工具链与团队工作流设计，需提前评估程序化/工具脚本的迁移路径。",
      "src": "Game Developer · 11-23",
      "url": "https://www.gamedeveloper.com/programming/unreal-engine-6-to-remove-blueprints-and-actor-gameplay-framework-from-the-beginning"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "EVE 高端 AO 技术开放使用",
      "sum": "CORTAO 由 Fenris Creations 开发者个人项目开发，已用于 EVE: Frontier 并对外开放。",
      "ta": "可评估该 AO 方案在 UE 管线中的接入成本与性能收益。",
      "src": "Game Developer · 11-23",
      "url": "https://www.gamedeveloper.com/programming/devs-can-now-utilize-high-end-ambient-occlusion-technique-seen-in-eve-frontier"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "HoloSplat 实时人体重建流式传输",
      "sum": "面向实时自由视角人体视频流，需逐帧重建、带宽受限并在轻量客户端 GPU 解码。",
      "ta": "关注其带宽预算与客户端解码开销，对实时角色管线有参考价值。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.31140v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "DiffSimp 可微网格简化",
      "sum": "将网格简化纳入上游可微优化，减少后处理简化带来的误差。",
      "ta": "低模生成与 LOD 流程可借鉴其把简化误差纳入优化的思路。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.31018v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "LMnOP 剪枝 3D 高斯泼溅",
      "sum": "用 leave-many-out 重要性评分剪枝高斯，降低百万级高斯的存储与渲染成本。",
      "ta": "高斯泼溅剪枝直接影响实时渲染开销，可关注其重要性评分策略。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.30102v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "STAC++ 流式重建缓存压缩",
      "sum": "免训练即插即用框架，压缩并复用空间记忆以支持无界场景长期重建。",
      "ta": "流式重建的内存管理思路对大规模场景工具有参考。",
      "src": "arXiv · cs.GR · 11-21",
      "url": "https://arxiv.org/abs/2611.28793v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RoomTokens 室内场景合成",
      "sum": "在结构化 token 上做掩码扩散，兼顾物体语义、朝向与房间几何约束。",
      "ta": "程序化场景生成的表示方法，可关注其碰撞与边界约束处理。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.30219v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Tri-DNO 三维人物交互生成",
      "sum": "用三边扩散噪声优化生成 3D 人物物体交互，重点解决手部抓握真实性。",
      "ta": "角色动画与交互生成方向，速览即可。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.30607v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "CrownFusion 牙冠几何图像生成",
      "sum": "用几何图像加潜扩散生成 3D 牙冠，替代点云表示。",
      "ta": "几何图像编码思路可参考，但应用域偏医疗。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.31128v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "视觉扩散模型学习最优落子",
      "sum": "视觉扩散模型可在不显式搜索的情况下预测序列推理任务中的下一步。",
      "ta": "与图形管线关联弱，速览。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.30879v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "周期 B 样条插值节点优化",
      "sum": "针对偶数次周期 B 样条插值，提出公平优化的交错节点选择方法。",
      "ta": "CAGD 基础算法，曲线工具开发时可参考。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.30717v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "动画角色身体动态少样本推断",
      "sum": "仅凭首帧与动作指令，视觉世界模型可推断不同角色的身体动态差异。",
      "ta": "角色动画方向，速览。",
      "src": "arXiv · cs.GR · 11-21",
      "url": "https://arxiv.org/abs/2611.28842v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "3AGameFactory 智能绑定与动作生成",
      "sum": "面向多样 3D 资产的智能体绑定与可靠复杂动作生成。",
      "ta": "绑定与动作生成自动化，与 TA 资产管线强相关，值得关注。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.30013"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "GameAnything 从灵感生成可玩游戏",
      "sum": "从任意灵感出发生成可玩的游戏世界。",
      "ta": "程序化世界生成方向，关注其可玩性与生成管线。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.29238"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "GameDojo 实时交互智能体基准",
      "sum": "在电子游戏中评测实时交互智能体的基准。",
      "ta": "实时交互评测框架，可关注其与游戏引擎的对接方式。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.30771"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "AutoPILOT 实时游玩视觉智能体",
      "sum": "面向实时游玩的视觉智能体框架。",
      "ta": "实时游戏智能体方向，速览其延迟与推理开销。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.28202"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Motion Mamba 2.0 长程人形控制",
      "sum": "自回归扩散 Mamba 用于长程人形控制。",
      "ta": "角色控制方向，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.29897"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Plan4D 可规划 4D 世界生成",
      "sum": "生成可规划的 4D 世界。",
      "ta": "世界模型方向，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.26516"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "ViDiHand2 视频扩散重建手部",
      "sum": "融合视频扩散先验与手部几何，在野外场景重建 3D 手部动作。",
      "ta": "动作捕捉方向，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.30597"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Fast-JEPA 潜空间世界模型",
      "sum": "推进潜空间世界模型的成功-延迟前沿。",
      "ta": "世界模型效率方向，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.25927"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "VRChat 星系着色器",
      "sum": "把身体部位渲染成星系，可在其中放置行星或黑洞。",
      "ta": "着色器创意实现，可参考其分层与遮罩思路。",
      "src": "80 Level · 11-23",
      "url": "https://80.lv/articles/this-vrchat-shader-turns-body-parts-into-beautiful-galaxies/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "25 款 UE 游戏获 TGA 提名",
      "sum": "超过 25 款虚幻引擎游戏获 2026 年 TGA 提名。",
      "ta": "行业风向参考，速览提名名单。",
      "src": "Unreal Engine · 11-23",
      "url": "https://www.unrealengine.com/news/over-25-unreal-engine-games-nominated-at-the-game-awards-2026"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "BioWare 关闭内幕披露",
      "sum": "前龙腾世纪主创称 EA 给出糟糕选项，工作室选了最不坏的一个。",
      "ta": "行业动态，速览。",
      "src": "80 Level · 11-24",
      "url": "https://80.lv/articles/ex-dragon-age-lead-on-what-led-to-bioware-s-closure/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "暗光3DGS改用非均匀光照建模",
      "sum": "VeilGS 用 Retinex 分解与 2D 基图表示暗部，替代单一色调曲线。",
      "ta": "低光照扫描重建植被或场景时，可参考其按光源位置建模暗部的方式。",
      "src": "arXiv · cs.GR · 11-20",
      "url": "https://arxiv.org/abs/2611.27719v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "消费级显卡可跑4K 3DGS训练",
      "sum": "PennyGS 优化各环节效率，在消费级 GPU 上实现全分辨率 4K 3DGS 训练。",
      "ta": "若用手机扫描做植被或道具资产，这条降低了高分辨率重建的硬件门槛。",
      "src": "arXiv · cs.GR · 11-20",
      "url": "https://arxiv.org/abs/2611.27525v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "非结构网格并行多重网格求解器",
      "sum": "ParaBMG 针对 GPU 几何处理中大规模演化稀疏线性系统提出并行块多重网格框架。",
      "ta": "属底层求解器优化，与几何处理管线性能相关，可速览。",
      "src": "arXiv · cs.GR · 11-20",
      "url": "https://arxiv.org/abs/2611.27396v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "全身网格恢复保手部细节",
      "sum": "CADENCE 做时序连贯的全身 SMPL-X 恢复，避免平滑时丢失手部动作。",
      "ta": "涉及动捕与角色动画数据，与植被/特效本职关联弱，速览即可。",
      "src": "arXiv · cs.GR · 11-19",
      "url": "https://arxiv.org/abs/2611.26783v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "小样本区域化参数化头部模型",
      "sum": "FACET 在有限身份数据下构建可 FACS 控制的区域化参数头部模型。",
      "ta": "面向面部生产管线，与植被/特效方向关联不大。",
      "src": "arXiv · cs.GR · 11-19",
      "url": "https://arxiv.org/abs/2611.26773v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "非穿透世界模型",
      "sum": "HuggingFace 收录论文 Non-penetrating World Models，摘要未提供。",
      "ta": "仅标题信息，无法判断与实时渲染关联，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.27963"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频编辑引入运动感知奖励",
      "sum": "面向指令引导视频编辑的运动感知奖励建模，摘要未提供。",
      "ta": "与游戏实时管线关联不明确，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.22495"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "以交互为中心的世界模型做游戏",
      "sum": "GameWM 探索用交互中心的世界模型构建下一代视频游戏。",
      "ta": "关注世界模型如何服务游戏交互，与实时生成方向相关，值得一看。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.19247"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "CADQuader 测试版可转 CAD 为网格",
      "sum": "3DCoat 开发者推出 CADQuader 测试版，将 CAD 模型转换为多边形网格。",
      "ta": "处理工业 CAD 资产转游戏网格时可关注其拓扑与减面质量。",
      "src": "80 Level · 11-21",
      "url": "https://80.lv/articles/3dcoat-dev-launches-new-tool-to-convert-cad-models-into-polygon-meshes/"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 2,
      "title": "GTA6创史上最大首发",
      "sum": "GTA6首日零售额超37.9亿美元，发售前已售出3250万份。",
      "ta": "行业量级标杆事件，可作3A项目预算与渲染/资产规模预期的参照。",
      "src": "Game Developer · 11-20",
      "url": "https://www.gamedeveloper.com/business/grand-theft-auto-vi-is-officially-the-biggest-video-game-launch-ever"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "原生体素域扩散Transformer",
      "sum": "Direct3D-V3提出在原生体素域运行的免潜空间扩散Transformer。",
      "ta": "体素域直接生成对程序化3D资产与体积内容有潜在参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.26511"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "流式世界模型验证转精炼",
      "sum": "SpecWM把验证环节转为精炼，用于流式世界模型生成。",
      "ta": "流式世界模型思路可关注其对实时生成与仿真场景的潜在影响。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.26211"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "程序化视频在线错误检测",
      "sum": "面向指令条件程序化视频的在线错误检测方法。",
      "ta": "程序化流程的错误检测思路可类比到程序化生成工具的自检。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.25567"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频扩散复用学潜在动作",
      "sum": "复用视频扩散Transformer做自监督潜在动作学习。",
      "ta": "潜在动作表征对动画/动作生成方向有潜在借鉴意义。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.26617"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "音频驱动流式虚拟形象",
      "sum": "AURA提出音频驱动的流式虚拟形象生成方案。",
      "ta": "实时虚拟形象方向，可关注其对角色表现管线的潜在影响。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.26540"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "育碧裁员166人",
      "sum": "育碧在《刺客信条：影》相关工作室裁员166人。",
      "ta": "行业收缩信号，速览即可。",
      "src": "80 Level · 11-20",
      "url": "https://80.lv/articles/ubisoft-lays-off-166-employees-across-studios-behind-assassin-s-creed-shadows/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Build a Rocket Boy陷债务",
      "sum": "MindsEye开发商试图通过起诉差评摆脱8098万美元债务。",
      "ta": "行业八卦速览。",
      "src": "80 Level · 11-20",
      "url": "https://80.lv/articles/mindseye-developers-build-a-rocket-boy-are-trying-to-get-out-of-their-usd80-98-million-debt/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "GameStop批纯数字发行",
      "sum": "GameStop CEO称全数字发行损害消费者利益。",
      "ta": "发行渠道话题，速览即可。",
      "src": "80 Level · 11-20",
      "url": "https://80.lv/articles/gamestop-ceo-calls-out-digital-only-releases-amid-gta-6-hype/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rockstar解释GTA6删飞镖",
      "sum": "Rockstar称宁可不做也不做不够好的飞镖小游戏。",
      "ta": "设计取舍观点，速览即可。",
      "src": "80 Level · 11-20",
      "url": "https://80.lv/articles/rockstar-explained-why-they-didn-t-add-the-darts-mini-game-in-gta-6/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高斯泼溅超分新方案AGSR",
      "sum": "通过收缩投影协方差缓解高斯光栅化的带宽限制，提升3DGS细节。",
      "ta": "3DGS渲染质量优化思路，可关注其对实时新视角合成的性能影响。",
      "src": "arXiv · cs.GR · 11-19",
      "url": "https://arxiv.org/abs/2611.25934v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "视频模型驱动交互游戏世界",
      "sum": "ContextRenderer用视频生成模型渲染引擎场景，应对持续游玩中的动态条件。",
      "ta": "生成式渲染与引擎场景表示结合的探索，值得关注交互式世界模型的渲染路径。",
      "src": "arXiv · cs.GR · 11-19",
      "url": "https://arxiv.org/abs/2611.25838v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "单视频重建可编辑网格场景",
      "sum": "SceneAnything用智能体从单视频重建大规模可编辑3D网格场景。",
      "ta": "程序化场景重建的agentic思路，对关卡/场景生成工具链有参考价值。",
      "src": "arXiv · cs.GR · 11-19",
      "url": "https://arxiv.org/abs/2611.25340v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "生成视频产出可重光照高斯",
      "sum": "VideoRNG从生成视频模型得到可重光照神经高斯，突破固定烘焙外观限制。",
      "ta": "可重光照高斯资产生成，对植被/道具资产的PBR与光照管线有潜在价值。",
      "src": "arXiv · cs.GR · 11-19",
      "url": "https://arxiv.org/abs/2611.25338v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "字形SVG转紧凑高斯资产",
      "sum": "FFGaussType将字形与SVG几何前馈转换为紧凑高斯资产，用于场景内3D文字。",
      "ta": "场景内3D文字/图标的高斯化方案，速览即可。",
      "src": "arXiv · cs.GR · 11-19",
      "url": "https://arxiv.org/abs/2611.26431v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "高斯分割的体积监督",
      "sum": "提出体积监督方法改进3D高斯分割，指出掩码不等于物体本身。",
      "ta": "3DGS分割精度相关，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.21383"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多模态大模型变身世界模型",
      "sum": "WM^MLLM将多模态大模型改造为世界模型。",
      "ta": "世界模型方向，与实时渲染关联未明，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.24193"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "动作效果匹配提升世界模型",
      "sum": "通过动作效果匹配让世界模型更忠实于动态变化。",
      "ta": "世界模型动态保真度研究，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.25980"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "智能体游玩经验驱动游戏设计",
      "sum": "PlayCraft从智能体游玩经验出发设计有吸引力的游戏。",
      "ta": "AI辅助游戏设计探索，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.26624"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "巧妙的权重绘制工具",
      "sum": "展示一款改善角色形变的权重绘制工具。",
      "ta": "角色绑定/权重工作流工具，值得看其交互设计思路。",
      "src": "80 Level · 11-19",
      "url": "https://80.lv/articles/clever-weight-painting-tool-for-better-character-deformations/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender手绘蜘蛛侠风格拆解",
      "sum": "艺术家拆解蜘蛛侠平行宇宙风格手绘效果的「爆炸图层」技法。",
      "ta": "风格化材质/手绘效果参考，速览。",
      "src": "80 Level · 11-19",
      "url": "https://80.lv/articles/blender-artist-breaks-down-spider-verse-style-hand-painted-effect/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "蜘蛛侠黏墙模拟工作流",
      "sum": "展示蜘蛛侠黏墙玩具模拟并分享作者工作流。",
      "ta": "趣味模拟案例，速览。",
      "src": "80 Level · 11-19",
      "url": "https://80.lv/articles/this-spider-man-simulation-brings-back-memories-of-sticky-wall-crawler-toys/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "1-bit城市建造游戏美术解析",
      "sum": "四人独立团队谈1980年代Mac风格1-bit城市建造游戏的视觉与跨平台开发。",
      "ta": "风格化美术与独立开发经验，速览。",
      "src": "80 Level · 11-19",
      "url": "https://80.lv/articles/making-a-1980s-macintosh-style-1-bit-city-builder-set-on-a-stormy-northern-island/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前Take-Two CEO看好游戏AI",
      "sum": "前Take-Two CEO称西方消费者对游戏AI的接受只差一个「玩具总动员时刻」。",
      "ta": "行业AI态度风向，速览。",
      "src": "80 Level · 11-19",
      "url": "https://80.lv/articles/former-take-two-ceo-believes-attitudes-toward-ai-in-video-games-will-improve/"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 2,
      "title": "GTA6 为 NPC 做 60 万动画",
      "sum": "Rockstar 为 GTA6 的 NPC 制作了约 60 万段动画，团队称如同在珠峰上建金字塔。",
      "ta": "海量动画资产的生产管线与批量管理方式，对大规模程序化资产生成有参考价值。",
      "src": "80 Level · 11-18",
      "url": "https://80.lv/articles/rockstar-created-about-600-000-animations-for-npcs-in-gta-6/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "智能 NPC 数量致 GTA6 延期",
      "sum": "彭博社披露，海量智能 NPC 是 GTA6 延期的原因之一。",
      "ta": "了解大规模 AI 驱动 NPC 的性能与内容成本，可作为世界密度设计的参照。",
      "src": "80 Level · 11-18",
      "url": "https://80.lv/articles/enormous-number-of-smart-npcs-was-one-of-reasons-for-gta-6-delay/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PSN 在 GTA6 发售前宕机",
      "sum": "PlayStation Network 在 GTA6 发售前数小时发生故障，部分玩家无法访问游戏与在线功能。",
      "ta": "与制作技术无关，仅作行业动态速览。",
      "src": "80 Level · 11-19",
      "url": "https://80.lv/articles/psn-is-down-for-thousands-just-hours-before-gta-6-launches-on-ps5/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Dan Houser 回顾经典开发",
      "sum": "Rockstar 联合创始人回忆 GTA3 盒图临时改动、Bully 开发困境等往事。",
      "ta": "行业历史向内容，与当前技术工作关联弱。",
      "src": "80 Level · 11-18",
      "url": "https://80.lv/articles/rockstar-co-founder-looks-back-at-making-gta-3-bully-other-classics/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "RTX Spark 紧凑工作站发布",
      "sum": "NVIDIA 联合华硕、戴尔、微星推出紧凑 RTX Spark 台式机，最高 128GB 统一内存，面向 3D、视频与本地 AI。",
      "ta": "统一内存大容量机型对本地跑 3D 生成与大型场景预览的 TA 有实际选型意义。",
      "src": "80 Level · 11-18",
      "url": "https://80.lv/articles/nvidia-expands-rtx-spark-lineup-with-compact-desktops-for-developers-creators-and-ai-enthusiasts/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Maya 接入 MCP 供 LLM 审计",
      "sum": "社区发布 mcp-for-maya，让 LLM 代理检查与审计 Maya 场景，而非盲目编辑。",
      "ta": "场景审计型 AI 代理是 DCC 工具链自动化的可行切入点，比直接生成更可控。",
      "src": "Tech-Artists · 11-18",
      "url": "https://www.tech-artists.org/t/mcp-for-maya-an-mcp-server-that-makes-llm-agents-inspect-audit-a-maya-scene-instead-of-editing-blind/18659"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "SkinLayer Studio 分层蒙皮发布",
      "sum": "SkinLayer Studio 发布，为 Maya（及 Max/Blender）提供分层式首轮蒙皮。",
      "ta": "分层蒙皮思路可加速角色首轮绑定，间接影响角色资产管线效率。",
      "src": "Tech-Artists · 11-18",
      "url": "https://www.tech-artists.org/t/released-skinlayer-studio-layered-first-pass-skinning-for-maya-also-max-blender/18656"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "开源 Maya 静态网格校验器",
      "sum": "开源 Maya 静态网格校验工具，基于 Python/PySide，覆盖 2024–2026。",
      "ta": "资产校验脚本是 TA 工具链常规件，可参考其检查项设计。",
      "src": "Tech-Artists · 11-18",
      "url": "https://www.tech-artists.org/t/open-source-maya-static-mesh-validator-python-pyside-2024-2026/18651"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "MIRACO 2 扫描仪支持高斯泼溅",
      "sum": "Revopoint MIRACO 2 便携 3D 扫描仪上线众筹，六种模式、精度 0.02mm、支持 3D 高斯泼溅与自动 Scan-to-CAD。",
      "ta": "扫描端直接输出高斯泼溅，对植被/场景实拍重建进引擎的流程值得关注。",
      "src": "80 Level · 11-18",
      "url": "https://80.lv/articles/revopoint-s-miraco-2-combines-portable-3d-scanning-with-automated-scan-to-cad/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高斯泼溅水下渲染新方法",
      "sum": "NIRJALA 用三路径光学与可逆物理，去除高斯泼溅中的水体干扰。",
      "ta": "水下/介质渲染的光学分解思路，对水体特效与泼溅场景重建有参考。",
      "src": "arXiv · cs.GR · 11-17",
      "url": "https://arxiv.org/abs/2611.23450v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "神经启发的纹理分析合成",
      "sum": "GramStatTexNet 提出高效可解释、受神经科学启发的纹理分析-合成方法。",
      "ta": "可解释纹理合成对程序化植被材质与贴图生成有潜在借鉴。",
      "src": "arXiv · cs.GR · 11-18",
      "url": "https://arxiv.org/abs/2611.23755v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "运动扩散模型物理性检验",
      "sum": "研究对比运动扩散模型激活与其自身干净样本估计，重新审视其物理属性探测结论。",
      "ta": "方法论纠偏，与实时管线距离较远。",
      "src": "arXiv · cs.GR · 11-18",
      "url": "https://arxiv.org/abs/2611.24423v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Game2Player 环境与玩家协同",
      "sum": "Game2Player 通过环境与玩家协同开发，扩展视觉智能体的游戏体验规模。",
      "ta": "游戏环境作为智能体训练场，与 NPC/玩法 AI 方向相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.24154"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "WorldRuler 可配置规则世界建模",
      "sum": "WorldRuler 提出在可配置规则下进行交互式世界建模。",
      "ta": "规则约束的世界模型，对程序化生成与可交互场景构建有启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.24869"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "可控视频生成世界模型 2.0",
      "sum": "Code World Model 2.0 面向无限可控视频生成。",
      "ta": "可控视频生成若成熟，可用于材质/特效预演与参考生成。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.22925"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "电影改编游戏评测基准",
      "sum": "Movie2Game-Bench 提出超越可玩性的电影到游戏改编综合评测。",
      "ta": "评测基准类工作，与制作技术关联弱。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.24669"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Cosmos 双提示构建训练数据集",
      "sum": "NVIDIA Cosmos 用两个提示构建可直接训练的物理 AI 数据集，覆盖稀有缺陷与夜间场景。",
      "ta": "合成数据生成流程，与游戏实时渲染无直接关联。",
      "src": "NVIDIA · 11-18",
      "url": "https://developer.nvidia.com/blog/build-training-ready-physical-ai-datasets-with-two-prompts-in-nvidia-cosmos/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《光与影》叙事主管谈融资",
      "sum": "《光与影：33号远征队》叙事主管 Jennifer Svedberg-Yen 希望改变游戏融资的优先级叙事。",
      "ta": "行业融资话题，与 TA 工作无直接关系。",
      "src": "Game Developer · 11-18",
      "url": "https://www.gamedeveloper.com/design/clair-obscur-expedition-33-s-narrative-lead-wants-to-change-game-funding"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE驱动Coachella广播级AR演出",
      "sum": "虚幻引擎结合MetaHuman、广播AR与蜘蛛摄像机，将Anyma演出扩展为线上直播视觉。",
      "ta": "可参考其MetaHuman+广播AR的实时管线组织方式，看大型直播场景下引擎侧如何撑住画面。",
      "src": "Unreal Engine · 11-17",
      "url": "https://www.unrealengine.com/spotlights/expanding-anymas-coachella-performance-into-broadcast-ar-with-unreal-engine"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "B-Rep图预训练统一CAD理解生成",
      "sum": "BRepA用图结构对CAD边界表示做预训练，统一支撑分割与新形状生成任务。",
      "ta": "程序化资产生成若涉及CAD来源模型，可关注其图表示如何兼顾理解与生成。",
      "src": "arXiv · cs.GR · 11-17",
      "url": "https://arxiv.org/abs/2611.22903v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "大规模高斯泼溅外存优化训练",
      "sum": "DOOM-GS提出动态外存优化，突破图元超出显存时3DGS无法训练的限制。",
      "ta": "大场景植被/地形级3DGS训练受显存卡脖子，这条直接给出外存方案，值得精读。",
      "src": "arXiv · cs.GR · 11-17",
      "url": "https://arxiv.org/abs/2611.22805v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "抗锯齿三角泼溅精确积分",
      "sum": "ATS用逐图元精确积分解决三角泼溅的像素中心采样走样与小三角形剔除问题。",
      "ta": "泼溅类表示的走样是实时渲染痛点，其积分式抗锯齿思路对splat管线有借鉴价值。",
      "src": "arXiv · cs.GR · 11-17",
      "url": "https://arxiv.org/abs/2611.22512v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Vulkan统一3DGS训练至移动端",
      "sum": "Cross3DGS基于Vulkan实现从工作站到移动设备的统一3DGS训练。",
      "ta": "跨GPU/驱动差异的Vulkan实现细节，对想把3DGS训练搬到非CUDA设备的人有参考。",
      "src": "arXiv · cs.GR · 11-17",
      "url": "https://arxiv.org/abs/2611.22240v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动画渲染引导高效Avatar重建",
      "sum": "ARG-Avatar用动画-渲染引导，减少对模型容量与数据的依赖，实现快速前馈Avatar重建。",
      "ta": "原文明确面向游戏与AR，数字人资产快速生成路线可关注其效率取舍。",
      "src": "arXiv · cs.GR · 11-17",
      "url": "https://arxiv.org/abs/2611.22207v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "学习局部帧分割高精扫描小部件",
      "sum": "FrameSeg3D用学习到的局部坐标系分割高分辨率3D扫描上的指甲、牙齿等微小部件。",
      "ta": "小部件分割对扫描资产拆分有潜在用处，速览其局部帧构造即可。",
      "src": "arXiv · cs.GR · 11-17",
      "url": "https://arxiv.org/abs/2611.22124v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "人像布光的环境感知灯位推荐",
      "sum": "研究提出拍摄前环境感知的灯位放置方法，回答灯该放哪才能最好地照亮人脸。",
      "ta": "与实时渲染关联弱，仅对做虚拟拍摄/打光参考的人有边缘价值。",
      "src": "arXiv · cs.GR · 11-16",
      "url": "https://arxiv.org/abs/2611.22005v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "面部资产贴图4K扩散超分",
      "sum": "针对面部UV的域调优扩散超分，把1K反照率与置换图提升到4K影视级。",
      "ta": "面部资产贴图放大是TA常见需求，其域特定统计处理比通用照片超分更对症。",
      "src": "arXiv · cs.GR · 11-16",
      "url": "https://arxiv.org/abs/2611.21890v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "混合分辨率视频生成",
      "sum": "MPEG-Diffusion提出混合分辨率的视频生成方法。",
      "ta": "与实时渲染无直接关联，仅作生成侧技术动向速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.12069"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "拿破仑燧发枪游戏级资产复刻",
      "sum": "作者讲述19世纪武器从blockout定比例、烘焙保留雕花到克制做旧的全流程。",
      "ta": "烘焙保雕花与克制磨损的判断，是硬表面道具贴图分层的实用参考。",
      "src": "80 Level · 11-18",
      "url": "https://80.lv/articles/recreating-napoleon-s-flintlock-pistols-as-game-ready-3d-assets/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "BeamNG软体物理移植PS5",
      "sum": "BeamNG团队讲述在PS5上保持软体物理不变，同时优化内存性能并重做UI与手柄操作。",
      "ta": "主机移植中保物理不变、只压内存与性能的取舍，对做主机性能预算的人有参考。",
      "src": "80 Level · 11-17",
      "url": "https://80.lv/articles/how-beamng-drive-brought-its-soft-body-physics-to-ps5/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "欧洲游戏工会发AI使用宣言",
      "sum": "爱尔兰、西班牙、米兰工会成员联合发布宣言，警示生成式AI的无约束使用。",
      "ta": "行业侧AI治理动向，速览即可，与具体技术管线无直接关系。",
      "src": "Game Developer · 11-17",
      "url": "https://www.gamedeveloper.com/production/europe-s-game-worker-unions-publish-a-manifesto-warning-against-unchecked-ai-usage"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Take-Two在GTA6前夕裁Firaxis",
      "sum": "Take-Two在GTA6发售前夕对姊妹工作室Firaxis进行裁员。",
      "ta": "纯行业人事动态，速览即可。",
      "src": "Game Developer · 11-17",
      "url": "https://www.gamedeveloper.com/business/take-two-lays-off-firaxis-employees-on-eve-of-grand-theft-auto-vi-launch"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "AMD FSR UE插件升级4.1.2",
      "sum": "AMD更新UE插件，加入FSR Upscaling 4.1.2，改进帧生成与Anti-Lag 2。",
      "ta": "关注UE项目里FSR升采样版本替换后的画质与延迟表现，尤其RX6000与Ryzen平台。",
      "src": "AMD GPUOpen · 11-16",
      "url": "https://gpuopen.com/learn/amd-fsr-ue-plugin-412/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "真实偏振环境贴图数据集发布",
      "sum": "新数据集提供含偏振信息的真实环境贴图，突破传统仅RGB辐照度的限制。",
      "ta": "若未来引擎IBL支持偏振光照，这类数据是研究材质与光照真实感的前置素材。",
      "src": "arXiv · cs.GR · 11-16",
      "url": "https://arxiv.org/abs/2611.21334v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "神经表示实测BTF材质",
      "sum": "提出每材质一码的神经表示，压缩实测BTF并支持生成，保留视差与自阴影。",
      "ta": "对复杂布料/织物材质库压缩与程序化生成有参考价值，可关注其神经编码思路。",
      "src": "arXiv · cs.GR · 11-16",
      "url": "https://arxiv.org/abs/2611.20948v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "智能体重网格减面修复",
      "sum": "RemeshingAgent迭代修复生成建筑网格，可激进减面至原面数0.5-1%。",
      "ta": "程序化生成资产的LOD与减面管线可参考其拓扑修复式迭代代理思路。",
      "src": "arXiv · cs.GR · 11-16",
      "url": "https://arxiv.org/abs/2611.20533v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "无人机RGB重建田间玉米",
      "sum": "用消费级无人机RGB视频经SfM与多视图立体重建田间玉米三维结构。",
      "ta": "植被方向可留意其细薄遮挡结构的重建难点与流程，非实时渲染直接相关。",
      "src": "arXiv · cs.GR · 11-16",
      "url": "https://arxiv.org/abs/2611.20502v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "三维有限域互锁平铺",
      "sum": "研究3D有限域的K面体平铺，要求原胞数量少且可实际拼接。",
      "ta": "程序化生成中的模块化拼接与平铺算法可借鉴其互锁约束思路。",
      "src": "arXiv · cs.GR · 11-16",
      "url": "https://arxiv.org/abs/2611.20401v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "高斯泼溅推断内部温度场",
      "sum": "结合可见光与热成像多视图，用高斯泼溅求解稳态热传导推断内部温度。",
      "ta": "与实时渲染关联较弱，但高斯表示承载物理场的思路值得速览。",
      "src": "arXiv · cs.GR · 11-15",
      "url": "https://arxiv.org/abs/2611.20283v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "复杂线条集和谐可视化",
      "sum": "针对科学可视化中复杂线条集，提出线条质量受控的和谐绘制方法。",
      "ta": "偏可视化美学，与游戏渲染管线关系不大，速览即可。",
      "src": "arXiv · cs.GR · 11-15",
      "url": "https://arxiv.org/abs/2611.20190v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "阻抗作为动作空间的运动模仿",
      "sum": "以学习到的阻抗作为动作空间，实现力准确的物理运动模仿。",
      "ta": "偏角色物理动画研究，与植被/特效管线无直接关系，速览。",
      "src": "arXiv · cs.GR · 11-14",
      "url": "https://arxiv.org/abs/2611.19153v1"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "逃离塔科夫终局地图制作揭秘",
      "sum": "Battlestate谈新地图低光照环境搭建与角色动画制作的挑战。",
      "ta": "低光照场景布光与动画流程的一手经验，值得看其技术取舍。",
      "src": "80 Level · 11-16",
      "url": "https://80.lv/articles/full-circle-building-terminal-escape-from-tarkov-s-final-location/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "纽约模块化环境资产包",
      "sum": "Leartes Studios推出含褐石公寓与砖砌店面的纽约风模块化资产包。",
      "ta": "模块化场景搭建的资产组织参考，速览。",
      "src": "80 Level · 11-16",
      "url": "https://80.lv/articles/build-atmospheric-cinematic-new-york-city-environments-with-this-modular-pack/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Xbox预告Project Helix主机",
      "sum": "Xbox透露新主机代号Helix，称可运行PC游戏，但细节仍模糊。",
      "ta": "若主机兼容PC游戏，跨平台渲染与性能分级策略可能受影响，值得关注。",
      "src": "Game Developer · 11-16",
      "url": "https://www.gamedeveloper.com/console/new-xbox-codenamed-helix-gets-a-few-new-details"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时新视角合成免逐场景优化",
      "sum": "DIRT 用深度补全加双频带混合，实现采集时低延迟渲染与跨场景泛化。",
      "ta": "关注其双频带混合如何压制深度补全伪影，可借鉴到实时渲染的合成管线。",
      "src": "arXiv · cs.GR · 11-13",
      "url": "https://arxiv.org/abs/2611.18340v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "自适应四面体编码加速神经场",
      "sum": "TetraCoder 用自适应四面体编码，在隐式与显式几何表示间高效转换。",
      "ta": "显隐式互转效率提升，对程序化生成资产的表示切换与烘焙有参考价值。",
      "src": "arXiv · cs.GR · 11-13",
      "url": "https://arxiv.org/abs/2611.18267v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "姿态驱动神经服装替代布料解算",
      "sum": "数据驱动方法从模拟数据学习角色服装形变，绕开慢速模拟与繁琐调参。",
      "ta": "角色布料是性能热点，可评估该方案能否替代离线解算烘焙流程。",
      "src": "arXiv · cs.GR · 11-13",
      "url": "https://arxiv.org/abs/2611.18253v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "品牌约束下的创意产品设计",
      "sum": "针对产品专属隐式约束，改进文生图在工业设计中的约束满足能力。",
      "ta": "与实时渲染无直接关系，仅作生成式设计工具面了解。",
      "src": "arXiv · cs.GR · 11-13",
      "url": "https://arxiv.org/abs/2611.17762v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "SDF 特征导向网格化秒级出模",
      "sum": "FOMOS 纯几何方法对 SDF 做特征导向网格化，数秒完成且网格质量更优。",
      "ta": "SDF 转网格提速，对程序化植被/地形资产的出模管线有直接价值。",
      "src": "arXiv · cs.GR · 11-12",
      "url": "https://arxiv.org/abs/2611.17458v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "长时程实时游戏智能体基座模型",
      "sum": "Gamer 是面向长时程实时游戏场景的通用视觉-语言-动作基础模型。",
      "ta": "关注其对实时游戏状态的理解与动作输出延迟，与引擎侧集成方式值得留意。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.18397"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "自回归视频扩散解耦语义与运动",
      "sum": "Disen-Forcing 将语义锚定与运动分离，改进自回归视频扩散生成。",
      "ta": "偏视频生成研究，暂无实时渲染侧可落地信息。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.02822"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "Godot 径向重力实现球面世界",
      "sum": "开发者 sembask 详解其漫画风 FPS 如何用径向重力把墙面变地面。",
      "ta": "可参考其球面重力与角色朝向处理思路，非 UE 管线内容。",
      "src": "80 Level · 11-14",
      "url": "https://80.lv/articles/this-manga-style-action-fps-uses-radial-gravity-to-turn-walls-into-floors/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "PS5 迎来 QSSR AI 超分",
      "sum": "PlayStation 5 上线 Quick Spectral Super Resolution，六款游戏首批接入。",
      "ta": "主机端 AI 超分落地，值得关注其与 UE5 上采样链路的兼容与画质表现。",
      "src": "PlayStation Blog · 11-13",
      "url": "https://blog.playstation.com/2026/11/13/qssr-arrives-in-marvels-spider-man-2-control-resonant-the-finals-arc-raiders-and-hell-let-loose-vietnam/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "视图合成模型测试时烘焙",
      "sum": "论文提出 TTB，对 decoder-only 视图合成模型做测试时烘焙以加速渲染。",
      "ta": "烘焙思路或可借鉴到实时新视图合成，关注其渲染开销与质量权衡。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.17331"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频扩散回归像素空间",
      "sum": "论文将潜空间视频扩散提升回像素空间生成。",
      "ta": "纯生成研究，与实时渲染无直接关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.17336"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "开放生成式视觉感知方案",
      "sum": "论文给出生成式视觉感知的完全开放配方。",
      "ta": "偏通用视觉感知，未涉及引擎或实时管线，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.15844"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "AAA 模块化环境工作流课",
      "sum": "8 周课程讲解模块化环境搭建的 AAA 工作流。",
      "ta": "模块化环境思路对场景搭建有参考，但属教学内容，速览。",
      "src": "80 Level · 11-13",
      "url": "https://80.lv/articles/learn-aaa-workflows-to-create-your-own-modular-environments/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "欧盟拟限制免费游戏",
      "sum": "Digital Fairness Act 若通过，将大幅改变免费游戏的开发与发行方式。",
      "ta": "影响项目商业模式与设计约束，值得留意后续立法进展。",
      "src": "Game Developer · 11-13",
      "url": "https://www.gamedeveloper.com/business/european-union-proposes-digital-fairness-act-which-could-have-major-effects-on-game-development"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "巫师3 用 AI 复现配音",
      "sum": "配音演员中风后同意用 AI 在新资料片中重现杰洛特声音。",
      "ta": "AI 语音在 3A 制作中的合规落地案例，关注授权与流程。",
      "src": "Game Developer · 11-13",
      "url": "https://www.gamedeveloper.com/production/polish-voice-actor-for-geralt-returns-for-the-witcher-3-with-ai"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "SOMA 重定向人体动作",
      "sum": "NVIDIA SOMA Retargeter 将人体动作适配到人形机器人。",
      "ta": "机器人方向，与游戏动画管线无直接关联，速览。",
      "src": "NVIDIA · 11-13",
      "url": "https://developer.nvidia.com/blog/adapt-human-motion-for-robots-with-nvidia-soma-retargeter/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "神经渲染代理加速灯光迭代",
      "sum": "提出神经渲染代理，用于交互式可微光照，替代慢速离线渲染做灯光预览。",
      "ta": "灯光迭代慢是TA痛点，可关注其代理模型能否接入UE离线/预览流程。",
      "src": "arXiv · cs.GR · 11-12",
      "url": "https://arxiv.org/abs/2611.17185v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Sprint3D优化图生3D管线",
      "sum": "通过管线优化把图生3D资产生成从数分钟压缩，且不重训自有生成器。",
      "ta": "程序化资产生成提速对植被/道具批量产出有参考价值。",
      "src": "arXiv · cs.GR · 11-12",
      "url": "https://arxiv.org/abs/2611.16701v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "乐高积木连通性重建",
      "sum": "给定零件与成品图，推断各零件位姿以满足离散物理约束。",
      "ta": "离散约束重建思路可类比模块化场景拼装，但离实时管线较远。",
      "src": "arXiv · cs.GR · 11-12",
      "url": "https://arxiv.org/abs/2611.17321v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "显式对应实现视频转视频",
      "sum": "用显式对应关系做实时视频转视频，缓解固定因果窗口的长程一致性缺陷。",
      "ta": "实时视频生成的一致性问题，与Niagara/材质动态效果无直接关联，速览。",
      "src": "arXiv · cs.GR · 11-12",
      "url": "https://arxiv.org/abs/2611.17298v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "物理直觉模型预测交互",
      "sum": "提出低延迟预测物体交互结果的物理直觉模型，兼顾局部形变。",
      "ta": "低延迟物理预测或可启发破坏/交互特效，但当前偏研究阶段。",
      "src": "arXiv · cs.GR · 11-12",
      "url": "https://arxiv.org/abs/2611.16673v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "代码建世界视频来渲染",
      "sum": "探讨由代码构建世界、视频模型仅负责渲染的分工范式。",
      "ta": "世界模型分工思路值得留意，但与UE实时管线尚无可落地接口。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.16217"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "双向世界模型全双工交互",
      "sum": "提出互惠世界模型，支持全双工交互式生成。",
      "ta": "交互式生成方向，暂与TA日常工作无直接交集。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.15131"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "驾驶世界模型双视角生成",
      "sum": "联合生成透视与BEV视频的驾驶世界模型。",
      "ta": "自动驾驶场景，与游戏实时渲染关联弱，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.14815"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "神鬼寓言重启实机公开",
      "sum": "神鬼寓言重启版放出四分钟PC实机，2027年2月发售。",
      "ta": "可看其美术与特效风格，作为风格参考。",
      "src": "80 Level · 11-13",
      "url": "https://80.lv/articles/fable-reboot-shows-combat-story-in-new-four-minute-gameplay-trailer/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ZBrush写实皮肤与毛发流程",
      "sum": "分享手雕妖精夸张解剖、ZBrush写实皮肤绘制及XGen毛发切换经验。",
      "ta": "写实皮肤与grooming技巧可迁移到角色/生物资产制作。",
      "src": "80 Level · 11-13",
      "url": "https://80.lv/articles/making-the-portrait-of-a-harry-potter-inspired-goblin-with-realistic-skin-texture/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Tripwire宣布新发行后裁员",
      "sum": "Killing Floor工作室在公布新发行计划后裁员36人。",
      "ta": "行业人事动态，速览。",
      "src": "Game Developer · 11-12",
      "url": "https://www.gamedeveloper.com/business/tripwire-interactive-layoffs-come-after-announcing-new-publishing-initiative"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "开发者用GenAI主要做调研",
      "sum": "调查显示用生成式AI的开发者多用于调研与头脑风暴，AI写码排第三。",
      "ta": "反映AI在开发流程中的真实落点，可对照自身工具链。",
      "src": "Game Developer · 11-12",
      "url": "https://www.gamedeveloper.com/production/genai-using-developers-say-they-mostly-use-it-for-research-and-brainstorming-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "三分之一开发者两年内被裁",
      "sum": "行业调查称34%受访开发者近两年经历过裁员。",
      "ta": "行业景气度信号，速览。",
      "src": "Game Developer · 11-12",
      "url": "https://www.gamedeveloper.com/business/one-in-three-developers-have-been-laid-off-within-the-last-two-years"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "GDC年度行业报告发布",
      "sum": "GDC汇总2600余名从业者对裁员、AI与次世代的调查快照。",
      "ta": "宏观行业数据，可作趋势参考。",
      "src": "Game Developer · 11-12",
      "url": "https://www.gamedeveloper.com/business/layoffs-ai-and-next-gen-what-2-600-game-professionals-told-gdc-this-year"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "GTAGym 提供 3A 任务评测环境",
      "sum": "HuggingFace 新论文发布 GTAGym，用真实 3A 游戏任务做强化学习评测环境。",
      "ta": "可关注其任务定义方式，作为游戏内 AI 行为评测或自动化测试环境的参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.13028"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Tripo AI 办 3D 世界黑客松",
      "sum": "Tripo AI 首届 3D World Hackathon 吸引 78 国 2000 多支队伍，产出游戏与 VR 体验。",
      "ta": "可速览参赛作品，观察 AI 生成 3D 资产在可玩场景中的实际落地形态。",
      "src": "80 Level · 11-11",
      "url": "https://80.lv/articles/creators-developed-playable-worlds-vr-games-digital-pets-for-tripo-ai-s-first-3d-world-hackathon/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "风格化法式小屋场景拆解",
      "sum": "Eloi Landes 拆解法式阿尔卑斯小屋项目，涵盖风格化雕刻、手绘贴图与氛围光照。",
      "ta": "环境美术流程参考，可看其风格化雕刻与手绘贴图如何配合光照出氛围。",
      "src": "80 Level · 11-11",
      "url": "https://80.lv/articles/building-wayfinder-inspired-stylized-french-cottage-environment/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "塞尔达重制版首周破五百万",
      "sum": "《时之笛》重制版四天销量超 500 万，成为 Switch 2 第二畅销游戏。",
      "ta": "行业风向参考：经典 IP 重制在 Switch 2 上的强势表现。",
      "src": "Game Developer · 11-11",
      "url": "https://www.gamedeveloper.com/business/the-legend-of-zelda-ocarina-of-time-exceeds-5-million-copies-solid-in-first-week"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PlayStation 取消 Fairgames",
      "sum": "报道称 2023 年公布的多人射击游戏 Fairgames 被取消，但无裁员。",
      "ta": "项目取消的行业动态，速览即可。",
      "src": "Game Developer · 11-11",
      "url": "https://www.gamedeveloper.com/console/report-playstation-s-fairgame-cancelled-but-haven-studios-remains"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "UE5.9预览版发布",
      "sum": "UE 5.9预览版上线，含AI工作流增强、Web平台支持、渲染与动画更新。",
      "ta": "引擎大版本预览，渲染与动画管线改动需第一时间评估对植被/材质/Niagara的兼容影响。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/unreal-engine-5-9-preview-is-out-it-was-built-with-ai/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时皮肤渲染可微方法",
      "sum": "提出轻量可微方法，直接估计适配游戏引擎近似着色器的次表面散射参数。",
      "ta": "把离线逆向渲染参数直接映射到实时shader，对角色皮肤材质管线有参考价值。",
      "src": "arXiv · cs.GR · 11-10",
      "url": "https://arxiv.org/abs/2611.14451v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态微几何编译为神经纹理",
      "sum": "Deformable Texture Maps将形变表面的细尺度几何编译进神经纹理，避免显式实例化。",
      "ta": "布料等形变材质的微观外观压缩思路，可借鉴到植被/织物材质性能优化。",
      "src": "arXiv · cs.GR · 11-10",
      "url": "https://arxiv.org/abs/2611.13677v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "单骨骼驱动喷气引擎绑定",
      "sum": "用单根骨骼控制整个喷气引擎所有运动的Blender绑定案例。",
      "ta": "极简骨骼驱动的机械绑定思路，可参考到硬表面道具动画。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/real-world-jet-engine-recreated-with-intricate-blender-rig/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "程序化地牢设计经验谈",
      "sum": "Bloody Hell Hotel开发者谈吸血鬼酒店沙盒机制与程序化地牢的设计方式。",
      "ta": "程序化关卡生成的一线设计经验，与PCG工具思路可对照。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/bloody-hell-hotel-developer-on-making-a-vampire-management-sandbox/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "俯视恐怖氛围营造手法",
      "sum": "前《小小梦魇》开发者谈用实拍特效恐怖、动画构图与环境光照营造不安感。",
      "ta": "环境光照与镜头构图的具体做法，对氛围向场景打光有参考。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/end-of-abyss-devs-explain-how-they-made-top-down-horror-feel-unsettling/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "XR实时三维元胞自动机框架",
      "sum": "提出统一交互框架，在XR硬件约束下协调3D元胞自动机的模拟、体数据管理与渲染。",
      "ta": "体数据实时模拟与渲染的约束权衡，对体积特效有边缘参考。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.13296v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "GPU加速QP求解器",
      "sum": "FAME-QP用CUDA图与融合核函数加速线性MPC的稠密二次规划求解。",
      "ta": "GPU求解器工程优化手法，可参考到仿真类计算任务的核融合思路。",
      "src": "arXiv · cs.GR · 11-10",
      "url": "https://arxiv.org/abs/2611.13766v1"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "索尼Fairgames项目取消",
      "sum": "索尼服务型劫案模拟游戏Fairgames被取消，不计划裁员。",
      "ta": "服务型游戏收缩的又一信号，速览行业动向。",
      "src": "80 Level · 11-11",
      "url": "https://80.lv/articles/sony-s-live-service-heist-simulator-fairgames-has-been-canceled/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "瑞奇与叮当手游将停服",
      "sum": "Ratchet & Clank: Ranger Rumble软发布一年后停运，11月下架、次年5月关服。",
      "ta": "服务型项目生命周期案例，速览。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/ratchet-clank-ranger-rumble-is-shutting-down-a-year-after-its-soft-launch/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS Plus十一月阵容",
      "sum": "十一月PS Plus游戏目录含《死亡搁浅2》《如龙8外传》等。",
      "ta": "订阅阵容信息，速览即可。",
      "src": "PlayStation Blog · 11-10",
      "url": "https://blog.playstation.com/2026/11/10/playstation-plus-game-catalog-for-november-death-stranding-2-on-the-beach-like-a-dragon-pirate-yakuza-in-hawaii-atomfall-dragon-quest-iii-hd-2d-remake-and-more/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "神经纹理压缩补上各向异性过滤",
      "sum": "论文为神经纹理压缩引入显式LOD条件与各向异性过滤，弥补GPU纹理单元缺失的滤波。",
      "ta": "材质/Shader性能方向值得精读：NTC若接入AF，直接影响贴图内存与采样开销的权衡。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.12650v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "3DGS攻克SM级负载不均",
      "sum": "论文针对3D高斯泼溅在GPU上的SM级负载不均衡提出优化，无需重训练或专用加速器。",
      "ta": "实时渲染管线相关：3DGS调度优化思路可迁移到大规模植被/场景泼溅的性能调优。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.12319v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "体积光传输免路径实时推断",
      "sum": "提出用低成本场景特征与统计量实时重建体积介质下的像素辐射，替代蒙特卡洛降噪。",
      "ta": "Niagara流体/体积特效方向必看：无路径的实时体积光照方案可能改变雾效与体积渲染成本结构。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.12103v1"
    }
  ]
};
