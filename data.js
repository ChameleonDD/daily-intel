// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月22日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>TT Games 用 UE5 造哥谭开放世界</em> / <em>WorldCrafter 隐式 3D 记忆世界模型</em> / <em>Mira-Scene 像素对齐场景布局</em>。其余按重要性自动排序，红色优先。",
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
      "title": "TT Games 用 UE5 造哥谭开放世界",
      "sum": "TT Games 访谈披露用 World Partition 与 GAS 构建乐高蝙蝠侠开放世界哥谭。",
      "ta": "World Partition 与 Gameplay Ability System 的实战落地案例，值得看大世界分区与技能系统的组织方式。",
      "src": "Unreal Engine · 09-21",
      "url": "https://www.unrealengine.com/developer-interviews/tt-games-brings-gotham-city-to-life-in-lego-batman-legacy-of-the-dark-knight"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "WorldCrafter 隐式 3D 记忆世界模型",
      "sum": "WorldCrafter 提出可相机查询的隐式 3D 感知记忆，实现长时序一致的视频世界模型。",
      "ta": "长时序跨视角一致性是世界模型的老大难，隐式 3D 记忆的思路对程序化场景与实时探索有参考价值。",
      "src": "arXiv · cs.GR · 09-21",
      "url": "https://arxiv.org/abs/2609.24984v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "Mira-Scene 像素对齐场景布局",
      "sum": "Mira-Scene 提出像素对齐的布局表示，解决单图生成 3D 物体难以准确摆入场景的问题。",
      "ta": "单图资产生成已成熟，瓶颈在布局；像素对齐表示对程序化摆放与场景组装工具有直接启发。",
      "src": "arXiv · cs.GR · 09-20",
      "url": "https://arxiv.org/abs/2609.23796v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "ProxyBuild 文本生成可编辑建筑",
      "sum": "ProxyBuild 用网格锚定程序化代理，从文本生成结构化、可编辑的 3D 建筑。",
      "ta": "输出可编辑层级结构而非死网格，对程序化建筑工具链与规则生成方向值得一看。",
      "src": "arXiv · cs.GR · 09-20",
      "url": "https://arxiv.org/abs/2609.23386v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "LINGO 稀疏视角 X 光 3DGS 重建",
      "sum": "LINGO 结合隐式初始化与梯度优化，用 3DGS 做稀疏视角 X 光新视角合成与 CT 重建。",
      "ta": "3DGS 结合物理吸收模型的思路，对体积渲染与稀疏数据重建有方法层面的借鉴。",
      "src": "arXiv · cs.GR · 09-19",
      "url": "https://arxiv.org/abs/2609.22849v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "VISTA 视频注入风格化动画",
      "sum": "VISTA 两阶段框架融合文本结构与参考视频风格，生成风格化 3D 人体动作。",
      "ta": "无需配对三元组的风格迁移思路，对动捕数据复用与风格化动画管线有参考意义。",
      "src": "arXiv · cs.GR · 09-20",
      "url": "https://arxiv.org/abs/2609.23817v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "MoSAT 空间音频驱动动作生成",
      "sum": "MoSAT 从空间音频与文本描述联合生成人体动作。",
      "ta": "音频驱动动作对音效与动画联动、环境交互式动画有潜在应用价值。",
      "src": "arXiv · cs.GR · 09-20",
      "url": "https://arxiv.org/abs/2609.23797v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "暗视觉显示 RGB 转 S/P 比评估",
      "sum": "论文对自然场景做高光谱表征，评估闭式 RGB 到 S/P 比估计在中间视觉显示中的适用性。",
      "ta": "低光显示色调映射的底层信号问题，做夜景与暗部渲染时值得留意。",
      "src": "arXiv · cs.GR · 09-21",
      "url": "https://arxiv.org/abs/2609.24819v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "0.8B 模型生成 3D 反应动画",
      "sum": "论文用 0.8B 小模型做约束程序生成，产出忠实化学过程的 3D 反应动画。",
      "ta": "小模型加约束生成的范式，对程序化动画与规则约束生成有方法参考。",
      "src": "arXiv · cs.GR · 09-21",
      "url": "https://arxiv.org/abs/2609.24457v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "视频扩散模型为何违反物理",
      "sum": "论文剖析注意力机制缺陷，解释视频扩散模型为何产生违反物理的结果。",
      "ta": "理解生成模型的物理失效机制，对判断 AI 生成素材能否进实时管线有直接价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.23658"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "GameHorizon 游戏多时域评测集",
      "sum": "GameHorizon Suite 提供游戏玩法场景下的多时域数据与评测基准。",
      "ta": "游戏玩法评测基准，可用于衡量 AI 在实时交互场景中的表现。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.25001"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "GPU 内核基准测试变异分析",
      "sum": "论文用变异分析方法检验 GPU 内核基准测试判定器的有效性。",
      "ta": "做 GPU 性能基准与优化验证时，可参考其测试判定可靠性的评估思路。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.22220"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型表征蒸馏进机器人策略",
      "sum": "论文将世界模型表征蒸馏进紧凑的 VLA 机器人策略。",
      "ta": "世界模型到轻量策略的蒸馏路线，对实时 AI 决策的算力压缩有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.24682"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 插件面板合并成单菜单",
      "sum": "一款免费工具可将 Blender 所有插件面板合并进一个菜单。",
      "ta": "插件面板爆炸是 TA 日常痛点，这个免费工具能直接改善 Blender 工作流整洁度。",
      "src": "80 Level · 09-21",
      "url": "https://80.lv/articles/this-tool-merges-all-your-blender-add-on-panels-into-one-menu/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 模型上直接画四边面拓扑",
      "sum": "TopoPen 支持在模型表面直接绘制干净四边面拓扑，自动处理吸附、对称与网格生成。",
      "ta": "重拓扑是植被与道具资产的高频环节，直接在模型上画四边面能显著提速。",
      "src": "80 Level · 09-21",
      "url": "https://80.lv/articles/draw-clean-quad-topology-directly-over-your-model-in-blender/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Unity 抖动运动物理工具",
      "sum": "一款 Unity 工具为动画角色添加真实的抖动运动，适用于胸部、腹部、尾巴等部位。",
      "ta": "次级运动是角色表现力的关键，这类工具可省去手写弹簧骨骼的成本。",
      "src": "80 Level · 09-21",
      "url": "https://80.lv/articles/give-animated-characters-realistic-jiggle-motion-with-this-unity-tool/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini 拉格朗日波浪流体模拟",
      "sum": "初级特效师 Fred Bello 分享基于 Wētā 拉格朗日波浪研究的 Houdini 水体模拟搭建细节。",
      "ta": "流体特效的实战拆解，对做水体与波浪类 Niagara/Houdini 效果有直接参考。",
      "src": "80 Level · 09-21",
      "url": "https://80.lv/articles/hypnotizing-fluid-simulation-based-on-w-t-s-research-on-lagrangian-waves/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 几何节点做风格化 VFX",
      "sum": "3D 艺术家 Good Good 逐步讲解用 Blender 几何节点制作风格化 VFX 的流程。",
      "ta": "几何节点做风格化特效的思路，可迁移到程序化特效与植被工具的节点设计。",
      "src": "80 Level · 09-21",
      "url": "https://80.lv/articles/artist-shows-process-of-creating-stylized-vfx-with-blender-s-geometry-nodes/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "闪光紧身裤 Shader 制作揭秘",
      "sum": "作者 Bleeding_Hart 分享闪光紧身裤从各角度闪烁的 Shader 制作方法。",
      "ta": "各向异性闪光类 Shader 的实现细节，对布料与亮片材质有参考。",
      "src": "80 Level · 09-21",
      "url": "https://80.lv/articles/see-these-glitter-tights-sparkle-from-every-angle/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 角色绑定入门教程",
      "sum": "Noggi 发布近一小时视频，覆盖 Blender 角色绑定全部基础内容。",
      "ta": "绑定基础教程，适合团队新人补课或梳理流程。",
      "src": "80 Level · 09-21",
      "url": "https://80.lv/articles/watch-this-blender-tutorial-if-you-re-starting-character-rigging/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "绘画风格格斗动画展示",
      "sum": "Ave Espelita 发布一支绘画风格强烈的格斗动画作品。",
      "ta": "动画表现力参考，可看节奏与打击感的处理。",
      "src": "80 Level · 09-21",
      "url": "https://80.lv/articles/check-out-this-impressive-painterly-style-fighting-animation/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "寂静岭 Townfall 改第一人称",
      "sum": "寂静岭 Townfall 从第三人称转为第一人称，官方列出九点设计变化。",
      "ta": "视角切换对关卡尺度、恐怖氛围与镜头语言的影响，可作设计参考。",
      "src": "PlayStation Blog · 09-21",
      "url": "https://blog.playstation.com/2026/09/21/silent-hill-townfall-9-ways-first-person-changes-the-iconic-horror-formula/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Bungie 称命运系列尚未完结",
      "sum": "Bungie 公布工作室未来规划，强调命运系列仍是其未来基石。",
      "ta": "行业动向速览，与 TA 技术工作无直接关联。",
      "src": "Game Developer · 09-21",
      "url": "https://www.gamedeveloper.com/console/bungie-declares-it-s-not-done-with-destiny-as-it-lays-out-studio-s-future"
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
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Tech-Artists。"
  },
  "xStale": false
};
