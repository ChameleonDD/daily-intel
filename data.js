// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月22日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>Fab夏季大促开启</em> / <em>扩散Transformer多模态区域控制</em> / <em>UV空间神经融合人脸重建</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "biz",
      "imp": "lo",
      "title": "Fab夏季大促开启",
      "sum": "Fab商城数万资产最高70%折扣，持续至7月29日。",
      "ta": "可趁促销囤积材质、角色包等素材，但需注意资产质量与项目兼容性。",
      "src": "Unreal Engine · 07-21",
      "url": "https://www.unrealengine.com/news/the-fab-summer-mega-sale-is-now-on"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "扩散Transformer多模态区域控制",
      "sum": "提出Appearance Pointers，实现材质、对象身份等精确区域控制。",
      "ta": "对材质生成和纹理区域控制有参考价值，可能简化贴图工作流。",
      "src": "arXiv · cs.GR · 07-21",
      "url": "https://arxiv.org/abs/2607.19344v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "UV空间神经融合人脸重建",
      "sum": "UVFaceFusion实现多视角拓扑一致的人脸重建，适用于数字人。",
      "ta": "直接关联数字人制作管线，可提升面部资产重建效率与一致性。",
      "src": "arXiv · cs.GR · 07-21",
      "url": "https://arxiv.org/abs/2607.18798v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高效压缩神经高斯溅射体渲染",
      "sum": "ECoNGS提出压缩高斯原语用于交互式体数据可视化。",
      "ta": "对体积渲染和3D场景表示有启发，可能影响Niagara特效数据压缩。",
      "src": "arXiv · cs.GR · 07-20",
      "url": "https://arxiv.org/abs/2607.18466v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "交互式长时域世界建模",
      "sum": "AlayaWorld技术报告发布，聚焦长时域交互世界建模。",
      "ta": "与游戏世界模拟相关，但偏AI研究，暂不直接用于管线。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.18367"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "掩码视觉动作统一世界建模",
      "sum": "提出Masked Visual Actions方法，统一世界建模框架。",
      "ta": "对游戏AI行为建模有潜在参考，但偏学术，需跟踪后续应用。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.19343"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "皮克斯裁员",
      "sum": "迪士尼裁员数百人，皮克斯受影响最大，尽管《玩具5》票房近10亿。",
      "ta": "行业动荡信号，但无直接技术关联，仅作背景了解。",
      "src": "80 Level · 07-21",
      "url": "https://80.lv/articles/pixar-hit-with-layoffs-despite-toy-story-5-s-massive-box-office-success/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender复古飞船动画",
      "sum": "Rui Huang展示Blender制作的复古未来风飞船动画。",
      "ta": "可参考Blender资产制作流程，但非引擎内实时渲染。",
      "src": "80 Level · 07-21",
      "url": "https://80.lv/articles/this-striking-spaceship-blender-animation-has-retro-futuristic-vibes/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "手绘策略游戏开发幕后",
      "sum": "Fika Productions分享Unity手绘策略游戏《Don't Kill Them All》开发细节。",
      "ta": "手绘风格与策略玩法结合，可借鉴其美术管线与优化思路。",
      "src": "80 Level · 07-21",
      "url": "https://80.lv/articles/behind-the-development-of-hand-drawn-strategy-game-don-t-kill-them-all/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "SimFest 2026模拟游戏促销",
      "sum": "模拟游戏节开启，最高90%折扣。",
      "ta": "促销信息，无技术价值，可忽略。",
      "src": "80 Level · 07-21",
      "url": "https://80.lv/articles/simfest-2026-don-t-miss-these-discounted-simulation-games/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Meshy 3D Agent对话式AI",
      "sum": "Meshy推出3D Agent，用对话式AI辅助游戏艺术家生成风格一致3D资产。",
      "ta": "直接关联3D资产生成管线，可提升原型阶段效率，但需评估风格控制精度。",
      "src": "80 Level · 07-21",
      "url": "https://80.lv/articles/meshy-wants-ai-to-feel-less-like-a-prompt-and-more-like-a-creative-partner/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Cliff Bleszinski谈工作室倒闭",
      "sum": "Boss Key创始人称过于优厚的发行协议反致工作室失败。",
      "ta": "行业经验教训，无技术关联。",
      "src": "80 Level · 07-21",
      "url": "https://80.lv/articles/cliff-bleszinski-says-his-studio-s-too-good-publishing-deal-worked-against-it/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前Wreckreation团队成立新工作室",
      "sum": "原团队组建新工作室，正在开发续作。",
      "ta": "行业动态，无直接技术价值。",
      "src": "Game Developer · 07-21",
      "url": "https://www.gamedeveloper.com/business/former-wreckreation-team-starts-up-new-studio-working-on-sequel"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏批评对开发者的启示",
      "sum": "长视频游戏设计分析获数百万播放，开发者可从中学习。",
      "ta": "设计方法论参考，非技术内容。",
      "src": "Game Developer · 07-21",
      "url": "https://www.gamedeveloper.com/design/what-developers-can-learn-from-this-generation-of-games-criticism"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Splitgate开发商裁员",
      "sum": "1047 Games在《Empulse》发布不到一个月后裁员。",
      "ta": "行业裁员潮延续，无技术关联。",
      "src": "Game Developer · 07-21",
      "url": "https://www.gamedeveloper.com/business/report-splitgate-dev-1047-games-lays-off-staff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Midgar Studio清算",
      "sum": "法国工作室Midgar Studio被母公司Nacon清算。",
      "ta": "行业动荡，无技术价值。",
      "src": "Game Developer · 07-21",
      "url": "https://www.gamedeveloper.com/business/edge-of-memories-developer-midgar-studio-is-being-liquidated"
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
