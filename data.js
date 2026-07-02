// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月2日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>单目视频生成动态3D高斯</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "单目视频生成动态3D高斯",
      "sum": "从单目视频生成可自由渲染的动态3D高斯表示，条件视频模型于像素对齐渲染。",
      "ta": "对TA而言，这是从视频直接产出动态3D资产的前沿方法，可能改变植被/场景动态化工作流。",
      "src": "arXiv · cs.GR · 07-01",
      "url": "https://arxiv.org/abs/2607.01202v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "四款免费网格简化工具评测",
      "sum": "Lukáš Gallo与Bohemia Interactive合作，测试四款开源简化工具的性能与适用场景。",
      "ta": "TA可参考此评测选择适合植被或场景LOD的简化工具，优化性能管线。",
      "src": "80 Level · 07-01",
      "url": "https://80.lv/articles/testing-4-free-mesh-simplification-tools/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5与Substance 3D场景拆解",
      "sum": "Karl Aldskogius详解Sunset Garden项目，包括石头创建和紫藤外观实现。",
      "ta": "TA可学习其植被材质和程序化工作流，直接应用于UE5场景。",
      "src": "80 Level · 07-01",
      "url": "https://80.lv/articles/breakdown-creating-a-detailed-and-vibrant-scene-with-unreal-engine-and-substance-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Houdini果冻物理手部追踪实验",
      "sum": "Alvaro Moreira在Houdini中进行手部追踪与果冻物理实验，计划发布拆解。",
      "ta": "TA可关注其Niagara或Houdini中软体物理与追踪的结合技巧。",
      "src": "80 Level · 07-01",
      "url": "https://80.lv/articles/hand-tracking-experiments-with-jelly-like-physics-in-houdini/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender艺术家制作宜家风动画广告",
      "sum": "ViscousRealm用Blender创作宜家风格动画广告。",
      "ta": "TA可参考其材质和光照技巧，用于UE5场景参考。",
      "src": "80 Level · 07-01",
      "url": "https://80.lv/articles/imaginary-ikea-animated-commercial-created-by-blender-artist/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ZBrush 8250 Alpha笔刷大包",
      "sum": "CGSphere推出包含8250个Alpha和笔刷的Mega Bundle，用于历史/现代角色细节。",
      "ta": "TA可快速获取高质量笔刷，提升植被或地形细节雕刻效率。",
      "src": "80 Level · 07-01",
      "url": "https://80.lv/articles/grab-this-cgsphere-s-mega-bundle-with-8250-alpha-brushes-for-zbrush/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "PlayStation 2028年停止光盘生产",
      "sum": "索尼宣布2028年1月起新游戏仅数字发行，PS3/PS Vita商店逐步关闭。",
      "ta": "数字发行趋势影响游戏分发，TA需关注数字资产管理和更新策略。",
      "src": "PlayStation Blog · 07-01",
      "url": "https://blog.playstation.com/2026/07/01/physical-disc-production-ending-in-january-2028-for-new-games-releasing-on-playstation-consoles/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "多对象运动轨迹控制生成",
      "sum": "TrajLoc方法在图像到视频生成中控制多对象运动，处理轨迹交叉和遮挡。",
      "ta": "对TA而言，此技术可能用于程序化动画或特效中的多物体运动控制。",
      "src": "arXiv · cs.GR · 07-01",
      "url": "https://arxiv.org/abs/2607.00861v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "无肢运动几何形状优化",
      "sum": "提出微分几何框架模拟蛇等软体无肢生物的运动。",
      "ta": "TA可借鉴其物理模拟方法，用于Niagara或Houdini中的软体动画。",
      "src": "arXiv · cs.GR · 07-01",
      "url": "https://arxiv.org/abs/2607.00524v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "AI美学修改在可视化中的可接受性",
      "sum": "专家评估AI对3D自然现象可视化进行美学修改的可接受性。",
      "ta": "TA需平衡AI增强视觉效果与数据保真度，尤其在科学可视化或场景渲染中。",
      "src": "arXiv · cs.GR · 06-30",
      "url": "https://arxiv.org/abs/2607.00239v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "AI重建希区柯克《迷魂记》",
      "sum": "用2.78%原始帧通过视频扩散模型逐场景AI重建电影《迷魂记》。",
      "ta": "TA可关注视频扩散模型在实时渲染或过场动画中的潜在应用。",
      "src": "arXiv · cs.GR · 06-29",
      "url": "https://arxiv.org/abs/2607.00047v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Valdi：价值扩散世界模型",
      "sum": "HuggingFace论文介绍Valdi，一种价值扩散世界模型。",
      "ta": "TA可了解世界模型在游戏AI或模拟中的潜在应用，但非直接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.00917"
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
