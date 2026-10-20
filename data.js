// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月20日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>CUDA Tile 加速 Mamba-2 前向</em> / <em>LLM 生成 CAD 机构难达功能</em> / <em>开放形态几何风格迁移</em>。其余按重要性自动排序，红色优先。",
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
