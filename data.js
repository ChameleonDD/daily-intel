// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月24日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>可微渲染场景参数显著性</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "hi",
      "rank": 1,
      "title": "可微渲染场景参数显著性",
      "sum": "利用可微渲染器生成场景参数显著性图，类比神经网络梯度方法。",
      "ta": "可微渲染用于参数优化之外，还能做场景特征重要性分析，对调试渲染效果有启发。",
      "src": "arXiv · cs.GR · 07-23",
      "url": "https://arxiv.org/abs/2607.21562v1"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "NVIDIA OptiX 光线追踪调试工具",
      "sum": "介绍使用 OptiX Toolkit 调试光线追踪应用的方法。",
      "ta": "光线追踪调试工具链更新，有助于定位 RT 管线中的性能或正确性问题。",
      "src": "NVIDIA · 07-23",
      "url": "https://developer.nvidia.com/blog/debugging-ray-tracing-applications-using-nvidia-optix-toolkit/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5 异步叙事系统拆解",
      "sum": "Tides of Tomorrow 用 UE5 状态机、蓝图、Houdini 实现玩家影响故事。",
      "ta": "UE5 状态机与 Houdini 管线结合实现异步多人叙事，对程序化叙事工具设计有参考。",
      "src": "80 Level · 07-23",
      "url": "https://80.lv/articles/how-tides-of-tomorrow-s-story-link-system-lets-players-shape-each-other-s-stories/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5 风格化城镇全流程",
      "sum": "从概念到 UE5，用建筑套件分大中小尺寸构建加泰罗尼亚风格小镇。",
      "ta": "模块化建筑套件思路与 UE5 环境搭建流程，对植被/建筑程序化生成有借鉴。",
      "src": "80 Level · 07-24",
      "url": "https://80.lv/articles/from-concept-art-to-ue5-building-a-stylized-catalonia-inspired-town/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 对象独立撤销历史",
      "sum": "新工具让每个 Blender 对象拥有独立撤销历史，支持多模式。",
      "ta": "Blender 工作流效率提升，对 DCC 工具链中的撤销管理有参考。",
      "src": "80 Level · 07-23",
      "url": "https://80.lv/articles/this-tool-gives-every-blender-object-its-own-undo-history/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ArcBrush 1.5 升级 32 位浮点管线",
      "sum": "ArcBrush 1.5 引入色彩管理 32 位浮点图像管线，支持 Cryptomatte。",
      "ta": "32 位浮点管线对纹理合成与后期处理精度提升，适合高动态范围工作流。",
      "src": "80 Level · 07-23",
      "url": "https://80.lv/articles/arcbrush-1-5-upgrades-to-color-managed-32-bit-float-image-pipeline/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3D 高斯泼溅补全与 PatchMatch",
      "sum": "3D-GIMP 用 PatchMatch 改进 3D 高斯场景编辑，减少多视图不一致。",
      "ta": "3D 高斯编辑新方法，对实时场景修复与一致性维护有潜在应用。",
      "src": "arXiv · cs.GR · 07-22",
      "url": "https://arxiv.org/abs/2607.20789v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "缝纫图案缝合对应学习重建",
      "sum": "图学习框架从 2D 缝纫图案重建两级缝合信息，无需人工标注。",
      "ta": "自动缝合重建对虚拟服装建模与布料模拟管线自动化有直接帮助。",
      "src": "arXiv · cs.GR · 07-23",
      "url": "https://arxiv.org/abs/2607.21213v1"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Vermila 工作室裁员或关闭",
      "sum": "Vermila Studios 裁员，CEO 称未来数月关闭是可行可能。",
      "ta": "行业动荡信号，可能影响外包或合作项目稳定性。",
      "src": "Game Developer · 07-23",
      "url": "https://www.gamedeveloper.com/business/vermila-studios-lays-off-staff-studio-closure-a-feasible-possibility-in-coming-months"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "Disgaea 转型动作 RPG 开发谈",
      "sum": "开发团队分享从战术 RPG 转动作 RPG 的机制与模型适配经验。",
      "ta": "游戏类型转换中的模型与动画适配经验，对角色系统设计有参考。",
      "src": "80 Level · 07-24",
      "url": "https://80.lv/articles/disgaea-mayhem-shifting-from-tactical-rpg-to-action-rpg/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Halo 初代重制登陆 PlayStation",
      "sum": "Halo: Campaign Evolved 用新机制和操控现代化经典 FPS。",
      "ta": "经典 IP 跨平台重制，对引擎适配与现代化改造有参考。",
      "src": "PlayStation Blog · 07-23",
      "url": "https://blog.playstation.com/2026/07/23/13-ways-halo-campaign-evolved-modernizes-the-iconic-fps/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "漫威金刚狼故事预告发布",
      "sum": "Insomniac 在 SDCC 公布漫威金刚狼故事预告与艺术图。",
      "ta": "3A 游戏叙事与美术展示，对角色渲染与场景设计有参考。",
      "src": "PlayStation Blog · 07-23",
      "url": "https://blog.playstation.com/2026/07/23/marvels-wolverine-story-trailer-new-art-composer-details-and-more/"
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
