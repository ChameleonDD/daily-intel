// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月28日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE 5.8 Mutable 正式生产可用</em> / <em>Epic 改 EULA 允许 AI 训练</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "UE 5.8 Mutable 正式生产可用",
      "sum": "Mutable 工具集在 UE 5.8 转为 Production-Ready，并同步更新示例工程。",
      "ta": "运行时角色定制管线可正式上项目，值得评估其骨骼/材质变体对性能与包体的影响。",
      "src": "Unreal Engine · 10-27",
      "url": "https://www.unrealengine.com/news/mutable-sample-for-runtime-character-customization-now-updated-for-ue-5-8"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 2,
      "title": "Epic 改 EULA 允许 AI 训练",
      "sum": "Epic 更新 EULA，允许用 UE 与 MetaHuman 输出训练 AI，开发者可按项目限制。",
      "ta": "自研资产与 MetaHuman 产出可能被纳入训练语料，需确认项目合同与资产授权边界。",
      "src": "Game Developer · 10-27",
      "url": "https://www.gamedeveloper.com/programming/epic-is-updating-its-eula-to-allow-ai-training-on-outputs-from-unreal-engine-and-metahuman"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "RTX Spark 平台主打神经渲染",
      "sum": "NVIDIA 推出面向 AI 开发与游戏的 Windows PC 平台 RTX Spark，基于 Blackwell RTX。",
      "ta": "关注其神经渲染与 AI 角色在游戏端的落地形态，判断对渲染管线的新要求。",
      "src": "NVIDIA · 10-27",
      "url": "https://developer.nvidia.com/blog/nvidia-rtx-spark-powers-neural-rendering-and-ai-characters-in-games/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "六边形面元替代高斯泼溅",
      "sum": "提出 Hexels 平面六边形面元与一阶空间颜色场，降低渲染与重建开销。",
      "ta": "紧凑图元思路可参考到植被/地表点云表达，关注显存与重建质量权衡。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37668v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CT 体渲染烘焙为 3DGS",
      "sum": "CTBakeGS 无需训练即可把 CT 体渲染结果烘焙成 3D 高斯泼溅。",
      "ta": "体渲染转实时图元的烘焙思路，可类比体积雾/流体特效的离线转实时方案。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37406v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "VR 无界 3DGS 背景补全",
      "sum": "DomeGS 针对 VR 中无界 3DGS 场景做感知一致的背景补全。",
      "ta": "关注其补全策略对 VR 大场景空洞问题的处理，可迁移到环境搭建流程。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37172v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "路径追踪网格插入高斯场景",
      "sum": "GraftRay 通过路径追踪把网格物体插入 2DGS/3DGS 场景并保证光照一致。",
      "ta": "虚拟物体与扫描场景的光照/阴影一致性，是混合渲染管线的关键参考。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37036v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "MPM 强形变弹性体求解器",
      "sum": "提出基于总形变的 MPM 求解器，可在强形变下恢复且自然处理接触。",
      "ta": "对布料/软体与流体耦合特效的数值稳定性有参考价值。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.36945v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "可复用传输骨架加速 PDE",
      "sum": "用持久化传输骨架复用随机游走轨迹，加速交互式蒙特卡洛 PDE 求解。",
      "ta": "路径复用思路与实时路径追踪降噪有相通之处，可速览。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.36931v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高斯 SLAM 解耦几何与跟踪",
      "sum": "LingGS 将前馈几何预测与相机跟踪解耦，提升单目高斯 SLAM 重建质量。",
      "ta": "扫描/实景重建流程的实时化参考，关注有限优化预算下的质量表现。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.36853v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "长时序任务可视化视角规划",
      "sum": "VISTA 提出可微的视角规划方法，用于长时序任务的 3D 过程可视化。",
      "ta": "与工具链中的自动取景/演示镜头生成有潜在关联，速览即可。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.36111v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "多视图渲染合并为单张纹理",
      "sum": "提出把稀疏多视图渲染整合为单张一致纹理的系统，可接入生成模型。",
      "ta": "与程序化贴图/资产纹理烘焙流程相关，值得看其图集合并策略。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.36098v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5 主材质做风格化小屋",
      "sum": "作者分享模块化资产搭建、UE5 复杂主材质与手工雕刻风格化植被的流程。",
      "ta": "主材质组织与风格化植被手工雕刻，直接对口植被工具与材质性能。",
      "src": "80 Level · 10-27",
      "url": "https://80.lv/articles/building-a-stylized-mountain-cabin-with-modular-assets-and-custom-shaders/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 替代 AE 做 MV",
      "sum": "展示如何在 Blender 而非 After Effects 中完成音乐视频的动态设计。",
      "ta": "Blender 动效工作流可作工具链替代方案参考，速览。",
      "src": "80 Level · 10-27",
      "url": "https://80.lv/articles/see-how-this-music-video-was-made-in-blender-instead-of-after-effects/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 实时运动路径插件更新",
      "sum": "Motion Path Pro 插件新增功能，支持实时运动路径显示。",
      "ta": "动画调试辅助工具，速览即可。",
      "src": "80 Level · 10-27",
      "url": "https://80.lv/articles/real-time-motion-paths-add-on-for-blender-gets-updated/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "几何生成助力空间理解",
      "sum": "论文探讨几何生成任务如何帮助模型进行空间理解与推理。",
      "ta": "与 3D 生成模型能力边界相关，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.36022"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Rockstar 员工投票组建工会",
      "sum": "Rockstar 员工将在 GTA6 发售前两周内投票决定是否承认工会。",
      "ta": "行业劳资动向，关注对 3A 制作节奏的潜在影响。",
      "src": "Game Developer · 10-27",
      "url": "https://www.gamedeveloper.com/business/rockstar-workers-to-vote-on-unionization-ahead-of-grand-theft-auto-vi-release"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Warhorse 遭网络安全事件",
      "sum": "《天国拯救》开发商披露遭遇严重网络安全攻击，正在评估影响。",
      "ta": "提醒项目资产与源码的访问安全，速览。",
      "src": "Game Developer · 10-27",
      "url": "https://www.gamedeveloper.com/programming/warhorse-studios-hit-by-an-undetailed-cybersecurity-incident"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Sucker Punch 裁员 24 人",
      "sum": "Sucker Punch 裁减 24 人，约占团队 10%，称与市场及下个项目需求对齐。",
      "ta": "行业收缩信号，速览。",
      "src": "Game Developer · 10-27",
      "url": "https://www.gamedeveloper.com/business/sucker-punch-lays-off-24-to-align-with-current-market-next-project-needs"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Konami 谈寂静岭多形态布局",
      "sum": "制作人谈寂静岭的创作自由、第一人称恐怖与苏格兰环境还原及系列未来。",
      "ta": "环境还原与美术方向参考，速览。",
      "src": "80 Level · 10-27",
      "url": "https://80.lv/articles/interview-konami-envisions-silent-hill-like-a-premium-tv-series-with-various-game-formats/"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "Unreal Engine",
      "NVIDIA",
      "Blender 开发博客",
      "PlayStation Blog",
      "arXiv · cs.GR",
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：AMD GPUOpen。"
  },
  "xStale": false
};
