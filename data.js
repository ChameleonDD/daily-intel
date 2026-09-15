// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月15日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>NVIDIA 加速 JAX 无丢弃 MoE 训练</em> / <em>《漫威金刚狼》9月15日发售</em> / <em>Vidu S2 实时可编辑空间视频生成</em>。其余按重要性自动排序，红色优先。",
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
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Valve Steam Frame 售价 1059 美元起",
      "sum": "Valve 公布 Steam Frame 头显定价 1059 美元起，并推出面向 VR 开发者的开发套件。",
      "ta": "新 VR 硬件与开发套件，关注其对 VR 内容性能预算与渲染目标的影响。",
      "src": "Game Developer · 09-14",
      "url": "https://www.gamedeveloper.com/extended-reality/valve-s-steam-frame-will-retail-for-1-059"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "《Moss》开发商 Polyarc 关闭",
      "sum": "西雅图 VR 工作室 Polyarc 在运营十余年后关闭。",
      "ta": "VR 工作室关停，反映 VR 内容市场现状，值得关注。",
      "src": "Game Developer · 09-14",
      "url": "https://www.gamedeveloper.com/business/moss-developer-polyarc-has-shut-down"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "KO_OP 确认裁员 13 人",
      "sum": "工人自治工作室 KO_OP 确认裁撤 13 个岗位。",
      "ta": "行业裁员消息，速览。",
      "src": "Game Developer · 09-14",
      "url": "https://www.gamedeveloper.com/business/worker-owned-studio-ko_op-confirms-layoffs"
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
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：arXiv · cs.GR。"
  },
  "xStale": false
};
