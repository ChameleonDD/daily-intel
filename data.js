// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月1日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>3DGS光线追踪加速</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "mid",
      "title": "NURBS可微分渲染框架",
      "sum": "提出统一可微分渲染框架，支持平面有理样条（NURBS）的矢量图形渲染。",
      "ta": "对矢量图形渲染管线有参考价值，但非实时渲染直接相关。",
      "src": "arXiv · cs.GR · 06-30",
      "url": "https://arxiv.org/abs/2606.31764v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "高保真蝴蝶新视角合成",
      "sum": "针对自然历史标本的微距摄影，提出高保真新视角合成方法。",
      "ta": "涉及微距摄影和3D重建，对数字孪生或高精度扫描有启发。",
      "src": "arXiv · cs.GR · 06-30",
      "url": "https://arxiv.org/abs/2606.31679v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3D高斯溅射本征分解",
      "sum": "将3D高斯溅射分解为漫反射反照率、着色和视角相关残差，支持编辑。",
      "ta": "直接关联3DGS工作流，可分离光照与材质，利于场景编辑和重光照。",
      "src": "arXiv · cs.GR · 06-30",
      "url": "https://arxiv.org/abs/2606.31637v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "双场连续B-rep表示",
      "sum": "提出DualBrep，一种用于CAD边界表示的连续双场表示方法。",
      "ta": "与CAD建模相关，对程序化几何生成工具有潜在影响。",
      "src": "arXiv · cs.GR · 06-30",
      "url": "https://arxiv.org/abs/2606.31579v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "LLM驱动应急决策",
      "sum": "利用大语言模型为虚拟人决策提供个性，用于应急模拟。",
      "ta": "AI驱动NPC行为，但非图形渲染或TA核心工作流。",
      "src": "arXiv · cs.GR · 06-30",
      "url": "https://arxiv.org/abs/2606.31038v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "3DGS光线追踪加速",
      "sum": "GRay实现3D高斯光线追踪，速度接近光栅化，比之前方法快近一个数量级。",
      "ta": "突破性进展，使3DGS支持高质量光线追踪反射/阴影，对实时渲染管线影响巨大。",
      "src": "arXiv · cs.GR · 06-29",
      "url": "https://arxiv.org/abs/2606.30869v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可编辑物理反射高斯场",
      "sum": "在光线追踪高斯辐射场中实现可编辑的基于物理的反射，而非伪造几何。",
      "ta": "提升3DGS反射真实感，支持编辑，对材质工作流有参考价值。",
      "src": "arXiv · cs.GR · 06-29",
      "url": "https://arxiv.org/abs/2606.30861v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "艺术家风格网格生成",
      "sum": "PolyFlow：连续拓扑嵌入流匹配，用于艺术家风格网格生成。",
      "ta": "AI辅助3D建模，但非实时渲染或TA工具链核心。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.30673"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender流水动画展示",
      "sum": "Cartesian Caramel用Blender制作了一段精美的流水短动画。",
      "ta": "Blender流体动画参考，但非技术突破。",
      "src": "80 Level · 06-30",
      "url": "https://80.lv/articles/check-out-this-amazing-short-animation-of-running-water-made-with-blender/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "UE5恐怖游戏技术解析",
      "sum": "ILL游戏利用UE5、身体恐怖、物理、肢解和双耳音频营造恐怖体验。",
      "ta": "UE5物理和音频集成案例，对特效和交互设计有参考。",
      "src": "80 Level · 06-30",
      "url": "https://80.lv/articles/how-ill-combines-body-horror-physics-and-binaural-audio-to-terrify-players/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏托管基础设施扩展",
      "sum": "GPORTAL解释裸金属服务器和全球部署如何支持多人游戏扩展。",
      "ta": "后端基础设施，非TA直接相关。",
      "src": "80 Level · 06-30",
      "url": "https://80.lv/articles/how-game-hosting-infrastructure-scales-modern-multiplayer-games/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "90年代卡通风格游戏",
      "sum": "一款探索中年男人内部的90年代卡通风格游戏。",
      "ta": "美术风格参考，无技术细节。",
      "src": "80 Level · 06-30",
      "url": "https://80.lv/articles/this-90s-cartoon-inspired-game-will-have-you-exploring-the-inside-of-a-middle-aged-man/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Unity实时水课程发布",
      "sum": "Fabrizio Espindola推出Unity实时水课程，涵盖Shader Graph、HLSL、粒子系统等。",
      "ta": "对Unity TA学习实时水效果有直接帮助。",
      "src": "80 Level · 06-30",
      "url": "https://80.lv/articles/fabrizio-espindola-announces-new-course-on-real-time-water-in-unity/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox暂停新Game Pass协议",
      "sum": "Xbox据报道暂停与外部工作室的新Game Pass协议谈判。",
      "ta": "行业商业动态，可能影响外包合作。",
      "src": "80 Level · 06-30",
      "url": "https://80.lv/articles/xbox-reportedly-halts-new-game-pass-agreements-with-outside-studios/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender几何节点碰撞系统",
      "sum": "Gurgen Aloian在Blender几何节点中构建实时碰撞系统，可能发布教程。",
      "ta": "Blender程序化工作流创新，对工具开发有启发。",
      "src": "80 Level · 06-30",
      "url": "https://80.lv/articles/real-time-collision-system-built-in-blender-s-geometry-nodes/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "IO Interactive裁员",
      "sum": "Xbox取消支持后，IO Interactive将裁员。",
      "ta": "行业动荡，可能影响项目外包或招聘。",
      "src": "Game Developer · 06-30",
      "url": "https://www.gamedeveloper.com/business/io-interactive-to-lay-off-employees-after-xbox-pulls-support-for-untitled-fantasy-game"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Xbox考虑出售Arkane",
      "sum": "报道称Xbox考虑出售或关闭Arkane等工作室，Blade项目可能被砍。",
      "ta": "重大行业重组，可能影响UE5项目和技术人才流动。",
      "src": "Game Developer · 06-30",
      "url": "https://www.gamedeveloper.com/business/report-xbox-considering-sales-or-closures-at-arkane-and-at-least-4-other-studios"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "R星开发者寻求工会认可",
      "sum": "GTA开发者寻求在Rockstar成立工会。",
      "ta": "行业劳工动态，非技术相关。",
      "src": "Game Developer · 06-30",
      "url": "https://www.gamedeveloper.com/production/grand-theft-auto-developers-seek-union-recognition-at-rockstar"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "NBCUniversal或进军游戏",
      "sum": "NBCUniversal分拆后可能扩展游戏业务。",
      "ta": "行业潜在新玩家，但无具体技术影响。",
      "src": "Game Developer · 06-30",
      "url": "https://www.gamedeveloper.com/business/report-nbcuniversal-could-expand-into-games-after-comcast-spinoff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "nDreams联合创始人新工作室",
      "sum": "nDreams联合创始人成立独立游戏和音乐工作室Atmospheric。",
      "ta": "行业创业动态，非技术相关。",
      "src": "Game Developer · 06-30",
      "url": "https://www.gamedeveloper.com/business/ndreams-co-founder-launches-indie-game-and-music-studio-atmospheric"
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
