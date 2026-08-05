// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月5日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>混元3D Buffalo 统一生成</em>。其余按重要性自动排序，红色优先。",
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
      "title": "JoyAI 实时视频编辑模型",
      "sum": "自回归扩散模型实现实时开放式视频编辑，支持任意指令修改。",
      "ta": "视频编辑模型可辅助制作动态材质预览或快速迭代特效参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.03974"
    },
    {
      "cat": "ai",
      "imp": "hi",
      "title": "混元3D Buffalo 统一生成",
      "sum": "腾讯混元3D Buffalo 1.0发布，统一多模态3D生成、理解与编辑。",
      "ta": "统一3D生成与编辑模型可能重塑程序化资产生产管线，值得深入评估。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.02711"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "世界模型综述引路",
      "sum": "论文探讨世界模型领域现状与未来方向，涵盖生成与推理。",
      "ta": "世界模型进展或影响游戏内动态场景生成与NPC行为模拟。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.02713"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Unity地牢环境资产包",
      "sum": "资产合集含291个独特网格和478个预制件，用于构建地牢环境。",
      "ta": "可直接复用的地牢模块化资产，适合快速搭建关卡原型。",
      "src": "80 Level · 08-04",
      "url": "https://80.lv/articles/this-asset-collection-helps-you-build-dungeon-style-environments-in-unity/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "MetaHuman角色制作解析",
      "sum": "艺术家分享Ariadne角色制作，用MetaHuman调比例、处理3D扫描并转AI输出为ZBrush笔刷。",
      "ta": "MetaHuman与AI转笔刷流程对角色资产生产有直接参考价值。",
      "src": "80 Level · 08-04",
      "url": "https://80.lv/articles/creating-a-detailed-and-expressive-character-inspired-by-cretan-mycenaean-culture/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "游戏工作室弃用旧版控",
      "sum": "Diversion定位为Perforce和Git的现代替代，支持UE、Unity及大文件管线。",
      "ta": "版本控制工具演进影响大文件与协作流程，TA需关注兼容性。",
      "src": "80 Level · 08-04",
      "url": "https://80.lv/articles/game-studios-are-moving-beyond-legacy-version-control-and-here-s-why/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏行业困难基金募款",
      "sum": "开发者五天筹款13万美元，支持裁员同行，目标20万美元。",
      "ta": "行业裁员潮持续，关注对团队稳定与项目周期的影响。",
      "src": "Game Developer · 08-04",
      "url": "https://www.gamedeveloper.com/business/the-game-industry-hardship-fund-bundle-surpasses-130-000"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "腾讯Lightspeed LA裁员",
      "sum": "腾讯旗下Lightspeed LA裁员68人，因项目创意方向调整。",
      "ta": "项目方向变动可能影响技术栈选择与管线调整。",
      "src": "Game Developer · 08-04",
      "url": "https://www.gamedeveloper.com/business/tencent-owned-lightspeed-la-is-laying-off-staff"
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
