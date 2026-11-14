// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月14日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>PS5 迎来 QSSR AI 超分</em>。其余按重要性自动排序，红色优先。",
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
      "title": "PS5 迎来 QSSR AI 超分",
      "sum": "PlayStation 5 上线 Quick Spectral Super Resolution，六款游戏首批接入。",
      "ta": "主机端 AI 超分落地，值得关注其与 UE5 上采样链路的兼容与画质表现。",
      "src": "PlayStation Blog · 11-13",
      "url": "https://blog.playstation.com/2026/11/13/qssr-arrives-in-marvels-spider-man-2-control-resonant-the-finals-arc-raiders-and-hell-let-loose-vietnam/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 5.3 引入项目设置",
      "sum": "Blender 5.3 新增 Project Setup，为同一项目的 .blend 文件提供共享环境。",
      "ta": "植被/资产多文件协作或可借此统一配置，值得看共享环境如何管理路径与依赖。",
      "src": "Blender 开发博客 · 11-13",
      "url": "https://code.blender.org/2026/11/project-setup-whats-in-and-whats-next/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "视图合成模型测试时烘焙",
      "sum": "论文提出 TTB，对 decoder-only 视图合成模型做测试时烘焙以加速渲染。",
      "ta": "烘焙思路或可借鉴到实时新视图合成，关注其渲染开销与质量权衡。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.17331"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频扩散回归像素空间",
      "sum": "论文将潜空间视频扩散提升回像素空间生成。",
      "ta": "纯生成研究，与实时渲染无直接关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.17336"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "开放生成式视觉感知方案",
      "sum": "论文给出生成式视觉感知的完全开放配方。",
      "ta": "偏通用视觉感知，未涉及引擎或实时管线，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.15844"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 硬表面武器课程",
      "sum": "课程覆盖从硬表面建模到最终渲染的完整资产管线。",
      "ta": "偏美术教学，非工具或管线突破，速览即可。",
      "src": "80 Level · 11-13",
      "url": "https://80.lv/articles/master-hard-surface-weapon-creation-in-blender-with-this-course/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "AAA 模块化环境工作流课",
      "sum": "8 周课程讲解模块化环境搭建的 AAA 工作流。",
      "ta": "模块化环境思路对场景搭建有参考，但属教学内容，速览。",
      "src": "80 Level · 11-13",
      "url": "https://80.lv/articles/learn-aaa-workflows-to-create-your-own-modular-environments/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "欧盟拟限制免费游戏",
      "sum": "Digital Fairness Act 若通过，将大幅改变免费游戏的开发与发行方式。",
      "ta": "影响项目商业模式与设计约束，值得留意后续立法进展。",
      "src": "Game Developer · 11-13",
      "url": "https://www.gamedeveloper.com/business/european-union-proposes-digital-fairness-act-which-could-have-major-effects-on-game-development"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "巫师3 用 AI 复现配音",
      "sum": "配音演员中风后同意用 AI 在新资料片中重现杰洛特声音。",
      "ta": "AI 语音在 3A 制作中的合规落地案例，关注授权与流程。",
      "src": "Game Developer · 11-13",
      "url": "https://www.gamedeveloper.com/production/polish-voice-actor-for-geralt-returns-for-the-witcher-3-with-ai"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "SOMA 重定向人体动作",
      "sum": "NVIDIA SOMA Retargeter 将人体动作适配到人形机器人。",
      "ta": "机器人方向，与游戏动画管线无直接关联，速览。",
      "src": "NVIDIA · 11-13",
      "url": "https://developer.nvidia.com/blog/adapt-human-motion-for-robots-with-nvidia-soma-retargeter/"
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
