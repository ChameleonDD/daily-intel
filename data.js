// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月3日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>高斯泼溅免逐帧排序</em> / <em>单例无限世界生成约束</em>。其余按重要性自动排序，红色优先。",
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
      "title": "GPU原生实时纹理网格重建",
      "sum": "提出GPU原生体视频系统，从多RGB-D实时重建带纹理三角网格，含接缝感知辐射校正。",
      "ta": "关注其把逐帧纹理化网格化从CPU搬到GPU的思路，对实时扫描/数字人管线有参考价值。",
      "src": "arXiv · cs.GR · 11-02",
      "url": "https://arxiv.org/abs/2611.03033v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "单图自监督个性化人体视频",
      "sum": "用自生成监督在测试时个性化姿态驱动人体视频扩散，缓解身份与服饰失真。",
      "ta": "若涉及角色动画/数字人，可看其测试时自监督如何避免额外训练数据。",
      "src": "arXiv · cs.GR · 11-02",
      "url": "https://arxiv.org/abs/2611.02964v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "参数化CAD智能体评测基准",
      "sum": "Parametric CAD Bench v3用100个任务评测从文本与工程图生成可执行CAD脚本的智能体。",
      "ta": "与游戏TA工作流关联弱，仅作程序化建模评测方法速览。",
      "src": "arXiv · cs.GR · 11-02",
      "url": "https://arxiv.org/abs/2611.02659v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "跨视角跨域单图3D生成",
      "sum": "UniCross3D用统一跨视角与跨域扩散，从单张RGB图重建几何与外观。",
      "ta": "单图3D生成方向，关注其处理遮挡与纹理-几何纠缠的方式，对资产快速起模有潜在价值。",
      "src": "arXiv · cs.GR · 11-02",
      "url": "https://arxiv.org/abs/2611.02631v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "无摄像头视线物体识别",
      "sum": "GazeTags用约2美元电子标签配合头戴设备实现无摄像头的视线物体感知。",
      "ta": "偏XR交互硬件，与渲染/特效关联弱，速览即可。",
      "src": "arXiv · cs.GR · 11-02",
      "url": "https://arxiv.org/abs/2611.02599v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "语音口型动画新评测指标",
      "sum": "提出Fréchet Oral Distance，为语音驱动口型动画提供无坐标系的客观评测基准。",
      "ta": "若做面部动画质量评估可参考该指标，非渲染性能方向。",
      "src": "arXiv · cs.GR · 11-01",
      "url": "https://arxiv.org/abs/2611.01705v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "高斯泼溅免逐帧排序",
      "sum": "AbacusGS把3DGS混合顺序预存于场景，省去每帧逐splat深度排序，加速Web/移动端查看器。",
      "ta": "直击3DGS在Web/移动端CPU排序瓶颈，对实时查看器与植被/场景泼溅渲染性能有直接借鉴。",
      "src": "arXiv · cs.GR · 11-01",
      "url": "https://arxiv.org/abs/2611.01534v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "有限元方法可扩展编程规范",
      "sum": "提出有限元方法的可扩展程序化规范，便于试验不同单元提升求解质量与效率。",
      "ta": "偏工程仿真，与游戏实时渲染关联弱。",
      "src": "arXiv · cs.GR · 11-01",
      "url": "https://arxiv.org/abs/2611.01414v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "游戏化XR训练腹腔镜技能",
      "sum": "研究用游戏化XR与伪触觉提升腹腔镜器械操作基础技能训练。",
      "ta": "医疗XR应用，与游戏TA本职关联弱。",
      "src": "arXiv · cs.GR · 10-31",
      "url": "https://arxiv.org/abs/2611.01229v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "4D高斯泼溅球谐水印",
      "sum": "SHield通过扰动球谐系数为4DGS模型嵌入水印，避免重训练与神经解码器。",
      "ta": "关注4DGS资产保护与球谐系数层面的改动，对动态场景资产分发有参考。",
      "src": "arXiv · cs.GR · 10-31",
      "url": "https://arxiv.org/abs/2611.01162v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "单例无限世界生成约束",
      "sum": "研究仅凭一个样例生成无界世界时局部生成器必须共享什么，对应WFC的局部约束难题。",
      "ta": "直接关系程序化世界/植被生成的理论边界，值得精读其对局部约束与远距一致性的分析。",
      "src": "arXiv · cs.GR · 10-31",
      "url": "https://arxiv.org/abs/2611.01048v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "视频扩散统一相机运动控制",
      "sum": "UniCaMo用稀疏3D物体轨迹与相机轨迹联合控制视频扩散中的相机与物体运动。",
      "ta": "若用视频扩散做预演/参考，可看其相机轨迹控制如何构造运动一致输入噪声。",
      "src": "arXiv · cs.GR · 10-31",
      "url": "https://arxiv.org/abs/2611.00810v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "智能体视频生成与世界建模",
      "sum": "探讨视频生成结合智能体框架，涉及智能体视频生成、世界建模与递归自我改进。",
      "ta": "世界模型方向，关注其与交互式仿真的关联，暂非直接落地工具。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.40191"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "持久个人智能体增强人类能动性",
      "sum": "提出Avatar Intelligence概念，用持久个人智能体放大人的能动性。",
      "ta": "偏通用AI智能体，与游戏/渲染关联弱。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.03092"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "自建扩散语言模型转换法",
      "sum": "BYOD提出高效的自回归到扩散语言模型转换方法。",
      "ta": "纯语言模型方向，与TA工作流无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.41574"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "像素拼贴营造工业恐惧",
      "sum": "Medium Rare开发者谈如何用像素艺术与拼贴营造恐惧而非惊吓，并可视化心理创伤。",
      "ta": "美术风格参考，速览其拼贴与像素表现手法。",
      "src": "80 Level · 11-02",
      "url": "https://80.lv/articles/how-medium-rare-uses-pixel-art-collages-to-evoke-dread-of-industrialized-cannibalism/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender复刻Control嘶嘶特效",
      "sum": "教程演示在Blender中复刻《控制》里的Hiss特效。",
      "ta": "可看其特效分层与材质做法，作为Niagara/材质思路的对照参考。",
      "src": "80 Level · 11-02",
      "url": "https://80.lv/articles/recreating-hiss-effect-from-remedy-s-control-in-blender/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Claude Code拦截游戏克隆",
      "sum": "新规则阻止模型重建特定现有游戏，开发者称也误伤自家项目与部分逆向工程任务。",
      "ta": "若在工具链中用AI编码助手做逆向或复刻，需注意此类策略限制。",
      "src": "80 Level · 11-02",
      "url": "https://80.lv/articles/claude-code-blocks-video-game-cloning-some-reverse-engineering-tasks/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender软体抖动物理演示",
      "sum": "展示Blender中带抖动物理的煎饼状蝠鲼模型。",
      "ta": "软体/抖动效果速览，可作物理表现参考。",
      "src": "80 Level · 11-02",
      "url": "https://80.lv/articles/pancake-looking-manta-ray-with-satisfying-jiggle-physics-in-blender/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "超现实免费游戏探索巨构",
      "sum": "HELENA: Cloud District为无跳跃键的超现实探索游戏，可拍摄奇异植物。",
      "ta": "独立游戏资讯，速览即可。",
      "src": "80 Level · 11-02",
      "url": "https://80.lv/articles/explore-a-decaying-megastructure-photograph-strange-plants-in-this-free-surreal-game/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "名越工作室因网易撤资关闭",
      "sum": "名越稔洋离开世嘉后创立的工作室因网易削减资金而关闭。",
      "ta": "行业动向，关注大厂投资收缩对项目稳定性的影响。",
      "src": "Game Developer · 11-02",
      "url": "https://www.gamedeveloper.com/business/nagoshi-studio-toshihiro-nagoshi-s-game-development-studio-after-leaving-sega-closes-as-netease-cuts-its-funding"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "AI游戏淹没Itch.io",
      "sum": "Itch.io游戏页面数量翻倍，AI游戏涌入但销量未同比增加。",
      "ta": "关注AI生成内容对独立发行生态的冲击。",
      "src": "Game Developer · 11-02",
      "url": "https://www.gamedeveloper.com/pc/number-of-game-pages-doubles-on-itch-io-as-ai-clones-flood-the-store"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "塞尔达重制助新人学习",
      "sum": "青沼英二称时之笛重制旨在让年轻员工从经典设计中学习。",
      "ta": "制作理念速览，与TA技术关联弱。",
      "src": "Game Developer · 11-02",
      "url": "https://www.gamedeveloper.com/production/zelda-producer-ocarina-of-time-remake-helps-junior-staff-learn-classic-insights"
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
