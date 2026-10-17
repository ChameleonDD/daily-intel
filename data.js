// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月17日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE5.7 生物角色全流程</em> / <em>BRUTAL 开源开发框架发布</em> / <em>NAS 上的 Git 项目结构讨论</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "flow",
      "imp": "mid",
      "title": "UE5.7 生物角色全流程",
      "sum": "ZBrush 雕鳞片、Marvelous Designer 模拟非人角色服装，最终在 UE5.7 渲染。",
      "ta": "可参考非人形角色的布料模拟思路，以及 UE5.7 下的角色渲染管线实践。",
      "src": "80 Level · 10-16",
      "url": "https://80.lv/articles/sculpting-scales-simulating-clothes-for-creature-chef-in-zbrush-marvelous-designer/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "BRUTAL 开源开发框架发布",
      "sum": "DayZ 创作者推出免费开源开发框架 BRUTAL，已被其工作室的太空模拟游戏采用。",
      "ta": "值得关注其工具链组织方式，或可作为自研管线/工具框架的参考。",
      "src": "80 Level · 10-16",
      "url": "https://80.lv/articles/dayz-creator-presents-brutal-a-free-open-source-development-framework/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "NAS 上的 Git 项目结构讨论",
      "sum": "TA 社区讨论文件存放在 NAS 时如何组织 Git 项目，含 Maya 脚本的开发版与发布版。",
      "ta": "涉及脚本版本管理与共享存储的工程实践，可看同行如何拆分 dev/published 副本。",
      "src": "Tech-Artists · 10-16",
      "url": "https://www.tech-artists.org/t/how-do-you-structure-git-projects-when-your-files-live-on-a-nas-maya-scripts-dev-vs-published-copies/18581"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 玻璃质感苹果制作",
      "sum": "Moop-A-Doop 展示了一个风格化玻璃质感苹果的渲染制作过程。",
      "ta": "可速览其玻璃/折射材质与打光思路，对风格化材质有参考价值。",
      "src": "80 Level · 10-16",
      "url": "https://80.lv/articles/see-how-this-sparkly-glass-like-apple-was-made-in-blender/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 蜘蛛侠滑板动画拆解",
      "sum": "Tonq 详细拆解了其 Blender 短片《Spider-Man Never Been Done》的动画制作。",
      "ta": "可看其动画节奏与镜头处理，对个人短片流程有借鉴意义。",
      "src": "80 Level · 10-16",
      "url": "https://80.lv/articles/see-how-you-can-make-a-blender-animation-of-spider-man-skating/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "狗狗动捕效果像外星人",
      "sum": "一位艺术家对狗做动作捕捉，结果看起来像外星生物，真狗无恙。",
      "ta": "速览即可，可作为非人形动捕重定向问题的趣味案例。",
      "src": "80 Level · 10-16",
      "url": "https://80.lv/articles/artist-motion-captures-a-dog-and-it-looks-like-an-alien/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "UEFN 学生训练营作品展示",
      "sum": "UEFN 学生训练营结束，300 多名学生完成三周课程，官方放出优秀 Fortnite 岛屿集锦。",
      "ta": "可速览 UEFN 创作者生态的产出水平，与引擎工具链无直接技术关联。",
      "src": "Unreal Engine · 10-16",
      "url": "https://www.unrealengine.com/learning/check-out-the-top-fortnite-islands-from-the-uefn-student-bootcamp"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "HeroQuest 将登陆 PC",
      "sum": "Nomad Games 与 Balor Games 将经典桌游地城探索游戏 HeroQuest 数字化搬上 PC。",
      "ta": "行业动态速览，与 TA 技术工作无直接关联。",
      "src": "80 Level · 10-16",
      "url": "https://80.lv/articles/classic-tabletop-adventure-heroquest-is-coming-to-pc/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "独立游戏 Flipping Is Hard 上线",
      "sum": "融合《和班尼特福迪一起攻克难关》与诺基亚怀旧元素的独立游戏登陆 Steam，支持 16 人。",
      "ta": "行业动态速览，无技术关联。",
      "src": "80 Level · 10-16",
      "url": "https://80.lv/articles/getting-over-it-meets-nokia-nostalgia-in-new-indie-game-flipping-is-hard/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "RTX Spark 单机开发部署",
      "sum": "NVIDIA 介绍 RTX Spark，可在单机上完成 AI 智能体的编码、测试与部署。",
      "ta": "原文未提及游戏/实时渲染关联，仅作 AI 开发工具链速览。",
      "src": "NVIDIA · 10-16",
      "url": "https://developer.nvidia.com/blog/code-test-and-deploy-on-one-machine-with-nvidia-rtx-spark/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "规则驱动生成世界建模验证器",
      "sum": "OmniVerifier-C1 提出分解式分级验证器，用于规则约束的生成式世界建模。",
      "ta": "原文未明确游戏/实时关联，仅作生成式世界建模方向速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.22355"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "生成模型测试时多样性对齐",
      "sum": "论文提出 Mine、Sample、Render 流程，在测试时对生成模型做多样性对齐。",
      "ta": "通用生成模型方法，原文无游戏/实时渲染关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.21185"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多变量轨迹快速生成预测",
      "sum": "PathFM 提出多变量轨迹的快速生成式预测方法。",
      "ta": "通用时序预测研究，原文未提及游戏关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.22358"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Hadamard 码本加速图像视频压缩",
      "sum": "H-DDCM 用 Hadamard 码本实现快速的生成式图像与视频压缩。",
      "ta": "涉及图像/视频压缩，但原文未提实时或引擎关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.18125"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "OCR 严重度加权字符错误率",
      "sum": "论文提出按严重度加权的字符错误率指标，指出相同 CER 下损害程度并不相等。",
      "ta": "OCR 评测指标研究，与 TA 工作无直接关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.20461"
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
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：arXiv · cs.GR。"
  },
  "xStale": false
};
