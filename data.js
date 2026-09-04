// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月4日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>Capcom详解RE引擎刀剑战斗</em> / <em>UE5重现80年代动漫渲染</em> / <em>TileGS优化高斯溅射光栅化</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "Capcom详解RE引擎刀剑战斗",
      "sum": "Capcom访谈：RE引擎实时计算刀剑碰撞，含京都环境美术管线。",
      "ta": "RE引擎的实时物理与美术管线结合案例，对战斗特效与场景制作有直接参考价值。",
      "src": "80 Level · 09-03",
      "url": "https://80.lv/articles/how-capcom-built-onimushas-real-time-sword-combat-re-engine/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 2,
      "title": "UE5重现80年代动漫渲染",
      "sum": "Shapefarm用UE5自定义着色器与胶片特效，重现80-90年代动漫风格。",
      "ta": "自定义着色器与风格化后处理的实战案例，适合研究非写实渲染管线的实现路径。",
      "src": "Unreal Engine · 09-03",
      "url": "https://www.unrealengine.com/tech-blog/stepping-inside-a-retro-anime-inspired-game-a-look-into-the-rendering-of-orbitals"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "TileGS优化高斯溅射光栅化",
      "sum": "TileGS提出瓦片局部深度分箱，减少全局排序流量，提升3DGS渲染效率。",
      "ta": "3DGS光栅化新优化，直接关系实时渲染性能，值得深入评估其对管线的影响。",
      "src": "arXiv · cs.GR · 09-03",
      "url": "https://arxiv.org/abs/2609.03613v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3DGS实时调色编辑框架",
      "sum": "新框架支持3DGS基于调色板的实时颜色与亮度编辑，含独立色调曲线。",
      "ta": "为3DGS场景提供专业级调色工具，可能简化TA在场景后期色彩调整的工作流。",
      "src": "arXiv · cs.GR · 09-03",
      "url": "https://arxiv.org/abs/2609.03897v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "截断梯度提升3DGS鲁棒性",
      "sum": "TruncGradGS通过截断梯度更新，解决3DGS优化中的梯度消失问题。",
      "ta": "针对3DGS训练不稳定性的改进，对提升重建质量有潜在帮助，值得关注。",
      "src": "arXiv · cs.GR · 09-03",
      "url": "https://arxiv.org/abs/2609.03534v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "点云神经编辑表面一致性",
      "sum": "P-CORE提出自监督表面一致性方法，用于点云神经表示的非刚性编辑。",
      "ta": "点云表示的可编辑性增强，对TA在资产编辑与变形工作流中有潜在应用。",
      "src": "arXiv · cs.GR · 09-03",
      "url": "https://arxiv.org/abs/2609.03349v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "点云表示几何纹理同编",
      "sum": "PointGT实现点云表示的几何与纹理同步编辑，支持高保真重建。",
      "ta": "点云编辑新方案，可能简化TA对扫描资产的后期处理与修改流程。",
      "src": "arXiv · cs.GR · 09-03",
      "url": "https://arxiv.org/abs/2609.03341v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "UE5管线生成世界模型数据",
      "sum": "论文提出基于UE5的管线，为动作条件视频生成构建预训练数据。",
      "ta": "UE5用于合成训练数据，对TA探索AI辅助内容生成有直接参考意义。",
      "src": "arXiv · cs.GR · 09-03",
      "url": "https://arxiv.org/abs/2609.03557v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "相机条件世界模型奖励建模",
      "sum": "WorldReward提出为相机条件世界模型设计奖励建模方法。",
      "ta": "世界模型训练新方向，可能影响未来AI驱动的场景生成工具。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.03952"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "少步生成渲染新方法",
      "sum": "FlashRender通过相机控制视频MeanFlow实现少步生成渲染。",
      "ta": "生成式渲染新思路，可能对实时预览或快速迭代有潜在价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.03563"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "自然肩部衣物绑定技巧",
      "sum": "展示高质量过肩衣物绑定的权重绘制细节。",
      "ta": "衣物绑定权重示例，对角色特效与布料模拟有直接参考价值。",
      "src": "80 Level · 09-03",
      "url": "https://80.lv/articles/perfectly-natural-over-the-shoulder-clothing-rig/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox云游戏时长设上限",
      "sum": "Game Pass订阅者将不再享有Xbox云游戏无限时长。",
      "ta": "云游戏政策调整，可能影响TA对云端测试与部署策略的考量。",
      "src": "Game Developer · 09-03",
      "url": "https://www.gamedeveloper.com/cloud/xbox-to-cap-cloud-gaming-hours-for-game-pass-subscribers"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Supercell收购Metacore将完成",
      "sum": "Supercell收购Metacore交易预计本月完成，Merge Mansion将入其组合。",
      "ta": "行业并购动态，对游戏市场格局有间接影响。",
      "src": "Game Developer · 09-03",
      "url": "https://www.gamedeveloper.com/business/supercell-s-acquisition-of-metacore-expected-to-close-this-month"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "汉堡游戏原型资助启动",
      "sum": "Gamecity Hamburg启动第二轮原型资助，最高提供8万欧元。",
      "ta": "地区性资助机会，对独立开发者或小团队有参考价值。",
      "src": "Game Developer · 09-03",
      "url": "https://www.gamedeveloper.com/business/gamecity-hamburg-launches-second-round-of-prototype-funding"
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
