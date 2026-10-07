// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月7日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>白水求解器基于Wētā研究开源</em> / <em>UE插件实现实时光影绘制</em>。其余按重要性自动排序，红色优先。",
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
      "title": "RGA 2.15支持源码到ISA关联",
      "sum": "AMD Radeon GPU Analyzer 2.15可将预编译GPU代码对象关联回源码行，便于ISA分析优化。",
      "ta": "做Shader性能调优时，能直接定位到具体源码行对应的ISA指令，省去盲猜汇编的功夫。",
      "src": "AMD GPUOpen · 10-06",
      "url": "https://gpuopen.com/learn/rga-source-to-isa-correlation-gpu-code-objects/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "4D手物交互前馈重建框架",
      "sum": "4D-HOF用前馈流匹配重建4D手物交互，避免逐序列优化和随机噪声生成的不稳定。",
      "ta": "若做角色手部与道具交互动画，这种前馈重建思路可参考，但离实时管线还有距离。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.08782v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "扩散风格化支持局部控制",
      "sum": "该工作解耦内容与风格两个条件权重，实现区域级的图像风格化控制。",
      "ta": "做材质贴图风格化时，区域级控制比全局风格迁移更实用，可关注其条件解耦方式。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.08704v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "点基变形混合做面部重定向",
      "sum": "PDB用点基变形混合实现跨网格面部动画重定向，减少表面伪影。",
      "ta": "面部重定向若走点云混合而非拓扑依赖，可跨不同网格复用表情动画，值得看其抗伪影策略。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.08672v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "关键帧引导3D高斯文本编辑",
      "sum": "该工作区分不同渲染视角的编辑可靠性，用关键帧引导文本驱动的3D高斯编辑。",
      "ta": "3D高斯编辑若按视角质量加权监督，能减少劣质视角带来的编辑噪声，思路可迁移到场景编辑工具。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.08179v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "超声可微渲染做形状优化",
      "sum": "UltraDiff将可微渲染范式扩展到医学超声，通过匹配渲染图像优化场景参数。",
      "ta": "与游戏渲染无关，但可微渲染从光传输扩展到其他成像模态的思路可作方法论参考。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.07941v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "潜扩散做高保真形变仿真",
      "sum": "PhysLDM用潜扩散模型做高分辨率体积网格的长时程形变仿真，缓解误差累积。",
      "ta": "若做布料/软体离线仿真或ML变形器，其长时程预测的误差控制策略值得关注。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.07609v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "仿真中递归自改进扩具身数据",
      "sum": "EmbodiedSmith在仿真中通过递归自改进飞轮扩展具身智能训练数据。",
      "ta": "与游戏TA无直接关联，仅作具身数据生成范式的速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.07969"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Web世界模型抗提示注入训练",
      "sum": "AdvSim2Real在Web世界模型中用自适应提示注入训练Web智能体。",
      "ta": "与游戏/渲染无关，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.08773"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型自适应潜容量",
      "sum": "该工作为世界模型引入自适应潜容量机制。",
      "ta": "若关注世界模型架构，可速览其潜容量调度思路，但与当前TA工作无直接交集。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.32921"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型物理能力终考",
      "sum": "该工作提出针对世界模型物理理解能力的评测基准。",
      "ta": "可作世界模型物理常识的评测参考，与实时渲染管线无直接关系。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.08791"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "世界规模由移动速度与密度决定",
      "sum": "资深世界设计师Nathan Cheever指出，移动速度、遭遇密度、可复用空间与产能决定世界该多大。",
      "ta": "做程序化植被/地形工具时，世界尺度应服从玩法节奏与产能，而非盲目求大。",
      "src": "80 Level · 10-06",
      "url": "https://80.lv/articles/veteran-game-world-designer-explains-why-bigger-game-worlds-aren-t-always-better/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "恐龙腿部肌肉仿真获导演认可",
      "sum": "一段恐龙腿部肌肉仿真作品获得Guillermo del Toro的公开认可。",
      "ta": "可速览其肌肉形变表现，作为生物动画参考。",
      "src": "80 Level · 10-06",
      "url": "https://80.lv/articles/dinosaur-leg-muscle-simulation-gets-guillermo-del-toro-s-approval/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "title": "白水求解器基于Wētā研究开源",
      "sum": "VFX艺术家Alexander Vasilenko发布Guided Bubbles & Wet Foam Solver，基于Wētā研究改善气泡与泡沫运动。",
      "ta": "做Niagara流体/白水特效时，这套气泡引导与湿泡沫求解思路可直接借鉴，是难得的公开实现。",
      "src": "80 Level · 10-06",
      "url": "https://80.lv/articles/vfx-artist-shared-advanced-whitewater-solver-based-on-w-t-s-research/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Fate角色3D化流程分享",
      "sum": "Sarah Paiva分享BJD娃娃风格Saber的3D制作，含基础形塑与金色材质处理。",
      "ta": "可速览其金属材质处理手法，作为角色材质参考。",
      "src": "80 Level · 10-06",
      "url": "https://80.lv/articles/how-to-recreate-saber-from-type-moon-s-fate-stay-night-in-3d/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender程序化飞虫群教程",
      "sum": "教程演示如何在Blender中制作程序化飞虫群。",
      "ta": "程序化群集思路可迁移到UE植被/昆虫工具，作为散布与动画逻辑参考。",
      "src": "80 Level · 10-06",
      "url": "https://80.lv/articles/3d-artist-shows-how-to-make-procedural-fly-swarm-in-blender/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender雨伞建模绑定教程",
      "sum": "PIXXO 3D发布Blender雨伞建模与绑定全流程视频教程。",
      "ta": "基础绑定教程，速览即可。",
      "src": "80 Level · 10-06",
      "url": "https://80.lv/articles/tutorial-how-to-model-rig-umbrella-in-blender/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "title": "UE插件实现实时光影绘制",
      "sum": "高级灯光师Karim Yasser开发了Unreal Engine实时光影绘制插件（WIP）。",
      "ta": "若做场景灯光工具，这种在引擎内直接绘制光影的交互方式值得关注其实现路径。",
      "src": "80 Level · 10-06",
      "url": "https://80.lv/articles/artist-develops-unreal-engine-plug-in-for-real-time-light-shadow-painting/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender界面自定义工具",
      "sum": "Vision Canvas可一次性配置Blender控制面板，避免反复查找常用工具。",
      "ta": "提升DCC操作效率的小工具，速览即可。",
      "src": "80 Level · 10-06",
      "url": "https://80.lv/articles/build-your-perfect-blender-interface/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "二手PS5 Pro溢价66%出售",
      "sum": "GameStop等零售商以高于MSRP 66%的价格出售二手PS5 Pro。",
      "ta": "硬件市场行情，与TA工作无直接关系。",
      "src": "Game Developer · 10-06",
      "url": "https://www.gamedeveloper.com/console/gamestop-other-retailers-to-sell-used-playstation-5-pro-units-for-66-percent-over-msrp"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "工作室称裁员沟通过于透明",
      "sum": "Unlead Labs工作室负责人称在裁员准备中对员工'不负责任地透明'。",
      "ta": "行业管理八卦，速览即可。",
      "src": "Game Developer · 10-06",
      "url": "https://www.gamedeveloper.com/business/unlead-labs-studio-head-says-they-were-irresponsibly-transparent-in-preparing-staff-for-layoffs"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "合作开发助Backrooms破400万",
      "sum": "Blackbird Interactive与Secret Mode通过合作开发帮助Escape the Backrooms达到超400万玩家。",
      "ta": "合作开发案例，可速览其分工模式。",
      "src": "Game Developer · 10-06",
      "url": "https://www.gamedeveloper.com/production/co-dev-case-study-how-blackbird-interactive-and-secret-mode-helped-escape-the-backrooms-ride-the-backrooms-hype-wave"
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
