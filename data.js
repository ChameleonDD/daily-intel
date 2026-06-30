// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年6月30日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>前馈神经渲染框架RenderFormer++</em> / <em>量子碰撞模型渲染相干散射</em> / <em>薄几何偶极子散射误差分析</em>。其余按重要性自动排序，红色优先。",
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
      "title": "前馈神经渲染框架RenderFormer++",
      "sum": "提出可扩展、物理基础的Transformer前馈神经渲染，用于网格场景全局光照。",
      "ta": "关注其物理一致性改进，可能影响未来实时GI管线设计。",
      "src": "arXiv · cs.GR · 06-29",
      "url": "https://arxiv.org/abs/2606.30380v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "量子碰撞模型渲染相干散射",
      "sum": "结合经典光线追踪与量子碰撞模型，处理动态光学属性散射。",
      "ta": "全新着色框架，可能颠覆材质散射模拟方法，值得深入理解。",
      "src": "arXiv · cs.GR · 06-29",
      "url": "https://arxiv.org/abs/2606.29989v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "薄几何偶极子散射误差分析",
      "sum": "揭示偶极子模型在薄/弯曲物体上的系统误差，提出光学厚度定律。",
      "ta": "直接关联次表面散射渲染精度，对皮肤/树叶等薄材质有指导意义。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29387v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可变形可重光照2D高斯泼溅",
      "sum": "DR-GS实现可变形物体的物理基可重光照，分离照明与材质。",
      "ta": "对VR/AR中动态数字人重光照有直接应用价值。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29379v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "前馈动态高斯场景重建L2D2-GS",
      "sum": "学习稠密化前馈重建动态城市场景，无需逐场景优化。",
      "ta": "提升动态高斯泼溅的可扩展性，适用于自动驾驶仿真。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29374v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "任意尺度超分共振Brane泼溅",
      "sum": "用2D高斯泼溅实现连续放大因子超分，解决平滑伪影。",
      "ta": "可能用于实时纹理/帧上采样，提升渲染质量。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29453v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "自适应分配高斯任意尺度超分",
      "sum": "学习自适应分配高斯用于图像超分，处理连续缩放。",
      "ta": "对引擎中动态缩放和VR注视点渲染有潜在应用。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29400v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实例结构化3D场景标记化",
      "sum": "前馈框架从无位姿视图分解场景为对象级token，而非基元。",
      "ta": "提升3D重建的对象感知能力，利于场景编辑。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29513v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "移动端3D高斯泼溅能量聚合",
      "sum": "蒙特卡洛能量聚合优化移动设备上的3DGS渲染。",
      "ta": "关注移动端实时3DGS性能优化方案。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.30017"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "低计算实时可控世界模型",
      "sum": "DreamForge-World 0.1预览，低计算量实时可控世界模型。",
      "ta": "可能用于游戏内动态场景生成或交互式世界模拟。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.30292"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时扩散流视频编辑LiveEdit",
      "sum": "面向实时流式视频编辑的扩散模型。",
      "ta": "关注实时视频编辑在游戏过场或直播中的应用潜力。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.26740"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视觉世界模型长尾评估修剪",
      "sum": "修剪视觉世界模型评估中的长尾问题。",
      "ta": "对评估生成式世界模型质量有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.24256"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 5.1实时焦散教程",
      "sum": "Alan Wayne分享Blender Cycles中水与玻璃实时焦散方法。",
      "ta": "了解Blender实时焦散工作流，可迁移至UE。",
      "src": "80 Level · 06-29",
      "url": "https://80.lv/articles/tutorial-real-time-caustics-in-blender-5-1-s-cycles/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "科幻复古动漫Blender包即将发布",
      "sum": "cgchefs推出科幻复古动漫风格Blender资源包，开放alpha测试。",
      "ta": "关注风格化资源包，可能用于快速原型。",
      "src": "80 Level · 06-29",
      "url": "https://80.lv/articles/new-blender-pack-for-sci-fi-retro-anime-inspired-art-is-coming/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "角色动画幕后制作解析",
      "sum": "Framed51展示生动角色动画幕后。",
      "ta": "观察角色动画制作细节，可借鉴表情与动态设计。",
      "src": "80 Level · 06-29",
      "url": "https://80.lv/articles/check-out-this-behind-the-scenes-animation-of-an-expressive-character/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "3D艺术家谈创作与教学",
      "sum": "JL Mussi分享3D艺术生涯及Blender硬表面课程创作。",
      "ta": "了解硬表面建模教学资源，可能提升工作流。",
      "src": "80 Level · 06-29",
      "url": "https://80.lv/articles/3d-artist-on-creating-art-and-making-courses-for-beginner-artists/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "毛发系统自碰撞宽度不一致",
      "sum": "Tech-Artists论坛讨论hairSystems自碰撞宽度缩放问题。",
      "ta": "直接关联UE毛发系统bug，需关注修复进展。",
      "src": "Tech-Artists · 06-29",
      "url": "https://www.tech-artists.org/t/hairsystems-self-collide-width-scale-is-inconsistent/18439"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Supermassive Games CEO离职",
      "sum": "Directive 8020发售后，Supermassive Games CEO离职。",
      "ta": "行业人事变动，可能影响工作室未来方向。",
      "src": "Game Developer · 06-29",
      "url": "https://www.gamedeveloper.com/business/supermassive-games-ceo-steps-down-following-launch-of-directive-8020"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "阿凡达格斗游戏新舞台公布",
      "sum": "Avatar Legends格斗游戏PS5预购开启，公布Spirit Wilds舞台。",
      "ta": "关注游戏美术风格和舞台设计。",
      "src": "PlayStation Blog · 06-29",
      "url": "https://blog.playstation.com/2026/06/29/avatar-legends-the-fighting-game-spirit-wilds-stage-revealed/"
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
