// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月10日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>神经纹理压缩补上各向异性过滤</em> / <em>3DGS攻克SM级负载不均</em> / <em>体积光传输免路径实时推断</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "hi",
      "rank": 1,
      "title": "神经纹理压缩补上各向异性过滤",
      "sum": "论文为神经纹理压缩引入显式LOD条件与各向异性过滤，弥补GPU纹理单元缺失的滤波。",
      "ta": "材质/Shader性能方向值得精读：NTC若接入AF，直接影响贴图内存与采样开销的权衡。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.12650v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "3DGS攻克SM级负载不均",
      "sum": "论文针对3D高斯泼溅在GPU上的SM级负载不均衡提出优化，无需重训练或专用加速器。",
      "ta": "实时渲染管线相关：3DGS调度优化思路可迁移到大规模植被/场景泼溅的性能调优。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.12319v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "体积光传输免路径实时推断",
      "sum": "提出用低成本场景特征与统计量实时重建体积介质下的像素辐射，替代蒙特卡洛降噪。",
      "ta": "Niagara流体/体积特效方向必看：无路径的实时体积光照方案可能改变雾效与体积渲染成本结构。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.12103v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "曲线狄拉克质量的卷积微分",
      "sum": "论文提出Spaghetti Splatting，用卷积对点线三角等图元定义的狄拉克质量做可微体渲染。",
      "ta": "关注图元级可微渲染的数学处理，对程序化几何重建管线有潜在参考。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.12716v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可微物理仿真梯度综述",
      "sum": "系统梳理可微物理仿真中各引擎所微分的数学对象差异及其对梯度的影响。",
      "ta": "做程序化/物理驱动动画时，可据此判断不同仿真器的梯度语义与优化适用性。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.12162v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "建筑纹理代理模型一体化生成",
      "sum": "提出将几何抽象与纹理生成合并的建筑纹理代理生成方法，替代串行流水线。",
      "ta": "程序化场景生成相关：建筑代理的几何+纹理联合生成可启发大场景LOD资产管线。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.12077v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "文本生成可仿真形变3D场景",
      "sum": "SoftPAT3D将布料、玩偶、绳索等形变体生成为物理有效、可直接仿真的3D场景。",
      "ta": "3D生成与仿真衔接：形变体生成即仿真就绪，对道具/场景资产生成流程有参考价值。",
      "src": "arXiv · cs.GR · 11-08",
      "url": "https://arxiv.org/abs/2611.11087v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "贝塞尔泼溅改进笔触渲染",
      "sum": "提出带结构初始化的二次贝塞尔泼溅，缓解笔触渲染中图元碎片化与缺陷被遮盖问题。",
      "ta": "非真实感渲染方向可速览，泼溅图元的结构化初始化思路可借鉴。",
      "src": "arXiv · cs.GR · 11-07",
      "url": "https://arxiv.org/abs/2611.10713v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "LiDAR骨架约束紧凑高斯泼溅",
      "sum": "PLS-GS用概率LiDAR骨架引导3DGS，得到更紧凑、贴合表面的高斯表示。",
      "ta": "若涉及扫描资产重建，LiDAR约束可提升几何贴合度并压缩高斯数量。",
      "src": "arXiv · cs.GR · 11-07",
      "url": "https://arxiv.org/abs/2611.10699v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "潜在动作世界模型跨体型迁移",
      "sum": "实证研究无标签潜在动作世界模型中，动作能否在不同2D角色体型间迁移。",
      "ta": "角色动画方向可关注：跨体型动作迁移若成立，可简化多角色动画复用。",
      "src": "arXiv · cs.GR · 11-07",
      "url": "https://arxiv.org/abs/2611.10523v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "世界模型测试时学新游戏机制",
      "sum": "研究世界模型需要多少曝光才能在测试时学会未见过的游戏机制。",
      "ta": "与游戏AI/世界模型相关，可了解其对游戏机制泛化的评估方式。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.12324"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "ArtStation上线AI声明与过滤",
      "sum": "ArtStation新增生成式AI使用声明与举报机制，用户可自选AI内容可见度。",
      "ta": "资产参考与作品集平台规则变化，影响素材溯源与AI标注合规习惯。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/artstation-adds-ai-declarations-default-ai-filtering-for-artwork/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Substance手绘基础生成器教程",
      "sum": "Theresa Schlag分享用Substance 3D Designer制作手绘基础生成器的流程与难点。",
      "ta": "程序化材质工作流参考：渐变与图结构处理经验可直接用于植被/地表材质生成。",
      "src": "80 Level · 11-09",
      "url": "https://80.lv/articles/how-to-make-hand-painted-base-generator-in-substance-3d-designer/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "月光奇幻角色3D制作解析",
      "sum": "Alex Borkovskiy谈Galatea项目角色服饰鞋履的精细贴图与保持风格化的灯光设置。",
      "ta": "角色向速览，灯光避免贴图塑料感的处理可作参考。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/making-an-ethereal-moonlight-inspired-fantasy-character-in-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "手绘风3D角色重制展示",
      "sum": "以手绘3D风格重制《迷宫饭》莱欧斯，呈现战棋游戏质感。",
      "ta": "风格化渲染速览，可看手绘质感在3D中的呈现方式。",
      "src": "80 Level · 11-09",
      "url": "https://80.lv/articles/dungeon-meshi-s-laios-reimagined-in-beautiful-hand-drawn-3d-style/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ZBrush与Marmoset角色工作流",
      "sum": "Jessie Chan分享街霸6 A.K.I.同人流程：对称低模联动高模雕刻，再于Marmoset打光。",
      "ta": "角色资产速览，低模与高模联动便于贴图制作的做法可借鉴。",
      "src": "80 Level · 11-09",
      "url": "https://80.lv/articles/reimagining-street-fighter-6-s-a-k-i-in-zbrush-marmoset-toolbag/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "星战战术新作工作室裁员",
      "sum": "报道称《Star Wars Zero Company》开发商Bit Reactor裁减数量不明员工。",
      "ta": "行业动态速览，反映中型工作室项目后的组织波动。",
      "src": "Game Developer · 11-09",
      "url": "https://www.gamedeveloper.com/business/report-star-wars-zero-company-developer-bitreactor-lays-off-an-unspecified-number-of-staff"
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
