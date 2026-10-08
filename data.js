// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月8日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>多物理场仿真综述出炉</em> / <em>小波约束扩散生成全身语音动作</em> / <em>单图重建物理稳定抓握手势</em>。其余按重要性自动排序，红色优先。",
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
      "title": "多物理场仿真综述出炉",
      "sum": "arXiv 综述系统梳理视觉计算中多物理场仿真的各类技术。",
      "ta": "做流体/破碎/布料特效可当工具书索引，找可复用的物理建模方法。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09822v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "小波约束扩散生成全身语音动作",
      "sum": "DynaConTalk 用小波约束扩散解决长时语音动作过平滑问题。",
      "ta": "长时程角色动画生成思路，可参考其分频解耦策略处理手势与表情。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09846v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "单图重建物理稳定抓握手势",
      "sum": "StableGrasp 从单张 RGB 图重建物理稳定的手部抓取姿态。",
      "ta": "涉及物理约束下的姿态估计，对角色手部交互与道具抓取动画有参考价值。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.09195v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "肌电驱动高表现力面部动画",
      "sum": "emg2face 用高密度表面肌电实现面部动画，解决 HMD 遮挡下的捕捉难题。",
      "ta": "VR 头显遮挡面部时的表情捕捉替代方案，关注其信号到动画的映射管线。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09304v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "技能组合实现长时程全身控制",
      "sum": "Co²Skill 通过技能组合实现长时程人-环境交互的全身控制。",
      "ta": "物理角色控制的分层组合思路，可借鉴到 NPC 全身交互行为生成。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09291v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "涂鸦编辑图像基准发布",
      "sum": "ScribbleEdit 提出仅凭涂鸦输入的图像编辑基准，评估现有模型能力。",
      "ta": "交互式编辑意图理解评测，对材质/贴图快速迭代工具有潜在启发。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09382v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "赛车遥测分析教练框架",
      "sum": "TRACK 框架分析模拟赛车驾驶表现并对车手行为聚类画像。",
      "ta": "遥测数据分析方法，可迁移到游戏内玩家行为分析与自适应难度设计。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.10061v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "CAD 自动生成装配计划",
      "sum": "端到端方法将 CAD 设计自动转为符合 DfA 原则的人工装配计划。",
      "ta": "程序化装配规划思路，对关卡内机械结构程序化生成有参考意义。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09781v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "移动端实时高斯泼溅统一动静",
      "sum": "Mobile-4DGS 在移动端统一静态与动态场景的实时高斯泼溅渲染。",
      "ta": "移动端 4DGS 实时方案，关注其动静统一表示与性能优化手段。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.05289"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "编码智能体能否造出想要的游戏",
      "sum": "SWE-Game 评测编码智能体构建游戏的能力边界。",
      "ta": "了解 AI 编码代理在游戏开发任务上的真实水平，评估其可辅助的环节。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.33678"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "递归游戏生成器代理框架",
      "sum": "Recursive Game Creator 提出面向产品级体验的智能体游戏生成框架。",
      "ta": "关注其代理编排与体验导向的生成流程，思考对工具链自动化的启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.08621"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "图像生成视觉文本双语基准",
      "sum": "UltraText Bench 提出评估图像生成中视觉文本渲染的双语基准。",
      "ta": "贴图/UI 中文字渲染质量评测，对生成式贴图工具选型有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.09823"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "分层过程理解提升主动助手",
      "sum": "用分层过程理解改进 AI 主动协助的时机与内容。",
      "ta": "过程理解思路或可迁移到编辑器内主动式辅助工具的交互设计。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.06505"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "策略内蒸馏将经验写入扩散权重",
      "sum": "通过策略内上下文蒸馏把智能体经验内化进扩散模型权重。",
      "ta": "模型经验内化方法，关注其对生成式资产工具持续学习能力的启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.07250"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Unity 发布提示式游戏工具 Spark",
      "sum": "Unity 联合 Google AI 推出基于提示的游戏开发工具 Unity Spark。",
      "ta": "关注其如何把 Asset Store 美术资产接入 AI 辅助编辑器，影响未来工作流。",
      "src": "Game Developer · 10-07",
      "url": "https://www.gamedeveloper.com/programming/unity-unveils-unity-spark-an-prompt-based-tool-for-google-s-ai-games-platform"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Unity Spark 强调创作者仍需打磨",
      "sum": "Unity Spark 结合 AI 生成与美术资产，CEO 强调创作者仍需设计迭代打磨。",
      "ta": "官方对 AI 工具定位的表态，可判断其与专业 TA 工作流的边界。",
      "src": "80 Level · 10-07",
      "url": "https://80.lv/articles/unity-spark-puts-artist-made-assets-inside-an-ai-assisted-game-editor/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "谷歌推出实验性 AI 游戏平台",
      "sum": "Google 发布名为 Google Playground 的实验性 AI 游戏平台。",
      "ta": "平台级 AI 游戏动向，关注其运行时能力与对传统引擎管线的潜在冲击。",
      "src": "Game Developer · 10-06",
      "url": "https://www.gamedeveloper.com/business/google-debuts-new-ai-game-platform-named-google-playground"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "AI 概念转可绑定风格化角色",
      "sum": "演示用 Headshot 3 与 Character Creator 5 把 AI 概念图转为可绑定角色。",
      "ta": "AI 概念到可动画角色的完整链路，关注绑定与拓扑是否满足生产要求。",
      "src": "80 Level · 10-07",
      "url": "https://80.lv/articles/mastering-stylized-characters-with-character-creator-5-headshot-3/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Godot 伪 3D 视觉实现解析",
      "sum": "开发者分享在 Godot 中为恐怖合作游戏伪造 3D 观感的具体做法。",
      "ta": "低成本伪 3D 渲染技巧，对风格化项目与性能受限平台有借鉴价值。",
      "src": "80 Level · 10-07",
      "url": "https://80.lv/articles/see-how-developers-faked-3d-look-in-godot-for-their-darkwood-inspired-co-op-horror/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "潜行者 2 风化工具箱制作流程",
      "sum": "美术师讲解潜行者 2 DLC 中可交互工具箱的建模、布料模拟与做旧贴图。",
      "ta": "布料仿真与风化材质流程细节，可参考其做旧贴图思路。",
      "src": "80 Level · 10-07",
      "url": "https://80.lv/articles/creating-a-weathered-toolbox-for-s-t-a-l-k-e-r-2-cost-of-hope/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "南极克苏鲁合作恐怖视觉解析",
      "sum": "UNFROST 团队谈南极克苏鲁合作恐怖的视觉机制灵感与 Unity 工作流。",
      "ta": "小团队 Unity 工作流与敌人运动迭代经验，对原型验证节奏有参考。",
      "src": "80 Level · 10-07",
      "url": "https://80.lv/articles/making-a-co-op-survival-horror-with-lovecraftian-creatures-set-in-antarctica/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Bit Reactor 召回过半停职员工",
      "sum": "星战 Zero Company 开发商 Bit Reactor 召回超半数此前停职的员工。",
      "ta": "工作室人事波动，关注其对项目排期与外包协作的间接影响。",
      "src": "Game Developer · 10-07",
      "url": "https://www.gamedeveloper.com/business/star-wars-zero-company-developer-bit-reactor-brings-back-over-half-of-furloughed-staff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Undead Labs 反思裁员沟通方式",
      "sum": "Undead Labs 负责人称在裁员准备中对员工过度坦诚。",
      "ta": "行业管理侧反思，与 TA 日常工作关联有限，速览即可。",
      "src": "Game Developer · 10-06",
      "url": "https://www.gamedeveloper.com/business/unlead-labs-studio-head-says-they-were-irresponsibly-transparent-in-preparing-staff-for-layoffs"
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
