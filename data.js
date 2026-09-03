// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月3日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>3DGS前馈重光照新法</em> / <em>鬼武者动捕怪物动画</em>。其余按重要性自动排序，红色优先。",
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
      "title": "投影仿射刚体动力学",
      "sum": "提出多体系统投影仿射动力学方法，处理非光滑交互与复杂约束。",
      "ta": "关注其约束求解与稳定性，或可借鉴到植被/布料等程序化物理模拟。",
      "src": "arXiv · cs.GR · 09-02",
      "url": "https://arxiv.org/abs/2609.02675v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "3DGS前馈重光照新法",
      "sum": "LightBridge实现3D高斯泼溅的生成式前馈重光照，无需逐场景逆渲染。",
      "ta": "直接关系3DGS资产可编辑性，是TA评估重光照工作流的重要参考。",
      "src": "arXiv · cs.GR · 09-02",
      "url": "https://arxiv.org/abs/2609.02543v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "文本驱动图形诗生成",
      "sum": "Telligram用扩散引导骨架优化，从纯文本生成紧凑图形诗。",
      "ta": "文本驱动字形布局思路，或可启发程序化纹理与装饰图案生成。",
      "src": "arXiv · cs.GR · 09-02",
      "url": "https://arxiv.org/abs/2609.02511v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "多轴3D打印鲁棒处理",
      "sum": "WildFab处理含实体-壳组合及非流形结构的真实世界模型。",
      "ta": "非流形几何处理思路，对DCC工具链中网格修复有参考价值。",
      "src": "arXiv · cs.GR · 09-02",
      "url": "https://arxiv.org/abs/2609.02413v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "统一动作重定向至人形",
      "sum": "利用点云对应学习，将人类动作统一重定向到不同人形机器人。",
      "ta": "跨形态动作迁移方法，或可用于多角色动画系统与程序化绑定。",
      "src": "arXiv · cs.GR · 09-02",
      "url": "https://arxiv.org/abs/2609.02134v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "长时程视频世界模型",
      "sum": "SolarWM开放数据与可扩展训练，用于长时程视频世界模型。",
      "ta": "世界模型进展或影响未来实时场景生成与游戏AI预测。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.02886"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "野外视频生成动物动作",
      "sum": "Kirin从野外视频生成动物运动，无需专门动捕设备。",
      "ta": "动物动作生成新数据源，或可辅助游戏内非人形角色动画。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.01823"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Nexus收购SteamDB",
      "sum": "Nexus Mods所有者收购SteamDB，计划利用版本历史识别不兼容模组。",
      "ta": "模组生态数据整合，影响游戏更新对玩家模组兼容性管理。",
      "src": "80 Level · 09-02",
      "url": "https://80.lv/articles/nexus-mods-owner-acquires-steamdb-after-co-founder-struggled-with-burnout/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender模型防御插件",
      "sum": "新Blender插件让模型遭受随机攻击，增加工作流趣味性。",
      "ta": "趣味性插件，展示Blender生态创意，非核心生产工具。",
      "src": "80 Level · 09-02",
      "url": "https://80.lv/articles/this-blender-add-on-makes-you-defend-your-model-from-random-attacks/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动森启发六边形球体",
      "sum": "利用《动物森友会》启发技巧构建六边形球体，附Shader展示。",
      "ta": "六边形球体Shader技巧，对风格化植被与几何体生成有借鉴。",
      "src": "80 Level · 09-02",
      "url": "https://80.lv/articles/building-hexagon-sphere-using-animal-crossing-inspired-trick/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 2,
      "title": "鬼武者动捕怪物动画",
      "sum": "CAPCOM分享《鬼武者》多臂怪物动捕动画制作流程。",
      "ta": "多臂怪物动捕与重定向案例，对非人形角色动画管线有直接参考。",
      "src": "80 Level · 09-02",
      "url": "https://80.lv/articles/how-onimusha-way-of-the-sword-s-team-used-motion-capture-for-animating-monsters/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "2.5D视差动画幕后",
      "sum": "Guillaume Scoffié展示音乐艺术家2.5D视差动画制作视口。",
      "ta": "2.5D视差动画工作流，对风格化过场与UI特效有启发。",
      "src": "80 Level · 09-02",
      "url": "https://80.lv/articles/inside-the-making-of-2-5d-parallax-animation-for-music-artist/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "PSX风格恐怖海水",
      "sum": "为DREDGE类恐怖游戏制作PSX风格海水，氛围出色。",
      "ta": "PSX风格水体Shader案例，对低多边形恐怖游戏视觉有参考。",
      "src": "80 Level · 09-02",
      "url": "https://80.lv/articles/beautiful-psx-style-water-for-dredge-like-game-but-scarier/"
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
