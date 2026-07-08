// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月8日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>id Software半数裁员</em>。其余按重要性自动排序，红色优先。",
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
      "title": "单图生成完整3D几何",
      "sum": "World Tracing：输入一张图，物体/场景/动态世界以完整几何浮现，每点追溯回像素。",
      "ta": "原文是单图到完整3D几何的生成，若稳定，对快速搭场景白模和资产原型有直接价值。",
      "handle": "@BenMildenhall",
      "who": "Ben Mildenhall · 06-12",
      "url": "https://x.com/HaoZhang623/status/2065455226791002472"
    },
    {
      "cat": "x",
      "imp": "hi",
      "title": "World Labs连发3篇3D论文",
      "sum": "NeRF 一作放出三篇用大规模生成模型加 2D 先验生成 3D 内容的研究。",
      "ta": "原文是文生3D/重建的最新一手研究，直接对应你关注的资产生成方向，值得追原项目页。",
      "handle": "@BenMildenhall",
      "who": "Ben Mildenhall · 06-12",
      "url": "https://x.com/theworldlabs/status/2065466830052098058"
    },
    {
      "cat": "x",
      "imp": "hi",
      "title": "全AI生成可玩游戏",
      "sum": "Aaltonen 转发：100% AI 生成资产与玩法代码，一名无编程经验设计师约一周做成。",
      "ta": "原文讲的是单人用 AI 生成全套游戏资产+代码的实例，是生成式 AI 进生产管线的极端实证，值得看其边界。",
      "handle": "@SebAaltonen",
      "who": "Sebastian Aaltonen · 06-17",
      "url": "https://x.com/SebAaltonen/status/2067202311168954689"
    },
    {
      "cat": "x",
      "imp": "mid",
      "title": "Codex群驱动机器人研究",
      "sum": "Jim Fan 发布 ENPIRE：给 8 个 Codex agent 一队机器人加 GPU 和 token 预算自主解任务。",
      "ta": "原文是 AI agent 集群自主驱动真实机器人的实验，关注“AI 进开发/生产管线”的可看其调度思路。",
      "handle": "@DrJimFan",
      "who": "Jim Fan · 06-16",
      "url": "https://x.com/DrJimFan/status/2066921736369766762"
    },
    {
      "cat": "x",
      "imp": "mid",
      "title": "UE5 State Trees敌人生成",
      "sum": "Tom Looman 给开源项目 Orion 加了 C++ 加蓝图混合做的 State Trees 敌人生成总管。",
      "ta": "原文是 UE5 State Trees 的实操案例，做敌人波次/生成调度可直接对照他的开源实现。",
      "handle": "@t_looman",
      "who": "Tom Looman · 06-08",
      "url": "https://x.com/t_looman/status/2063965540297605174"
    },
    {
      "cat": "x",
      "imp": "lo",
      "title": "UE5两款AO插件上Fab",
      "sum": "Aaltonen 转发：HBAO+ 与 GT-VBAO 两款 UE5 环境光遮蔽插件上架 Fab，HBAO+ 个人免费。",
      "ta": "原文是两款 UE5 AO 插件发布消息，做场景近景细节/接触阴影时可收一条试用。",
      "handle": "@SebAaltonen",
      "who": "转发 · 06-17",
      "url": "https://x.com/ymt3d/status/2067067075584229831"
    },
    {
      "cat": "x",
      "imp": "lo",
      "title": "Gemini视频模型登顶Arena",
      "sum": "转发：Gemini Omni Flash 在 Video Arena 文生/图生视频双榜登顶，大幅领先 Veo。",
      "ta": "原文是转发的榜单信息，视频生成模型迭代速度可作为“AI 生成素材”能力上限的参照。",
      "handle": "@poolio",
      "who": "转发 · 06-11",
      "url": "https://x.com/arena/status/2065112147093545333"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3DGS屏幕伪影去除",
      "sum": "SSA-3DGS无监督去除3DGS中的屏幕空间伪影。",
      "ta": "对3DGS管线中的伪影问题有直接参考价值，可提升重建质量。",
      "src": "arXiv · cs.GR · 07-06",
      "url": "https://arxiv.org/abs/2607.05598v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "手绘晶体剑制作",
      "sum": "Swayam Sontakke详解晶体剑建模、UV及光照技巧。",
      "ta": "手绘风格资产制作流程参考，适合风格化项目。",
      "src": "80 Level · 07-07",
      "url": "https://80.lv/articles/how-to-make-magical-hand-painted-crystal-sword-in-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender几何节点入门",
      "sum": "Ryan King Art教程教你创建三个实用几何节点设置。",
      "ta": "几何节点基础教程，适合新手快速上手程序化建模。",
      "src": "80 Level · 07-07",
      "url": "https://80.lv/articles/tutorial-blender-s-geometry-nodes-for-beginners/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "手绘精灵角色全流程",
      "sum": "Arturo Galván Soler分享Blender和Substance 3D Painter制作精灵角色。",
      "ta": "手绘风格角色管线参考，涵盖雕刻、纹理和动画。",
      "src": "80 Level · 07-07",
      "url": "https://80.lv/articles/creating-hand-painted-elf-character-in-3d-from-scratch-using-blender-substance-3d-painter/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "UE实时水体模拟工具",
      "sum": "EasyFog Creator发布EasyWaterscape实时水体模拟工具。",
      "ta": "UE水体模拟新工具，可快速提升场景水体效果。",
      "src": "80 Level · 07-07",
      "url": "https://80.lv/articles/easyfog-creator-presents-real-time-water-simulation-tool-for-unreal-engine/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender物理动画教程",
      "sum": "Ian Hubert展示如何在Blender中利用物理进行动画。",
      "ta": "物理模拟动画技巧，适合快速生成动态效果。",
      "src": "80 Level · 07-07",
      "url": "https://80.lv/articles/ian-hubert-shows-how-to-animate-with-physics-in-blender/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Meccha Chameleon销量破1500万",
      "sum": "绘画捉迷藏游戏Meccha Chameleon 26天销量达1500万。",
      "ta": "独立游戏市场表现案例，了解玩家偏好。",
      "src": "80 Level · 07-07",
      "url": "https://80.lv/articles/painting-hide-and-seek-game-meccha-chameleon-hits-15-million-sales-in-26-days/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Compulsion Games独立后保留IP",
      "sum": "Compulsion Games独立后保留IP，类似Double Fine安排。",
      "ta": "行业动态，了解工作室独立与IP归属趋势。",
      "src": "80 Level · 07-07",
      "url": "https://80.lv/articles/compulsion-games-to-retain-ip-rights-after-going-independent/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Supercell非洲开发者资助",
      "sum": "Supercell启动非洲工作室资助计划，金额2万至20万美元。",
      "ta": "行业资助动态，关注新兴市场开发者生态。",
      "src": "Game Developer · 07-07",
      "url": "https://www.gamedeveloper.com/business/supercell-starts-developer-grants-program-for-studios-across-africa"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "IO Interactive关闭伊斯坦布尔工作室",
      "sum": "IO Interactive因Xbox撤资关闭伊斯坦布尔工作室，重组项目。",
      "ta": "行业重组案例，关注大厂投资变动影响。",
      "src": "Game Developer · 07-07",
      "url": "https://www.gamedeveloper.com/business/io-interactive-closing-istanbul-studio-after-regaining-control-of-project-fantasy"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 1,
      "title": "id Software半数裁员",
      "sum": "报告称id Software约半数员工被裁，Xbox计划削减3200岗位。",
      "ta": "行业地震级事件，影响3A工作室人才流动和项目稳定性。",
      "src": "Game Developer · 07-07",
      "url": "https://www.gamedeveloper.com/business/report-around-half-of-the-id-software-team-have-been-laid-off"
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
