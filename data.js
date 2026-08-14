// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月14日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>MiniDXNN 神经纹理压缩</em>。其余按重要性自动排序，红色优先。",
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
      "title": "MiniDXNN 神经纹理压缩",
      "sum": "MiniDXNN v0.4.0 支持 D3D12 线性代数与实时 GUI 训练 MLP 纹理压缩。",
      "ta": "神经纹理压缩是 TA 关注的前沿方向，D3D12 实时训练与可视化工具链值得上手评估。",
      "src": "AMD GPUOpen · 08-13",
      "url": "https://gpuopen.com/learn/minidxnn-v040-interactive-neural-texture-compression/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "SCULPT 减法式部件生成",
      "sum": "SCULPT 提出减法组合方法，在生成循环内构建带结构部件的 3D 资产。",
      "ta": "部件级 3D 生成对程序化资产管线有参考价值，可关注其结构编辑与复用能力。",
      "src": "arXiv · cs.GR · 08-13",
      "url": "https://arxiv.org/abs/2608.13541v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "蓝噪声格点吉布斯模型",
      "sum": "论文将蓝噪声采样建模为格点吉布斯系综，统一统计建模与可扩展生成。",
      "ta": "蓝噪声采样是渲染与放置的核心，新理论框架可能带来更高效的采样器实现。",
      "src": "arXiv · cs.GR · 08-13",
      "url": "https://arxiv.org/abs/2608.13446v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "锥束CT金属伪影消除",
      "sum": "基于 Splat 的多色建模方法减少锥束 CT 中金属引起的束硬化伪影。",
      "ta": "虽偏医学成像，但多色 X 射线建模思路对体积渲染与材质重建有启发。",
      "src": "arXiv · cs.GR · 08-13",
      "url": "https://arxiv.org/abs/2608.13159v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "四阶 Overhauser 曲面框架",
      "sum": "提出 Quartic Overhauser 曲面生成框架，解决边界对齐与局部形状修改约束。",
      "ta": "曲面建模算法对程序化几何工具开发有参考，但偏理论，速览即可。",
      "src": "arXiv · cs.GR · 08-13",
      "url": "https://arxiv.org/abs/2608.12697v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "PlayWorld 世界模型基准",
      "sum": "PlayWorld 提出用智能体玩家在长时程目标下评测世界模型的基准。",
      "ta": "世界模型评测基准对游戏 AI 与模拟环境有参考，可关注其任务设计。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.13552"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 毛发转羽毛工具",
      "sum": "免费 Blender 工具程序化将毛发梳理转换为羽毛，效果蓬松自然。",
      "ta": "毛发转羽毛是植被与生物资产管线的实用技巧，值得收藏工具与流程。",
      "src": "80 Level · 08-13",
      "url": "https://80.lv/articles/this-free-blender-tool-procedurally-converts-hair-grooms-into-feathers/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Spline Architect GPU 实例化",
      "sum": "Spline Architect 新版本支持沿样条线 GPU 实例化 100 万物体。",
      "ta": "样条线百万级实例化对道路、管线等程序化场景布置效率提升显著。",
      "src": "80 Level · 08-13",
      "url": "https://80.lv/articles/spline-architect-s-new-version-adds-gpu-instancing-for-1-000-000-objects-along-splines/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "AAA 级独立角色管线",
      "sum": "独立开发者用 Character Creator 5 与 iClone 8 构建 AAA 级角色流程。",
      "ta": "角色资产快速管线对 UE/Unity 项目有参考，可对比现有 DCC 流程。",
      "src": "80 Level · 08-13",
      "url": "https://80.lv/articles/unveiling-the-pipeline-behind-aaa-quality-indie-game-characters/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Wild Blue Skies 轨道射击",
      "sum": "开发者分享 Unity 中现代化轨道射击游戏与日式动画风格渲染。",
      "ta": "Cel-shaded 风格化渲染与 Unity 自定义系统对风格化项目有参考。",
      "src": "80 Level · 08-13",
      "url": "https://80.lv/articles/interview-how-wild-blue-skies-modernizes-classic-on-rails-shooters/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Netflix 关闭两家工作室",
      "sum": "Netflix 关闭《Oxenfree》开发商 Night School Studio 与 Moonloot Games。",
      "ta": "行业裁员与工作室关闭影响人才流动，可关注后续招聘市场变化。",
      "src": "Game Developer · 08-13",
      "url": "https://www.gamedeveloper.com/business/netflix-closing-oxenfree-developer-night-school-studio-and-moonloot-games"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "2K 新温哥华 AAA 工作室",
      "sum": "2K 宣布由 EA 老将 Aaron McHardy 领导新温哥华 AAA 工作室 Small Axe。",
      "ta": "新工作室成立可能带来引擎与工具链岗位机会，TA 可关注。",
      "src": "Game Developer · 08-13",
      "url": "https://www.gamedeveloper.com/business/2k-announces-new-vancouver-based-studio-led-by-ea-veteran"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "CDPR 裁员九人",
      "sum": "CD Projekt Red 在两个地点裁员九人，另有九人可能调岗。",
      "ta": "项目调整影响团队稳定性，对引擎与工具开发方向有间接影响。",
      "src": "Game Developer · 08-13",
      "url": "https://www.gamedeveloper.com/business/report-cd-projekt-red-has-laid-off-some-project-sirius-developers"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Saber 否认 AI 替代编剧",
      "sum": "Saber Interactive 澄清未用 AI 替代 Rideshare 编剧，Unigine 引擎亦未参与。",
      "ta": "AI 在游戏内容生产中的边界争议，TA 需关注工具链中 AI 的合规使用。",
      "src": "Game Developer · 08-13",
      "url": "https://www.gamedeveloper.com/business/saber-interactive-denies-replacing-writers-with-ai-on-rideshare-stimulator-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Twitch 默认训练 AI 模型",
      "sum": "Twitch 默认用用户内容训练亚马逊生成式 AI，退出选项不彻底。",
      "ta": "AI 训练数据政策影响创作者权益，TA 需留意平台内容使用条款。",
      "src": "Game Developer · 08-13",
      "url": "https://www.gamedeveloper.com/marketing/twitch-will-sacrifice-you-to-its-ai-overlord-whether-you-like-it-or-not"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏保存项目恢复",
      "sum": "UNC Greensboro 游戏保存项目在资金削减后恢复，强调平台不可信。",
      "ta": "游戏资产保存对行业长期有价值，TA 可关注存档与工具链标准化。",
      "src": "Game Developer · 08-13",
      "url": "https://www.gamedeveloper.com/production/library-video-game-preservation-project-back-on-track-after-trump-funding-cuts"
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
