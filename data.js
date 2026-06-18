// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年6月18日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE 5.8 正式发布</em> / <em>UE6 路线图公布</em> / <em>State of Unreal 2026 汇总</em>。其余按重要性自动排序，红色优先。",
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
      "title": "UE 5.8 正式发布",
      "sum": "UE 5.8 发布，支持更大世界、高保真角色、自定义植被，渲染速度与质量提升。",
      "ta": "需立即评估新版本对植被工具、程序化生成及渲染管线的影响。",
      "src": "Unreal Engine · 06-18",
      "url": "https://www.unrealengine.com/news/unreal-engine-5-8-is-now-available"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 2,
      "title": "UE6 路线图公布",
      "summary": "Epic 宣布 UE 与 UEFN 将统一为 UE6，并公布了愿景、过渡计划和时间线。",
      "ta": "引擎架构重大变革，需关注未来工具链整合对 TA 工作流的影响。",
      "src": "Unreal Engine · 06-17",
      "url": "https://www.unrealengine.com/news/the-road-to-ue-6",
      "sum": "UE6 路线图公布"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 3,
      "title": "State of Unreal 2026 汇总",
      "summary": "发布会公布 UE6 愿景、UE5.8 发布、开源版本控制 Lore、UEFN 生态更新。",
      "ta": "集中获取引擎未来方向与关键工具更新，影响长期技术选型。",
      "src": "Unreal Engine · 06-17",
      "url": "https://www.unrealengine.com/news/state-of-unreal-2026-top-news-from-the-show",
      "sum": "State of Unreal 2026 汇总"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "NVIDIA ACE 游戏智能体 SDK",
      "summary": "NVIDIA 发布 ACE Game Agent SDK 及 UE5 插件，支持设备端 AI 同伴。",
      "ta": "可探索在 UE5 中集成 AI 同伴的实时交互方案，但需评估性能开销。",
      "src": "NVIDIA · 06-16",
      "url": "https://developer.nvidia.com/blog/build-on-device-ai-companions-with-the-nvidia-ace-game-agent-sdk-and-unreal-engine-5-plugins/",
      "sum": "NVIDIA ACE 游戏智能体 SDK"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "AMD 开放几何压缩标准 DGF",
      "summary": "AMD 与三星合作推出 Vulkan 扩展 DGF，压缩几何数据以减少光线追踪内存与延迟。",
      "ta": "新几何压缩标准可能影响网格体存储与光线追踪性能，值得关注。",
      "src": "AMD GPUOpen · 05-07",
      "url": "https://gpuopen.com/learn/amd-dgf-an-open-geometry-compression-standard/",
      "sum": "AMD 开放几何压缩标准 DGF"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "AMD DGF 超级压缩 DGFS",
      "summary": "DGFS 进一步压缩 DGF 几何文件，支持快速解码为 DGF 块或传统网格体。",
      "ta": "可提升几何数据传输效率，对程序化生成与流送有潜在价值。",
      "src": "AMD GPUOpen · 05-07",
      "url": "https://gpuopen.com/learn/introducing-amd-dgf-supercompression/",
      "sum": "AMD DGF 超级压缩 DGFS"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "AMD Radeon 工具套件更新",
      "summary": "RGP 2.7 新增着色器源码查看、指令级分歧指标、扩展 PIX 标记支持。",
      "ta": "着色器调试与性能分析工具升级，有助于优化材质与特效性能。",
      "src": "AMD GPUOpen · 06-11",
      "url": "https://gpuopen.com/learn/radeon-developer-tool-suite-shader-source-code/",
      "sum": "AMD Radeon 工具套件更新"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "AMD Schola v2.1 更新",
      "summary": "Schola v2.1 加深 UE 集成，新增 StateTree 支持、分布式训练与 Minari 工作流。",
      "ta": "强化 UE 内 AI 训练与推理，对 TA 工具链与自动化测试有参考意义。",
      "src": "AMD GPUOpen · 05-19",
      "url": "https://gpuopen.com/learn/announcing-schola-v2-1/",
      "sum": "AMD Schola v2.1 更新"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "AMD RDNA 4 WMMA 指南",
      "summary": "三部分指南涵盖 WMMA 布局、矩阵转置、低精度 GEMM 融合，用于 Llama.cpp。",
      "ta": "GPU 计算优化技术，对 Niagara 流体或自定义着色器性能有参考价值。",
      "src": "AMD GPUOpen · 06-02",
      "url": "https://gpuopen.com/learn/wmma-guide-amd-rdna-4-gpus-part-1/",
      "sum": "AMD RDNA 4 WMMA 指南"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时神经透明度渲染加速",
      "summary": "STAR-NT 利用时空加速框架提升神经顺序无关透明度渲染性能。",
      "ta": "透明渲染新方法，可能改善半透明材质在移动端或旧硬件上的表现。",
      "src": "arXiv · cs.GR · 06-15",
      "url": "https://arxiv.org/abs/2606.16747v1",
      "sum": "实时神经透明度渲染加速"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态高斯泼溅部分表示",
      "summary": "研究动态高斯压缩在部分传输下的渲染，处理时空区域缺失问题。",
      "ta": "对实时流送与渐进式加载场景下的高斯泼溅渲染有参考意义。",
      "src": "arXiv · cs.GR · 06-15",
      "url": "https://arxiv.org/abs/2606.17212v1",
      "sum": "动态高斯泼溅部分表示"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态头部编辑框架 Edit3DGS",
      "summary": "结合 2D 指令扩散与 3D 高斯泼溅，实现动态 3D 头部编辑。",
      "ta": "可用于角色资产编辑与动画，但需评估实时性。",
      "src": "arXiv · cs.GR · 06-16",
      "url": "https://arxiv.org/abs/2606.17432v1",
      "sum": "动态头部编辑框架 Edit3DGS"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5 学习内容：环境与光照",
      "summary": "五月免费学习内容含 UE5 电影级环境工作流、Substrate 玻璃材质、旋转网格技巧。",
      "ta": "直接提升材质与环境制作技能，Substrate 玻璃教程对 TA 实用。",
      "src": "Unreal Engine · 05-29",
      "url": "https://www.unrealengine.com/learning/mays-epic-learning-content-environments-lighting-and-more",
      "sum": "UE5 学习内容：环境与光照"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "No Law 开放世界技术解析",
      "summary": "Neon Giant 展示 No Law 使用 Nanite、Lumen、MegaLights、Mass Framework 构建密集赛博朋克城市。",
      "ta": "了解 UE5 最新特性在大规模开放世界中的实际应用案例。",
      "src": "80 Level · 06-18",
      "url": "https://80.lv/articles/how-no-law-s-developers-are-making-one-of-the-densest-open-worlds-in-new-cyberpunk-fps/",
      "sum": "No Law 开放世界技术解析"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Alien: Isolation 2 UE5 技术",
      "summary": "续作使用 UE5、动态音频、户外空间与恶劣天气扩展恐怖氛围。",
      "ta": "UE5 在恐怖游戏中的环境与音频集成案例，对特效设计有参考。",
      "src": "80 Level · 06-17",
      "url": "https://80.lv/articles/how-alien-isolation-2-expands-on-the-original-s-terrifying-atmosphere/",
      "sum": "Alien: Isolation 2 UE5 技术"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Saros VFX 技术：NGP 到 Graphite",
      "summary": "Housemarque 详解 Saros 视觉特效技术演进，包括实时体素化与体积雾。",
      "ta": "VFX 管线深度技术分享，对粒子与体积特效实现有直接参考。",
      "src": "PlayStation Blog · 06-17",
      "url": "https://blog.playstation.com/2026/06/17/the-vfx-tech-behind-saros-from-ngp-to-graphite/",
      "sum": "Saros VFX 技术：NGP 到 Graphite"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "一键 Maya-Blender 资产同步",
      "summary": "社区分享一键同步 Maya 与 Blender 资产的工具。",
      "ta": "简化跨 DCC 资产传输，提升 TA 工作流效率。",
      "src": "Tech-Artists · 06-12",
      "url": "https://www.tech-artists.org/t/i-made-a-one-click-maya-blender-asset-sync/18411",
      "sum": "一键 Maya-Blender 资产同步"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini 真实地形工具",
      "summary": "新工具替代 Mapbox-to-Houdini，用于 Houdini 中生成真实世界地形。",
      "ta": "程序化地形生成工具更新，对植被与场景布局有直接帮助。",
      "src": "Tech-Artists · 05-24",
      "url": "https://www.tech-artists.org/t/real-world-terrain-for-houdini-replaces-mapbox-to-houdini/18374",
      "sum": "Houdini 真实地形工具"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini GeoTracker 测试版",
      "summary": "Houdini 原生匹配移动工具 GeoTracker 进入 Beta 阶段。",
      "ta": "简化 Houdini 内的摄像机跟踪与场景匹配流程。",
      "src": "Tech-Artists · 05-08",
      "url": "https://www.tech-artists.org/t/native-matchmove-inside-houdini-geotracker-beta/18360",
      "sum": "Houdini GeoTracker 测试版"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5.6 风格化传送门着色器",
      "summary": "社区分享 Ratchet & Clank 风格传送门着色器教程。",
      "ta": "直接可用的着色器技巧，适合风格化特效开发。",
      "src": "Tech-Artists · 06-03",
      "url": "https://www.tech-artists.org/t/featured-ue5-6-stylized-portal-shader-help-ratchet-clank-inspired/18393",
      "sum": "UE5.6 风格化传送门着色器"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Maya 皮肤权重复制工具",
      "summary": "免费 Maya Python 工具 SkinPassVtx，在顶点选择间复制蒙皮权重。",
      "ta": "简化角色绑定中的权重传递工作。",
      "src": "Tech-Artists · 06-03",
      "url": "https://www.tech-artists.org/t/skinpassvtx-free-maya-python-tool-to-copy-skin-weights-between-specific-vertex-selections-across-meshes/18385",
      "sum": "Maya 皮肤权重复制工具"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 5.2 纹理缓存优化",
      "summary": "Blender 5.2 LTS 中 Cycles 纹理缓存大幅降低多纹理场景内存占用。",
      "ta": "提升 Blender 渲染大场景时的内存效率，对资产预览有用。",
      "src": "Blender 开发博客 · 05-01",
      "url": "https://code.blender.org/2026/05/cycles-texture-cache/",
      "sum": "Blender 5.2 纹理缓存优化"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 5.0 几何节点体积网格",
      "summary": "Blender 5.0 几何节点将显著增强对体积数据的支持。",
      "ta": "程序化体积特效与植被工具的新可能性。",
      "src": "Blender 开发博客 · 10-07",
      "url": "https://code.blender.org/2025/10/volume-grids-in-geometry-nodes/",
      "sum": "Blender 5.0 几何节点体积网格"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 5.0 几何节点新特性",
      "summary": "引入 bundles 和 closures，以及新插孔形状，改变节点图语义。",
      "ta": "几何节点架构升级，影响程序化生成工作流。",
      "src": "Blender 开发博客 · 08-08",
      "url": "https://code.blender.org/2025/08/bundles-and-closures/",
      "sum": "Blender 5.0 几何节点新特性"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "GOALS 手持 PC 性能优化",
      "summary": "GOALS 利用 AMD Ryzen APU 和 ADLX SDK 降低功耗与噪声，保持竞技性能。",
      "ta": "手持设备性能优化案例，对移动端或低功耗渲染有参考。",
      "src": "AMD GPUOpen · 04-02",
      "url": "https://gpuopen.com/learn/how-goals-delivers-performance-handheld-pcs-part1/",
      "sum": "GOALS 手持 PC 性能优化"
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
