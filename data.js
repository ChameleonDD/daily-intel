// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月10日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>黑曜石工作室裁员52+人</em> / <em>Xbox裁减379名Zenimax员工</em>。其余按重要性自动排序，红色优先。",
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
      "title": "交互式人体动作生成",
      "sum": "ARDY用自回归扩散+混合表示实现实时3D人体动作生成。",
      "ta": "实时动作生成可加速角色动画原型，但需验证UE5管线集成度。",
      "src": "arXiv · cs.GR · 07-09",
      "url": "https://arxiv.org/abs/2607.08741v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "物理仿真统一网格重建",
      "sum": "HoloTetSphere直接优化体积基元，绕过表面提取+四面体化两步流程。",
      "ta": "直接输出物理就绪网格，可简化程序化资产到仿真管线的转换。",
      "src": "arXiv · cs.GR · 07-09",
      "url": "https://arxiv.org/abs/2607.08398v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "PBR条件视频重光照",
      "sum": "LightCrafter用PBR条件扩散模型实现可控且时序一致的重光照。",
      "ta": "PBR条件控制可提升视频重光照的物理准确性，对过场动画有用。",
      "src": "arXiv · cs.GR · 07-09",
      "url": "https://arxiv.org/abs/2607.08016v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时交互视频生成模型",
      "sum": "Vidu S1发布实时交互式视频生成模型。",
      "ta": "实时视频生成可能用于游戏内动态过场，但当前质量未知。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.03118"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型推理加速草稿",
      "sum": "Flash-BoN为扩散模型提供即时草稿以加速推理。",
      "ta": "推理加速技术可降低生成式工具在游戏工作流中的延迟。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.04461"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "端侧图像转视频相机运动",
      "sum": "CineMobile在设备上实现图像到视频的扩散，生成电影级相机运动。",
      "ta": "端侧生成相机运动可用于快速预览，但实时性存疑。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.03803"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender几何节点恶搞",
      "sum": "一篇关于Blender几何节点奇怪用法的恶搞帖子。",
      "ta": "纯娱乐，无技术价值，但可了解社区创意。",
      "src": "80 Level · 07-09",
      "url": "https://80.lv/articles/something-is-really-wrong-with-this-blender-artist-s-geometry-nodes/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "行星飞船动画概念",
      "sum": "用整个行星构建巨型飞船的史诗动画概念。",
      "ta": "视觉灵感参考，无直接技术细节。",
      "src": "80 Level · 07-09",
      "url": "https://80.lv/articles/epic-animation-of-giant-spaceship-built-from-entire-planets/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "免费Maya面部绑定变形器",
      "sum": "Zhenggang Deng发布免费自定义Maya变形器，用于高端面部绑定。",
      "ta": "免费面部绑定工具可提升角色管线效率，需测试兼容性。",
      "src": "80 Level · 07-09",
      "url": "https://80.lv/articles/free-custom-maya-deformer-for-high-end-facial-rigging/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender实时纹理绘制工具",
      "sum": "TXTRCast工具允许在Blender中实时纹理绘制，支持任何软件。",
      "ta": "实时纹理绘制可加速贴图迭代，对材质工作流有潜在价值。",
      "src": "80 Level · 07-09",
      "url": "https://80.lv/articles/free-blender-tool-for-real-time-texture-painting-with-any-software/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "玩具手柄改Mario Kart",
      "sum": "开发者将Fisher-Price玩具手柄改造成Mario Kart陀螺仪游戏手柄。",
      "ta": "硬件改造趣味项目，与TA工作流无关。",
      "src": "80 Level · 07-09",
      "url": "https://80.lv/articles/developer-turns-fisher-price-toy-controller-into-a-mario-kart-gyro-gamepad/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "风格化角色面部绑定测试",
      "sum": "3D短片《Noah and Jade》的风格化角色面部绑定测试。",
      "ta": "风格化绑定案例参考，无新技术细节。",
      "src": "80 Level · 07-09",
      "url": "https://80.lv/articles/facial-rig-tests-for-stylized-characters-in-3d-short-film/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "游戏媒体新站Respec上线",
      "sum": "Eurogamer和VG247老将推出独立游戏媒体Respec。",
      "ta": "行业动态，可能影响游戏资讯获取渠道。",
      "src": "Game Developer · 07-09",
      "url": "https://www.gamedeveloper.com/business/eurogamer-and-vg247-veterans-launch-new-independent-site"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "风险规避游戏行业边缘化开发者",
      "sum": "Nazih Fares的卡牌游戏因行业风险规避难获融资。",
      "ta": "反映行业融资困境，与TA工作无直接关联。",
      "src": "Game Developer · 07-09",
      "url": "https://www.gamedeveloper.com/production/the-game-industry-is-failing-marginalized-developers"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "title": "黑曜石工作室裁员52+人",
      "sum": "WARN通知确认黑曜石至少52名员工被裁，涉及Pentiment和天外世界团队。",
      "ta": "3A工作室裁员影响行业信心，可能波及项目外包需求。",
      "src": "Game Developer · 07-09",
      "url": "https://www.gamedeveloper.com/business/report-obsidian-losing-around-one-quarter-of-its-staff-to-xbox-reset-"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "title": "Xbox裁减379名Zenimax员工",
      "sum": "Xbox在马里兰州裁减379名Zenimax员工，含213名ESO开发者。",
      "ta": "大规模裁员影响游戏行业生态，可能影响UE5项目资源。",
      "src": "Game Developer · 07-09",
      "url": "https://www.gamedeveloper.com/business/xbox-had-laid-off-379-zenimax-workers-in-maryland"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Maya动画层节点自连接Bug",
      "sum": "Maya 2024.2中引用绑定的动画层节点保存重开后自连接循环。",
      "ta": "直接影响绑定和动画管线，需关注修复或规避。",
      "src": "Tech-Artists · 07-09",
      "url": "https://www.tech-artists.org/t/bug-animation-layer-nodes-self-connect-cycle-after-save-reopen-on-referenced-rigs-maya-2024-2/18445"
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
