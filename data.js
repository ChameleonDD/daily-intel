// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月5日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>权游RTS的UE5美术管线</em> / <em>地铁2039主机光追4K60</em> / <em>Blender开放OVERGROWN幕后档案</em>。其余按重要性自动排序，红色优先。",
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
      "title": "权游RTS的UE5美术管线",
      "sum": "PlaySide总监谈《权游：维斯特洛之战》非对称阵营、沙盒战役及UE5美术流程。",
      "ta": "关注UE5大规模战斗与阵营差异化在美术资产与场景组织上的落地经验。",
      "src": "80 Level · 09-04",
      "url": "https://80.lv/articles/interview-how-war-for-westeros-turns-game-of-thrones-into-an-epic-rts/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "地铁2039主机光追4K60",
      "sum": "《地铁2039》2月发售，PS5/Xbox实现4K60帧与光线追踪。",
      "ta": "主机平台光追性能标杆，可参考其渲染优化策略与画质取舍。",
      "src": "80 Level · 09-04",
      "url": "https://80.lv/articles/metro-2039-runs-at-4k-with-60-fps-and-ray-tracing-even-on-ps5-and-xbox/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender开放OVERGROWN幕后档案",
      "sum": "Blender Studio限时免费开放动画、绑定、毛发、着色、水效等制作日志。",
      "ta": "毛发与水效等环节的完整生产记录，对植被与特效工作流有参考价值。",
      "src": "80 Level · 09-04",
      "url": "https://80.lv/articles/blender-studio-opens-overgrown-s-free-behind-the-scenes-archive/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ZBrush雕刻人树角色",
      "sum": "Andrea Buitrago分享将人树角色Uri雕刻成大理石质感3D作品的流程。",
      "ta": "关注角色与植物形态融合的雕刻思路及材质质感表现手法。",
      "src": "80 Level · 09-04",
      "url": "https://80.lv/articles/book-character-to-a-3d-piece-sculpting-human-tree-character-in-zbrush-and-maya/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Deadlock风格蜡烛人动画",
      "sum": "Folio为pwnisher挑战赛创作蜡烛头角色Paraffin的动画作品。",
      "ta": "社区挑战赛作品，可快速浏览角色动画与风格化表现。",
      "src": "80 Level · 09-04",
      "url": "https://80.lv/articles/deadlock-inspired-candleman-animation-for-the-gauntlet-of-gods-challenge/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox云游戏月度时长限制",
      "sum": "Xbox对Game Pass云游戏订阅设置每月5至15小时的游玩上限。",
      "ta": "云游戏服务策略变化，可能影响远程测试与协作流程的可行性。",
      "src": "80 Level · 09-04",
      "url": "https://80.lv/articles/xbox-puts-monthly-limits-on-cloud-gaming-for-game-pass-subscribers/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "VeriPhy世界模型物理推理",
      "sum": "论文提出VeriPhy，用于世界模型评估与改进的智能体物理推理框架。",
      "ta": "世界模型与物理推理结合，或为程序化生成与场景仿真提供新思路。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.03153"
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
