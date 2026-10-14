// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年10月14日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>全UE流程做手绘风动画</em>。其余按重要性自动排序，红色优先。",
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
      "title": "全UE流程做手绘风动画",
      "sum": "Dardo Studios用Control Rig、Sequencer、Lumen在UE内完成整部动画，无Maya到引擎管线。",
      "ta": "值得看小团队如何用Control Rig+Sequencer替代传统动画管线，Lumen与投影手绘叠加的合成思路可复用。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/how-this-painterly-animated-short-was-rigged-animated-entirely-in-unreal-engine/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini曲线生成服装工具",
      "sum": "新工具Fibric基于曲线在Houdini中创建服装与布料。",
      "ta": "程序化布料生成思路可借鉴到植被/装饰物的曲线驱动建模流程。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/new-curve-based-clothing-garment-creation-houdini-tool-released/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender自动UV展开插件",
      "sum": "免费插件UVgami可快速自动展开UV，支持浏览器试用。",
      "ta": "批量资产UV自动化对植被/道具流水线有直接提效价值。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/this-free-blender-add-on-quickly-automates-uv-unwrapping/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender单对象万级撤销",
      "sum": "Sculpt Rewind插件把ZBrush的History Recall Brush带入Blender，每对象可撤销万次。",
      "ta": "雕刻阶段的历史回溯能力，对高模细节迭代有用。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/undo-history-for-each-blender-object-10-000-times-with-this-add-on/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "19个免费万圣节动捕",
      "sum": "Anderson Rohr发布僵尸、怪物、吸血鬼等19个免费动捕动画包。",
      "ta": "免费动捕资源可作原型或NPC动画填充。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/get-ready-for-halloween-with-these-19-free-mocap-animations/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Mystery House经典重制",
      "sum": "Guillotine Games谈用现代工具重制1980年Apple II经典Mystery House 3D的挑战。",
      "ta": "老游戏视觉语言现代化重制的案例参考。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/reviving-mystery-house-roberta-and-ken-williams-1980-apple-ii-classic/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "权游S3视效解析",
      "sum": "Rodeo FX分享《龙之家族》第三季视效拆解，共制作超45000帧。",
      "ta": "大规模影视VFX流程与帧量级参考。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/rodeo-fx-shared-their-house-of-the-dragon-season-3-vfx-breakdown/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender低多边形秋景",
      "sum": "Vossadova分享Blender制作的风格化低多边形秋季场景与变色龙。",
      "ta": "风格化场景配色与低模造型参考。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/stylized-low-poly-fall-scene-with-a-chameleon-made-in-blender/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "实时瀑布建造游戏",
      "sum": "Mogmek的Waterfalls Dream让玩家实时创建和编辑风格化瀑布。",
      "ta": "实时流体/瀑布编辑交互设计可作参考。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/this-game-allows-you-to-create-your-own-stylized-waterfalls-with-realistic-behavior/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "精灵动画关键帧插值",
      "sum": "低成本深度学习方案为精灵动画自动生成中间帧，避免写实插值的平滑伪影。",
      "ta": "针对像素/精灵内容的插值方法，对2D游戏动画工具链有参考价值。",
      "src": "arXiv · cs.GR · 10-12",
      "url": "https://arxiv.org/abs/2610.16423v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "相机可控图生视频框架",
      "sum": "Gen Through the Lens通过跨坐标条件融合实现物理一致的相机运镜图生视频。",
      "ta": "相机可控生成对预演/虚拟拍摄的镜头设计有潜在价值。",
      "src": "arXiv · cs.GR · 10-11",
      "url": "https://arxiv.org/abs/2610.15900v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "跨族运动补全解耦尺度",
      "sum": "Cepheid解耦尺度与结构，解决稀疏到稠密运动补全的跨几何族泛化问题。",
      "ta": "网格运动补全的泛化思路，对角色/形变动画工具有启发。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.18871v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态抓取序列合成",
      "sum": "Learning Dynamic Grasping合成可信的4D手-物抓取序列，用于角色动画与XR。",
      "ta": "手物交互合成对角色动画与VR交互有直接参考。",
      "src": "arXiv · cs.GR · 10-10",
      "url": "https://arxiv.org/abs/2610.14848v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "骨骼关节球面四边形化",
      "sum": "从无序方向向量集构造球面简单四边形化，用于骨骼关节参数化体积模型。",
      "ta": "参数化体积建模的拓扑构造方法，对程序化角色/关节建模有参考。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.17803v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CAD图纸全景符号识别",
      "sum": "TempFit用模板拟合方法解决CAD图纸的全景符号识别问题。",
      "ta": "图纸符号识别思路可迁移到场景资产/图元的自动解析。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.17776v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "投影球面行走等距嵌入",
      "sum": "WoAP将嵌入视为求解变量，改进Projected Walk on Spheres的表面PDE求解。",
      "ta": "几何PDE求解器改进，对程序化纹理/距离场有潜在价值。",
      "src": "arXiv · cs.GR · 10-11",
      "url": "https://arxiv.org/abs/2610.15573v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "可加工性拓扑优化",
      "sum": "用裁剪神经场做面向减材加工的拓扑优化，减少点铣加工。",
      "ta": "制造约束下的几何优化思路，与游戏资产关联较弱。",
      "src": "arXiv · cs.GR · 10-11",
      "url": "https://arxiv.org/abs/2610.15301v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "全息感知目标函数",
      "sum": "HoOPOE提出全息优化的感知目标函数，缓解计算机生成全息的散斑伪影。",
      "ta": "全息显示方向，与实时渲染管线关联有限。",
      "src": "arXiv · cs.GR · 10-12",
      "url": "https://arxiv.org/abs/2610.17474v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "内容编辑式版式生成",
      "sum": "CELG提出内容编辑式条件版式生成，扩展内容感知版式生成。",
      "ta": "图形设计版式生成，与游戏UI自动化有弱关联。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.17905v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "LLM协同设计空间概念",
      "sum": "Co-DSL让用户与LLM协同设计可复用的空间概念用于版式生成。",
      "ta": "人机协同的布局生成框架，可参考到关卡/场景布局工具。",
      "src": "arXiv · cs.GR · 10-11",
      "url": "https://arxiv.org/abs/2610.15290v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "机器人Real2Sim交互工具",
      "sum": "RoboSimStudio提供交互式工具包，快速实现机器人操作任务的Real2Sim。",
      "ta": "物理仿真求解器选择与接触建模，与游戏物理有间接参考。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.18835v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "可执行3D世界建模基准",
      "sum": "ExeWorldBench基准评测基于代码的可执行3D世界建模。",
      "ta": "可执行3D世界生成评测，对程序化世界生成方向有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.15166"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "多人世界模型分层通信",
      "sum": "Multics提出带分层通信的生成式多人世界模型。",
      "ta": "多人世界模型对多人游戏状态预测有潜在启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.17201"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "4D一致生成几何修复",
      "sum": "GeoFix通过几何修复实现4D一致生成。",
      "ta": "4D一致性生成对动态资产/序列生成有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.14293"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "高分辨率扩散注意力优化",
      "sum": "AReA提出自适应感受野注意力，提升高分辨率扩散Transformer效率。",
      "ta": "注意力效率优化思路对高分辨率生成/渲染有借鉴意义。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.17227"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型自参考优势学习",
      "sum": "SALD提出自参考优势学习用于扩散模型。",
      "ta": "扩散训练方法，与游戏资产生成间接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.01496"
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
