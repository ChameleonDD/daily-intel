// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月26日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>动态场景逐帧重建网格新法</em> / <em>单图估 PBR 材质新思路</em> / <em>任意相机模型的4D高斯渲染</em>。其余按重要性自动排序，红色优先。",
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
