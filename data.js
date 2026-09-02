// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月2日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>金刚狼日本扫描之旅</em> / <em>三角形神经渲染基准发布</em> / <em>程序化生成可编辑科学图表</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "mid",
      "title": "金刚狼日本扫描之旅",
      "sum": "Insomniac 团队赴日本进行实景扫描，采集自然与建筑资产用于《金刚狼》开发。",
      "ta": "展示了 3A 工作室外景扫描的流程与规模，可参考其资产采集与整理思路。",
      "src": "PlayStation Blog · 09-01",
      "url": "https://blog.playstation.com/2026/09/01/marvels-wolverine-inside-insomniac-games-location-scanning-trip-to-japan/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "三角形神经渲染基准发布",
      "sum": "MeshSplatBench 提出统一基准，评估基于三角形的神经渲染在标准光栅硬件上的表现。",
      "ta": "为评估可光栅化的神经渲染方法提供标准，对探索混合渲染管线的 TA 有参考价值。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.01306v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "程序化生成可编辑科学图表",
      "sum": "新方法将科学图表生成视为程序合成，可递归生成并支持编辑，优于纯图像生成。",
      "ta": "程序化生成思路或可迁移至技术文档与资产管线中的可编辑图表制作。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.01006v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "可控视频素描风格生成",
      "sum": "HyperSketch 在风格超空间中实现可控的矢量素描动画生成，提升风格多样性与控制力。",
      "ta": "矢量风格化动画的可控生成，对探索非写实渲染与动态分镜的 TA 有启发。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.00919v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "填补动漫上色遗漏区域",
      "sum": "研究聚焦动画上色流程中常见的小面积未上色缝隙，提出针对性填补方法。",
      "ta": "针对 2D 动画管线的痛点，其思路或可辅助 3D 风格化贴图与手绘资产的自动化处理。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.00800v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "线条图逆向绑定优化",
      "sum": "提出从手绘轮廓线逆向推断并优化角色绑定参数的方法，以直接表达艺术意图。",
      "ta": "将 2D 轮廓意图映射到 3D 绑定，为风格化角色动画的创作提供新交互范式。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.00732v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "线图元逆向渲染建模",
      "sum": "新方法利用线图元逆向渲染，捕捉毛发、纤维等模糊各向异性结构用于实时可视化。",
      "ta": "针对毛发等复杂结构的实时渲染建模，对植被与特效资产的程序化生成有直接参考。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.00625v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频推断参数化折纸程序",
      "sum": "FoldingAgent 框架从演示视频中推断显式参数化折纸程序，结合 VLM 与专用工具。",
      "ta": "从视频学习程序化几何操作，或可启发程序化生成中从演示到规则提取的思路。",
      "src": "arXiv · cs.GR · 08-31",
      "url": "https://arxiv.org/abs/2609.00377v1"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "实时体素建筑破坏演示",
      "sum": "Dennis Gustafsson 发布新演示，展示令人满意的实时体素建筑拆除效果。",
      "ta": "体素破坏的实时效果演示，可关注其物理模拟与渲染性能平衡的实现细节。",
      "src": "80 Level · 09-01",
      "url": "https://80.lv/articles/this-real-time-voxel-building-demolition-is-so-satisfying/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "免费高级 Maya 绑定发布",
      "sum": "一款包含面部表情的免费 Maya 绑定，提供高级控制功能供下载。",
      "ta": "可直接用于动画测试与绑定学习，节省制作高质量面部绑定原型的时间。",
      "src": "80 Level · 09-01",
      "url": "https://80.lv/articles/get-this-free-maya-rig-with-advanced-controls/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "免费获取 70+ Shader 教程",
      "sum": "XorDev 提供超过 70 个 Shader 教程的免费访问权限。",
      "ta": "大量 Shader 教程资源，适合系统学习或查漏补缺，提升材质编写能力。",
      "src": "80 Level · 09-01",
      "url": "https://80.lv/articles/get-free-access-to-over-70-shader-tutorials/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 一键生成线稿",
      "sum": "Masamune Sakaki 发布免费工具，可一键从任意 3D 模型生成线稿。",
      "ta": "快速生成线稿的工具，可用于概念设计、技术美术文档或风格化渲染辅助。",
      "src": "80 Level · 09-01",
      "url": "https://80.lv/articles/one-click-line-art-from-any-3d-model-in-blender/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "C4D 与 Blender 损伤插件",
      "sum": "Edgy 插件为 C4D 与 Blender 提供六种预设，可创建逼真损伤效果并支持扩展。",
      "ta": "快速生成逼真损伤效果，适合用于场景破坏与资产老化，提升效率。",
      "src": "80 Level · 09-01",
      "url": "https://80.lv/articles/check-out-this-plug-in-for-c4d-blender-that-created-realistic-damage/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Paradox 新作吸引策略新手",
      "sum": "《Afterworld》游戏总监解释如何用 RPG 钩子吸引新玩家进入宏大策略游戏。",
      "ta": "了解策略游戏设计趋势，对理解玩家体验与引导机制设计有参考。",
      "src": "Game Developer · 09-01",
      "url": "https://www.gamedeveloper.com/design/paradox-interactive-s-afterworld-wants-to-entice-new-players-to-grand-strategy-with-tasty-rpg-hooks"
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
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Blender 开发博客、HuggingFace。"
  },
  "xStale": false
};
