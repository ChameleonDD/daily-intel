// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年9月1日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>高斯辐射场刚体变形新法</em>。其余按重要性自动排序，红色优先。",
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
      "title": "高斯辐射场刚体变形新法",
      "sum": "提出ARAP约束下的3DGS变形方法，保持局部刚性，提升编辑质量。",
      "ta": "3DGS资产变形是TA做动态场景或角色特效的关键，此方法直接提升可控性。",
      "src": "arXiv · cs.GR · 08-30",
      "url": "https://arxiv.org/abs/2608.29538v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "扩散残差风格化高斯泼溅",
      "sum": "DReSG用扩散模型残差增强3DGS风格化，更好捕捉参考风格细节。",
      "ta": "风格化3DGS是快速迭代概念美术的利器，此方法能提升风格迁移的保真度。",
      "src": "arXiv · cs.GR · 08-29",
      "url": "https://arxiv.org/abs/2608.29048v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "视频驱动3D物体动画新法",
      "sum": "BLARM从视频中提取刚性运动基元，混合生成3D物体动画。",
      "ta": "从视频直接驱动3D资产动画，可加速动画预演和动态资产制作流程。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.31113"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "实时流式交互世界模型增强",
      "sum": "Matrix-Game 3.5引入Patch Memory，增强实时流式交互世界模型性能。",
      "ta": "实时交互世界模型是游戏AI和动态环境生成的前沿，值得关注其技术演进。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.29910"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "生成先于重建的潜变量模型",
      "sum": "GenFirst提出先生成后重建的端到端潜变量生成建模，提升稳定性。",
      "ta": "潜变量生成模型稳定性提升，可能影响未来3D资产生成工具的开发方向。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.29335"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "独立游戏全本地AI训练实践",
      "sum": "Atelico工作室用自家美术作品训练本地AI模型，分享10个原型开发经验。",
      "ta": "本地AI模型训练与美术资产结合，为工作室内部AI工具链提供真实案例。",
      "src": "80 Level · 08-31",
      "url": "https://80.lv/articles/interview-new-indie-game-uses-local-ai-model-trained-entirely-on-studio-s-own-artists/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender制作后室场景教程",
      "sum": "Blender Guru分享用Blender创建Backrooms场景的完整流程。",
      "ta": "环境搭建和程序化纹理技巧可借鉴，适合快速产出氛围场景。",
      "src": "80 Level · 08-31",
      "url": "https://80.lv/articles/blender-guru-shares-how-to-create-the-backrooms-using-blender/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "叙事沙盒开放世界RPG评测",
      "sum": "Rebel Wolves新作《血之黎明行者》获好评，或成年度游戏竞争者。",
      "ta": "关注其叙事沙盒设计，可能影响开放世界关卡和任务流程的构建方式。",
      "src": "80 Level · 08-31",
      "url": "https://80.lv/articles/the-blood-of-dawnwalker-is-a-special-kind-of-open-world-rpg-with-a-narrative-sandbox/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "2XKO角色特效制作解析",
      "sum": "Sonia Firsova展示《英雄联盟》格斗游戏2XKO的角色VFX制作细节。",
      "ta": "角色特效的材质和Shader设计是TA核心技能，此案例提供实战参考。",
      "src": "80 Level · 08-31",
      "url": "https://80.lv/articles/take-closer-look-at-character-vfx-made-for-2xko/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Unity闪耀特效制作展示",
      "sum": "展示用Unity制作的精细闪耀VFX效果，视觉上很魔幻。",
      "ta": "Unity特效案例可对比UE5工作流，关注粒子系统和Shader实现差异。",
      "src": "80 Level · 08-31",
      "url": "https://80.lv/articles/check-out-these-detailed-sparkling-vfx-made-with-unity/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender与Krita纹理绘制桥接",
      "sum": "新工具连接Blender场景与Krita绘制，支持投影式纹理绘画。",
      "ta": "纹理绘制工作流优化，可减少DCC工具切换成本，提升贴图制作效率。",
      "src": "80 Level · 08-31",
      "url": "https://80.lv/articles/this-tool-connects-blender-krita-for-texture-painting/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Steam 13TB数据泄露事件",
      "sum": "Steam公开端点泄露13TB数据，含Valve及EA、WB等厂商预发布内容。",
      "ta": "数据泄露可能暴露未发布引擎特性或资产，但需关注官方后续声明。",
      "src": "Game Developer · 08-31",
      "url": "https://www.gamedeveloper.com/pc/report-13tb-of-steam-data-leaked-after-users-access-publicly-accessible-endpoint-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Gamescom设备盗窃事件",
      "sum": "Gamescom独立展区遭窃，多家小团队笔记本电脑和Steam Deck被盗。",
      "ta": "行业展会安全事件，对独立开发者影响大，但无直接技术关联。",
      "src": "Game Developer · 08-31",
      "url": "https://www.gamedeveloper.com/business/indie-devs-and-publishers-hit-in-gamescom-equipment-thefts"
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
