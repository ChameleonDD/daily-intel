// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月18日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>微片介质多重散射解析式BRDF</em> / <em>GS转PBR高斯资产分解法</em> / <em>实时粒子流式传输编解码</em> / <em>CDPR TA 发布扫描PBR求解器</em>。其余按重要性自动排序，红色优先。",
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
      "title": "溅射液体多视角重建新法",
      "sum": "SplashSplat 从真实多视角视频重建飞溅液体，解决瞬时撕裂与无纹理难题。",
      "ta": "流体特效师可关注其重建思路，用于离线参考或验证 Niagara 溅射形态。",
      "src": "arXiv · cs.GR · 09-17",
      "url": "https://arxiv.org/abs/2609.20818v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "程序化场景穿模自动修复",
      "sum": "S4R 用尺度延拓法解决程序化生成场景中的刚体互穿，供物理仿真前清理。",
      "ta": "植被/道具程序化摆放常遇穿模，此法可作为生成后处理步骤参考。",
      "src": "arXiv · cs.GR · 09-17",
      "url": "https://arxiv.org/abs/2609.20524v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "微片介质多重散射解析式BRDF",
      "sum": "新漫反射型 BRDF 在 Smith 阴影假设下精确计入所有散射阶数，且可解析求值与重要性采样。",
      "ta": "对植被/毛发等微片材质的多重散射近似有直接价值，可评估替换现有 diffuse 模型。",
      "src": "arXiv · cs.GR · 09-17",
      "url": "https://arxiv.org/abs/2609.20394v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "GS转PBR高斯资产分解法",
      "sum": "GS-PI 解耦外观分解，把高斯泼溅的烘焙辐照转为可接入 PBR 管线的材质资产。",
      "ta": "3D 扫描/泼溅资产进 UE5 PBR 管线的关键一步，值得跟进其解耦与重光照效果。",
      "src": "arXiv · cs.GR · 09-17",
      "url": "https://arxiv.org/abs/2609.19907v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "绘画多解性三维实体化",
      "sum": "研究具象绘画对应的多种三维构型，而非收敛到单一重建模型。",
      "ta": "偏学术艺术方向，与实时渲染工作流关联弱，速览即可。",
      "src": "arXiv · cs.GR · 09-17",
      "url": "https://arxiv.org/abs/2609.19782v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "实时粒子流式传输编解码",
      "sum": "DELUGE 用分解式熵编码实现非结构化几何的实时粒子流式传输，面向 VR/AR 共享仿真。",
      "ta": "Niagara 流体多人同步可参考其压缩与流式方案，降低网络带宽压力。",
      "src": "arXiv · cs.GR · 09-17",
      "url": "https://arxiv.org/abs/2609.19750v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "语言驱动全身接触控制",
      "sum": "LYRIC 用流匹配控制器，让角色按自然语言完成富接触的全身物体交互。",
      "ta": "若做角色动画或物理交互，可关注其稀疏目标加语言指令的控制范式。",
      "src": "arXiv · cs.GR · 09-17",
      "url": "https://arxiv.org/abs/2609.19688v1"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Steam 折扣页个性化改版",
      "sum": "Valve 将折扣与活动网格个性化，为小游戏带来数千月访问量。",
      "ta": "发行侧变化，与 TA 工作无直接关系，速览。",
      "src": "80 Level · 09-17",
      "url": "https://80.lv/articles/steam-quietly-made-a-huge-discoverability-change-for-indie-games/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "title": "CDPR TA 发布扫描PBR求解器",
      "sum": "CD Projekt Red 技术美术推出 sigmaPBR，把 3D 扫描转为可重光照材质。",
      "ta": "扫描资产转 PBR 是植被/道具管线常见痛点，可直接试用其求解流程。",
      "src": "80 Level · 09-17",
      "url": "https://80.lv/articles/cd-projekt-red-s-technical-artist-unveils-pbr-solver-for-3d-scans/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "角色建模工作流拆解",
      "sum": "Seori Nam 分享角色制作流程，涵盖基础网格雕脸、Marvelous Designer 服装与纹素密度取舍。",
      "ta": "纹素密度与配色平衡的经验对角色/植被贴图规划有参考价值。",
      "src": "80 Level · 09-17",
      "url": "https://80.lv/articles/modeling-3d-character-with-medieval-fantasy-post-apocalyptic-elements/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "PS1风格预渲染背景进引擎",
      "sum": "Static Between Stations 开发者展示 PS1 风格预渲染背景在引擎内的呈现与制作方式。",
      "ta": "预渲染背景转实时呈现的取舍思路，对风格化场景搭建有借鉴意义。",
      "src": "80 Level · 09-17",
      "url": "https://80.lv/articles/see-how-this-rpg-s-ps1-style-pre-rendered-backgrounds-look-in-engine/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 链条生成插件发布",
      "sum": "PeakDreams Studio 发布 Blender Chain Generator v1.0.0，含 250+ 可用资产。",
      "ta": "程序化生成链条类道具可省手工建模时间，适合快速搭场景。",
      "src": "80 Level · 09-17",
      "url": "https://80.lv/articles/blender-add-on-that-generates-adjustable-chains-in-seconds/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Heart Machine 大规模裁员",
      "sum": "《Hyper Light Drifter》开发商 Heart Machine 裁掉大部分员工，工作室面临存亡关口。",
      "ta": "行业收缩信号，关注独立团队生存环境变化。",
      "src": "Game Developer · 09-17",
      "url": "https://www.gamedeveloper.com/business/hyper-light-drifter-developer-heart-machine-has-laid-off-the-majority-of-staff"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "NVIDIA",
      "Blender 开发博客",
      "PlayStation Blog",
      "AMD GPUOpen",
      "arXiv · cs.GR",
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Unreal Engine、HuggingFace。"
  },
  "xStale": false
};
