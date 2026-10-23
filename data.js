// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月23日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>Epic办AI游戏Jam赛</em> / <em>高度场高斯泼溅重建曲面</em> / <em>跨游戏实体一致生成渲染</em>。其余按重要性自动排序，红色优先。",
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
      "title": "Epic办AI游戏Jam赛",
      "sum": "2026 Epic AI MegaJam于11月12-15日举行，用UE或UEFN组队做可玩游戏赢奖金。",
      "ta": "看参赛作品能了解AI agent在UE工作流里的实际落地方式。",
      "src": "Unreal Engine · 10-22",
      "url": "https://www.unrealengine.com/news/2026-epic-ai-megajam"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高度场高斯泼溅重建曲面",
      "sum": "H-2DGS用高度场高斯泼溅做神经外科手术表面的锐利可变形重建。",
      "ta": "高度场约束2DGS的思路可借鉴到地形/植被表面的高质量重建。",
      "src": "arXiv · cs.GR · 10-22",
      "url": "https://arxiv.org/abs/2610.30910v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "跨游戏实体一致生成渲染",
      "sum": "AnyGameRenderer实现跨游戏的实体一致生成式渲染，并给出实体级基准。",
      "ta": "实体一致性是生成式渲染进游戏管线的关键卡点，值得看其评测口径。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.31466"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "HD-2D像素艺术电影化管线",
      "sum": "FF Resonance制作人谈HD-2D管线、动态镜头、精灵调整、光照与VFX。",
      "ta": "像素风下的光照与VFX处理手法，对风格化渲染有直接参考价值。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/interview-how-final-fantasy-resonance-turns-hd-2d-pixel-art-into-a-cinematic-experience/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "废弃场景自定义材质流程",
      "sum": "作者分享地中海废弃房屋场景，讲多边形分配技巧与Substance Designer自定义材质。",
      "ta": "多边形预算分配与程序化材质搭建，是环境TA的日常可复用经验。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/building-an-abandoned-the-last-of-us-inspired-mediterranean-house-with-custom-materials/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender海报散布插件",
      "sum": "G_ni发布Poster Pin与Poster Print插件，快速生成并散布墙面复古海报。",
      "ta": "散布类小工具思路可参考到植被/贴花批量布置的场景搭建流程。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/blender-add-ons-for-creating-realistic-vintage-posters-scattering-them-on-the-wall/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender做2D漫画角色",
      "sum": "Chloe Worthy用Blender将热门漫画封面角色做成3D版本。",
      "ta": "2D转3D的角色还原流程，可看其造型与材质简化取舍。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/these-2d-characters-from-popular-manga-are-made-in-3d-with-blender/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox新主机与掌机传闻",
      "sum": "报道称Xbox Helix主机价格已有估算，掌机计划2027年，另有Game Pass调整与裁员。",
      "ta": "平台周期与订阅策略变化，间接影响项目排期与目标硬件规格。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/xbox-helix-console-price-reportedly-estimated-handheld-planned-for-2027/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "被取消质量效应预告泄露",
      "sum": "BioWare已取消的质量效应项目预告片疑似泄露，曝光标题与剧情设定。",
      "ta": "纯行业八卦，对技术工作无直接参考。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/trailer-for-bioware-s-canceled-mass-effect-game-apparently-leaks-online/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "狼人内部重制思路披露",
      "sum": "Telltale创意副总裁谈《我们之中的狼》重制版如何在保留原作内核前提下提升表现。",
      "ta": "重制项目的取舍思路，可参考美术升级与保真之间的平衡。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/telltale-aims-to-make-the-wolf-among-us-remaster-shine-without-changing-the-heart-of-the-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "VR工作室转向XR新作",
      "sum": "Owlchemy Labs新作Hyper Visor将作为HTC XREAL Aura头显首发游戏。",
      "ta": "XR平台动向，关注其对渲染性能预算的额外约束。",
      "src": "Game Developer · 10-22",
      "url": "https://www.gamedeveloper.com/extended-reality/vr-pioneer-owlchemy-labs-pivots-to-xr-for-its-next-release"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "核心团队话语的代价",
      "sum": "评论文章讨论游戏开发中过度强调核心团队会如何影响流程与其他开发者。",
      "ta": "团队协作语境，与具体技术无关，速览即可。",
      "src": "Game Developer · 10-22",
      "url": "https://www.gamedeveloper.com/production/opinion-why-prioritizing-success-of-core-teams-risks-devaluing-other-devs"
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
