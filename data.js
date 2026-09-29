// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月29日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>毛发重建免专用数据集</em> / <em>恒定内存可微光追追踪</em> / <em>XR 渲染感知高斯条件化</em> / <em>多层 RBD 精修破坏效果</em>。其余按重要性自动排序，红色优先。",
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
      "title": "毛发重建免专用数据集",
      "sum": "FurE 提出无需动物毛发数据集的多视角实例级 3D 毛发重建方法。",
      "ta": "植被/毛发类程序化生成的实例化思路可借鉴，关注其细尺度细节与自遮挡处理。",
      "src": "arXiv · cs.GR · 09-28",
      "url": "https://arxiv.org/abs/2609.35770v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "恒定内存可微光追追踪",
      "sum": "提出恒定内存的可微光追追踪，突破路径长度导致的计算图内存瓶颈。",
      "ta": "可微渲染内存优化对离线/实时混合管线有参考价值，值得精读其反向传播策略。",
      "src": "arXiv · cs.GR · 09-26",
      "url": "https://arxiv.org/abs/2609.32920v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "XR 渲染感知高斯条件化",
      "sum": "ControlGS 针对 XR 下游后处理与光学路径，条件化神经高斯渲染。",
      "ta": "XR 渲染需考虑运行时后处理变化，对 UE5 XR 管线与高斯方案有直接启发。",
      "src": "arXiv · cs.GR · 09-25",
      "url": "https://arxiv.org/abs/2609.32038v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时反射感知高斯 SLAM",
      "sum": "RRG-SLAM 首个实时反射感知高斯 SLAM，分离漫反射与反射分量。",
      "ta": "反射分离的 TSDF-高斯混合表示，对室内场景重建与实时渲染有参考。",
      "src": "arXiv · cs.GR · 09-28",
      "url": "https://arxiv.org/abs/2609.34527v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "语义感知动作重定向",
      "sum": "ReFM 提出语义感知精炼流模型，跨骨骼结构迁移动作并保持语义。",
      "ta": "动作重定向对动画管线有用，关注其无需高质量配对数据的语义学习方式。",
      "src": "arXiv · cs.GR · 09-25",
      "url": "https://arxiv.org/abs/2609.32068v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "虚拟人视觉符号框架",
      "sum": "A.D.A.M.O. 提出语言驱动的视觉符号框架，整合感知推理与动作控制环。",
      "ta": "虚拟人控制环设计对 NPC/数字人交互有参考，关注其 3D 环境接地方式。",
      "src": "arXiv · cs.GR · 09-28",
      "url": "https://arxiv.org/abs/2609.35463v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "增材制造晶格优化",
      "sum": "面向增材制造的晶格结构多目标优化与帕累托前沿构建方法。",
      "ta": "与游戏渲染关联弱，仅程序化几何生成思路可速览。",
      "src": "arXiv · cs.GR · 09-27",
      "url": "https://arxiv.org/abs/2609.33598v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "实时交互世界模型扩展",
      "sum": "WorldPlay2 扩展实时交互世界模型的控制能力与预测视野。",
      "ta": "世界模型若用于游戏内容生成，关注其实时性与控制接口。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.35560"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "交互式 3D 头部生成",
      "sum": "EvolvingAvatar 提出随对话展开而自适应的交互式 3D 头部生成。",
      "ta": "对数字人/面部动画管线有潜在价值，关注其自适应机制。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.35616"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "稀疏视角新视图合成",
      "sum": "VGGT-Diff 结合视觉几何与扩散模型实现稀疏视角新视图合成。",
      "ta": "稀疏视角合成对场景重建与资产生成有参考，关注几何先验的引入方式。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.33253"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "流式世界空间手部估计",
      "sum": "InfiniHand 从第一视角视频流式估计世界空间手部运动。",
      "ta": "对动捕与手部交互有潜在用途，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.35743"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "运动中心视频预训练",
      "sum": "TT-VidT 解耦时间轴，实现高效运动中心视频预训练。",
      "ta": "视频预训练效率优化，与游戏动画关联间接，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.33419"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散奖励模型",
      "sum": "提出扩散奖励模型用于生成质量评估。",
      "ta": "与游戏/实时渲染无直接关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.33803"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "具身反应式聆听框架",
      "sum": "REALM 提出由粗到细的具身反应式聆听生成框架。",
      "ta": "与游戏技术关联弱，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.33095"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "生成模型视觉解题基准",
      "sum": "SolveEdit 提出生成模型视觉问题求解的评测基准。",
      "ta": "评测基准类，与 TA 工作流关联弱，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.35504"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "title": "多层 RBD 精修破坏效果",
      "sum": "前皮克斯 FX TD 分享多层 RBD 仿真工作流，保留已批准破坏运动并叠加碎裂细节。",
      "ta": "破坏特效精修流程对 Houdini 特效师直接可用，值得精读其分层策略。",
      "src": "80 Level · 09-28",
      "url": "https://80.lv/articles/former-pixar-fx-artist-reveals-a-smarter-way-to-refine-destruction/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Unity 高级攀爬检测系统",
      "sum": "面向 Unity 的高级边缘检测与穿越系统，支持复杂几何与 IK 驱动动画。",
      "ta": "IK 驱动动画工作流对角色移动系统有参考，关注其最小配置设计。",
      "src": "80 Level · 09-28",
      "url": "https://80.lv/articles/advanced-ledge-detection-traversal-system-for-unity/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "水沙模拟打造治愈沙盒",
      "sum": "Bubblebird 工作室分享 Unity 中水与沙模拟的优化及玩法塑造经验。",
      "ta": "流体/沙粒模拟在 Unity 中的落地经验，对特效与程序化场景有参考。",
      "src": "80 Level · 09-28",
      "url": "https://80.lv/articles/creating-cozy-sandbox-sandcastle-with-a-focus-on-water-sand-simulation/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "角色雕刻的叙事细节",
      "sum": "Quentin Riviale 分享魂类角色雕刻中视觉丰富度与清晰度的平衡经验。",
      "ta": "角色资产制作中信息传达与视觉清晰度的权衡，对美术管线有参考。",
      "src": "80 Level · 09-28",
      "url": "https://80.lv/articles/storytelling-through-details-sculpting-souls-like-corvus-soldiers/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "石墨铅笔粒子特效",
      "sum": "wildWillowPillow 创作的石墨铅笔风格破坏粒子特效作品展示。",
      "ta": "粒子特效风格化参考，速览即可。",
      "src": "80 Level · 09-28",
      "url": "https://80.lv/articles/take-a-look-at-this-trippy-graphite-pencil-particle-fx/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "免费日常动作动捕包",
      "sum": "免费动捕动画包，包含遛狗、刷牙、开车、喝咖啡等日常动作。",
      "ta": "可直接用于角色动画原型，速览下载。",
      "src": "80 Level · 09-28",
      "url": "https://80.lv/articles/download-this-free-pack-of-mocap-animations-with-everyday-actions/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "面部动画拓扑大师课",
      "sum": "Nur Diker Köksal 展示情绪化老妇面部动画测试，聚焦拓扑。",
      "ta": "面部拓扑与表情动画参考，速览。",
      "src": "80 Level · 09-28",
      "url": "https://80.lv/articles/facial-animation-test-with-very-emotional-old-lady/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "微软三年裁撤逾五千岗",
      "sum": "微软 CEO 称 Xbox 在「精简」，三年裁员超 5750 人并关闭多家工作室。",
      "ta": "行业收缩信号，关注对引擎与工具团队预算的潜在影响。",
      "src": "Game Developer · 09-28",
      "url": "https://www.gamedeveloper.com/production/microsoft-ceo-says-xbox-is-streamlining-after-laying-off-5-750-workers-in-three-years"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Suri 第七音符定档",
      "sum": "Suri: The Seventh Note 将于 10 月 30 日登陆 PS5，历时四年开发。",
      "ta": "独立游戏视觉风格参考，速览。",
      "src": "PlayStation Blog · 09-28",
      "url": "https://blog.playstation.com/2026/09/28/suri-the-seventh-note-launches-oct-30-on-ps5/"
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
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Blender 开发博客、Tech-Artists。"
  },
  "xStale": false
};
