// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年6月18日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE5.8 正式发布</em> / <em>UE6 路线图公布</em> / <em>State of Unreal 2026 汇总</em>。其余按重要性自动排序，红色优先。",
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
      "title": "UE5.8 正式发布",
      "sum": "UE5.8 发布，支持更大世界、高保真角色、自定义植被和高速渲染。",
      "ta": "需立即评估新版本对植被工具、程序化生成及渲染管线的影响。",
      "src": "Unreal Engine · 06-18",
      "url": "https://www.unrealengine.com/news/unreal-engine-5-8-is-now-available"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 2,
      "title": "UE6 路线图公布",
      "sum": "Epic 宣布 UE6 将统一 Unreal Engine 和 UEFN，并公布愿景与时间线。",
      "ta": "引擎统一将影响未来工具链和开发流程，需关注迁移计划。",
      "src": "Unreal Engine · 06-17",
      "url": "https://www.unrealengine.com/news/the-road-to-ue-6"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 3,
      "title": "State of Unreal 2026 汇总",
      "sum": "State of Unreal 2026 公布 UE6 愿景、UE5.8 发布、开源版本控制 Lore 等。",
      "ta": "一站式了解引擎生态重大更新，包括版本控制工具开源。",
      "src": "Unreal Engine · 06-17",
      "url": "https://www.unrealengine.com/news/state-of-unreal-2026-top-news-from-the-show"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5 学习内容：环境与光照",
      "sum": "五月免费学习内容涵盖 UE5 电影级环境工作流、Substrate 玻璃材质等。",
      "ta": "Substrate 玻璃材质教程对材质/Shader 性能优化有直接参考价值。",
      "src": "Unreal Engine · 05-29",
      "url": "https://www.unrealengine.com/learning/mays-epic-learning-content-environments-lighting-and-more"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "NBA THE RUN 使用 UE5 开发",
      "sum": "Play by Play Studios 分享使用 UE5 开发风格化 3v3 篮球游戏的经验。",
      "ta": "可了解 UE5 在风格化体育游戏中的实际应用和优化策略。",
      "src": "Unreal Engine · 05-28",
      "url": "https://www.unrealengine.com/developer-interviews/built-with-ue5-nba-the-run-looks-to-bring-back-the-golden-age-of-basketball-video-games"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "NVIDIA ACE 游戏代理 SDK 发布",
      "sum": "NVIDIA 发布 ACE Game Agent SDK 及 UE5 插件，用于构建设备端 AI 同伴。",
      "ta": "可探索 AI 同伴在游戏中的实时集成，但需注意性能开销。",
      "src": "NVIDIA · 06-16",
      "url": "https://developer.nvidia.com/blog/build-on-device-ai-companions-with-the-nvidia-ace-game-agent-sdk-and-unreal-engine-5-plugins/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "AMD 开源几何压缩标准 DGF",
      "sum": "AMD 与三星合作推出 Vulkan 扩展 DGF，压缩几何数据以减少光线追踪内存和延迟。",
      "ta": "对实时渲染中几何压缩和光线追踪性能有直接影响，值得研究。",
      "src": "AMD GPUOpen · 05-07",
      "url": "https://gpuopen.com/learn/amd-dgf-an-open-geometry-compression-standard/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "AMD DGF SuperCompression 发布",
      "sum": "AMD DGF SuperCompression 进一步压缩几何文件，支持快速解码为 DGF 块或传统 meshlet。",
      "ta": "可提升跨设备几何部署效率，对程序化生成和 LOD 管理有潜在价值。",
      "src": "AMD GPUOpen · 05-07",
      "url": "https://gpuopen.com/learn/introducing-amd-dgf-supercompression/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "AMD 开发者工具套件更新",
      "sum": "Radeon Developer Tool Suite 更新，支持着色器源码查看、指令级分歧指标等。",
      "ta": "着色器源码查看和分歧指标对 Shader 性能分析和优化非常实用。",
      "src": "AMD GPUOpen · 06-11",
      "url": "https://gpuopen.com/learn/radeon-developer-tool-suite-shader-source-code/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "AMD Schola v2.1 增强 UE 集成",
      "sum": "AMD Schola v2.1 加深 UE 集成，新增 StateTree 支持、分布式训练等。",
      "ta": "StateTree 支持可能影响 AI 行为树工作流，需关注与 UE 的整合细节。",
      "src": "AMD GPUOpen · 05-19",
      "url": "https://gpuopen.com/learn/announcing-schola-v2-1/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RDNA 4 WMMA 指南发布",
      "sum": "AMD 发布 RDNA 4 WMMA 指南，涵盖矩阵转置、低精度 GEMM 优化等。",
      "ta": "对 GPU 计算着色器优化有参考价值，但需 RDNA 4 硬件支持。",
      "src": "AMD GPUOpen · 06-02",
      "url": "https://gpuopen.com/learn/wmma-guide-amd-rdna-4-gpus-part-1/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时神经透明度渲染加速",
      "sum": "STAR-NT 提出时空加速框架，提升实时神经顺序无关透明度渲染性能。",
      "ta": "对透明物体渲染性能优化有潜在价值，尤其适合移动端。",
      "src": "arXiv · cs.GR · 06-15",
      "url": "https://arxiv.org/abs/2606.16747v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态高斯泼溅部分表示研究",
      "sum": "研究动态高斯压缩在不完整传输下的渲染，处理时空区域缺失问题。",
      "ta": "对实时动态场景的渐进式渲染和带宽优化有参考意义。",
      "src": "arXiv · cs.GR · 06-15",
      "url": "https://arxiv.org/abs/2606.17212v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "动态 3D 头部编辑框架 Edit3DGS",
      "sum": "Edit3DGS 结合 2D 指令引导扩散与 3D 高斯泼溅，实现动态头部编辑。",
      "ta": "对角色面部动画和实时编辑技术有参考价值，但偏向研究阶段。",
      "src": "arXiv · cs.GR · 06-16",
      "url": "https://arxiv.org/abs/2606.17432v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Blender 5.2 纹理缓存优化",
      "sum": "Blender 5.2 LTS 中 Cycles 纹理缓存将大幅提升多纹理场景内存效率。",
      "ta": "对使用 Blender 进行资产制作或烘焙的 TA 有实际帮助。",
      "src": "Blender 开发博客 · 05-01",
      "url": "https://code.blender.org/2026/05/cycles-texture-cache/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 几何节点体积网格支持",
      "sum": "Blender 5.0 将显著增强几何节点对体积数据的支持。",
      "ta": "对程序化生成和特效工作流有潜在扩展，但需等待正式版。",
      "src": "Blender 开发博客 · 10-07",
      "url": "https://code.blender.org/2025/10/volume-grids-in-geometry-nodes/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 几何节点 Bundles 与 Closures",
      "sum": "Blender 5.0 引入几何节点中的 bundles 和 closures 概念。",
      "ta": "可能改变几何节点数据流组织方式，需关注后续文档。",
      "src": "Blender 开发博客 · 08-08",
      "url": "https://code.blender.org/2025/08/bundles-and-closures/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "一键 Maya-Blender 资产同步工具",
      "sum": "Tech-Artists 社区发布一键 Maya-Blender 资产同步工具。",
      "ta": "对跨 DCC 工作流的 TA 有实用价值，可减少手动迁移成本。",
      "src": "Tech-Artists · 06-12",
      "url": "https://www.tech-artists.org/t/i-made-a-one-click-maya-blender-asset-sync/18411"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Houdini 真实地形工具发布",
      "sum": "Tech-Artists 社区发布替代 Mapbox-to-Houdini 的真实地形工具。",
      "ta": "对程序化地形生成工作流有直接帮助，可提升环境制作效率。",
      "src": "Tech-Artists · 05-24",
      "url": "https://www.tech-artists.org/t/real-world-terrain-for-houdini-replaces-mapbox-to-houdini/18374"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "UE5.6 风格化传送门 Shader 求助",
      "sum": "Tech-Artists 社区讨论 UE5.6 风格化传送门 Shader，受《瑞奇与叮当》启发。",
      "ta": "对风格化 Shader 开发有参考价值，可学习社区实现思路。",
      "src": "Tech-Artists · 06-03",
      "url": "https://www.tech-artists.org/t/featured-ue5-6-stylized-portal-shader-help-ratchet-clank-inspired/18393"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Maya 皮肤权重复制工具发布",
      "sum": "SkinPassVtx 免费 Maya Python 工具，可在指定顶点选择间复制蒙皮权重。",
      "ta": "对角色绑定和蒙皮工作流有实用价值，提升权重调整效率。",
      "src": "Tech-Artists · 06-03",
      "url": "https://www.tech-artists.org/t/skinpassvtx-free-maya-python-tool-to-copy-skin-weights-between-specific-vertex-selections-across-meshes/18385"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "《Saros》VFX 技术解析",
      "sum": "Housemarque 分享《Saros》从 NGP 到 Graphite 的 VFX 技术演进。",
      "ta": "可了解实时体素化等高级 VFX 技术在 UE5 中的实现。",
      "src": "PlayStation Blog · 06-17",
      "url": "https://blog.playstation.com/2026/06/17/the-vfx-tech-behind-saros-from-ngp-to-graphite/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "《No Law》开放世界技术揭秘",
      "sum": "Neon Giant 展示 UE5 的 Nanite、Lumen、MegaLights 等打造密集赛博朋克城市。",
      "ta": "可学习 MegaLights 等新特性在大型开放世界中的实际应用。",
      "src": "80 Level · 06-18",
      "url": "https://80.lv/articles/how-no-law-s-developers-are-making-one-of-the-densest-open-worlds-in-new-cyberpunk-fps/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "《异形：隔离 2》UE5 开发细节",
      "sum": "开发者讨论 UE5 在续作中实现户外空间、恶劣天气和动态音频。",
      "ta": "可了解 UE5 在恐怖游戏氛围营造中的技术应用。",
      "src": "80 Level · 06-17",
      "url": "https://80.lv/articles/how-alien-isolation-2-expands-on-the-original-s-terrifying-atmosphere/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Houdini 原生运动匹配工具 GeoTracker",
      "sum": "Houdini 推出原生 GeoTracker（Beta），用于 matchmove 工作流。",
      "ta": "对 VFX 和虚拟制作工作流有潜在价值，可简化相机跟踪流程。",
      "src": "Tech-Artists · 05-08",
      "url": "https://www.tech-artists.org/t/native-matchmove-inside-houdini-geotracker-beta/18360"
    }
  ],
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
