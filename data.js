// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月30日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>单图生成可动画发卡</em> / <em>Substance 烘焙流程重做</em>。其余按重要性自动排序，红色优先。",
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
      "title": "单图生成可动画发卡",
      "sum": "HairDeck 从单张图像生成风格化 hair cards，可直接用 spring bone 驱动动画。",
      "ta": "植被/卡片类几何的程序化生成思路可迁移，关注其 ribbon 布局与骨骼绑定方式。",
      "src": "arXiv · cs.GR · 10-29",
      "url": "https://arxiv.org/abs/2610.40599v1"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 2,
      "title": "Substance 烘焙流程重做",
      "sum": "Adobe 重构 Painter 烘焙工作流，新增 cage painting 交互与技术实现。",
      "ta": "烘焙是材质管线瓶颈，cage 手绘方式直接影响高模到低模的法线质量与迭代速度。",
      "src": "80 Level · 10-29",
      "url": "https://80.lv/articles/adobe-explains-how-it-rebuilt-substance-3d-painter-s-baking-workflow/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "鱼眼全视场高斯泼溅",
      "sum": "GOFish 实现鱼眼镜头全视场高斯泼溅渲染并提取对齐碰撞网格。",
      "ta": "数字孪生场景重建可参考，网格与渲染对齐对碰撞/物理资产制作有借鉴。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37818v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "神经显式形状表示",
      "sum": "提出兼顾连续曲面建模、高效渲染与对象压缩的神经显式形状表示。",
      "ta": "显式曲面查询对光追友好，值得关注其结构化输出空间如何服务实时渲染。",
      "src": "arXiv · cs.GR · 10-28",
      "url": "https://arxiv.org/abs/2610.38441v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "频率自适应高斯网格",
      "sum": "融合特征网格与 2D 高斯，提出频率自适应的高效图像表示。",
      "ta": "结构化与非结构化表示的权衡思路，可类比到植被分布与 LOD 表示策略。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.38007v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "多视图一致几何注入",
      "sum": "将几何推断与纹理合成解耦，提升单图到多视图生成的一致性。",
      "ta": "几何与纹理解耦的思路对程序化资产与贴图生成管线有参考价值。",
      "src": "arXiv · cs.GR · 10-28",
      "url": "https://arxiv.org/abs/2610.38518v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "城市植被配置优化",
      "sum": "Greenscapes 优化城市植被配置，平衡遮荫、微气候与景观风格。",
      "ta": "植被布局优化的目标函数设计，可借鉴到开放世界植被程序化分布规则。",
      "src": "arXiv · cs.GR · 10-29",
      "url": "https://arxiv.org/abs/2610.40007v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "文本生成可编辑 CAD",
      "sum": "CAD-WAM 通过预判几何来选择操作序列，提升多步文本到 CAD 生成可靠性。",
      "ta": "操作序列式生成思路与程序化建模节点图有相通之处，关注其几何预判机制。",
      "src": "arXiv · cs.GR · 10-29",
      "url": "https://arxiv.org/abs/2610.39306v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "3D 程序编辑基准发布",
      "sum": "3DCodeEdit 提出指令引导的 3D 程序编辑基准，考察改动的几何后果预判。",
      "ta": "程序化生成资产的可编辑性评估，对 HDA/蓝图式工作流自动化有参考。",
      "src": "arXiv · cs.GR · 10-28",
      "url": "https://arxiv.org/abs/2610.38231v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "AI 原生引擎做游戏",
      "sum": "VibeGame 提出提示词到游戏的开发框架，含自演化对抗智能体团队。",
      "ta": "关注其引擎侧接口设计，判断对 TA 工具链与自动化流程的潜在影响。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.33106"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "MPM 驱动灵巧操作",
      "sum": "MG-CD-MPM 用连续损伤与粘塑性 MPM 支撑强化学习灵巧操作仿真。",
      "ta": "大变形与拓扑变化的仿真方案，与流体/软体特效求解器思路可对照。",
      "src": "arXiv · cs.GR · 10-29",
      "url": "https://arxiv.org/abs/2610.39975v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "人群数据嵌入仿真",
      "sum": "Trajeform 将人群轨迹数据嵌入，学习更自然的环境适配行为。",
      "ta": "群体行为数据驱动思路，可类比到场景中 NPC 与植被交互的分布逻辑。",
      "src": "arXiv · cs.GR · 10-29",
      "url": "https://arxiv.org/abs/2610.39563v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "网页版介观程序化建模",
      "sum": "MesoCraft 提供浏览器内交互式介观生物结构程序化建模工具。",
      "ta": "交互式程序化建模的 Web 实现，对工具 UX 设计有轻量参考。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37954v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 雕刻助手插件",
      "sum": "CL Sculpt Assistant 为 Blender 雕刻加入 UI 改进与若干新功能。",
      "ta": "雕刻辅助工具可提升高模制作效率，速览功能列表即可。",
      "src": "80 Level · 10-29",
      "url": "https://80.lv/articles/blender-gets-handy-new-assistant-tool-for-sculpting/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "极端角度动漫脸工具",
      "sum": "DillonGoo Studios 发布 Blender 工具，处理极端角度下的动漫脸部。",
      "ta": "风格化角色制作辅助，关注其形变与透视处理方式。",
      "src": "80 Level · 10-29",
      "url": "https://80.lv/articles/create-perfect-anime-faces-at-extreme-angles-with-this-blender-tool/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 拖拽式摆姿插件",
      "sum": "Marionette 插件支持拖动手脚或胯部带动全身摆姿。",
      "ta": "快速摆姿可加速资产检查与截图流程，速览即可。",
      "src": "80 Level · 10-29",
      "url": "https://80.lv/articles/new-blender-add-on-makes-character-posing-much-easier/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "废墟机器人 3D 制作解析",
      "sum": "Jueon Kim 分享《Silent Ruins》制作流程，讲解 UV 与破损结构处理。",
      "ta": "破损结构的可信度处理手法，对场景资产细节制作有参考。",
      "src": "80 Level · 10-29",
      "url": "https://80.lv/articles/breakdown-giant-robot-in-cathedral-ruins-made-in-3d/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "上古卷轴6副标题传闻",
      "sum": "报道称《上古卷轴6》官方副标题与 Hammerfell 相关。",
      "ta": "行业动态速览，与 TA 工作无直接关联。",
      "src": "80 Level · 10-29",
      "url": "https://80.lv/articles/the-elder-scrolls-6-may-finally-have-a-name-confirmation-and-it-makes-perfect-sense/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "第二人生转型现代平台",
      "sum": "Linden Lab 介绍 Luau、VS Code 集成与实时迭代等平台现代化举措。",
      "ta": "脚本语言与编辑器集成方案，对工具链设计有轻度参考。",
      "src": "80 Level · 10-29",
      "url": "https://80.lv/articles/second-life-wants-its-23-year-old-world-to-be-a-modern-game-platform/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "堕落之主2动画预览",
      "sum": "《堕落之主 II》公开动画及其 WIP 片段，游戏明年发售。",
      "ta": "动画表现速览，无技术细节可挖。",
      "src": "80 Level · 10-29",
      "url": "https://80.lv/articles/take-a-look-at-this-fantastic-animation-its-wip-from-lords-of-the-fallen-ii/"
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
