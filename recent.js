// daily-intel 近期热点层 —— 由 run.py 自动累积，供「近期」入口翻阅。
// 与 data.js（仅今日新增）分离：data.js 是“今天有什么新的”，recent.js 是“近期攒了啥”。

window.INTEL_RECENT = {
  "updated": "2026-09-30 14:33",
  "cards": [
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "纹理空间材质扩散生成",
      "sum": "微调视频扩散Transformer，在纹理空间做文本引导材质生成与超分。",
      "ta": "直接在UV纹理空间生成PBR材质，比多视图烘焙更贴合现有材质管线，值得看投影映射思路。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.37654v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "高斯泼溅残差场提表达",
      "sum": "用神经残差场替代低阶球谐，缓解3DGS视角相关反射的表达冗余。",
      "ta": "低阶SH是3DGS高光发糊的根因，这套残差建模对植被/材质高光重建有直接参考价值。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.37115v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "可仿真3D场景智能体重建",
      "sum": "从真实观测重建含可变形曲线、曲面、体数据的仿真就绪3D场景。",
      "ta": "明确面向游戏与机器人，可变形几何的仿真就绪重建对程序化植被/布料资产有借鉴意义。",
      "src": "arXiv · cs.GR · 09-28",
      "url": "https://arxiv.org/abs/2609.36024v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "文本生成物理仿真管线",
      "sum": "Text2Sim用智能体管线把纯文本请求转成可执行可编辑的物理仿真。",
      "ta": "资产、布局、物理参数、运动、渲染联合生成，可关注其对特效预演自动化的启发。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.36593v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "域是残差的自监督迁移",
      "sum": "不换生成器，只适配DINO自监督特征，实现去雾去雨与渲染转照片。",
      "ta": "渲染转照片的思路对风格化后处理与去噪有参考，特征层迁移比像素层更稳。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.37330v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "变长神经运动拼接",
      "sum": "用聚类转移图实现变长过渡的运动拼接，无需手工指定过渡区间。",
      "ta": "变长过渡对动画状态机与运动匹配的衔接逻辑有直接参考价值。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.37167v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可解性查询加速关卡反馈",
      "sum": "用带约束的可解性查询，为3D障碍关卡设计提供快速解法反馈。",
      "ta": "程序化关卡与障碍设计的自动化验证思路，可迁移到跑酷/攀爬关卡工具链。",
      "src": "arXiv · cs.GR · 09-28",
      "url": "https://arxiv.org/abs/2609.36225v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "交互视频世界模型注意力",
      "sum": "WorldAttention提出面向交互式视频世界模型的高效注意力架构。",
      "ta": "实时交互式世界生成的注意力效率问题，与实时渲染的算力预算思路相通。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.34606"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "像素扩散对抗训练",
      "sum": "针对像素空间扩散模型引入对抗训练以提升生成质量。",
      "ta": "像素域扩散的稳定性改进，与实时渲染关联有限，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.38170"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "多字符语义排版生成",
      "sum": "MSTypography在词可读性与物体可辨识度间平衡，做多字符语义排版。",
      "ta": "偏平面设计生成，对游戏UI字体工具链有间接参考。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.37141v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "商品硬件分割体可视化",
      "sum": "Volcanite在消费级硬件上做TB级分割体数据的可视化。",
      "ta": "面向连接组学，但大体积数据在消费级GPU上的可视化策略可借鉴。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.36898v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "可微渲染做手眼标定",
      "sum": "DRHeC用基于RGB梯度的可微渲染实现无标记手眼标定。",
      "ta": "可微渲染在标定上的应用，与游戏渲染管线关联较弱。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.36779v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "反事实视频生成训人形",
      "sum": "用反事实视频生成扩充高质量交互视频，训练人形机器人运动操作。",
      "ta": "视频生成做数据增广的思路，对动画/动作数据合成有间接启发。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.38172v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "JEPA世界模型各向异性表征",
      "sum": "各向异性表征可改善JEPA世界模型中的规划能力。",
      "ta": "世界模型表征学习，与游戏AI规划有潜在关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.37441"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "动作驱动视觉仿真",
      "sum": "WorldLine用动作驱动的视觉仿真支持机器人操作。",
      "ta": "机器人操作仿真，与游戏实时渲染关联有限。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.38059"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "稠密检索需非对称几何",
      "sum": "提出共享与双投影的偏差-方差理论，解释稠密检索何时需要非对称几何。",
      "ta": "纯检索理论，与TA工作流无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.32488"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "表格基础模型自演化管线",
      "sum": "TabFM-Auto为表格基础模型构建自演化管线。",
      "ta": "表格数据方向，与游戏技术无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.37989"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "超球语义轨迹分析",
      "sum": "用超球语义轨迹分析映射预印本、专利与算力规模的技术扩散。",
      "ta": "科技情报分析，与TA工作无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.35845"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "巫师3重制版视觉大升级",
      "sum": "巫师3本周大规模升级，重做视觉、战斗、进度、操作与界面，并推Switch 2原生版。",
      "ta": "老游戏视觉现代化改造的完整案例，可关注其材质/光照重制的取舍。",
      "src": "80 Level · 09-29",
      "url": "https://80.lv/articles/the-witcher-3-remastered-makes-an-11-year-old-rpg-feel-new-again/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "角色头部完整重拓扑教程",
      "sum": "Anna Beganska的教程覆盖从中模拓扑到低模优化的完整重拓扑流程。",
      "ta": "面向动画的角色头部重拓扑全流程，可直接用于角色资产规范参考。",
      "src": "80 Level · 09-29",
      "url": "https://80.lv/articles/learn-complete-retopology-workflow-for-animation-ready-character-heads/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Maya角色动画作品展示",
      "sum": "动画师Adrian Nita分享用Maya制作的漫威Carnage角色动画。",
      "ta": "纯作品展示，可看角色动画表现力，无技术细节。",
      "src": "80 Level · 09-29",
      "url": "https://80.lv/articles/take-a-look-at-this-jaw-dropping-fan-made-3d-animation-of-marvel-s-carnage/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "恐怖Roguelike开发分享",
      "sum": "Max Soloha谈恐怖Roguelike《I'm not a Psycho Invader》的灵感与技术细节。",
      "ta": "独立开发技术分享，可速览其机制组合思路。",
      "src": "80 Level · 09-29",
      "url": "https://80.lv/articles/creating-horror-roguelike-inspired-by-no-i-m-not-a-human-buckshot-roulette/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Steam折扣活动页全算法化",
      "sum": "Steam宣布折扣与活动页将改为完全算法驱动，影响玩家看到的游戏。",
      "ta": "曝光分发逻辑变化会影响独立/中小团队发行策略，值得关注。",
      "src": "Game Developer · 09-29",
      "url": "https://www.gamedeveloper.com/pc/steam-s-discounts-and-events-tab-will-soon-be-fully-algorithm-driven"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "顽皮狗筹备新美末项目",
      "sum": "顽皮狗在完成Intergalactic后，正筹备新的《最后生还者》项目。",
      "ta": "行业动向，与TA工作无直接关联。",
      "src": "Game Developer · 09-29",
      "url": "https://www.gamedeveloper.com/console/naughty-dog-is-working-on-new-the-last-of-us-projects-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "消逝光芒前主创加入Bloober",
      "sum": "《消逝的光芒》系列前负责人加入Bloober Team旗下恐怖厂牌Broken Mirror Games。",
      "ta": "人事变动，速览即可。",
      "src": "Game Developer · 09-29",
      "url": "https://www.gamedeveloper.com/business/former-dying-light-franchise-lead-joins-bloober-team-horror-imprint-broken-mirror-games"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "毛发重建免专用数据集",
      "sum": "FurE 提出无需动物毛发数据集的多视角实例级 3D 毛发重建方法。",
      "ta": "植被/毛发类程序化生成的实例化思路可借鉴，关注其细尺度细节与自遮挡处理。",
      "src": "arXiv · cs.GR · 09-28",
      "url": "https://arxiv.org/abs/2609.35770v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "恒定内存可微光追追踪",
      "sum": "提出恒定内存的可微光追追踪，突破路径长度导致的计算图内存瓶颈。",
      "ta": "可微渲染内存优化对离线/实时混合管线有参考价值，值得精读其反向传播策略。",
      "src": "arXiv · cs.GR · 09-26",
      "url": "https://arxiv.org/abs/2609.32920v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "XR 渲染感知高斯条件化",
      "sum": "ControlGS 针对 XR 下游后处理与光学路径，条件化神经高斯渲染。",
      "ta": "XR 渲染需考虑运行时后处理变化，对 UE5 XR 管线与高斯方案有直接启发。",
      "src": "arXiv · cs.GR · 09-25",
      "url": "https://arxiv.org/abs/2609.32038v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时反射感知高斯 SLAM",
      "sum": "RRG-SLAM 首个实时反射感知高斯 SLAM，分离漫反射与反射分量。",
      "ta": "反射分离的 TSDF-高斯混合表示，对室内场景重建与实时渲染有参考。",
      "src": "arXiv · cs.GR · 09-28",
      "url": "https://arxiv.org/abs/2609.34527v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "语义感知动作重定向",
      "sum": "ReFM 提出语义感知精炼流模型，跨骨骼结构迁移动作并保持语义。",
      "ta": "动作重定向对动画管线有用，关注其无需高质量配对数据的语义学习方式。",
      "src": "arXiv · cs.GR · 09-25",
      "url": "https://arxiv.org/abs/2609.32068v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "虚拟人视觉符号框架",
      "sum": "A.D.A.M.O. 提出语言驱动的视觉符号框架，整合感知推理与动作控制环。",
      "ta": "虚拟人控制环设计对 NPC/数字人交互有参考，关注其 3D 环境接地方式。",
      "src": "arXiv · cs.GR · 09-28",
      "url": "https://arxiv.org/abs/2609.35463v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "增材制造晶格优化",
      "sum": "面向增材制造的晶格结构多目标优化与帕累托前沿构建方法。",
      "ta": "与游戏渲染关联弱，仅程序化几何生成思路可速览。",
      "src": "arXiv · cs.GR · 09-27",
      "url": "https://arxiv.org/abs/2609.33598v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "实时交互世界模型扩展",
      "sum": "WorldPlay2 扩展实时交互世界模型的控制能力与预测视野。",
      "ta": "世界模型若用于游戏内容生成，关注其实时性与控制接口。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.35560"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "稀疏视角新视图合成",
      "sum": "VGGT-Diff 结合视觉几何与扩散模型实现稀疏视角新视图合成。",
      "ta": "稀疏视角合成对场景重建与资产生成有参考，关注几何先验的引入方式。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.33253"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "流式世界空间手部估计",
      "sum": "InfiniHand 从第一视角视频流式估计世界空间手部运动。",
      "ta": "对动捕与手部交互有潜在用途，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.35743"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "运动中心视频预训练",
      "sum": "TT-VidT 解耦时间轴，实现高效运动中心视频预训练。",
      "ta": "视频预训练效率优化，与游戏动画关联间接，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.33419"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散奖励模型",
      "sum": "提出扩散奖励模型用于生成质量评估。",
      "ta": "与游戏/实时渲染无直接关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.33803"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "具身反应式聆听框架",
      "sum": "REALM 提出由粗到细的具身反应式聆听生成框架。",
      "ta": "与游戏技术关联弱，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.33095"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "生成模型视觉解题基准",
      "sum": "SolveEdit 提出生成模型视觉问题求解的评测基准。",
      "ta": "评测基准类，与 TA 工作流关联弱，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.35504"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "title": "多层 RBD 精修破坏效果",
      "sum": "前皮克斯 FX TD 分享多层 RBD 仿真工作流，保留已批准破坏运动并叠加碎裂细节。",
      "ta": "破坏特效精修流程对 Houdini 特效师直接可用，值得精读其分层策略。",
      "src": "80 Level · 09-28",
      "url": "https://80.lv/articles/former-pixar-fx-artist-reveals-a-smarter-way-to-refine-destruction/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Unity 高级攀爬检测系统",
      "sum": "面向 Unity 的高级边缘检测与穿越系统，支持复杂几何与 IK 驱动动画。",
      "ta": "IK 驱动动画工作流对角色移动系统有参考，关注其最小配置设计。",
      "src": "80 Level · 09-28",
      "url": "https://80.lv/articles/advanced-ledge-detection-traversal-system-for-unity/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "水沙模拟打造治愈沙盒",
      "sum": "Bubblebird 工作室分享 Unity 中水与沙模拟的优化及玩法塑造经验。",
      "ta": "流体/沙粒模拟在 Unity 中的落地经验，对特效与程序化场景有参考。",
      "src": "80 Level · 09-28",
      "url": "https://80.lv/articles/creating-cozy-sandbox-sandcastle-with-a-focus-on-water-sand-simulation/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "角色雕刻的叙事细节",
      "sum": "Quentin Riviale 分享魂类角色雕刻中视觉丰富度与清晰度的平衡经验。",
      "ta": "角色资产制作中信息传达与视觉清晰度的权衡，对美术管线有参考。",
      "src": "80 Level · 09-28",
      "url": "https://80.lv/articles/storytelling-through-details-sculpting-souls-like-corvus-soldiers/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "石墨铅笔粒子特效",
      "sum": "wildWillowPillow 创作的石墨铅笔风格破坏粒子特效作品展示。",
      "ta": "粒子特效风格化参考，速览即可。",
      "src": "80 Level · 09-28",
      "url": "https://80.lv/articles/take-a-look-at-this-trippy-graphite-pencil-particle-fx/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "免费日常动作动捕包",
      "sum": "免费动捕动画包，包含遛狗、刷牙、开车、喝咖啡等日常动作。",
      "ta": "可直接用于角色动画原型，速览下载。",
      "src": "80 Level · 09-28",
      "url": "https://80.lv/articles/download-this-free-pack-of-mocap-animations-with-everyday-actions/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "面部动画拓扑大师课",
      "sum": "Nur Diker Köksal 展示情绪化老妇面部动画测试，聚焦拓扑。",
      "ta": "面部拓扑与表情动画参考，速览。",
      "src": "80 Level · 09-28",
      "url": "https://80.lv/articles/facial-animation-test-with-very-emotional-old-lady/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "微软三年裁撤逾五千岗",
      "sum": "微软 CEO 称 Xbox 在「精简」，三年裁员超 5750 人并关闭多家工作室。",
      "ta": "行业收缩信号，关注对引擎与工具团队预算的潜在影响。",
      "src": "Game Developer · 09-28",
      "url": "https://www.gamedeveloper.com/production/microsoft-ceo-says-xbox-is-streamlining-after-laying-off-5-750-workers-in-three-years"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Suri 第七音符定档",
      "sum": "Suri: The Seventh Note 将于 10 月 30 日登陆 PS5，历时四年开发。",
      "ta": "独立游戏视觉风格参考，速览。",
      "src": "PlayStation Blog · 09-28",
      "url": "https://blog.playstation.com/2026/09/28/suri-the-seventh-note-launches-oct-30-on-ps5/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "多时相高斯泼溅融合方案",
      "sum": "ChronoFuseGS 融合多个独立训练的高斯泼溅模型，处理场景随时间变化的重建。",
      "ta": "植被季节变化、场景迭代重建可参考此多时相融合思路，值得关注其 per-splat 持久化机制。",
      "src": "arXiv · cs.GR · 09-25",
      "url": "https://arxiv.org/abs/2609.31339v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "扩散模型缓存体积阴影",
      "sum": "DiffusionShadow 用扩散模型缓存阴影，加速隐式神经表示的高级光照体积渲染。",
      "ta": "体积渲染实时化是 Niagara 流体/云雾特效的痛点，此缓存思路对实时体积光照有参考价值。",
      "src": "arXiv · cs.GR · 09-25",
      "url": "https://arxiv.org/abs/2609.30658v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "生成轨迹的感知距离度量",
      "sum": "FoMo 提出将生成轨迹的分叉时刻作为感知距离度量。",
      "ta": "纯生成模型评估方法，原文未涉及游戏/实时/3D，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.25716"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "竞技环境下的LLM评测",
      "sum": "Game Arena 提出在竞争性游戏环境中评测大语言模型的策略能力。",
      "ta": "属 LLM 评测基准，与 TA 渲染/工具管线无直接关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.31473"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5悬浮载具场景制作拆解",
      "sum": "作者分享基于《黑客帝国觉醒》UE5场景的悬浮载具飞行模拟制作流程与散热方案。",
      "ta": "可参考其UE5场景搭建思路与PC散热应对，适合植被/程序化场景的TA借鉴大场景性能取舍。",
      "src": "80 Level · 09-25",
      "url": "https://80.lv/articles/how-to-create-futuristic-hovercraft-flight-simulator-inspired-by-matrix/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Demogorgon皮肤材质Lookdev复盘",
      "sum": "作者复盘《怪奇物语》Demogorgon的薄苍白黏液皮肤材质，强调位移不等于真实感。",
      "ta": "对材质/Shader TA有直接参考：位移与光照配合的写实皮肤lookdev思路。",
      "src": "80 Level · 09-25",
      "url": "https://80.lv/articles/exploring-thin-pale-slimy-skin-texture-by-recreating-the-demogorgon-from-stranger-things/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "小体型角色巨武器动画拆解",
      "sum": "以《Moss: Book 2》为例讲解小角色持巨型双手武器时如何保持清晰剪影。",
      "ta": "动画剪影可读性思路对角色/特效表现有借鉴，非核心TA方向。",
      "src": "80 Level · 09-25",
      "url": "https://80.lv/articles/breakdown-animating-tiny-character-with-massive-two-handed-weapon/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "狐娘巨剑连招动画展示",
      "sum": "展示狐娘角色巨剑连招动画，强调重量感与运动节奏。",
      "ta": "速览级动画参考，重量感表现可借鉴到特效节奏设计。",
      "src": "80 Level · 09-25",
      "url": "https://80.lv/articles/fox-girl-s-powerful-giant-sword-combo-attack-animation/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "1940年杂志广告实为2D矢量动画",
      "sum": "一则1940年《Life》杂志广告实为2D矢量动画制作。",
      "ta": "与游戏TA工作流关联弱，速览即可。",
      "src": "80 Level · 09-25",
      "url": "https://80.lv/articles/this-1940-life-magazine-ad-is-actually-2d-vector-animation/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "留存玩家才是增长关键",
      "sum": "Adikteev观点：游戏增长最大杠杆不是新增安装，而是早期识别流失并召回玩家。",
      "ta": "偏运营增长，与TA本职关联弱，速览。",
      "src": "80 Level · 09-25",
      "url": "https://80.lv/articles/the-players-you-already-have-are-your-biggest-growth-opportunity/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《皇牌空战8》改用第一人称叙事",
      "sum": "Project Aces在《皇牌空战8》中改变叙事方式，以第一人称讲述更私人的故事。",
      "ta": "偏叙事设计，与TA技术方向关联弱。",
      "src": "PlayStation Blog · 09-25",
      "url": "https://blog.playstation.com/2026/09/25/how-ace-combat-8-wings-of-theve-uses-first-person-to-tell-a-more-personal-story/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS博客本周精选与播客",
      "sum": "PlayStation官方播客第548期回顾九月发售游戏，另有《金刚狼》截图精选。",
      "ta": "纯社区/营销内容，无技术信息。",
      "src": "PlayStation Blog · 09-25",
      "url": "https://blog.playstation.com/2026/09/25/official-playstation-podcast-episode-548-september-selects/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "编码智能体用于任务与运动规划",
      "sum": "论文提出用编码智能体解决广义任务与运动规划问题。",
      "ta": "原文未提及游戏/实时/3D引擎关联，仅作AI方向速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.30233"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "音视频联合生成的扩散强化学习",
      "sum": "AV-GRPO提出模态锚定解耦的扩散强化学习方法，用于音视频联合生成。",
      "ta": "原文未提及游戏/实时引擎关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.29816"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "OREO 用渲染编辑对齐 3D 生成",
      "sum": "借 2D 扩散先验在生成过程中实时渲染并编辑，提升 3D 资产视觉保真度。",
      "ta": "程序化资产生成若接入这种在线渲染-编辑回路，可减少后期手工修形，值得关注其对齐策略。",
      "src": "arXiv · cs.GR · 09-24",
      "url": "https://arxiv.org/abs/2609.29788v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CuACD 实现全 GPU 凸分解",
      "sum": "近似凸分解全程驻留 GPU，为物理模拟、碰撞检测与机器人学习做预处理。",
      "ta": "碰撞体生成是植被/道具批处理管线常客，全 GPU 化有望大幅压缩离线预处理耗时。",
      "src": "arXiv · cs.GR · 09-23",
      "url": "https://arxiv.org/abs/2609.28731v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "M-plicits 嵌套多尺度隐式曲面",
      "sum": "用嵌套多尺度残差改进正弦编码 MLP，兼顾训练效率、渲染速度与抗噪。",
      "ta": "隐式表示若能在速度与鲁棒性上同时改善，对程序化植被/地形 SDF 建模有直接参考价值。",
      "src": "arXiv · cs.GR · 09-23",
      "url": "https://arxiv.org/abs/2609.28684v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Heartian 生理感知可重光照头像",
      "sum": "为高斯头部头像加入心跳周期驱动的逐帧反照率调制，补足皮肤颜色细微变化。",
      "ta": "可重光照高斯头像的时序细节建模思路，可迁移到角色皮肤材质的动态微变化处理。",
      "src": "arXiv · cs.GR · 09-22",
      "url": "https://arxiv.org/abs/2609.28539v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "胶带贴附仿真 TAPESIM",
      "sum": "面向机器人操作的胶带剥离与贴附高效仿真，避免逐层解算粘合层。",
      "ta": "柔性条带与粘附/脱附的简化求解思路，对布料与藤蔓类植被的接触仿真有借鉴意义。",
      "src": "arXiv · cs.GR · 09-23",
      "url": "https://arxiv.org/abs/2609.28766v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型中的客体永久性训练",
      "sum": "论文探讨在世界模型中训练客体永久性，让模型维持被遮挡物体的持续表征。",
      "ta": "若世界模型能稳定维持遮挡物表征，对场景流式加载与遮挡剔除的预测式方案有潜在启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.28654"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 做鸣潮风格动态头发",
      "sum": "教程演示如何在 Blender 中制作鸣潮风格的动态头发效果。",
      "ta": "二次元角色动态发型的绑定与解算流程，可对照引擎内发丝方案的实现差异。",
      "src": "80 Level · 09-24",
      "url": "https://80.lv/articles/how-to-create-dynamic-wuthering-waves-style-hair-in-blender/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE 环境资产包含风格化植被",
      "sum": "Meshingun Studio 发布 UE 环境资产包，含哥特家具、亚洲寺庙场景与风格化植被等 20 余个包。",
      "ta": "风格化植被资产可直接用于搭建测试场景，验证植被工具与材质性能。",
      "src": "80 Level · 09-24",
      "url": "https://80.lv/articles/get-hundreds-of-striking-production-ready-assets-with-this-unreal-engine-environment-bundle/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "锈蚀材质先研究物理再动手",
      "sum": "Loic Anquetil 讲解用 Substance 3D Designer 制作写实锈蚀材质，强调先理解材料物理复杂性。",
      "ta": "程序化锈蚀的探索式工作流，对材质函数分层与噪声组合思路有直接参考。",
      "src": "80 Level · 09-24",
      "url": "https://80.lv/articles/desirable-patina-how-to-make-realistic-rust-in-3d/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Meta 发布百克重 VR 眼镜",
      "sum": "Meta 公布约 100 克、售价 1300 美元的 VR 眼镜，并有多款游戏将登陆该平台。",
      "ta": "新 VR 硬件规格影响未来移动端渲染预算与注视点渲染策略，可留意其性能定位。",
      "src": "Game Developer · 09-24",
      "url": "https://www.gamedeveloper.com/business/meta-announces-new-vr-glasses-that-weigh-about-100-grams-and-cost-1-300"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "黑曜石将保留创作独立性",
      "sum": "Bethesda 总裁称黑曜石加入后领导层与创作优势将保持完整。",
      "ta": "工作室整合动向，与日常 TA 工作无直接关联，速览即可。",
      "src": "80 Level · 09-25",
      "url": "https://80.lv/articles/obsidian-will-preserve-its-creative-identity-bethesda-president-says/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "爱尔兰游戏基金增设资助通道",
      "sum": "爱尔兰游戏基金扩展为开发基金、原型基金与发行基金三条路径。",
      "ta": "区域性资金政策，与 TA 技术工作无关，仅作行业动态速览。",
      "src": "Game Developer · 09-24",
      "url": "https://www.gamedeveloper.com/business/irish-game-fund-expands-with-additional-funding-pathways"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Massive 任命新任总经理",
      "sum": "前 Avalanche Studios 负责人 Natalie Francis 将于 10 月 1 日加入 Massive Entertainment 任总经理。",
      "ta": "人事变动类行业新闻，与渲染技术无直接关联。",
      "src": "Game Developer · 09-24",
      "url": "https://www.gamedeveloper.com/business/former-avalanche-studios-chief-natalie-francis-joins-massive-entertainment-as-managing-director"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "凭记忆画国界线的免费游戏",
      "sum": "一款要求玩家凭记忆在地图上绘制国界线的免费游戏上线。",
      "ta": "独立小游戏，与 TA 技术栈无关，可忽略。",
      "src": "80 Level · 09-24",
      "url": "https://80.lv/articles/in-this-game-you-have-to-draw-border-lines-from-memory-on-a-map/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可动可重打光Surfel化身",
      "sum": "ARS-Avatar用surfel表示从多视角图像生成可动画、可重打光的人体化身。",
      "ta": "surfel+可学习环境光遮蔽，对角色材质与光照解耦有参考价值。",
      "src": "arXiv · cs.GR · 09-23",
      "url": "https://arxiv.org/abs/2609.27600v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时机器人切割仿真新法",
      "sum": "BladeMaster在线生成持久断裂面，实现实时可形变物体切割仿真。",
      "ta": "拓扑变化+持久断裂的实时方案，可借鉴到破坏/切割类特效系统。",
      "src": "arXiv · cs.GR · 09-23",
      "url": "https://arxiv.org/abs/2609.27342v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "灵巧抓取解耦对齐表示",
      "sum": "DEAL-Grasp解耦全局刚体运动与局部姿态，生成几何感知的灵巧抓取。",
      "ta": "VR/数字人抓取动画生成，关注其解耦表示思路。",
      "src": "arXiv · cs.GR · 09-23",
      "url": "https://arxiv.org/abs/2609.28131v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "物理世界模型InternW0",
      "sum": "InternW0提出面向高效真实世界交互的基础物理世界模型。",
      "ta": "物理世界模型方向，与实时交互仿真潜在相关，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.27656"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "ZBrush+Substance做收音机",
      "sum": "Ravikanth Gupta用ZBrush建模有机磨损细节，六张UV加UDIM准备贴图。",
      "ta": "UDIM多象限与老化磨损处理，硬表面道具贴图流程示范。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/breakdown-how-to-create-a-hard-surface-philips-radio-with-zbrush-substance-3d/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Undead Labs脱离Xbox后大裁员",
      "sum": "微软今年早前释放剥离信号后，Undead Labs进行重大裁员。",
      "ta": "工作室动荡，关注其对项目与团队稳定性的影响。",
      "src": "Game Developer · 09-23",
      "url": "https://www.gamedeveloper.com/business/undead-labs-makes-significant-layoffs-after-splitting-from-xbox"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "微软拟在加载屏插广告",
      "sum": "微软申请专利，在游戏自然停顿处展示广告。",
      "ta": "加载屏广告若落地，或影响加载流程与UI设计。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/microsoft-may-bring-ads-to-game-loading-screens/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "手绘银河城Well Dweller发售",
      "sum": "手绘风格银河恶魔城游戏Well Dweller已正式发售。",
      "ta": "2D手绘美术风格参考，速览。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/the-hand-drawn-metroidvania-well-dweller-has-been-released/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "像素卡牌游戏以投喂代杀敌",
      "sum": "Hungry Horrors以英爱民俗为背景，用烹饪击败怪物。",
      "ta": "像素美术与题材创意，速览。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/you-feed-your-enemies-instead-of-killing-them-in-this-deckbuilding-pixel-art-adventure/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "浏览器寻物游戏十年未完",
      "sum": "Where's Waldo风格浏览器游戏Floor796近十年仍在更新，完成度62%。",
      "ta": "长线个人项目，速览。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/nearly-ten-years-later-this-where-s-waldo-style-browser-game-keeps-growing/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "时装裁剪缝纫模拟游戏",
      "sum": "一款模拟游戏让玩家裁剪并缝制自己的连衣裙。",
      "ta": "布料模拟题材，速览。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/this-simulation-game-lets-you-cut-and-sew-your-own-dresses/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "搏击俱乐部结局赛博朋克重制",
      "sum": "Wonki Choi分享搏击俱乐部结尾场景的赛博朋克风3D动画。",
      "ta": "风格化3D动画参考，速览。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/fight-club-s-final-scene-reimagined-as-a-cyberpunk-style-3d-animation/"
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
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "WorldCrafter 隐式 3D 记忆世界模型",
      "sum": "WorldCrafter 提出可相机查询的隐式 3D 感知记忆，实现长时序一致的视频世界模型。",
      "ta": "长时序跨视角一致性是世界模型的老大难，隐式 3D 记忆的思路对程序化场景与实时探索有参考价值。",
      "src": "arXiv · cs.GR · 09-21",
      "url": "https://arxiv.org/abs/2609.24984v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "Mira-Scene 像素对齐场景布局",
      "sum": "Mira-Scene 提出像素对齐的布局表示，解决单图生成 3D 物体难以准确摆入场景的问题。",
      "ta": "单图资产生成已成熟，瓶颈在布局；像素对齐表示对程序化摆放与场景组装工具有直接启发。",
      "src": "arXiv · cs.GR · 09-20",
      "url": "https://arxiv.org/abs/2609.23796v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "ProxyBuild 文本生成可编辑建筑",
      "sum": "ProxyBuild 用网格锚定程序化代理，从文本生成结构化、可编辑的 3D 建筑。",
      "ta": "输出可编辑层级结构而非死网格，对程序化建筑工具链与规则生成方向值得一看。",
      "src": "arXiv · cs.GR · 09-20",
      "url": "https://arxiv.org/abs/2609.23386v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "LINGO 稀疏视角 X 光 3DGS 重建",
      "sum": "LINGO 结合隐式初始化与梯度优化，用 3DGS 做稀疏视角 X 光新视角合成与 CT 重建。",
      "ta": "3DGS 结合物理吸收模型的思路，对体积渲染与稀疏数据重建有方法层面的借鉴。",
      "src": "arXiv · cs.GR · 09-19",
      "url": "https://arxiv.org/abs/2609.22849v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "VISTA 视频注入风格化动画",
      "sum": "VISTA 两阶段框架融合文本结构与参考视频风格，生成风格化 3D 人体动作。",
      "ta": "无需配对三元组的风格迁移思路，对动捕数据复用与风格化动画管线有参考意义。",
      "src": "arXiv · cs.GR · 09-20",
      "url": "https://arxiv.org/abs/2609.23817v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "MoSAT 空间音频驱动动作生成",
      "sum": "MoSAT 从空间音频与文本描述联合生成人体动作。",
      "ta": "音频驱动动作对音效与动画联动、环境交互式动画有潜在应用价值。",
      "src": "arXiv · cs.GR · 09-20",
      "url": "https://arxiv.org/abs/2609.23797v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "暗视觉显示 RGB 转 S/P 比评估",
      "sum": "论文对自然场景做高光谱表征，评估闭式 RGB 到 S/P 比估计在中间视觉显示中的适用性。",
      "ta": "低光显示色调映射的底层信号问题，做夜景与暗部渲染时值得留意。",
      "src": "arXiv · cs.GR · 09-21",
      "url": "https://arxiv.org/abs/2609.24819v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "0.8B 模型生成 3D 反应动画",
      "sum": "论文用 0.8B 小模型做约束程序生成，产出忠实化学过程的 3D 反应动画。",
      "ta": "小模型加约束生成的范式，对程序化动画与规则约束生成有方法参考。",
      "src": "arXiv · cs.GR · 09-21",
      "url": "https://arxiv.org/abs/2609.24457v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "视频扩散模型为何违反物理",
      "sum": "论文剖析注意力机制缺陷，解释视频扩散模型为何产生违反物理的结果。",
      "ta": "理解生成模型的物理失效机制，对判断 AI 生成素材能否进实时管线有直接价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.23658"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "GameHorizon 游戏多时域评测集",
      "sum": "GameHorizon Suite 提供游戏玩法场景下的多时域数据与评测基准。",
      "ta": "游戏玩法评测基准，可用于衡量 AI 在实时交互场景中的表现。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.25001"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "GPU 内核基准测试变异分析",
      "sum": "论文用变异分析方法检验 GPU 内核基准测试判定器的有效性。",
      "ta": "做 GPU 性能基准与优化验证时，可参考其测试判定可靠性的评估思路。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.22220"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型表征蒸馏进机器人策略",
      "sum": "论文将世界模型表征蒸馏进紧凑的 VLA 机器人策略。",
      "ta": "世界模型到轻量策略的蒸馏路线，对实时 AI 决策的算力压缩有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.24682"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini 拉格朗日波浪流体模拟",
      "sum": "初级特效师 Fred Bello 分享基于 Wētā 拉格朗日波浪研究的 Houdini 水体模拟搭建细节。",
      "ta": "流体特效的实战拆解，对做水体与波浪类 Niagara/Houdini 效果有直接参考。",
      "src": "80 Level · 09-21",
      "url": "https://80.lv/articles/hypnotizing-fluid-simulation-based-on-w-t-s-research-on-lagrangian-waves/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 几何节点做风格化 VFX",
      "sum": "3D 艺术家 Good Good 逐步讲解用 Blender 几何节点制作风格化 VFX 的流程。",
      "ta": "几何节点做风格化特效的思路，可迁移到程序化特效与植被工具的节点设计。",
      "src": "80 Level · 09-21",
      "url": "https://80.lv/articles/artist-shows-process-of-creating-stylized-vfx-with-blender-s-geometry-nodes/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "闪光紧身裤 Shader 制作揭秘",
      "sum": "作者 Bleeding_Hart 分享闪光紧身裤从各角度闪烁的 Shader 制作方法。",
      "ta": "各向异性闪光类 Shader 的实现细节，对布料与亮片材质有参考。",
      "src": "80 Level · 09-21",
      "url": "https://80.lv/articles/see-these-glitter-tights-sparkle-from-every-angle/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "绘画风格格斗动画展示",
      "sum": "Ave Espelita 发布一支绘画风格强烈的格斗动画作品。",
      "ta": "动画表现力参考，可看节奏与打击感的处理。",
      "src": "80 Level · 09-21",
      "url": "https://80.lv/articles/check-out-this-impressive-painterly-style-fighting-animation/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "寂静岭 Townfall 改第一人称",
      "sum": "寂静岭 Townfall 从第三人称转为第一人称，官方列出九点设计变化。",
      "ta": "视角切换对关卡尺度、恐怖氛围与镜头语言的影响，可作设计参考。",
      "src": "PlayStation Blog · 09-21",
      "url": "https://blog.playstation.com/2026/09/21/silent-hill-townfall-9-ways-first-person-changes-the-iconic-horror-formula/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "潜空间物理渲染新范式",
      "sum": "研究将光传输现象与扩散模型潜空间建立联系，实现可控的物理渲染式生成。",
      "ta": "值得关注潜空间与PBR的桥接思路，或可启发材质/光照的可控生成管线。",
      "src": "arXiv · cs.GR · 09-17",
      "url": "https://arxiv.org/abs/2609.21054v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "流式语音手势生成",
      "sum": "GestureFAR用流自回归在用户说话时实时生成共语手势，面向具身对话代理。",
      "ta": "实时流式动作生成思路可参考，但与游戏植被/渲染管线关联较弱，速览即可。",
      "src": "arXiv · cs.GR · 09-18",
      "url": "https://arxiv.org/abs/2609.21576v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "可形变资产分层生成",
      "sum": "DeformSmith用物理约束引导分层生成机器人操作所需的可形变资产。",
      "ta": "物理引导的形变资产生成思路，对程序化生成有间接参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.18620"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender+Maya风格化角色",
      "sum": "Fabien Metais分享Water Woman项目，Maya建模不重拓扑，黑白绘制后整体换色。",
      "ta": "黑白绘制再换调色板的贴图流程，对风格化角色材质制作有借鉴意义。",
      "src": "80 Level · 09-21",
      "url": "https://80.lv/articles/creating-a-stylized-3d-character-of-a-water-woman-with-blender-maya/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "模拟游戏玩转游戏UI",
      "sum": "一款模拟游戏以点击操作游戏界面按钮为核心玩法。",
      "ta": "与渲染和工具链无关，仅作行业趣味速览。",
      "src": "80 Level · 09-19",
      "url": "https://80.lv/articles/this-simulation-game-lets-you-play-with-video-game-interfaces/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "赛博朋克夜之城几乎全手工搭建",
      "sum": "CDPR美术总监讲述夜之城手工制作流程，第一人称视角如何影响尺度与细节，路径追踪为何契合其光照管线。",
      "ta": "值得看路径追踪与手工场景搭建的配合逻辑，对植被/环境美术的管线设计有参考价值。",
      "src": "80 Level · 09-18",
      "url": "https://80.lv/articles/interview-how-cyberpunk-2077-s-night-city-was-built-almost-entirely-by-hand/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 5.3 原生支持 3D 高斯泼溅",
      "sum": "Blender 5.3 将获得原生 3D Gaussian Splatting 支持。",
      "ta": "高斯泼溅进主流DCC，未来植被/环境扫描资产的导入与实时预览流程可能被改写。",
      "src": "80 Level · 09-18",
      "url": "https://80.lv/articles/blender-5-3-is-getting-native-3d-gaussian-splat-support/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Pass式工作流搭建中东庭院",
      "sum": "作者讲述用pass-based流程加速制作废弃中东庭院，并搭建高效易用的材质系统。",
      "ta": "pass-based流程与快速材质系统的思路，对TA优化美术迭代效率有参考。",
      "src": "80 Level · 09-18",
      "url": "https://80.lv/articles/assembling-abandoned-middle-eastern-courtyard-in-3d-using-pass-based-workflow/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "85%日本开发者已用生成式AI",
      "sum": "CESA报告称超85%日本游戏开发者至少偶尔使用生成式AI，工作室强调人工审核与限制工具。",
      "ta": "了解行业AI采用现状与审核策略，对TA评估AI工具在管线中的落地边界有帮助。",
      "src": "80 Level · 09-18",
      "url": "https://80.lv/articles/over-85-of-japanese-game-developers-now-use-generative-ai-according-to-tgs-report/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "米哈游AI配音侵权获赔11.2万",
      "sum": "上海法院判决AI语音服务模仿原神角色，米哈游获赔11.2万美元，或成中国法院对生成式AI的判例信号。",
      "ta": "AI生成内容版权边界收紧，TA在引入AI资产/语音工具时需关注合规风险。",
      "src": "Game Developer · 09-18",
      "url": "https://www.gamedeveloper.com/business/mihoyo-awarded-112-000-by-chinese-court-after-ai-voice-service-dupes-genshin-impact-characters"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ARM谈如何与开发者协作做工具",
      "sum": "ARM的Peter Hodges讨论游戏开发工具及1969年短片Lemon。",
      "ta": "速览即可，工具厂商与开发者协作方式或对跨团队工具设计有零星启发。",
      "src": "Game Developer · 09-18",
      "url": "https://www.gamedeveloper.com/art/how-toolmakers-like-arm-work-with-devs-ft-peter-hodges"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "King员工谈判破裂宣布罢工",
      "sum": "Candy Crush工作室工会员工因集体协议谈判停滞，将于9月25日罢工。",
      "ta": "行业劳资动态，与TA日常工作无直接关联，速览即可。",
      "src": "Game Developer · 09-18",
      "url": "https://www.gamedeveloper.com/production/king-workers-call-strike-after-collective-agreement-negotiations-stall"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Control Resonant延续Remedy风格",
      "sum": "评测称Control Resonant融合激进近战、开放探索与超现实世界观，是Remedy公式的进化。",
      "ta": "游戏设计向评测，与TA技术工作无直接关联，速览即可。",
      "src": "80 Level · 09-18",
      "url": "https://80.lv/articles/control-resonant-is-a-fantastic-evolution-of-remedy-s-formula/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Blood of Dawnwalker时间机制或不再回归",
      "sum": "Blood of Dawnwalker的时间机制在续作中可能不会保留。",
      "ta": "纯游戏设计动态，与TA工作无关，速览即可。",
      "src": "80 Level · 09-18",
      "url": "https://80.lv/articles/blood-of-dawnwalker-s-time-mechanic-might-not-return-in-the-sequel/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "溅射液体多视角重建新法",
      "sum": "SplashSplat 从真实多视角视频重建飞溅液体，解决瞬时撕裂与无纹理难题。",
      "ta": "流体特效师可关注其重建思路，用于离线参考或验证 Niagara 溅射形态。",
      "src": "arXiv · cs.GR · 09-17",
      "url": "https://arxiv.org/abs/2609.20818v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "程序化场景穿模自动修复",
      "sum": "S4R 用尺度延拓法解决程序化生成场景中的刚体互穿，供物理仿真前清理。",
      "ta": "植被/道具程序化摆放常遇穿模，此法可作为生成后处理步骤参考。",
      "src": "arXiv · cs.GR · 09-17",
      "url": "https://arxiv.org/abs/2609.20524v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "微片介质多重散射解析式BRDF",
      "sum": "新漫反射型 BRDF 在 Smith 阴影假设下精确计入所有散射阶数，且可解析求值与重要性采样。",
      "ta": "对植被/毛发等微片材质的多重散射近似有直接价值，可评估替换现有 diffuse 模型。",
      "src": "arXiv · cs.GR · 09-17",
      "url": "https://arxiv.org/abs/2609.20394v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "GS转PBR高斯资产分解法",
      "sum": "GS-PI 解耦外观分解，把高斯泼溅的烘焙辐照转为可接入 PBR 管线的材质资产。",
      "ta": "3D 扫描/泼溅资产进 UE5 PBR 管线的关键一步，值得跟进其解耦与重光照效果。",
      "src": "arXiv · cs.GR · 09-17",
      "url": "https://arxiv.org/abs/2609.19907v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "绘画多解性三维实体化",
      "sum": "研究具象绘画对应的多种三维构型，而非收敛到单一重建模型。",
      "ta": "偏学术艺术方向，与实时渲染工作流关联弱，速览即可。",
      "src": "arXiv · cs.GR · 09-17",
      "url": "https://arxiv.org/abs/2609.19782v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "实时粒子流式传输编解码",
      "sum": "DELUGE 用分解式熵编码实现非结构化几何的实时粒子流式传输，面向 VR/AR 共享仿真。",
      "ta": "Niagara 流体多人同步可参考其压缩与流式方案，降低网络带宽压力。",
      "src": "arXiv · cs.GR · 09-17",
      "url": "https://arxiv.org/abs/2609.19750v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "语言驱动全身接触控制",
      "sum": "LYRIC 用流匹配控制器，让角色按自然语言完成富接触的全身物体交互。",
      "ta": "若做角色动画或物理交互，可关注其稀疏目标加语言指令的控制范式。",
      "src": "arXiv · cs.GR · 09-17",
      "url": "https://arxiv.org/abs/2609.19688v1"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "title": "CDPR TA 发布扫描PBR求解器",
      "sum": "CD Projekt Red 技术美术推出 sigmaPBR，把 3D 扫描转为可重光照材质。",
      "ta": "扫描资产转 PBR 是植被/道具管线常见痛点，可直接试用其求解流程。",
      "src": "80 Level · 09-17",
      "url": "https://80.lv/articles/cd-projekt-red-s-technical-artist-unveils-pbr-solver-for-3d-scans/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "角色建模工作流拆解",
      "sum": "Seori Nam 分享角色制作流程，涵盖基础网格雕脸、Marvelous Designer 服装与纹素密度取舍。",
      "ta": "纹素密度与配色平衡的经验对角色/植被贴图规划有参考价值。",
      "src": "80 Level · 09-17",
      "url": "https://80.lv/articles/modeling-3d-character-with-medieval-fantasy-post-apocalyptic-elements/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "PS1风格预渲染背景进引擎",
      "sum": "Static Between Stations 开发者展示 PS1 风格预渲染背景在引擎内的呈现与制作方式。",
      "ta": "预渲染背景转实时呈现的取舍思路，对风格化场景搭建有借鉴意义。",
      "src": "80 Level · 09-17",
      "url": "https://80.lv/articles/see-how-this-rpg-s-ps1-style-pre-rendered-backgrounds-look-in-engine/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Heart Machine 大规模裁员",
      "sum": "《Hyper Light Drifter》开发商 Heart Machine 裁掉大部分员工，工作室面临存亡关口。",
      "ta": "行业收缩信号，关注独立团队生存环境变化。",
      "src": "Game Developer · 09-17",
      "url": "https://www.gamedeveloper.com/business/hyper-light-drifter-developer-heart-machine-has-laid-off-the-majority-of-staff"
    },
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
    }
  ]
};
