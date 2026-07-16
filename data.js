// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月16日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>Houdini 22 发布</em> / <em>超快纹理图集泼溅</em>。其余按重要性自动排序，红色优先。",
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
      "title": "Houdini 22 发布",
      "sum": "SideFX 发布 Houdini 22，原生支持高斯泼溅、新 UI 和程序化工具。",
      "ta": "原生高斯泼溅支持意味着 TA 可直接在 Houdini 中处理实时渲染点云资产，无需外部转换。",
      "src": "80 Level · 07-15",
      "url": "https://80.lv/articles/houdini-22-is-out-now-bringing-native-gaussian-splats-new-ui-and-more/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "超快纹理图集泼溅",
      "sum": "3DGS 新方法：解耦辐射表示，实现超快纹理图集泼溅渲染。",
      "ta": "若成熟可大幅降低高斯泼溅的片段着色开销，对实时场景渲染性能优化有直接参考。",
      "src": "arXiv · cs.GR · 07-15",
      "url": "https://arxiv.org/abs/2607.13808v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "体积逆渲染新框架",
      "sum": "提出神经辐射传输方法，从图像恢复参与介质光学属性。",
      "ta": "对体积云、烟雾等参与介质的材质重建与光照模拟有潜在应用。",
      "src": "arXiv · cs.GR · 07-15",
      "url": "https://arxiv.org/abs/2607.13695v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "渐进推理室内场景生成",
      "sum": "ThinkBLOX 用 VLM 渐进推理生成 3D 室内场景布局。",
      "ta": "程序化生成室内场景的 AI 辅助方法，可加速关卡原型设计。",
      "src": "arXiv · cs.GR · 07-15",
      "url": "https://arxiv.org/abs/2607.13539v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "树状 3D 对象生成框架",
      "sum": "TreeSRNF 用平方根法向场建模树木几何与结构变异性。",
      "ta": "对植被程序化生成算法有直接参考价值，可改进树木 LOD 和多样性。",
      "src": "arXiv · cs.GR · 07-15",
      "url": "https://arxiv.org/abs/2607.13456v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "单目新视角合成",
      "sum": "MetaView 用尺度感知隐式几何先验实现单目新视角合成。",
      "ta": "单目重建技术，可能用于快速生成参考视角或辅助材质贴图。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.12000"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《明日方舟：终末地》PSSR 升级",
      "sum": "PS5 Pro 版 1.4 更新升级 PSSR，提升画质与时间稳定性。",
      "ta": "PSSR 升级对 UE 游戏在 PS5 Pro 上的渲染管线调优有参考意义。",
      "src": "PlayStation Blog · 07-15",
      "url": "https://blog.playstation.com/2026/07/15/arknights-endfield-on-ps5-pro-upgraded-pssr-launches-with-version-1-4/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《使命召唤》动态地图模式",
      "sum": "MW4 引入 Kill Block 模式，模块化战场每局重新配置。",
      "ta": "动态关卡生成思路，可能涉及程序化布局与碰撞检测优化。",
      "src": "PlayStation Blog · 07-15",
      "url": "https://blog.playstation.com/2026/07/15/everything-to-know-about-modern-warfare-4s-ever-changing-kill-block-multiplayer-mode/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "《Denshattack!》开发访谈",
      "sum": "开发者谈融合托尼霍克与 Jet Set Radio 的火车玩法与赛璐璐风格。",
      "ta": "赛璐璐风格与高速运动系统的实现细节对 TA 有启发。",
      "src": "80 Level · 07-15",
      "url": "https://80.lv/articles/interview-how-denshattack-blends-tony-hawk-jet-set-radio-with-trains/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前 Epic 高管加入 Saber",
      "sum": "前 Epic Games VP Steve Allison 任 Saber Interactive 首席商务官。",
      "ta": "行业人事变动，可能影响 Saber 的引擎合作策略。",
      "src": "Game Developer · 07-15",
      "url": "https://www.gamedeveloper.com/business/former-epic-games-vp-appointed-saber-interactive-s-chief-business-officer"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《死亡空间》联合创始人退休",
      "sum": "Glen Schofield 结束 35 年游戏开发生涯退休。",
      "ta": "行业资深人物退休，对恐怖游戏视觉风格有历史影响。",
      "src": "80 Level · 07-15",
      "url": "https://80.lv/articles/dead-space-creator-retires-after-35-years-in-game-development/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox 最新裁员内幕",
      "sum": "被裁员工认为裁员将削弱部分工作室能力。",
      "ta": "行业动荡可能影响项目外包与工具链支持。",
      "src": "Game Developer · 07-15",
      "url": "https://www.gamedeveloper.com/production/-good-work-is-not-going-to-save-your-job-at-this-company-laid-off-xbox-devs-condemn-microsoft"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
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
    "missed": "未覆盖：Unreal Engine、Blender 开发博客。"
  },
  "xStale": false
};
