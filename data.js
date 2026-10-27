// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月27日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>CVTSplat 用Voronoi重建多视图</em> / <em>GaussianSpline 动态4D高斯</em> / <em>断件模型生成Blendshape</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "mid",
      "title": "CVTSplat 用Voronoi重建多视图",
      "sum": "以自适应质心Voronoi划分做多视图形状与外观重建，降低优化中重复重建开销。",
      "ta": "关注其自适应空间划分思路，或可借鉴到程序化植被分布与LOD划分。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.35347v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "GaussianSpline 动态4D高斯",
      "sum": "用自适应非均匀分段三次贝塞尔样条建模每个高斯运动，实现动态4D高斯泼溅。",
      "ta": "动态场景重建的运动参数化方案，对植被风动等非刚体动画重建有参考价值。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.35224v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "断件模型生成Blendshape",
      "sum": "针对含多个不连通部件的动漫风角色模型，生成ARKit/MediaPipe固定表情Blendshape。",
      "ta": "角色面部管线中处理断件网格的实用案例，可参考其部件拆分策略。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.35076v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "仿昆虫逆折纸曲面成形",
      "sum": "受昆虫变态发育褶皱展开启发，提出逆折纸方法设计曲面成形的褶皱结构。",
      "ta": "几何设计思路偏学术，暂与实时管线距离较远，速览即可。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.34903v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RacerGS 压缩3D高斯泼溅",
      "sum": "用残差自回归上下文构建紧凑3DGS压缩框架，显著降低参数存储与传输量。",
      "ta": "3DGS资产体积是落地瓶颈，压缩方案直接影响扫描植被/场景的运行时内存预算。",
      "src": "arXiv · cs.GR · 10-25",
      "url": "https://arxiv.org/abs/2610.34263v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "单相机可试穿虚拟人建模",
      "sum": "仅用单目视频或单图重建高保真、可动画、可试穿的虚拟人化身。",
      "ta": "单相机重建降低数字人采集门槛，与植被/特效本职关联较弱。",
      "src": "arXiv · cs.GR · 10-25",
      "url": "https://arxiv.org/abs/2610.34223v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "神经服装仿真显式摩擦建模",
      "sum": "为GNN服装仿真引入显式摩擦项与可设摩擦系数μ，替代隐式训练能量中的摩擦。",
      "ta": "布料/软体仿真中摩擦参数可控化，对角色与植被交互的物理表现有借鉴意义。",
      "src": "arXiv · cs.GR · 10-24",
      "url": "https://arxiv.org/abs/2610.33492v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "WorldCast 大角度相机可控角色视频",
      "sum": "提出世界一致的角色视频生成方法，支持大角度相机控制。",
      "ta": "相机可控的角色视频生成，可关注其在镜头运动一致性上的处理方式。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.33135"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "World-in-Context 交互式视频世界模型",
      "sum": "以in-context条件实现可交互的视频世界建模。",
      "ta": "交互式世界模型方向，与实时引擎结合尚早，关注其条件控制接口设计。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.33169"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 推拉变焦单滑块工具",
      "sum": "免费Blender工具，用单个滑块同步控制相机移动与焦距实现Dolly Zoom。",
      "ta": "镜头预演的快捷工具，可省去手动同步焦距与位移的调参时间。",
      "src": "80 Level · 10-26",
      "url": "https://80.lv/articles/free-blender-tool-for-dolly-zoom-camera-effect/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 做概念图背景流程",
      "sum": "作者Ullaiin讲解Blender基础，并演示如何把3D融入概念美术工作流。",
      "ta": "3D辅助2D概念图的常规流程，适合团队新人快速上手参考。",
      "src": "80 Level · 10-26",
      "url": "https://80.lv/articles/how-to-use-blender-for-backgrounds-in-concept-art/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox 拒Netflix五亿改编约",
      "sum": "报道称Netflix拟以5亿美元改编Xbox多个游戏IP，Xbox为抬价拒绝。",
      "ta": "IP影视化商业动向，与TA日常无直接关系，速览即可。",
      "src": "Game Developer · 10-26",
      "url": "https://www.gamedeveloper.com/business/xbox-reportedly-turned-down-a-500-million-deal-from-netflix-for-adapting-gaming-properties"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "两人两月做出百万销量UE5独立游戏",
      "sum": "两名日本开发者用UE5两个月做出Prop Hunt风格游戏，四天售出百万份。",
      "ta": "小团队UE5快速原型到爆款的案例，可看其玩法原型与迭代节奏。",
      "src": "Unreal Engine · 10-26",
      "url": "https://www.unrealengine.com/developer-interviews/meccha-chameleon-how-two-devs-built-the-indie-smash-hit-of-the-summer"
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
