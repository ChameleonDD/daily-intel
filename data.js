// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月31日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>Blender几何节点引入物理模拟</em> / <em>单图生成可驱动高斯头模</em> / <em>4D高斯时空排序新格式</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "hi",
      "rank": 1,
      "title": "Blender几何节点引入物理模拟",
      "sum": "Blender 5.2 LTS 将推出 Geometry Nodes Physics，在几何节点中集成物理模拟。",
      "ta": "程序化生成工作流可借此在节点图内直接模拟布料、刚体等，减少跨软件往返。",
      "src": "Blender 开发博客 · 07-30",
      "url": "https://code.blender.org/2026/07/geometry-nodes-physics/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "单图生成可驱动高斯头模",
      "sum": "S-Avatar 提出扩散引导的单图 3D 头模生成，并支持 3DGS 动画化。",
      "ta": "单图重建可驱动高斯头模，对虚拟人资产生产管线有直接参考价值。",
      "src": "arXiv · cs.GR · 07-30",
      "url": "https://arxiv.org/abs/2607.28164v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "4D高斯时空排序新格式",
      "sum": "TSOG 扩展 SOG 框架至时间域，高效表示 4D 高斯溅射内容。",
      "ta": "4DGS 资产压缩与流式加载是实时特效和虚拟制作的关键，此格式值得关注。",
      "src": "arXiv · cs.GR · 07-30",
      "url": "https://arxiv.org/abs/2607.28049v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "共享高斯压缩SVBRDF贴图",
      "sum": "提出用共享高斯紧凑表示 mipmapped SVBRDF，降低存储负担。",
      "ta": "材质贴图内存优化新思路，可能影响 PBR 材质资产的标准格式。",
      "src": "arXiv · cs.GR · 07-30",
      "url": "https://arxiv.org/abs/2607.27943v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "时变隐式神经场体渲染",
      "sum": "提出查询高效的随机体渲染框架，用于时变隐式神经体积。",
      "ta": "动态科学体积数据交互渲染，对 Niagara 或自定义体积特效有启发。",
      "src": "arXiv · cs.GR · 07-30",
      "url": "https://arxiv.org/abs/2607.28047v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "2D特征蒸馏提升3D理解",
      "sum": "MeshFM 将视觉基础模型 2D 特征蒸馏到 3D，前馈网络无需优化推理。",
      "ta": "3D 特征提取效率提升，可加速程序化生成中的形状分析与匹配。",
      "src": "arXiv · cs.GR · 07-30",
      "url": "https://arxiv.org/abs/2607.27592v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "HDR10+助力游戏艺术表达",
      "sum": "访谈讨论 HDR10+ GAMING 在 UE 集成、HDR 工作流及显示感知渲染中的应用。",
      "ta": "HDR 管线与显示感知渲染是 TA 调色和材质输出的关键环节。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/interview-how-hdr10-can-help-game-devs-preserve-their-artistic-vision/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Mixtape同步玩法动画音乐",
      "sum": "开发者详解 UE5 中 MetaSounds、动画分层与玩法系统如何同步。",
      "ta": "MetaSounds 与动画分层联动案例，对音画同步类特效设计有参考。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/interview-how-mixtape-synchronizes-gameplay-animation-music-with-ue5/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Roblox推出Blender风格建模",
      "sum": "开发者制作 Blender 风格建模插件，可在 Roblox Studio 内直接建资产。",
      "ta": "跨工具建模流程简化，对多平台资产生产管线有潜在价值。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/modeler-creates-a-blender-style-modeling-plugin-for-roblox-studio/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "动态布料特效资产包发布",
      "sum": "一款可创建动态布料特效的资产包，售价 11.20 美元。",
      "ta": "现成布料特效方案，可快速用于原型验证或补充特效库。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/you-ll-be-able-to-create-dynamic-cloth-based-effects-with-this-pack/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender肌肉布局展开工具",
      "sum": "Cartesian Caramel 发布数字肌肉布局展开方案，并免费提供合成肌肉打印设置。",
      "ta": "角色肌肉系统建模与绑定工作流的新工具，适合生物资产制作。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/unrolling-digital-muscle-layout-in-blender/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender模型一键3D打印",
      "sum": "Dovetail Key 通过绘制线条，两步即可让 Blender 模型可 3D 打印。",
      "ta": "快速生成可打印资产，对实体道具或原型制作有辅助作用。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/easily-make-your-blender-models-3d-printable-by-drawing-lines/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Unity为Netflix游戏提供支持",
      "sum": "Unity 宣布为 Netflix Games 提供专用引擎支持，助力多平台开发。",
      "ta": "引擎平台生态扩展，可能影响跨平台游戏项目的技术选型。",
      "src": "Game Developer · 07-30",
      "url": "https://www.gamedeveloper.com/business/unity-brings-dedicated-engine-support-to-netflix-games"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Subnautica2销量破五百万",
      "sum": "Subnautica 2 在 22 天内售出 500 万份，助力 KRAFTON 最佳第二季度。",
      "ta": "行业销售数据，反映市场对生存类游戏的需求热度。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/subnautica-2-sold-5-million-copies-in-22-days-gave-krafton-its-best-second-quarter-ever/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "印度游戏产业持续增长",
      "sum": "GDAI 总监分析印度 5.5 亿年轻玩家与本土 IP 开发潜力。",
      "ta": "新兴市场动态，可能影响全球化发行与外包合作策略。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/india-s-gaming-boom-is-just-getting-started/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "寂静岭新作开发访谈",
      "sum": "Silent Hill: Townfall 开发者讨论苏格兰背景、复古技术与第一人称战斗。",
      "ta": "恐怖游戏技术风格参考，可关注其美术与交互设计。",
      "src": "PlayStation Blog · 07-30",
      "url": "https://blog.playstation.com/2026/07/30/silent-hill-townfall-developers-discuss-the-scottish-setting-retro-technology-first-person-combat/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "暗黑奇幻游戏角色揭晓",
      "sum": "1666: Amsterdam 公布主要角色，游戏为暗黑奇幻题材。",
      "ta": "角色美术风格参考，可关注其概念设计与渲染表现。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/meet-the-main-characters-from-dark-fantasy-game-1666-amsterdam/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏公司知识流失引担忧",
      "sum": "文章探讨游戏公司裁员导致生产知识流失的问题。",
      "ta": "行业人才流动影响项目稳定性，对团队知识管理有警示。",
      "src": "Game Developer · 07-30",
      "url": "https://www.gamedeveloper.com/production/if-knowledge-if-power-why-are-game-companies-choosing-impotence-"
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
