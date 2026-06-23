// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年6月23日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>紧凑位移映射基网格</em>。其余按重要性自动排序，红色优先。",
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
      "title": "Epic免费UE专业课程",
      "sum": "Epic开发者社区免费开放20+门UE专业课程，涵盖动画、游戏开发等。",
      "ta": "可作为团队新人培训或TA技能拓展的免费学习资源。",
      "src": "Unreal Engine · 06-15",
      "url": "https://www.unrealengine.com/news/free-professional-unreal-engine-courses-now-available-on-the-epic-developer-community"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "显式几何约束3D生成",
      "sum": "Arbor通过显式几何条件控制3D资产生成的空间占用。",
      "ta": "对程序化生成工作流有参考价值，可控制物体空间边界。",
      "src": "arXiv · cs.GR · 06-22",
      "url": "https://arxiv.org/abs/2606.23514v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "等变流匹配网格生成",
      "sum": "MeshFlow直接生成三角网格，保持顶点和面的置换不变性。",
      "ta": "直接输出网格的生成方法，可能简化3D资产管线。",
      "src": "arXiv · cs.GR · 06-22",
      "url": "https://arxiv.org/abs/2606.23489v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "高分辨率人体4D数据集",
      "sum": "VolHuMe数据集包含104个受试者的高质量4D人体扫描。",
      "ta": "可用于训练人体动画或物理模拟模型，但数据量有限。",
      "src": "arXiv · cs.GR · 06-22",
      "url": "https://arxiv.org/abs/2606.23062v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可控纹理平铺扩散模型",
      "sum": "用变换RoPE增强扩散模型实现可控纹理平铺。",
      "ta": "对材质贴图自动生成和纹理合成有潜在应用。",
      "src": "arXiv · cs.GR · 06-22",
      "url": "https://arxiv.org/abs/2606.22945v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "紧凑位移映射基网格",
      "sum": "DJM用三角形雅可比计算紧凑基网格，支持位移映射。",
      "ta": "直接优化置换贴图基网格，对植被/地形LOD和内存压缩有价值。",
      "src": "arXiv · cs.GR · 06-22",
      "url": "https://arxiv.org/abs/2606.22880v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "光照一致对象迁移",
      "sum": "在辐射场间迁移对象并保持光照一致性。",
      "ta": "对3DGS场景合成和VFX工作流有参考意义。",
      "src": "arXiv · cs.GR · 06-21",
      "url": "https://arxiv.org/abs/2606.22481v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "网格转3DGS白盒构建",
      "sum": "Mesh2GS通过全光采样将网格转换为3DGS表示。",
      "ta": "桥接网格和3DGS管线，可用于资产格式转换。",
      "src": "arXiv · cs.GR · 06-20",
      "url": "https://arxiv.org/abs/2606.21898v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "3DGS渲染单粒子效应",
      "sum": "分析3DGS在太空等环境中的位级错误影响。",
      "ta": "对边缘设备部署3DGS有参考，但非主流游戏场景。",
      "src": "arXiv · cs.GR · 06-19",
      "url": "https://arxiv.org/abs/2606.21791v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3DGS场景级物理模拟",
      "sum": "用3DGS实现场景级异构物理模拟，支持交互。",
      "ta": "让3DGS资产具备物理交互能力，可能用于动态环境。",
      "src": "arXiv · cs.GR · 06-19",
      "url": "https://arxiv.org/abs/2606.21753v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "物理信息微光学合成引擎",
      "sum": "OSOG为微光学环境提供可微物理合成数据引擎。",
      "ta": "专业领域工具，与游戏图形学关联较弱。",
      "src": "arXiv · cs.GR · 06-19",
      "url": "https://arxiv.org/abs/2606.21381v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "物理交互虚拟人化身",
      "sum": "PIAvatar通过变形梯度解耦实现物理交互化身。",
      "ta": "对角色物理交互和动画系统有参考价值。",
      "src": "arXiv · cs.GR · 06-19",
      "url": "https://arxiv.org/abs/2606.21162v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Maya泰龙角色绑定展示",
      "sum": "Sahil Banik展示Maya中泰龙角色绑定，含发光眼睛。",
      "ta": "角色绑定参考案例，可学习眼睛发光效果实现。",
      "src": "80 Level · 06-22",
      "url": "https://80.lv/articles/this-maya-rig-of-tai-lung-with-his-iconic-glowing-eyes-looks-really-cool/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5/Houdini短片制作解析",
      "sum": "Argentum Studio分享UE5/Houdini/Blender短片《The Cradle》制作流程。",
      "ta": "包含自定义毛发渲染系统，对特效和工具开发有参考。",
      "src": "80 Level · 06-22",
      "url": "https://80.lv/articles/creating-surreal-short-film-the-cradle-with-ue5-houdini-blender/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender田园景观作品",
      "sum": "展示Blender制作的19世纪田园景观。",
      "ta": "环境美术参考，无技术细节。",
      "src": "80 Level · 06-22",
      "url": "https://80.lv/articles/take-a-look-at-this-19th-century-pastoral-landscape-made-in-blender/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Substance 3D瓢虫材质教程",
      "sum": "Romain Lemaire讲解用Substance 3D SDF制作瓢虫材质。",
      "ta": "材质设计流程参考，SDF用法可迁移到其他生物材质。",
      "src": "80 Level · 06-22",
      "url": "https://80.lv/articles/how-to-design-a-vibrant-ladybug-material-using-substance-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender权重绘制工具更新",
      "sum": "Hamdi Amer的Weight Paint Box工具更新改进。",
      "ta": "Blender权重绘制效率工具，可关注更新内容。",
      "src": "80 Level · 06-22",
      "url": "https://80.lv/articles/blender-tool-for-weight-painting-updated-with-improvements/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender面部绑定作品",
      "sum": "Ryan Lykos制作《绝区零》朱鸢的Blender面部绑定。",
      "ta": "面部绑定参考案例，可学习风格化角色绑定。",
      "src": "80 Level · 06-22",
      "url": "https://80.lv/articles/blender-facial-rig-for-zenless-zone-zero-s-zhu-yuan/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "小团队游戏22小时回本",
      "sum": "独立游戏《Thank You For Your Application》22小时收回开发成本。",
      "ta": "行业案例，与TA技术无直接关联。",
      "src": "Game Developer · 06-22",
      "url": "https://www.gamedeveloper.com/business/-larger-budgets-and-longer-schedules-do-not-lead-to-better-games-thank-you-for-your-application-recoups-dev-costs-in-22-hours"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Maya材质管理器免费工具",
      "sum": "Materialist是Maya的免费材质管理工具。",
      "ta": "可提升材质管理效率，适合Maya管线。",
      "src": "Tech-Artists · 06-22",
      "url": "https://www.tech-artists.org/t/free-tool-materialist-a-material-manager-shelf-for-maya/18429"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Maya一键毛发构建工具",
      "sum": "Groomist是Maya中一键构建Ornatrix毛发的免费工具。",
      "ta": "简化毛发制作流程，对角色毛发管线有用。",
      "src": "Tech-Artists · 06-22",
      "url": "https://www.tech-artists.org/t/free-tool-groomist-a-one-click-ornatrix-groom-builder-for-maya/18427"
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
