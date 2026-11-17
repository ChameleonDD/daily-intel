// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月17日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>AMD FSR UE插件升级4.1.2</em> / <em>真实偏振环境贴图数据集发布</em> / <em>神经表示实测BTF材质</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "mid",
      "title": "AMD FSR UE插件升级4.1.2",
      "sum": "AMD更新UE插件，加入FSR Upscaling 4.1.2，改进帧生成与Anti-Lag 2。",
      "ta": "关注UE项目里FSR升采样版本替换后的画质与延迟表现，尤其RX6000与Ryzen平台。",
      "src": "AMD GPUOpen · 11-16",
      "url": "https://gpuopen.com/learn/amd-fsr-ue-plugin-412/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "真实偏振环境贴图数据集发布",
      "sum": "新数据集提供含偏振信息的真实环境贴图，突破传统仅RGB辐照度的限制。",
      "ta": "若未来引擎IBL支持偏振光照，这类数据是研究材质与光照真实感的前置素材。",
      "src": "arXiv · cs.GR · 11-16",
      "url": "https://arxiv.org/abs/2611.21334v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "神经表示实测BTF材质",
      "sum": "提出每材质一码的神经表示，压缩实测BTF并支持生成，保留视差与自阴影。",
      "ta": "对复杂布料/织物材质库压缩与程序化生成有参考价值，可关注其神经编码思路。",
      "src": "arXiv · cs.GR · 11-16",
      "url": "https://arxiv.org/abs/2611.20948v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3DGS轨迹渲染数据管理框架",
      "sum": "面向结构化3DGS的轨迹渲染，提出高斯图元数据管理框架以提升效率。",
      "ta": "数字孪生/自动巡检类实时漫游场景可借鉴其按需解码与数据调度策略。",
      "src": "arXiv · cs.GR · 11-16",
      "url": "https://arxiv.org/abs/2611.20546v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "智能体重网格减面修复",
      "sum": "RemeshingAgent迭代修复生成建筑网格，可激进减面至原面数0.5-1%。",
      "ta": "程序化生成资产的LOD与减面管线可参考其拓扑修复式迭代代理思路。",
      "src": "arXiv · cs.GR · 11-16",
      "url": "https://arxiv.org/abs/2611.20533v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "无人机RGB重建田间玉米",
      "sum": "用消费级无人机RGB视频经SfM与多视图立体重建田间玉米三维结构。",
      "ta": "植被方向可留意其细薄遮挡结构的重建难点与流程，非实时渲染直接相关。",
      "src": "arXiv · cs.GR · 11-16",
      "url": "https://arxiv.org/abs/2611.20502v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "三维有限域互锁平铺",
      "sum": "研究3D有限域的K面体平铺，要求原胞数量少且可实际拼接。",
      "ta": "程序化生成中的模块化拼接与平铺算法可借鉴其互锁约束思路。",
      "src": "arXiv · cs.GR · 11-16",
      "url": "https://arxiv.org/abs/2611.20401v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "高斯泼溅推断内部温度场",
      "sum": "结合可见光与热成像多视图，用高斯泼溅求解稳态热传导推断内部温度。",
      "ta": "与实时渲染关联较弱，但高斯表示承载物理场的思路值得速览。",
      "src": "arXiv · cs.GR · 11-15",
      "url": "https://arxiv.org/abs/2611.20283v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "复杂线条集和谐可视化",
      "sum": "针对科学可视化中复杂线条集，提出线条质量受控的和谐绘制方法。",
      "ta": "偏可视化美学，与游戏渲染管线关系不大，速览即可。",
      "src": "arXiv · cs.GR · 11-15",
      "url": "https://arxiv.org/abs/2611.20190v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "轻量开放词汇3D高斯分割",
      "sum": "提出查询式3D分割器，减少高斯泼溅开放词汇理解中的预处理与训练开销。",
      "ta": "若做场景语义标注或工具链自动化，可关注其轻量化分割流程。",
      "src": "arXiv · cs.GR · 11-14",
      "url": "https://arxiv.org/abs/2611.19429v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "阻抗作为动作空间的运动模仿",
      "sum": "以学习到的阻抗作为动作空间，实现力准确的物理运动模仿。",
      "ta": "偏角色物理动画研究，与植被/特效管线无直接关系，速览。",
      "src": "arXiv · cs.GR · 11-14",
      "url": "https://arxiv.org/abs/2611.19153v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender蜘蛛网生成器",
      "sum": "一款可完全自定义、轻量的Blender有机蛛网生成工具。",
      "ta": "环境装饰类程序化小工具，可作植被/场景点缀的快速参考。",
      "src": "80 Level · 11-16",
      "url": "https://80.lv/articles/create-gross-organic-webs-with-this-blender-generator/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "逃离塔科夫终局地图制作揭秘",
      "sum": "Battlestate谈新地图低光照环境搭建与角色动画制作的挑战。",
      "ta": "低光照场景布光与动画流程的一手经验，值得看其技术取舍。",
      "src": "80 Level · 11-16",
      "url": "https://80.lv/articles/full-circle-building-terminal-escape-from-tarkov-s-final-location/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "纽约模块化环境资产包",
      "sum": "Leartes Studios推出含褐石公寓与砖砌店面的纽约风模块化资产包。",
      "ta": "模块化场景搭建的资产组织参考，速览。",
      "src": "80 Level · 11-16",
      "url": "https://80.lv/articles/build-atmospheric-cinematic-new-york-city-environments-with-this-modular-pack/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Xbox预告Project Helix主机",
      "sum": "Xbox透露新主机代号Helix，称可运行PC游戏，但细节仍模糊。",
      "ta": "若主机兼容PC游戏，跨平台渲染与性能分级策略可能受影响，值得关注。",
      "src": "Game Developer · 11-16",
      "url": "https://www.gamedeveloper.com/console/new-xbox-codenamed-helix-gets-a-few-new-details"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Unity推出独立开发者资助计划",
      "sum": "Unity新 fellowship 计划选10名开发者各获5万美元及资源支持。",
      "ta": "行业生态信息，与TA日常工作无直接关联，速览。",
      "src": "Game Developer · 11-16",
      "url": "https://www.gamedeveloper.com/business/unity-to-support-indies-with-cash-and-dedicated-support-through-new-fellowship-program"
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
