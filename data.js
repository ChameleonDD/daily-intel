// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月5日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>Transformer直接渲染3D高斯</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "mid",
      "title": "UE将展示网格地形与MCP集成",
      "sum": "虚幻引擎将在I/ITSEC 2026展示Mesh Terrain演示及Unreal MCP与LLM集成讨论。",
      "ta": "Mesh Terrain演示与MCP/LLM集成值得关注，可能影响地形工具与引擎内AI工作流。",
      "src": "Unreal Engine · 11-04",
      "url": "https://www.unrealengine.com/news/unreal-engine-innovation-heads-to-i-itsec-2026"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "GPU加速的渐进式UMAP降维",
      "sum": "GPUMAP将渐进式UMAP降维搬到GPU，降低高维数据交互分析的计算成本。",
      "ta": "GPU并行降维思路可借鉴到大规模植被/参数空间的实时可视化分析。",
      "src": "arXiv · cs.GR · 11-04",
      "url": "https://arxiv.org/abs/2611.06191v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "单图去玻璃反射新方法",
      "sum": "CLEAR用颜色-纹理潜空间对齐，从透过玻璃拍摄的单图恢复透射场景。",
      "ta": "反射分离技术对屏幕空间反射/玻璃材质后期处理有参考价值。",
      "src": "arXiv · cs.GR · 11-04",
      "url": "https://arxiv.org/abs/2611.05969v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "生成房间评估新框架GREP",
      "sum": "GREP基于原则对LLM生成的家具房间场景做整体质量评估。",
      "ta": "程序化场景生成的自动评估思路，可迁移到植被布置质量打分。",
      "src": "arXiv · cs.GR · 11-04",
      "url": "https://arxiv.org/abs/2611.05802v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "扩散模型单次引导蒸馏分解",
      "sum": "分解蒸馏实现可解释的单次前向引导，替代每步条件/无条件双评估。",
      "ta": "单次引导降低扩散推理成本，对贴图/材质生成的实时化有潜在意义。",
      "src": "arXiv · cs.GR · 11-03",
      "url": "https://arxiv.org/abs/2611.05755v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "Transformer直接渲染3D高斯",
      "sum": "GaussianRenderFormer用Transformer将高斯与相机直接输出图像，无需光栅化器。",
      "ta": "无光栅化的神经高斯渲染，值得关注其对实时渲染管线与GS工作流的潜在冲击。",
      "src": "arXiv · cs.GR · 11-03",
      "url": "https://arxiv.org/abs/2611.05593v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "分钟级游戏交互世界模型数据集",
      "sum": "GameVerse提供分钟级游戏画面数据集，用于长时程交互式世界建模。",
      "ta": "长时程世界模型数据对程序化生成与游戏内AI模拟有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.37257"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "未见游戏的解说与研究智能体",
      "sum": "StreamDuo为未见过的游戏提供实时解说与研究智能体。",
      "ta": "面向游戏的智能体框架，可留意其对游戏内AI交互的启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.01120"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "少步扩散速度对抗蒸馏",
      "sum": "VA-TDM用速度对抗蒸馏统一改进少步扩散模型。",
      "ta": "少步扩散加速对实时生成类工具链有潜在价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.06796"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "从部分点云补全完整场景网格",
      "sum": "AnchorComplete从部分点云恢复完整场景网格。",
      "ta": "点云补全对扫描重建、场景资产修复工作流有直接参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.03228"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "战神新作延期至2027年5月",
      "sum": "圣莫尼卡工作室宣布战神Laufey延期三个月至2027年5月以打磨。",
      "ta": "行业排期动态，速览即可。",
      "src": "80 Level · 11-05",
      "url": "https://80.lv/articles/god-of-war-laufey-delayed-to-may-2027/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "星战竞速动画的混合工作流",
      "sum": "Fuse Games结合物理驱动动画、动捕、关键帧与快速预演呈现700km/h竞速。",
      "ta": "物理驱动+动捕+关键帧的混合动画管线，对高速运动表现有借鉴意义。",
      "src": "80 Level · 11-05",
      "url": "https://80.lv/articles/behind-the-animation-of-star-wars-galactic-racer-s-high-speed-chaos/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender实时程序化天空插件",
      "sum": "Physical Atmosphere²可在视口即时更新云、大气与光照，并提供高级精确控制模式。",
      "ta": "实时程序化天空/大气方案，对植被场景光照与氛围搭建有参考价值。",
      "src": "80 Level · 11-04",
      "url": "https://80.lv/articles/get-this-blender-add-on-for-realistic-real-time-procedural-sky/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "塞尔达时之笛重制版年度最高分",
      "sum": "Switch 2版时之笛重制获96 Metascore，为2026年评分最高游戏。",
      "ta": "行业评分动态，速览即可。",
      "src": "80 Level · 11-04",
      "url": "https://80.lv/articles/the-legend-of-zelda-ocarina-of-time-switch-2-remake-is-the-highest-rated-game-of-2026/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "模块化建筑套件搭建巴塞罗那场景",
      "sum": "作者用模块化建筑套件、可平铺材质与trim sheets在UE5中搭建风格化场景。",
      "ta": "模块化套件+trim sheet的UE5环境搭建流程，对场景资产复用有直接参考。",
      "src": "80 Level · 11-04",
      "url": "https://80.lv/articles/creating-a-stylized-barcelona-environment-using-a-modular-architecture-kit/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender绝区零风格Shader更新",
      "sum": "Kythera的ZZZ风格Shader更新，附带自动连接贴图与光照的插件。",
      "ta": "风格化卡通Shader的自动应用工具，可留意其材质连接思路。",
      "src": "80 Level · 11-04",
      "url": "https://80.lv/articles/have-a-look-at-this-zzz-shader-for-blender-that-comes-with-auto-apply-add-on/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender胶片摄影质感渲染",
      "sum": "该方案用物理准确数据与真实胶片行为为Blender渲染添加胶片摄影质感。",
      "ta": "胶片质感后期方案，对渲染出图风格化有轻度参考价值。",
      "src": "80 Level · 11-04",
      "url": "https://80.lv/articles/give-your-blender-renders-authentic-film-photography-look/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Tripwire扩展发行业务",
      "sum": "Tripwire Interactive扩展发行业务，聚焦更小规模开发者与游戏。",
      "ta": "发行侧动态，速览即可。",
      "src": "Game Developer · 11-04",
      "url": "https://www.gamedeveloper.com/business/tripwire-interactive-expands-publishing-business-to-focus-on-smaller-developers-and-games"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "育碧竞购Arkane工作室",
      "sum": "Xbox拟出售Arkane，育碧等为潜在竞购方，以避免工作室关闭。",
      "ta": "工作室归属变动可能影响相关团队与技术流向，值得留意。",
      "src": "Game Developer · 11-04",
      "url": "https://www.gamedeveloper.com/business/ubisoft-among-the-bidders-for-arkane-as-xbox-looks-to-sell-the-studio"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Steam审核放缓或因AI游戏激增",
      "sum": "Valve警告Steam新游审核变慢，但未直接归因于任何开发趋势。",
      "ta": "审核积压或与AI生成游戏涌入相关，影响独立团队上线节奏。",
      "src": "Game Developer · 11-04",
      "url": "https://www.gamedeveloper.com/business/valve-warns-of-slower-steam-approval-process-due-to-flood-of-new-games"
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
