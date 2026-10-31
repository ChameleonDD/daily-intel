// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月31日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE EULA 开放 AI 训练授权</em> / <em>Blender 原生支持高斯泼溅</em> / <em>实时无限世界生成新方案</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "hi",
      "rank": 1,
      "title": "UE EULA 开放 AI 训练授权",
      "sum": "Epic 更新 UE 最终用户协议，开发者可自愿选择用 UE 与 MetaHuman 项目训练 AI 模型。",
      "ta": "直接关系到项目资产能否喂给模型，需确认团队合规口径与资产授权策略。",
      "src": "Unreal Engine · 10-29",
      "url": "https://www.unrealengine.com/ue-devs-can-now-choose-to-train-ai-models-on-their-projects"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "Blender 原生支持高斯泼溅",
      "sum": "Blender 开发博客介绍 Gaussian splatting 的初步实现与后续开发计划。",
      "ta": "植被/场景扫描资产进 Blender 流程多了一条路径，值得关注导入与渲染集成方式。",
      "src": "Blender 开发博客 · 10-30",
      "url": "https://code.blender.org/2026/10/splatting-the-gaussians-into-blender/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "实时无限世界生成新方案",
      "sum": "L3G-World 用隐式 3D 高斯记忆实现实时无限世界生成。",
      "ta": "与程序化场景生成思路直接相关，可看其记忆表示如何支撑实时扩展。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.40614"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "Rivian 用 UE5 做万圣节实时特效",
      "sum": "Rivian 万圣节模式用 UE5 实时 3D 呈现捉鬼敢死队角色与惊喜效果。",
      "ta": "车机端实时渲染案例，可留意其轻量化实时视觉的落地方式。",
      "src": "Unreal Engine · 10-30",
      "url": "https://www.unrealengine.com/news/rivian-brings-ghostbusters-universe-to-halloween-mode-with-real-time-visuals-in-unreal-engine"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "UE5 打造万圣节游戏光照",
      "sum": "IllFonic 谈用 UE5 光照还原 1978 Haddonfield，并构建反应式 NPC 系统。",
      "ta": "可看其 UE5 光照布设与 NPC 反应逻辑的实现取舍。",
      "src": "80 Level · 10-30",
      "url": "https://80.lv/articles/new-halloween-game-put-original-michael-myers-actor-in-a-mocap-suit/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "块注意力加速视频扩散",
      "sum": "AB-Attention 提出精确块注意力以加速视频扩散 Transformer。",
      "ta": "视频生成加速思路，对实时序列类生成管线有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.39663"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "4D 重建做视频扩散几何控制",
      "sum": "Holo4D 将整体 4D 重建作为视频扩散的几何控制条件。",
      "ta": "几何控制思路可用于可控视频/序列生成，关注其重建精度与开销。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.25276"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "像素空间生成 Transformer 分词",
      "sum": "论文提出角色耦合的分词方案，用于像素空间生成 Transformer。",
      "ta": "偏生成模型底层，速览即可，暂无明显引擎侧落点。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.40647"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Claude 被限制复刻游戏",
      "sum": "Anthropic 更新 Opus 5.5，引导 Claude Code 不再复刻他人具体游戏。",
      "ta": "用 AI 辅助写玩法/工具代码时需注意其能力边界与合规限制。",
      "src": "Game Developer · 10-30",
      "url": "https://www.gamedeveloper.com/programming/anthropic-appears-to-have-ordered-ai-tool-claude-to-stop-remaking-video-games"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "EA 关停 BioWare 转投星战",
      "sum": "报道称 EA 关闭 BioWare，将资源从质量效应转向新星战前线作品。",
      "ta": "行业资源再分配信号，关注大厂项目取舍对人才与外包流向的影响。",
      "src": "Game Developer · 10-30",
      "url": "https://www.gamedeveloper.com/business/report-ea-shut-down-bioware-in-favor-of-star-wars-battlefront-sequel-after-previously-decrying-licensed-games"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Romero 取消项目找到新发行",
      "sum": "John Romero 被 Xbox 取消的项目获新发行商接手，团队部分保留。",
      "ta": "行业动态速览，与 TA 日常无直接关联。",
      "src": "Game Developer · 10-30",
      "url": "https://www.gamedeveloper.com/business/john-romero-canceled-game-finds-a-new-publisher-amidst-an-overall-scope-change"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "暗黑风 PvP 新作将抢先体验",
      "sum": "前暴雪 CCO 的 Bonfire Studios 首作 Arkheron 十一月进入抢先体验。",
      "ta": "新项目动态速览，可留意其美术与特效风格走向。",
      "src": "80 Level · 10-30",
      "url": "https://80.lv/articles/diablo-style-pvp-by-former-blizzard-cco-is-coming-to-early-access-in-november"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ZBrush 半写实胸像流程",
      "sum": "Eric Liu 分享 ZBrush 雕刻、Substance 3D 贴图与 Marmoset 打光的胸像制作。",
      "ta": "常规角色资产流程参考，可看贴图与打光的衔接细节。",
      "src": "80 Level · 10-30",
      "url": "https://80.lv/articles/sculpting-texturing-a-semi-realistic-lobo-bust-with-zbrush-substance-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "索尼动画片晨间动作参考",
      "sum": "Daniel Ceballos 发布为索尼 GOAT 电影制作的晨间日常动画参考。",
      "ta": "动画参考素材，速览即可。",
      "src": "80 Level · 10-30",
      "url": "https://80.lv/articles/fun-morning-routine-animation-reference-for-sony-s-goat-movie/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "殡葬师开发商取消作免费玩",
      "sum": "The Mortuary Assistant 团队被取消的 Paranormal Activity 游戏现可免费游玩。",
      "ta": "恐怖品类动态速览，与 TA 工作无直接关联。",
      "src": "80 Level · 10-30",
      "url": "https://80.lv/articles/you-can-now-play-the-mortuary-assistant-dev-s-canceled-paranormal-activity-game-for-free/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "六款独立游戏共襄善举",
      "sum": "六支独立团队谈各自游戏的创意与开发决策。",
      "ta": "独立开发访谈速览，参考价值有限。",
      "src": "80 Level · 10-30",
      "url": "https://80.lv/articles/inside-six-very-different-indie-games-supporting-a-shared-cause/"
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
