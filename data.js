// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月27日 · 周一",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>可变形三角形Splatting</em>。其余按重要性自动排序，红色优先。",
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
      "title": "可变形三角形Splatting",
      "sum": "新方法用非凸三角形基元实现实时辐射场渲染，减少冗余基元。",
      "ta": "实时渲染新基元，可能替代高斯泼溅，值得关注其光栅化效率。",
      "src": "arXiv · cs.GR · 07-24",
      "url": "https://arxiv.org/abs/2607.22446v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "卷发模拟新方法",
      "sum": "将卷发分解为卷曲单元，结合杆基与几何细节进行仿真。",
      "ta": "对毛发模拟管线有参考价值，尤其卷发动态与性能平衡。",
      "src": "arXiv · cs.GR · 07-24",
      "url": "https://arxiv.org/abs/2607.22103v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "无训练自回归渲染一致性",
      "sum": "提出无需训练的自回归生成渲染一致性方法。",
      "ta": "可能影响实时渲染中的生成式管线，关注其与引擎集成潜力。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.21848"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender毛发绘制工具",
      "sum": "免费Blender工具，可沿引导线绘制毛发。",
      "ta": "辅助毛发资产制作，适合快速原型或低模管线。",
      "src": "80 Level · 07-25",
      "url": "https://80.lv/articles/this-blender-tool-lets-you-draw-hair-strands-along-guides/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "古墓丽影新作幕后细节",
      "sum": "展示《Tomb Raider: Legacy of Atlantis》开发幕后。",
      "ta": "可观察AAA级场景美术与资产制作流程。",
      "src": "80 Level · 07-25",
      "url": "https://80.lv/articles/check-out-these-behind-the-scenes-details-of-tomb-raider-legacy-of-atlantis/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏开发模拟器内置引擎",
      "sum": "《Let's Build a Dungeon》内置编辑器，模拟真实开发流程。",
      "ta": "编辑器设计思路可参考，但非直接技术工具。",
      "src": "80 Level · 07-25",
      "url": "https://80.lv/articles/building-a-game-development-simulator-with-a-game-engine-inside-it/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前PS高管欲复兴AA游戏",
      "sum": "Shawn Layden计划填补独立与3A之间的空白。",
      "ta": "行业趋势，可能影响中小团队资源分配。",
      "src": "80 Level · 07-24",
      "url": "https://80.lv/articles/former-playstation-boss-shawn-layden-plans-to-bring-back-aa-games/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Fable风格无职业RPG访谈",
      "sum": "《Forsaken Realms》开发者谈类Fable风格与无职业系统。",
      "ta": "美术风格参考，但无具体技术细节。",
      "src": "80 Level · 07-24",
      "url": "https://80.lv/articles/interview-buidling-a-fable-inspired-classless-rpg-where-you-re-not-the-hero/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "鹅鸭杀开发经验谈",
      "sum": "Gaggle Studios分享社交推理游戏成功经验。",
      "ta": "项目管理参考，非技术向。",
      "src": "80 Level · 07-24",
      "url": "https://80.lv/articles/staying-lean-how-we-built-the-world-s-biggest-social-deduction-game/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "370+扫描PBR材质包",
      "sum": "限时96%折扣，含370+扫描PBR材质。",
      "ta": "快速填充材质库，注意许可与性能。",
      "src": "80 Level · 07-24",
      "url": "https://80.lv/articles/get-over-370-scanned-pbr-materials-in-one-bundle/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Jackbox应对后疫情销售下滑",
      "sum": "CEO谈派对游戏如何度过疫情后销售低谷。",
      "ta": "行业商业策略，非技术相关。",
      "src": "Game Developer · 07-24",
      "url": "https://www.gamedeveloper.com/business/how-jackbox-games-navigated-the-post-pandemic-sales-slump-ft-mike-bilder"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "EA收购获欧盟批准等新闻",
      "sum": "沙特-led EA收购获批，Xbox测试广告流媒体等。",
      "ta": "行业宏观动态，无直接技术影响。",
      "src": "Game Developer · 07-24",
      "url": "https://www.gamedeveloper.com/business/saudi-led-ea-buyout-receives-eu-approval-xbox-trials-ad-supported-game-streaming-and-poinpy-is-eternal-patch-notes-62"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "CATS角色动画工具系统",
      "sum": "开源角色动画工具系统，支持绑定与动画。",
      "ta": "可集成到动画管线，关注其与UE5兼容性。",
      "src": "Tech-Artists · 07-27",
      "url": "https://www.tech-artists.org/t/cats-character-animation-tool-system/18471"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "FabricatorStudio免费管线",
      "sum": "Maya到Unreal免费管线，含绑定、AI蒙皮、导出。",
      "ta": "直接提升角色资产迭代效率，值得测试。",
      "src": "Tech-Artists · 07-24",
      "url": "https://www.tech-artists.org/t/fabricatorstudio-a-free-maya-to-unreal-character-pipeline-rigging-ai-skinning-export-and-more/18470"
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
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": ""
  },
  "xStale": false
};
