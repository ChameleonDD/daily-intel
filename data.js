// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月8日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>多人世界模型共享状态</em> / <em>UE5羽毛毛发制作</em>。其余按重要性自动排序，红色优先。",
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
      "title": "多模态生成式分词器",
      "sum": "KVAE 提出面向多模态生成模型的分词器家族。",
      "ta": "关注其 token 化方式是否可迁移到 3D 资产表征。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.05798"
    },
    {
      "cat": "ai",
      "imp": "hi",
      "rank": 1,
      "title": "多人世界模型共享状态",
      "sum": "MASS 提出多人世界模型，以权威共享状态驱动。",
      "ta": "对多人实时渲染的服务器权威状态同步有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.06257"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3D高斯选择优化",
      "sum": "GaussianSelector 用图优化实现 3DGS 中轻量物体选择。",
      "ta": "可提升 3DGS 场景编辑与交互式选择的效率。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.01492"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "MMO 盈利模式反思",
      "sum": "Bartle 谈虚拟世界起源、玩家契约与免费/付费设计。",
      "ta": "理解玩家动机有助于设计更健康的游戏内经济系统。",
      "src": "80 Level · 08-07",
      "url": "https://80.lv/articles/richard-bartle-mmo-monetization-virtual-worlds-players-express-themselves/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 2,
      "title": "UE5羽毛毛发制作",
      "sum": "Owl Harpy 项目用 XGen 与自定义毛发着色器制作羽毛。",
      "ta": "UE5 中实现柔软羽毛的着色器与灯光设置值得精读。",
      "src": "80 Level · 08-07",
      "url": "https://80.lv/articles/how-to-create-hair-and-feathers-for-an-owl-harpy-character/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "育碧免费游戏领取",
      "sum": "汤姆克兰西游戏在 Ubisoft Connect 免费但玩家反馈领取困难。",
      "ta": "行业动态速览，与 TA 工作无直接关联。",
      "src": "80 Level · 08-07",
      "url": "https://80.lv/articles/tom-clancy-s-game-is-available-for-free-on-ubisoft-connect/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 低模动画",
      "sum": "展示 Blender 制作的病毒式牛奶脸小猫低模动画。",
      "ta": "低模风格化动画的趣味案例，可快速浏览。",
      "src": "80 Level · 08-07",
      "url": "https://80.lv/articles/check-out-this-cute-blender-animation-of-the-viral-milk-face-kitten/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "猫武士游戏发布",
      "sum": "《猫武士》改编游戏今秋登陆 PC 与主机，含四族冒险。",
      "ta": "行业新作信息，与 TA 技术工作无直接关联。",
      "src": "80 Level · 08-07",
      "url": "https://80.lv/articles/warrior-cats-clans-of-the-forest-brings-novel-series-to-pc-console/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "游戏本地化要点",
      "sum": "开发者需了解与本地化团队合作以适配多语言。",
      "ta": "本地化流程与 TA 工作流无直接关联，速览即可。",
      "src": "Game Developer · 08-07",
      "url": "https://www.gamedeveloper.com/production/what-devs-need-to-know-about-localization-ft-concha-fernandez-alvarez-aurelie-perrin-and-guido-di-carlo"
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
