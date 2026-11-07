// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月7日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>Quixel Megascans 全库永久免费</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "ai",
      "imp": "mid",
      "title": "Blackwell 加速 FLUX 图像生成",
      "sum": "NVIDIA 介绍在 Blackwell GPU 上部署 FLUX 3 Image Klein 的推理延迟优化。",
      "ta": "关注扩散模型推理优化思路，可迁移到材质贴图/概念图批量生成的工具链。",
      "src": "NVIDIA · 11-06",
      "url": "https://developer.nvidia.com/blog/speed-up-image-generation-with-flux-3-image-klein-on-nvidia-blackwell-gpus/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "RL 权重重载加速新集合通信",
      "sum": "NVIDIA 提出 Reshard Collective 加速强化学习后训练的权重重载。",
      "ta": "纯训练侧优化，与实时渲染无直接关系，速览即可。",
      "src": "NVIDIA · 11-06",
      "url": "https://developer.nvidia.com/blog/accelerating-reinforcement-learning-weight-refit-with-the-reshard-collective/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型多教师蒸馏再思考",
      "sum": "论文重新审视扩散模型中的多教师 on-policy 蒸馏方法。",
      "ta": "生成模型训练侧研究，暂不涉及引擎或实时管线。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.04386"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时全波形 LiDAR Transformer",
      "sum": "论文用强度引导 token 削减与物理感知增强实现实时全波形 LiDAR Transformer。",
      "ta": "实时点云感知加速思路，对扫描资产处理与程序化植被点云有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.07613"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "手游渠道壁垒正在松动",
      "sum": "80 Level 分析长期把守手游分发的两大平台格局开始变化。",
      "ta": "发行侧信息，与 TA 日常无直接关联，速览。",
      "src": "80 Level · 11-07",
      "url": "https://80.lv/articles/mobile-game-gatekeepers-are-opening-the-gates/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "无源码逆向复活经典 RPG",
      "sum": "SNEG 在无源码、无工具、无文档下逆向零售版重制 2001 年 D&D RPG。",
      "ta": "逆向重建资产与数据管线的案例，值得看其资源还原与工具重建思路。",
      "src": "80 Level · 11-06",
      "url": "https://80.lv/articles/this-forgotten-classic-d-d-rpg-was-revived-without-source-code-or-tools/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "GTA6 发售前放出 39 张截图",
      "sum": "Rockstar 在发售两周前公布 39 张 GTA6 新截图，展示罪恶都市与主角。",
      "ta": "可观察其植被密度、光照与材质表现，作为画面基准参考。",
      "src": "80 Level · 11-06",
      "url": "https://80.lv/articles/rockstar-shares-39-new-gta-6-screenshots-two-weeks-before-launch/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 1,
      "title": "Quixel Megascans 全库永久免费",
      "sum": "整个 Quixel Megascans 素材库现已免费开放，且为永久性。",
      "ta": "植被与地表扫描资产可直接进 UE 管线，大幅降低环境搭建的素材成本。",
      "src": "80 Level · 11-06",
      "url": "https://80.lv/articles/entire-quixel-megascans-library-now-available-for-free/"
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
