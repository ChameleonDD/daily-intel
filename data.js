// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月15日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE6将整合UEFN与虚幻引擎</em> / <em>GTA6因海量智能NPC延期</em> / <em>Epic迪士尼项目转向AI优先</em>。其余按重要性自动排序，红色优先。",
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
      "title": "UE6将整合UEFN与虚幻引擎",
      "sum": "Epic路线图显示UE6将把虚幻引擎与UEFN合并，官方推出免费UEFN训练营。",
      "ta": "UE6整合UEFN意味着编辑器与运行时工具链可能统一，植被/程序化工具需提前关注UEFN侧能力边界。",
      "src": "Unreal Engine · 10-14",
      "url": "https://www.unrealengine.com/news/uefn-professional-bootcamp-prepare-for-unreal-engine-6"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 2,
      "title": "GTA6因海量智能NPC延期",
      "sum": "彭博社披露Rockstar打造最雄心作品，海量智能NPC是GTA6延期原因之一。",
      "ta": "海量智能NPC对CPU预算、群体AI调度与LOD策略提出极高要求，值得关注其实现取舍。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/enormous-number-of-smart-npcs-was-one-of-reasons-for-gta-6-delay/"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 3,
      "title": "Epic迪士尼项目转向AI优先",
      "sum": "报道称Epic旗下星战与漫威射击项目要求大量依赖AI，尤其用于代码与美术创作。",
      "ta": "若美术生产转向AI优先，TA需重新评估资产管线、材质规范与AI产出的可维护性。",
      "src": "Game Developer · 10-14",
      "url": "https://www.gamedeveloper.com/programming/no-more-hand-written-code-epic-s-disney-project-reportedly-shifts-to-ai-first-development"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "GLoD-LVSM连续LOD场景表示",
      "sum": "提出几何锚定的紧凑场景表示，为大规模视图合成模型提供连续LOD以降低存储与渲染开销。",
      "ta": "连续LOD与token冗余削减思路，对程序化植被的层级细节与实例化策略有参考价值。",
      "src": "arXiv · cs.GR · 10-14",
      "url": "https://arxiv.org/abs/2610.20254v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "VisibilitySplat光线追踪遮挡重光照",
      "sum": "为3DGS引入显式可见性建模，用稀疏可见性预言机估计透射率加权遮挡以支持重光照与材质光照分解。",
      "ta": "3DGS重光照与材质分解若成熟，可用于扫描植被资产的光照一致化与材质复用。",
      "src": "arXiv · cs.GR · 10-14",
      "url": "https://arxiv.org/abs/2610.19847v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Q-MAGIC生成纯四边形网格",
      "sum": "提出奇点感知的循环相对偏移token化，实现自回归生成纯四边形网格。",
      "ta": "纯四边形拓扑生成对建模与重拓扑流程有潜在价值，可关注其拓扑质量与可控性。",
      "src": "arXiv · cs.GR · 10-14",
      "url": "https://arxiv.org/abs/2610.19777v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "光谱世界渲染器统一高光谱解混",
      "sum": "提出统一3D高光谱解混方法，将每个光谱解释为材质特征混合而非仅对渲染图像后处理。",
      "ta": "材质识别与解混思路或可用于程序化材质分层与扫描资产的材质分类。",
      "src": "arXiv · cs.GR · 10-14",
      "url": "https://arxiv.org/abs/2610.19520v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "DiffGIPC可微混合坐标接触动力学",
      "sum": "提出GPU上的可微混合坐标接触动力学，兼顾高效梯度与非穿透约束。",
      "ta": "可微接触仿真对布料、植被碰撞与破坏效果的可微调参有潜在借鉴意义。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.19091v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "RoboSimStudio交互式Real2Sim工具",
      "sum": "推出交互式工具包，支持机器人操作任务的快速真实到仿真，涵盖求解器与接触参数选择。",
      "ta": "接触力学与求解器选择思路对物理交互效果调参有间接参考，非直接游戏向。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.18835v2"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "RAR自适应rollout交互世界模型",
      "sum": "提出速率自适应rollout方法，用于时间一致的交互式世界模型。",
      "ta": "交互式世界模型的时间一致性若落地，可用于实时预览与程序化生成的动态验证。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.16302"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "VITAL从视觉运动到精确动作",
      "sum": "提出从视觉运动信息到精确动作的映射方法。",
      "ta": "视觉到动作的映射思路对动画驱动与动作捕捉后处理有间接参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.20604"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "TextVerifier验证中文文本渲染",
      "sum": "提出超越识别的验证方法，用于校验中文文本渲染质量。",
      "ta": "文本渲染验证对UI与贴图文字自动化质检有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.19551"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "MimicX视频驱动人形动作跟踪",
      "sum": "提出策略在环的监督精炼方法，用于视频驱动的人形动作跟踪。",
      "ta": "视频驱动动作跟踪若成熟，可降低动画捕捉与重定向成本。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.09055"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "MetaHuman动画工具免费更新",
      "sum": "Anthony Koithra的Locodrome角色动画工具更新，让虚幻引擎动画制作更简单快速。",
      "ta": "免费MetaHuman动画工具可直接用于角色动画原型与快速迭代，值得试用。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/grab-this-updated-metahuman-animation-tool-for-free/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Photoshop 3D取色器预览色相",
      "sum": "ColgArt推出Chroma Space面板，带实时3D视口，可在上色前于3D元素上预览颜色。",
      "ta": "3D取色预览可减少贴图绘制反复试错，对材质配色流程有提效价值。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/color-picker-for-photoshop-that-lets-you-see-hues-on-3d-shapes-before-painting-them/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "育碧关闭RedLynx并缩减新加坡",
      "sum": "育碧将关闭Trials工作室RedLynx并缩减育碧新加坡，影响超120个岗位。",
      "ta": "行业持续重组，关注其对引擎与工具团队规模及外包协作模式的连带影响。",
      "src": "Game Developer · 10-14",
      "url": "https://www.gamedeveloper.com/business/ubisoft-to-close-trials-studio-redlynx-downsize-ubisoft-singapore"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox Labs复活经典并移植",
      "sum": "Xbox推出Project Xbox Labs，聚焦经典游戏复活、移植到苹果电脑与网页，并支持模组作者。",
      "ta": "跨平台移植与模组支持可能带来新的资产兼容与工具链需求。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/xbox-launches-new-project-xbox-labs-to-revive-classics-port-games-explore-new-features/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rockstar联合创始人回顾经典",
      "sum": "Dan Houser分享GTA3、Bully等经典制作回忆，包括GTA3盒图最后一刻改动。",
      "ta": "经典项目复盘对理解开放世界设计取舍有参考，非技术直接相关。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/rockstar-co-founder-looks-back-at-making-gta-3-bully-other-classics/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "War Robots谈中国手游发行",
      "sum": "War Robots高管分享自2014年以来的留存经验，谈过度本地化风险与中国玩家差异。",
      "ta": "面向中国市场的发行经验对国内项目运营有参考，与技术管线无关。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/war-robots-exec-on-the-nuances-of-launching-mobile-games-for-chinese-players/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Annapurna发行老人公路冒险",
      "sum": "Third Shift开发的Forever Ago由Annapurna发行，是一款第三人称情感冒险游戏。",
      "ta": "叙事向独立作品，与TA技术方向无直接关联，速览即可。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/annapurna-releases-a-heartbreaking-third-person-adventure-about-an-old-man-on-a-road-trip/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender开发者BCON26演讲",
      "sum": "Blender年度主活动结束后，开发者演讲内容现已可回看。",
      "ta": "Blender开发者演讲可能涉及几何节点与渲染管线更新，值得按需回看。",
      "src": "Blender 开发博客 · 10-14",
      "url": "https://code.blender.org/2026/10/bcon26-talks-by-blender-developers/"
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
