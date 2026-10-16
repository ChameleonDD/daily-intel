// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月16日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>无细分置换面几何查询</em>。其余按重要性自动排序，红色优先。",
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
      "title": "单图生成可重打光3D材质",
      "sum": "SUPRA-TEX 用超对齐纹理从单张参考图生成可重打光材质，减少多视图融合伪影。",
      "ta": "关注其纹理对齐策略，或可用于资产材质自动化流程。",
      "src": "arXiv · cs.GR · 10-15",
      "url": "https://arxiv.org/abs/2610.22352v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "单位四元数压缩新方法",
      "sum": "提出均匀分布单位四元数编码方法，降低内存与带宽占用。",
      "ta": "动画/骨骼数据压缩可参考，对大规模角色系统有潜在收益。",
      "src": "arXiv · cs.GR · 10-15",
      "url": "https://arxiv.org/abs/2610.22052v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "草图重建可重打光服装",
      "sum": "从带标注草图重建可重打光服装，草图直接表达高光与阴影意图。",
      "ta": "服装资产快速原型方向，关注其光照意图到材质的映射方式。",
      "src": "arXiv · cs.GR · 10-15",
      "url": "https://arxiv.org/abs/2610.21865v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "整体先验驱动部件化生成",
      "sum": "复用整体3D先验实现部件分解生成，兼顾部件细节与整体结构一致性。",
      "ta": "程序化资产拆分思路，对模块化场景生成有参考价值。",
      "src": "arXiv · cs.GR · 10-15",
      "url": "https://arxiv.org/abs/2610.21850v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "无细分置换面几何查询",
      "sum": "无需预细分网格即可在置换贴图表面做几何查询，省去密集三角网格内存开销。",
      "ta": "置换贴图直接求交，对地形/植被高细节表面渲染管线有直接启发。",
      "src": "arXiv · cs.GR · 10-15",
      "url": "https://arxiv.org/abs/2610.21584v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "移动体积视频双流高斯方案",
      "sum": "ResStreamGS 用残差敏感双流3DGS，在受限带宽下实现移动端体积视频流。",
      "ta": "关注其残差分层编码，对移动端3DGS流式传输有借鉴意义。",
      "src": "arXiv · cs.GR · 10-15",
      "url": "https://arxiv.org/abs/2610.21121v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "机器人采集真实布料数据集",
      "sum": "RoboCloth 用机器人控制相机与光照，采集500种真实布料约580帧HDR数据。",
      "ta": "高质量布料反射重建数据集，可作材质扫描与神经渲染训练参考。",
      "src": "arXiv · cs.GR · 10-15",
      "url": "https://arxiv.org/abs/2610.21090v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多码本扩散语言模型",
      "sum": "Intern Lumina U2 提出多码本扩散LLM，统一视觉理解与图像生成。",
      "ta": "与实时渲染无直接关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.20818"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散强化学习路由优化",
      "sum": "提出面向在线扩散强化学习的路由策略优化方法。",
      "ta": "纯训练方法，与TA工作流无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.22282"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "商用主图生成框架",
      "sum": "CommerceGen-Studio 提供端到端商用级主图生成框架。",
      "ta": "电商图像方向，与游戏渲染无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.20603"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "空间记忆提升世界模型效率",
      "sum": "Velox 通过空间记忆机制让世界模型更高效。",
      "ta": "世界模型效率方向，对实时仿真与生成式场景有潜在参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.22311"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "驾驶世界动作模型对齐",
      "sum": "SimVTA 用仿真对齐视频与轨迹，服务驾驶世界动作模型。",
      "ta": "自动驾驶方向，与游戏TA无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.13781"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "CT超分辨率扩散方法",
      "sum": "VascuSR 提出迭代式解剖感知扩散用于CT超分辨率。",
      "ta": "医学影像方向，与实时渲染无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.20509"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "视频世界模型记忆基准",
      "sum": "WorldMemBench 提出视频世界模型记忆能力的综合评测基准。",
      "ta": "若关注生成式世界模型的长时一致性，可作评测参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.19063"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "编码智能体内部世界模型",
      "sum": "ANTE 让编码智能体从验证信念中学习内部世界模型。",
      "ta": "代码智能体方向，与TA工作流无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.15368"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "CDPR原创IP用UE原型",
      "sum": "CDPR完成首个原创IP Project Hadar 世界观，正用虚幻引擎原型化玩法机制。",
      "ta": "又一大厂押注UE，关注其后续技术管线与工具链动向。",
      "src": "80 Level · 10-15",
      "url": "https://80.lv/articles/cdpr-says-its-first-original-ip-has-been-its-biggest-undertaking-yet/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "建筑坍塌融入战术玩法",
      "sum": "Brigador Killers 结合子弹穿透、系统性建筑坍塌、反应物理与可读VFX，配Blender精灵管线。",
      "ta": "系统性破坏与VFX可读性设计，对特效与物理联动有参考。",
      "src": "80 Level · 10-15",
      "url": "https://80.lv/articles/how-brigador-killers-makes-blowing-up-buildings-part-of-the-strategy/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Epic启动器性能争议",
      "sum": "Epic称新启动器快于Steam，Valve更新数据反驳。",
      "ta": "行业八卦，速览即可。",
      "src": "80 Level · 10-15",
      "url": "https://80.lv/articles/we-vibe-coded-a-new-epic-games-launcher-apparently-programming-is-hard/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前极乐迪斯科成员新RPG",
      "sum": "前ZA/UM开发者组建Red Rooster，公布物理驱动魔幻现实主义RPG。",
      "ta": "新作动向，无技术细节。",
      "src": "80 Level · 10-15",
      "url": "https://80.lv/articles/former-disco-elysium-devs-announce-new-incendiary-rpg/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前FS开发者公布ARPG",
      "sum": "前FromSoftware开发者Hytacka公布其ARPG新作Overseeker预告。",
      "ta": "独立新作，速览即可。",
      "src": "80 Level · 10-15",
      "url": "https://80.lv/articles/fromsoftware-s-ex-developer-released-trailer-for-his-upcoming-arpg-overseeker/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "寂静岭风独立冒险发售",
      "sum": "单人开发者arch1t3ct的2000年代风格梦境冒险游戏已发售。",
      "ta": "独立作品，速览即可。",
      "src": "80 Level · 10-15",
      "url": "https://80.lv/articles/this-melancholic-silent-hill-inspired-adventure-set-in-a-half-dead-place-is-out/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "B社40周年Discord问答",
      "sum": "Bethesda开设Discord问答频道庆祝40周年，玩家可向开发者提问。",
      "ta": "社区活动，无技术内容。",
      "src": "80 Level · 10-15",
      "url": "https://80.lv/articles/ask-bethesda-almost-anything-in-q-a-discord-channel-to-celebrate-its-40th-anniversary/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "开源2D骨骼动画编辑器",
      "sum": "Rigby2D 是一款免费开源的2D骨骼动画编辑器。",
      "ta": "2D动画工具链补充，可评估是否纳入小型项目工作流。",
      "src": "Tech-Artists · 10-15",
      "url": "https://www.tech-artists.org/t/rigby2d-free-open-source-2d-skeletal-animation-editor/18580"
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
