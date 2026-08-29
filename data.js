// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月29日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>Epic 八月学习内容发布</em> / <em>Tripo 攻克 3D 资产拓扑</em> / <em>EditaLive 实时角色视频编辑</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "flow",
      "imp": "mid",
      "title": "Epic 八月学习内容发布",
      "sum": "Epic 发布免费学习内容，涵盖网络物理、Mesh Terrain、项目优化与材质创建。",
      "ta": "Mesh Terrain 与材质工作流是 TA 日常，可快速获取官方最新实践。",
      "src": "Unreal Engine · 08-28",
      "url": "https://www.unrealengine.com/learning/augusts-epic-learning-content-networked-physics-dynamic-audio-and-more"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Tripo 攻克 3D 资产拓扑",
      "sum": "Tripo 推出 Smart Mesh，数秒生成可用拓扑，增强艺术家对生成资产的控制。",
      "ta": "生成式 3D 资产若具备干净拓扑，可直接进入 DCC 管线，减少重拓扑工作量。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/how-tripo-is-tackling-clean-topology-for-its-3d-asset-pipeline/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "EditaLive 实时角色视频编辑",
      "sum": "论文提出 EditaLive，用于直播场景的统一角色视频编辑方法。",
      "ta": "实时角色编辑若用于虚拟制片或直播，可能影响 TA 的实时渲染管线设计。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.27123"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Mistfall Hunter 融合魂系与撤离玩法",
      "sum": "Bellring Games 谈魂系战斗与撤离机制结合，及北欧废墟美术风格设计。",
      "ta": "PvPvE 可读性设计对 TA 的视觉引导与特效表现有参考价值。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/interview-how-mistfall-hunter-blends-soulslike-combat-with-dark-fantasy-rpg-extraction-mechanics/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Fable 展示风格化战斗系统",
      "sum": "Fable 新演示聚焦风格化战斗，强调玩家自定义英雄与技能组合。",
      "ta": "风格化战斗的视觉反馈设计，可关注其特效与动画的配合方式。",
      "src": "PlayStation Blog · 08-28",
      "url": "https://blog.playstation.com/2026/08/28/a-new-look-at-fables-style-weaving-combat/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Godot 4.8 开发新特性",
      "sum": "Godot 4.8 新增3D轨迹节点、VisualShader节点组、多反弹AO等。",
      "ta": "关注引擎进展，多反弹AO和VisualShader节点组对TA工具链有参考。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/godot-4-8-development-is-in-full-swing/",
      "flashback": true
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "星战新作采用UE5开发",
      "sum": "Bit Reactor技术总监谈为何选择UE5及开发中亮点功能。",
      "ta": "了解3A战术游戏在UE5中的技术选型与管线实践。",
      "src": "Unreal Engine · 08-25",
      "url": "https://www.unrealengine.com/developer-interviews/star-wars-zero-company-bit-reactor-crafts-a-galaxy-of-tactical-possibilities-with-ue5",
      "flashback": true
    }
  ],
  "flashbackTitle": "今天的刷完了，来回顾下前几天的",
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
