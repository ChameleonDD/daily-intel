// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月23日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>四面体笼驱动海量动画几何光线追踪</em> / <em>分裂辐射级联：实时全局光照新方法</em> / <em>HAWKED 程序化瀑布工具制作详解</em>。其余按重要性自动排序，红色优先。",
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
      "title": "四面体笼驱动海量动画几何光线追踪",
      "sum": "AMD 提出用四面体笼动画复用静态 BLAS，实时追踪数亿三角形，大幅降低植被/草丛更新开销。",
      "ta": "对植被渲染和人群系统意义重大，可显著减少每帧 BVH 重建和内存消耗。",
      "src": "AMD GPUOpen · 07-22",
      "url": "https://gpuopen.com/learn/ray-tracing-massive-amounts-animated-geometry/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "分裂辐射级联：实时全局光照新方法",
      "sum": "提出稀疏辐射探针的级联方案，解决传统探针方法细节不足问题，实现实时漫反射全局光照。",
      "ta": "可能成为 UE5 Lumen 之外的高质量 GI 替代方案，值得关注实现细节。",
      "src": "arXiv · cs.GR · 07-22",
      "url": "https://arxiv.org/abs/2607.20384v1"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 3,
      "title": "HAWKED 程序化瀑布工具制作详解",
      "sum": "Serge Filin 分享将 2D 概念转化为动态实时材质的程序化瀑布工具开发过程。",
      "ta": "直接相关植被/特效工作流，学习如何用程序化材质实现复杂水体效果。",
      "src": "80 Level · 07-22",
      "url": "https://80.lv/articles/creating-a-procedural-waterfalls-tool-for-the-game-hawked/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "优化写实水晶材质制作分解",
      "sum": "Anastasia Gorban 详解水晶材质分层结构、虹彩效果及划痕纹理制作流程。",
      "ta": "材质分层和虹彩实现技巧可复用至宝石/玻璃类 Shader 开发。",
      "src": "80 Level · 07-22",
      "url": "https://80.lv/articles/breakdown-how-to-create-an-optimized-and-realistic-crystal-material/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 远程资产库功能预览",
      "sum": "Blender 开发中远程资产库，支持在线浏览资产并按需下载。",
      "ta": "可能影响 TA 资产管理工作流，减少本地存储依赖。",
      "src": "Blender 开发博客 · 07-22",
      "url": "https://code.blender.org/2026/07/remote-asset-libraries/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Tear Painter 更新支持纹理取色",
      "sum": "Blender 工具 Tear Painter 新版可直接从纹理中选取颜色。",
      "ta": "提升纹理绘制效率，对材质贴图工作流有直接帮助。",
      "src": "80 Level · 07-22",
      "url": "https://80.lv/articles/new-tear-painter-update-lets-you-pick-colors-directly-from-textures/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Unity URP 地形自适应动态雨系统",
      "sum": "Prism Works 发布 Unity URP 雨系统，支持地形自适应涟漪和建筑遮挡。",
      "ta": "Niagara 特效师可参考其地形交互逻辑，移植至 UE5 雨系统。",
      "src": "80 Level · 07-22",
      "url": "https://80.lv/articles/this-dynamic-rain-system-brings-terrain-adaptive-real-time-rain-effects-to-unity/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "MR-Compare：3D高斯与网格重建对比框架",
      "sum": "MR 框架实现 3D Gaussian Splatting 与网格重建在物理环境中的空间对齐比较。",
      "ta": "为 3D 重建质量评估提供混合现实工具，可能影响扫描资产管线。",
      "src": "arXiv · cs.GR · 07-22",
      "url": "https://arxiv.org/abs/2607.20325v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "快速波光学全息显示渲染",
      "sum": "利用多层图像实现 3D 全息显示的快速波光学渲染方法。",
      "ta": "前沿显示技术，长期可能影响实时渲染输出方式。",
      "src": "arXiv · cs.GR · 07-22",
      "url": "https://arxiv.org/abs/2607.19731v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "低功耗AR眼镜色调映射框架",
      "sum": "提出基于学习的功耗约束色调映射，在 AR 眼镜上优化显示功耗与感知质量。",
      "ta": "对移动/AR 设备渲染优化有参考价值，但非核心工作流。",
      "src": "arXiv · cs.GR · 07-21",
      "url": "https://arxiv.org/abs/2607.19509v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "ATSplat：紧凑前馈3D高斯泼溅",
      "sum": "提出自适应令牌扩展的前馈 3DGS 方法，减少存储开销。",
      "ta": "3DGS 压缩方向进展，可能影响实时 3D 重建资产格式。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.20417"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "S.T.A.L.K.E.R.2 独占费超开发预算",
      "sum": "GSC Game World 透露 Xbox 独占协议金额超过游戏自身开发预算。",
      "ta": "行业商业动态，了解平台独占策略对开发资金的影响。",
      "src": "80 Level · 07-22",
      "url": "https://80.lv/articles/s-t-a-l-k-e-r-2-s-xbox-exclusivity-deal-surpassed-the-game-s-own-development-budget/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Kinect游戏Freefall Racers 2026年复活",
      "sum": "2013年 Kinect 游戏 Freefall Racers 通过 Nex Playground 平台回归。",
      "ta": "怀旧游戏复活案例，对体感交互设计有参考意义。",
      "src": "Game Developer · 07-22",
      "url": "https://www.gamedeveloper.com/business/a-kinect-game-that-debuted-in-2013-has-been-revived-in-the-year-of-our-lord-2026"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Splatoon Raiders 原型曾是塔防游戏",
      "sum": "总监分享 Splatoon 衍生作原型为塔防，后回归系列核心玩法。",
      "ta": "游戏设计迭代案例，了解玩法原型到成品的过程。",
      "src": "Game Developer · 07-22",
      "url": "https://www.gamedeveloper.com/design/splatoon-raiders-started-as-a-tower-defense-game-but-its-splatoon-ness-got-lost"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Human Fall Flat 2取消，直接做3代",
      "sum": "No Brakes Games 创始人回顾十年历程，宣布取消 2 代直接开发 3 代。",
      "ta": "独立游戏开发决策案例，了解系列化开发策略。",
      "src": "Game Developer · 07-22",
      "url": "https://www.gamedeveloper.com/production/-human-fall-flat-2-is-cancelled-we-are-making-human-fall-flat-3-no-brakes-games-founder-looks-back-on-a-defining-decade"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Hasbro 取消多款游戏损失5600万美元",
      "sum": "Hasbro 因取消多个游戏项目记录 5600 万美元减值，将聚焦有特许经营潜力的项目。",
      "ta": "行业投资风向标，了解大厂项目筛选策略。",
      "src": "Game Developer · 07-22",
      "url": "https://www.gamedeveloper.com/business/hasbro-records-56m-write-down-after-scrapping-several-video-games"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Alpha Dog Games 脱离微软恢复独立",
      "sum": "被 Xbox 关闭两年后，Alpha Dog Games 重新获得独立运营权。",
      "ta": "工作室生存案例，了解行业并购后独立回归现象。",
      "src": "Game Developer · 07-22",
      "url": "https://www.gamedeveloper.com/business/alpha-dog-games-returns-to-independence-two-years-after-being-shuttered-by-xbox"
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
