// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月16日 · 周一",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>实时新视角合成免逐场景优化</em> / <em>自适应四面体编码加速神经场</em> / <em>姿态驱动神经服装替代布料解算</em>。其余按重要性自动排序，红色优先。",
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
      "title": "实时新视角合成免逐场景优化",
      "sum": "DIRT 用深度补全加双频带混合，实现采集时低延迟渲染与跨场景泛化。",
      "ta": "关注其双频带混合如何压制深度补全伪影，可借鉴到实时渲染的合成管线。",
      "src": "arXiv · cs.GR · 11-13",
      "url": "https://arxiv.org/abs/2611.18340v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "自适应四面体编码加速神经场",
      "sum": "TetraCoder 用自适应四面体编码，在隐式与显式几何表示间高效转换。",
      "ta": "显隐式互转效率提升，对程序化生成资产的表示切换与烘焙有参考价值。",
      "src": "arXiv · cs.GR · 11-13",
      "url": "https://arxiv.org/abs/2611.18267v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "姿态驱动神经服装替代布料解算",
      "sum": "数据驱动方法从模拟数据学习角色服装形变，绕开慢速模拟与繁琐调参。",
      "ta": "角色布料是性能热点，可评估该方案能否替代离线解算烘焙流程。",
      "src": "arXiv · cs.GR · 11-13",
      "url": "https://arxiv.org/abs/2611.18253v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "品牌约束下的创意产品设计",
      "sum": "针对产品专属隐式约束，改进文生图在工业设计中的约束满足能力。",
      "ta": "与实时渲染无直接关系，仅作生成式设计工具面了解。",
      "src": "arXiv · cs.GR · 11-13",
      "url": "https://arxiv.org/abs/2611.17762v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "SDF 特征导向网格化秒级出模",
      "sum": "FOMOS 纯几何方法对 SDF 做特征导向网格化，数秒完成且网格质量更优。",
      "ta": "SDF 转网格提速，对程序化植被/地形资产的出模管线有直接价值。",
      "src": "arXiv · cs.GR · 11-12",
      "url": "https://arxiv.org/abs/2611.17458v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "长时程实时游戏智能体基座模型",
      "sum": "Gamer 是面向长时程实时游戏场景的通用视觉-语言-动作基础模型。",
      "ta": "关注其对实时游戏状态的理解与动作输出延迟，与引擎侧集成方式值得留意。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.18397"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "纯视频 Transformer 做像素扩散",
      "sum": "JVT 用单一视频 Transformer 简化像素空间视频扩散流程。",
      "ta": "与引擎渲染无直接关联，仅作生成模型架构动向速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.18549"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "自回归视频扩散解耦语义与运动",
      "sum": "Disen-Forcing 将语义锚定与运动分离，改进自回归视频扩散生成。",
      "ta": "偏视频生成研究，暂无实时渲染侧可落地信息。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.02822"
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
