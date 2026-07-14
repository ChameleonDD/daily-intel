// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月14日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>LLM生成多场景游戏世界</em> / <em>3D生成缺陷自动评估</em> / <em>因子化3D网格生成</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "gfx",
      "imp": "mid",
      "title": "LLM生成多场景游戏世界",
      "sum": "MAGIC利用大语言模型实现多场景导航游戏世界的过渡感知生成。",
      "ta": "关注LLM如何辅助程序化关卡设计，减少手动编辑门户和室内布局的工作量。",
      "src": "arXiv · cs.GR · 07-13",
      "url": "https://arxiv.org/abs/2607.11594v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "3D生成缺陷自动评估",
      "sum": "3D-DefectBench研究VLM评估管线对细粒度3D生成缺陷的可靠性。",
      "ta": "了解自动化评估如何影响3D资产质量把控，对生成式工作流有参考价值。",
      "src": "arXiv · cs.GR · 07-12",
      "url": "https://arxiv.org/abs/2607.10826v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "因子化3D网格生成",
      "sum": "LATO.2用顶点和拓扑流分离建模，实现拓扑感知的网格生成。",
      "ta": "分离几何与拓扑的生成方法可能提升程序化建模的灵活性和质量。",
      "src": "arXiv · cs.GR · 07-12",
      "url": "https://arxiv.org/abs/2607.10623v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "文本引导网格变形",
      "sum": "PoseAlign通过文本引导变形生成姿态一致的3D网格。",
      "ta": "文本驱动变形工具可加速角色姿态调整，减少手动雕刻。",
      "src": "arXiv · cs.GR · 07-12",
      "url": "https://arxiv.org/abs/2607.10560v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "按需属性控制界面",
      "sum": "Spatula系统生成生成式内容迭代中的按需原位属性控制界面。",
      "ta": "探索交互式生成工作流，可能改善TA在引擎内调整参数的方式。",
      "src": "arXiv · cs.GR · 07-11",
      "url": "https://arxiv.org/abs/2607.10405v1"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "跨拓扑角色动作混合",
      "sum": "新框架实现任意角色拓扑间的神经动作混合，无需固定骨架。",
      "ta": "跨拓扑动作混合可简化不同角色间的动画复用，提升动画管线效率。",
      "src": "arXiv · cs.GR · 07-11",
      "url": "https://arxiv.org/abs/2607.10370v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "双人对话动作生成",
      "sum": "Learn2Chat通过交互调制单语先验生成双人对话动作。",
      "ta": "对话动作生成技术可能用于NPC交互动画，但当前与游戏管线距离较远。",
      "src": "arXiv · cs.GR · 07-11",
      "url": "https://arxiv.org/abs/2607.10313v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "推理时动作迁移",
      "sum": "Motion4Motion实现推理时跨主体动作迁移。",
      "ta": "动作迁移技术可快速复用动画数据，但需验证实时性能。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.11644"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5角色CGI广告流程",
      "sum": "SuperBlimp分享用Unreal Engine制作角色CGI广告的工作流。",
      "ta": "了解UE5在商业CGI中的实际管线，可借鉴角色制作与渲染技巧。",
      "src": "80 Level · 07-13",
      "url": "https://80.lv/articles/building-captain-itch-designing-a-character-led-cgi-campaign-with-unreal-engine/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 5.2雕刻新功能",
      "sum": "3D艺术家分享Blender 5.2新增雕刻功能的教程。",
      "ta": "Blender雕刻更新可能影响资产制作流程，但非UE5核心。",
      "src": "80 Level · 07-13",
      "url": "https://80.lv/articles/3d-artist-shares-a-tutorial-on-new-sculpting-features-in-blender-5-2/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender扁平角色技巧",
      "sum": "Blender短片导演解决广角镜头畸变的扁平角色制作方法。",
      "ta": "扁平角色技术可能启发风格化渲染或优化性能的替代方案。",
      "src": "80 Level · 07-13",
      "url": "https://80.lv/articles/this-3d-character-is-actually-flat-it-s-crazy/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "11 Bit Studios裁员20人",
      "sum": "《冰汽时代》开发商11 Bit Studios裁员20人，部分员工内部转岗。",
      "ta": "行业裁员动态，反映工作室成本压力，可能影响人才流动。",
      "src": "Game Developer · 07-13",
      "url": "https://www.gamedeveloper.com/business/the-alters-and-frostpunk-developer-11-bit-studios-is-laying-off-20-employees-"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "NVIDIA",
      "PlayStation Blog",
      "arXiv · cs.GR",
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Unreal Engine、Blender 开发博客、AMD GPUOpen。"
  },
  "xStale": false
};
