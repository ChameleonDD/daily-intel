// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月6日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>Blender几何节点研讨会纪要</em> / <em>预积分神经发光体实时渲染</em> / <em>低方差高斯重采样抗噪</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "flow",
      "imp": "hi",
      "rank": 1,
      "title": "Blender几何节点研讨会纪要",
      "sum": "Blender发布几何节点研讨会总结，涉及程序化建模与工具链更新方向。",
      "ta": "植被工具与程序化生成直接相关，值得精读节点系统演进方向。",
      "src": "Blender 开发博客 · 10-05",
      "url": "https://code.blender.org/2026/10/geometry-nodes-workshop-september-2026/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "预积分神经发光体实时渲染",
      "sum": "提出预积分神经发光体方案，解决带遮挡外壳的高面数发光网格直接光照瓶颈。",
      "ta": "实时直接光照的硬核突破，对材质/Shader性能优化有直接参考价值。",
      "src": "arXiv · cs.GR · 10-05",
      "url": "https://arxiv.org/abs/2610.06762v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "低方差高斯重采样抗噪",
      "sum": "SteadySplats对低方差高斯重采样，降低随机顺序无关透明渲染的高频噪声。",
      "ta": "3DGS渲染噪声抑制方案，对半透明植被/粒子渲染有借鉴意义。",
      "src": "arXiv · cs.GR · 10-04",
      "url": "https://arxiv.org/abs/2610.05576v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时神经发丝仿真",
      "sum": "Neuroll用模拟器在环展开实现实时神经发丝仿真。",
      "ta": "发丝实时仿真思路可迁移到植被/毛发类程序化动画。",
      "src": "arXiv · cs.GR · 10-03",
      "url": "https://arxiv.org/abs/2610.04689v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "前馈3DGS实时重建",
      "sum": "LoCoSplat以最小3D推理实现实时前馈3D高斯泼溅。",
      "ta": "轻量前馈3DGS对场景快速重建与工具链集成有参考。",
      "src": "arXiv · cs.GR · 10-03",
      "url": "https://arxiv.org/abs/2610.04351v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "八叉树无损网格压缩",
      "sum": "OctMesh提出统一八叉树层级框架，实现无损三角网格压缩。",
      "ta": "网格压缩对资产管线与运行时内存优化有潜在价值。",
      "src": "arXiv · cs.GR · 10-03",
      "url": "https://arxiv.org/abs/2610.04281v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "骨骼无关动画压缩",
      "sum": "CurveCodec 2用学习熵模型实现骨骼无关的动画压缩。",
      "ta": "动画压缩方案对大规模角色/植被动画数据管理有参考。",
      "src": "arXiv · cs.GR · 10-03",
      "url": "https://arxiv.org/abs/2610.04211v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "图像条件B-Rep生成",
      "sum": "UniBRep以几何优先框架从单图生成统一几何与拓扑的B-Rep。",
      "ta": "CAD级几何生成对硬表面资产程序化有潜在启发。",
      "src": "arXiv · cs.GR · 10-02",
      "url": "https://arxiv.org/abs/2610.04092v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "类比关系迁移3D资产生成",
      "sum": "CreativeFlow用类比发散思维缓解文本到3D的创意同质化。",
      "ta": "3D资产生成的多样性方法，对程序化资产生成有思路借鉴。",
      "src": "arXiv · cs.GR · 10-04",
      "url": "https://arxiv.org/abs/2610.05167v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "扩散Transformer上下文令牌",
      "sum": "研究多模态扩散Transformer中动态上下文令牌的功能机制。",
      "ta": "理解MM-DiT内部机制，对AI生成管线调优有理论参考。",
      "src": "arXiv · cs.GR · 10-05",
      "url": "https://arxiv.org/abs/2610.06844v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "感知均匀图像编辑滑块",
      "sum": "UniSlider提出感知均匀的滑块实现连续图像编辑。",
      "ta": "对AI辅助纹理/材质编辑的交互设计有参考。",
      "src": "arXiv · cs.GR · 10-05",
      "url": "https://arxiv.org/abs/2610.06831v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "人形运动模仿自演化框架",
      "sum": "InterMimicGen通过自演化运动模仿扩展人形机器人运动操作。",
      "ta": "与游戏TA关联较弱，仅作运动生成技术速览。",
      "src": "arXiv · cs.GR · 10-05",
      "url": "https://arxiv.org/abs/2610.06850v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "自由曲面灯罩计算设计",
      "sum": "提出可3D打印的自由曲面灯罩计算设计方法以控制光照。",
      "ta": "光学设计思路，与实时渲染关联有限，速览即可。",
      "src": "arXiv · cs.GR · 10-05",
      "url": "https://arxiv.org/abs/2610.05770v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "编码智能体生成游戏世界",
      "sum": "Code2Games让编码智能体面向游戏世界生成。",
      "ta": "AI生成游戏世界的探索，对程序化关卡/世界工具有潜在启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.05033"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时世界动作模型",
      "sum": "RealtimeWAM提出单步异步世界动作模型。",
      "ta": "实时世界模型方向，与游戏TA关联间接，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.06617"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散语言模型自适应循环",
      "sum": "ALoDLM提出自适应循环的扩散语言模型。",
      "ta": "纯语言模型方向，与游戏渲染无关，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.04198"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型定向偏置注入",
      "sum": "通过闭环激活引导在扩散语言模型中定向注入偏置。",
      "ta": "语言模型安全方向，与游戏TA无关，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.05894"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散语言模型表示空间MMD",
      "sum": "为扩散语言模型提出表示空间MMD方法。",
      "ta": "纯语言模型理论，与游戏渲染无关，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.06648"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "皇牌空战8用UE5获系列最高分",
      "sum": "Project Aces结合UE5、自研云技术与高细节战机，获系列自2001年来最高评价。",
      "ta": "UE5在3A空战游戏中的落地案例，值得关注其技术组合。",
      "src": "80 Level · 10-05",
      "url": "https://80.lv/articles/ace-combat-8-is-the-highest-reviewed-game-in-the-series-since-the-ps2/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "Capcom计划用AI进化RE引擎",
      "sum": "Capcom公布REX项目，目标是以AI共同创造游戏来进化RE引擎。",
      "ta": "主流引擎引入AI功能的动向，值得关注对TA工作流的影响。",
      "src": "80 Level · 10-05",
      "url": "https://80.lv/articles/capcom-reveals-plans-to-evolve-re-engine-with-ai-features/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini空间殖民+Pyro烟雾",
      "sum": "Karlis Stigis用Houdini几何节点结合空间殖民求解器与Pyro模拟制作循环烟雾爆发。",
      "ta": "程序化+流体特效的实战案例，对Niagara流体思路有借鉴。",
      "src": "80 Level · 10-05",
      "url": "https://80.lv/articles/merging-space-colonization-solver-with-pyro-simulation-to-create-looping-smoke-bursts/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini角色水附着R&D",
      "sum": "Milad Sãvar分享在动画角色上控制水附着、滴落与飞溅的程序化工作流R&D。",
      "ta": "程序化流体交互R&D，对特效与材质工作流有参考。",
      "src": "80 Level · 10-05",
      "url": "https://80.lv/articles/artist-explores-realistic-water-adhesion-on-animated-characters-in-houdini/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender绑定引入RBF求解器",
      "sum": "RBF Nodes插件为Blender绑定带来RBF求解器，用多输入驱动多属性。",
      "ta": "绑定工具链增强，对角色/植被骨骼驱动有实用价值。",
      "src": "80 Level · 10-05",
      "url": "https://80.lv/articles/bring-rbf-solver-to-your-blender-rigs/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Ninja Theory据报裁员",
      "sum": "Hellblade开发商Ninja Theory在脱离Xbox失败后据报裁员。",
      "ta": "行业动态，反映3A工作室整合压力，速览。",
      "src": "Game Developer · 10-05",
      "url": "https://www.gamedeveloper.com/business/report-ninja-theory-lays-off-workers-after-failing-to-spin-off-from-xbox"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "ARC Raiders等将影视化",
      "sum": "Embark Studios的The Finals与ARC Raiders获影视改编。",
      "ta": "商业动态，与TA工作无直接关联，速览。",
      "src": "Game Developer · 10-05",
      "url": "https://www.gamedeveloper.com/business/arc-raiders-and-the-finals-set-for-tv-and-film-adaptations-from-backrooms-co-producer"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "沉浸式模拟仍值得做",
      "sum": "Harvey Smith与Ben Horne阐述Black Pony Immersive的设计愿景。",
      "ta": "设计理念访谈，与TA技术关联弱，速览。",
      "src": "Game Developer · 10-05",
      "url": "https://www.gamedeveloper.com/design/why-it-s-still-worth-making-immersive-sims-ft-harvey-smith-ben-horne"
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
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Tech-Artists。"
  },
  "xStale": false
};
