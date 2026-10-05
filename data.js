// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月5日 · 周一",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>城市级高斯泼溅实时化</em>。其余按重要性自动排序，红色优先。",
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
      "title": "城市级高斯泼溅实时化",
      "sum": "Budgeted-GS 通过分解 LOD 实现大规模高斯泼溅的实时渲染，解决百万级图元显存瓶颈。",
      "ta": "关注其 LOD 分解策略，可迁移到植被海量实例的实时渲染与显存预算控制。",
      "src": "arXiv · cs.GR · 10-02",
      "url": "https://arxiv.org/abs/2610.03162v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "矢量图形可微渲染闭式解",
      "sum": "Windfoil 用闭式求解二次贝塞尔轮廓的盒滤波环绕数，在 WebGPU 上统一光栅化与可微矢量图形。",
      "ta": "闭式环绕数算法对 UI/图标类矢量渲染与可微管线有参考价值。",
      "src": "arXiv · cs.GR · 10-01",
      "url": "https://arxiv.org/abs/2610.02468v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "冻结DiT的外观几何解耦",
      "sum": "DAGS 对冻结的图像 DiT 做无注意力解耦式外观与几何引导，实现时序稳定的生成式渲染。",
      "ta": "时序稳定性方案可参考用于生成式贴图或程序化材质的帧间一致控制。",
      "src": "arXiv · cs.GR · 10-01",
      "url": "https://arxiv.org/abs/2610.02567v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "动态场景逆图形基准",
      "sum": "4DCodeBench 让智能体从视频重建动态场景为可执行图形程序，评测逆图形能力。",
      "ta": "可关注其程序化表示思路，对场景重建与程序化生成的自动化流程有启发。",
      "src": "arXiv · cs.GR · 10-02",
      "url": "https://arxiv.org/abs/2610.03715v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "长程部件级3D编辑基准",
      "sum": "EditHero 提出首个长程、部件级 3D 编辑基准，要求每次修改不影响其余部分。",
      "ta": "部件级编辑的约束评测对资产迭代工作流的自动化质检有参考意义。",
      "src": "arXiv · cs.GR · 10-01",
      "url": "https://arxiv.org/abs/2610.02298v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "语音驱动面部协同发音度量",
      "sum": "提出唇部路径长度等几何度量，量化语音驱动 3D 面部动画中的协同发音轨迹。",
      "ta": "面部动画质量度量思路可借鉴到口型驱动的效果评估。",
      "src": "arXiv · cs.GR · 10-02",
      "url": "https://arxiv.org/abs/2610.03436v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "空间锚定手势生成基准",
      "sum": "提出评测生成手势是否指向环境中正确指称物的基准框架。",
      "ta": "与游戏内 NPC 手势/指向动画的自动生成评测相关。",
      "src": "arXiv · cs.GR · 10-02",
      "url": "https://arxiv.org/abs/2610.03105v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时交互视听世界模型",
      "sum": "HelixWorld 提出实时交互的音频-视觉世界模型。",
      "ta": "世界模型方向可关注，但与当前渲染管线落地距离较远。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.38123"
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
