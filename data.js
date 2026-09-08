// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月8日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>开源贴图神器发布</em> / <em>Blender顶点吸附工具</em> / <em>程序化风格天空生成器</em>。其余按重要性自动排序，红色优先。",
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
      "title": "开源贴图神器发布",
      "sum": "开源 Substance 3D Painter 替代品 ArmorPaint 1.0 发布，体积极小。",
      "ta": "可作为轻量级贴图工具，适合快速迭代或原型验证，关注其功能覆盖度。",
      "src": "80 Level · 09-07",
      "url": "https://80.lv/articles/open-source-substance-3d-painter-alternative-armorpaint-1-0-released/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender顶点吸附工具",
      "sum": "免费一键式 Blender 工具，可将顶点吸附至最近表面，修复网格穿插。",
      "ta": "程序化生成或手工建模时，可快速修复植被与地形穿插问题，提升效率。",
      "src": "80 Level · 09-07",
      "url": "https://80.lv/articles/free-one-click-blender-tool-to-snap-vertices-to-nearest-surface/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "程序化风格天空生成器",
      "sum": "Blender 全程序化风格化天空生成器发布，支持一键生成、动画与导出。",
      "ta": "风格化场景开发中可快速生成天空背景，减少手工贴图依赖，便于迭代。",
      "src": "80 Level · 09-07",
      "url": "https://80.lv/articles/fully-procedural-stylized-sky-generator-for-blender-released/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "头发液态化着色器",
      "sum": "免费 VRChat 着色器可将头发变为动画液体效果，附带水材质贴图。",
      "ta": "实时渲染中探索非传统材质表现，可借鉴其液体动画原理用于特效。",
      "src": "80 Level · 09-07",
      "url": "https://80.lv/articles/this-free-vrchat-shader-turns-hair-into-beautiful-animated-liquid/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "黎明行者销量破百万",
      "sum": "游戏《The Blood of Dawnwalker》全球销量已超过 100 万份。",
      "ta": "行业销量数据可作市场参考，但与本职能关联度低。",
      "src": "80 Level · 09-07",
      "url": "https://80.lv/articles/the-blood-of-dawnwalker-sold-over-1-million-copies-worldwide/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "战锤新作弃用生成式AI",
      "sum": "Saber CEO 支持 AI，但《Space Marine 3》确认不含生成式 AI 内容。",
      "ta": "大厂对生成式 AI 的取舍态度，可作为管线引入 AI 的参考案例。",
      "src": "80 Level · 09-07",
      "url": "https://80.lv/articles/despite-saber-interactive-ceo-s-pro-ai-course-space-marine-3-is-genai-free/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前BioWare设计师辩护",
      "sum": "前 BioWare 设计师为工作室辩护，回应《质量效应》新作质疑。",
      "ta": "行业舆论动态，与 TA 技术工作无直接关联。",
      "src": "80 Level · 09-07",
      "url": "https://80.lv/articles/former-bioware-designer-defends-studio-amid-next-mass-effect-doubts/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前R星开发者盗窃判刑",
      "sum": "前《RuneScape》开发者因窃取玩家超 40 万美元被判刑。",
      "ta": "行业法律事件，与 TA 技术工作无直接关联。",
      "src": "80 Level · 09-08",
      "url": "https://80.lv/articles/former-runescape-developer-sentenced-for-stealing-over-usd400k-from-players/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "木工游戏原型展示",
      "sum": "独立开发者展示木工游戏原型片段，效果惊艳。",
      "ta": "可关注其程序化建模或物理交互实现，但信息有限。",
      "src": "80 Level · 09-07",
      "url": "https://80.lv/articles/indie-dev-shows-a-prorotype-of-a-woodworking-game-and-it-s-amazing/"
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
