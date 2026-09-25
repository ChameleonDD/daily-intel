// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月25日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>OREO 用渲染编辑对齐 3D 生成</em> / <em>CuACD 实现全 GPU 凸分解</em> / <em>M-plicits 嵌套多尺度隐式曲面</em>。其余按重要性自动排序，红色优先。",
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
      "title": "OREO 用渲染编辑对齐 3D 生成",
      "sum": "借 2D 扩散先验在生成过程中实时渲染并编辑，提升 3D 资产视觉保真度。",
      "ta": "程序化资产生成若接入这种在线渲染-编辑回路，可减少后期手工修形，值得关注其对齐策略。",
      "src": "arXiv · cs.GR · 09-24",
      "url": "https://arxiv.org/abs/2609.29788v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CuACD 实现全 GPU 凸分解",
      "sum": "近似凸分解全程驻留 GPU，为物理模拟、碰撞检测与机器人学习做预处理。",
      "ta": "碰撞体生成是植被/道具批处理管线常客，全 GPU 化有望大幅压缩离线预处理耗时。",
      "src": "arXiv · cs.GR · 09-23",
      "url": "https://arxiv.org/abs/2609.28731v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "M-plicits 嵌套多尺度隐式曲面",
      "sum": "用嵌套多尺度残差改进正弦编码 MLP，兼顾训练效率、渲染速度与抗噪。",
      "ta": "隐式表示若能在速度与鲁棒性上同时改善，对程序化植被/地形 SDF 建模有直接参考价值。",
      "src": "arXiv · cs.GR · 09-23",
      "url": "https://arxiv.org/abs/2609.28684v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Heartian 生理感知可重光照头像",
      "sum": "为高斯头部头像加入心跳周期驱动的逐帧反照率调制，补足皮肤颜色细微变化。",
      "ta": "可重光照高斯头像的时序细节建模思路，可迁移到角色皮肤材质的动态微变化处理。",
      "src": "arXiv · cs.GR · 09-22",
      "url": "https://arxiv.org/abs/2609.28539v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "胶带贴附仿真 TAPESIM",
      "sum": "面向机器人操作的胶带剥离与贴附高效仿真，避免逐层解算粘合层。",
      "ta": "柔性条带与粘附/脱附的简化求解思路，对布料与藤蔓类植被的接触仿真有借鉴意义。",
      "src": "arXiv · cs.GR · 09-23",
      "url": "https://arxiv.org/abs/2609.28766v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型中的客体永久性训练",
      "sum": "论文探讨在世界模型中训练客体永久性，让模型维持被遮挡物体的持续表征。",
      "ta": "若世界模型能稳定维持遮挡物表征，对场景流式加载与遮挡剔除的预测式方案有潜在启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.28654"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "面向 LLM 智能体的世界模型",
      "sum": "提出 Agent-Editing World Model，重新思考 LLM 智能体所需的世界建模方式。",
      "ta": "与实时渲染无直接关联，仅作智能体工具链方向的泛读参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.28416"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 做鸣潮风格动态头发",
      "sum": "教程演示如何在 Blender 中制作鸣潮风格的动态头发效果。",
      "ta": "二次元角色动态发型的绑定与解算流程，可对照引擎内发丝方案的实现差异。",
      "src": "80 Level · 09-24",
      "url": "https://80.lv/articles/how-to-create-dynamic-wuthering-waves-style-hair-in-blender/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE 环境资产包含风格化植被",
      "sum": "Meshingun Studio 发布 UE 环境资产包，含哥特家具、亚洲寺庙场景与风格化植被等 20 余个包。",
      "ta": "风格化植被资产可直接用于搭建测试场景，验证植被工具与材质性能。",
      "src": "80 Level · 09-24",
      "url": "https://80.lv/articles/get-hundreds-of-striking-production-ready-assets-with-this-unreal-engine-environment-bundle/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "锈蚀材质先研究物理再动手",
      "sum": "Loic Anquetil 讲解用 Substance 3D Designer 制作写实锈蚀材质，强调先理解材料物理复杂性。",
      "ta": "程序化锈蚀的探索式工作流，对材质函数分层与噪声组合思路有直接参考。",
      "src": "80 Level · 09-24",
      "url": "https://80.lv/articles/desirable-patina-how-to-make-realistic-rust-in-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 复刻二维动画巴士场景",
      "sum": "3D 艺术家 Aniket Rawat 用 Blender 以延时视频形式复刻二维动画巴士场景。",
      "ta": "三渲二场景的搭建与打光流程，可速览其风格化处理手法。",
      "src": "80 Level · 09-24",
      "url": "https://80.lv/articles/watch-3d-artist-recreate-2d-anime-bus-scene-in-blender/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Meta 发布百克重 VR 眼镜",
      "sum": "Meta 公布约 100 克、售价 1300 美元的 VR 眼镜，并有多款游戏将登陆该平台。",
      "ta": "新 VR 硬件规格影响未来移动端渲染预算与注视点渲染策略，可留意其性能定位。",
      "src": "Game Developer · 09-24",
      "url": "https://www.gamedeveloper.com/business/meta-announces-new-vr-glasses-that-weigh-about-100-grams-and-cost-1-300"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "黑曜石将保留创作独立性",
      "sum": "Bethesda 总裁称黑曜石加入后领导层与创作优势将保持完整。",
      "ta": "工作室整合动向，与日常 TA 工作无直接关联，速览即可。",
      "src": "80 Level · 09-25",
      "url": "https://80.lv/articles/obsidian-will-preserve-its-creative-identity-bethesda-president-says/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "爱尔兰游戏基金增设资助通道",
      "sum": "爱尔兰游戏基金扩展为开发基金、原型基金与发行基金三条路径。",
      "ta": "区域性资金政策，与 TA 技术工作无关，仅作行业动态速览。",
      "src": "Game Developer · 09-24",
      "url": "https://www.gamedeveloper.com/business/irish-game-fund-expands-with-additional-funding-pathways"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Massive 任命新任总经理",
      "sum": "前 Avalanche Studios 负责人 Natalie Francis 将于 10 月 1 日加入 Massive Entertainment 任总经理。",
      "ta": "人事变动类行业新闻，与渲染技术无直接关联。",
      "src": "Game Developer · 09-24",
      "url": "https://www.gamedeveloper.com/business/former-avalanche-studios-chief-natalie-francis-joins-massive-entertainment-as-managing-director"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "凭记忆画国界线的免费游戏",
      "sum": "一款要求玩家凭记忆在地图上绘制国界线的免费游戏上线。",
      "ta": "独立小游戏，与 TA 技术栈无关，可忽略。",
      "src": "80 Level · 09-24",
      "url": "https://80.lv/articles/in-this-game-you-have-to-draw-border-lines-from-memory-on-a-map/"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "Unreal Engine",
      "NVIDIA",
      "PlayStation Blog",
      "AMD GPUOpen",
      "arXiv · cs.GR",
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Blender 开发博客、Tech-Artists。"
  },
  "xStale": false
};
