// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月2日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>战争机器E-Day用UE5回归恐怖</em> / <em>战争机器E-Day成15年最高分</em> / <em>PSSR AI超分将登陆PS5</em> / <em>AMD发布高级着色器交付编译器</em>。其余按重要性自动排序，红色优先。",
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
      "title": "战争机器E-Day用UE5回归恐怖",
      "sum": "The Coalition用UE5重现初代\"毁灭之美\"美学，并进化玩法与动画。",
      "ta": "官方开发者访谈，可看Nanite环境、硬件光追与实时破坏的落地取舍。",
      "src": "Unreal Engine · 10-01",
      "url": "https://www.unrealengine.com/developer-interviews/gears-of-war-e-day-sees-a-return-to-dark-survival-horror-roots-with-ue5"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 2,
      "title": "战争机器E-Day成15年最高分",
      "sum": "该前传结合硬件光追、Nanite环境、实时破坏与数百动态阴影光源。",
      "ta": "数百动态阴影光源+实时破坏的性能预算，是光照与几何管线的实战参考。",
      "src": "80 Level · 10-01",
      "url": "https://80.lv/articles/gears-of-war-e-day-is-the-highest-rated-gears-game-in-over-15-years/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 3,
      "title": "PSSR AI超分将登陆PS5",
      "sum": "索尼把PS5 Pro的PSSR逐像素AI超分下放到基础版PS5主机。",
      "ta": "主机端AI超分普及，跨平台项目的分辨率与后处理预算需重新评估。",
      "src": "PlayStation Blog · 10-01",
      "url": "https://blog.playstation.com/2026/10/01/ai-upscaling-is-coming-to-ps5/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "title": "AMD发布高级着色器交付编译器",
      "sum": "AMD推出Direct3D 12 State Object Compiler插件，支持微软ASD预编译。",
      "ta": "预编译PSO可大幅削减首次运行卡顿，是管线优化必跟的工具链更新。",
      "src": "AMD GPUOpen · 10-01",
      "url": "https://gpuopen.com/news/asd-compiler-launch/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "Lumen降噪不牺牲光照质量",
      "sum": "Aleksander Goryachev分享UE复杂多光源场景下的Lumen降噪设置。",
      "ta": "多光源场景Lumen噪点治理的实操经验，可直接对照自己的光照配置。",
      "src": "80 Level · 10-01",
      "url": "https://80.lv/articles/suppressing-noise-without-sacrificing-lighting-quality-when-using-unreal-engine-s-lumen/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "亮度主导3DGS几何形成",
      "sum": "研究通过分通道监督，发现亮度而非色度主导3D高斯泼溅的几何学习。",
      "ta": "理解3DGS几何与外观解耦，对重建管线的监督信号设计有启发。",
      "src": "arXiv · cs.GR · 09-30",
      "url": "https://arxiv.org/abs/2610.00749v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高斯点画实现免排序渲染",
      "sum": "Gaussian Stippling用混合采样与时空重建，实现免深度排序的3DGS渲染。",
      "ta": "免排序可省掉3DGS的排序开销，对实时高斯渲染性能有直接价值。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.38488v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Dirichlet泼溅做波动逆问题",
      "sum": "针对太赫兹、合成孔径声学等波动成像，提出Dirichlet核的可微渲染方法。",
      "ta": "非高斯PSF的可微渲染思路，对非常规成像与重建方向有参考意义。",
      "src": "arXiv · cs.GR · 09-30",
      "url": "https://arxiv.org/abs/2610.00618v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "文生3D评测配置脆弱性",
      "sum": "研究显示固定场景下，仅改相机与描述词即可改变文生3D排行榜结果。",
      "ta": "提醒评估3D生成资产时，渲染与描述协议本身会左右结论。",
      "src": "arXiv · cs.GR · 09-30",
      "url": "https://arxiv.org/abs/2610.00447v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "镜头光晕去除与重建",
      "sum": "论文提出去除镜头光晕的方法，以提升3D场景重建等下游任务质量。",
      "ta": "做扫描重建或照片建模时，光晕是常见污染源，可关注其去除策略。",
      "src": "arXiv · cs.GR · 09-30",
      "url": "https://arxiv.org/abs/2609.39527v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "智能体重建可交互3D室内场景",
      "sum": "LiteReality-Agent把RGB-D扫描重建为可动、可仿真的3D室内场景。",
      "ta": "面向仿真就绪的场景重建，对程序化关卡与场景资产管线有借鉴。",
      "src": "arXiv · cs.GR · 10-01",
      "url": "https://arxiv.org/abs/2610.01863v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "原生3D纹理生成是否需3D资产",
      "sum": "论文探讨原生3D纹理生成是否必须依赖3D资产进行训练。",
      "ta": "若成立可降低3D纹理生成的数据门槛，与材质生成工作流相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.34621"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "SILSA保拓扑高分辨率3D生成",
      "sum": "SILSA用滑窗切片潜变量实现保拓扑的高分辨率3D生成。",
      "ta": "高分辨率3D生成的拓扑保持，对资产可用性与后续绑定有意义。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.02201"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "4Director用刚体几何控视频世界模型",
      "sum": "4Director以刚性3D几何控制视频世界模型，实现更可控的生成。",
      "ta": "用3D几何约束视频生成，是预演与镜头控制方向的可用思路。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.02160"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "ROWBench检验视频模型渲染程序",
      "sum": "ROWBench评测视频模型是否按程序规范渲染出正确结果。",
      "ta": "为程序化生成的视频验证提供基准，与程序化内容评测思路相通。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.02205"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界观察者联合生成持久世界",
      "sum": "World Observer提出联合actor-observer生成，用于持久世界建模。",
      "ta": "持久世界建模方向，可留意其对长时序场景一致性的处理。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.02162"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Memorizon让世界模型超上下文训练",
      "sum": "Memorizon提出让世界模型在超出上下文窗口的情况下继续训练。",
      "ta": "长时程世界模型训练技巧，对长序列场景模拟有潜在参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.00544"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "像素扩散用稠密预测做表征对齐",
      "sum": "PixelDense把稠密预测作为像素扩散的表征对齐手段。",
      "ta": "像素级扩散的表征对齐思路，可关注其对生成细节的影响。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.00483"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "自适应奖励路由优化音视频扩散",
      "sum": "论文提出动态多奖励优化，用前向过程RL联合音视频扩散。",
      "ta": "多奖励联合优化思路，对音视频同步生成方向有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.37200"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "分层连续扩散语言模型",
      "sum": "论文提出分层连续扩散的语言模型方法。",
      "ta": "与图形工作流关联较弱，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.02193"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender与Substance做外星角色",
      "sum": "Artur Ledur分享一周内用Blender与Substance 3D完成科幻短片角色。",
      "ta": "短周期角色设计与贴图流程，可看其设计与场景匹配的做法。",
      "src": "80 Level · 10-01",
      "url": "https://80.lv/articles/creating-an-alien-character-for-a-sci-fi-short-film-with-blender-substance-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Godot与Unity矢量图形资源集",
      "sum": "DK Liao用极简风格矢量图形库制作游戏，资源可供Godot与Unity使用。",
      "ta": "轻量2D矢量资源，适合快速原型或小体量项目取用。",
      "src": "80 Level · 10-01",
      "url": "https://80.lv/articles/check-out-this-free-collection-of-vector-graphics-for-godot-unity/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "布料撕裂自缝合特效演示",
      "sum": "一段布料撕裂后自行缝合的惊悚特效演示，含密集恐惧提示。",
      "ta": "可看其布料撕裂与缝合的形变与材质表现手法。",
      "src": "80 Level · 10-01",
      "url": "https://80.lv/articles/watch-this-creepy-fabric-rip-apart-stitch-itself-back-together/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "奇异人生风磁带机手绘3D动画",
      "sum": "Alexandra Mallinson分享受复古科技启发的绘画风道具作品。",
      "ta": "手绘质感3D道具的风格化处理，可参考其材质与渲染取向。",
      "src": "80 Level · 10-01",
      "url": "https://80.lv/articles/check-out-this-painterly-life-is-strange-style-3d-animation-of-an-audio-cassette-player/"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "Unreal Engine",
      "NVIDIA",
      "PlayStation Blog",
      "AMD GPUOpen",
      "arXiv · cs.GR",
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Blender 开发博客、Tech-Artists。"
  },
  "xStale": false
};
