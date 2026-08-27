// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月27日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>GLOSS 纹理填充新方法</em> / <em>非线性波与3D流双向耦合</em>。其余按重要性自动排序，红色优先。",
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
      "title": "GLOSS 纹理填充新方法",
      "sum": "GLOSS 提出几何局部自相似学习，忠实参考引导纹理填充。",
      "ta": "对材质/贴图工作流有直接参考价值，可探索几何细节保持的自动纹理生成。",
      "src": "arXiv · cs.GR · 08-26",
      "url": "https://arxiv.org/abs/2608.25461v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "非线性波与3D流双向耦合",
      "sum": "哈密顿方法实现非线性波与3D流双向耦合，提升水面模拟。",
      "ta": "对流体特效TA是硬核突破，可提升真实感水面模拟效率与精度。",
      "src": "arXiv · cs.GR · 08-25",
      "url": "https://arxiv.org/abs/2608.25203v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Godot 4.8 开发新特性",
      "sum": "Godot 4.8 新增3D轨迹节点、VisualShader节点组、多反弹AO等。",
      "ta": "关注引擎进展，多反弹AO和VisualShader节点组对TA工具链有参考。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/godot-4-8-development-is-in-full-swing/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Morrowind 重制版 RTX 预览",
      "sum": "NVIDIA 展示 Morrowind 重制版路径追踪效果与新资源。",
      "ta": "看路径追踪在经典场景的落地效果，对光照管线有参考。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/nvidia-shows-preview-of-the-elder-scrolls-iii-morrowind-remastered-with-rtx/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "暗黑奇幻角色雕刻流程",
      "sum": "Kang Jeong 详解 CLOCK SAINT 角色四段雕刻与材质金属度粗糙度管理。",
      "ta": "材质参数管理思路对角色贴图工作流有实操参考。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/sculpting-a-dark-fantasy-character-with-clockwork-elements-religious-imagery/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "CDPR 与暴雪合作",
      "sum": "巫师3重制版登陆Battle.net，并推出杰洛特皮肤。",
      "ta": "行业合作动态，对TA无直接技术关联。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/the-witcher-developer-cd-projekt-red-partners-with-blizzard/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Exodus 发售定档 2027",
      "sum": "前质量效应开发者科幻RPG Exodus 2027年4月发售。",
      "ta": "行业动态，关注其技术展示但无直接TA关联。",
      "src": "80 Level · 08-26",
      "url": "https://80.lv/articles/mass-effect-sci-fi-rpg-exodus-launch-date-2027/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "GTA6 大规模泄露事件",
      "sum": "Rockstar 回应 GTA6 大规模泄露，表示心碎。",
      "ta": "行业事件，对TA工作无直接技术影响。",
      "src": "Game Developer · 08-26",
      "url": "https://www.gamedeveloper.com/business/rockstar-games-heartbroken-by-grand-theft-auto-6-leaks"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "育碧推出玩家委员会",
      "sum": "育碧启动Player Council平台，邀请测试早期概念与原型。",
      "ta": "玩家反馈机制，对TA工作流无直接关联。",
      "src": "Game Developer · 08-26",
      "url": "https://www.gamedeveloper.com/business/ubisoft-debuts-player-council-platform-to-expand-early-game-development-feedback"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "世嘉多款新作试玩亮相",
      "sum": "世嘉在Gamescom 2026展出六款可玩新作。",
      "ta": "行业动态，关注新作技术表现但无直接TA关联。",
      "src": "PlayStation Blog · 08-26",
      "url": "https://blog.playstation.com/2026/08/26/sega-gameplay-updates-persona-4-revival-crazy-taxi-world-tour-total-war-warhammer-40000-and-more/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "星球大战策略新作试玩",
      "sum": "Bit Reactor与Respawn合作开发星战策略游戏Zero Company。",
      "ta": "策略游戏技术表现可关注，但无直接TA关联。",
      "src": "PlayStation Blog · 08-26",
      "url": "https://blog.playstation.com/2026/08/26/hands-on-report-star-wars-zero-company/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "卡普空双作试玩报告",
      "sum": "Gamescom试玩洛克人双重重置与龙之信条2暗黑觉醒。",
      "ta": "行业动态，无直接TA技术关联。",
      "src": "PlayStation Blog · 08-26",
      "url": "https://blog.playstation.com/2026/08/26/hands-on-report-mega-man-dual-override-and-dragons-dogma-2-dark-arisen/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PlayStation Plus 九月阵容",
      "sum": "九月PS Plus含狙击精英抵抗、MLB秀26等四款游戏。",
      "ta": "纯商业资讯，无TA关联。",
      "src": "PlayStation Blog · 08-26",
      "url": "https://blog.playstation.com/2026/08/26/playstation-plus-monthly-games-for-september-sniper-elite-resistance-mlb-the-show-26-wobbly-life-chained-echoes/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "赛博朋克枪斗游戏定档",
      "sum": "John Wick风格赛博朋克动作游戏确认明年发售。",
      "ta": "行业动态，无直接TA关联。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/this-cyberpunk-gun-fu-game-gets-a-confirmed-release-window/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Poppy Playtime 新合作游戏",
      "sum": "Poppy Playtime宇宙推出合作生存恐怖游戏Escape from Playtime。",
      "ta": "行业动态，无直接TA关联。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/poppy-playtime-universe-gets-a-new-survival-horror-co-op-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "天野喜孝艺术访谈",
      "sum": "最终幻想艺术家天野喜孝谈视觉风格、跨媒介创作与建议。",
      "ta": "艺术风格参考，对TA审美有启发但非技术。",
      "src": "80 Level · 08-26",
      "url": "https://80.lv/articles/interview-yoshitaka-amano-on-creating-art-that-transcends-games-anime-and-generations/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "演员蒂姆·库里去世",
      "sum": "演员蒂姆·库里去世，享年80岁，曾参与多款游戏。",
      "ta": "行业悼念，无TA技术关联。",
      "src": "Game Developer · 08-26",
      "url": "https://www.gamedeveloper.com/audio/obituary-actor-tim-curry-celebrated-for-his-work-in-games-has-passed-at-age-80"
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
