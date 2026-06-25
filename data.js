// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年6月25日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>FSR 4.1支持RDNA 3</em> / <em>UE5.6森林环境教程</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "flow",
      "imp": "mid",
      "title": "全动画管线迁入UE",
      "sum": "Shining Isle Productions将《翼王传奇》全部动画流程迁至UE内完成。",
      "ta": "意味着UE在动画管线上的成熟度已可支撑全流程生产，TA需关注引擎内绑定与动画迭代效率。",
      "src": "Unreal Engine · 06-24",
      "url": "https://www.unrealengine.com/spotlights/shining-isle-productions-goes-all-in-on-unreal-engine-for-the-wingfeather-saga"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "FSR 4.1支持RDNA 3",
      "sum": "AMD FSR SDK 2.3发布，ML超分4.1.1支持RX 7000系列，帧生成与光线重建更新。",
      "ta": "FSR 4.1引入ML超分，对UE5渲染管线中的性能优化与跨平台画质策略有直接影响。",
      "src": "AMD GPUOpen · 06-24",
      "url": "https://gpuopen.com/learn/amd-fsr-sdk-2-3-blog/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "稀疏锚点生成3D街景",
      "sum": "从稀疏2D锚点合成一致3D高斯街景，支持标准光栅化部署。",
      "ta": "3D高斯泼溅技术向街景场景延伸，可能影响程序化城市生成与场景重建工作流。",
      "src": "arXiv · cs.GR · 06-24",
      "url": "https://arxiv.org/abs/2606.26007v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "路径追踪立体视差捷径",
      "sum": "路径追踪合成立体数据中MC噪声方差场存在隐藏捷径，影响训练。",
      "ta": "对依赖路径追踪合成训练数据的视差估计管线有潜在影响，需关注数据偏差。",
      "src": "arXiv · cs.GR · 06-24",
      "url": "https://arxiv.org/abs/2606.25483v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "多智能体运动逆设计",
      "sum": "EvoFlock自动调优鸟群、人群等多智能体运动模型参数。",
      "ta": "可用于程序化人群或生物群系动画的自动调参，提升模拟真实感。",
      "src": "arXiv · cs.GR · 06-24",
      "url": "https://arxiv.org/abs/2606.25280v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "基于笼形变纹理传递",
      "sum": "实时纹理传递方法，结合几何滤波，适用于角色化妆与程序化汽车纹理。",
      "ta": "为实时纹理投影提供新方案，可优化角色或载具的细节贴花工作流。",
      "src": "arXiv · cs.GR · 06-23",
      "url": "https://arxiv.org/abs/2606.25220v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "自监督布料持久褶皱",
      "sum": "自监督神经布料模拟引入塑性持久褶皱，提升视觉真实感。",
      "ta": "布料模拟更真实，对角色服装动态与褶皱效果有直接改进潜力。",
      "src": "arXiv · cs.GR · 06-23",
      "url": "https://arxiv.org/abs/2606.25065v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时交互基础模型",
      "sum": "Wan-Streamer端到端实时低延迟全双工音视频交互模型。",
      "ta": "虽非游戏专用，但实时音视频交互能力可能用于NPC对话或直播特效。",
      "src": "arXiv · cs.GR · 06-23",
      "url": "https://arxiv.org/abs/2606.25041v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "改进大语言扩散模型",
      "sum": "改进版大语言扩散模型发布，提升生成质量。",
      "ta": "扩散模型在文本生成领域进展，与游戏内容生成间接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.25331"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "视频虚拟试穿4D代理",
      "sum": "TryOnCrafter利用相机轨迹生成可渲染4D代理实现视频虚拟试穿。",
      "ta": "4D试穿代理技术可迁移至游戏角色换装或虚拟化身系统。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.26092"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "SEGA老兵谈自走棋",
      "sum": "前SEGA开发者Yasuhiro Nishiyama访谈，讨论自走棋类型与三国题材新作。",
      "ta": "行业趋势参考，对TA工作流无直接影响。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/interview-the-sega-veteran-behind-get-wrapped-up-on-sangokushi-bond-and-the-future-of-auto-battlers/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "极限竞速地平线6美术",
      "sum": "Playground Games艺术家分享《极限竞速地平线6》世界创作细节。",
      "ta": "可观摩AAA级开放世界环境美术的资产与场景制作水准。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/take-a-closer-look-at-the-world-of-forza-horizon-6/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 2,
      "title": "UE5.6森林环境教程",
      "sum": "Michael Gerard指导在UE5.6中从零创建生产级森林环境全流程。",
      "ta": "直接关联植被工具与程序化生成工作流，是TA必读的实战教程。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/create-production-quality-forest-environments-from-scratch-in-ue5-6/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender曲线河流生成器",
      "sum": "Stylized River Generator工具，基于曲线构建河流环境并支持动态障碍交互。",
      "ta": "程序化河流生成工具，可集成至环境生成管线，提升效率。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/build-entire-river-environments-from-curves-with-this-blender-tool/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Maya免费动画工具包",
      "sum": "Animo工具包加速Maya动画工作流，含空间切换、弧线追踪、烘焙等功能。",
      "ta": "动画辅助工具，可提升角色动画制作效率，间接影响TA的动画数据准备。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/new-free-toolkit-released-for-maya-animators/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "免费人群反应动捕动画",
      "sum": "Anderson Rohr发布免费人群反应动捕动画包。",
      "ta": "可直接用于人群模拟或NPC动画，节省动捕成本。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/check-out-these-free-crowd-reaction-mocap-animations/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Tim Sweeney谈游戏经济",
      "sum": "Epic CEO称新游戏成功需连接其他游戏经济体系。",
      "ta": "行业战略观点，对TA技术决策无直接影响。",
      "src": "Game Developer · 06-24",
      "url": "https://www.gamedeveloper.com/business/tim-sweeney-says-only-hope-for-new-games-is-to-connect-to-economies-of-other-games-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Denmu设立5000万基金",
      "sum": "投资公司Denmu宣布5000万美元游戏开发基金，优先支持作者型开发者。",
      "ta": "行业资金动态，对TA工作流无直接影响。",
      "src": "Game Developer · 06-24",
      "url": "https://www.gamedeveloper.com/business/investment-house-denmu-announces-auteur-first-50-million-fund-for-game-devs"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Trailmark Games成立",
      "sum": "《尼克儿童频道全明星大乱斗》开发商创立授权游戏新发行商。",
      "ta": "行业发行动态，对TA工作流无直接影响。",
      "src": "Game Developer · 06-24",
      "url": "https://www.gamedeveloper.com/business/new-publisher-trailmark-games-promises-new-path-forward-for-licensed-games"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "GTA6定价80美元",
      "sum": "《侠盗猎车手6》预购价80美元，平息百元游戏争议。",
      "ta": "行业定价趋势，对TA技术决策无直接影响。",
      "src": "Game Developer · 06-24",
      "url": "https://www.gamedeveloper.com/console/grand-theft-auto-6-s-80-price-settles-the-100-question"
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
