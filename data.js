// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月26日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>多视图重建可重光照网格</em>。其余按重要性自动排序，红色优先。",
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
      "title": "星战新作采用UE5开发",
      "sum": "Bit Reactor技术总监谈为何选择UE5及开发中亮点功能。",
      "ta": "了解3A战术游戏在UE5中的技术选型与管线实践。",
      "src": "Unreal Engine · 08-25",
      "url": "https://www.unrealengine.com/developer-interviews/star-wars-zero-company-bit-reactor-crafts-a-galaxy-of-tactical-possibilities-with-ue5"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "语义优先动作编解码器",
      "sum": "SeMoCo提出语义优先的离散动作表示，用于文本生成动作。",
      "ta": "关注动作生成中语义与细节的平衡，对动画管线有参考价值。",
      "src": "arXiv · cs.GR · 08-25",
      "url": "https://arxiv.org/abs/2608.24334v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "视觉中心智能几何编辑",
      "sum": "ViSculpt利用LLM进行视觉驱动的3D几何编辑，减少手动操作。",
      "ta": "探索LLM在DCC工具中辅助几何编辑的潜力，提升效率。",
      "src": "arXiv · cs.GR · 08-25",
      "url": "https://arxiv.org/abs/2608.24169v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "多视图重建可重光照网格",
      "sum": "ExMesh++从多视图图像重建带UV和PBR材质的可编辑网格资产。",
      "ta": "直接产出可用的PBR资产，对程序化资产管线意义重大。",
      "src": "arXiv · cs.GR · 08-25",
      "url": "https://arxiv.org/abs/2608.24109v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可重光照高斯3D资产生成",
      "sum": "Luce提出可重光照的高斯表示，支持PBR材质生成。",
      "ta": "关注高斯泼溅向PBR管线的集成，可能影响实时渲染资产流程。",
      "src": "arXiv · cs.GR · 08-25",
      "url": "https://arxiv.org/abs/2608.23943v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "三参数细分曲线设计",
      "sum": "提出一种三参数9点二进制近似细分方案用于曲线形状控制。",
      "ta": "基础数学研究，对曲线建模工具的实现有潜在参考。",
      "src": "arXiv · cs.GR · 08-23",
      "url": "https://arxiv.org/abs/2608.23637v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "扩展位置动力学旋转处理",
      "sum": "利用李群统一处理XPBD中的旋转自由度，提升刚体和Cosserat杆模拟。",
      "ta": "对物理模拟中旋转约束的稳定性有改进，值得关注。",
      "src": "arXiv · cs.GR · 08-21",
      "url": "https://arxiv.org/abs/2608.23606v1"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "地铁新作展示自研引擎进化",
      "sum": "Metro 2039 gamescom预告展示4A引擎最新进化，环境更压抑。",
      "ta": "观察4A引擎在光照、氛围渲染上的技术演进。",
      "src": "80 Level · 08-25",
      "url": "https://80.lv/articles/metro-2039-looks-darker-and-more-claustrophobic-than-ever-in-new-gameplay/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "巫师3免费重制版将发布",
      "sum": "巫师3将获得包含Switch 2版本在内的免费全面重制升级。",
      "ta": "关注重制版在新技术下的画面表现与性能优化。",
      "src": "80 Level · 08-25",
      "url": "https://80.lv/articles/the-witcher-3-is-getting-a-massive-full-remaster-as-a-free-upgrade-very-soon/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender幻想村庄概念艺术",
      "sum": "Eugenia Chernova分享使用Blender创建幻想村庄概念艺术的工作流。",
      "ta": "学习Blender在概念设计阶段的建模与场景搭建技巧。",
      "src": "80 Level · 08-25",
      "url": "https://80.lv/articles/creating-fantasy-village-concept-art-using-blender/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "波西杰克逊VFX特效解析",
      "sum": "解析剧中石像鬼Sirens特效，使用自定义Bullet和Vellum解算器。",
      "ta": "了解影视级VFX中刚体与布料解算器的实际应用。",
      "src": "80 Level · 08-25",
      "url": "https://80.lv/articles/inside-vfx-of-percy-jackson-and-the-olympians-season-2/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "免费Blender玻璃折射工具",
      "sum": "Patterned Glass Compositor工具可在Blender中创建玻璃扭曲折射效果。",
      "ta": "快速实现玻璃效果，适合在后期合成中增加细节。",
      "src": "80 Level · 08-25",
      "url": "https://80.lv/articles/check-out-free-blender-tool-for-glass-distortion-refraction-effects/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender几何节点实时碰撞",
      "sum": "基于几何节点的实时碰撞系统，可创建挤压变形效果。",
      "ta": "利用几何节点实现程序化碰撞动画，拓展特效制作手段。",
      "src": "80 Level · 08-25",
      "url": "https://80.lv/articles/geometry-nodes-powered-real-time-collision-system-for-blender/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender毛毡风格水下世界",
      "sum": "艺术家在Blender中实验毛毡风格，创建水下3D世界。",
      "ta": "探索非真实感渲染风格在Blender中的实现。",
      "src": "80 Level · 08-25",
      "url": "https://80.lv/articles/check-out-this-felt-like-underwater-3d-world-made-in-blender/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Riot停止2XKO开发",
      "sum": "Riot宣布12月停止格斗游戏2XKO的积极开发，因留存不足。",
      "ta": "行业动态，关注格斗游戏市场表现与运营策略。",
      "src": "Game Developer · 08-25",
      "url": "https://www.gamedeveloper.com/business/riot-games-is-winding-down-fighter-2xko-in-december-2026"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Among Us 3D开发商裁员",
      "sum": "Schell Games被报道裁员，此前曾多次谈及避免裁员。",
      "ta": "行业动态，关注外包与协作工作室的稳定性。",
      "src": "Game Developer · 08-25",
      "url": "https://www.gamedeveloper.com/business/report-among-us-3d-dev-schell-games-lays-off-staff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "浏览器游戏新创公司融资",
      "sum": "爱尔兰浏览器游戏公司Entity融资500万美元，目标2027年推出平台。",
      "ta": "关注WebGPU等新技术在浏览器游戏中的应用前景。",
      "src": "Game Developer · 08-25",
      "url": "https://www.gamedeveloper.com/business/irish-browser-games-start-up-entity-raises-5m-in-funding-for-console-quality-games-for-the-new-web-era-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "thatgamecompany成立发行部门",
      "sum": "《光·遇》开发商thatgamecompany宣布成立发行部门thatgamepublisher。",
      "ta": "行业动态，关注独立游戏发行生态变化。",
      "src": "Game Developer · 08-25",
      "url": "https://www.gamedeveloper.com/business/journey-maker-thatgamecompany-announces-thatgamepublisher"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "W4 Games融资扩展Godot",
      "sum": "W4 Games融资1800万美元，并与腾讯合作拓展亚洲Godot生态。",
      "ta": "Godot引擎商业支持增强，可能影响跨引擎工具链选择。",
      "src": "Game Developer · 08-25",
      "url": "https://www.gamedeveloper.com/business/w4-games-raises-18m-to-expand-its-international-team"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini地理追踪器稳定版",
      "sum": "GeoTracker for Houdini发布稳定版，支持Houdini 22。",
      "ta": "用于Houdini的相机追踪工具，对特效合成工作流有用。",
      "src": "Tech-Artists · 08-25",
      "url": "https://www.tech-artists.org/t/geotracker-for-houdini-stable-release-houdini-22-support/18508"
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
