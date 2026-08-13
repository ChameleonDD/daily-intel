// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月13日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE5.8动画示例项目更新</em> / <em>GPU计算程序化2D草</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "hi",
      "rank": 1,
      "title": "UE5.8动画示例项目更新",
      "sum": "UE5.8版Game Animation Sample Project发布，新增物理、运动匹配、姿态搜索和注视功能。",
      "ta": "直接对标UE5.8最新动画管线，是验证运动匹配与物理融合效果的官方参考。",
      "src": "Unreal Engine · 08-12",
      "url": "https://www.unrealengine.com/tech-blog/download-the-latest-game-animation-sample-project-now-updated-for-ue-5-8"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "测地线切割单元蒙皮先验",
      "sum": "提出cut-cell skinning几何先验，增强数据驱动蒙皮权重生成的泛化性。",
      "ta": "对程序化角色绑定和蒙皮权重优化有参考价值，可改善数据驱动方法的几何鲁棒性。",
      "src": "arXiv · cs.GR · 08-11",
      "url": "https://arxiv.org/abs/2608.11272v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "物理反射模拟与视频去反射",
      "sum": "提出物理接地反射模拟与扩散模型视频去反射方法。",
      "ta": "反射模拟与去反射技术对材质开发和光照调试有潜在应用。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.11562"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "手绘2D与3D环境融合",
      "sum": "Lunarium团队分享手绘2D美术、3D几何、自定义光照与Unity工具结合的制作流程。",
      "ta": "手绘风格化渲染的实战案例，对非真实感管线和美术风格统一有借鉴意义。",
      "src": "80 Level · 08-12",
      "url": "https://80.lv/articles/how-lunarium-blends-hand-painted-2d-art-with-3d-environments/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 2,
      "title": "GPU计算程序化2D草",
      "sum": "Jarl游戏实现GPU Compute程序化2D草，提供浏览器交互演示。",
      "ta": "GPU Compute生成植被的轻量方案，对移动端或风格化场景的草渲染有直接参考。",
      "src": "80 Level · 08-12",
      "url": "https://80.lv/articles/building-procedural-2d-grass-with-gpu-compute/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender纹理绘制插件MatPlus",
      "sum": "MatPlus在Blender内实现类似Substance Painter的3D模型直接绘制，支持多UDIM和游戏贴图导出。",
      "ta": "Blender内完成贴图绘制可简化资产管线，对依赖Substance的TA是潜在替代工具。",
      "src": "80 Level · 08-12",
      "url": "https://80.lv/articles/matplus-brings-substance-3d-painter-inspired-texture-painting-to-blender/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "UE5童话风夜间列车动画",
      "sum": "Seb van den Beemt用UE5制作童话风格夜间列车3D动画。",
      "ta": "UE5风格化场景与光照的视觉参考案例。",
      "src": "80 Level · 08-12",
      "url": "https://80.lv/articles/this-night-train-3d-animation-looks-like-a-scene-from-a-fairytale/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Blender超现实人脸墙",
      "sum": "受贰瓶勉启发的Blender场景，复杂阵列设置几乎导致电脑崩溃。",
      "ta": "Blender阵列与实例化复杂度的极端案例，对程序化建模性能有警示。",
      "src": "80 Level · 08-12",
      "url": "https://80.lv/articles/check-out-this-surreal-3d-face-wall-inspired-by-manga/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Epic出售ArtStation与Sketchfab",
      "sum": "Epic Games将ArtStation和Sketchfab出售给KitBash，两平台于2021年收购。",
      "ta": "资产平台易主可能影响TA常用的资产获取与分享生态，需关注后续整合。",
      "src": "Game Developer · 08-12",
      "url": "https://www.gamedeveloper.com/business/epics-sells-artstation-and-sketchfab-to-kitbash"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "生成式AI将影响团队规模",
      "sum": "Gamescom Dev Conference调查显示，开发者预期生成式AI将在三年内影响角色和团队规模。",
      "ta": "行业对AI工具的态度将影响TA团队构成与工作流演进方向。",
      "src": "Game Developer · 08-12",
      "url": "https://www.gamedeveloper.com/business/developers-expect-generative-ai-to-impact-roles-and-team-sizes-in-the-next-three-years"
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
