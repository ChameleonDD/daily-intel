// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月4日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>NO LAW用UE5打造赛博黑色世界</em> / <em>Blender分层动作工作坊将办</em> / <em>AMD支持DX12新Agility SDK</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "mid",
      "title": "NO LAW用UE5打造赛博黑色世界",
      "sum": "Neon Giant称小团队靠UE5实现高细节写实赛博黑色射击游戏。",
      "ta": "可看其如何在有限人力下用UE5管线堆出细节与写实度。",
      "src": "Unreal Engine · 11-03",
      "url": "https://www.unrealengine.com/developer-interviews/no-law-crafting-a-living-breathing-cyber-noir-world-with-ue5"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender分层动作工作坊将办",
      "sum": "Blender动画与绑定模块将在Blender大会前一天举办分层动作工作坊。",
      "ta": "关注分层动作系统走向，或影响未来角色动画工具链。",
      "src": "Blender 开发博客 · 11-03",
      "url": "https://code.blender.org/2026/11/layered-actions-workshop-september-2026/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "AMD支持DX12新Agility SDK",
      "sum": "DX12 Agility SDK 1.620带来Dump Files与扩展PIX标记，1.722预览版加新DXR特性。",
      "ta": "新DXR特性与PIX标记对渲染调试和光追管线值得跟进。",
      "src": "AMD GPUOpen · 11-03",
      "url": "https://gpuopen.com/learn/amd-directx12-agility-sdk-october-2026/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "相位引导动态高斯泼溅重建",
      "sum": "Phase-DGS用相位引导从非同步多视角视频做动态高斯泼溅重建。",
      "ta": "放宽同步假设，对实拍素材转动态3D重建流程有参考价值。",
      "src": "arXiv · cs.GR · 11-03",
      "url": "https://arxiv.org/abs/2611.04666v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "FlowRig统一3D与4D骨骼生成",
      "sum": "FlowRig用流匹配为静态3D与动态4D网格统一生成骨骼。",
      "ta": "自动绑定统一方案，对角色/植被等资产绑定自动化有启发。",
      "src": "arXiv · cs.GR · 11-02",
      "url": "https://arxiv.org/abs/2611.03775v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "DreamX视频扩散学潜在动作",
      "sum": "DreamX将视频扩散模型用作通用潜在动作学习器。",
      "ta": "潜在动作表征或与动画/动作生成相关，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.05377"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "PrimeSim通用世界模型模拟器",
      "sum": "PrimeSim基于大规模跨具身演示构建通用世界模型模拟器。",
      "ta": "世界模型方向，与实时仿真有潜在交集，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.04870"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "LOLPlay实时视觉智能体基准",
      "sum": "LOLPlay提出在英雄联盟中评测实时视觉智能体的基准。",
      "ta": "实时视觉智能体评测，对游戏内AI/自动化测试有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.03685"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "SeMo3D统一3D生成编辑补全",
      "sum": "SeMo3D用选择性建模统一3D生成、编辑与补全。",
      "ta": "3D资产生成编辑一体化，对程序化资产流程有潜在价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.02568"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender毛发梳理模拟插件",
      "sum": "BGEN Hair为Blender提供辫子、卷发等完整3D毛发梳理与模拟。",
      "ta": "毛发梳理模拟工具，对角色与生物资产制作流程有用。",
      "src": "80 Level · 11-03",
      "url": "https://80.lv/articles/complete-3d-hair-grooming-simulation-add-on-for-blender/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender布料模拟跳舞骷髅",
      "sum": "展示Blender中带真实布料模拟的跳舞骷髅。",
      "ta": "布料模拟案例，速览制作手法即可。",
      "src": "80 Level · 11-03",
      "url": "https://80.lv/articles/dancing-skeleton-with-realistic-fabric-simulation-in-blender/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "如龙创作者工作室解散",
      "sum": "Nagoshi Studio于10月31日经股东决议解散。",
      "ta": "行业人事变动，速览。",
      "src": "80 Level · 11-03",
      "url": "https://80.lv/articles/yakuza-creator-s-studio-has-been-dissolved/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "塞尔达制作人谈时之笛重制",
      "sum": "青沼英二称Switch 2版时之笛重制与系列40周年相关。",
      "ta": "行业动态，速览。",
      "src": "80 Level · 11-03",
      "url": "https://80.lv/articles/zelda-producer-explains-what-led-to-ocarina-of-time-switch-2-remake/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前Xbox COO回应离职说法",
      "sum": "前Xbox COO Helen Chiang否认外界对其离职原因的多种说法。",
      "ta": "商业八卦，速览。",
      "src": "Game Developer · 11-03",
      "url": "https://www.gamedeveloper.com/business/former-xbox-coo-helen-chiang-takes-umbrage-with-the-characterizations-of-her-departure"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rami Ismail谈回归开发",
      "sum": "独立开发者Rami Ismail时隔六年重返游戏开发并分享心得。",
      "ta": "行业经验分享，速览。",
      "src": "Game Developer · 11-03",
      "url": "https://www.gamedeveloper.com/design/what-rami-ismail-learned-with-his-return-to-game-development"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "South of Midnight总监谈Xbox",
      "sum": "该作前总监称若由他决定不会资助自己执导的这款游戏。",
      "ta": "行业观点，速览。",
      "src": "Game Developer · 11-03",
      "url": "https://www.gamedeveloper.com/business/south-of-midnight-director-was-always-worried-about-rome-burning-at-xbox"
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
