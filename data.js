// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月11日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>CUDA核融合优化内存</em> / <em>事件视频重建与插帧</em> / <em>实时交互多目标视频分割</em>。其余按重要性自动排序，红色优先。",
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
      "title": "CUDA核融合优化内存",
      "sum": "NVIDIA 博客介绍核融合技术改善 GPU 内存带宽与启动开销。",
      "ta": "核融合思路可借鉴到 UE Shader 合并与渲染 Pass 优化。",
      "src": "NVIDIA · 07-10",
      "url": "https://developer.nvidia.com/blog/kernel-fusion-in-nvidia-cuda-optimizing-memory-traffic-and-launch-overhead/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "事件视频重建与插帧",
      "sum": "LongE2V 用视频扩散模型实现长时域事件视频重建与插帧。",
      "ta": "视频插帧技术可应用于游戏过场或实时回放效果。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.08770"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时交互多目标视频分割",
      "sum": "SAM-MT 实现实时交互式多目标视频分割。",
      "ta": "实时分割可用于游戏内动态遮罩或后期特效。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.08688"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Godot道路生成器更新",
      "sum": "Godot 道路生成插件新增更好的程序化交叉口功能。",
      "ta": "程序化道路交叉口算法可参考用于 UE 工具链。",
      "src": "80 Level · 07-11",
      "url": "https://80.lv/articles/godot-road-generator-now-features-better-procedural-intersections/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "赛博朋克治愈系建造游戏",
      "sum": "一款允许玩家建造雨浸世界的赛博朋克治愈游戏。",
      "ta": "环境建造玩法展示程序化天气与场景交互潜力。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/this-cyberpunk-cozy-game-allows-you-to-build-your-own-rain-soaked-world/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Poppy Playtime恐怖IP解析",
      "sum": "总监谈武器化怀旧、心理恐怖与环境叙事设计哲学。",
      "ta": "环境叙事与关卡设计思路可启发场景氛围构建。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/how-poppy-playtime-became-one-of-gaming-s-biggest-horror-franchises/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender插件制作弹性方块动画",
      "sum": "使用 Blender 插件制作弹性动态方块动画。",
      "ta": "弹性动画技术可迁移至 Niagara 或材质模拟。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/this-elastic-and-dynamic-cube-animation-was-made-using-a-blender-add-on/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "独立工作室驾驶平台续作开发",
      "sum": "开发者谈 Stunt Paradise 2 关卡重设计及车辆行为软件。",
      "ta": "车辆物理与关卡设计经验可参考。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/how-an-indie-studio-created-a-sequel-of-a-driving-platformer-game/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Hunt: Showdown武器皮肤制作",
      "sum": "详解 Nitro Express 皮肤的金色细节与材质设置。",
      "ta": "高精度武器材质工作流，含金属细节与材质节点。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/behind-creation-of-nitro-express-checks-and-balances-skin-for-hunt-showdown-1896/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "独立游戏发行困境分析",
      "sum": "Skystone Games 谈 2026 年发行策略与 2.1 万款游戏问题。",
      "ta": "行业生态分析，对独立项目发行时机有参考。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/indie-game-publishing-the-21k-game-problem/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "浏览器内程序化藤蔓生成器",
      "sum": "基于 Three.js 的完全程序化常春藤与无花果树生成器。",
      "ta": "程序化植被生成算法可直接参考用于 UE 工具。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/this-fully-procedural-ivy-and-fig-tree-generator-runs-in-your-browser/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "NexusMods向UGC平台转型",
      "sum": "CEO 谈从文件托管向用户生成内容平台进化。",
      "ta": "Mod 生态变化影响游戏内容生产与工具需求。",
      "src": "Game Developer · 07-10",
      "url": "https://www.gamedeveloper.com/pc/nexusmods-ceo-digs-into-the-dynamics-of-video-game-modding-ft-victor-folmann"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox工会工人抗议集会",
      "sum": "B社工会成员组织7月15日“拯救我们的开发者”集会。",
      "ta": "行业劳资动态，可能影响项目开发节奏。",
      "src": "Game Developer · 07-10",
      "url": "https://www.gamedeveloper.com/business/-we-mean-business-xbox-union-workers-fighting-back-with-save-our-devs-rally-on-july-15"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "NVIDIA",
      "PlayStation Blog",
      "arXiv · cs.GR",
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Unreal Engine、Blender 开发博客、AMD GPUOpen。"
  },
  "xStale": false
};
