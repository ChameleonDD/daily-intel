// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月9日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>黑旗重制版无缝世界技术</em>。其余按重要性自动排序，红色优先。",
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
      "title": "SPEAR 仿真器发布",
      "sum": "SPEAR 是用于具身 AI 研究的光真实感交互仿真器。",
      "ta": "关注其渲染管线与实时性能，可能影响虚拟数据生成工作流。",
      "src": "arXiv · cs.GR · 07-07",
      "url": "https://arxiv.org/abs/2607.06701v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "WildCity 城市级测试床",
      "sum": "WildCity 是真实城市规模的渲染、仿真与空间智能测试平台。",
      "ta": "可作为程序化城市生成与实时渲染的参考基准。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.06838"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "黑旗重制版无缝世界技术",
      "sum": "育碧谈黑旗重制版：Anvil 引擎升级，移除加载屏，现代化航海。",
      "ta": "直接相关：Anvil 引擎开放世界流式加载与性能优化细节。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/interview-the-tech-behind-assassin-s-creed-black-flag-resynced-s-seamless-open-world/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "黑曜石将开发新辐射",
      "sum": "微软取消 Avowed 续作，黑曜石转向新辐射项目。",
      "ta": "行业动向，可能影响后续引擎/工具需求。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/fallout-new-vegas-studio-obsidian-is-reportedly-making-a-new-fallout-game/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "卡通电吉他 Blender 流程",
      "sum": "分享 Blender 卡通电吉他建模、纹理、描边与液体材质。",
      "ta": "可参考其 stylized 资产制作管线。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/breakdown-creating-cartoon-style-3d-electric-guitar-in-blender/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "法环短剑资产制作解析",
      "sum": "Maya 粗模、ZBrush 高模、Substance Painter 纹理与晶体材质。",
      "ta": "关注晶体材质挑战与 PBR 纹理流程。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/elden-ring-glintstone-kris-shortsword-made-in-maya-zbrush-substance-3d-painter/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "Godot 虫洞 Shader 关卡过渡",
      "sum": "Godot 飞行游戏用虫洞 Shader 实现无缝关卡切换，纯 GDScript。",
      "ta": "可借鉴其 Shader 实现无缝过渡的思路。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/wormhole-shader-for-seamless-level-transitions-in-godot-powered-arcade-flying-game/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 几何节点打字机",
      "sum": "Blender 几何节点程序化打字机，作者计划免费发布。",
      "ta": "程序化资产生成案例，可学习几何节点工作流。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/procedural-typewriter-in-blender-s-geometry-nodes/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "Unity 格斯特纳波海洋 Shader",
      "sum": "Unity 中实现带格斯特纳波的海洋 Shader。",
      "ta": "经典海洋渲染技术，适合实时水面效果参考。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/ocean-shader-with-gerstner-waves-in-unity/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "马里奥赛车手游停运",
      "sum": "任天堂宣布《马里奥赛车巡回赛》手游将停运，无离线版。",
      "ta": "行业新闻，无直接技术关联。",
      "src": "Game Developer · 07-08",
      "url": "https://www.gamedeveloper.com/business/mobile-game-mario-kart-tour-is-winding-down"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "B 社蒙特利尔裁员",
      "sum": "CWA 加拿大批评微软在 B 社蒙特利尔裁员约 12 人。",
      "ta": "行业新闻，无直接技术关联。",
      "src": "Game Developer · 07-08",
      "url": "https://www.gamedeveloper.com/business/-employers-are-ruthless-cwa-canada-slams-microsoft-over-handling-of-bethesda-layoffs"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "id Software 裁员 136 人",
      "sum": "id Software 裁员 136 人，Xbox 游戏部门计划裁 3200 人。",
      "ta": "行业新闻，无直接技术关联。",
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
      "arXiv · cs.GR",
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Blender 开发博客、AMD GPUOpen。"
  },
  "xStale": false
};
