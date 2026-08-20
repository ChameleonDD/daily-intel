// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月20日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>音频驱动鼓手动作合成</em> / <em>稻草人转人类角色设计</em> / <em>真菌生物雕刻与纹理制作</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "tech",
      "imp": "mid",
      "title": "音频驱动鼓手动作合成",
      "sum": "新方法从音乐音频生成高精度鼓手演奏动作，兼顾高速动态与空间精度。",
      "ta": "对角色动画与程序化动作生成有参考价值，可关注其动作-音频对齐技术。",
      "src": "arXiv · cs.GR · 08-19",
      "url": "https://arxiv.org/abs/2608.19055v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "稻草人转人类角色设计",
      "sum": "Anna Cerutti 分享 Harvey 项目工作流，融合卡通比例与写实细节。",
      "ta": "角色建模与材质混合思路可借鉴，适合生物角色设计参考。",
      "src": "80 Level · 08-19",
      "url": "https://80.lv/articles/breakdown-how-to-design-a-scarecrow-turned-human-character/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "真菌生物雕刻与纹理制作",
      "sum": "Kamil Tondera 详解藤蔓树皮制作工具与手绘材质实现有机外观。",
      "ta": "植被与有机表面材质制作流程，对程序化植被工具开发有启发。",
      "src": "80 Level · 08-19",
      "url": "https://80.lv/articles/sculpting-and-texturing-a-fungal-creature-inspired-by-the-last-of-us/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 手动重拓扑工具",
      "sum": "Quad Maker 插件帮助手动重拓扑，保持模型布线干净整洁。",
      "ta": "重拓扑是 TA 常用环节，此工具可提升模型清理效率。",
      "src": "80 Level · 08-19",
      "url": "https://80.lv/articles/manually-retopologize-your-3d-meshes-with-this-blender-tool/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "Unity 无缝地牢生成算法",
      "sum": "Labyrinth 程序化生成器实现无缝地牢，提供演示可试玩。",
      "ta": "程序化生成算法可参考，对关卡自动生成工具设计有借鉴。",
      "src": "80 Level · 08-19",
      "url": "https://80.lv/articles/unity-based-algorithm-for-seamless-dungeon-generation/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "阴影驱动角色面部变化",
      "sum": "利用阴影效果让角色面部产生诡异变化，鼓励自行尝试复现。",
      "ta": "光影对角色表现力影响显著，可关注其着色器或光照技巧。",
      "src": "80 Level · 08-19",
      "url": "https://80.lv/articles/shadows-make-this-character-s-face-change-in-the-creepiest-way/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Arkane 老兵成立新工作室",
      "sum": "Harvey Smith 等 Arkane Austin 老将创立 Black Pony Immersive，专注第一人称动作 RPG。",
      "ta": "行业动向，关注其后续技术选型或沉浸式设计理念。",
      "src": "Game Developer · 08-19",
      "url": "https://www.gamedeveloper.com/business/harvey-smith-and-fellow-arkane-austin-veterans-launch-a-new-studio"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "3A 老兵成立合作制工作室",
      "sum": "Raze and Rebuild Studio 由 3A 老兵与无障碍专家创立，采用合作制结构。",
      "ta": "行业模式创新，可关注其协作流程对开发效率的影响。",
      "src": "Game Developer · 08-19",
      "url": "https://www.gamedeveloper.com/business/triple-a-vets-and-accessibility-experts-launch-new-game-dev-co-op-raze-and-rebuild-studio"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "索尼缩减地平线服务型游戏",
      "sum": "Guerrilla 据报因反馈不佳，移除 Horizon Hunters Gathering 的在线服务元素。",
      "ta": "服务型游戏趋势调整，影响在线渲染与后端技术需求。",
      "src": "Game Developer · 08-19",
      "url": "https://www.gamedeveloper.com/business/report-playstation-reworks-horizon-live-service-game-after-negative-feedback"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Human Fall Flat 老兵建新工作室",
      "sum": "Pretty Cool Games 在英国成立，已获融资并开始招聘。",
      "ta": "行业动态，关注其首款作品的技术栈选择。",
      "src": "Game Developer · 08-19",
      "url": "https://www.gamedeveloper.com/business/human-fall-flat-veterans-launch-new-uk-studio-pretty-cool-games"
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
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Blender 开发博客、HuggingFace。"
  },
  "xStale": false
};
