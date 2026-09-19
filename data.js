// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月19日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>赛博朋克夜之城几乎全手工搭建</em> / <em>Blender 5.3 原生支持 3D 高斯泼溅</em> / <em>安卡拉街景写实3D环境拆解</em>。其余按重要性自动排序，红色优先。",
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
      "title": "赛博朋克夜之城几乎全手工搭建",
      "sum": "CDPR美术总监讲述夜之城手工制作流程，第一人称视角如何影响尺度与细节，路径追踪为何契合其光照管线。",
      "ta": "值得看路径追踪与手工场景搭建的配合逻辑，对植被/环境美术的管线设计有参考价值。",
      "src": "80 Level · 09-18",
      "url": "https://80.lv/articles/interview-how-cyberpunk-2077-s-night-city-was-built-almost-entirely-by-hand/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 5.3 原生支持 3D 高斯泼溅",
      "sum": "Blender 5.3 将获得原生 3D Gaussian Splatting 支持。",
      "ta": "高斯泼溅进主流DCC，未来植被/环境扫描资产的导入与实时预览流程可能被改写。",
      "src": "80 Level · 09-18",
      "url": "https://80.lv/articles/blender-5-3-is-getting-native-3d-gaussian-splat-support/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "安卡拉街景写实3D环境拆解",
      "sum": "作者分享安卡拉小巷项目，用Substance 3D Designer制作平铺墙面与路面材质，并营造温馨氛围。",
      "ta": "平铺材质与氛围营造的具体做法，对程序化材质与场景美术有直接借鉴意义。",
      "src": "80 Level · 09-18",
      "url": "https://80.lv/articles/breakdown-creating-a-realistic-3d-environment-of-an-ankara-street/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Pass式工作流搭建中东庭院",
      "sum": "作者讲述用pass-based流程加速制作废弃中东庭院，并搭建高效易用的材质系统。",
      "ta": "pass-based流程与快速材质系统的思路，对TA优化美术迭代效率有参考。",
      "src": "80 Level · 09-18",
      "url": "https://80.lv/articles/assembling-abandoned-middle-eastern-courtyard-in-3d-using-pass-based-workflow/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "85%日本开发者已用生成式AI",
      "sum": "CESA报告称超85%日本游戏开发者至少偶尔使用生成式AI，工作室强调人工审核与限制工具。",
      "ta": "了解行业AI采用现状与审核策略，对TA评估AI工具在管线中的落地边界有帮助。",
      "src": "80 Level · 09-18",
      "url": "https://80.lv/articles/over-85-of-japanese-game-developers-now-use-generative-ai-according-to-tgs-report/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "米哈游AI配音侵权获赔11.2万",
      "sum": "上海法院判决AI语音服务模仿原神角色，米哈游获赔11.2万美元，或成中国法院对生成式AI的判例信号。",
      "ta": "AI生成内容版权边界收紧，TA在引入AI资产/语音工具时需关注合规风险。",
      "src": "Game Developer · 09-18",
      "url": "https://www.gamedeveloper.com/business/mihoyo-awarded-112-000-by-chinese-court-after-ai-voice-service-dupes-genshin-impact-characters"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ARM谈如何与开发者协作做工具",
      "sum": "ARM的Peter Hodges讨论游戏开发工具及1969年短片Lemon。",
      "ta": "速览即可，工具厂商与开发者协作方式或对跨团队工具设计有零星启发。",
      "src": "Game Developer · 09-18",
      "url": "https://www.gamedeveloper.com/art/how-toolmakers-like-arm-work-with-devs-ft-peter-hodges"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "King员工谈判破裂宣布罢工",
      "sum": "Candy Crush工作室工会员工因集体协议谈判停滞，将于9月25日罢工。",
      "ta": "行业劳资动态，与TA日常工作无直接关联，速览即可。",
      "src": "Game Developer · 09-18",
      "url": "https://www.gamedeveloper.com/production/king-workers-call-strike-after-collective-agreement-negotiations-stall"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Control Resonant延续Remedy风格",
      "sum": "评测称Control Resonant融合激进近战、开放探索与超现实世界观，是Remedy公式的进化。",
      "ta": "游戏设计向评测，与TA技术工作无直接关联，速览即可。",
      "src": "80 Level · 09-18",
      "url": "https://80.lv/articles/control-resonant-is-a-fantastic-evolution-of-remedy-s-formula/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Blood of Dawnwalker时间机制或不再回归",
      "sum": "Blood of Dawnwalker的时间机制在续作中可能不会保留。",
      "ta": "纯游戏设计动态，与TA工作无关，速览即可。",
      "src": "80 Level · 09-18",
      "url": "https://80.lv/articles/blood-of-dawnwalker-s-time-mechanic-might-not-return-in-the-sequel/"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
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
    "missed": "未覆盖：Unreal Engine。"
  },
  "xStale": false
};
