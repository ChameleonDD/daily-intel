// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月11日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE5.9预览版发布</em>。其余按重要性自动排序，红色优先。",
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
      "title": "UE5.9预览版发布",
      "sum": "UE 5.9预览版上线，含AI工作流增强、Web平台支持、渲染与动画更新。",
      "ta": "引擎大版本预览，渲染与动画管线改动需第一时间评估对植被/材质/Niagara的兼容影响。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/unreal-engine-5-9-preview-is-out-it-was-built-with-ai/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时皮肤渲染可微方法",
      "sum": "提出轻量可微方法，直接估计适配游戏引擎近似着色器的次表面散射参数。",
      "ta": "把离线逆向渲染参数直接映射到实时shader，对角色皮肤材质管线有参考价值。",
      "src": "arXiv · cs.GR · 11-10",
      "url": "https://arxiv.org/abs/2611.14451v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态微几何编译为神经纹理",
      "sum": "Deformable Texture Maps将形变表面的细尺度几何编译进神经纹理，避免显式实例化。",
      "ta": "布料等形变材质的微观外观压缩思路，可借鉴到植被/织物材质性能优化。",
      "src": "arXiv · cs.GR · 11-10",
      "url": "https://arxiv.org/abs/2611.13677v1"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "罗技360赛车展厅用UE5",
      "sum": "UE服务伙伴用Lumen、Nanite、Sequencer与Pixel Streaming搭建浏览器可进的360赛车展厅。",
      "ta": "Pixel Streaming+Lumen的商用落地案例，可看其大场景实时推流与光照取舍。",
      "src": "Unreal Engine · 11-10",
      "url": "https://www.unrealengine.com/spotlights/beyond-the-product-page-logitech-g-s-360-racing-studio"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Godot程序化低模树生成器",
      "sum": "免费工具可在编辑器内生成各类树木，保存预设并导出带LOD与碰撞的资产。",
      "ta": "程序化植被+LOD+碰撞一体化导出，与植被工具方向直接相关，可对比其生成策略。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/free-procedural-low-poly-tree-generator-for-godot/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender免费动漫发型工具",
      "sum": "在头部绘制曲线即可生成干净四边面发型网格。",
      "ta": "曲线转四边面网格的思路对程序化毛发/植被条带生成有借鉴。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/free-blender-tool-for-creating-stylized-anime-hair/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender赛璐璐街景流程",
      "sum": "作者分享用Blender制作吉卜力风格地中海街景的赛璐璐着色工作流。",
      "ta": "风格化卡通着色的材质搭建参考，可看其描边与色阶处理。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/this-blender-made-mediterranean-street-looks-straight-out-of-ghibli-movie/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "单骨骼驱动喷气引擎绑定",
      "sum": "用单根骨骼控制整个喷气引擎所有运动的Blender绑定案例。",
      "ta": "极简骨骼驱动的机械绑定思路，可参考到硬表面道具动画。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/real-world-jet-engine-recreated-with-intricate-blender-rig/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "程序化地牢设计经验谈",
      "sum": "Bloody Hell Hotel开发者谈吸血鬼酒店沙盒机制与程序化地牢的设计方式。",
      "ta": "程序化关卡生成的一线设计经验，与PCG工具思路可对照。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/bloody-hell-hotel-developer-on-making-a-vampire-management-sandbox/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "俯视恐怖氛围营造手法",
      "sum": "前《小小梦魇》开发者谈用实拍特效恐怖、动画构图与环境光照营造不安感。",
      "ta": "环境光照与镜头构图的具体做法，对氛围向场景打光有参考。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/end-of-abyss-devs-explain-how-they-made-top-down-horror-feel-unsettling/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "UE5动作肉鸽免费Demo",
      "sum": "UE5砍杀游戏Sole Salvation推出免费Demo，即将迎来大更新。",
      "ta": "UE5近战+远程战斗实现的小体量案例，可速览其特效表现。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/this-cosmic-horror-action-roguelite-combines-melee-ranged-combat/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "XR实时三维元胞自动机框架",
      "sum": "提出统一交互框架，在XR硬件约束下协调3D元胞自动机的模拟、体数据管理与渲染。",
      "ta": "体数据实时模拟与渲染的约束权衡，对体积特效有边缘参考。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.13296v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "GPU加速QP求解器",
      "sum": "FAME-QP用CUDA图与融合核函数加速线性MPC的稠密二次规划求解。",
      "ta": "GPU求解器工程优化手法，可参考到仿真类计算任务的核融合思路。",
      "src": "arXiv · cs.GR · 11-10",
      "url": "https://arxiv.org/abs/2611.13766v1"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "GTA6预载提前九天",
      "sum": "GTA6成PS Store史上预购最多游戏，索尼与Rockstar开放提前九天预载。",
      "ta": "行业级发行事件，关注其体量与上线节奏对同期项目排期的影响。",
      "src": "PlayStation Blog · 11-10",
      "url": "https://blog.playstation.com/2026/11/10/pre-load-grand-theft-auto-vi-on-ps5-starting-today/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "GTA6预购超预期",
      "sum": "Take-Two CEO称GTA6预购量超出预期，财报整体平稳。",
      "ta": "与上条同源事件，商业侧补充，速览即可。",
      "src": "Game Developer · 11-10",
      "url": "https://www.gamedeveloper.com/business/take-two-financials-are-steady-while-the-ceo-claims-that-grand-theft-auto-vi-pre-orders-are-exceeding-expectations"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "索尼Fairgames项目取消",
      "sum": "索尼服务型劫案模拟游戏Fairgames被取消，不计划裁员。",
      "ta": "服务型游戏收缩的又一信号，速览行业动向。",
      "src": "80 Level · 11-11",
      "url": "https://80.lv/articles/sony-s-live-service-heist-simulator-fairgames-has-been-canceled/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "瑞奇与叮当手游将停服",
      "sum": "Ratchet & Clank: Ranger Rumble软发布一年后停运，11月下架、次年5月关服。",
      "ta": "服务型项目生命周期案例，速览。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/ratchet-clank-ranger-rumble-is-shutting-down-a-year-after-its-soft-launch/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS Plus十一月阵容",
      "sum": "十一月PS Plus游戏目录含《死亡搁浅2》《如龙8外传》等。",
      "ta": "订阅阵容信息，速览即可。",
      "src": "PlayStation Blog · 11-10",
      "url": "https://blog.playstation.com/2026/11/10/playstation-plus-game-catalog-for-november-death-stranding-2-on-the-beach-like-a-dragon-pirate-yakuza-in-hawaii-atomfall-dragon-quest-iii-hd-2d-remake-and-more/"
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
