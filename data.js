// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月11日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>13D高斯混合解全局光照</em> / <em>ABCD恒定显存训练大高斯场景</em> / <em>二次相位高斯做全息表示</em>。其余按重要性自动排序，红色优先。",
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
      "title": "13D高斯混合解全局光照",
      "sum": "将光传输方程解表示为位置、方向、法线与材质上的13D高斯混合模型。",
      "ta": "把GI求解统一进高斯表示，若可实时化将直接影响UE5 Lumen类方案的替代思路。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.11430v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "ABCD恒定显存训练大高斯场景",
      "sum": "Alpha合成块坐标下降法将大辐射场分块训练，保持全场景上下文且显存恒定。",
      "ta": "大场景高斯泼溅训练的显存瓶颈解法，对程序化植被/大世界扫描资产重建有直接参考价值。",
      "src": "80 Level · 09-10",
      "url": "https://80.lv/articles/how-abcd-trains-large-gaussian-splat-scenes-with-constant-vram/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "二次相位高斯做全息表示",
      "sum": "CVQPG用2D二次相位函数替换2D高斯，附加可学习曲率参数表示全息图。",
      "ta": "高斯泼溅的复数域扩展，关注其可学习参数设计对泼溅基元表达力的启发。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.11434v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender公布两年战略目标",
      "sum": "Blender开发博客首次公开未来两年的战略方向概览。",
      "ta": "小团队路线图决定DCC工具链走向，值得关注是否影响植被/程序化建模管线。",
      "src": "Blender 开发博客 · 09-10",
      "url": "https://code.blender.org/2026/09/small-teams-ambitious-projects/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender程序化冰块材质教程",
      "sum": "Ryan King讲解如何制作易编辑、可自定义的程序化冰块材质。",
      "ta": "程序化材质节点思路可迁移到植被/环境材质的可控参数化设计。",
      "src": "80 Level · 09-10",
      "url": "https://80.lv/articles/tutorial-realistic-procedural-ice-cube-material-in-blender-with-easy-customization/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "2D概念转3D奇幻角色拆解",
      "sum": "Artem Bieliakov分享从剪影到褶皱、缝线与羽毛的层叠服装建模流程。",
      "ta": "角色建模流程拆解，对硬表面/服装分层思路有轻度参考。",
      "src": "80 Level · 09-10",
      "url": "https://80.lv/articles/breakdown-modeling-a-3d-fantasy-character-based-on-a-2d-concept/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "毫米波雷达点泼溅新视角合成",
      "sum": "提出物理忠实、复值、多视角可解的可微蒙特卡洛雷达光线追踪器。",
      "ta": "非可见光波段的泼溅渲染，关注其复值渲染框架对特殊传感器可视化的借鉴。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.11894v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "反射驱动神经肌肉强化学习",
      "sum": "结合反射机制与强化学习，生成生理合理且可适应扰动的肌肉驱动运动。",
      "ta": "肌肉驱动运动生成，对角色动画物理拟真与程序化运动有潜在参考。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.11733v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "无示范学习高速冲刺运动",
      "sum": "将生物力学运动员模型接入高性能GPU模拟器，无需动作示范生成冲刺运动。",
      "ta": "GPU模拟器+生物力学模型，关注其高性能仿真架构对物理动画的启发。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.11083v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "ReCHOIR跨角色交互动作重定向",
      "sum": "以接触为引导，将人-物交互动作迁移到多样化人形角色并保留语义。",
      "ta": "接触引导的重定向，对角色动画复用与交互资产管线有参考价值。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.10982v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "图像与布局先验联合生成模板",
      "sum": "提出联合图像-布局生成方法，从文本直接产出和谐的设计模板。",
      "ta": "图形设计生成，与实时渲染关联弱，速览即可。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.11519v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "GeoTrussRover可重构机器人",
      "sum": "结合可变几何桁架与移动底座，用接触语义控制原语解决高维协调问题。",
      "ta": "机器人形态计算，与游戏渲染管线无直接关联。",
      "src": "arXiv · cs.GR · 09-10",
      "url": "https://arxiv.org/abs/2609.11361v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "递归代码世界模型构建复杂场景",
      "sum": "通过递归场景程序构建复杂世界，探索代码化世界模型表示。",
      "ta": "若世界模型以程序化场景代码表达，可能影响程序化生成与关卡自动化思路。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.11499"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "World in World世界模型探索",
      "sum": "提出World in World方法，用世界模型进行环境探索。",
      "ta": "世界模型探索方向，关注其对程序化环境生成与AI驱动的潜在影响。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.11548"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "可玩游戏片段助独立游戏曝光",
      "sum": "Ludeo讨论云端即时可玩片段如何降低营销门槛、提升独立游戏愿望单转化。",
      "ta": "发行侧营销手段，与TA日常无直接关系，速览。",
      "src": "80 Level · 09-10",
      "url": "https://80.lv/articles/how-playable-game-moments-could-help-indie-games-get-discovered/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "id老将谈十年后转独立开发",
      "sum": "Doom Eternal艺术总监Tony Garza等分享离开id后创办Turnkey Games的经历。",
      "ta": "行业人物访谈，无技术信息量。",
      "src": "Game Developer · 09-10",
      "url": "https://www.gamedeveloper.com/production/-ship-a-good-game-learn-from-it-and-build-from-there-lessons-from-going-indie-after-a-decade-at-id-software"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Control Resonant扩展辅助模式",
      "sum": "Control Resonant公布围绕新战斗系统设计的扩展Assist Mode，9月24日发售。",
      "ta": "游戏功能宣发，无技术细节。",
      "src": "PlayStation Blog · 09-10",
      "url": "https://blog.playstation.com/2026/09/10/play-your-way-with-control-resonants-expanded-assist-mode/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Muramasa新作定档2027年2月",
      "sum": "Vanillaware与Marvelous公布Muramasa: Revenant Blades将于2027年2月4日发售。",
      "ta": "发售日宣发，速览。",
      "src": "PlayStation Blog · 09-10",
      "url": "https://blog.playstation.com/2026/09/10/muramasa-revenant-blades-launches-february-4-2027/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS商店8月下载榜公布",
      "sum": "亚洲区PS5/PS4/PS VR2下载榜公布，黑神话悟空等居前。",
      "ta": "榜单数据，无技术信息。",
      "src": "PlayStation Blog · 09-10",
      "url": "https://blog.playstation.com/2026/09/09/20260910-top/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "星际大战新作获月度玩家选择",
      "sum": "Star Wars Zero Company获PlayStation玩家选择2026年8月最佳新游。",
      "ta": "玩家投票结果，速览。",
      "src": "PlayStation Blog · 09-10",
      "url": "https://blog.playstation.com/2026/09/10/players-choice-vote-for-augusts-best-new-game-3/"
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
