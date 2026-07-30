// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月30日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>凸碰撞自由区域</em> / <em>结构感知高斯泼溅</em> / <em>面向XR的3DGS压缩</em>。其余按重要性自动排序，红色优先。",
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
      "title": "凸碰撞自由区域",
      "sum": "提出CCFR方法，用局部凸可行区域显式表示碰撞约束。",
      "ta": "对碰撞检测和物理模拟有参考价值，可关注其与网格原语的集成方式。",
      "src": "arXiv · cs.GR · 07-29",
      "url": "https://arxiv.org/abs/2607.26901v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "结构感知高斯泼溅",
      "sum": "StructureGS用于铰接物体重建，分离几何、外观和运动参数。",
      "ta": "3DGS在可动部件重建上的进展，可能影响程序化资产生成管线。",
      "src": "arXiv · cs.GR · 07-29",
      "url": "https://arxiv.org/abs/2607.26889v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "面向XR的3DGS压缩",
      "sum": "AtlasLC实现物体级3DGS快速编解码，适配XR资产管线。",
      "ta": "压缩和解码效率对实时渲染和XR部署有实际意义，可跟踪其性能数据。",
      "src": "arXiv · cs.GR · 07-29",
      "url": "https://arxiv.org/abs/2607.26525v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "全局Pass屏障研究",
      "sum": "Blade渲染器用全局屏障替代逐资源追踪，跨厂商验证性能。",
      "ta": "对Vulkan管线屏障策略有参考价值，可了解全局屏障的跨平台表现。",
      "src": "arXiv · cs.GR · 07-29",
      "url": "https://arxiv.org/abs/2607.26506v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CG世界状态数据集",
      "sum": "CG-World提供大规模工业CG世界状态数据，用于世界模型训练。",
      "ta": "数据集来自工业CG，可能为游戏场景理解或程序化生成提供训练基础。",
      "src": "arXiv · cs.GR · 07-29",
      "url": "https://arxiv.org/abs/2607.26452v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "人体运动转四足动画",
      "sum": "Two2Four从人体运动生成四足动物动作，用于虚拟制作。",
      "ta": "对角色动画管线有启发，可关注其运动重定向质量。",
      "src": "arXiv · cs.GR · 07-28",
      "url": "https://arxiv.org/abs/2607.26108v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时视觉语言动作模型",
      "sum": "TurboVLA在RTX 4090上以32Hz运行，显存低于1GB。",
      "ta": "低显存实时推理对游戏AI或交互系统有潜在应用，但未明确游戏场景。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.27205"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "游戏求解器辅助LLM",
      "sum": "CAST用游戏求解器作为回合级教师，训练LLM智能体。",
      "ta": "将游戏求解器融入LLM训练，可能提升游戏AI决策能力。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.25308"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "星战风3D场景解析",
      "sum": "Matvey Meleshko分享Ember Bazaar场景制作流程，含Marvelous Designer布料和材质。",
      "ta": "可参考其布料模拟和材质写实化工作流，适合场景美术学习。",
      "src": "80 Level · 07-29",
      "url": "https://80.lv/articles/breakdown-creating-a-star-wars-inspired-arabian-style-3d-scene-with-sci-fi-elements/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "实体木偶在数字时代价值",
      "sum": "Furry Puppet Studio讨论实体木偶制作流程及其不可替代性。",
      "ta": "对角色设计和特效制作有启发，但非直接技术参考。",
      "src": "80 Level · 07-29",
      "url": "https://80.lv/articles/interview-why-practical-puppets-still-matter-in-the-age-of-digital-characters/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "卡普空年更生化危机",
      "sum": "Capcom计划每年发布一款《生化危机》游戏，含重制版。",
      "ta": "行业动态，对游戏开发周期有参考意义，但无直接技术细节。",
      "src": "80 Level · 07-29",
      "url": "https://80.lv/articles/capcom-is-aiming-to-release-a-resident-evil-game-every-year/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏AI专家谈应用与风险",
      "sum": "Luke Dicken分析AI在游戏开发中的历史、生成式AI及风险。",
      "ta": "对AI在游戏管线中的定位有参考价值，但无具体技术方案。",
      "src": "80 Level · 07-29",
      "url": "https://80.lv/articles/game-ai-expert-explains-where-ai-actually-belongs-in-game-development-and-the-risks/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "腾讯Lightspeed LA裁员",
      "sum": "《Last Sentinel》开发商因项目方向调整裁员。",
      "ta": "行业动态，关注腾讯旗下工作室变动。",
      "src": "Game Developer · 07-29",
      "url": "https://www.gamedeveloper.com/business/tencent-owned-lightspeed-la-is-laying-off-staff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Epic挖角暴雪战网负责人",
      "sum": "Martin Keely出任Epic Games Store和在线服务副总裁。",
      "ta": "Epic平台战略调整，可能影响虚幻引擎生态。",
      "src": "Game Developer · 07-29",
      "url": "https://www.gamedeveloper.com/business/epic-games-hires-former-head-of-blizzard-s-battle-net"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "EA CEO获3860万美元薪酬",
      "sum": "EA CEO Andrew Wilson在裁员和GenAI采用后获高额薪酬。",
      "ta": "行业动态，反映高管薪酬与公司策略的关联。",
      "src": "Game Developer · 07-29",
      "url": "https://www.gamedeveloper.com/business/ea-boss-awarded-38-6m-after-year-of-franchise-success-studio-layoffs-and-genai-adoption"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Double Fine被Xbox剥离后裁员",
      "sum": "Double Fine在脱离Xbox后为生存进行裁员。",
      "ta": "行业动态，关注独立工作室生存状况。",
      "src": "Game Developer · 07-29",
      "url": "https://www.gamedeveloper.com/business/double-fine-making-layoffs-after-being-jettisoned-by-xbox"
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
