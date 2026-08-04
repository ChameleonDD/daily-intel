// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月4日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>材质感知3D部件分解</em> / <em>自回归绑定模型适配植物骨架</em> / <em>多智能体系统生成粒子特效</em>。其余按重要性自动排序，红色优先。",
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
      "title": "分层符号色彩寻址系统",
      "sum": "提出PTI，基于RGB立方体递归二分构建分层符号色彩寻址系统。",
      "ta": "关注其分层色彩组织方式，或可启发材质与调色工具的数据结构设计。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.02460v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "傅里叶潜空间扩散生成TPMS",
      "sum": "提出扩散框架，可控生成低残余平均曲率的三周期极小曲面结构。",
      "ta": "TPMS在程序化纹理与体积建模中有潜力，值得关注其可控性方法。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.02151v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "稀疏负采样加速大规模图布局",
      "sum": "提出SNAP-tFDP，用稀疏负采样实现大规模图布局的力导向放置。",
      "ta": "图布局算法或可用于程序化生成中的节点网络可视化与调试。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.01907v1"
    },
    {
      "cat": "ai",
      "imp": "hi",
      "rank": 1,
      "title": "材质感知3D部件分解",
      "sum": "提出PartMat，用单一全局潜变量实现材质感知的3D部件分解。",
      "ta": "直接关联3D资产编辑工作流，按材质边界分解部件可提升资产可编辑性。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.01825v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "非线性光谱预处理纳米显微",
      "sum": "通过非线性光谱预处理，实现实验室级高保真叠层衍射纳米成像。",
      "ta": "成像技术虽非游戏直接相关，但或可启发离线渲染中的细节捕捉。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.01746v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "关键姿态锚定的流式手势生成",
      "sum": "提出StreamTalk，用关键姿态锚定实现流式共语手势生成，避免误差累积。",
      "ta": "实时角色动画领域相关，关键姿态锚定思路或可借鉴于动画状态机。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.01643v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "语音驱动的表情化3D面部动画",
      "sum": "提出ETHead，从语音生成富有表现力的3D面部动画与头部运动。",
      "ta": "面部动画生成技术，对NPC对话表现力提升有潜在应用价值。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.01605v1"
    },
    {
      "cat": "ai",
      "imp": "hi",
      "rank": 2,
      "title": "自回归绑定模型适配植物骨架",
      "sum": "提出PlantRig，将自回归绑定模型适配到植物骨骼重建，处理非规范分支。",
      "ta": "植物程序化生成与绑定是本行方向，此方法或可简化植被资产制作流程。",
      "src": "arXiv · cs.GR · 08-02",
      "url": "https://arxiv.org/abs/2608.01072v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "拓扑感知先验的3D部件分解",
      "sum": "提出Hi-TOPS，用分层拓扑感知评分先验改进3D部件分解精度。",
      "ta": "部件分解是资产编辑基础，拓扑感知先验或可提升复杂模型的分解质量。",
      "src": "arXiv · cs.GR · 08-01",
      "url": "https://arxiv.org/abs/2608.00767v1"
    },
    {
      "cat": "ai",
      "imp": "hi",
      "rank": 3,
      "title": "多智能体系统生成粒子特效",
      "sum": "提出ParticleGen，用多智能体系统自动化生成高质量粒子特效。",
      "ta": "粒子特效是TA核心工作，此系统或可显著降低特效制作门槛与成本。",
      "src": "arXiv · cs.GR · 08-01",
      "url": "https://arxiv.org/abs/2608.00629v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型基准测试WorldExam",
      "sum": "提出WorldExam基准，从外观到反应性评估世界模型能力。",
      "ta": "世界模型基准或可间接影响游戏AI与模拟环境的评估方法。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.02603"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "人体中心图像数据集合成管线",
      "sum": "提出Poplar，可扩展的以人为中心的图像数据集合成管线。",
      "ta": "合成数据管线或可用于生成训练TA工具所需的标注图像数据。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.00440"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "光遇艺术深度访谈",
      "sum": "thatgamecompany分享光遇的实时服务美术方向、Beyond引擎与Figma工作流。",
      "ta": "了解大型实时服务游戏的美术管线与工具链，对TA工作流设计有参考价值。",
      "src": "80 Level · 08-03",
      "url": "https://80.lv/articles/interview-a-deep-dive-into-the-art-of-sky-children-of-the-light-with-thatgamecompany/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "像素化水着色器效果奇特",
      "sum": "展示一款像素化风格的水着色器，视觉效果引人注目。",
      "ta": "像素化水效果或可启发风格化渲染中的水体表现。",
      "src": "80 Level · 08-03",
      "url": "https://80.lv/articles/this-pixelated-water-shader-looks-weirdly-fascinating/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Grabbit 2编辑器内物理模拟",
      "sum": "Grabbit 2在Unity编辑器内模拟物理，用于关卡设计与布景，处理碰撞。",
      "ta": "编辑器内物理模拟可提升关卡布景效率，对TA工具链有直接参考。",
      "src": "80 Level · 08-03",
      "url": "https://80.lv/articles/how-grabbit-2-simulates-physics-inside-the-unity-editor/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Houdini森林溪流模拟",
      "sum": "艺术家用Houdini制作森林溪流液体模拟，并分享创作过程。",
      "ta": "Houdini液体模拟案例，可参考其技术实现与艺术表现。",
      "src": "80 Level · 08-03",
      "url": "https://80.lv/articles/stunning-forest-stream-simulation-made-with-houdini/"
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
