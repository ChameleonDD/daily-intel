// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月10日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>单步扩散实现实时全局光照</em> / <em>路径追踪按重要性优先渲染</em> / <em>3D物体直接生成高分辨率贴图</em>。其余按重要性自动排序，红色优先。",
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
      "rank": 2,
      "title": "Looman加Nanite优化课",
      "sum": "Tom Looman 给优化课新增两节 Nanite 课：拆解 kitbash 网格 overdraw 与 500 个空 Shading Bin 修复。",
      "ta": "原文是 Nanite VisBuffer/overdraw 与 Shading Bin 优化实战，与你正在做的 Nanite A/B 性能对比直接相关。",
      "handle": "@t_looman",
      "who": "Tom Looman · 06-25",
      "url": "https://x.com/t_looman/status/2070126139482247654"
    },
    {
      "cat": "x",
      "imp": "hi",
      "title": "UE5.8正式发布带AI集成",
      "sum": "UE5.8 上线，终端内 Claude/Codex 经 MCP 全控编辑器，可摆放道具、程序化生成城市、调灯光。",
      "ta": "原文是 UE5.8 发布及 AI 接入编辑器，含程序化生成与 MCP 控制，与你用 MCP 跑 UE 工作流直接相关。",
      "handle": "@SebAaltonen",
      "who": "转发 · 06-17",
      "url": "https://x.com/Grummz/status/2067322819814527179"
    },
    {
      "cat": "x",
      "imp": "hi",
      "title": "UE5.8实验性网格地形",
      "sum": "UE5.8 新增实验性 Mesh Terrain，不再受限高度图，支持世界分区流送与协作分块。",
      "ta": "原文是 UE5.8 Mesh Terrain 实验特性，摆脱 heightfield 限制，与你的地形导入/植被填充管线直接相关。",
      "handle": "@SebAaltonen",
      "who": "转发 · 06-17",
      "url": "https://x.com/UnrealEngine/status/2067249231887225179"
    },
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
      "imp": "mid",
      "title": "World Labs放三篇3D生成",
      "sum": "Ben Mildenhall 团队一次分享三篇新论文，借大规模生成模型与 2D 先验生成 3D 内容。",
      "ta": "原文是借 2D 先验做 3D 内容生成的三篇研究，与你关注的程序化/AI 辅助资产生成方向相关。",
      "handle": "@BenMildenhall",
      "who": "Ben Mildenhall · 06-12",
      "url": "https://x.com/theworldlabs/status/2065466830052098058"
    },
    {
      "cat": "x",
      "imp": "mid",
      "title": "Epic布道师呼吁设性能岗",
      "sum": "Ari Arnbjörnsson 在 Unreal Fest 见到职衔含 Performance 的人，呼吁工作室专设性能优化岗。",
      "ta": "原文是 Epic 布道师主张把性能优化制度化、贯穿研发全程，做引擎性能调优时值得参考其团队配置观点。",
      "handle": "@flassari",
      "who": "Ari Arnbjörnsson · 06-24",
      "url": "https://x.com/flassari/status/2069690018059211176"
    },
    {
      "cat": "x",
      "imp": "mid",
      "title": "Codex群驱动机器人研究",
      "sum": "Jim Fan 发布 ENPIRE：给 8 个 Codex agent 一队机器人加 GPU 和 token 预算自主解任务。",
      "ta": "原文是 AI agent 集群自主驱动真实机器人的实验，关注 AI 进开发/生产管线的可看其调度思路。",
      "handle": "@DrJimFan",
      "who": "Jim Fan · 06-16",
      "url": "https://x.com/DrJimFan/status/2066921736369766762"
    },
    {
      "cat": "x",
      "imp": "lo",
      "title": "Gemini视频模型登顶Arena",
      "sum": "Gemini Omni Flash 在 Video Arena 文生/图生视频双榜登顶，文生视频大幅领先 Veo 3.1。",
      "ta": "原文是视频生成模型榜单更新，视频生成迭代速度可作为 AI 生成素材能力上限的参照。",
      "handle": "@poolio",
      "who": "Ben Poole · 06-11",
      "url": "https://x.com/arena/status/2065112147093545333"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "单步扩散实现实时全局光照",
      "sum": "AMD提出单步潜扩散模型做实时GI，无需迭代即可输出时序稳定的高质量光照。",
      "ta": "若落地，可替代部分光追GI方案，重点关注其时序稳定性与显存/延迟开销。",
      "src": "AMD GPUOpen · 09-09",
      "url": "https://gpuopen.com/learn/temporally-stable-generative-illumination/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "路径追踪按重要性优先渲染",
      "sum": "HiPR分层渐进渲染利用场景变化与光传输，优先渲染最关键的像素。",
      "ta": "对离线/实时PT交互响应有直接参考价值，可借鉴其像素优先级调度思路。",
      "src": "80 Level · 09-09",
      "url": "https://80.lv/articles/how-hipr-makes-path-tracing-feel-more-responsive-by-rendering-what-matters-first/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "3D物体直接生成高分辨率贴图",
      "sum": "SceneHI将2D扩散的高分辨率光照先验提升到3D，无需微调即可在3D物体上生成纹理。",
      "ta": "程序化植被/道具贴图流程的潜在加速点，关注其光照可控性与UV一致性。",
      "src": "arXiv · cs.GR · 09-09",
      "url": "https://arxiv.org/abs/2609.10363v1"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "CUDA 13.4支持Windows on Arm",
      "sum": "CUDA Toolkit 13.4新增Windows on Arm支持，并加强对共享GPU的控制能力。",
      "ta": "若团队有Arm笔记本或共享GPU调度需求，可评估工具链迁移成本。",
      "src": "NVIDIA · 09-09",
      "url": "https://developer.nvidia.com/blog/cuda-toolkit-13-4-adds-windows-on-arm-support-and-greater-control-over-shared-gpus/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多模态推理EPD解耦优化",
      "sum": "NVIDIA介绍编码-预填充-解码解耦，用于加速多模态模型推理服务。",
      "ta": "偏服务端推理优化，与实时渲染管线关联弱，速览即可。",
      "src": "NVIDIA · 09-09",
      "url": "https://developer.nvidia.com/blog/when-to-use-encode-prefill-decode-disaggregation-to-accelerate-multimodal-model-serving/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "动画VFX前期评审意图对齐",
      "sum": "MOONWALK研究动画/VFX前期评审中意图-证据-动作对齐，减少反复澄清。",
      "ta": "对TA与美术协作流程有参考，可借鉴其评审信息结构化思路。",
      "src": "arXiv · cs.GR · 09-09",
      "url": "https://arxiv.org/abs/2609.10385v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "非局部连续介质半隐式模拟",
      "sum": "SIPD将FEM运动方程重构为成对力表示，统一模拟大规模超弹性材料接触摩擦。",
      "ta": "布料/软组织模拟的潜在新解法，关注其在大规模接触场景的稳定性。",
      "src": "arXiv · cs.GR · 09-09",
      "url": "https://arxiv.org/abs/2609.09834v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "在线真实到仿真自适应",
      "sum": "RealSimLoop用可微降阶仿真与视觉反馈，在线恢复形变物体的内部物理量。",
      "ta": "对数字孪生式物理校准有启发，可关注其视觉反馈闭环的工程可行性。",
      "src": "arXiv · cs.GR · 09-09",
      "url": "https://arxiv.org/abs/2609.09828v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "秒级学习物理角色技能",
      "sum": "InstantMimic提出高性能系统，可在数秒内学习基于物理的角色技能。",
      "ta": "对物理动画与角色控制管线有潜在价值，关注其训练效率与泛化性。",
      "src": "arXiv · cs.GR · 09-09",
      "url": "https://arxiv.org/abs/2609.09821v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "可编程世界模型",
      "sum": "HuggingFace收录Programmable World Model论文，探索可编程的世界模型构建。",
      "ta": "若涉及3D场景生成与可控仿真，值得关注其接口设计。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.10540"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "奇幻RPG角色绑定与动画",
      "sum": "Yeyo Studio拆解兽人、龙等不同解剖结构角色的绑定、蒙皮、移动与战斗动画。",
      "ta": "可复用动画集与引擎测试经验，对多角色管线搭建有直接参考。",
      "src": "80 Level · 09-09",
      "url": "https://80.lv/articles/behind-the-rigging-animation-of-fantasy-action-rpg-characters-like-orcs-and-dragons/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender免费CAD重拓扑工具",
      "sum": "Hardcraft提供免费CAD数据重拓扑，输出四边面与三角面混合网格。",
      "ta": "硬表面资产导入Blender后的拓扑处理可省事，速览工具即可。",
      "src": "80 Level · 09-09",
      "url": "https://80.lv/articles/try-this-free-cad-data-retopology-tool-for-blender/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "老年矮人皱纹皮肤纹理",
      "sum": "Nikita Popp分享矮人项目，讲解老化皮肤纹理难点与Paragon毛发材质使用。",
      "ta": "角色皮肤与毛发材质参考，速览其纹理分层思路。",
      "src": "80 Level · 09-09",
      "url": "https://80.lv/articles/mastering-wrinkly-skin-texture-by-making-an-old-medieval-dwarf-in-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "RAID角色同人建模与贴图",
      "sum": "Dahye Han分享RAID: Shadow Legends爱丽丝同人，讲解皮革与兔毛贴图流程。",
      "ta": "材质细节处理参考，速览即可。",
      "src": "80 Level · 09-09",
      "url": "https://80.lv/articles/modeling-and-texturing-a-fan-art-of-alice-from-raid-shadow-legends/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "暴雪工会合同限制生成式AI",
      "sum": "暴雪工会成员批准覆盖1900名员工的合同，含生成式AI使用护栏与裁员保护。",
      "ta": "AI工具在3A生产中的使用边界正被制度化，值得关注对TA工作流的影响。",
      "src": "Game Developer · 09-09",
      "url": "https://www.gamedeveloper.com/production/blizzard-union-workers-ratify-historic-contract-covering-1-900-employees"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Cerny与Keighley设游戏奖学金",
      "sum": "Nova Games Foundation每年向20名年轻游戏设计师提供六位数资助。",
      "ta": "行业人才项目，与TA日常无直接关联，速览。",
      "src": "Game Developer · 09-09",
      "url": "https://www.gamedeveloper.com/business/mark-cerny-and-geoff-keighley-launch-university-affiliated-fellowship-program"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xsolla推出游戏B2B平台",
      "sum": "Game Biz Institute是Xsolla推出的游戏行业B2B平台，提供开发者与运营者实践洞察。",
      "ta": "偏商务资讯，速览即可。",
      "src": "80 Level · 09-09",
      "url": "https://80.lv/articles/game-biz-institute-is-a-new-b2b-platform-for-the-game-industry-by-xsolla/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "UE5 Niagara实时VFX教程合集",
      "sum": "Tech-Artists论坛汇总UE5 Niagara实时VFX的教程与拆解。",
      "ta": "Niagara特效学习资源，可按需查阅。",
      "src": "Tech-Artists · 09-07",
      "url": "https://www.tech-artists.org/t/realtimevfx-in-unreal-engine-5-niagara-tutorials-breakdowns/18538"
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
