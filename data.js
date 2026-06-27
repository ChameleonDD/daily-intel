// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年6月27日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>WebXR汽车配置器无像素流</em>。其余按重要性自动排序，红色优先。",
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
      "title": "单图生成完整3D几何",
      "sum": "World Tracing：输入一张图，物体/场景/动态世界以完整几何浮现，每点追溯回像素。",
      "ta": "原文是单图到完整3D几何的生成，若稳定，对快速搭场景白模和资产原型有直接价值。",
      "handle": "@BenMildenhall",
      "who": "Ben Mildenhall · 06-12",
      "url": "https://x.com/HaoZhang623/status/2065455226791002472"
    },
    {
      "cat": "x",
      "imp": "hi",
      "title": "World Labs连发3篇3D论文",
      "sum": "NeRF 一作放出三篇用大规模生成模型加 2D 先验生成 3D 内容的研究。",
      "ta": "原文是文生3D/重建的最新一手研究，直接对应你关注的资产生成方向，值得追原项目页。",
      "handle": "@BenMildenhall",
      "who": "Ben Mildenhall · 06-12",
      "url": "https://x.com/theworldlabs/status/2065466830052098058"
    },
    {
      "cat": "x",
      "imp": "hi",
      "title": "全AI生成可玩游戏",
      "sum": "Aaltonen 转发：100% AI 生成资产与玩法代码，一名无编程经验设计师约一周做成。",
      "ta": "原文讲的是单人用 AI 生成全套游戏资产+代码的实例，是生成式 AI 进生产管线的极端实证，值得看其边界。",
      "handle": "@SebAaltonen",
      "who": "Sebastian Aaltonen · 06-17",
      "url": "https://x.com/SebAaltonen/status/2067202311168954689"
    },
    {
      "cat": "x",
      "imp": "mid",
      "title": "Codex群驱动机器人研究",
      "sum": "Jim Fan 发布 ENPIRE：给 8 个 Codex agent 一队机器人加 GPU 和 token 预算自主解任务。",
      "ta": "原文是 AI agent 集群自主驱动真实机器人的实验，关注“AI 进开发/生产管线”的可看其调度思路。",
      "handle": "@DrJimFan",
      "who": "Jim Fan · 06-16",
      "url": "https://x.com/DrJimFan/status/2066921736369766762"
    },
    {
      "cat": "x",
      "imp": "mid",
      "title": "UE5 State Trees敌人生成",
      "sum": "Tom Looman 给开源项目 Orion 加了 C++ 加蓝图混合做的 State Trees 敌人生成总管。",
      "ta": "原文是 UE5 State Trees 的实操案例，做敌人波次/生成调度可直接对照他的开源实现。",
      "handle": "@t_looman",
      "who": "Tom Looman · 06-08",
      "url": "https://x.com/t_looman/status/2063965540297605174"
    },
    {
      "cat": "x",
      "imp": "lo",
      "title": "UE5两款AO插件上Fab",
      "sum": "Aaltonen 转发：HBAO+ 与 GT-VBAO 两款 UE5 环境光遮蔽插件上架 Fab，HBAO+ 个人免费。",
      "ta": "原文是两款 UE5 AO 插件发布消息，做场景近景细节/接触阴影时可收一条试用。",
      "handle": "@SebAaltonen",
      "who": "转发 · 06-17",
      "url": "https://x.com/ymt3d/status/2067067075584229831"
    },
    {
      "cat": "x",
      "imp": "lo",
      "title": "Gemini视频模型登顶Arena",
      "sum": "转发：Gemini Omni Flash 在 Video Arena 文生/图生视频双榜登顶，大幅领先 Veo。",
      "ta": "原文是转发的榜单信息，视频生成模型迭代速度可作为“AI 生成素材”能力上限的参照。",
      "handle": "@poolio",
      "who": "转发 · 06-11",
      "url": "https://x.com/arena/status/2065112147093545333"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE免费学习内容更新",
      "sum": "本月免费内容含MetaHuman、Mesh Terrain及手机拍电影教程。",
      "ta": "Mesh Terrain和MetaHuman教程直接关联植被工具与角色管线，值得快速浏览。",
      "src": "Unreal Engine · 06-26",
      "url": "https://www.unrealengine.com/learning/junes-epic-learning-content-metahumans-mesh-terrain-and-more"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "PUBG Ally AI同伴系统",
      "sum": "KRAFTON用NVIDIA ACE为PUBG构建可对话AI同伴，突破固定对话限制。",
      "ta": "AI同伴系统在实时游戏中落地，可关注其对话与行为逻辑对NPC管线的启发。",
      "src": "NVIDIA · 06-25",
      "url": "https://developer.nvidia.com/blog/how-krafton-built-pubg-ally-a-co-playable-character-powered-by-nvidia-ace/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Temtem开发幕后",
      "sum": "Crema分享Temtem: Pioneers的多人生物收集与生存建造开发挑战。",
      "ta": "多人游戏技术挑战案例，可快速了解其程序化生成与实时战斗管线。",
      "src": "80 Level · 06-26",
      "url": "https://80.lv/articles/temtem-developing-massively-multiplayer-creature-collection-adventure/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "精灵塔光照场景展示",
      "sum": "Daniel Novillo展示精美沉浸式精灵塔光照场景。",
      "ta": "光照与场景艺术参考，可快速浏览其材质与光照设置。",
      "src": "80 Level · 06-26",
      "url": "https://80.lv/articles/take-a-look-at-this-beautiful-and-immersive-elven-tower-lighting-scene/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "2026游戏注意力经济",
      "sum": "玩家时间碎片化，游戏需争夺注意力，Lexi Sydow分析趋势。",
      "ta": "行业趋势分析，对游戏设计方向有参考价值。",
      "src": "80 Level · 06-26",
      "url": "https://80.lv/articles/the-attention-economy-how-games-win-mind-share-in-2026/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender手指对齐工具",
      "sum": "一键Blender插件，为手指骨骼添加碰撞感知行为。",
      "ta": "简化角色手部绑定流程，对TA工作流中的角色管线有直接帮助。",
      "src": "80 Level · 06-26",
      "url": "https://80.lv/articles/one-click-blender-tool-for-finger-alignment-to-any-object/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "title": "WebXR汽车配置器无像素流",
      "sum": "Miris构建WebXR配置器，1.2GB资产无需云GPU实现HDR级材质。",
      "ta": "无像素流实时渲染方案，对UE5 Web部署与材质性能优化有重要参考。",
      "src": "80 Level · 06-26",
      "url": "https://80.lv/articles/miris-built-a-car-configurator-without-pixel-streaming-here-s-what-they-found/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Skybound游戏战略",
      "sum": "Skybound CEO讨论Invisible VS成功后未来游戏战略。",
      "ta": "行业战略动态，可快速了解发行商方向。",
      "src": "Game Developer · 06-26",
      "url": "https://www.gamedeveloper.com/business/analysts-attempt-to-make-sense-of-xbox-s-exclusivity-mindset-shift"
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
