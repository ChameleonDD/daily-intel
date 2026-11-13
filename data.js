// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月13日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>神经渲染代理加速灯光迭代</em> / <em>Sprint3D优化图生3D管线</em> / <em>乐高积木连通性重建</em>。其余按重要性自动排序，红色优先。",
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
      "title": "神经渲染代理加速灯光迭代",
      "sum": "提出神经渲染代理，用于交互式可微光照，替代慢速离线渲染做灯光预览。",
      "ta": "灯光迭代慢是TA痛点，可关注其代理模型能否接入UE离线/预览流程。",
      "src": "arXiv · cs.GR · 11-12",
      "url": "https://arxiv.org/abs/2611.17185v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Sprint3D优化图生3D管线",
      "sum": "通过管线优化把图生3D资产生成从数分钟压缩，且不重训自有生成器。",
      "ta": "程序化资产生成提速对植被/道具批量产出有参考价值。",
      "src": "arXiv · cs.GR · 11-12",
      "url": "https://arxiv.org/abs/2611.16701v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "乐高积木连通性重建",
      "sum": "给定零件与成品图，推断各零件位姿以满足离散物理约束。",
      "ta": "离散约束重建思路可类比模块化场景拼装，但离实时管线较远。",
      "src": "arXiv · cs.GR · 11-12",
      "url": "https://arxiv.org/abs/2611.17321v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "显式对应实现视频转视频",
      "sum": "用显式对应关系做实时视频转视频，缓解固定因果窗口的长程一致性缺陷。",
      "ta": "实时视频生成的一致性问题，与Niagara/材质动态效果无直接关联，速览。",
      "src": "arXiv · cs.GR · 11-12",
      "url": "https://arxiv.org/abs/2611.17298v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "物理直觉模型预测交互",
      "sum": "提出低延迟预测物体交互结果的物理直觉模型，兼顾局部形变。",
      "ta": "低延迟物理预测或可启发破坏/交互特效，但当前偏研究阶段。",
      "src": "arXiv · cs.GR · 11-12",
      "url": "https://arxiv.org/abs/2611.16673v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "代码建世界视频来渲染",
      "sum": "探讨由代码构建世界、视频模型仅负责渲染的分工范式。",
      "ta": "世界模型分工思路值得留意，但与UE实时管线尚无可落地接口。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.16217"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "双向世界模型全双工交互",
      "sum": "提出互惠世界模型，支持全双工交互式生成。",
      "ta": "交互式生成方向，暂与TA日常工作无直接交集。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.15131"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "驾驶世界模型双视角生成",
      "sum": "联合生成透视与BEV视频的驾驶世界模型。",
      "ta": "自动驾驶场景，与游戏实时渲染关联弱，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.14815"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "神鬼寓言重启实机公开",
      "sum": "神鬼寓言重启版放出四分钟PC实机，2027年2月发售。",
      "ta": "可看其美术与特效风格，作为风格参考。",
      "src": "80 Level · 11-13",
      "url": "https://80.lv/articles/fable-reboot-shows-combat-story-in-new-four-minute-gameplay-trailer/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ZBrush写实皮肤与毛发流程",
      "sum": "分享手雕妖精夸张解剖、ZBrush写实皮肤绘制及XGen毛发切换经验。",
      "ta": "写实皮肤与grooming技巧可迁移到角色/生物资产制作。",
      "src": "80 Level · 11-13",
      "url": "https://80.lv/articles/making-the-portrait-of-a-harry-potter-inspired-goblin-with-realistic-skin-texture/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "四人团队用CC5与UE5做角色",
      "sum": "四人团队用Character Creator 5、iClone 8与UE5构建风格化角色与过场。",
      "ta": "小团队角色管线参考，关注CC5到UE5的资产流转效率。",
      "src": "80 Level · 11-12",
      "url": "https://80.lv/articles/how-unreal-game-adur-uses-stylized-3d-character-creator-for-development/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE重建刺客信条神庙场景",
      "sum": "展示模块化建筑、Substance Designer马赛克贴图与UE多时段布光流程。",
      "ta": "模块化+程序化贴图+分时布光，是环境TA可直接借鉴的完整链路。",
      "src": "80 Level · 11-12",
      "url": "https://80.lv/articles/recreating-cleopatra-s-temple-from-assassin-s-creed-origins-in-unreal-engine/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini程序化环境工作坊",
      "sum": "四小时课程讲解用Houdini、ZBrush与UE搭建风格化程序化环境。",
      "ta": "程序化环境生成正是植被/场景工具方向，可关注其Houdini到UE的落地方式。",
      "src": "80 Level · 11-12",
      "url": "https://80.lv/articles/learn-to-build-procedural-game-environments-in-houdini/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "BioWare联创谈质量效应复活成本",
      "sum": "BioWare创始人称复活质量效应需超2亿美元投入。",
      "ta": "行业成本视角，与TA技术无关，速览。",
      "src": "80 Level · 11-12",
      "url": "https://80.lv/articles/bioware-co-founder-explains-the-usd200-million-problem-with-reviving-mass-effect/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Tripwire宣布新发行后裁员",
      "sum": "Killing Floor工作室在公布新发行计划后裁员36人。",
      "ta": "行业人事动态，速览。",
      "src": "Game Developer · 11-12",
      "url": "https://www.gamedeveloper.com/business/tripwire-interactive-layoffs-come-after-announcing-new-publishing-initiative"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "开发者用GenAI主要做调研",
      "sum": "调查显示用生成式AI的开发者多用于调研与头脑风暴，AI写码排第三。",
      "ta": "反映AI在开发流程中的真实落点，可对照自身工具链。",
      "src": "Game Developer · 11-12",
      "url": "https://www.gamedeveloper.com/production/genai-using-developers-say-they-mostly-use-it-for-research-and-brainstorming-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "三分之一开发者两年内被裁",
      "sum": "行业调查称34%受访开发者近两年经历过裁员。",
      "ta": "行业景气度信号，速览。",
      "src": "Game Developer · 11-12",
      "url": "https://www.gamedeveloper.com/business/one-in-three-developers-have-been-laid-off-within-the-last-two-years"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "GDC年度行业报告发布",
      "sum": "GDC汇总2600余名从业者对裁员、AI与次世代的调查快照。",
      "ta": "宏观行业数据，可作趋势参考。",
      "src": "Game Developer · 11-12",
      "url": "https://www.gamedeveloper.com/business/layoffs-ai-and-next-gen-what-2-600-game-professionals-told-gdc-this-year"
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
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Tech-Artists。"
  },
  "xStale": false
};
