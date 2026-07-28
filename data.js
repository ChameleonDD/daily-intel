// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月28日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>显式弹塑性损伤更新</em> / <em>草图纹理感知着色</em> / <em>动态头发头部虚拟人</em>。其余按重要性自动排序，红色优先。",
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
      "title": "显式弹塑性损伤更新",
      "sum": "提出一种平滑显式弹塑性-损伤更新，适用于图形模拟。",
      "ta": "对物理模拟中的材料破坏和塑性变形有直接参考价值。",
      "src": "arXiv · cs.GR · 07-27",
      "url": "https://arxiv.org/abs/2607.24509v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "草图纹理感知着色",
      "sum": "TexSketch提出参考草图着色方法，解决数据集限制。",
      "ta": "对风格化纹理生成和草图辅助工作流有参考意义。",
      "src": "arXiv · cs.GR · 07-27",
      "url": "https://arxiv.org/abs/2607.24261v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态头发头部虚拟人",
      "sum": "DynHair用3D高斯泼溅跟踪和建模动态头发。",
      "ta": "对角色头发实时渲染和虚拟人管线有直接参考。",
      "src": "arXiv · cs.GR · 07-26",
      "url": "https://arxiv.org/abs/2607.23861v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "生成式头部测量模型",
      "sum": "GNM Head提出生成式人体头部参数模型。",
      "ta": "对角色头部建模和生成式管线有参考价值。",
      "src": "arXiv · cs.GR · 07-26",
      "url": "https://arxiv.org/abs/2607.23687v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "极小曲面神经表示",
      "sum": "提出精确神经表示方法用于极小曲面。",
      "ta": "对几何建模和曲面优化有理论参考。",
      "src": "arXiv · cs.GR · 07-26",
      "url": "https://arxiv.org/abs/2607.23437v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "光线追踪AO阴影复用",
      "sum": "提出遮挡点复用技术加速光线追踪AO和阴影。",
      "ta": "对实时光线追踪性能优化有直接参考。",
      "src": "arXiv · cs.GR · 07-25",
      "url": "https://arxiv.org/abs/2607.23122v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "3D高斯泼溅粒子压缩",
      "sum": "ParticleGS用3D高斯泼溅压缩科学粒子数据。",
      "ta": "对大规模粒子数据渲染和压缩有参考。",
      "src": "arXiv · cs.GR · 07-24",
      "url": "https://arxiv.org/abs/2607.22956v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "无网格域随机化",
      "sum": "用3D高斯泼溅参数扰动实现无网格域随机化。",
      "ta": "对Sim-to-Real和有机体渲染有直接参考。",
      "src": "arXiv · cs.GR · 07-24",
      "url": "https://arxiv.org/abs/2607.22890v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender风格化场景教程",
      "sum": "crzyzhaa发布Blender风格化场景新手教程。",
      "ta": "对风格化资产制作工作流有参考。",
      "src": "80 Level · 07-27",
      "url": "https://80.lv/articles/learn-blender-techniques-to-make-a-stylized-scene-with-this-beginner-s-tutorial/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "视差伪管道内部技巧",
      "sum": "用经典视差窗口技巧伪造地铁管道内部。",
      "ta": "对低成本环境伪装有直接参考。",
      "src": "80 Level · 07-27",
      "url": "https://80.lv/articles/fake-tube-interior-using-classic-parallax-windows-trick/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "无模拟伪流水技巧",
      "sum": "经典技巧伪造流动水面，无需流体模拟。",
      "ta": "对低性能开销水效果有参考。",
      "src": "80 Level · 07-27",
      "url": "https://80.lv/articles/classic-trick-to-fake-flowing-water-without-fluid-simulation/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "血源猎人游戏就绪资产",
      "sum": "Victor Monge López分享血源猎人粉丝资产制作流程。",
      "ta": "对角色雕刻、头发卡片和游戏就绪管线有参考。",
      "src": "80 Level · 07-27",
      "url": "https://80.lv/articles/breakdown-game-ready-bloodborne-s-old-hunter-fan-art/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender视频全身动捕",
      "sum": "BlendCap从任意视频提取全身、手部和面部动捕。",
      "ta": "对低成本动捕管线有直接参考。",
      "src": "80 Level · 07-27",
      "url": "https://80.lv/articles/full-body-hand-facial-motion-capture-from-any-video-in-blender/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "雅达利经典IP电影化",
      "sum": "Atari与环球合作制作《小行星》等经典游戏电影。",
      "ta": "对游戏IP跨媒体开发有参考。",
      "src": "Game Developer · 07-27",
      "url": "https://www.gamedeveloper.com/business/atari-and-universal-to-create-movies-based-on-classic-properties-including-asteroids-and-missile-command"
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
