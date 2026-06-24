// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年6月24日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE 5.8 HMI模板发布</em>。其余按重要性自动排序，红色优先。",
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
      "title": "单图生成完整3D几何",
      "sum": "World Tracing：输入一张图，物体/场景/动态世界以完整几何浮现，每点追溯回像素。",
      "ta": "原文是单图到完整3D几何的生成，若稳定，对快速搭场景白模和资产原型有直接价值。",
      "handle": "@BenMildenhall",
      "who": "Ben Mildenhall · 06-12",
      "url": "https://x.com/HaoZhang623/status/2065455226791002472"
    },
    {
      "cat": "x",
      "imp": "hi",
      "title": "World Labs连发3篇3D论文",
      "sum": "NeRF 一作放出三篇用大规模生成模型加 2D 先验生成 3D 内容的研究。",
      "ta": "原文是文生3D/重建的最新一手研究，直接对应你关注的资产生成方向，值得追原项目页。",
      "handle": "@BenMildenhall",
      "who": "Ben Mildenhall · 06-12",
      "url": "https://x.com/theworldlabs/status/2065466830052098058"
    },
    {
      "cat": "x",
      "imp": "hi",
      "title": "全AI生成可玩游戏",
      "sum": "Aaltonen 转发：100% AI 生成资产与玩法代码，一名无编程经验设计师约一周做成。",
      "ta": "原文讲的是单人用 AI 生成全套游戏资产+代码的实例，是生成式 AI 进生产管线的极端实证，值得看其边界。",
      "handle": "@SebAaltonen",
      "who": "Sebastian Aaltonen · 06-17",
      "url": "https://x.com/SebAaltonen/status/2067202311168954689"
    },
    {
      "cat": "x",
      "imp": "mid",
      "title": "Codex群驱动机器人研究",
      "sum": "Jim Fan 发布 ENPIRE：给 8 个 Codex agent 一队机器人加 GPU 和 token 预算自主解任务。",
      "ta": "原文是 AI agent 集群自主驱动真实机器人的实验，关注“AI 进开发/生产管线”的可看其调度思路。",
      "handle": "@DrJimFan",
      "who": "Jim Fan · 06-16",
      "url": "https://x.com/DrJimFan/status/2066921736369766762"
    },
    {
      "cat": "x",
      "imp": "mid",
      "title": "UE5 State Trees敌人生成",
      "sum": "Tom Looman 给开源项目 Orion 加了 C++ 加蓝图混合做的 State Trees 敌人生成总管。",
      "ta": "原文是 UE5 State Trees 的实操案例，做敌人波次/生成调度可直接对照他的开源实现。",
      "handle": "@t_looman",
      "who": "Tom Looman · 06-08",
      "url": "https://x.com/t_looman/status/2063965540297605174"
    },
    {
      "cat": "x",
      "imp": "lo",
      "title": "UE5两款AO插件上Fab",
      "sum": "Aaltonen 转发：HBAO+ 与 GT-VBAO 两款 UE5 环境光遮蔽插件上架 Fab，HBAO+ 个人免费。",
      "ta": "原文是两款 UE5 AO 插件发布消息，做场景近景细节/接触阴影时可收一条试用。",
      "handle": "@SebAaltonen",
      "who": "转发 · 06-17",
      "url": "https://x.com/ymt3d/status/2067067075584229831"
    },
    {
      "cat": "x",
      "imp": "lo",
      "title": "Gemini视频模型登顶Arena",
      "sum": "转发：Gemini Omni Flash 在 Video Arena 文生/图生视频双榜登顶，大幅领先 Veo。",
      "ta": "原文是转发的榜单信息，视频生成模型迭代速度可作为“AI 生成素材”能力上限的参照。",
      "handle": "@poolio",
      "who": "转发 · 06-11",
      "url": "https://x.com/arena/status/2065112147093545333"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "UE 5.8 HMI模板发布",
      "sum": "Epic发布UE 5.8 HMI模板与数据缩减管线插件，加速HMI开发。",
      "ta": "UE 5.8新模板与插件可能影响TA在车载/工业HMI项目的渲染管线与数据流设计。",
      "src": "Unreal Engine · 06-23",
      "url": "https://www.unrealengine.com/news/unreal-engine-hmi-template-available-now"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "单图即时高斯编码头像",
      "sum": "FiCA从单张肖像图前馈生成可驱动的高斯编码头像。",
      "ta": "单图生成可驱动3D头像，对角色管线与实时面部动画有潜在应用。",
      "src": "arXiv · cs.GR · 06-23",
      "url": "https://arxiv.org/abs/2606.24232v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "文本嵌入语义融合对齐",
      "sum": "提出Token-to-Token对齐方法，改进文本到图像生成的语义混合。",
      "ta": "文本嵌入对齐技术可提升材质/贴图生成中语义控制的精确度。",
      "src": "arXiv · cs.GR · 06-22",
      "url": "https://arxiv.org/abs/2606.24021v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "扩散Transformer全面评估",
      "sum": "DiffusionBench提出扩散Transformer模型的全面评估基准。",
      "ta": "扩散Transformer评估基准可能影响未来实时生成模型的选型与优化。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.24888"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "FLUX3D高保真高斯生成",
      "sum": "FLUX3D用扩散对齐稀疏表示生成高保真3D高斯场。",
      "ta": "3D高斯生成新方法，对程序化资产与场景生成管线有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.24874"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Epic首席布道师离职",
      "sum": "Epic Games首席布道师Sjoerd De Jong工作12年后离职。",
      "ta": "Epic核心人物离职可能影响引擎社区策略与开发者关系。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/lead-evangelist-sjoerd-de-jong-leaves-epic-games-after-12-years/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ILM灯光TD谈VFX挑战",
      "sum": "ILM资深灯光TD分享动画与实拍VFX灯光差异及全息灯光工作流。",
      "ta": "全息投影灯光与渲染效率平衡经验，对TA在特效灯光设计有启发。",
      "src": "80 Level · 06-23",
      "url": "https://80.lv/articles/ilm-s-senior-lighting-td-on-vfx-challenges-building-hologram-lighting-for-transformers-one-entering-the-industry/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender菜单设计工具",
      "sum": "PieMaster工具让用户在Blender中自定义菜单。",
      "ta": "Blender工作流小工具，可提升TA日常DCC操作效率。",
      "src": "80 Level · 06-23",
      "url": "https://80.lv/articles/design-your-own-menus-in-blender-with-this-tool/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "腾讯考虑退出日本工作室",
      "sum": "报道称腾讯正评估退出多个日本工作室，聚焦UGC平台。",
      "ta": "腾讯投资策略转向可能影响日本合作工作室的引擎技术选型。",
      "src": "Game Developer · 06-23",
      "url": "https://www.gamedeveloper.com/business/report-tencent-mulling-exits-from-multiple-japanese-studios"
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
