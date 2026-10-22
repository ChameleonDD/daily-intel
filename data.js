// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月22日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>Substance Painter 12.2 可直接绘制烘焙笼</em> / <em>EA 关闭 BioWare</em>。其余按重要性自动排序，红色优先。",
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
      "title": "强化学习驱动肌肉角色动画",
      "sum": "RLMuscle 用强化学习自动生成肌肉激活，替代手工指定，提升形变物理真实感。",
      "ta": "角色形变管线可参考其自动肌肉激活思路，减少手工调参。",
      "src": "arXiv · cs.GR · 10-21",
      "url": "https://arxiv.org/abs/2610.30033v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "文本自动生成物理参数",
      "sum": "AutoPhyX 从文本条件自动生成物理属性参数，服务高保真 4D 物理仿真。",
      "ta": "程序化生成物理材质参数时可借鉴，免去逐场景优化。",
      "src": "arXiv · cs.GR · 10-21",
      "url": "https://arxiv.org/abs/2610.29517v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "XR 开发编码智能体基准",
      "sum": "GenXR-Bench 提出评估编码智能体构建交互式 XR 应用的基准。",
      "ta": "关注智能体在 XR 动态场景下的工程能力评测维度。",
      "src": "arXiv · cs.GR · 10-21",
      "url": "https://arxiv.org/abs/2610.29014v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "流式生成可交互3D世界",
      "sum": "WorldStream 用分层规划与持久状态，流式扩展可玩地形并恢复编辑过的场景。",
      "ta": "程序化世界生成可参考其持久状态与分层规划架构。",
      "src": "arXiv · cs.GR · 10-20",
      "url": "https://arxiv.org/abs/2610.28827v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "虚拟世界规模化训练具身智能",
      "sum": "研究在多样虚拟世界中持续预训练具身智能体，探索游戏环境规模化训练。",
      "ta": "游戏虚拟世界作为具身智能训练场的思路值得留意。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.28698"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频扩散块稀疏注意力分配",
      "sum": "提出免训练的输出导向块稀疏注意力分配，用于视频扩散 Transformer。",
      "ta": "视频扩散推理加速思路，可类比实时渲染中的稀疏计算。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.29441"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型视觉状态编码器",
      "sum": "ALPS 提出面向世界模型的视觉状态编码器。",
      "ta": "世界模型状态表征方法，与程序化生成潜在相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.30120"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "赛博朋克2077再推免费更新",
      "sum": "2.5 更新加入双持、义体定制、跨平台模组与重大渲染升级。",
      "ta": "关注其渲染升级具体改了什么，可作管线参考。",
      "src": "80 Level · 10-21",
      "url": "https://80.lv/articles/cdpr-somehow-found-another-reason-to-update-cyberpunk-2077-again-for-free/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "古墓丽影谈30年关卡设计",
      "sum": "游戏总监回顾 30 年 3D 关卡设计演变，涉及相机技术与可选引导系统。",
      "ta": "关卡与相机设计演进视角，对场景搭建有启发。",
      "src": "80 Level · 10-21",
      "url": "https://80.lv/articles/tomb-raider-director-explains-how-3d-level-design-has-evolved-over-30-years/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 1,
      "title": "Substance Painter 12.2 可直接绘制烘焙笼",
      "sum": "12.2 引入笼体绘制、更智能多边形填充、纹理集高亮与重叠透明材质实时渲染改进。",
      "ta": "烘焙笼绘制与透明材质实时渲染改进直接影响贴图烘焙与材质工作流。",
      "src": "80 Level · 10-21",
      "url": "https://80.lv/articles/substance-3d-painter-12-2-lets-artists-paint-baking-cages-directly-on-models/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 重拓扑插件打折",
      "sum": "NKZ Retopia 可在雕刻上直接绘制重拓扑，自动处理顶点与四边面网格。",
      "ta": "重拓扑自动化工具，可评估是否纳入建模流程。",
      "src": "80 Level · 10-21",
      "url": "https://80.lv/articles/get-a-20-discount-on-this-blender-add-on-for-drawing-retopology-right-on-the-sculpt/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "RPG Maker U2U 免3D做HD-2D",
      "sum": "U2U 用 P2D 地图、氛围特效与 Lua 插件，让开发者无需学 3D 构建 HD-2D 世界。",
      "ta": "HD-2D 风格化管线思路，可参考其氛围特效做法。",
      "src": "80 Level · 10-21",
      "url": "https://80.lv/articles/interview-rpg-maker-u2u-lets-you-build-hd-2d-worlds-without-learning-3d/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Houdini/C4D 风格化绘画着色器",
      "sum": "YMA Painterly 提供 12 个着色器，在 C4D 与 Houdini 中实现绘画风格化外观。",
      "ta": "风格化着色器实现思路，可借鉴到材质与 NPR 效果。",
      "src": "80 Level · 10-21",
      "url": "https://80.lv/articles/how-to-make-3d-look-like-a-stylized-painting-with-shaders-in-houdini-c4d/"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 2,
      "title": "EA 关闭 BioWare",
      "sum": "EA 关闭成立 30 年的 BioWare，裁员约 400 人，其中 50 人为其剩余员工。",
      "ta": "行业地震级工作室关闭，关注其对 3A 团队与人才流动的影响。",
      "src": "Game Developer · 10-21",
      "url": "https://www.gamedeveloper.com/business/ea-closes-mass-effect-dragon-age-creator-bioware-after-30-years-of-game-development"
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
