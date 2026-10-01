// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月1日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE5.8 MCP服务器与AnimGen实验</em>。其余按重要性自动排序，红色优先。",
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
      "title": "UE5.8 MCP服务器与AnimGen实验",
      "sum": "Epic九月学习内容涵盖UE 5.8的MCP服务器与全新实验性AnimGen工作流。",
      "ta": "MCP服务器可能改变TA与引擎交互方式，AnimGen实验流程值得提前评估。",
      "src": "Unreal Engine · 09-30",
      "url": "https://www.unrealengine.com/learning/septembers-epic-learning-content-metahumans-physics-animation-and-more"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "RSIGame递归自改进做游戏",
      "sum": "提出用递归自我改进的自主智能体完成游戏开发流程。",
      "ta": "可关注其自动化管线思路，是否可用于TA工具链的脚本生成。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.39045"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "A2Z基准测编码智能体做游戏",
      "sum": "新基准评估编码智能体从游戏设计规格生成游戏的忠实度。",
      "ta": "可了解AI生成游戏原型的当前上限，评估对工具链的参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.39564"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "自博弈游戏引导技能发现",
      "sum": "通过自博弈实现可玩智能体控制的游戏引导技能发现方法。",
      "ta": "偏AI研究，与TA日常工作关联弱，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.40137"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Physis-Lang自演化物理表征",
      "sum": "提出自演化语言作为视频世界模型的物理表征方法。",
      "ta": "与实时渲染管线暂无直接关联，可略过。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.40358"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "中文文本渲染部首分解奖励",
      "sum": "通过分解部首再奖励的细粒度检查提升中文文本渲染准确度。",
      "ta": "若涉及游戏内UI文字生成可留意，否则关联有限。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.37569"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "DC-SAE加速扩散收敛",
      "sum": "提出深度压缩语义自编码器以加速扩散模型收敛。",
      "ta": "纯AI方法，与实时渲染无直接关系，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.39222"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "古森林石墙浮雕制作解析",
      "sum": "Ilya Oskanyan分享Heart of the Forest项目中自然浮雕资产的省时制作流程。",
      "ta": "可参考其焦距选择与浮雕雕刻流程，对植被环境资产制作有借鉴。",
      "src": "80 Level · 09-30",
      "url": "https://80.lv/articles/sculpting-nature-inspired-bas-reliefs-on-a-stone-wall-in-a-moody-ancient-forest-environment/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender蜡笔新增形态键",
      "sum": "Mumu Mundo在角色绑定上测试Blender Grease Pencil新形态键功能。",
      "ta": "若涉及2D动画与绑定流程，可关注形态键在蜡笔工具中的实际表现。",
      "src": "80 Level · 09-30",
      "url": "https://80.lv/articles/the-long-awaited-shape-keys-for-blender-s-grease-pencil-tested-on-a-character-rig/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "007 First Light的VFX与世界观",
      "sum": "IO Interactive开发者分享007 First Light的世界、角色、场景与VFX制作。",
      "ta": "可参考其VFX与场景美术实现，了解3A级项目的美术管线。",
      "src": "80 Level · 09-30",
      "url": "https://80.lv/articles/insighful-look-at-007-first-light-s-world-characters-concent-vfx/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "四色漫画风3D动作游戏",
      "sum": "Kenji Ma展示仅用四种颜色的漫画风格3D动作游戏，角色以画笔泼墨战场。",
      "ta": "可看其极简配色下的风格化渲染实现思路。",
      "src": "80 Level · 09-30",
      "url": "https://80.lv/articles/check-out-this-comic-book-style-game-with-only-four-colors-used/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS Plus十月会免公布",
      "sum": "十月PS Plus月度游戏为F1 25、Hunt: Showdown 1896与地球防卫军World Brothers 2。",
      "ta": "行业动态速览，与TA工作无直接关联。",
      "src": "PlayStation Blog · 09-30",
      "url": "https://blog.playstation.com/2026/09/30/playstation-plus-monthly-games-for-october-f1-25-hunt-showdown-1896-earth-defense-force-world-brothers-2/"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "Unreal Engine",
      "NVIDIA",
      "PlayStation Blog",
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Blender 开发博客、AMD GPUOpen、arXiv · cs.GR、Tech-Artists。"
  },
  "xStale": false
};
