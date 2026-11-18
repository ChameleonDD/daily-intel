// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月18日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>大规模高斯泼溅外存优化训练</em> / <em>免费Blender插件生成散落落叶</em>。其余按重要性自动排序，红色优先。",
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
      "title": "3DGS超轻量免渲染调色迁移",
      "sum": "ReTouchGS提出面向3D高斯泼溅的超轻量、免渲染美学色彩增强与迁移方法。",
      "ta": "若做扫描资产后处理，这类免渲染调色思路可省去重训/重渲成本，值得看其轻量实现。",
      "src": "arXiv · cs.GR · 11-17",
      "url": "https://arxiv.org/abs/2611.23054v1"
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
      "cat": "gfx",
      "imp": "mid",
      "title": "数据高效文本生成3D面部资产",
      "sum": "FaceRiff用几何条件实现统一的文本到3D面部资产合成，降低对大规模专用数据依赖。",
      "ta": "数字人面部资产（UV几何+反照率+置换）生成管线，可关注其数据效率做法。",
      "src": "arXiv · cs.GR · 11-16",
      "url": "https://arxiv.org/abs/2611.21867v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "π⁴：4D场景几何与运动基础模型",
      "sum": "π⁴提出面向4D场景几何与运动的基础模型。",
      "ta": "4D场景理解若成熟，可影响动态环境重建与程序化布局，速览其能力边界。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.23144"
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
      "cat": "flow",
      "imp": "hi",
      "title": "免费Blender插件生成散落落叶",
      "sum": "Guillaume Bissieres发布免费Blender插件，可快速生成、散布并动画化落叶场景。",
      "ta": "与植被工具本职强相关，可直接看其散布与动画逻辑能否迁移到UE植被管线。",
      "src": "80 Level · 11-17",
      "url": "https://80.lv/articles/this-free-blender-add-on-lets-you-generate-scatter-animate-fallen-leaves/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender从零制作写实叶片",
      "sum": "Blender艺术家演示不用预制模型与照片贴图，从零创建写实叶片。",
      "ta": "叶片建模与材质从零构建的思路，对植被资产自制流程有直接借鉴。",
      "src": "80 Level · 11-17",
      "url": "https://80.lv/articles/blender-artist-shows-how-to-create-realistic-leaf-from-scratch/"
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
