// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月24日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>可动可重打光Surfel化身</em> / <em>实时机器人切割仿真新法</em> / <em>灵巧抓取解耦对齐表示</em>。其余按重要性自动排序，红色优先。",
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
      "title": "可动可重打光Surfel化身",
      "sum": "ARS-Avatar用surfel表示从多视角图像生成可动画、可重打光的人体化身。",
      "ta": "surfel+可学习环境光遮蔽，对角色材质与光照解耦有参考价值。",
      "src": "arXiv · cs.GR · 09-23",
      "url": "https://arxiv.org/abs/2609.27600v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时机器人切割仿真新法",
      "sum": "BladeMaster在线生成持久断裂面，实现实时可形变物体切割仿真。",
      "ta": "拓扑变化+持久断裂的实时方案，可借鉴到破坏/切割类特效系统。",
      "src": "arXiv · cs.GR · 09-23",
      "url": "https://arxiv.org/abs/2609.27342v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "灵巧抓取解耦对齐表示",
      "sum": "DEAL-Grasp解耦全局刚体运动与局部姿态，生成几何感知的灵巧抓取。",
      "ta": "VR/数字人抓取动画生成，关注其解耦表示思路。",
      "src": "arXiv · cs.GR · 09-23",
      "url": "https://arxiv.org/abs/2609.28131v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "物理世界模型InternW0",
      "sum": "InternW0提出面向高效真实世界交互的基础物理世界模型。",
      "ta": "物理世界模型方向，与实时交互仿真潜在相关，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.27656"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender盒投影做无人机贴图",
      "sum": "Sandro Bonfanti分享昆虫形间谍无人机从概念到功能与剪影的完整流程。",
      "ta": "盒投影贴图与产品级布光摆景，硬表面资产流程可参考。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/designing-a-functional-looking-spy-drone-with-an-insect-like-form/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "ZBrush+Substance做收音机",
      "sum": "Ravikanth Gupta用ZBrush建模有机磨损细节，六张UV加UDIM准备贴图。",
      "ta": "UDIM多象限与老化磨损处理，硬表面道具贴图流程示范。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/breakdown-how-to-create-a-hard-surface-philips-radio-with-zbrush-substance-3d/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Undead Labs脱离Xbox后大裁员",
      "sum": "微软今年早前释放剥离信号后，Undead Labs进行重大裁员。",
      "ta": "工作室动荡，关注其对项目与团队稳定性的影响。",
      "src": "Game Developer · 09-23",
      "url": "https://www.gamedeveloper.com/business/undead-labs-makes-significant-layoffs-after-splitting-from-xbox"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "微软拟在加载屏插广告",
      "sum": "微软申请专利，在游戏自然停顿处展示广告。",
      "ta": "加载屏广告若落地，或影响加载流程与UI设计。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/microsoft-may-bring-ads-to-game-loading-screens/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "手绘银河城Well Dweller发售",
      "sum": "手绘风格银河恶魔城游戏Well Dweller已正式发售。",
      "ta": "2D手绘美术风格参考，速览。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/the-hand-drawn-metroidvania-well-dweller-has-been-released/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "像素卡牌游戏以投喂代杀敌",
      "sum": "Hungry Horrors以英爱民俗为背景，用烹饪击败怪物。",
      "ta": "像素美术与题材创意，速览。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/you-feed-your-enemies-instead-of-killing-them-in-this-deckbuilding-pixel-art-adventure/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "浏览器寻物游戏十年未完",
      "sum": "Where's Waldo风格浏览器游戏Floor796近十年仍在更新，完成度62%。",
      "ta": "长线个人项目，速览。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/nearly-ten-years-later-this-where-s-waldo-style-browser-game-keeps-growing/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "时装裁剪缝纫模拟游戏",
      "sum": "一款模拟游戏让玩家裁剪并缝制自己的连衣裙。",
      "ta": "布料模拟题材，速览。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/this-simulation-game-lets-you-cut-and-sew-your-own-dresses/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "搏击俱乐部结局赛博朋克重制",
      "sum": "Wonki Choi分享搏击俱乐部结尾场景的赛博朋克风3D动画。",
      "ta": "风格化3D动画参考，速览。",
      "src": "80 Level · 09-23",
      "url": "https://80.lv/articles/fight-club-s-final-scene-reimagined-as-a-cyberpunk-style-3d-animation/"
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
