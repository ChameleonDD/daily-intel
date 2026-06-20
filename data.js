// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年6月20日 · 周六",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE6发布引发行业热议</em>。其余按重要性自动排序，红色优先。",
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
      "title": "Houdini泡沫模拟",
      "sum": "Houdini泡沫模拟效果逼真，视觉上令人满足。",
      "ta": "可作为Niagara流体特效的参考，研究泡沫生成算法。",
      "src": "80 Level · 06-19",
      "url": "https://80.lv/articles/this-houdini-foam-simulation-it-s-very-satisfying-to-watch/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "UEFN创作者分成超10亿",
      "sum": "Epic通过UEFN向独立创作者支付超10亿美元。",
      "ta": "UEFN生态成熟，可关注其工具链对TA工作流的影响。",
      "src": "80 Level · 06-19",
      "url": "https://80.lv/articles/epic-games-has-paid-out-over-usd1-billion-to-indie-creators-through-unreal-editor-for-fortnite/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "UE6发布引发行业热议",
      "sum": "开发者对UE5.8、UE6、MCP、AI工作流、Verse等公告反应不一。",
      "ta": "UE6路线图直接影响TA的管线规划，需深入评估新特性。",
      "src": "80 Level · 06-19",
      "url": "https://80.lv/articles/state-of-unreal-ue6-reactions-hype-skepticism-and-what-it-means-for-game-devs/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "Unity线框着色器",
      "sum": "一个使用真实拓扑的Unity线框效果着色器。",
      "ta": "可用于调试或风格化渲染，快速集成到Unity项目。",
      "src": "80 Level · 06-19",
      "url": "https://80.lv/articles/render-wireframe-effects-in-unity-with-this-shader/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Epic游戏商店将大改版",
      "sum": "Epic计划重构启动器，增加个性化、补丁说明等功能。",
      "ta": "商店改版可能影响UE分发渠道，但非核心技术关注点。",
      "src": "80 Level · 06-19",
      "url": "https://80.lv/articles/epic-s-roadmap-for-its-game-store-includes-overhauled-launcher/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Kabam裁员并合并LA办公室",
      "sum": "《漫威冠军之争》开发商Kabam裁员并整合洛杉矶办公室。",
      "ta": "行业裁员动态，但无直接技术关联。",
      "src": "Game Developer · 06-19",
      "url": "https://www.gamedeveloper.com/business/kabam-making-layoffs-after-choosing-to-consolidate-la-office"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏高管卷入秘密社团",
      "sum": "前Xbox总裁和Take-Two CEO被曝与Peter Thiel秘密会议有关。",
      "ta": "行业八卦，无技术价值。",
      "src": "Game Developer · 06-19",
      "url": "https://www.gamedeveloper.com/business/report-former-xbox-president-sarah-bond-and-take-two-ceo-strauss-zelnick-involved-in-peter-thiel-backed-secret-society"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "R星法律挫折与FF税收优惠",
      "sum": "R星法律受挫、最终幻想税收优惠、PlayStation用AI替代PC。",
      "ta": "行业新闻汇总，无直接技术细节。",
      "src": "Game Developer · 06-19",
      "url": "https://www.gamedeveloper.com/business/rockstar-s-legal-setback-final-fantasy-tax-incentives-and-playstation-swaps-pc-for-ai-patch-notes-57"
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
