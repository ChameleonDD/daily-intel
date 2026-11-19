// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月19日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>GTA6 技术系统全面揭秘</em> / <em>GTA6 为 NPC 做 60 万动画</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "biz",
      "imp": "hi",
      "rank": 1,
      "title": "GTA6 技术系统全面揭秘",
      "sum": "Rockstar 为 GTA6 重做开放世界：动态床单、出汗、自适应动画、风声传播、局部天气与更聪明警察。",
      "ta": "自适应动画与局部天气/风场系统是植被与特效方向可直接借鉴的世界响应式设计思路。",
      "src": "80 Level · 11-18",
      "url": "https://80.lv/articles/behind-the-incredible-new-tech-and-systems-rockstar-built-to-make-gta-6-feel-alive/"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 2,
      "title": "GTA6 为 NPC 做 60 万动画",
      "sum": "Rockstar 为 GTA6 的 NPC 制作了约 60 万段动画，团队称如同在珠峰上建金字塔。",
      "ta": "海量动画资产的生产管线与批量管理方式，对大规模程序化资产生成有参考价值。",
      "src": "80 Level · 11-18",
      "url": "https://80.lv/articles/rockstar-created-about-600-000-animations-for-npcs-in-gta-6/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "智能 NPC 数量致 GTA6 延期",
      "sum": "彭博社披露，海量智能 NPC 是 GTA6 延期的原因之一。",
      "ta": "了解大规模 AI 驱动 NPC 的性能与内容成本，可作为世界密度设计的参照。",
      "src": "80 Level · 11-18",
      "url": "https://80.lv/articles/enormous-number-of-smart-npcs-was-one-of-reasons-for-gta-6-delay/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "GTA6 成史上评分最高游戏",
      "sum": "GTA6 Metacritic 均分 99，评测称赞其技术细节、反应式世界与情感叙事。",
      "ta": "反应式世界获高评价，说明环境动态反馈是当前 3A 品质的关键竞争点。",
      "src": "80 Level · 11-18",
      "url": "https://80.lv/articles/gta-6-lives-up-to-the-hype-and-becomes-the-highest-rated-game-in-history/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PSN 在 GTA6 发售前宕机",
      "sum": "PlayStation Network 在 GTA6 发售前数小时发生故障，部分玩家无法访问游戏与在线功能。",
      "ta": "与制作技术无关，仅作行业动态速览。",
      "src": "80 Level · 11-19",
      "url": "https://80.lv/articles/psn-is-down-for-thousands-just-hours-before-gta-6-launches-on-ps5/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rockstar 总裁谈 GTA6 初衷",
      "sum": "Sam Houser 罕见发声明，称 GTA6 旨在超越期待、展示游戏媒介的可能性。",
      "ta": "纯表态，无技术信息。",
      "src": "80 Level · 11-18",
      "url": "https://80.lv/articles/rockstar-boss-says-gta-6-was-made-to-show-what-games-are-capable-of/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Dan Houser 回顾经典开发",
      "sum": "Rockstar 联合创始人回忆 GTA3 盒图临时改动、Bully 开发困境等往事。",
      "ta": "行业历史向内容，与当前技术工作关联弱。",
      "src": "80 Level · 11-18",
      "url": "https://80.lv/articles/rockstar-co-founder-looks-back-at-making-gta-3-bully-other-classics/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "RTX Spark 紧凑工作站发布",
      "sum": "NVIDIA 联合华硕、戴尔、微星推出紧凑 RTX Spark 台式机，最高 128GB 统一内存，面向 3D、视频与本地 AI。",
      "ta": "统一内存大容量机型对本地跑 3D 生成与大型场景预览的 TA 有实际选型意义。",
      "src": "80 Level · 11-18",
      "url": "https://80.lv/articles/nvidia-expands-rtx-spark-lineup-with-compact-desktops-for-developers-creators-and-ai-enthusiasts/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Maya 接入 MCP 供 LLM 审计",
      "sum": "社区发布 mcp-for-maya，让 LLM 代理检查与审计 Maya 场景，而非盲目编辑。",
      "ta": "场景审计型 AI 代理是 DCC 工具链自动化的可行切入点，比直接生成更可控。",
      "src": "Tech-Artists · 11-18",
      "url": "https://www.tech-artists.org/t/mcp-for-maya-an-mcp-server-that-makes-llm-agents-inspect-audit-a-maya-scene-instead-of-editing-blind/18659"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "SkinLayer Studio 分层蒙皮发布",
      "sum": "SkinLayer Studio 发布，为 Maya（及 Max/Blender）提供分层式首轮蒙皮。",
      "ta": "分层蒙皮思路可加速角色首轮绑定，间接影响角色资产管线效率。",
      "src": "Tech-Artists · 11-18",
      "url": "https://www.tech-artists.org/t/released-skinlayer-studio-layered-first-pass-skinning-for-maya-also-max-blender/18656"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "开源 Maya 静态网格校验器",
      "sum": "开源 Maya 静态网格校验工具，基于 Python/PySide，覆盖 2024–2026。",
      "ta": "资产校验脚本是 TA 工具链常规件，可参考其检查项设计。",
      "src": "Tech-Artists · 11-18",
      "url": "https://www.tech-artists.org/t/open-source-maya-static-mesh-validator-python-pyside-2024-2026/18651"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 平板版推进发布",
      "sum": "Blender 总部举办为期一周的工作坊，确定平板项目发布所需步骤。",
      "ta": "移动端 DCC 交互演进，长期或影响现场美术与扫描工作流。",
      "src": "Blender 开发博客 · 11-18",
      "url": "https://code.blender.org/2026/11/tablet-path-to-release/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "MIRACO 2 扫描仪支持高斯泼溅",
      "sum": "Revopoint MIRACO 2 便携 3D 扫描仪上线众筹，六种模式、精度 0.02mm、支持 3D 高斯泼溅与自动 Scan-to-CAD。",
      "ta": "扫描端直接输出高斯泼溅，对植被/场景实拍重建进引擎的流程值得关注。",
      "src": "80 Level · 11-18",
      "url": "https://80.lv/articles/revopoint-s-miraco-2-combines-portable-3d-scanning-with-automated-scan-to-cad/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高斯泼溅水下渲染新方法",
      "sum": "NIRJALA 用三路径光学与可逆物理，去除高斯泼溅中的水体干扰。",
      "ta": "水下/介质渲染的光学分解思路，对水体特效与泼溅场景重建有参考。",
      "src": "arXiv · cs.GR · 11-17",
      "url": "https://arxiv.org/abs/2611.23450v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "神经启发的纹理分析合成",
      "sum": "GramStatTexNet 提出高效可解释、受神经科学启发的纹理分析-合成方法。",
      "ta": "可解释纹理合成对程序化植被材质与贴图生成有潜在借鉴。",
      "src": "arXiv · cs.GR · 11-18",
      "url": "https://arxiv.org/abs/2611.23755v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "运动扩散模型物理性检验",
      "sum": "研究对比运动扩散模型激活与其自身干净样本估计，重新审视其物理属性探测结论。",
      "ta": "方法论纠偏，与实时管线距离较远。",
      "src": "arXiv · cs.GR · 11-18",
      "url": "https://arxiv.org/abs/2611.24423v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Game2Player 环境与玩家协同",
      "sum": "Game2Player 通过环境与玩家协同开发，扩展视觉智能体的游戏体验规模。",
      "ta": "游戏环境作为智能体训练场，与 NPC/玩法 AI 方向相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.24154"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "WorldRuler 可配置规则世界建模",
      "sum": "WorldRuler 提出在可配置规则下进行交互式世界建模。",
      "ta": "规则约束的世界模型，对程序化生成与可交互场景构建有启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.24869"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "可控视频生成世界模型 2.0",
      "sum": "Code World Model 2.0 面向无限可控视频生成。",
      "ta": "可控视频生成若成熟，可用于材质/特效预演与参考生成。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.22925"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散 Transformer 直接像素预测",
      "sum": "研究提出跳过解码器，从扩散 Transformer 直接预测像素。",
      "ta": "生成架构细节，与实时渲染关联尚不明确。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.22287"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "电影改编游戏评测基准",
      "sum": "Movie2Game-Bench 提出超越可玩性的电影到游戏改编综合评测。",
      "ta": "评测基准类工作，与制作技术关联弱。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.24669"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Cosmos 双提示构建训练数据集",
      "sum": "NVIDIA Cosmos 用两个提示构建可直接训练的物理 AI 数据集，覆盖稀有缺陷与夜间场景。",
      "ta": "合成数据生成流程，与游戏实时渲染无直接关联。",
      "src": "NVIDIA · 11-18",
      "url": "https://developer.nvidia.com/blog/build-training-ready-physical-ai-datasets-with-two-prompts-in-nvidia-cosmos/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《光与影》叙事主管谈融资",
      "sum": "《光与影：33号远征队》叙事主管 Jennifer Svedberg-Yen 希望改变游戏融资的优先级叙事。",
      "ta": "行业融资话题，与 TA 工作无直接关系。",
      "src": "Game Developer · 11-18",
      "url": "https://www.gamedeveloper.com/design/clair-obscur-expedition-33-s-narrative-lead-wants-to-change-game-funding"
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
