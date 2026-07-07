// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月7日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>Xbox裁员3200人</em>。其余按重要性自动排序，红色优先。",
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
      "title": "多视角长视频生成新方法",
      "sum": "MV-Forcing 通过4D时空自强制实现长序列多视角视频生成。",
      "ta": "对动态场景多视角一致性生成有参考价值，但离实时游戏管线尚远。",
      "src": "arXiv · cs.GR · 07-06",
      "url": "https://arxiv.org/abs/2607.05376v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "实时毛发渲染软件光栅化",
      "sum": "提出延迟软件光栅化管线，实现实时发丝渲染。",
      "ta": "直接相关：实时发丝渲染方案，可评估是否适合UE5角色管线。",
      "src": "arXiv · cs.GR · 07-05",
      "url": "https://arxiv.org/abs/2607.04230v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "物理模拟面部接触皱纹",
      "sum": "基于物理的皮肤接触皱纹模拟，考虑非线性分层材料。",
      "ta": "面部细节模拟技术，对数字人皮肤动态有参考。",
      "src": "arXiv · cs.GR · 07-06",
      "url": "https://arxiv.org/abs/2607.04768v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "几何约束室外3D场景生成",
      "sum": "SceneFrom3D 通过视图调度实现几何约束的室外场景生成。",
      "ta": "程序化场景生成方向，可关注其对象级控制方法。",
      "src": "arXiv · cs.GR · 07-05",
      "url": "https://arxiv.org/abs/2607.04540v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "数字人创建综述报告",
      "sum": "综述从先验学习到可动写实化身的3D数字人管线。",
      "ta": "数字人管线全景参考，适合了解当前技术栈。",
      "src": "arXiv · cs.GR · 07-05",
      "url": "https://arxiv.org/abs/2607.04341v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "自中心3D场景生成方法",
      "sum": "CGGS 用一致性增强高斯泼溅生成自中心3D场景。",
      "ta": "高斯泼溅在游戏场景生成中的应用探索。",
      "src": "arXiv · cs.GR · 07-04",
      "url": "https://arxiv.org/abs/2607.03819v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "可微眩光评估方法",
      "sum": "用可微光传输优化统一眩光评级，用于建筑/汽车设计。",
      "ta": "可微渲染在物理设计中的应用，与游戏渲染间接相关。",
      "src": "arXiv · cs.GR · 07-06",
      "url": "https://arxiv.org/abs/2607.04796v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "全动态Omnitree压缩",
      "sum": "用矩守恒各向异性小波压缩，改进八叉树和k-d树。",
      "ta": "空间数据结构优化，对程序化生成和场景管理有潜在价值。",
      "src": "arXiv · cs.GR · 07-06",
      "url": "https://arxiv.org/abs/2607.04881v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "自中心八叉树点流更新",
      "sum": "ECO 增量更新八叉树，用于移动机器人实时点流处理。",
      "ta": "实时空间数据结构，可借鉴到游戏中的动态场景管理。",
      "src": "arXiv · cs.GR · 07-06",
      "url": "https://arxiv.org/abs/2607.05092v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "免费Maya参考匹配工具",
      "sum": "Maya免费工具支持照片参考与相机匹配，Pro版含投影贴图。",
      "ta": "直接提升TA贴图制作与参考对齐效率。",
      "src": "80 Level · 07-06",
      "url": "https://80.lv/articles/this-free-maya-tool-facilitates-working-with-photo-references-camera-matching/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "VFX复原史前生物幕后",
      "sum": "Framestore 用VFX为纪录片复原剑齿虎等灭绝动物。",
      "ta": "生物毛发/皮肤VFX流程参考，可借鉴到游戏角色制作。",
      "src": "80 Level · 07-06",
      "url": "https://80.lv/articles/how-prehistoric-planet-ice-age-recreated-extinct-creatures-with-vfx/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "雕塑神秘崇拜领袖技巧",
      "sum": "Matteo Constant 分享夹克建模与磨损着色器纹理方法。",
      "ta": "角色材质与着色器技巧，对写实服装渲染有参考。",
      "src": "80 Level · 07-06",
      "url": "https://80.lv/articles/how-to-sculpt-an-intriguing-and-mysterious-worship-leader/"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 1,
      "title": "Xbox裁员3200人",
      "sum": "Xbox裁员3200人，4个工作室换管理，包括Double Fine等。",
      "ta": "行业震荡影响工作室稳定性，可能波及UE5项目资源。",
      "src": "80 Level · 07-06",
      "url": "https://80.lv/articles/xbox-is-laying-off-3-200-employees-giving-4-studios-new-management/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "黑曜石流失四分之一员工",
      "sum": "Obsidian因Xbox调整流失60-70人，约占员工四分之一。",
      "ta": "知名工作室人才流失，可能影响其UE5项目进度。",
      "src": "Game Developer · 07-07",
      "url": "https://www.gamedeveloper.com/business/report-obsidian-losing-around-one-quarter-of-its-staff-to-xbox-reset-"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Niantic关闭新西兰工作室",
      "sum": "Ingress开发商Niantic关闭新西兰办公室，转向非游戏领域。",
      "ta": "AR游戏公司转型，对游戏行业AR/VR方向有信号意义。",
      "src": "Game Developer · 07-06",
      "url": "https://www.gamedeveloper.com/business/ingress-developer-niantic-spatial-shuttering-new-zealand-office"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "EVE Online引擎框架开源",
      "sum": "EVE Online跨平台引擎框架Carbon现已完全开源。",
      "ta": "开源游戏引擎框架，可研究其跨平台设计。",
      "src": "Game Developer · 07-06",
      "url": "https://www.gamedeveloper.com/production/eve-online-s-cross-platform-game-engine-framework-is-now-fully-open-source"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "赛博朋克2077销量达4000万",
      "sum": "CDPR宣布《赛博朋克2077》累计销量突破4000万份。",
      "ta": "商业里程碑，反映大型3A游戏长尾表现。",
      "src": "80 Level · 07-06",
      "url": "https://80.lv/articles/cyberpunk-2077-has-reached-40-million-copies-sold/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "独立开发者制作卡牌店模拟器",
      "sum": "Sia Ding Shen 分享TCG卡牌店模拟器开发经验。",
      "ta": "独立游戏开发案例，对模拟类游戏系统设计有参考。",
      "src": "80 Level · 07-06",
      "url": "https://80.lv/articles/solo-developer-on-creating-a-simulation-game-about-a-local-game-store/"
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
