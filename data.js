// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月20日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>高斯泼溅超分新方案AGSR</em> / <em>视频模型驱动交互游戏世界</em> / <em>单视频重建可编辑网格场景</em>。其余按重要性自动排序，红色优先。",
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
      "title": "高斯泼溅超分新方案AGSR",
      "sum": "通过收缩投影协方差缓解高斯光栅化的带宽限制，提升3DGS细节。",
      "ta": "3DGS渲染质量优化思路，可关注其对实时新视角合成的性能影响。",
      "src": "arXiv · cs.GR · 11-19",
      "url": "https://arxiv.org/abs/2611.25934v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "视频模型驱动交互游戏世界",
      "sum": "ContextRenderer用视频生成模型渲染引擎场景，应对持续游玩中的动态条件。",
      "ta": "生成式渲染与引擎场景表示结合的探索，值得关注交互式世界模型的渲染路径。",
      "src": "arXiv · cs.GR · 11-19",
      "url": "https://arxiv.org/abs/2611.25838v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "单视频重建可编辑网格场景",
      "sum": "SceneAnything用智能体从单视频重建大规模可编辑3D网格场景。",
      "ta": "程序化场景重建的agentic思路，对关卡/场景生成工具链有参考价值。",
      "src": "arXiv · cs.GR · 11-19",
      "url": "https://arxiv.org/abs/2611.25340v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "生成视频产出可重光照高斯",
      "sum": "VideoRNG从生成视频模型得到可重光照神经高斯，突破固定烘焙外观限制。",
      "ta": "可重光照高斯资产生成，对植被/道具资产的PBR与光照管线有潜在价值。",
      "src": "arXiv · cs.GR · 11-19",
      "url": "https://arxiv.org/abs/2611.25338v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "字形SVG转紧凑高斯资产",
      "sum": "FFGaussType将字形与SVG几何前馈转换为紧凑高斯资产，用于场景内3D文字。",
      "ta": "场景内3D文字/图标的高斯化方案，速览即可。",
      "src": "arXiv · cs.GR · 11-19",
      "url": "https://arxiv.org/abs/2611.26431v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "高斯分割的体积监督",
      "sum": "提出体积监督方法改进3D高斯分割，指出掩码不等于物体本身。",
      "ta": "3DGS分割精度相关，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.21383"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多模态大模型变身世界模型",
      "sum": "WM^MLLM将多模态大模型改造为世界模型。",
      "ta": "世界模型方向，与实时渲染关联未明，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.24193"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "动作效果匹配提升世界模型",
      "sum": "通过动作效果匹配让世界模型更忠实于动态变化。",
      "ta": "世界模型动态保真度研究，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.25980"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "智能体游玩经验驱动游戏设计",
      "sum": "PlayCraft从智能体游玩经验出发设计有吸引力的游戏。",
      "ta": "AI辅助游戏设计探索，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.26624"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "巧妙的权重绘制工具",
      "sum": "展示一款改善角色形变的权重绘制工具。",
      "ta": "角色绑定/权重工作流工具，值得看其交互设计思路。",
      "src": "80 Level · 11-19",
      "url": "https://80.lv/articles/clever-weight-painting-tool-for-better-character-deformations/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender手绘蜘蛛侠风格拆解",
      "sum": "艺术家拆解蜘蛛侠平行宇宙风格手绘效果的「爆炸图层」技法。",
      "ta": "风格化材质/手绘效果参考，速览。",
      "src": "80 Level · 11-19",
      "url": "https://80.lv/articles/blender-artist-breaks-down-spider-verse-style-hand-painted-effect/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "蜘蛛侠黏墙模拟工作流",
      "sum": "展示蜘蛛侠黏墙玩具模拟并分享作者工作流。",
      "ta": "趣味模拟案例，速览。",
      "src": "80 Level · 11-19",
      "url": "https://80.lv/articles/this-spider-man-simulation-brings-back-memories-of-sticky-wall-crawler-toys/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "1-bit城市建造游戏美术解析",
      "sum": "四人独立团队谈1980年代Mac风格1-bit城市建造游戏的视觉与跨平台开发。",
      "ta": "风格化美术与独立开发经验，速览。",
      "src": "80 Level · 11-19",
      "url": "https://80.lv/articles/making-a-1980s-macintosh-style-1-bit-city-builder-set-on-a-stormy-northern-island/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "育碧加拿大裁员166人",
      "sum": "育碧在蒙特利尔与魁北克城工作室裁员166人。",
      "ta": "行业动态，速览。",
      "src": "Game Developer · 11-19",
      "url": "https://www.gamedeveloper.com/business/ubiosft-lays-off-166-in-canada"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前Take-Two CEO看好游戏AI",
      "sum": "前Take-Two CEO称西方消费者对游戏AI的接受只差一个「玩具总动员时刻」。",
      "ta": "行业AI态度风向，速览。",
      "src": "80 Level · 11-19",
      "url": "https://80.lv/articles/former-take-two-ceo-believes-attitudes-toward-ai-in-video-games-will-improve/"
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
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": ""
  },
  "xStale": false
};
