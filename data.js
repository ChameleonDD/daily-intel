// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月24日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE6 弃用蓝图与 Actor 框架</em> / <em>EVE 高端 AO 技术开放使用</em>。其余按重要性自动排序，红色优先。",
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
      "title": "UE6 弃用蓝图与 Actor 框架",
      "sum": "Epic 不再计划在 UE6 初期保留蓝图与 Actor Gameplay Framework，转向 AI 驱动工具。",
      "ta": "直接影响 TA 工具链与团队工作流设计，需提前评估程序化/工具脚本的迁移路径。",
      "src": "Game Developer · 11-23",
      "url": "https://www.gamedeveloper.com/programming/unreal-engine-6-to-remove-blueprints-and-actor-gameplay-framework-from-the-beginning"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "EVE 高端 AO 技术开放使用",
      "sum": "CORTAO 由 Fenris Creations 开发者个人项目开发，已用于 EVE: Frontier 并对外开放。",
      "ta": "可评估该 AO 方案在 UE 管线中的接入成本与性能收益。",
      "src": "Game Developer · 11-23",
      "url": "https://www.gamedeveloper.com/programming/devs-can-now-utilize-high-end-ambient-occlusion-technique-seen-in-eve-frontier"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "HoloSplat 实时人体重建流式传输",
      "sum": "面向实时自由视角人体视频流，需逐帧重建、带宽受限并在轻量客户端 GPU 解码。",
      "ta": "关注其带宽预算与客户端解码开销，对实时角色管线有参考价值。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.31140v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "DiffSimp 可微网格简化",
      "sum": "将网格简化纳入上游可微优化，减少后处理简化带来的误差。",
      "ta": "低模生成与 LOD 流程可借鉴其把简化误差纳入优化的思路。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.31018v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "LMnOP 剪枝 3D 高斯泼溅",
      "sum": "用 leave-many-out 重要性评分剪枝高斯，降低百万级高斯的存储与渲染成本。",
      "ta": "高斯泼溅剪枝直接影响实时渲染开销，可关注其重要性评分策略。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.30102v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "STAC++ 流式重建缓存压缩",
      "sum": "免训练即插即用框架，压缩并复用空间记忆以支持无界场景长期重建。",
      "ta": "流式重建的内存管理思路对大规模场景工具有参考。",
      "src": "arXiv · cs.GR · 11-21",
      "url": "https://arxiv.org/abs/2611.28793v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RoomTokens 室内场景合成",
      "sum": "在结构化 token 上做掩码扩散，兼顾物体语义、朝向与房间几何约束。",
      "ta": "程序化场景生成的表示方法，可关注其碰撞与边界约束处理。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.30219v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Tri-DNO 三维人物交互生成",
      "sum": "用三边扩散噪声优化生成 3D 人物物体交互，重点解决手部抓握真实性。",
      "ta": "角色动画与交互生成方向，速览即可。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.30607v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "CrownFusion 牙冠几何图像生成",
      "sum": "用几何图像加潜扩散生成 3D 牙冠，替代点云表示。",
      "ta": "几何图像编码思路可参考，但应用域偏医疗。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.31128v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "视觉扩散模型学习最优落子",
      "sum": "视觉扩散模型可在不显式搜索的情况下预测序列推理任务中的下一步。",
      "ta": "与图形管线关联弱，速览。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.30879v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "周期 B 样条插值节点优化",
      "sum": "针对偶数次周期 B 样条插值，提出公平优化的交错节点选择方法。",
      "ta": "CAGD 基础算法，曲线工具开发时可参考。",
      "src": "arXiv · cs.GR · 11-23",
      "url": "https://arxiv.org/abs/2611.30717v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "动画角色身体动态少样本推断",
      "sum": "仅凭首帧与动作指令，视觉世界模型可推断不同角色的身体动态差异。",
      "ta": "角色动画方向，速览。",
      "src": "arXiv · cs.GR · 11-21",
      "url": "https://arxiv.org/abs/2611.28842v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "3AGameFactory 智能绑定与动作生成",
      "sum": "面向多样 3D 资产的智能体绑定与可靠复杂动作生成。",
      "ta": "绑定与动作生成自动化，与 TA 资产管线强相关，值得关注。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.30013"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "GameAnything 从灵感生成可玩游戏",
      "sum": "从任意灵感出发生成可玩的游戏世界。",
      "ta": "程序化世界生成方向，关注其可玩性与生成管线。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.29238"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "GameDojo 实时交互智能体基准",
      "sum": "在电子游戏中评测实时交互智能体的基准。",
      "ta": "实时交互评测框架，可关注其与游戏引擎的对接方式。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.30771"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "AutoPILOT 实时游玩视觉智能体",
      "sum": "面向实时游玩的视觉智能体框架。",
      "ta": "实时游戏智能体方向，速览其延迟与推理开销。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.28202"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Motion Mamba 2.0 长程人形控制",
      "sum": "自回归扩散 Mamba 用于长程人形控制。",
      "ta": "角色控制方向，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.29897"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Plan4D 可规划 4D 世界生成",
      "sum": "生成可规划的 4D 世界。",
      "ta": "世界模型方向，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.26516"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "ViDiHand2 视频扩散重建手部",
      "sum": "融合视频扩散先验与手部几何，在野外场景重建 3D 手部动作。",
      "ta": "动作捕捉方向，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.30597"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Fast-JEPA 潜空间世界模型",
      "sum": "推进潜空间世界模型的成功-延迟前沿。",
      "ta": "世界模型效率方向，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.25927"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "VRChat 星系着色器",
      "sum": "把身体部位渲染成星系，可在其中放置行星或黑洞。",
      "ta": "着色器创意实现，可参考其分层与遮罩思路。",
      "src": "80 Level · 11-23",
      "url": "https://80.lv/articles/this-vrchat-shader-turns-body-parts-into-beautiful-galaxies/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Unity 程序化触须工具",
      "sum": "程序化生成缠绕任意物体的毒液式触须，提供五种视觉风格。",
      "ta": "程序化缠绕生成思路对植被/藤蔓类工具直接可借鉴。",
      "src": "80 Level · 11-23",
      "url": "https://80.lv/articles/procedural-unity-tool-creates-venom-like-tendrils-that-wrap-around-any-object/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "25 款 UE 游戏获 TGA 提名",
      "sum": "超过 25 款虚幻引擎游戏获 2026 年 TGA 提名。",
      "ta": "行业风向参考，速览提名名单。",
      "src": "Unreal Engine · 11-23",
      "url": "https://www.unrealengine.com/news/over-25-unreal-engine-games-nominated-at-the-game-awards-2026"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "BioWare 关闭内幕披露",
      "sum": "前龙腾世纪主创称 EA 给出糟糕选项，工作室选了最不坏的一个。",
      "ta": "行业动态，速览。",
      "src": "80 Level · 11-24",
      "url": "https://80.lv/articles/ex-dragon-age-lead-on-what-led-to-bioware-s-closure/"
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
