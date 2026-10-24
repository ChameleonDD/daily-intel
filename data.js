// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月24日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>Bluey 2D 风格靠自定义 Shader</em> / <em>Tripo P2.0 打通 Blender 与 Unity</em> / <em>Houdini 水体特效转 Solaris 复活</em>。其余按重要性自动排序，红色优先。",
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
      "title": "Bluey 2D 风格靠自定义 Shader",
      "sum": "Gameloft 用 SDF 贴图、2D 平面、自定义 Shader 与 UE Control Rig 复刻手绘风。",
      "ta": "看 SDF 贴图与自定义 Shader 如何在 UE 里稳定还原 2D 手绘轮廓，Control Rig 部分可参考绑定流程。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/bluey-s-simple-2d-look-required-gameloft-s-most-technically-challenging-art-pipeline/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Tripo P2.0 打通 Blender 与 Unity",
      "sum": "Tripo 介绍 P2.0 与 Astra 在 Blender、Unity 中完成生成、绑定到动画的流程。",
      "ta": "关注 3D 原生基础模型输出资产进引擎后的质量控制与人工美术指导环节。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/how-tripo-p2-0-astra-work-together-in-blender-and-unity/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Houdini 水体特效转 Solaris 复活",
      "sum": "Mario Sánchez Aguado 分享由 Maya 项目转为 Houdini 水模拟、经 Solaris 完成的作品。",
      "ta": "可看 Solaris 流程下发光水体 FX 的搭建思路，对流体特效与灯光合成衔接有参考。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/this-dreamy-wooden-cabin-scene-with-glowing-water-fx-was-made-with-houdini/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "GameMaker 新运行时将免费商用",
      "sum": "GMRT 运行时自 2027 年起对所有开发者免费商用，各档位均开放源码。",
      "ta": "2D 引擎运行时开源免费，对轻量工具链选型有影响，与 UE 主线工作关联有限。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/gamemaker-s-new-runtime-will-become-free-for-commercial-use/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "GMRT 运行时 2027 全面免费",
      "sum": "GameMaker 的 GMRT 运行时将从 2027 年起对所有开发者免费使用。",
      "ta": "同一事件另一来源，仅作速览，无需重复精读。",
      "src": "Game Developer · 10-23",
      "url": "https://www.gamedeveloper.com/programming/gamemaker-s-gmrt-runtime-will-soon-be-free-for-all-commercial-devs"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "3ds Max/Maya 肌肉模拟插件测试",
      "sum": "Shirzad Bahrami 展示受 Ziva VFX 启发的肌肉模拟插件，正式发布前开放测试。",
      "ta": "角色肌肉解算工具，偏离线建模流程，与实时管线关联较弱。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/artist-shows-ziva-vfx-inspired-muscle-simulation-plug-in-for-3ds-max-maya/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RLSplat 给 3DGS 加预算控制",
      "sum": "RLSplat 为前馈 3D Gaussian Splatting 提供资源线性预算控制。",
      "ta": "关注 3DGS 在固定显存/算力预算下的可控性，对程序化场景与实时渲染有潜在价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.27712"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "HyperDrone 实现百万帧仿真迁移",
      "sum": "HyperDrone 以每秒百万帧级仿真实现从仿真到现实的迁移。",
      "ta": "大规模仿真吞吐思路可借鉴，但与游戏实时渲染管线距离较远。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.28950"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Raw Fury CEO 谈独立游戏发行",
      "sum": "Pim Holfve 谈发行变迁、独立发行现状及选品标准。",
      "ta": "纯行业访谈，与 TA 技术工作无关，速览即可。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/on-the-lookout-for-games-that-make-you-feel-something-raw-fury-ceo-on-game-publishing/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "半条命 3 代号 HLX 再被提及",
      "sum": "Valve 员工在 GameSoundCon 上提到粉丝讨论两年的代号 HLX。",
      "ta": "传闻性质，无技术信息，速览即可。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/rumored-half-life-3-title-hlx-gets-mentioned-by-valve-employee/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "赛博朋克 2 任务团队半数出身 Mod",
      "sum": "CDPR 副总监称续作任务团队约一半成员曾是 Mod 作者。",
      "ta": "人才来源话题，与渲染/工具技术无关。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/half-of-cyberpunk-2-s-quest-team-are-former-modders-says-associate-game-director/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Saros 打造 Carcosa 首领战",
      "sum": "Housemarque 与 Nixxes 合作完成 Saros 的 Boss 遭遇设计与动画。",
      "ta": "偏关卡与动画协作流程，技术细节有限。",
      "src": "PlayStation Blog · 10-23",
      "url": "https://blog.playstation.com/2026/10/23/saros-creating-the-epic-overlords-of-carcosa/"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "Unreal Engine",
      "NVIDIA",
      "Blender 开发博客",
      "PlayStation Blog",
      "arXiv · cs.GR",
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：AMD GPUOpen。"
  },
  "xStale": false
};
