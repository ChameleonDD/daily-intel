// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月12日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>Cycles 实现真光子焦散</em> / <em>Godot 复刻 PS1 渲染</em> / <em>Blender 布料抖动插件</em>。其余按重要性自动排序，红色优先。",
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
      "title": "Cycles 实现真光子焦散",
      "sum": "Blender Cycles 新增真光子追踪焦散，渲染设置勾选即可，兼容现有场景。",
      "ta": "焦散长期是离线渲染痛点，若实现足够稳健，可参考其光子映射思路反哺实时近似方案。",
      "src": "80 Level · 09-11",
      "url": "https://80.lv/articles/true-photon-traced-caustics-for-blender-s-cycles/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "Godot 复刻 PS1 渲染",
      "sum": "开发者基于硬件原理拆解 PS1 图形管线，做成 Godot 复古渲染插件。",
      "ta": "顶点抖动、仿射贴图、低精度深度等 PS1 特性拆解，对理解固定管线与风格化渲染有参考价值。",
      "src": "80 Level · 09-11",
      "url": "https://80.lv/articles/try-this-authentic-ps1-style-rendering-add-on-for-godot/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 布料抖动插件",
      "sum": "新 Blender 插件可为身体、衣物和头发添加抖动物理，支持任意数量衣物。",
      "ta": "轻量级次级动力学方案，可对比 UE 骨骼链/Chaos Cloth 的抖动实现成本。",
      "src": "80 Level · 09-11",
      "url": "https://80.lv/articles/this-blender-add-on-lets-you-add-jiggle-physics-to-bodies-clothes-and-hair/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE+ZBrush 复刻毁灭博士",
      "sum": "作者用 MetaHuman 建模面部、ZBrush 与 Marvelous Designer 制作服装，并做披风磨损。",
      "ta": "MetaHuman 面部 + 传统服装建模的混合流程，磨损细节处理值得一看。",
      "src": "80 Level · 09-11",
      "url": "https://80.lv/articles/making-a-recreation-of-dr-doom-using-unreal-engine-and-zbrush/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "EchoForge 用声音建 3D 世界",
      "sum": "研究结合空间音频分析、场景图与程序化生成，把录音转成 Unity 可探索 3D 环境。",
      "ta": "音频驱动的程序化生成思路，对植被/场景工具的程序化管线设计有启发。",
      "src": "80 Level · 09-11",
      "url": "https://80.lv/articles/echoforge-uses-spatial-sound-to-build-3d-worlds-in-unity/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Steam 泄露未公布成就",
      "sum": "Exophase 发现 Steam 泄露了未发售与未公布游戏的成就信息。",
      "ta": "行业情报向，与 TA 工作无直接关联，速览即可。",
      "src": "80 Level · 09-11",
      "url": "https://80.lv/articles/steam-leak-reveals-achievements-for-unreleased-and-unannounced-games/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rockstar 工会案核心论点",
      "sum": "Rockstar 与被解雇 GTA 开发者双方在工会打压仲裁中提交法律文件陈述论点。",
      "ta": "劳动法务向行业新闻，与 TA 技术工作无关。",
      "src": "Game Developer · 09-11",
      "url": "https://www.gamedeveloper.com/production/rockstar-and-fired-gta-developers-outline-core-arguments-during-union-busting-tribunal"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rockstar 指控前员工诽谤",
      "sum": "律师解读 Rockstar 指控前员工在 Discord 诽谤一案中「诽谤」的法律界定。",
      "ta": "法务解读向，与 TA 无关。",
      "src": "Game Developer · 09-11",
      "url": "https://www.gamedeveloper.com/business/an-honest-opinion-or-defamation-a-solicitor-outlines-the-legal-nuance"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Steam 澳洲年龄验证",
      "sum": "多名用户称 Valve 对澳洲 Steam 用户启用信用卡年龄验证以访问 R18+ 游戏。",
      "ta": "平台合规新闻，与 TA 工作无直接关联。",
      "src": "Game Developer · 09-10",
      "url": "https://www.gamedeveloper.com/pc/report-steam-now-requires-australian-users-to-verify-their-age-with-credit-cards"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "Unreal Engine",
      "NVIDIA",
      "PlayStation Blog",
      "AMD GPUOpen",
      "arXiv · cs.GR",
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Blender 开发博客。"
  },
  "xStale": false
};
