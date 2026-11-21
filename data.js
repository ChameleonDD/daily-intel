// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月21日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE6弃用蓝图改Verse</em> / <em>GTA6创史上最大首发</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "hi",
      "rank": 1,
      "title": "UE6弃用蓝图改Verse",
      "sum": "Epic确认UE6项目不含蓝图与Actor框架，玩法改用Verse与Scene Graph构建。",
      "ta": "直接影响所有UE工具链与蓝图资产迁移策略，需尽早评估Verse与Scene Graph对植被/程序化工具的重写成本。",
      "src": "Unreal Engine · 11-20",
      "url": "https://www.unrealengine.com/news/an-update-on-blueprints-and-the-path-to-ue6"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 2,
      "title": "GTA6创史上最大首发",
      "sum": "GTA6首日零售额超37.9亿美元，发售前已售出3250万份。",
      "ta": "行业量级标杆事件，可作3A项目预算与渲染/资产规模预期的参照。",
      "src": "Game Developer · 11-20",
      "url": "https://www.gamedeveloper.com/business/grand-theft-auto-vi-is-officially-the-biggest-video-game-launch-ever"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "原生体素域扩散Transformer",
      "sum": "Direct3D-V3提出在原生体素域运行的免潜空间扩散Transformer。",
      "ta": "体素域直接生成对程序化3D资产与体积内容有潜在参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.26511"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "流式世界模型验证转精炼",
      "sum": "SpecWM把验证环节转为精炼，用于流式世界模型生成。",
      "ta": "流式世界模型思路可关注其对实时生成与仿真场景的潜在影响。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.26211"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散Transformer后训练即激活引导",
      "sum": "论文指出扩散Transformer的RL后训练本质是激活引导。",
      "ta": "理解生成模型微调机制，对AI资产生成管线调优有间接参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.26627"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "程序化视频在线错误检测",
      "sum": "面向指令条件程序化视频的在线错误检测方法。",
      "ta": "程序化流程的错误检测思路可类比到程序化生成工具的自检。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.25567"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频扩散复用学潜在动作",
      "sum": "复用视频扩散Transformer做自监督潜在动作学习。",
      "ta": "潜在动作表征对动画/动作生成方向有潜在借鉴意义。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.26617"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "音频驱动流式虚拟形象",
      "sum": "AURA提出音频驱动的流式虚拟形象生成方案。",
      "ta": "实时虚拟形象方向，可关注其对角色表现管线的潜在影响。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.26540"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5加勒比城市环境材质流程",
      "sum": "分享UE5中加勒比风格街景的材质制作与细节工作流。",
      "ta": "可参考其丰富材质的分层与细节处理手法，用于场景材质搭建。",
      "src": "80 Level · 11-20",
      "url": "https://80.lv/articles/building-detailed-caribbean-inspired-city-environment-in-unreal-engine-5/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "育碧裁员166人",
      "sum": "育碧在《刺客信条：影》相关工作室裁员166人。",
      "ta": "行业收缩信号，速览即可。",
      "src": "80 Level · 11-20",
      "url": "https://80.lv/articles/ubisoft-lays-off-166-employees-across-studios-behind-assassin-s-creed-shadows/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "GTA6开发者忧发售后裁员",
      "sum": "GTA6开发者担心游戏发售后可能面临裁员。",
      "ta": "行业就业环境速览。",
      "src": "80 Level · 11-20",
      "url": "https://80.lv/articles/gta-6-developers-are-worried-about-possible-layoffs-after-the-game-ships/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Build a Rocket Boy陷债务",
      "sum": "MindsEye开发商试图通过起诉差评摆脱8098万美元债务。",
      "ta": "行业八卦速览。",
      "src": "80 Level · 11-20",
      "url": "https://80.lv/articles/mindseye-developers-build-a-rocket-boy-are-trying-to-get-out-of-their-usd80-98-million-debt/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "GameStop批纯数字发行",
      "sum": "GameStop CEO称全数字发行损害消费者利益。",
      "ta": "发行渠道话题，速览即可。",
      "src": "80 Level · 11-20",
      "url": "https://80.lv/articles/gamestop-ceo-calls-out-digital-only-releases-amid-gta-6-hype/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rockstar解释GTA6删飞镖",
      "sum": "Rockstar称宁可不做也不做不够好的飞镖小游戏。",
      "ta": "设计取舍观点，速览即可。",
      "src": "80 Level · 11-20",
      "url": "https://80.lv/articles/rockstar-explained-why-they-didn-t-add-the-darts-mini-game-in-gta-6/"
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
