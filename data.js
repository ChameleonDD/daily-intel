// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月16日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>发丝卡片自动转发丝几何</em> / <em>拓扑无关自动面部绑定</em> / <em>3D生成器扩展到部件级</em>。其余按重要性自动排序，红色优先。",
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
      "title": "发丝卡片自动转发丝几何",
      "sum": "HairCS 提出自动流水线，把发丝卡片模型重建为高质量发丝级发型。",
      "ta": "植被/毛发类程序化生成的同类思路：从低模代理还原高精度几何，可迁移到草叶卡片转真实草簇。",
      "src": "arXiv · cs.GR · 09-15",
      "url": "https://arxiv.org/abs/2609.16465v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "拓扑无关自动面部绑定",
      "sum": "TopoRig 用多源监督实现跨异构网格拓扑的自动面部绑定。",
      "ta": "角色管线里绑定环节的自动化尝试，值得关注其如何绕开标准模板的对应误差。",
      "src": "arXiv · cs.GR · 09-14",
      "url": "https://arxiv.org/abs/2609.15746v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "3D生成器扩展到部件级",
      "sum": "KaiNinja 把原生3D生成从单一融合网格扩展到部件级资产输出。",
      "ta": "部件级输出才对接得上编辑、绑定、模拟等下游流程，是3D生成进引擎管线的关键一步。",
      "src": "arXiv · cs.GR · 09-14",
      "url": "https://arxiv.org/abs/2609.15659v2"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "文本生成物理一致动态场景",
      "sum": "ESG 从自然语言描述生成物理一致的动态3D场景，需联合推理结构与时间。",
      "ta": "程序化场景生成从静态走向动态，关注其物理约束如何与场景结构联合求解。",
      "src": "arXiv · cs.GR · 09-14",
      "url": "https://arxiv.org/abs/2609.15392v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "流式物理视频生成可细控",
      "sum": "PhysStream 用结构化场景记忆与细粒度运动控制实现流式物理视频生成。",
      "ta": "交互式视频生成的控制粒度提升，对实时预览类工具链有潜在参考价值。",
      "src": "arXiv · cs.GR · 09-15",
      "url": "https://arxiv.org/abs/2609.17521v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "超光速物体延迟光渲染",
      "sum": "论文提出非相对论设定下有限光速信号的实时渲染方法，超光速物体会呈现多重像。",
      "ta": "纯图形学趣味课题，延迟光/多重像的实时实现思路可作渲染技巧储备。",
      "src": "arXiv · cs.GR · 09-14",
      "url": "https://arxiv.org/abs/2609.16180v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "不透明度不只是遮挡",
      "sum": "论文指出 Web 图形中 opacity 实际控制的是对象与背景的混合方式，而非单纯遮挡程度。",
      "ta": "材质混合语义的澄清，写 UI/材质透明度时值得留意其与背景色的耦合。",
      "src": "arXiv · cs.GR · 09-14",
      "url": "https://arxiv.org/abs/2609.14971v2"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "GPIS 当参与介质渲染",
      "sum": "论文用水平穿越统计把高斯过程隐式曲面与参与介质散射理论双向打通。",
      "ta": "隐式曲面与体积散射的统一理论，对体积雾/参与介质渲染有理论参考。",
      "src": "arXiv · cs.GR · 09-13",
      "url": "https://arxiv.org/abs/2609.14695v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "HKTex 去掉网格特征系统",
      "sum": "论文用局部展开与随机热特征加速 HKTex，免去50次全局拉普拉斯特征分解。",
      "ta": "表面外观表示的性能优化案例，思路可类比到其他依赖全局基的材质方案。",
      "src": "arXiv · cs.GR · 09-12",
      "url": "https://arxiv.org/abs/2609.14105v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "高雅可比六面体细分模板",
      "sum": "论文提出平面面片与高雅可比的两种六面体细分模板，用于自动生成高质量共形六面体网格。",
      "ta": "网格生成偏仿真方向，程序化几何与碰撞体生成可留意其细分策略。",
      "src": "arXiv · cs.GR · 09-13",
      "url": "https://arxiv.org/abs/2609.14729v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "基础模型时代的游戏AI",
      "sum": "HuggingFace 收录论文探讨基础模型时代游戏中的 AI 应用。",
      "ta": "游戏+基础模型的综述性方向，可快速扫一眼其分类框架。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.16679"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 绑定还原 Deadlock 表情",
      "sum": "zombielord999 用 Blender 绑定展示 Deadlock 角色 Mina 的面部表演表现力。",
      "ta": "面部绑定与表演参考，可看其骨骼/形态键组织方式。",
      "src": "80 Level · 09-15",
      "url": "https://80.lv/articles/see-how-expressive-deadlock-s-mina-s-face-can-be-with-this-blender-rig/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "复古FPS敌人AI设计复盘",
      "sum": "独立开发者分享 Agent 64 如何复刻90年代末主机射击游戏的敌人AI，强调可读性优先于智能。",
      "ta": "战斗可读性优先的设计取舍，对特效/反馈设计有借鉴意义。",
      "src": "80 Level · 09-15",
      "url": "https://80.lv/articles/solo-developer-on-recreating-the-late-90s-console-shooter-enemy-ai-for-an-fps/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "角色动画社区挑战作品",
      "sum": "Trần Quốc Khánh 分享其为 Pwnisher 社区挑战制作的 Hellsing 风格角色动画。",
      "ta": "动画表现参考，速览即可。",
      "src": "80 Level · 09-15",
      "url": "https://80.lv/articles/hellsing-ultimate-inspired-character-animation-for-pwnisher-s-community-challenge/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Roblox 允许游戏独立上架",
      "sum": "Roblox 将允许开发者把游戏作为独立应用发布到其他商店，仍沿用相同分成经济。",
      "ta": "平台分发策略变化，关注其对跨平台打包与资源规格的潜在影响。",
      "src": "Game Developer · 09-15",
      "url": "https://www.gamedeveloper.com/business/roblox-will-allow-devs-to-release-games-as-standalone-apps-on-other-stores"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Wardogs 主创拒招批评加班者",
      "sum": "Wardogs 负责人称不会雇佣在社交媒体上抨击 crunch 的人。",
      "ta": "行业劳资话题，速览。",
      "src": "Game Developer · 09-15",
      "url": "https://www.gamedeveloper.com/business/wardogs-lead-says-the-studio-won-t-hire-people-who-decry-crunch-on-social-media"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "政客谈游戏软实力",
      "sum": "华盛顿州州务卿 Steve Hobbs 在 SLICE 与 PAX West 2026 上向开发者推销游戏作为软实力的概念。",
      "ta": "行业政策话题，速览。",
      "src": "Game Developer · 09-15",
      "url": "https://www.gamedeveloper.com/business/why-does-this-prominent-washington-state-politician-think-video-games-can-be-soft-power-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Bohemia 入股 Enjoy Studio",
      "sum": "Bohemia Interactive 收购 Everwind 开发商 Enjoy Studio 的少数股权。",
      "ta": "工作室资本动向，速览。",
      "src": "Game Developer · 09-15",
      "url": "https://www.gamedeveloper.com/business/bohemia-interactive-acquires-minority-stake-in-everwind-developer-enjoy-studio"
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
