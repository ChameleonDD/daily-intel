// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月21日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>生成式推荐系统新范式</em> / <em>渐进式因果视频世界模型</em> / <em>Human Fall Flat 开发商推 VR 新作</em>。其余按重要性自动排序，红色优先。",
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
      "title": "生成式推荐系统新范式",
      "sum": "NVIDIA 探讨生成式推荐系统在规模化的训练挑战与重构。",
      "ta": "虽非游戏直接相关，但生成式架构思路可迁移至程序化内容推荐。",
      "src": "NVIDIA · 08-20",
      "url": "https://developer.nvidia.com/blog/how-generative-recommenders-are-redefining-recsys-at-scale/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "渐进式因果视频世界模型",
      "sum": "ForgeWM 提出少步动作条件视频世界模型的渐进式因果训练。",
      "ta": "视频世界模型进展可能影响未来实时场景生成与交互模拟。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.14022"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Human Fall Flat 开发商推 VR 新作",
      "sum": "开发商宣布一款 cozy VR 解谜游戏，风格延续轻松幽默。",
      "ta": "VR 解谜玩法或带来新的交互设计参考，但技术含量有限。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/human-fall-flat-developers-announce-a-new-cozy-vr-puzzle-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "行业动荡期入行游戏美术时机",
      "sum": "Vertex School 认为行业动荡为掌握基础与工作流的新人创造机会。",
      "ta": "对 TA 新人而言，强调工作流熟练度是入行关键信号。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/why-now-might-be-the-right-time-to-start-a-career-in-game-art/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Aura 加速 Dark and Darker 开发",
      "sum": "IRONMACE 用 Aura 让非技术设计师直接改代码，功能开发时间减半。",
      "ta": "Aura 这类工具可能改变 TA 与策划协作方式，值得关注其工作流潜力。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/how-dark-and-darker-s-devs-used-aura-to-build-a-major-feature-in-half-the-time/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前耻辱2创意总监创立新工作室",
      "sum": "Black Pony Immersive 专注单人第一人称动作 RPG，成员来自 Arkane。",
      "ta": "新工作室动向对行业人才流动有参考，但无直接技术内容。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/ex-dishonored-2-creative-director-founds-his-own-studio-with-former-arkane-devs/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "空洞骑士 Hornet 动画赏析",
      "sum": "Brad Faucheux 制作的 Hornet 动画动作流畅，2D 特效出色。",
      "ta": "2D 动画与特效结合是 TA 可借鉴的视觉表现案例。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/this-hollow-knight-s-hornet-animation-belongs-in-smash-bros/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Blender 与 3DGS 打造梦境巴士",
      "sum": "用 Blender 和 3DGS 制作巴士场景，欠训练产生有趣视觉效果。",
      "ta": "3DGS 欠训练伪影可作风格化手段，探索非写实渲染新路径。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/bus-ride-straight-out-of-dream-made-with-blender-3dgs/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Makers Fund 募资 2.5 亿美元",
      "sum": "Makers Fund 完成 2.5 亿美元融资，扩大游戏行业投资版图。",
      "ta": "资本动向影响行业生态，但对日常 TA 工作无直接指导。",
      "src": "Game Developer · 08-20",
      "url": "https://www.gamedeveloper.com/business/makers-fund-expands-game-industry-footprint-after-closing-250-million-investment-round"
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
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Blender 开发博客。"
  },
  "xStale": false
};
