// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月29日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>实时视频世界模型</em> / <em>高斯体渲染加速</em> / <em>网格注意力机制</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "ai",
      "imp": "mid",
      "title": "实时视频世界模型",
      "sum": "Wonder模型支持实时、可控制摄像头的视频世界探索。",
      "ta": "关注实时可交互视频世界模型，可能影响未来游戏场景生成与动态环境构建。",
      "src": "arXiv · cs.GR · 07-28",
      "url": "https://arxiv.org/abs/2607.26037v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "高斯体渲染加速",
      "sum": "提出基于高斯的体渲染表示，用于高效剪切-扭曲可视化。",
      "ta": "体渲染加速技术，对医学可视化或体积特效有参考价值。",
      "src": "arXiv · cs.GR · 07-28",
      "url": "https://arxiv.org/abs/2607.25377v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "网格注意力机制",
      "sum": "提出内在且三角化无关的注意力机制，用于网格学习。",
      "ta": "网格上的注意力机制，可能提升3D模型处理与生成质量。",
      "src": "arXiv · cs.GR · 07-27",
      "url": "https://arxiv.org/abs/2607.24954v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender阻尼跟踪测试",
      "sum": "3D角色艺术家分享在Blender中测试阻尼跟踪约束的经验。",
      "ta": "Blender阻尼跟踪约束技巧，对角色绑定与动画有参考价值。",
      "src": "80 Level · 07-28",
      "url": "https://80.lv/articles/3d-character-artist-shares-how-she-tested-damped-track-constraints-on-blender/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "EverQuest视觉重建",
      "sum": "EverQuest Legends团队分享恢复经典视觉风格的自定义管线。",
      "ta": "经典MMO视觉重建流程，对复古风格或资产恢复项目有参考。",
      "src": "80 Level · 07-28",
      "url": "https://80.lv/articles/interview-how-everquest-legends-recreates-classic-everquest-s-iconic-visual-style/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender风格化毛发",
      "sum": "教程展示使用Blender几何节点创建轻量级风格化毛发与羽毛。",
      "ta": "几何节点毛发方案，对风格化角色或特效有直接参考。",
      "src": "80 Level · 07-28",
      "url": "https://80.lv/articles/tutorial-stylized-fur-feathers-in-blender/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "合作驾驶冒险游戏幕后",
      "sum": "Funselektor分享合作驾驶冒险游戏《over the hill》创作历程。",
      "ta": "独立游戏开发经验，对合作模式与公路题材有参考。",
      "src": "80 Level · 07-28",
      "url": "https://80.lv/articles/over-the-hill-creating-a-co-op-driving-adventure-game/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "电影级VFX幕后",
      "sum": "动画师分享《降世神通》电影中Appa口水特效的幕后制作。",
      "ta": "电影级VFX制作流程，对角色特效与液体模拟有参考。",
      "src": "80 Level · 07-28",
      "url": "https://80.lv/articles/animator-unveils-behind-the-scenes-of-vfx-for-appa-s-slobber-in-avatar-aang-movie/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "自定义遮挡系统",
      "sum": "为《Control》风格游戏Psych Rift开发自定义遮挡系统。",
      "ta": "自定义遮挡系统实现，对类似扭曲现实风格游戏有参考。",
      "src": "80 Level · 07-28",
      "url": "https://80.lv/articles/custom-occlusion-system-for-control-inspired-reality-bending-game/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender纸艺世界",
      "sum": "艺术家展示在Blender中制作的超现实纸艺风格世界。",
      "ta": "纸艺风格3D世界，对风格化场景与材质有参考。",
      "src": "80 Level · 07-28",
      "url": "https://80.lv/articles/check-out-this-surreal-papercraft-style-world-made-in-blender/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "TaleWorlds联合创始人去世",
      "sum": "《骑马与砍杀》工作室TaleWorlds联合创始人İpek Yavuz逝世。",
      "ta": "行业人物讣告，了解工作室历史。",
      "src": "Game Developer · 07-28",
      "url": "https://www.gamedeveloper.com/business/obituary-taleworlds-co-founder-i-pek-yavuz-has-passed-away"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏业副业条款争议",
      "sum": "开发者讨论副业条款对创意自由的限制与困扰。",
      "ta": "行业法律问题，了解对自由职业者的影响。",
      "src": "Game Developer · 07-28",
      "url": "https://www.gamedeveloper.com/production/-i-have-been-hunted-down-by-hr-reps-lawyers-and-comms-people-developers-discuss-the-pain-and-prevalence-of-side-work-clauses"
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
