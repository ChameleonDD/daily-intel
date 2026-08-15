// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月15日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>暗黑幻想材质合集发布</em> / <em>Blender 程序化美国市中心生成器</em> / <em>Blender 简易风格化线稿技法</em>。其余按重要性自动排序，红色优先。",
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
      "title": "暗黑幻想材质合集发布",
      "sum": "Kai Mergener 在 Substance 3D Assets 发布 15 款暗黑幻想材质，并分享技术流程。",
      "ta": "关注 Substance 3D Designer 材质构建思路，可借鉴其风格化纹理制作流程。",
      "src": "80 Level · 08-14",
      "url": "https://80.lv/articles/build-eerie-worlds-with-this-dark-fantasy-signature-collection/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 程序化美国市中心生成器",
      "sum": "一款 Blender 工具，可程序化生成美国市中心城市环境，同时保留艺术控制权。",
      "ta": "程序化城市生成思路可迁移至 UE5 植被或场景布局工具链，值得研究其控制方式。",
      "src": "80 Level · 08-14",
      "url": "https://80.lv/articles/procedural-american-downtown-generator-for-blender/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 简易风格化线稿技法",
      "sum": "Edutaker 分享一种简易风格化线稿技术，并提供免费设置下载。",
      "ta": "线稿渲染技巧可参考用于非写实风格化材质或特效边缘处理。",
      "src": "80 Level · 08-14",
      "url": "https://80.lv/articles/easy-stylized-line-art-technique-for-blender/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "影之刃零采用甄子丹武术动捕",
      "sum": "S-GAME 工作室使用甄子丹武术指导，为《影之刃零》战斗系统制作真实功夫动作捕捉。",
      "ta": "高质量武术动捕数据对战斗动画和特效同步有参考价值，可关注其动作设计流程。",
      "src": "80 Level · 08-14",
      "url": "https://80.lv/articles/phantom-blade-zero-uses-authentic-kung-fu-motion-capture/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "恶霸鲁尼精神续作Steam差评",
      "sum": "一款恶霸鲁尼精神续作在 Steam 发售，因技术问题获负面评价，部分玩家认可其独立魅力。",
      "ta": "技术问题导致差评的案例提醒 TA 在项目早期需重视性能与稳定性。",
      "src": "80 Level · 08-14",
      "url": "https://80.lv/articles/bully-spiritual-successor-launches-to-negative-reviews-on-steam/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Netflix关闭更多工作室",
      "sum": "Netflix 关闭更多游戏工作室，Twitch 承认使用生成式 AI，行业动态汇总。",
      "ta": "行业收缩信号，关注大厂对游戏部门投入变化，可能影响外包与工具生态。",
      "src": "Game Developer · 08-14",
      "url": "https://www.gamedeveloper.com/business/scabby-versus-sharma-twitch-s-genai-admission-and-netflix-shutters-more-studios-patch-notes-65"
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
