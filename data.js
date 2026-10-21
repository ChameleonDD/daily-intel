// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月21日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>视频模型驱动可玩世界</em> / <em>3DGS 遮挡感知致密化</em> / <em>视频动作迁移到任意骨架</em>。其余按重要性自动排序，红色优先。",
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
      "title": "视频模型驱动可玩世界",
      "sum": "Matrix-Game 4.0 提出将游戏执行与视觉生成分离的可执行游戏框架路线图。",
      "ta": "关注其「执行与渲染解耦」思路，对实时生成式场景与低延迟交互架构有参考价值。",
      "src": "arXiv · cs.GR · 10-20",
      "url": "https://arxiv.org/abs/2610.27999v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "3DGS 遮挡感知致密化",
      "sum": "指出 3DGS 自适应密度控制的视锥可见性过滤无视遮挡，提出按贡献而非视角计数致密化。",
      "ta": "3DGS 重建质量与冗余高斯问题的直接改进点，做扫描/资产重建流程值得读。",
      "src": "arXiv · cs.GR · 10-19",
      "url": "https://arxiv.org/abs/2610.27108v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "视频动作迁移到任意骨架",
      "sum": "提出联合生成 3D 运动与视频的方法，可把视频中的动作重定向到任意 3D 骨架资产。",
      "ta": "若落地可打通视频参考到骨骼动画的管线，对程序化动画与动捕替代有想象空间。",
      "src": "arXiv · cs.GR · 10-20",
      "url": "https://arxiv.org/abs/2610.28632v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "精灵动画神经方向帧生成",
      "sum": "面向游戏精灵动画，提出可控方向帧生成，支持中间帧插值与向前外推。",
      "ta": "2D 序列帧工作流的自动化补帧方向，可关注其外推能力对循环动画的适用性。",
      "src": "arXiv · cs.GR · 10-19",
      "url": "https://arxiv.org/abs/2610.27253v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "几何感知模型排布物体",
      "sum": "GALA 用几何感知语言模型推理支撑、包含等细粒度约束，实现可控 3D 场景物体摆放。",
      "ta": "程序化场景布置的语义约束求解思路，对植被/道具散布规则设计有借鉴。",
      "src": "arXiv · cs.GR · 10-20",
      "url": "https://arxiv.org/abs/2610.28280v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3D 表示影响语义特征抬升",
      "sum": "OV-Foam 分析 3DGS 图元重叠导致反投影特征抬升次优，改进开放词汇分割。",
      "ta": "做 3DGS 场景语义标注或分割时，可参考其对图元重叠问题的处理。",
      "src": "arXiv · cs.GR · 10-20",
      "url": "https://arxiv.org/abs/2610.28131v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3DGS 编辑用于变化检测",
      "sum": "利用自动 3DGS 编辑与贝叶斯证据融合，实现在线场景变化检测。",
      "ta": "数字孪生/场景更新方向，关注其变化信念更新机制是否可用于运行时场景维护。",
      "src": "arXiv · cs.GR · 10-20",
      "url": "https://arxiv.org/abs/2610.28490v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "NeRF 自监督几何正则",
      "sum": "提出跨射线自监督一致性正则，缓解 vanilla NeRF 密度场几何噪声与不准。",
      "ta": "NeRF 几何质量基础改进，做体积重建或深度提取时可留意。",
      "src": "arXiv · cs.GR · 10-20",
      "url": "https://arxiv.org/abs/2610.27776v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "LiDAR 神经隐式能量优化",
      "sum": "针对稀疏噪声 LiDAR 输入，用神经隐式能量优化抑制 SDF 抖动与伪影。",
      "ta": "偏测绘/大场景重建，与游戏管线关联较弱，速览即可。",
      "src": "arXiv · cs.GR · 10-20",
      "url": "https://arxiv.org/abs/2610.28598v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "少步生成式参考渲染",
      "sum": "SolarRenderer 提出少步数的生成式参考渲染方法。",
      "ta": "少步扩散用于渲染出图，关注其是否能进入概念/参考图快速迭代流程。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.28630"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "可动画高斯化身查询",
      "sum": "HumanSkill-4D 实现免训练的语言查询时空可动画高斯化身。",
      "ta": "数字人/化身方向，与植被和特效本职距离较远，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.24452"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型校正训练",
      "sum": "提出面向扩散模型的校正训练方法。",
      "ta": "通用扩散训练技巧，暂无明确引擎/实时关联，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.14136"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "新维加斯模组加路径追踪",
      "sum": "WIP 模组为《辐射：新维加斯》加入路径追踪、物理天空体积云与真实光源改造。",
      "ta": "老引擎改造案例，可看其光源与天空系统替换手法对自研管线的启发。",
      "src": "80 Level · 10-20",
      "url": "https://80.lv/articles/this-wip-mod-adds-path-tracing-to-fallout-new-vegas/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini 水体特效拆解",
      "sum": "Yuki Ito 发布其 Houdini 水体 FX 展示卷的拆解版本。",
      "ta": "流体特效参考，可看其水体解算与渲染组织方式。",
      "src": "80 Level · 10-20",
      "url": "https://80.lv/articles/yuki-ito-released-a-breakdown-version-of-their-houdini-water-fx-showreel/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Plasticity 2026.2 发布",
      "sum": "Plasticity 2026.2 新增曲率分析着色器、边对齐选项与 PolySplines 控制点编辑。",
      "ta": "CAD 建模工具更新，曲率分析着色器对硬表面建模检查有用。",
      "src": "80 Level · 10-20",
      "url": "https://80.lv/articles/3d-modeling-cad-software-plasticity-2026-2-has-been-released/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "UE5 开发课程合集上线",
      "sum": "24 门以上 UE5 课程合集，覆盖蓝图、玩法编程、物理与 MetaSounds。",
      "ta": "偏入门培训内容，对资深 TA 价值有限，速览。",
      "src": "80 Level · 10-20",
      "url": "https://80.lv/articles/learn-unreal-engine-5-game-development-with-over-24-courses-from-this-bundle/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Fuse Games 谈联合开发框架",
      "sum": "Fuse Games CEO 拆解《星球大战：银河赛车》的分布式联合开发框架。",
      "ta": "制作管理向内容，关注跨团队协作分工方式即可。",
      "src": "Game Developer · 10-20",
      "url": "https://www.gamedeveloper.com/production/fuse-games-ceo-breaks-down-codev-framework-for-star-wars-galactic-racer"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "开发者警告发行合同陷阱",
      "sum": "Innersloth 联合创始人提醒开发者市面上存在大量糟糕的发行交易。",
      "ta": "商务向提醒，与 TA 技术工作无直接关联，速览。",
      "src": "Game Developer · 10-20",
      "url": "https://www.gamedeveloper.com/business/outersloth-co-founder-warns-devs-there-are-some-very-bad-deals-out-there-"
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
