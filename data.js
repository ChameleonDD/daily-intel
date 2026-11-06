// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月6日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>神经纹理实时超分采样</em> / <em>网格泼溅解耦拓扑与外观</em> / <em>按感知分配高斯而非几何</em>。其余按重要性自动排序，红色优先。",
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
      "title": "神经纹理实时超分采样",
      "sum": "提出轻量MLP在纹理采样阶段实时放大低分辨率纹理，泛化而非过拟合。",
      "ta": "纹理采样阶段做神经超分，直接关系到显存与带宽预算，值得评估能否进材质管线。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.07289v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "网格泼溅解耦拓扑与外观",
      "sum": "T²-Splat用自适应拓扑网格加纹理残差，减少为保细节而过密细分。",
      "ta": "三角泼溅接传统管线，拓扑与外观解耦的思路可参考到程序化植被的LOD与网格化流程。",
      "src": "arXiv · cs.GR · 11-04",
      "url": "https://arxiv.org/abs/2611.06974v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "按感知分配高斯而非几何",
      "sum": "重新审视基于网格的泼溅中每面固定高斯数的分配策略，主张以感知驱动。",
      "ta": "高斯分配策略直接影响渲染开销与画质平衡，做程序化散布时可借鉴其分配逻辑。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.07979v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "分层增量Beta泼溅在线重建",
      "sum": "针对在线3DGS每关键帧仅数十次迭代、初始化差的问题提出分层增量方案。",
      "ta": "在线重建的收敛速度问题，与扫描/实景进引擎的流程相关，速览即可。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.08288v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "扩散驱动高斯头像精修",
      "sum": "用合成失败样本引导扩散模型，修复单目视频高斯头像的模糊与拉伸伪影。",
      "ta": "数字人与面部资产方向，与植被/特效本职关联弱，速览。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.07909v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "对偶轮廓提取中轴网格",
      "sum": "DC-SQEM用球面二次误差度量的对偶轮廓从点云提取保特征中轴网格。",
      "ta": "几何处理与简化方向，可留意其对点云到网格的保特征能力。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.07328v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "四维点泼溅雷达渲染",
      "sum": "面向毫米波雷达微多普勒的可微渲染，缓解雷达数据集稀缺。",
      "ta": "传感仿真方向，与实时渲染本职距离较远，速览。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.08342v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "骨骼运动信号实时补全",
      "sum": "REACT针对游戏、XR等交互场景，实时补全质量不佳的追踪骨骼运动信号。",
      "ta": "涉及游戏动捕数据管线，若做角色/植被交互驱动可关注其补全思路。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.08301v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Houdini流体交互教程",
      "sum": "Gnomon Workshop推出Houdini流体与交互模拟入门课程，限时八折。",
      "ta": "流体特效学习资源，与Niagara流体方向可互补参考，速览。",
      "src": "80 Level · 11-05",
      "url": "https://80.lv/articles/learn-to-simulate-realistic-fluid-interactions-in-houdini/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender程序化冰网格系统",
      "sum": "Deepak Kushwaha分享基于网格的Blender程序化冰生成系统。",
      "ta": "程序化生成案例，思路可迁移到程序化材质/植被，速览。",
      "src": "80 Level · 11-05",
      "url": "https://80.lv/articles/creating-mesh-based-procedural-ice-in-blender/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Maya多视觉风格制作解析",
      "sum": "华纳动画新片团队讲解如何用Maya处理影片的多种视觉风格。",
      "ta": "离线动画流程参考，与实时管线关联有限，速览。",
      "src": "80 Level · 11-06",
      "url": "https://80.lv/articles/how-the-cat-in-the-hat-was-made-with-autodesk-maya-flow/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "LAIKA手工羽毛制作揭秘",
      "sum": "LAIKA分享《Wildwood》中鸟族将领每根羽毛均为手工打造。",
      "ta": "离线角色资产细节参考，对实时毛发/植被有启发但非直接，速览。",
      "src": "80 Level · 11-05",
      "url": "https://80.lv/articles/laika-shares-how-it-made-the-feathers-of-general-in-wildwood/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "K/DA新MV动画幕后",
      "sum": "Fortiche导演与动画总监谈FIRESTARTER的动画、VFX与镜头及所用3D软件。",
      "ta": "风格化动画与VFX流程参考，速览。",
      "src": "80 Level · 11-05",
      "url": "https://80.lv/articles/take-a-look-behind-animation-in-k-da-s-firestarter-music-video/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "复古爆破机3D全流程",
      "sum": "Kyryl Zlotnyk完整演示DuPont爆破机的建模、渲染与动画流程。",
      "ta": "硬表面资产全流程案例，速览。",
      "src": "80 Level · 11-05",
      "url": "https://80.lv/articles/recreating-vintage-dynamite-blasting-machine-in-3d/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "FF7重制制作人暗示新作",
      "sum": "北濑佳范称SE更倾向投资新IP，但不排除更多重制。",
      "ta": "行业动向，与TA工作无直接关联，速览。",
      "src": "80 Level · 11-05",
      "url": "https://80.lv/articles/final-fantasy-vii-remake-producer-hints-at-more-adaptations-new-games/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "AC英灵殿升级PSSR支持",
      "sum": "《刺客信条：英灵殿》免费更新为PS5 Pro带来升级版PSSR支持。",
      "ta": "主机超分方案落地案例，可留意PSSR升级后的画质表现。",
      "src": "PlayStation Blog · 11-05",
      "url": "https://blog.playstation.com/2026/11/05/assassins-creed-valhalla-new-update-brings-new-game-upgraded-pssr-support-for-ps5-pro-today/"
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
