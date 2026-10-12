// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月12日 · 周一",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>3DGS场景可动水面动画</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "hi",
      "rank": 1,
      "title": "3DGS场景可动水面动画",
      "sum": "新方法让3D高斯泼溅静态场景支持动态水面流动动画。",
      "ta": "3DGS动态化是实时渲染热点，植被/流体TA可关注其运动合成思路。",
      "src": "arXiv · cs.GR · 10-09",
      "url": "https://arxiv.org/abs/2610.13860v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3DGS置信度感知致密化",
      "sum": "提出置信度感知的致密化策略，改进3DGS-MCMC固定预算下的重建。",
      "ta": "致密化控制直接影响高斯数量与性能，值得关注其预算分配逻辑。",
      "src": "arXiv · cs.GR · 10-09",
      "url": "https://arxiv.org/abs/2610.13541v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3DGS二次型交互剪枝",
      "sum": "SplatQ用二次选择实现交互感知剪枝，兼顾区域预算与联合删除。",
      "ta": "剪枝是3DGS性能优化关键，区域预算控制思路可借鉴到资产优化。",
      "src": "arXiv · cs.GR · 10-09",
      "url": "https://arxiv.org/abs/2610.13503v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3DGS混合分层光线追踪",
      "sum": "提出混合分层光追方法，为3DGS实现二次光照与景深效果。",
      "ta": "光追3DGS可支持二次光照，对实时渲染管线集成有参考价值。",
      "src": "arXiv · cs.GR · 10-09",
      "url": "https://arxiv.org/abs/2610.13498v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "空间音频流式动作生成",
      "sum": "Sonic-AMG从空间音频流式生成人体动作，模拟实时反应。",
      "ta": "音频驱动动作生成，可关注其在游戏角色实时动画中的潜力。",
      "src": "arXiv · cs.GR · 10-09",
      "url": "https://arxiv.org/abs/2610.13300v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "3D原生拖拽编辑物体",
      "sum": "3DRAG实现3D原生点拖拽编辑，摆脱慢速2D扩散先验。",
      "ta": "3D资产交互编辑提速，对程序化生成与关卡编辑工具有启发。",
      "src": "arXiv · cs.GR · 10-09",
      "url": "https://arxiv.org/abs/2610.13216v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "优先化人形动作重定向",
      "sum": "PriMoRetarget用优先化重定向处理多角色多物体交互动作迁移。",
      "ta": "多接触动作重定向，对角色动画管线与物理交互有参考。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.12642v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型强化学习框架",
      "sum": "DiffusionART提出高效稳定的扩散模型强化方法。",
      "ta": "扩散模型训练优化，与3D生成/材质生成间接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12572"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散语言模型免校准量化",
      "sum": "SoloQ为扩散语言模型提供免校准量化方案。",
      "ta": "量化技术偏LLM，与实时渲染关联弱，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.07121"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "游戏智能体启发式学习评测",
      "sum": "在长时游戏智能体竞赛中评测启发式学习效果。",
      "ta": "游戏AI智能体研究，与TA工具链关联有限。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12341"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型递归自改进",
      "sum": "RSI-Anything用世界模型实现递归自我改进。",
      "ta": "世界模型自改进，与游戏AI/生成间接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.13912"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "表征引导像素扩散Transformer",
      "sum": "学习表征以引导像素扩散Transformer生成。",
      "ta": "扩散生成质量优化，与材质/贴图生成间接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12978"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "物理合理铰接3D资产管线",
      "sum": "提出多智能体管线与基准，生成物理合理的铰接3D资产。",
      "ta": "铰接资产生成对道具/机械类3D资产制作流程有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.13947"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "激活波分析加速推测解码",
      "sum": "分析LLM隐状态信息与几何以优化推测解码。",
      "ta": "LLM推理加速，与实时渲染无直接关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12939"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "潜空间语义压缩奖励建模",
      "sum": "在潜空间用语义保持压缩做高效生成式奖励建模。",
      "ta": "奖励建模偏LLM训练，与TA工作流关联弱。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.09788"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender泳池VFX病毒短片",
      "sum": "BrutalDuck用Blender、Omniscient App与AE制作病毒泳池VFX。",
      "ta": "VFX拆解可看Blender+AE合成流程，对特效制作有参考。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/this-viral-pool-clip-was-made-using-blender-omniscient-app-after-effects/"
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
