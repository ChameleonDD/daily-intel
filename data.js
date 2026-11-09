// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年11月9日 · 周一",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>NanoVDB 支持动态体素网格</em>。其余按重要性自动排序，红色优先。",
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
      "title": "NanoVDB 支持动态体素网格",
      "sum": "NanoVDB 新增 GPU 原生拓扑动态更新与体素顺序访问范式，加速稀疏网格算子。",
      "ta": "稀疏体素/体积特效的底层数据结构升级，值得评估对流体烟雾与程序化体积生成的性能收益。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.08665v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "蒙皮角色自穿插实时修复",
      "sum": "提出免训练后处理，通过姿态修正与有界蒙皮压缩减少角色自穿插伪影。",
      "ta": "角色动画后处理思路，可参考其软接触预算约束用于布料/植被与角色交互的穿插处理。",
      "src": "arXiv · cs.GR · 11-06",
      "url": "https://arxiv.org/abs/2611.09693v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3D 网格几何纹理分割",
      "sum": "针对 3D 模型中级几何纹理模式的分割方法，弥补语义部件分割的不足。",
      "ta": "几何纹理识别可用于程序化植被/岩石表面细节的自动分类与材质分配。",
      "src": "arXiv · cs.GR · 11-06",
      "url": "https://arxiv.org/abs/2611.08897v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "自然语言实时调度人群仿真",
      "sum": "CrowdDirector 用自然语言指令在仿真运行时编排人群，兼顾灵活性与低延迟。",
      "ta": "运行时人群/群集编排思路，可借鉴到植被风场或 Niagara 群集行为的动态指令控制。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.08763v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "3D 创作编码智能体基准",
      "sum": "Frontier3DBench 评测编码智能体在物体、场景与交互开放世界中的 3D 创作能力。",
      "ta": "关注其场景与开放世界生成评测维度，可作为程序化生成工具链自动化能力的参照。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.09017"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "生成视频的视野外世界演化",
      "sum": "EvoWorld 研究生成视频模型在镜头外区域的世界演化一致性。",
      "ta": "与实时渲染关联有限，仅作生成式世界建模趋势速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.06748"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "质量效应2早期过场动画曝光",
      "sum": "动画师公开 BioWare 蒙特利尔内部 pre-alpha 过场动画预告及其制作方式。",
      "ta": "过场动画分镜与镜头构建的行业参考，速览即可。",
      "src": "80 Level · 11-09",
      "url": "https://80.lv/articles/mass-effect-2-animator-shares-pre-alpha-cinematics-trailer/"
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
