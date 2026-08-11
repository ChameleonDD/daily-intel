// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月11日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>混合神经微表面 BRDF 模型</em> / <em>ArtStation 与 Sketchfab 被收购</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "ai",
      "imp": "mid",
      "title": "Meta 开源 Muse Glimmer 模型",
      "sum": "Meta 发布 30B 开源权重模型 Muse Glimmer，支持 120K 上下文，面向本地 AI 工作流。",
      "ta": "关注其本地推理能力是否可被用于游戏内 AI 或工具链，但原文未提游戏关联。",
      "src": "NVIDIA · 08-10",
      "url": "https://developer.nvidia.com/blog/run-local-agentic-ai-workflows-with-metas-muse-glimmer-on-nvidia/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "无人深空十周年纪念",
      "sum": "Hello Games 庆祝《无人深空》发售十周年，回顾玩家首次登陆外星球的时刻。",
      "ta": "行业里程碑，可观察长线运营游戏的社区维护与内容更新策略。",
      "src": "PlayStation Blog · 08-10",
      "url": "https://blog.playstation.com/2026/08/10/no-mans-sky-developer-hello-games-celebrates-10-year-anniversary/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS 商店七月下载榜公布",
      "sum": "七月 PS5/PS4 下载榜由《使命召唤：黑色行动 II》领跑，PS VR2 榜首为《I Am Cat》。",
      "ta": "了解平台热销趋势，辅助判断主流玩家偏好与市场方向。",
      "src": "PlayStation Blog · 08-10",
      "url": "https://blog.playstation.com/2026/08/10/playstation-store-july-2026s-top-downloads/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "混合神经微表面 BRDF 模型",
      "sum": "提出混合神经-微表面 BRDF 模型，用于实时渲染中复杂光-表面交互的逼真外观。",
      "ta": "直接冲击实时渲染管线，可能替代传统微表面模型，需精读其性能与集成方式。",
      "src": "arXiv · cs.GR · 08-10",
      "url": "https://arxiv.org/abs/2608.09604v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "高保真机器人洗澡演示捕捉",
      "sum": "研究用于机器人辅助洗澡的高保真人形演示捕捉、重建与迁移，面向临床任务。",
      "ta": "非游戏图形学，但捕捉与重建技术或可迁移至角色动画数据采集。",
      "src": "arXiv · cs.GR · 08-10",
      "url": "https://arxiv.org/abs/2608.09127v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "视图自适应 2D 转 3D 渲染器",
      "sum": "提出视图自适应渲染器，用于视图一致的 2D 到 3D 生成，改进单图重建。",
      "ta": "关注其视图一致性算法，可能提升程序化生成资产的 3D 重建质量。",
      "src": "arXiv · cs.GR · 08-10",
      "url": "https://arxiv.org/abs/2608.09110v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Rodrigues 空间平滑动作拼接",
      "sum": "基于 Rodrigues 向量空间的拉普拉斯优化，实现平滑的动作拼接与过渡。",
      "ta": "对角色动画系统有价值，可改善动作混合与重定向的连续性。",
      "src": "arXiv · cs.GR · 08-10",
      "url": "https://arxiv.org/abs/2608.08986v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "自适应体积参数化方法",
      "sum": "提出自适应体积参数化，用于将 3-流形映射到简化体积域，扩展标准域限制。",
      "ta": "偏几何处理基础研究，对程序化生成或网格处理工具链有潜在参考。",
      "src": "arXiv · cs.GR · 08-09",
      "url": "https://arxiv.org/abs/2608.08672v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可微模拟反向扫描伴随法",
      "sum": "提出反向扫描伴随法用于块隐式模拟，避免内存随求解器深度增长。",
      "ta": "对物理模拟与可微渲染管线有启发，可提升基于梯度的优化效率。",
      "src": "arXiv · cs.GR · 08-09",
      "url": "https://arxiv.org/abs/2608.08559v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "QoI 感知科学有损压缩框架",
      "sum": "提出可视化分析框架 FZ-VIS，用于感知关键量的科学有损压缩。",
      "ta": "非游戏领域，但数据压缩策略或对大规模纹理/几何资源管理有参考。",
      "src": "arXiv · cs.GR · 08-09",
      "url": "https://arxiv.org/abs/2608.08386v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "额外视图辅助单图 3D 重建",
      "sum": "研究何时额外视图有助于单图 3D 重建，提出自适应机制利用附加图像。",
      "ta": "对程序化资产生成与扫描管线有参考，可提升重建鲁棒性。",
      "src": "arXiv · cs.GR · 08-08",
      "url": "https://arxiv.org/abs/2608.08132v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "医学体积高斯泼溅精确裁剪",
      "sum": "提出 XClipGS 精确半空间裁剪，用于医学体积高斯泼溅的交互渲染。",
      "ta": "裁剪算法可迁移至游戏体积渲染，提升高斯泼溅的编辑与可视化能力。",
      "src": "arXiv · cs.GR · 08-07",
      "url": "https://arxiv.org/abs/2608.07760v1"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 2,
      "title": "ArtStation 与 Sketchfab 被收购",
      "sum": "KitBash 收购 ArtStation 和 Sketchfab，与 KitBash3D 等整合，Epic 聚焦 UE6。",
      "ta": "资产平台易主可能影响 TA 工作流与资产分发生态，需关注后续整合。",
      "src": "80 Level · 08-10",
      "url": "https://80.lv/articles/artstation-and-sketchfab-have-been-acquired-by-kitbash/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "剧情驱动游戏《Sultan》推荐",
      "sum": "介绍一款剧情丰富、需玩家参与而非旁观的游戏《Sultan》。",
      "ta": "非技术向，但可观察叙事驱动游戏的设计趋势。",
      "src": "80 Level · 08-10",
      "url": "https://80.lv/articles/try-to-appease-sultan-by-doing-questionable-things-to-people-animals-in-this-story-rich-game/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "蜘蛛侠风格几何节点网枪",
      "sum": "使用 Blender 几何节点实现蜘蛛侠风格网枪效果，附制作展示。",
      "ta": "几何节点工作流参考，可启发程序化生成工具链设计。",
      "src": "80 Level · 08-10",
      "url": "https://80.lv/articles/spider-man-style-web-shooter-with-geometry-nodes/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 制作冻虾广告",
      "sum": "广告几乎完全用 Blender 和 After Effects 制作，未使用 AI。",
      "ta": "展示 Blender 在商业视觉中的潜力，可参考其材质与渲染技巧。",
      "src": "80 Level · 08-10",
      "url": "https://80.lv/articles/this-might-be-the-coolest-frozen-prawns-ad-ever/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5 免费 Box3D 插件",
      "sum": "Antonio Lattanzio 发布免费开源的 Box3D 集成插件，用于 Unreal Engine 5。",
      "ta": "免费开源插件，可能简化 UE5 中物理或几何工作流，值得试用。",
      "src": "80 Level · 08-10",
      "url": "https://80.lv/articles/try-this-box3d-integration-for-unreal-engine-5/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "修复模拟游戏《ReStory》回本",
      "sum": "怀旧修复模拟游戏《ReStory》12 小时内收回预算，成为 tinyBuild 最高评分游戏。",
      "ta": "独立游戏商业案例，可观察小众题材的市场表现。",
      "src": "80 Level · 08-10",
      "url": "https://80.lv/articles/nostalgic-repair-sim-restory-recouped-its-budget-in-12-hours/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Unity 奥日风格 2D 水体系统",
      "sum": "在 Unity 中创建奥日风格 2D 水体，涉及程序化生成、Shader 与渲染技巧。",
      "ta": "2D 水体 Shader 与程序化生成实现，对横版游戏 TA 有直接参考价值。",
      "src": "80 Level · 08-10",
      "url": "https://80.lv/articles/creating-ori-style-2d-water-system-in-unity/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Walmart 游戏网站裁员",
      "sum": "Walmart 支持的游戏网站 Restart 解雇其五人编辑团队。",
      "ta": "行业动态，反映游戏媒体商业环境变化。",
      "src": "Game Developer · 08-10",
      "url": "https://www.gamedeveloper.com/business/the-video-game-site-backed-by-walmart-has-laid-off-its-editorial-team"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "EVE 工作室聘前部长领导 AI",
      "sum": "EVE Online 工作室 Fenris Creations 聘请冰岛前部长领导自主 AI 工作。",
      "ta": "关注游戏公司 AI 战略布局，但原文未提具体技术细节。",
      "src": "Game Developer · 08-10",
      "url": "https://www.gamedeveloper.com/business/eve-online-studio-hires-former-icelandic-minister-to-lead-autonomous-ai-efforts"
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
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：HuggingFace。"
  },
  "xStale": false
};
