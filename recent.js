// daily-intel 近期热点层 —— 由 run.py 自动累积，供「近期」入口翻阅。
// 与 data.js（仅今日新增）分离：data.js 是“今天有什么新的”，recent.js 是“近期攒了啥”。

window.INTEL_RECENT = {
  "updated": "2026-10-21 13:52",
  "cards": [
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
      "title": "3D 表示影响语义特征抬升",
      "sum": "OV-Foam 分析 3DGS 图元重叠导致反投影特征抬升次优，改进开放词汇分割。",
      "ta": "做 3DGS 场景语义标注或分割时，可参考其对图元重叠问题的处理。",
      "src": "arXiv · cs.GR · 10-20",
      "url": "https://arxiv.org/abs/2610.28131v1"
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
      "cat": "flow",
      "imp": "lo",
      "title": "UE5 开发课程合集上线",
      "sum": "24 门以上 UE5 课程合集，覆盖蓝图、玩法编程、物理与 MetaSounds。",
      "ta": "偏入门培训内容，对资深 TA 价值有限，速览。",
      "src": "80 Level · 10-20",
      "url": "https://80.lv/articles/learn-unreal-engine-5-game-development-with-over-24-courses-from-this-bundle/"
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
      "title": "Blender 玻璃质感苹果制作",
      "sum": "Moop-A-Doop 展示了一个风格化玻璃质感苹果的渲染制作过程。",
      "ta": "可速览其玻璃/折射材质与打光思路，对风格化材质有参考价值。",
      "src": "80 Level · 10-16",
      "url": "https://80.lv/articles/see-how-this-sparkly-glass-like-apple-was-made-in-blender/"
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
      "title": "RTX Spark 单机开发部署",
      "sum": "NVIDIA 介绍 RTX Spark，可在单机上完成 AI 智能体的编码、测试与部署。",
      "ta": "原文未提及游戏/实时渲染关联，仅作 AI 开发工具链速览。",
      "src": "NVIDIA · 10-16",
      "url": "https://developer.nvidia.com/blog/code-test-and-deploy-on-one-machine-with-nvidia-rtx-spark/"
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
      "cat": "flow",
      "imp": "mid",
      "title": "开源2D骨骼动画编辑器",
      "sum": "Rigby2D 是一款免费开源的2D骨骼动画编辑器。",
      "ta": "2D动画工具链补充，可评估是否纳入小型项目工作流。",
      "src": "Tech-Artists · 10-15",
      "url": "https://www.tech-artists.org/t/rigby2d-free-open-source-2d-skeletal-animation-editor/18580"
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
      "title": "Rockstar联合创始人回顾经典",
      "sum": "Dan Houser分享GTA3、Bully等经典制作回忆，包括GTA3盒图最后一刻改动。",
      "ta": "经典项目复盘对理解开放世界设计取舍有参考，非技术直接相关。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/rockstar-co-founder-looks-back-at-making-gta-3-bully-other-classics/"
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
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "空间音频流式动作生成",
      "sum": "Sonic-AMG从空间音频流式生成人体动作，模拟实时反应。",
      "ta": "音频驱动动作生成，可关注其在游戏角色实时动画中的潜力。",
      "src": "arXiv · cs.GR · 10-09",
      "url": "https://arxiv.org/abs/2610.13300v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "优先化人形动作重定向",
      "sum": "PriMoRetarget用优先化重定向处理多角色多物体交互动作迁移。",
      "ta": "多接触动作重定向，对角色动画管线与物理交互有参考。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.12642v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型强化学习框架",
      "sum": "DiffusionART提出高效稳定的扩散模型强化方法。",
      "ta": "扩散模型训练优化，与3D生成/材质生成间接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12572"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散语言模型免校准量化",
      "sum": "SoloQ为扩散语言模型提供免校准量化方案。",
      "ta": "量化技术偏LLM，与实时渲染关联弱，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.07121"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "游戏智能体启发式学习评测",
      "sum": "在长时游戏智能体竞赛中评测启发式学习效果。",
      "ta": "游戏AI智能体研究，与TA工具链关联有限。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12341"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型递归自改进",
      "sum": "RSI-Anything用世界模型实现递归自我改进。",
      "ta": "世界模型自改进，与游戏AI/生成间接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.13912"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "表征引导像素扩散Transformer",
      "sum": "学习表征以引导像素扩散Transformer生成。",
      "ta": "扩散生成质量优化，与材质/贴图生成间接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12978"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "激活波分析加速推测解码",
      "sum": "分析LLM隐状态信息与几何以优化推测解码。",
      "ta": "LLM推理加速，与实时渲染无直接关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12939"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "潜空间语义压缩奖励建模",
      "sum": "在潜空间用语义保持压缩做高效生成式奖励建模。",
      "ta": "奖励建模偏LLM训练，与TA工作流关联弱。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.09788"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender泳池VFX病毒短片",
      "sum": "BrutalDuck用Blender、Omniscient App与AE制作病毒泳池VFX。",
      "ta": "VFX拆解可看Blender+AE合成流程，对特效制作有参考。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/this-viral-pool-clip-was-made-using-blender-omniscient-app-after-effects/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "第一人称恐怖新作Farsight公布",
      "sum": "Studio Noori新作让玩家用望远镜、对讲机和90年代手持摄像机探索后室风格房屋。",
      "ta": "可关注其90年代手持摄像机UI与后室氛围的视觉呈现手法，作为恐怖游戏氛围参考。",
      "src": "80 Level · 10-10",
      "url": "https://80.lv/articles/in-this-first-person-horror-eye-exam-pulls-you-into-backrooms-style-house/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "模块化灯塔场景制作解析",
      "sum": "作者分享可平铺材质、材质平滑过渡技巧，及手工雕刻植物图集做风格化植被。",
      "ta": "植被图集+可平铺材质混合方案，对程序化植被工具与风格化场景搭建有直接参考价值。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/how-to-build-an-atmospheric-stylized-lighthouse-scene-with-a-custom-modular-set/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "PS1与N64模型资产免费归档",
      "sum": "Pardall Games 建立 PS1、N64 时代 3D 模型与游戏资产的免费在线存档库。",
      "ta": "低模资产可作风格化参考或复古项目素材来源，注意版权与授权范围。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/free-online-archive-of-ps1-n64-3d-models-game-assets/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏长线运营靠主动运维",
      "sum": "文章称平稳的游戏上线并非运气，而是发布前长期准备工作的结果。",
      "ta": "偏运维与发布流程，与TA日常关联弱，速览即可。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/proactive-not-reactive-24-years-of-keeping-games-online/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "目标导向视频世界模型",
      "sum": "WorldGuide 提出面向程序化任务执行的目标导向视频世界模型。",
      "ta": "世界模型若用于任务序列生成，或可启发程序化生成与工具自动化，但需确认实时性。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12459"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型推测解码加速",
      "sum": "SpecFold 通过折叠多分支冗余，加速扩散语言模型的推测解码。",
      "ta": "推理加速方向，与实时渲染管线无直接关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.04875"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多任务强化学习GPU并行框架",
      "sum": "提出面向异构多任务强化学习的 GPU 并行框架。",
      "ta": "训练框架类论文，未提及游戏或实时渲染，关联度低。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.03335"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "仿真合成企业数据",
      "sum": "通过可扩展的智能体-系统交互仿真，生成连贯的企业数据。",
      "ta": "纯数据合成方向，与游戏/实时渲染无关，建议丢弃。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.10549"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS官方播客第550期",
      "sum": "PlayStation 官方播客回归，聊近期通关游戏、新冒险与听众来信。",
      "ta": "纯播客内容，无技术信息，速览即可。",
      "src": "PlayStation Blog · 10-09",
      "url": "https://blog.playstation.com/2026/10/09/official-playstation-podcast-episode-550-now-this-is-podcasting/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "雅达利800XL复刻开售",
      "sum": "雅达利 1980 年代经典电脑 800XL 回归，支持现代显示并内置 25 款游戏。",
      "ta": "怀旧硬件新闻，与TA工作无关，速览即可。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/atari-s-iconic-1980s-computer-is-back-available-for-purchase/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "低多边形实体家居装饰",
      "sum": "荷兰法波设计师 Jonas Hejduk 为现实世界制作低多边形实体装饰资产。",
      "ta": "低模美术的跨界应用，趣味参考，与生产管线无关。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/this-real-life-low-resolution-interior-design-decor-turns-any-space-into-a-retro-game-scene/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "镜面光照神经缓存新方案",
      "sum": "提出面向镜面光照的NRC变体，用反射方向参数化与粗糙度相关辐射目标。",
      "ta": "实时路径追踪镜面反射降噪直接相关，UE5光追管线值得关注。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.11702v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "可微渲染引入敏感度AOV",
      "sum": "将敏感度作为可微渲染的任意输出变量，为导数提供可分解检查的表示。",
      "ta": "为渲染管线调试与参数分析提供新维度，Shader/材质优化可借鉴。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.10852v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "刚体交互局部接触神经模拟",
      "sum": "RiCo通过局部接触推理实现刚体交互的神经模拟。",
      "ta": "物理模拟精度提升方向，对破坏/交互特效有潜在参考。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.12333v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "复用前帧的局部视图合成",
      "sum": "LVS利用相机小位移时图像重叠，复用已渲染视图加速新视角合成。",
      "ta": "3DGS渲染加速思路，对实时场景探索性能优化有启发。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.12127v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "网格转SubD的建模代理工作流",
      "sum": "SubDGuide用建模师启发的代理工作流从密集网格重建细分曲面控制笼。",
      "ta": "程序化建模与拓扑重建工具链可参考其控制笼推断逻辑。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.11721v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "局部PCA正则的高斯泼溅",
      "sum": "PCAsplat用局部PCA正则优化3DGS，改善被遮挡高斯的学习。",
      "ta": "3DGS重建质量提升，对场景扫描与植被重建有参考价值。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.11011v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "免训练物理感知流体视频生成",
      "sum": "Fluid-Gen-Zero将运动交给物理模拟器，外观交给预训练视频生成器。",
      "ta": "流体特效生成思路，物理与外观解耦对Niagara流体有启发。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.10984v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "常数内存可微光追反向传播",
      "sum": "ResLRB实现内存与路径长度无关的反向模式可微光追。",
      "ta": "可微渲染内存瓶颈突破，对渲染管线研究有参考意义。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.10847v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "特征保持压缩通用框架",
      "sum": "FeatureZ通过逐点边界与星形分类实现几何拓扑特征保持的有损压缩。",
      "ta": "科学可视化数据压缩，与游戏资产管线关联较弱，速览即可。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.12371v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "扩散模型反事实响应轨迹归因",
      "sum": "提出反事实响应轨迹方法，追踪扩散模型输出到训练样本的归因。",
      "ta": "AI生成内容溯源，对生成资产版权与调试有潜在价值。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.11238v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "多智能体自我中心世界模型",
      "sum": "提出多智能体自我中心世界模型，支持细粒度具身交互。",
      "ta": "交互式环境模拟方向，对游戏AI与仿真环境构建有启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12299"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "动作忠实机器人世界模型",
      "sum": "DreamTrue用反事实后训练构建动作忠实的机器人世界模型。",
      "ta": "世界模型动作忠实度提升，对交互仿真有潜在参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12468"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "流式全景世界模型导航",
      "sum": "SPW-Nav提出语言引导导航的流式全景世界模型。",
      "ta": "导航与全景生成，与游戏TA工作流关联较弱。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.08941"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "智能体语言世界模型",
      "sum": "从轨迹到智能体世界：面向交互环境模拟的智能体语言世界模型。",
      "ta": "交互环境模拟方向，与实时渲染关联间接。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.06100"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "RizomUV 2027大幅升级",
      "sum": "RizomUV 2027带来更快展开、实时更新、完整UI定制与无头操作。",
      "ta": "UV工具链重大更新，场景级UV管理与管线支持值得关注。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/rizomuv-2027-introduces-faster-unfolding-live-updates-full-ui-customization/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "手绘风格矿车道具制作教程",
      "sum": "Raphael Fabris分享手绘纹理风格化矿车道具的制作技巧与拓扑经验。",
      "ta": "手绘纹理与跨软件工作流技巧，可速览借鉴。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/how-to-make-a-stylized-game-ready-minecart-prop-using-hand-painted-textures/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "实时WebGL着色器触感UI",
      "sum": "展示由实时WebGL着色器驱动的触感UI效果。",
      "ta": "着色器交互效果参考，速览即可。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/explore-this-tactile-ui-powered-by-real-time-webgl-shader/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "转描技术打造恐怖美术",
      "sum": "Wych Elm拆解Silver Pines的手工美术管线，含1800帧角色与转描怪物。",
      "ta": "非主流美术管线案例，对风格化表现有参考。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/how-silver-pines-used-rotoscoping-to-create-its-unsettling-horror/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "谷歌发布AI游戏创作平台",
      "sum": "Google推出Playground平台，让用户用AI制作游戏。",
      "ta": "AI游戏创作工具动向，关注其对原型制作流程的潜在影响。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/google-released-its-own-game-creation-platform/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox成立XP新部门",
      "sum": "Xbox CEO宣布成立XP部门，专注游戏周边IP拓展业务。",
      "ta": "行业商业动向，与TA工作关联较弱。",
      "src": "Game Developer · 10-08",
      "url": "https://www.gamedeveloper.com/console/xbox-ceo-unveils-new-xbox-division-for-game-adjacent-ventures-named-xp-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "招魂改编恐怖游戏将发售",
      "sum": "Netflix与Until Dawn开发商合作的《招魂》改编游戏即将推出。",
      "ta": "行业产品新闻，速览即可。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/horror-game-from-netflix-until-dawn-s-developers-based-on-the-conjuring-is-coming-soon/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "多物理场仿真综述出炉",
      "sum": "arXiv 综述系统梳理视觉计算中多物理场仿真的各类技术。",
      "ta": "做流体/破碎/布料特效可当工具书索引，找可复用的物理建模方法。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09822v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "小波约束扩散生成全身语音动作",
      "sum": "DynaConTalk 用小波约束扩散解决长时语音动作过平滑问题。",
      "ta": "长时程角色动画生成思路，可参考其分频解耦策略处理手势与表情。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09846v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "单图重建物理稳定抓握手势",
      "sum": "StableGrasp 从单张 RGB 图重建物理稳定的手部抓取姿态。",
      "ta": "涉及物理约束下的姿态估计，对角色手部交互与道具抓取动画有参考价值。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.09195v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "肌电驱动高表现力面部动画",
      "sum": "emg2face 用高密度表面肌电实现面部动画，解决 HMD 遮挡下的捕捉难题。",
      "ta": "VR 头显遮挡面部时的表情捕捉替代方案，关注其信号到动画的映射管线。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09304v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "技能组合实现长时程全身控制",
      "sum": "Co²Skill 通过技能组合实现长时程人-环境交互的全身控制。",
      "ta": "物理角色控制的分层组合思路，可借鉴到 NPC 全身交互行为生成。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09291v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "涂鸦编辑图像基准发布",
      "sum": "ScribbleEdit 提出仅凭涂鸦输入的图像编辑基准，评估现有模型能力。",
      "ta": "交互式编辑意图理解评测，对材质/贴图快速迭代工具有潜在启发。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09382v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "赛车遥测分析教练框架",
      "sum": "TRACK 框架分析模拟赛车驾驶表现并对车手行为聚类画像。",
      "ta": "遥测数据分析方法，可迁移到游戏内玩家行为分析与自适应难度设计。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.10061v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "移动端实时高斯泼溅统一动静",
      "sum": "Mobile-4DGS 在移动端统一静态与动态场景的实时高斯泼溅渲染。",
      "ta": "移动端 4DGS 实时方案，关注其动静统一表示与性能优化手段。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.05289"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "编码智能体能否造出想要的游戏",
      "sum": "SWE-Game 评测编码智能体构建游戏的能力边界。",
      "ta": "了解 AI 编码代理在游戏开发任务上的真实水平，评估其可辅助的环节。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.33678"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "递归游戏生成器代理框架",
      "sum": "Recursive Game Creator 提出面向产品级体验的智能体游戏生成框架。",
      "ta": "关注其代理编排与体验导向的生成流程，思考对工具链自动化的启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.08621"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "图像生成视觉文本双语基准",
      "sum": "UltraText Bench 提出评估图像生成中视觉文本渲染的双语基准。",
      "ta": "贴图/UI 中文字渲染质量评测，对生成式贴图工具选型有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.09823"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "分层过程理解提升主动助手",
      "sum": "用分层过程理解改进 AI 主动协助的时机与内容。",
      "ta": "过程理解思路或可迁移到编辑器内主动式辅助工具的交互设计。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.06505"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "策略内蒸馏将经验写入扩散权重",
      "sum": "通过策略内上下文蒸馏把智能体经验内化进扩散模型权重。",
      "ta": "模型经验内化方法，关注其对生成式资产工具持续学习能力的启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.07250"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Unity 发布提示式游戏工具 Spark",
      "sum": "Unity 联合 Google AI 推出基于提示的游戏开发工具 Unity Spark。",
      "ta": "关注其如何把 Asset Store 美术资产接入 AI 辅助编辑器，影响未来工作流。",
      "src": "Game Developer · 10-07",
      "url": "https://www.gamedeveloper.com/programming/unity-unveils-unity-spark-an-prompt-based-tool-for-google-s-ai-games-platform"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Godot 伪 3D 视觉实现解析",
      "sum": "开发者分享在 Godot 中为恐怖合作游戏伪造 3D 观感的具体做法。",
      "ta": "低成本伪 3D 渲染技巧，对风格化项目与性能受限平台有借鉴价值。",
      "src": "80 Level · 10-07",
      "url": "https://80.lv/articles/see-how-developers-faked-3d-look-in-godot-for-their-darkwood-inspired-co-op-horror/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "潜行者 2 风化工具箱制作流程",
      "sum": "美术师讲解潜行者 2 DLC 中可交互工具箱的建模、布料模拟与做旧贴图。",
      "ta": "布料仿真与风化材质流程细节，可参考其做旧贴图思路。",
      "src": "80 Level · 10-07",
      "url": "https://80.lv/articles/creating-a-weathered-toolbox-for-s-t-a-l-k-e-r-2-cost-of-hope/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "南极克苏鲁合作恐怖视觉解析",
      "sum": "UNFROST 团队谈南极克苏鲁合作恐怖的视觉机制灵感与 Unity 工作流。",
      "ta": "小团队 Unity 工作流与敌人运动迭代经验，对原型验证节奏有参考。",
      "src": "80 Level · 10-07",
      "url": "https://80.lv/articles/making-a-co-op-survival-horror-with-lovecraftian-creatures-set-in-antarctica/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Bit Reactor 召回过半停职员工",
      "sum": "星战 Zero Company 开发商 Bit Reactor 召回超半数此前停职的员工。",
      "ta": "工作室人事波动，关注其对项目排期与外包协作的间接影响。",
      "src": "Game Developer · 10-07",
      "url": "https://www.gamedeveloper.com/business/star-wars-zero-company-developer-bit-reactor-brings-back-over-half-of-furloughed-staff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Undead Labs 反思裁员沟通方式",
      "sum": "Undead Labs 负责人称在裁员准备中对员工过度坦诚。",
      "ta": "行业管理侧反思，与 TA 日常工作关联有限，速览即可。",
      "src": "Game Developer · 10-06",
      "url": "https://www.gamedeveloper.com/business/unlead-labs-studio-head-says-they-were-irresponsibly-transparent-in-preparing-staff-for-layoffs"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RGA 2.15支持源码到ISA关联",
      "sum": "AMD Radeon GPU Analyzer 2.15可将预编译GPU代码对象关联回源码行，便于ISA分析优化。",
      "ta": "做Shader性能调优时，能直接定位到具体源码行对应的ISA指令，省去盲猜汇编的功夫。",
      "src": "AMD GPUOpen · 10-06",
      "url": "https://gpuopen.com/learn/rga-source-to-isa-correlation-gpu-code-objects/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "扩散风格化支持局部控制",
      "sum": "该工作解耦内容与风格两个条件权重，实现区域级的图像风格化控制。",
      "ta": "做材质贴图风格化时，区域级控制比全局风格迁移更实用，可关注其条件解耦方式。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.08704v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "点基变形混合做面部重定向",
      "sum": "PDB用点基变形混合实现跨网格面部动画重定向，减少表面伪影。",
      "ta": "面部重定向若走点云混合而非拓扑依赖，可跨不同网格复用表情动画，值得看其抗伪影策略。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.08672v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "超声可微渲染做形状优化",
      "sum": "UltraDiff将可微渲染范式扩展到医学超声，通过匹配渲染图像优化场景参数。",
      "ta": "与游戏渲染无关，但可微渲染从光传输扩展到其他成像模态的思路可作方法论参考。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.07941v1"
    }
  ]
};
