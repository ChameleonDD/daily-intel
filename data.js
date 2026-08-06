// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月6日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>跨现实投影与头显过渡研究</em> / <em>RORA：带关节的真实物体重建</em> / <em>基于Splat的CT金属伪影消除</em>。其余按重要性自动排序，红色优先。",
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
      "title": "跨现实投影与头显过渡研究",
      "sum": "研究用户在大规模投影与MR头显间跨现实对象与场景级过渡的感知。",
      "ta": "关注沉浸式展览中混合现实过渡的感知设计，对TA在跨平台视觉一致性上有参考价值。",
      "src": "arXiv · cs.GR · 08-05",
      "url": "https://arxiv.org/abs/2608.04971v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RORA：带关节的真实物体重建",
      "sum": "用NeRF和3DGS重建真实环境，并支持物体关节运动，缩小机器人学习模拟差距。",
      "ta": "3DGS结合关节物体重建，对程序化生成和交互式场景的资产制作有启发。",
      "src": "arXiv · cs.GR · 08-05",
      "url": "https://arxiv.org/abs/2608.04842v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "基于Splat的CT金属伪影消除",
      "sum": "通过紧凑衰减建模减少锥束CT中高衰减物体引起的金属伪影。",
      "ta": "Splat渲染在医学成像的应用，展示3DGS在非游戏领域的扩展潜力。",
      "src": "arXiv · cs.GR · 08-05",
      "url": "https://arxiv.org/abs/2608.04764v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "稀疏视角下Splat CT姿态敏感性",
      "sum": "重新审视基于3D高斯的断层扫描在稀疏视角重建中的姿态敏感性。",
      "ta": "3DGS在稀疏数据下的鲁棒性分析，对实时渲染中的视角优化有参考。",
      "src": "arXiv · cs.GR · 08-05",
      "url": "https://arxiv.org/abs/2608.04752v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "稀疏dToF传感器的稠密深度补全",
      "sum": "从稀疏直接飞行时间传感器生成稠密度量深度，提升恶劣条件下的鲁棒性。",
      "ta": "深度补全技术对实时渲染中的深度感知和特效交互有潜在应用。",
      "src": "arXiv · cs.GR · 08-05",
      "url": "https://arxiv.org/abs/2608.04737v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态高斯实现多视角面部手势动画",
      "sum": "用动态高斯重建逼真3D化身，兼顾面部细节和手部姿态。",
      "ta": "动态高斯在角色动画中的应用，对TA在角色渲染和动画管线有参考价值。",
      "src": "arXiv · cs.GR · 08-05",
      "url": "https://arxiv.org/abs/2608.04722v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "OutLangSplat：无人机户外语言高斯",
      "sum": "将开放词汇语言特征嵌入3DGS，扩展至无人机户外大规模场景理解。",
      "ta": "语言嵌入3DGS在户外场景的应用，对TA在场景理解和交互设计上有启发。",
      "src": "arXiv · cs.GR · 08-05",
      "url": "https://arxiv.org/abs/2608.04560v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "现代艺术中的不确定性量化",
      "sum": "文本生成视频模型对同一艺术品的多次生成差异被视为信号而非噪声。",
      "ta": "生成式AI的多样性分析，对TA在创意工具中的可控性设计有参考。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.04038v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "从叙事重建持久世界",
      "sum": "从叙事文本重建持久世界，用于叙事驱动的交互式体验生成。",
      "ta": "叙事驱动的世界生成，对TA在程序化内容生成和关卡设计上有潜在应用。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.04037v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "LLM个性化幻象与自我监控误导",
      "sum": "研究LLM如何虚构用户画像，并指出自我监控机制可能产生误导。",
      "ta": "AI个性化技术的局限性，对TA在AI驱动工具的用户建模有警示。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.04570"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "WorldCycle：长时程视频世界模型",
      "sum": "用自验证强化学习训练长时程视频世界模型，提升生成稳定性。",
      "ta": "视频世界模型的强化学习，对TA在动态场景模拟和特效预演有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.04964"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "HelloWorld：视频世界模型社交角色",
      "sum": "在视频世界模型中实现社交互动角色，增强交互体验的真实感。",
      "ta": "社交互动角色在视频模型中的实现，对TA在NPC行为和动画生成有启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.05070"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "UniWorld-View：大基线视图合成",
      "sum": "利用视频扩散模型实现大基线视图合成，提升视角生成的连贯性。",
      "ta": "视频扩散模型在视图合成中的应用，对TA在场景重建和虚拟拍摄有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.04701"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "SEED：AI驱动24/7社会模拟器",
      "sum": "Klang的SEED游戏用AI角色持续生活工作，即使玩家离线也塑造社会。",
      "ta": "AI NPC的持续模拟，对TA在大型开放世界中的角色行为系统有参考。",
      "src": "80 Level · 08-05",
      "url": "https://80.lv/articles/this-new-24-7-society-simulator-is-powered-by-thousands-of-ai-controlled-npcs/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Gunstoppable：速度即伤害的Roguelite",
      "sum": "CAGE Studios创始人分享移动射击游戏Gunstoppable的开发工具和设计理念。",
      "ta": "独立游戏开发工具链分享，对TA在快速原型和工具选型有参考。",
      "src": "80 Level · 08-05",
      "url": "https://80.lv/articles/gunstoppable-how-speed-is-damage-defined-a-roguelite-fps/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "博德之门3第三人称Mod体验",
      "sum": "增强版Native Camera Tweaks Mod让博德之门3以第三人称游玩。",
      "ta": "相机Mod的视角调整，对TA在相机系统和沉浸感设计上有参考。",
      "src": "80 Level · 08-05",
      "url": "https://80.lv/articles/baldur-s-gate-3-third-person-mod-makes-it-feel-like-a-different-game/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "免费Blender径向菜单插件",
      "sum": "Blender插件将常用工具组织为径向菜单，提升操作效率。",
      "ta": "工具组织优化，对TA在DCC工具中的工作流效率提升有直接帮助。",
      "src": "80 Level · 08-05",
      "url": "https://80.lv/articles/check-out-this-free-blender-add-on-for-organizing-your-tools-in-a-radial-menu/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UV Flex：Blender UV岛编辑工具",
      "sum": "AlbertoFX的UV Flex提供交互式UV岛分割、合并和重塑功能。",
      "ta": "UV编辑工具集，对TA在材质贴图和UV布局优化上有实用价值。",
      "src": "80 Level · 08-05",
      "url": "https://80.lv/articles/split-merge-reshape-uv-islands-with-this-blender-toolset/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Secret Mode开设开发工作室",
      "sum": "发行商Secret Mode成立开发工作室以支持内部项目。",
      "ta": "行业动态，对TA了解发行商内部开发方向有参考。",
      "src": "Game Developer · 08-05",
      "url": "https://www.gamedeveloper.com/business/publisher-secret-mode-opens-development-studio-to-support-internal-projects"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "King拒绝员工集体谈判协议",
      "sum": "Candy Crush开发商King拒绝员工集体谈判协议，称现有福利更优。",
      "ta": "行业劳资动态，对TA了解游戏公司内部环境有参考。",
      "src": "Game Developer · 08-05",
      "url": "https://www.gamedeveloper.com/business/candy-crush-maker-king-has-declined-staff-s-collective-bargaining-agreement"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "欧洲政策制定者被敦促支持游戏业",
      "sum": "欧洲政策制定者被呼吁加大对本地游戏产业的支持力度。",
      "ta": "行业政策动态，对TA了解区域游戏产业环境有参考。",
      "src": "Game Developer · 08-05",
      "url": "https://www.gamedeveloper.com/production/policymakers-across-europe-told-to-do-more-to-support-game-industry"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "Unreal Engine",
      "NVIDIA",
      "Blender 开发博客",
      "PlayStation Blog",
      "arXiv · cs.GR",
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：AMD GPUOpen。"
  },
  "xStale": false
};
