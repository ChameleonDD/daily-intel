// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月30日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>纹理空间材质扩散生成</em> / <em>高斯泼溅残差场提表达</em> / <em>可仿真3D场景智能体重建</em>。其余按重要性自动排序，红色优先。",
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
      "title": "纹理空间材质扩散生成",
      "sum": "微调视频扩散Transformer，在纹理空间做文本引导材质生成与超分。",
      "ta": "直接在UV纹理空间生成PBR材质，比多视图烘焙更贴合现有材质管线，值得看投影映射思路。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.37654v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "高斯泼溅残差场提表达",
      "sum": "用神经残差场替代低阶球谐，缓解3DGS视角相关反射的表达冗余。",
      "ta": "低阶SH是3DGS高光发糊的根因，这套残差建模对植被/材质高光重建有直接参考价值。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.37115v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "可仿真3D场景智能体重建",
      "sum": "从真实观测重建含可变形曲线、曲面、体数据的仿真就绪3D场景。",
      "ta": "明确面向游戏与机器人，可变形几何的仿真就绪重建对程序化植被/布料资产有借鉴意义。",
      "src": "arXiv · cs.GR · 09-28",
      "url": "https://arxiv.org/abs/2609.36024v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "文本生成物理仿真管线",
      "sum": "Text2Sim用智能体管线把纯文本请求转成可执行可编辑的物理仿真。",
      "ta": "资产、布局、物理参数、运动、渲染联合生成，可关注其对特效预演自动化的启发。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.36593v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "域是残差的自监督迁移",
      "sum": "不换生成器，只适配DINO自监督特征，实现去雾去雨与渲染转照片。",
      "ta": "渲染转照片的思路对风格化后处理与去噪有参考，特征层迁移比像素层更稳。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.37330v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "变长神经运动拼接",
      "sum": "用聚类转移图实现变长过渡的运动拼接，无需手工指定过渡区间。",
      "ta": "变长过渡对动画状态机与运动匹配的衔接逻辑有直接参考价值。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.37167v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可解性查询加速关卡反馈",
      "sum": "用带约束的可解性查询，为3D障碍关卡设计提供快速解法反馈。",
      "ta": "程序化关卡与障碍设计的自动化验证思路，可迁移到跑酷/攀爬关卡工具链。",
      "src": "arXiv · cs.GR · 09-28",
      "url": "https://arxiv.org/abs/2609.36225v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "交互视频世界模型注意力",
      "sum": "WorldAttention提出面向交互式视频世界模型的高效注意力架构。",
      "ta": "实时交互式世界生成的注意力效率问题，与实时渲染的算力预算思路相通。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.34606"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "像素扩散对抗训练",
      "sum": "针对像素空间扩散模型引入对抗训练以提升生成质量。",
      "ta": "像素域扩散的稳定性改进，与实时渲染关联有限，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.38170"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "多字符语义排版生成",
      "sum": "MSTypography在词可读性与物体可辨识度间平衡，做多字符语义排版。",
      "ta": "偏平面设计生成，对游戏UI字体工具链有间接参考。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.37141v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "商品硬件分割体可视化",
      "sum": "Volcanite在消费级硬件上做TB级分割体数据的可视化。",
      "ta": "面向连接组学，但大体积数据在消费级GPU上的可视化策略可借鉴。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.36898v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "可微渲染做手眼标定",
      "sum": "DRHeC用基于RGB梯度的可微渲染实现无标记手眼标定。",
      "ta": "可微渲染在标定上的应用，与游戏渲染管线关联较弱。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.36779v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "反事实视频生成训人形",
      "sum": "用反事实视频生成扩充高质量交互视频，训练人形机器人运动操作。",
      "ta": "视频生成做数据增广的思路，对动画/动作数据合成有间接启发。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.38172v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "JEPA世界模型各向异性表征",
      "sum": "各向异性表征可改善JEPA世界模型中的规划能力。",
      "ta": "世界模型表征学习，与游戏AI规划有潜在关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.37441"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "动作驱动视觉仿真",
      "sum": "WorldLine用动作驱动的视觉仿真支持机器人操作。",
      "ta": "机器人操作仿真，与游戏实时渲染关联有限。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.38059"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "稠密检索需非对称几何",
      "sum": "提出共享与双投影的偏差-方差理论，解释稠密检索何时需要非对称几何。",
      "ta": "纯检索理论，与TA工作流无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.32488"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "表格基础模型自演化管线",
      "sum": "TabFM-Auto为表格基础模型构建自演化管线。",
      "ta": "表格数据方向，与游戏技术无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.37989"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "超球语义轨迹分析",
      "sum": "用超球语义轨迹分析映射预印本、专利与算力规模的技术扩散。",
      "ta": "科技情报分析，与TA工作无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.35845"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "巫师3重制版视觉大升级",
      "sum": "巫师3本周大规模升级，重做视觉、战斗、进度、操作与界面，并推Switch 2原生版。",
      "ta": "老游戏视觉现代化改造的完整案例，可关注其材质/光照重制的取舍。",
      "src": "80 Level · 09-29",
      "url": "https://80.lv/articles/the-witcher-3-remastered-makes-an-11-year-old-rpg-feel-new-again/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "角色头部完整重拓扑教程",
      "sum": "Anna Beganska的教程覆盖从中模拓扑到低模优化的完整重拓扑流程。",
      "ta": "面向动画的角色头部重拓扑全流程，可直接用于角色资产规范参考。",
      "src": "80 Level · 09-29",
      "url": "https://80.lv/articles/learn-complete-retopology-workflow-for-animation-ready-character-heads/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Maya角色动画作品展示",
      "sum": "动画师Adrian Nita分享用Maya制作的漫威Carnage角色动画。",
      "ta": "纯作品展示，可看角色动画表现力，无技术细节。",
      "src": "80 Level · 09-29",
      "url": "https://80.lv/articles/take-a-look-at-this-jaw-dropping-fan-made-3d-animation-of-marvel-s-carnage/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "恐怖Roguelike开发分享",
      "sum": "Max Soloha谈恐怖Roguelike《I'm not a Psycho Invader》的灵感与技术细节。",
      "ta": "独立开发技术分享，可速览其机制组合思路。",
      "src": "80 Level · 09-29",
      "url": "https://80.lv/articles/creating-horror-roguelike-inspired-by-no-i-m-not-a-human-buckshot-roulette/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Steam折扣活动页全算法化",
      "sum": "Steam宣布折扣与活动页将改为完全算法驱动，影响玩家看到的游戏。",
      "ta": "曝光分发逻辑变化会影响独立/中小团队发行策略，值得关注。",
      "src": "Game Developer · 09-29",
      "url": "https://www.gamedeveloper.com/pc/steam-s-discounts-and-events-tab-will-soon-be-fully-algorithm-driven"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "顽皮狗筹备新美末项目",
      "sum": "顽皮狗在完成Intergalactic后，正筹备新的《最后生还者》项目。",
      "ta": "行业动向，与TA工作无直接关联。",
      "src": "Game Developer · 09-29",
      "url": "https://www.gamedeveloper.com/console/naughty-dog-is-working-on-new-the-last-of-us-projects-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "消逝光芒前主创加入Bloober",
      "sum": "《消逝的光芒》系列前负责人加入Bloober Team旗下恐怖厂牌Broken Mirror Games。",
      "ta": "人事变动，速览即可。",
      "src": "Game Developer · 09-29",
      "url": "https://www.gamedeveloper.com/business/former-dying-light-franchise-lead-joins-bloober-team-horror-imprint-broken-mirror-games"
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
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Blender 开发博客、Tech-Artists。"
  },
  "xStale": false
};
