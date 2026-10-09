// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月9日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>任意3DGS场景变循环动态影像</em> / <em>镜面光照神经缓存新方案</em> / <em>可微渲染引入敏感度AOV</em>。其余按重要性自动排序，红色优先。",
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
      "title": "任意3DGS场景变循环动态影像",
      "sum": "OuroWorld无掩码框架将静态3DGS场景转为多视角无缝循环的3D动态影像。",
      "ta": "植被/环境动态化可参考其无掩码循环运动生成思路，值得精读。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.12461v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "镜面光照神经缓存新方案",
      "sum": "提出面向镜面光照的NRC变体，用反射方向参数化与粗糙度相关辐射目标。",
      "ta": "实时路径追踪镜面反射降噪直接相关，UE5光追管线值得关注。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.11702v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "可微渲染引入敏感度AOV",
      "sum": "将敏感度作为可微渲染的任意输出变量，为导数提供可分解检查的表示。",
      "ta": "为渲染管线调试与参数分析提供新维度，Shader/材质优化可借鉴。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.10852v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "局部可控3D生成免训练管线",
      "sum": "SpaceFlow用文本与引导实现局部可控3D生成，无需训练。",
      "ta": "程序化资产生成的局部控制思路，可关注其对几何与外观的分离控制。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.12399v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "刚体交互局部接触神经模拟",
      "sum": "RiCo通过局部接触推理实现刚体交互的神经模拟。",
      "ta": "物理模拟精度提升方向，对破坏/交互特效有潜在参考。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.12333v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "复用前帧的局部视图合成",
      "sum": "LVS利用相机小位移时图像重叠，复用已渲染视图加速新视角合成。",
      "ta": "3DGS渲染加速思路，对实时场景探索性能优化有启发。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.12127v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "网格转SubD的建模代理工作流",
      "sum": "SubDGuide用建模师启发的代理工作流从密集网格重建细分曲面控制笼。",
      "ta": "程序化建模与拓扑重建工具链可参考其控制笼推断逻辑。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.11721v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "局部PCA正则的高斯泼溅",
      "sum": "PCAsplat用局部PCA正则优化3DGS，改善被遮挡高斯的学习。",
      "ta": "3DGS重建质量提升，对场景扫描与植被重建有参考价值。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.11011v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "免训练物理感知流体视频生成",
      "sum": "Fluid-Gen-Zero将运动交给物理模拟器，外观交给预训练视频生成器。",
      "ta": "流体特效生成思路，物理与外观解耦对Niagara流体有启发。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.10984v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "常数内存可微光追反向传播",
      "sum": "ResLRB实现内存与路径长度无关的反向模式可微光追。",
      "ta": "可微渲染内存瓶颈突破，对渲染管线研究有参考意义。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.10847v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "特征保持压缩通用框架",
      "sum": "FeatureZ通过逐点边界与星形分类实现几何拓扑特征保持的有损压缩。",
      "ta": "科学可视化数据压缩，与游戏资产管线关联较弱，速览即可。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.12371v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "扩散模型反事实响应轨迹归因",
      "sum": "提出反事实响应轨迹方法，追踪扩散模型输出到训练样本的归因。",
      "ta": "AI生成内容溯源，对生成资产版权与调试有潜在价值。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.11238v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "铰接3D资产程序化建模",
      "sum": "USDCraft实现几何接地的铰接3D资产程序化建模用于仿真。",
      "ta": "程序化生成铰接资产，对场景道具与仿真资产管线有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.11322"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "多智能体自我中心世界模型",
      "sum": "提出多智能体自我中心世界模型，支持细粒度具身交互。",
      "ta": "交互式环境模拟方向，对游戏AI与仿真环境构建有启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12299"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "动作忠实机器人世界模型",
      "sum": "DreamTrue用反事实后训练构建动作忠实的机器人世界模型。",
      "ta": "世界模型动作忠实度提升，对交互仿真有潜在参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12468"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散Transformer稀疏注意力",
      "sum": "MC-Sparse解构并缩小扩散Transformer中稠密与稀疏注意力的差距。",
      "ta": "AI推理加速，与游戏渲染管线关联间接，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.06801"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "流式全景世界模型导航",
      "sum": "SPW-Nav提出语言引导导航的流式全景世界模型。",
      "ta": "导航与全景生成，与游戏TA工作流关联较弱。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.08941"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "智能体语言世界模型",
      "sum": "从轨迹到智能体世界：面向交互环境模拟的智能体语言世界模型。",
      "ta": "交互环境模拟方向，与实时渲染关联间接。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.06100"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "RizomUV 2027大幅升级",
      "sum": "RizomUV 2027带来更快展开、实时更新、完整UI定制与无头操作。",
      "ta": "UV工具链重大更新，场景级UV管理与管线支持值得关注。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/rizomuv-2027-introduces-faster-unfolding-live-updates-full-ui-customization/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender一键布尔切割保四边面",
      "sum": "Boolean Master插件一键实现布尔式切割并保持干净四边面拓扑。",
      "ta": "建模拓扑工具，对硬表面与程序化资产工作流有实用价值。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/blender-tool-for-boolean-style-cuts-with-clean-quad-topology/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "手绘风格矿车道具制作教程",
      "sum": "Raphael Fabris分享手绘纹理风格化矿车道具的制作技巧与拓扑经验。",
      "ta": "手绘纹理与跨软件工作流技巧，可速览借鉴。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/how-to-make-a-stylized-game-ready-minecart-prop-using-hand-painted-textures/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "实时WebGL着色器触感UI",
      "sum": "展示由实时WebGL着色器驱动的触感UI效果。",
      "ta": "着色器交互效果参考，速览即可。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/explore-this-tactile-ui-powered-by-real-time-webgl-shader/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "转描技术打造恐怖美术",
      "sum": "Wych Elm拆解Silver Pines的手工美术管线，含1800帧角色与转描怪物。",
      "ta": "非主流美术管线案例，对风格化表现有参考。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/how-silver-pines-used-rotoscoping-to-create-its-unsettling-horror/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "谷歌发布AI游戏创作平台",
      "sum": "Google推出Playground平台，让用户用AI制作游戏。",
      "ta": "AI游戏创作工具动向，关注其对原型制作流程的潜在影响。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/google-released-its-own-game-creation-platform/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox成立XP新部门",
      "sum": "Xbox CEO宣布成立XP部门，专注游戏周边IP拓展业务。",
      "ta": "行业商业动向，与TA工作关联较弱。",
      "src": "Game Developer · 10-08",
      "url": "https://www.gamedeveloper.com/console/xbox-ceo-unveils-new-xbox-division-for-game-adjacent-ventures-named-xp-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "招魂改编恐怖游戏将发售",
      "sum": "Netflix与Until Dawn开发商合作的《招魂》改编游戏即将推出。",
      "ta": "行业产品新闻，速览即可。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/horror-game-from-netflix-until-dawn-s-developers-based-on-the-conjuring-is-coming-soon/"
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
