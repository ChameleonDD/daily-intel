// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年6月26日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>Vulkan描述符堆端到端支持</em> / <em>交互式路径追踪即时反馈</em> / <em>超网络神经纹理压缩</em>。其余按重要性自动排序，红色优先。",
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
      "imp": "hi",
      "rank": 1,
      "title": "Vulkan描述符堆端到端支持",
      "sum": "NVIDIA发布Vulkan描述符堆完整支持，简化着色器资源绑定。",
      "ta": "对UE5渲染管线开发者，这意味着更高效的多线程资源绑定和更低驱动开销。",
      "src": "NVIDIA · 06-25",
      "url": "https://developer.nvidia.com/blog/streamlining-resource-binding-with-end-to-end-support-for-vulkan-descriptor-heaps/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "交互式路径追踪即时反馈",
      "sum": "HiPR算法通过优先级调度像素更新，使路径追踪感觉像实时渲染。",
      "ta": "对实时渲染TA，这是实现电影级光照预览的关键技术，可集成到编辑器视口。",
      "src": "arXiv · cs.GR · 06-25",
      "url": "https://arxiv.org/abs/2606.26612v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "超网络神经纹理压缩",
      "sum": "用超网络学习紧凑纹理表示，实时解码还原PBR材质。",
      "ta": "可大幅降低纹理内存占用，对开放世界植被和材质流送有直接价值。",
      "src": "arXiv · cs.GR · 06-25",
      "url": "https://arxiv.org/abs/2606.26913v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "多视图图像提取神经材质",
      "sum": "NeuMatEx通过可微渲染从多视图图像提取空间变化神经材质。",
      "ta": "为扫描资产自动生成高质量PBR材质提供新路径，减少手工制作。",
      "src": "arXiv · cs.GR · 06-25",
      "url": "https://arxiv.org/abs/2606.26715v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3D高斯泼溅可视化分析",
      "sum": "Vis4GS工具可视化3DGS优化过程，解释高斯属性对伪影的影响。",
      "ta": "调试3DGS重建质量时，可定位具体高斯参数问题，提升资产质量。",
      "src": "arXiv · cs.GR · 06-25",
      "url": "https://arxiv.org/abs/2606.26985v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "单色制造保留外观精炼",
      "sum": "方法精炼生成3D网格，在单色打印中保留纹理视觉信息。",
      "ta": "对需要3D打印原型的TA，可减少纹理丢失导致的反复迭代。",
      "src": "arXiv · cs.GR · 06-25",
      "url": "https://arxiv.org/abs/2606.26850v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "城市街景Blender+Substance流程",
      "sum": "Pauline Ferrand分享可平铺纹理制作与顶点着色植物颜色变化。",
      "ta": "可平铺纹理和顶点着色技巧可直接用于UE5植被工具和材质层。",
      "src": "80 Level · 06-25",
      "url": "https://80.lv/articles/creating-an-immersive-urban-street-environment-using-blender-and-substance-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "诅咒骑士建模纹理分解",
      "sum": "Gábor Meggyesi详解盔甲、武器建模及毛发叙事用法。",
      "ta": "角色建模与毛发细节工作流可参考，但非核心TA技术。",
      "src": "80 Level · 06-25",
      "url": "https://80.lv/articles/breakdown-how-to-model-and-texture-a-cursed-knight-with-melancholic-vibes/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "石萨满角色幕后制作",
      "sum": "Mike-Amir El Frangi分享Spellcasters Chronicles角色制作过程。",
      "ta": "角色艺术流程参考，无新技术点。",
      "src": "80 Level · 06-25",
      "url": "https://80.lv/articles/check-out-how-spellcasters-chronicles-stone-shaman-was-made/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "130+毛发卡片资源包",
      "sum": "提供预制毛发卡片集合，可快速创建维京等风格发型。",
      "ta": "节省毛发制作时间，但非技术突破，仅资源推荐。",
      "src": "80 Level · 06-25",
      "url": "https://80.lv/articles/save-time-on-creating-hair-for-your-3d-characters-with-this-collection-of-130-hair-cards/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender暗黑风动画短片",
      "sum": "全人工制作的Blender动画短片，具有独特绘画风格。",
      "ta": "艺术风格参考，无技术细节。",
      "src": "80 Level · 06-25",
      "url": "https://80.lv/articles/dark-fantasy-inspired-animated-short-in-blender-with-unique-painterly-style/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Bungie大规模裁员",
      "sum": "Sony确认Bungie裁员，影响大部分命运团队和部分Marathon开发者。",
      "ta": "行业动荡可能影响UE5项目人才流动和外包市场。",
      "src": "80 Level · 06-25",
      "url": "https://80.lv/articles/bungie-hit-with-major-layoffs-impacting-most-of-the-destiny-team-and-more/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Meccha Chameleon两周700万销量",
      "sum": "捉迷藏游戏成为最新多人游戏爆款。",
      "ta": "市场趋势参考，无直接技术关联。",
      "src": "Game Developer · 06-25",
      "url": "https://www.gamedeveloper.com/business/meccha-chameleon-sells-7m-copies-in-first-two-weeks"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "VR工作室Combat Waffle裁员",
      "sum": "Ghosts of Tabor开发团队裁员，但仍看好VR未来。",
      "ta": "VR行业动态，可能影响UE5 VR项目生态。",
      "src": "Game Developer · 06-25",
      "url": "https://www.gamedeveloper.com/business/vr-dev-combat-waffle-studios-lays-off-staff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "34BigThings脱离Embracer独立",
      "sum": "意大利工作室从Embracer集团回购独立权。",
      "ta": "行业并购动态，无直接技术影响。",
      "src": "Game Developer · 06-25",
      "url": "https://www.gamedeveloper.com/business/italian-studio-34bigthings-regains-independence-from-embracer"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "万智牌竞技场开发者成功工会化",
      "sum": "尽管被指控干预，万智牌竞技场开发者成功成立工会。",
      "ta": "行业劳工动态，无技术关联。",
      "src": "Game Developer · 06-25",
      "url": "https://www.gamedeveloper.com/business/magic-the-gathering-arena-unionize-despite-allegations-of-interference"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "TensorRT多GPU推理扩展",
      "sum": "NVIDIA TensorRT支持多设备推理，扩展生成式AI跨GPU。",
      "ta": "对游戏AI推理性能有潜在影响，但非实时渲染核心。",
      "src": "NVIDIA · 06-25",
      "url": "https://developer.nvidia.com/blog/scaling-ai-inference-across-multiple-gpus-using-nvidia-tensorrt-with-multi-device-inference-support/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "折纸协同设计AI管线",
      "sum": "COrigami管线协同设计可折叠视觉识别折纸。",
      "ta": "与游戏3D资产生成无直接关联，仅泛AI。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.26299"
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
