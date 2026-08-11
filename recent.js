// daily-intel 近期热点层 —— 由 run.py 自动累积，供「近期」入口翻阅。
// 与 data.js（仅今日新增）分离：data.js 是“今天有什么新的”，recent.js 是“近期攒了啥”。

window.INTEL_RECENT = {
  "updated": "2026-08-11 11:06",
  "cards": [
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Meta 开源 Muse Glimmer 模型",
      "sum": "Meta 发布 30B 开源权重模型 Muse Glimmer，支持 120K 上下文，面向本地 AI 工作流。",
      "ta": "关注其本地推理能力是否可被用于游戏内 AI 或工具链，但原文未提游戏关联。",
      "src": "NVIDIA · 08-10",
      "url": "https://developer.nvidia.com/blog/run-local-agentic-ai-workflows-with-metas-muse-glimmer-on-nvidia/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "无人深空十周年纪念",
      "sum": "Hello Games 庆祝《无人深空》发售十周年，回顾玩家首次登陆外星球的时刻。",
      "ta": "行业里程碑，可观察长线运营游戏的社区维护与内容更新策略。",
      "src": "PlayStation Blog · 08-10",
      "url": "https://blog.playstation.com/2026/08/10/no-mans-sky-developer-hello-games-celebrates-10-year-anniversary/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS 商店七月下载榜公布",
      "sum": "七月 PS5/PS4 下载榜由《使命召唤：黑色行动 II》领跑，PS VR2 榜首为《I Am Cat》。",
      "ta": "了解平台热销趋势，辅助判断主流玩家偏好与市场方向。",
      "src": "PlayStation Blog · 08-10",
      "url": "https://blog.playstation.com/2026/08/10/playstation-store-july-2026s-top-downloads/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "混合神经微表面 BRDF 模型",
      "sum": "提出混合神经-微表面 BRDF 模型，用于实时渲染中复杂光-表面交互的逼真外观。",
      "ta": "直接冲击实时渲染管线，可能替代传统微表面模型，需精读其性能与集成方式。",
      "src": "arXiv · cs.GR · 08-10",
      "url": "https://arxiv.org/abs/2608.09604v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "高保真机器人洗澡演示捕捉",
      "sum": "研究用于机器人辅助洗澡的高保真人形演示捕捉、重建与迁移，面向临床任务。",
      "ta": "非游戏图形学，但捕捉与重建技术或可迁移至角色动画数据采集。",
      "src": "arXiv · cs.GR · 08-10",
      "url": "https://arxiv.org/abs/2608.09127v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "视图自适应 2D 转 3D 渲染器",
      "sum": "提出视图自适应渲染器，用于视图一致的 2D 到 3D 生成，改进单图重建。",
      "ta": "关注其视图一致性算法，可能提升程序化生成资产的 3D 重建质量。",
      "src": "arXiv · cs.GR · 08-10",
      "url": "https://arxiv.org/abs/2608.09110v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Rodrigues 空间平滑动作拼接",
      "sum": "基于 Rodrigues 向量空间的拉普拉斯优化，实现平滑的动作拼接与过渡。",
      "ta": "对角色动画系统有价值，可改善动作混合与重定向的连续性。",
      "src": "arXiv · cs.GR · 08-10",
      "url": "https://arxiv.org/abs/2608.08986v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "自适应体积参数化方法",
      "sum": "提出自适应体积参数化，用于将 3-流形映射到简化体积域，扩展标准域限制。",
      "ta": "偏几何处理基础研究，对程序化生成或网格处理工具链有潜在参考。",
      "src": "arXiv · cs.GR · 08-09",
      "url": "https://arxiv.org/abs/2608.08672v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可微模拟反向扫描伴随法",
      "sum": "提出反向扫描伴随法用于块隐式模拟，避免内存随求解器深度增长。",
      "ta": "对物理模拟与可微渲染管线有启发，可提升基于梯度的优化效率。",
      "src": "arXiv · cs.GR · 08-09",
      "url": "https://arxiv.org/abs/2608.08559v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "QoI 感知科学有损压缩框架",
      "sum": "提出可视化分析框架 FZ-VIS，用于感知关键量的科学有损压缩。",
      "ta": "非游戏领域，但数据压缩策略或对大规模纹理/几何资源管理有参考。",
      "src": "arXiv · cs.GR · 08-09",
      "url": "https://arxiv.org/abs/2608.08386v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "额外视图辅助单图 3D 重建",
      "sum": "研究何时额外视图有助于单图 3D 重建，提出自适应机制利用附加图像。",
      "ta": "对程序化资产生成与扫描管线有参考，可提升重建鲁棒性。",
      "src": "arXiv · cs.GR · 08-08",
      "url": "https://arxiv.org/abs/2608.08132v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "医学体积高斯泼溅精确裁剪",
      "sum": "提出 XClipGS 精确半空间裁剪，用于医学体积高斯泼溅的交互渲染。",
      "ta": "裁剪算法可迁移至游戏体积渲染，提升高斯泼溅的编辑与可视化能力。",
      "src": "arXiv · cs.GR · 08-07",
      "url": "https://arxiv.org/abs/2608.07760v1"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 2,
      "title": "ArtStation 与 Sketchfab 被收购",
      "sum": "KitBash 收购 ArtStation 和 Sketchfab，与 KitBash3D 等整合，Epic 聚焦 UE6。",
      "ta": "资产平台易主可能影响 TA 工作流与资产分发生态，需关注后续整合。",
      "src": "80 Level · 08-10",
      "url": "https://80.lv/articles/artstation-and-sketchfab-have-been-acquired-by-kitbash/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "剧情驱动游戏《Sultan》推荐",
      "sum": "介绍一款剧情丰富、需玩家参与而非旁观的游戏《Sultan》。",
      "ta": "非技术向，但可观察叙事驱动游戏的设计趋势。",
      "src": "80 Level · 08-10",
      "url": "https://80.lv/articles/try-to-appease-sultan-by-doing-questionable-things-to-people-animals-in-this-story-rich-game/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "蜘蛛侠风格几何节点网枪",
      "sum": "使用 Blender 几何节点实现蜘蛛侠风格网枪效果，附制作展示。",
      "ta": "几何节点工作流参考，可启发程序化生成工具链设计。",
      "src": "80 Level · 08-10",
      "url": "https://80.lv/articles/spider-man-style-web-shooter-with-geometry-nodes/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 制作冻虾广告",
      "sum": "广告几乎完全用 Blender 和 After Effects 制作，未使用 AI。",
      "ta": "展示 Blender 在商业视觉中的潜力，可参考其材质与渲染技巧。",
      "src": "80 Level · 08-10",
      "url": "https://80.lv/articles/this-might-be-the-coolest-frozen-prawns-ad-ever/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5 免费 Box3D 插件",
      "sum": "Antonio Lattanzio 发布免费开源的 Box3D 集成插件，用于 Unreal Engine 5。",
      "ta": "免费开源插件，可能简化 UE5 中物理或几何工作流，值得试用。",
      "src": "80 Level · 08-10",
      "url": "https://80.lv/articles/try-this-box3d-integration-for-unreal-engine-5/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "修复模拟游戏《ReStory》回本",
      "sum": "怀旧修复模拟游戏《ReStory》12 小时内收回预算，成为 tinyBuild 最高评分游戏。",
      "ta": "独立游戏商业案例，可观察小众题材的市场表现。",
      "src": "80 Level · 08-10",
      "url": "https://80.lv/articles/nostalgic-repair-sim-restory-recouped-its-budget-in-12-hours/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Unity 奥日风格 2D 水体系统",
      "sum": "在 Unity 中创建奥日风格 2D 水体，涉及程序化生成、Shader 与渲染技巧。",
      "ta": "2D 水体 Shader 与程序化生成实现，对横版游戏 TA 有直接参考价值。",
      "src": "80 Level · 08-10",
      "url": "https://80.lv/articles/creating-ori-style-2d-water-system-in-unity/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Walmart 游戏网站裁员",
      "sum": "Walmart 支持的游戏网站 Restart 解雇其五人编辑团队。",
      "ta": "行业动态，反映游戏媒体商业环境变化。",
      "src": "Game Developer · 08-10",
      "url": "https://www.gamedeveloper.com/business/the-video-game-site-backed-by-walmart-has-laid-off-its-editorial-team"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "EVE 工作室聘前部长领导 AI",
      "sum": "EVE Online 工作室 Fenris Creations 聘请冰岛前部长领导自主 AI 工作。",
      "ta": "关注游戏公司 AI 战略布局，但原文未提具体技术细节。",
      "src": "Game Developer · 08-10",
      "url": "https://www.gamedeveloper.com/business/eve-online-studio-hires-former-icelandic-minister-to-lead-autonomous-ai-efforts"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "GPU加速轨道传播建模",
      "sum": "提出GPU加速的太阳辐射压高保真建模，用于航天器轨道传播。",
      "ta": "与游戏TA无关，仅作图形学高性能计算参考。",
      "src": "arXiv · cs.GR · 08-07",
      "url": "https://arxiv.org/abs/2608.07307v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "双变量场合并树精确计算",
      "摘要": "提出双变量场特征诱导合并树(TIMT)的精确计算方法，用于多变量数据特征选择。",
      "ta": "拓扑数据分析方法，与实时渲染或TA工作流无直接关联。",
      "src": "arXiv · cs.GR · 08-07",
      "url": "https://arxiv.org/abs/2608.07181v1",
      "sum": "双变量场合并树精确计算"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "稀疏采集真实到仿真转换",
      "sum": "提出双代理细化方法，提升稀疏采集下的真实到仿真场景重建效率。",
      "ta": "涉及场景重建与仿真，对程序化生成或虚拟环境构建有潜在参考价值。",
      "src": "arXiv · cs.GR · 08-07",
      "url": "https://arxiv.org/abs/2608.06827v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "不确定性感知世界模型导航",
      "sum": "提出不确定性感知的世界模型，用于空中图像目标导航任务。",
      "ta": "机器人导航领域，与游戏AI或实时渲染无直接关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.05597"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "AI生成C++代码质量剖析",
      "sum": "研究生产环境中AI生成C++代码的质量特征与分布。",
      "ta": "涉及AI代码生成质量，对工具链或脚本自动化有间接参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.06640"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频世界模型可寻址记忆",
      "sum": "提出可寻址记忆机制，增强视频世界模型的长期依赖建模能力。",
      "ta": "视频生成或世界模型技术，对动态场景模拟有潜在参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.07408"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "蜈蚣食人游戏",
      "sum": "一款以蜈蚣食人为主题的游戏介绍。",
      "ta": "游戏创意题材参考，与TA技术无直接关联。",
      "src": "80 Level · 08-08",
      "url": "https://80.lv/articles/this-game-has-you-playing-a-people-eating-centipede/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "资深TA招聘启事",
      "sum": "招聘10年以上AAA游戏及VFX经验的管线/技术美术支持。",
      "ta": "反映行业对资深TA技能需求，可作职业参考。",
      "src": "Tech-Artists · 08-08",
      "url": "https://www.tech-artists.org/t/pipeline-technical-art-support-10-yrs-aaa-games-vfx/18485"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "多模态生成式分词器",
      "sum": "KVAE 提出面向多模态生成模型的分词器家族。",
      "ta": "关注其 token 化方式是否可迁移到 3D 资产表征。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.05798"
    },
    {
      "cat": "ai",
      "imp": "hi",
      "rank": 1,
      "title": "多人世界模型共享状态",
      "sum": "MASS 提出多人世界模型，以权威共享状态驱动。",
      "ta": "对多人实时渲染的服务器权威状态同步有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.06257"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "MMO 盈利模式反思",
      "sum": "Bartle 谈虚拟世界起源、玩家契约与免费/付费设计。",
      "ta": "理解玩家动机有助于设计更健康的游戏内经济系统。",
      "src": "80 Level · 08-07",
      "url": "https://80.lv/articles/richard-bartle-mmo-monetization-virtual-worlds-players-express-themselves/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "育碧免费游戏领取",
      "sum": "汤姆克兰西游戏在 Ubisoft Connect 免费但玩家反馈领取困难。",
      "ta": "行业动态速览，与 TA 工作无直接关联。",
      "src": "80 Level · 08-07",
      "url": "https://80.lv/articles/tom-clancy-s-game-is-available-for-free-on-ubisoft-connect/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "猫武士游戏发布",
      "sum": "《猫武士》改编游戏今秋登陆 PC 与主机，含四族冒险。",
      "ta": "行业新作信息，与 TA 技术工作无直接关联。",
      "src": "80 Level · 08-07",
      "url": "https://80.lv/articles/warrior-cats-clans-of-the-forest-brings-novel-series-to-pc-console/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "游戏本地化要点",
      "sum": "开发者需了解与本地化团队合作以适配多语言。",
      "ta": "本地化流程与 TA 工作流无直接关联，速览即可。",
      "src": "Game Developer · 08-07",
      "url": "https://www.gamedeveloper.com/production/what-devs-need-to-know-about-localization-ft-concha-fernandez-alvarez-aurelie-perrin-and-guido-di-carlo"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "多视角几何先验提升3DGS重建",
      "sum": "利用多视角几何先验优化3D高斯泼溅重建，改善几何精度。",
      "ta": "对程序化生成资产或场景重建的几何质量提升有参考意义。",
      "src": "arXiv · cs.GR · 08-06",
      "url": "https://arxiv.org/abs/2608.06117v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "椭球体稀疏体渲染新方法",
      "sum": "提出基于椭球体的稀疏体渲染，结构感知原语学习提升效率。",
      "ta": "对大规模稀疏体积数据（如云、烟雾）的实时渲染有潜在优化价值。",
      "src": "arXiv · cs.GR · 08-06",
      "url": "https://arxiv.org/abs/2608.05564v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "复古风格现代管线适配",
      "sum": "Kidbash: Super Legend用Blender建模转Aseprite精灵图，实现复古视觉。",
      "ta": "了解Blender到2D精灵的转换流程，对风格化资产管线有启发。",
      "src": "80 Level · 08-06",
      "url": "https://80.lv/articles/interview-how-kidbash-super-legend-adapts-retro-style-graphics-with-a-modern-art-pipeline/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "生存恐怖FPS创作幕后",
      "summary": "《The Void》开发者分享受《迷雾》启发的生存恐怖FPS设计过程。",
      "ta": "可了解恐怖氛围营造与玩法设计结合，对特效叙事有参考。",
      "src": "80 Level · 08-06",
      "url": "https://80.lv/articles/the-void-how-to-create-a-survival-horror-fps-inspired-by-the-mist-movie/",
      "sum": "生存恐怖FPS创作幕后"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "2D复古与真人过场融合",
      "summary": "《Tenebris Somnia》融合2D复古美术与真人过场，分享制作方法。",
      "ta": "关注2D与实拍风格统一的技术处理，对混合媒体项目有参考。",
      "src": "80 Level · 08-06",
      "url": "https://80.lv/articles/creating-a-survival-horror-game-that-blends-a-2d-retro-style-and-live-action-cutscenes/",
      "sum": "2D复古与真人过场融合"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Halo工作室裁员承包商",
      "summary": "《Halo: Campaign Evolved》发售后，Halo Studios解雇长期承包商。",
      "ta": "行业动态速览，了解工作室人员变动。",
      "src": "Game Developer · 08-06",
      "url": "https://www.gamedeveloper.com/production/halo-studios-jettisons-long-serving-contractors-after-launch-of-halo-campaign-evolved",
      "sum": "Halo工作室裁员承包商"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Devolver欲退市独立发行",
      "summary": "Devolver认为公开交易与独立发行不兼容，计划退市。",
      "ta": "行业商业模式观察，对游戏发行生态有影响。",
      "src": "Game Developer · 08-06",
      "url": "https://www.gamedeveloper.com/business/devolver-wants-to-delist-because-indie-publishing-is-not-compatible-with-public-trading",
      "sum": "Devolver欲退市独立发行"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "ComfyUI材质同步插件",
      "summary": "ComfyUI-MaterialSync支持Blender、Maya和UE材质同步。",
      "ta": "对AI生成材质到引擎的流程有直接帮助，值得尝试。",
      "src": "Tech-Artists · 08-06",
      "url": "https://www.tech-artists.org/t/comfyui-materialsync-for-blender-maya-and-unrealengine/18483",
      "sum": "ComfyUI材质同步插件"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "跨现实投影与头显过渡研究",
      "sum": "研究用户在大规模投影与MR头显间跨现实对象与场景级过渡的感知。",
      "ta": "关注沉浸式展览中混合现实过渡的感知设计，对TA在跨平台视觉一致性上有参考价值。",
      "src": "arXiv · cs.GR · 08-05",
      "url": "https://arxiv.org/abs/2608.04971v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RORA：带关节的真实物体重建",
      "sum": "用NeRF和3DGS重建真实环境，并支持物体关节运动，缩小机器人学习模拟差距。",
      "ta": "3DGS结合关节物体重建，对程序化生成和交互式场景的资产制作有启发。",
      "src": "arXiv · cs.GR · 08-05",
      "url": "https://arxiv.org/abs/2608.04842v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "基于Splat的CT金属伪影消除",
      "sum": "通过紧凑衰减建模减少锥束CT中高衰减物体引起的金属伪影。",
      "ta": "Splat渲染在医学成像的应用，展示3DGS在非游戏领域的扩展潜力。",
      "src": "arXiv · cs.GR · 08-05",
      "url": "https://arxiv.org/abs/2608.04764v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "稀疏dToF传感器的稠密深度补全",
      "sum": "从稀疏直接飞行时间传感器生成稠密度量深度，提升恶劣条件下的鲁棒性。",
      "ta": "深度补全技术对实时渲染中的深度感知和特效交互有潜在应用。",
      "src": "arXiv · cs.GR · 08-05",
      "url": "https://arxiv.org/abs/2608.04737v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态高斯实现多视角面部手势动画",
      "sum": "用动态高斯重建逼真3D化身，兼顾面部细节和手部姿态。",
      "ta": "动态高斯在角色动画中的应用，对TA在角色渲染和动画管线有参考价值。",
      "src": "arXiv · cs.GR · 08-05",
      "url": "https://arxiv.org/abs/2608.04722v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "OutLangSplat：无人机户外语言高斯",
      "sum": "将开放词汇语言特征嵌入3DGS，扩展至无人机户外大规模场景理解。",
      "ta": "语言嵌入3DGS在户外场景的应用，对TA在场景理解和交互设计上有启发。",
      "src": "arXiv · cs.GR · 08-05",
      "url": "https://arxiv.org/abs/2608.04560v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "现代艺术中的不确定性量化",
      "sum": "文本生成视频模型对同一艺术品的多次生成差异被视为信号而非噪声。",
      "ta": "生成式AI的多样性分析，对TA在创意工具中的可控性设计有参考。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.04038v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "从叙事重建持久世界",
      "sum": "从叙事文本重建持久世界，用于叙事驱动的交互式体验生成。",
      "ta": "叙事驱动的世界生成，对TA在程序化内容生成和关卡设计上有潜在应用。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.04037v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "LLM个性化幻象与自我监控误导",
      "sum": "研究LLM如何虚构用户画像，并指出自我监控机制可能产生误导。",
      "ta": "AI个性化技术的局限性，对TA在AI驱动工具的用户建模有警示。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.04570"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "WorldCycle：长时程视频世界模型",
      "sum": "用自验证强化学习训练长时程视频世界模型，提升生成稳定性。",
      "ta": "视频世界模型的强化学习，对TA在动态场景模拟和特效预演有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.04964"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "HelloWorld：视频世界模型社交角色",
      "sum": "在视频世界模型中实现社交互动角色，增强交互体验的真实感。",
      "ta": "社交互动角色在视频模型中的实现，对TA在NPC行为和动画生成有启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.05070"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "UniWorld-View：大基线视图合成",
      "sum": "利用视频扩散模型实现大基线视图合成，提升视角生成的连贯性。",
      "ta": "视频扩散模型在视图合成中的应用，对TA在场景重建和虚拟拍摄有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.04701"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "SEED：AI驱动24/7社会模拟器",
      "sum": "Klang的SEED游戏用AI角色持续生活工作，即使玩家离线也塑造社会。",
      "ta": "AI NPC的持续模拟，对TA在大型开放世界中的角色行为系统有参考。",
      "src": "80 Level · 08-05",
      "url": "https://80.lv/articles/this-new-24-7-society-simulator-is-powered-by-thousands-of-ai-controlled-npcs/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Gunstoppable：速度即伤害的Roguelite",
      "sum": "CAGE Studios创始人分享移动射击游戏Gunstoppable的开发工具和设计理念。",
      "ta": "独立游戏开发工具链分享，对TA在快速原型和工具选型有参考。",
      "src": "80 Level · 08-05",
      "url": "https://80.lv/articles/gunstoppable-how-speed-is-damage-defined-a-roguelite-fps/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "博德之门3第三人称Mod体验",
      "sum": "增强版Native Camera Tweaks Mod让博德之门3以第三人称游玩。",
      "ta": "相机Mod的视角调整，对TA在相机系统和沉浸感设计上有参考。",
      "src": "80 Level · 08-05",
      "url": "https://80.lv/articles/baldur-s-gate-3-third-person-mod-makes-it-feel-like-a-different-game/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UV Flex：Blender UV岛编辑工具",
      "sum": "AlbertoFX的UV Flex提供交互式UV岛分割、合并和重塑功能。",
      "ta": "UV编辑工具集，对TA在材质贴图和UV布局优化上有实用价值。",
      "src": "80 Level · 08-05",
      "url": "https://80.lv/articles/split-merge-reshape-uv-islands-with-this-blender-toolset/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Secret Mode开设开发工作室",
      "sum": "发行商Secret Mode成立开发工作室以支持内部项目。",
      "ta": "行业动态，对TA了解发行商内部开发方向有参考。",
      "src": "Game Developer · 08-05",
      "url": "https://www.gamedeveloper.com/business/publisher-secret-mode-opens-development-studio-to-support-internal-projects"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "King拒绝员工集体谈判协议",
      "sum": "Candy Crush开发商King拒绝员工集体谈判协议，称现有福利更优。",
      "ta": "行业劳资动态，对TA了解游戏公司内部环境有参考。",
      "src": "Game Developer · 08-05",
      "url": "https://www.gamedeveloper.com/business/candy-crush-maker-king-has-declined-staff-s-collective-bargaining-agreement"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "欧洲政策制定者被敦促支持游戏业",
      "sum": "欧洲政策制定者被呼吁加大对本地游戏产业的支持力度。",
      "ta": "行业政策动态，对TA了解区域游戏产业环境有参考。",
      "src": "Game Developer · 08-05",
      "url": "https://www.gamedeveloper.com/production/policymakers-across-europe-told-to-do-more-to-support-game-industry"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "JoyAI 实时视频编辑模型",
      "sum": "自回归扩散模型实现实时开放式视频编辑，支持任意指令修改。",
      "ta": "视频编辑模型可辅助制作动态材质预览或快速迭代特效参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.03974"
    },
    {
      "cat": "ai",
      "imp": "hi",
      "title": "混元3D Buffalo 统一生成",
      "sum": "腾讯混元3D Buffalo 1.0发布，统一多模态3D生成、理解与编辑。",
      "ta": "统一3D生成与编辑模型可能重塑程序化资产生产管线，值得深入评估。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.02711"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "世界模型综述引路",
      "sum": "论文探讨世界模型领域现状与未来方向，涵盖生成与推理。",
      "ta": "世界模型进展或影响游戏内动态场景生成与NPC行为模拟。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.02713"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Unity地牢环境资产包",
      "sum": "资产合集含291个独特网格和478个预制件，用于构建地牢环境。",
      "ta": "可直接复用的地牢模块化资产，适合快速搭建关卡原型。",
      "src": "80 Level · 08-04",
      "url": "https://80.lv/articles/this-asset-collection-helps-you-build-dungeon-style-environments-in-unity/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "MetaHuman角色制作解析",
      "sum": "艺术家分享Ariadne角色制作，用MetaHuman调比例、处理3D扫描并转AI输出为ZBrush笔刷。",
      "ta": "MetaHuman与AI转笔刷流程对角色资产生产有直接参考价值。",
      "src": "80 Level · 08-04",
      "url": "https://80.lv/articles/creating-a-detailed-and-expressive-character-inspired-by-cretan-mycenaean-culture/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "游戏工作室弃用旧版控",
      "sum": "Diversion定位为Perforce和Git的现代替代，支持UE、Unity及大文件管线。",
      "ta": "版本控制工具演进影响大文件与协作流程，TA需关注兼容性。",
      "src": "80 Level · 08-04",
      "url": "https://80.lv/articles/game-studios-are-moving-beyond-legacy-version-control-and-here-s-why/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏行业困难基金募款",
      "sum": "开发者五天筹款13万美元，支持裁员同行，目标20万美元。",
      "ta": "行业裁员潮持续，关注对团队稳定与项目周期的影响。",
      "src": "Game Developer · 08-04",
      "url": "https://www.gamedeveloper.com/business/the-game-industry-hardship-fund-bundle-surpasses-130-000"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "腾讯Lightspeed LA裁员",
      "sum": "腾讯旗下Lightspeed LA裁员68人，因项目创意方向调整。",
      "ta": "项目方向变动可能影响技术栈选择与管线调整。",
      "src": "Game Developer · 08-04",
      "url": "https://www.gamedeveloper.com/business/tencent-owned-lightspeed-la-is-laying-off-staff"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "分层符号色彩寻址系统",
      "sum": "提出PTI，基于RGB立方体递归二分构建分层符号色彩寻址系统。",
      "ta": "关注其分层色彩组织方式，或可启发材质与调色工具的数据结构设计。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.02460v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "傅里叶潜空间扩散生成TPMS",
      "sum": "提出扩散框架，可控生成低残余平均曲率的三周期极小曲面结构。",
      "ta": "TPMS在程序化纹理与体积建模中有潜力，值得关注其可控性方法。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.02151v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "稀疏负采样加速大规模图布局",
      "sum": "提出SNAP-tFDP，用稀疏负采样实现大规模图布局的力导向放置。",
      "ta": "图布局算法或可用于程序化生成中的节点网络可视化与调试。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.01907v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "非线性光谱预处理纳米显微",
      "sum": "通过非线性光谱预处理，实现实验室级高保真叠层衍射纳米成像。",
      "ta": "成像技术虽非游戏直接相关，但或可启发离线渲染中的细节捕捉。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.01746v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "关键姿态锚定的流式手势生成",
      "sum": "提出StreamTalk，用关键姿态锚定实现流式共语手势生成，避免误差累积。",
      "ta": "实时角色动画领域相关，关键姿态锚定思路或可借鉴于动画状态机。",
      "src": "arXiv · cs.GR · 08-03",
      "url": "https://arxiv.org/abs/2608.01643v1"
    },
    {
      "cat": "ai",
      "imp": "hi",
      "rank": 2,
      "title": "自回归绑定模型适配植物骨架",
      "sum": "提出PlantRig，将自回归绑定模型适配到植物骨骼重建，处理非规范分支。",
      "ta": "植物程序化生成与绑定是本行方向，此方法或可简化植被资产制作流程。",
      "src": "arXiv · cs.GR · 08-02",
      "url": "https://arxiv.org/abs/2608.01072v1"
    },
    {
      "cat": "ai",
      "imp": "hi",
      "rank": 3,
      "title": "多智能体系统生成粒子特效",
      "sum": "提出ParticleGen，用多智能体系统自动化生成高质量粒子特效。",
      "ta": "粒子特效是TA核心工作，此系统或可显著降低特效制作门槛与成本。",
      "src": "arXiv · cs.GR · 08-01",
      "url": "https://arxiv.org/abs/2608.00629v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型基准测试WorldExam",
      "sum": "提出WorldExam基准，从外观到反应性评估世界模型能力。",
      "ta": "世界模型基准或可间接影响游戏AI与模拟环境的评估方法。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.02603"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "人体中心图像数据集合成管线",
      "sum": "提出Poplar，可扩展的以人为中心的图像数据集合成管线。",
      "ta": "合成数据管线或可用于生成训练TA工具所需的标注图像数据。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.00440"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "光遇艺术深度访谈",
      "sum": "thatgamecompany分享光遇的实时服务美术方向、Beyond引擎与Figma工作流。",
      "ta": "了解大型实时服务游戏的美术管线与工具链，对TA工作流设计有参考价值。",
      "src": "80 Level · 08-03",
      "url": "https://80.lv/articles/interview-a-deep-dive-into-the-art-of-sky-children-of-the-light-with-thatgamecompany/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "像素化水着色器效果奇特",
      "sum": "展示一款像素化风格的水着色器，视觉效果引人注目。",
      "ta": "像素化水效果或可启发风格化渲染中的水体表现。",
      "src": "80 Level · 08-03",
      "url": "https://80.lv/articles/this-pixelated-water-shader-looks-weirdly-fascinating/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Grabbit 2编辑器内物理模拟",
      "sum": "Grabbit 2在Unity编辑器内模拟物理，用于关卡设计与布景，处理碰撞。",
      "ta": "编辑器内物理模拟可提升关卡布景效率，对TA工具链有直接参考。",
      "src": "80 Level · 08-03",
      "url": "https://80.lv/articles/how-grabbit-2-simulates-physics-inside-the-unity-editor/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Houdini森林溪流模拟",
      "sum": "艺术家用Houdini制作森林溪流液体模拟，并分享创作过程。",
      "ta": "Houdini液体模拟案例，可参考其技术实现与艺术表现。",
      "src": "80 Level · 08-03",
      "url": "https://80.lv/articles/stunning-forest-stream-simulation-made-with-houdini/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "弹性曲线几何力学新解",
      "sum": "论文探讨弹性杆平衡态曲线，与力学、几何及计算机图形学深度关联。",
      "ta": "弹性曲线是布料/头发模拟的数学基础，可关注其约束求解新思路。",
      "src": "arXiv · cs.GR · 07-31",
      "url": "https://arxiv.org/abs/2607.29654v1"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "title": "交互式生成运动编辑",
      "sum": "提出基于调度修复的交互式生成运动编辑，支持大规模结构修改。",
      "ta": "直接命中TA动画工作流，可大幅提升动作库修改效率，值得精读。",
      "src": "arXiv · cs.GR · 07-31",
      "url": "https://arxiv.org/abs/2607.29133v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高维点云各向异性曲面逼近",
      "sum": "提出HD-PEA框架，基于学习直接处理非结构化点云，实现高效各向异性曲面逼近。",
      "ta": "点云曲面重建是扫描资产管线关键，该框架可能提升实时处理性能。",
      "src": "arXiv · cs.GR · 07-30",
      "url": "https://arxiv.org/abs/2607.28855v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "世界模型正则化新方法",
      "sum": "QQWorld方法通过分位数匹配实现世界模型正则化，提升模型泛化。",
      "ta": "世界模型与游戏AI/模拟相关，正则化技术或可借鉴到程序化生成。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.28415"
    },
    {
      "cat": "ai",
      "imp": "hi",
      "title": "Meshy T2快速原生网格生成",
      "sum": "Meshy T2采用流匹配技术，实现快速原生网格生成，无需中间表示。",
      "ta": "原生网格生成直接服务3D资产生成流程，流匹配方法值得关注。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.28675"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Epic 七月学习内容更新",
      "sum": "Epic 发布七月学习内容，涵盖 Sequencer 动画、MetaHuman 动捕、Chaos 可破坏物及移动端开发教程。",
      "ta": "官方教程覆盖 TA 常用工具链，可快速跟进 UE5 动画与破坏系统的最新工作流。",
      "src": "Unreal Engine · 07-31",
      "url": "https://www.unrealengine.com/learning/julys-epic-learning-content-animation-mobile-game-development-and-more"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Substance 3D 金属丝工艺材质",
      "sum": "Jinho Yum 分享 Ornamental Filigree 项目，讲解扭曲基础形状、调整曲线方向与宝石制作流程。",
      "ta": "Substance 3D 复杂金属图案程序化生成思路，对材质细节与装饰纹理制作有参考价值。",
      "src": "80 Level · 07-31",
      "url": "https://80.lv/articles/creating-intricate-filigree-metalwork-patterns-for-a-material-with-substance-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender VHS 复古效果制作",
      "sum": "Triqlide Studios 展示在 Blender 中实现的 VHS 风格复古视觉效果。",
      "ta": "VHS 风格化后处理效果在 Blender 中的实现，可借鉴用于游戏内复古滤镜或过场。",
      "src": "80 Level · 07-31",
      "url": "https://80.lv/articles/check-out-this-cool-vhs-like-effect-made-in-blender/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Double Fine 裁员 Xbox 营收下滑",
      "sum": "Double Fine 裁员，Xbox 硬件营收持续下滑，Buckshot Roulette 开发商推出马里奥派对恐怖版。",
      "ta": "行业动态速览，了解大厂人员变动与硬件趋势，对项目规划无直接影响。",
      "src": "Game Developer · 07-31",
      "url": "https://www.gamedeveloper.com/business/xbox-perpetual-hardware-revenue-decline-leon-kennedy-pays-off-and-double-fine-cuts-staff-patch-notes-63"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "单图生成可驱动高斯头模",
      "sum": "S-Avatar 提出扩散引导的单图 3D 头模生成，并支持 3DGS 动画化。",
      "ta": "单图重建可驱动高斯头模，对虚拟人资产生产管线有直接参考价值。",
      "src": "arXiv · cs.GR · 07-30",
      "url": "https://arxiv.org/abs/2607.28164v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "4D高斯时空排序新格式",
      "sum": "TSOG 扩展 SOG 框架至时间域，高效表示 4D 高斯溅射内容。",
      "ta": "4DGS 资产压缩与流式加载是实时特效和虚拟制作的关键，此格式值得关注。",
      "src": "arXiv · cs.GR · 07-30",
      "url": "https://arxiv.org/abs/2607.28049v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "共享高斯压缩SVBRDF贴图",
      "sum": "提出用共享高斯紧凑表示 mipmapped SVBRDF，降低存储负担。",
      "ta": "材质贴图内存优化新思路，可能影响 PBR 材质资产的标准格式。",
      "src": "arXiv · cs.GR · 07-30",
      "url": "https://arxiv.org/abs/2607.27943v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "时变隐式神经场体渲染",
      "sum": "提出查询高效的随机体渲染框架，用于时变隐式神经体积。",
      "ta": "动态科学体积数据交互渲染，对 Niagara 或自定义体积特效有启发。",
      "src": "arXiv · cs.GR · 07-30",
      "url": "https://arxiv.org/abs/2607.28047v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "HDR10+助力游戏艺术表达",
      "sum": "访谈讨论 HDR10+ GAMING 在 UE 集成、HDR 工作流及显示感知渲染中的应用。",
      "ta": "HDR 管线与显示感知渲染是 TA 调色和材质输出的关键环节。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/interview-how-hdr10-can-help-game-devs-preserve-their-artistic-vision/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Mixtape同步玩法动画音乐",
      "sum": "开发者详解 UE5 中 MetaSounds、动画分层与玩法系统如何同步。",
      "ta": "MetaSounds 与动画分层联动案例，对音画同步类特效设计有参考。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/interview-how-mixtape-synchronizes-gameplay-animation-music-with-ue5/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Roblox推出Blender风格建模",
      "sum": "开发者制作 Blender 风格建模插件，可在 Roblox Studio 内直接建资产。",
      "ta": "跨工具建模流程简化，对多平台资产生产管线有潜在价值。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/modeler-creates-a-blender-style-modeling-plugin-for-roblox-studio/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "动态布料特效资产包发布",
      "sum": "一款可创建动态布料特效的资产包，售价 11.20 美元。",
      "ta": "现成布料特效方案，可快速用于原型验证或补充特效库。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/you-ll-be-able-to-create-dynamic-cloth-based-effects-with-this-pack/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender模型一键3D打印",
      "sum": "Dovetail Key 通过绘制线条，两步即可让 Blender 模型可 3D 打印。",
      "ta": "快速生成可打印资产，对实体道具或原型制作有辅助作用。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/easily-make-your-blender-models-3d-printable-by-drawing-lines/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Unity为Netflix游戏提供支持",
      "sum": "Unity 宣布为 Netflix Games 提供专用引擎支持，助力多平台开发。",
      "ta": "引擎平台生态扩展，可能影响跨平台游戏项目的技术选型。",
      "src": "Game Developer · 07-30",
      "url": "https://www.gamedeveloper.com/business/unity-brings-dedicated-engine-support-to-netflix-games"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Subnautica2销量破五百万",
      "sum": "Subnautica 2 在 22 天内售出 500 万份，助力 KRAFTON 最佳第二季度。",
      "ta": "行业销售数据，反映市场对生存类游戏的需求热度。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/subnautica-2-sold-5-million-copies-in-22-days-gave-krafton-its-best-second-quarter-ever/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "印度游戏产业持续增长",
      "sum": "GDAI 总监分析印度 5.5 亿年轻玩家与本土 IP 开发潜力。",
      "ta": "新兴市场动态，可能影响全球化发行与外包合作策略。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/india-s-gaming-boom-is-just-getting-started/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "寂静岭新作开发访谈",
      "sum": "Silent Hill: Townfall 开发者讨论苏格兰背景、复古技术与第一人称战斗。",
      "ta": "恐怖游戏技术风格参考，可关注其美术与交互设计。",
      "src": "PlayStation Blog · 07-30",
      "url": "https://blog.playstation.com/2026/07/30/silent-hill-townfall-developers-discuss-the-scottish-setting-retro-technology-first-person-combat/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "暗黑奇幻游戏角色揭晓",
      "sum": "1666: Amsterdam 公布主要角色，游戏为暗黑奇幻题材。",
      "ta": "角色美术风格参考，可关注其概念设计与渲染表现。",
      "src": "80 Level · 07-30",
      "url": "https://80.lv/articles/meet-the-main-characters-from-dark-fantasy-game-1666-amsterdam/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏公司知识流失引担忧",
      "sum": "文章探讨游戏公司裁员导致生产知识流失的问题。",
      "ta": "行业人才流动影响项目稳定性，对团队知识管理有警示。",
      "src": "Game Developer · 07-30",
      "url": "https://www.gamedeveloper.com/production/if-knowledge-if-power-why-are-game-companies-choosing-impotence-"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "凸碰撞自由区域",
      "sum": "提出CCFR方法，用局部凸可行区域显式表示碰撞约束。",
      "ta": "对碰撞检测和物理模拟有参考价值，可关注其与网格原语的集成方式。",
      "src": "arXiv · cs.GR · 07-29",
      "url": "https://arxiv.org/abs/2607.26901v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "结构感知高斯泼溅",
      "sum": "StructureGS用于铰接物体重建，分离几何、外观和运动参数。",
      "ta": "3DGS在可动部件重建上的进展，可能影响程序化资产生成管线。",
      "src": "arXiv · cs.GR · 07-29",
      "url": "https://arxiv.org/abs/2607.26889v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "面向XR的3DGS压缩",
      "sum": "AtlasLC实现物体级3DGS快速编解码，适配XR资产管线。",
      "ta": "压缩和解码效率对实时渲染和XR部署有实际意义，可跟踪其性能数据。",
      "src": "arXiv · cs.GR · 07-29",
      "url": "https://arxiv.org/abs/2607.26525v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "全局Pass屏障研究",
      "sum": "Blade渲染器用全局屏障替代逐资源追踪，跨厂商验证性能。",
      "ta": "对Vulkan管线屏障策略有参考价值，可了解全局屏障的跨平台表现。",
      "src": "arXiv · cs.GR · 07-29",
      "url": "https://arxiv.org/abs/2607.26506v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CG世界状态数据集",
      "sum": "CG-World提供大规模工业CG世界状态数据，用于世界模型训练。",
      "ta": "数据集来自工业CG，可能为游戏场景理解或程序化生成提供训练基础。",
      "src": "arXiv · cs.GR · 07-29",
      "url": "https://arxiv.org/abs/2607.26452v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "人体运动转四足动画",
      "sum": "Two2Four从人体运动生成四足动物动作，用于虚拟制作。",
      "ta": "对角色动画管线有启发，可关注其运动重定向质量。",
      "src": "arXiv · cs.GR · 07-28",
      "url": "https://arxiv.org/abs/2607.26108v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时视觉语言动作模型",
      "sum": "TurboVLA在RTX 4090上以32Hz运行，显存低于1GB。",
      "ta": "低显存实时推理对游戏AI或交互系统有潜在应用，但未明确游戏场景。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.27205"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "实体木偶在数字时代价值",
      "sum": "Furry Puppet Studio讨论实体木偶制作流程及其不可替代性。",
      "ta": "对角色设计和特效制作有启发，但非直接技术参考。",
      "src": "80 Level · 07-29",
      "url": "https://80.lv/articles/interview-why-practical-puppets-still-matter-in-the-age-of-digital-characters/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "卡普空年更生化危机",
      "sum": "Capcom计划每年发布一款《生化危机》游戏，含重制版。",
      "ta": "行业动态，对游戏开发周期有参考意义，但无直接技术细节。",
      "src": "80 Level · 07-29",
      "url": "https://80.lv/articles/capcom-is-aiming-to-release-a-resident-evil-game-every-year/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏AI专家谈应用与风险",
      "sum": "Luke Dicken分析AI在游戏开发中的历史、生成式AI及风险。",
      "ta": "对AI在游戏管线中的定位有参考价值，但无具体技术方案。",
      "src": "80 Level · 07-29",
      "url": "https://80.lv/articles/game-ai-expert-explains-where-ai-actually-belongs-in-game-development-and-the-risks/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "EA CEO获3860万美元薪酬",
      "sum": "EA CEO Andrew Wilson在裁员和GenAI采用后获高额薪酬。",
      "ta": "行业动态，反映高管薪酬与公司策略的关联。",
      "src": "Game Developer · 07-29",
      "url": "https://www.gamedeveloper.com/business/ea-boss-awarded-38-6m-after-year-of-franchise-success-studio-layoffs-and-genai-adoption"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "实时视频世界模型",
      "sum": "Wonder模型支持实时、可控制摄像头的视频世界探索。",
      "ta": "关注实时可交互视频世界模型，可能影响未来游戏场景生成与动态环境构建。",
      "src": "arXiv · cs.GR · 07-28",
      "url": "https://arxiv.org/abs/2607.26037v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "高斯体渲染加速",
      "sum": "提出基于高斯的体渲染表示，用于高效剪切-扭曲可视化。",
      "ta": "体渲染加速技术，对医学可视化或体积特效有参考价值。",
      "src": "arXiv · cs.GR · 07-28",
      "url": "https://arxiv.org/abs/2607.25377v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "网格注意力机制",
      "sum": "提出内在且三角化无关的注意力机制，用于网格学习。",
      "ta": "网格上的注意力机制，可能提升3D模型处理与生成质量。",
      "src": "arXiv · cs.GR · 07-27",
      "url": "https://arxiv.org/abs/2607.24954v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "EverQuest视觉重建",
      "sum": "EverQuest Legends团队分享恢复经典视觉风格的自定义管线。",
      "ta": "经典MMO视觉重建流程，对复古风格或资产恢复项目有参考。",
      "src": "80 Level · 07-28",
      "url": "https://80.lv/articles/interview-how-everquest-legends-recreates-classic-everquest-s-iconic-visual-style/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "合作驾驶冒险游戏幕后",
      "sum": "Funselektor分享合作驾驶冒险游戏《over the hill》创作历程。",
      "ta": "独立游戏开发经验，对合作模式与公路题材有参考。",
      "src": "80 Level · 07-28",
      "url": "https://80.lv/articles/over-the-hill-creating-a-co-op-driving-adventure-game/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "电影级VFX幕后",
      "sum": "动画师分享《降世神通》电影中Appa口水特效的幕后制作。",
      "ta": "电影级VFX制作流程，对角色特效与液体模拟有参考。",
      "src": "80 Level · 07-28",
      "url": "https://80.lv/articles/animator-unveils-behind-the-scenes-of-vfx-for-appa-s-slobber-in-avatar-aang-movie/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "自定义遮挡系统",
      "sum": "为《Control》风格游戏Psych Rift开发自定义遮挡系统。",
      "ta": "自定义遮挡系统实现，对类似扭曲现实风格游戏有参考。",
      "src": "80 Level · 07-28",
      "url": "https://80.lv/articles/custom-occlusion-system-for-control-inspired-reality-bending-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "TaleWorlds联合创始人去世",
      "sum": "《骑马与砍杀》工作室TaleWorlds联合创始人İpek Yavuz逝世。",
      "ta": "行业人物讣告，了解工作室历史。",
      "src": "Game Developer · 07-28",
      "url": "https://www.gamedeveloper.com/business/obituary-taleworlds-co-founder-i-pek-yavuz-has-passed-away"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏业副业条款争议",
      "sum": "开发者讨论副业条款对创意自由的限制与困扰。",
      "ta": "行业法律问题，了解对自由职业者的影响。",
      "src": "Game Developer · 07-28",
      "url": "https://www.gamedeveloper.com/production/-i-have-been-hunted-down-by-hr-reps-lawyers-and-comms-people-developers-discuss-the-pain-and-prevalence-of-side-work-clauses"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "显式弹塑性损伤更新",
      "sum": "提出一种平滑显式弹塑性-损伤更新，适用于图形模拟。",
      "ta": "对物理模拟中的材料破坏和塑性变形有直接参考价值。",
      "src": "arXiv · cs.GR · 07-27",
      "url": "https://arxiv.org/abs/2607.24509v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "草图纹理感知着色",
      "sum": "TexSketch提出参考草图着色方法，解决数据集限制。",
      "ta": "对风格化纹理生成和草图辅助工作流有参考意义。",
      "src": "arXiv · cs.GR · 07-27",
      "url": "https://arxiv.org/abs/2607.24261v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态头发头部虚拟人",
      "sum": "DynHair用3D高斯泼溅跟踪和建模动态头发。",
      "ta": "对角色头发实时渲染和虚拟人管线有直接参考。",
      "src": "arXiv · cs.GR · 07-26",
      "url": "https://arxiv.org/abs/2607.23861v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "生成式头部测量模型",
      "sum": "GNM Head提出生成式人体头部参数模型。",
      "ta": "对角色头部建模和生成式管线有参考价值。",
      "src": "arXiv · cs.GR · 07-26",
      "url": "https://arxiv.org/abs/2607.23687v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "极小曲面神经表示",
      "sum": "提出精确神经表示方法用于极小曲面。",
      "ta": "对几何建模和曲面优化有理论参考。",
      "src": "arXiv · cs.GR · 07-26",
      "url": "https://arxiv.org/abs/2607.23437v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "光线追踪AO阴影复用",
      "sum": "提出遮挡点复用技术加速光线追踪AO和阴影。",
      "ta": "对实时光线追踪性能优化有直接参考。",
      "src": "arXiv · cs.GR · 07-25",
      "url": "https://arxiv.org/abs/2607.23122v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "无网格域随机化",
      "sum": "用3D高斯泼溅参数扰动实现无网格域随机化。",
      "ta": "对Sim-to-Real和有机体渲染有直接参考。",
      "src": "arXiv · cs.GR · 07-24",
      "url": "https://arxiv.org/abs/2607.22890v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "视差伪管道内部技巧",
      "sum": "用经典视差窗口技巧伪造地铁管道内部。",
      "ta": "对低成本环境伪装有直接参考。",
      "src": "80 Level · 07-27",
      "url": "https://80.lv/articles/fake-tube-interior-using-classic-parallax-windows-trick/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "无模拟伪流水技巧",
      "sum": "经典技巧伪造流动水面，无需流体模拟。",
      "ta": "对低性能开销水效果有参考。",
      "src": "80 Level · 07-27",
      "url": "https://80.lv/articles/classic-trick-to-fake-flowing-water-without-fluid-simulation/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "血源猎人游戏就绪资产",
      "sum": "Victor Monge López分享血源猎人粉丝资产制作流程。",
      "ta": "对角色雕刻、头发卡片和游戏就绪管线有参考。",
      "src": "80 Level · 07-27",
      "url": "https://80.lv/articles/breakdown-game-ready-bloodborne-s-old-hunter-fan-art/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "雅达利经典IP电影化",
      "sum": "Atari与环球合作制作《小行星》等经典游戏电影。",
      "ta": "对游戏IP跨媒体开发有参考。",
      "src": "Game Developer · 07-27",
      "url": "https://www.gamedeveloper.com/business/atari-and-universal-to-create-movies-based-on-classic-properties-including-asteroids-and-missile-command"
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
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "可微渲染场景参数显著性",
      "sum": "利用可微渲染器生成场景参数显著性图，类比神经网络梯度方法。",
      "ta": "可微渲染用于参数优化之外，还能做场景特征重要性分析，对调试渲染效果有启发。",
      "src": "arXiv · cs.GR · 07-23",
      "url": "https://arxiv.org/abs/2607.21562v1"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "NVIDIA OptiX 光线追踪调试工具",
      "sum": "介绍使用 OptiX Toolkit 调试光线追踪应用的方法。",
      "ta": "光线追踪调试工具链更新，有助于定位 RT 管线中的性能或正确性问题。",
      "src": "NVIDIA · 07-23",
      "url": "https://developer.nvidia.com/blog/debugging-ray-tracing-applications-using-nvidia-optix-toolkit/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ArcBrush 1.5 升级 32 位浮点管线",
      "sum": "ArcBrush 1.5 引入色彩管理 32 位浮点图像管线，支持 Cryptomatte。",
      "ta": "32 位浮点管线对纹理合成与后期处理精度提升，适合高动态范围工作流。",
      "src": "80 Level · 07-23",
      "url": "https://80.lv/articles/arcbrush-1-5-upgrades-to-color-managed-32-bit-float-image-pipeline/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "3D 高斯泼溅补全与 PatchMatch",
      "sum": "3D-GIMP 用 PatchMatch 改进 3D 高斯场景编辑，减少多视图不一致。",
      "ta": "3D 高斯编辑新方法，对实时场景修复与一致性维护有潜在应用。",
      "src": "arXiv · cs.GR · 07-22",
      "url": "https://arxiv.org/abs/2607.20789v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "缝纫图案缝合对应学习重建",
      "sum": "图学习框架从 2D 缝纫图案重建两级缝合信息，无需人工标注。",
      "ta": "自动缝合重建对虚拟服装建模与布料模拟管线自动化有直接帮助。",
      "src": "arXiv · cs.GR · 07-23",
      "url": "https://arxiv.org/abs/2607.21213v1"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Vermila 工作室裁员或关闭",
      "sum": "Vermila Studios 裁员，CEO 称未来数月关闭是可行可能。",
      "ta": "行业动荡信号，可能影响外包或合作项目稳定性。",
      "src": "Game Developer · 07-23",
      "url": "https://www.gamedeveloper.com/business/vermila-studios-lays-off-staff-studio-closure-a-feasible-possibility-in-coming-months"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "Disgaea 转型动作 RPG 开发谈",
      "sum": "开发团队分享从战术 RPG 转动作 RPG 的机制与模型适配经验。",
      "ta": "游戏类型转换中的模型与动画适配经验，对角色系统设计有参考。",
      "src": "80 Level · 07-24",
      "url": "https://80.lv/articles/disgaea-mayhem-shifting-from-tactical-rpg-to-action-rpg/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Halo 初代重制登陆 PlayStation",
      "sum": "Halo: Campaign Evolved 用新机制和操控现代化经典 FPS。",
      "ta": "经典 IP 跨平台重制，对引擎适配与现代化改造有参考。",
      "src": "PlayStation Blog · 07-23",
      "url": "https://blog.playstation.com/2026/07/23/13-ways-halo-campaign-evolved-modernizes-the-iconic-fps/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "漫威金刚狼故事预告发布",
      "sum": "Insomniac 在 SDCC 公布漫威金刚狼故事预告与艺术图。",
      "ta": "3A 游戏叙事与美术展示，对角色渲染与场景设计有参考。",
      "src": "PlayStation Blog · 07-23",
      "url": "https://blog.playstation.com/2026/07/23/marvels-wolverine-story-trailer-new-art-composer-details-and-more/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "四面体笼驱动海量动画几何光线追踪",
      "sum": "AMD 提出用四面体笼动画复用静态 BLAS，实时追踪数亿三角形，大幅降低植被/草丛更新开销。",
      "ta": "对植被渲染和人群系统意义重大，可显著减少每帧 BVH 重建和内存消耗。",
      "src": "AMD GPUOpen · 07-22",
      "url": "https://gpuopen.com/learn/ray-tracing-massive-amounts-animated-geometry/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "分裂辐射级联：实时全局光照新方法",
      "sum": "提出稀疏辐射探针的级联方案，解决传统探针方法细节不足问题，实现实时漫反射全局光照。",
      "ta": "可能成为 UE5 Lumen 之外的高质量 GI 替代方案，值得关注实现细节。",
      "src": "arXiv · cs.GR · 07-22",
      "url": "https://arxiv.org/abs/2607.20384v1"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 3,
      "title": "HAWKED 程序化瀑布工具制作详解",
      "sum": "Serge Filin 分享将 2D 概念转化为动态实时材质的程序化瀑布工具开发过程。",
      "ta": "直接相关植被/特效工作流，学习如何用程序化材质实现复杂水体效果。",
      "src": "80 Level · 07-22",
      "url": "https://80.lv/articles/creating-a-procedural-waterfalls-tool-for-the-game-hawked/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "优化写实水晶材质制作分解",
      "sum": "Anastasia Gorban 详解水晶材质分层结构、虹彩效果及划痕纹理制作流程。",
      "ta": "材质分层和虹彩实现技巧可复用至宝石/玻璃类 Shader 开发。",
      "src": "80 Level · 07-22",
      "url": "https://80.lv/articles/breakdown-how-to-create-an-optimized-and-realistic-crystal-material/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Tear Painter 更新支持纹理取色",
      "sum": "Blender 工具 Tear Painter 新版可直接从纹理中选取颜色。",
      "ta": "提升纹理绘制效率，对材质贴图工作流有直接帮助。",
      "src": "80 Level · 07-22",
      "url": "https://80.lv/articles/new-tear-painter-update-lets-you-pick-colors-directly-from-textures/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Unity URP 地形自适应动态雨系统",
      "sum": "Prism Works 发布 Unity URP 雨系统，支持地形自适应涟漪和建筑遮挡。",
      "ta": "Niagara 特效师可参考其地形交互逻辑，移植至 UE5 雨系统。",
      "src": "80 Level · 07-22",
      "url": "https://80.lv/articles/this-dynamic-rain-system-brings-terrain-adaptive-real-time-rain-effects-to-unity/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "MR-Compare：3D高斯与网格重建对比框架",
      "sum": "MR 框架实现 3D Gaussian Splatting 与网格重建在物理环境中的空间对齐比较。",
      "ta": "为 3D 重建质量评估提供混合现实工具，可能影响扫描资产管线。",
      "src": "arXiv · cs.GR · 07-22",
      "url": "https://arxiv.org/abs/2607.20325v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "快速波光学全息显示渲染",
      "sum": "利用多层图像实现 3D 全息显示的快速波光学渲染方法。",
      "ta": "前沿显示技术，长期可能影响实时渲染输出方式。",
      "src": "arXiv · cs.GR · 07-22",
      "url": "https://arxiv.org/abs/2607.19731v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "低功耗AR眼镜色调映射框架",
      "sum": "提出基于学习的功耗约束色调映射，在 AR 眼镜上优化显示功耗与感知质量。",
      "ta": "对移动/AR 设备渲染优化有参考价值，但非核心工作流。",
      "src": "arXiv · cs.GR · 07-21",
      "url": "https://arxiv.org/abs/2607.19509v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "ATSplat：紧凑前馈3D高斯泼溅",
      "sum": "提出自适应令牌扩展的前馈 3DGS 方法，减少存储开销。",
      "ta": "3DGS 压缩方向进展，可能影响实时 3D 重建资产格式。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.20417"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "S.T.A.L.K.E.R.2 独占费超开发预算",
      "sum": "GSC Game World 透露 Xbox 独占协议金额超过游戏自身开发预算。",
      "ta": "行业商业动态，了解平台独占策略对开发资金的影响。",
      "src": "80 Level · 07-22",
      "url": "https://80.lv/articles/s-t-a-l-k-e-r-2-s-xbox-exclusivity-deal-surpassed-the-game-s-own-development-budget/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Kinect游戏Freefall Racers 2026年复活",
      "sum": "2013年 Kinect 游戏 Freefall Racers 通过 Nex Playground 平台回归。",
      "ta": "怀旧游戏复活案例，对体感交互设计有参考意义。",
      "src": "Game Developer · 07-22",
      "url": "https://www.gamedeveloper.com/business/a-kinect-game-that-debuted-in-2013-has-been-revived-in-the-year-of-our-lord-2026"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Splatoon Raiders 原型曾是塔防游戏",
      "sum": "总监分享 Splatoon 衍生作原型为塔防，后回归系列核心玩法。",
      "ta": "游戏设计迭代案例，了解玩法原型到成品的过程。",
      "src": "Game Developer · 07-22",
      "url": "https://www.gamedeveloper.com/design/splatoon-raiders-started-as-a-tower-defense-game-but-its-splatoon-ness-got-lost"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Human Fall Flat 2取消，直接做3代",
      "sum": "No Brakes Games 创始人回顾十年历程，宣布取消 2 代直接开发 3 代。",
      "ta": "独立游戏开发决策案例，了解系列化开发策略。",
      "src": "Game Developer · 07-22",
      "url": "https://www.gamedeveloper.com/production/-human-fall-flat-2-is-cancelled-we-are-making-human-fall-flat-3-no-brakes-games-founder-looks-back-on-a-defining-decade"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Hasbro 取消多款游戏损失5600万美元",
      "sum": "Hasbro 因取消多个游戏项目记录 5600 万美元减值，将聚焦有特许经营潜力的项目。",
      "ta": "行业投资风向标，了解大厂项目筛选策略。",
      "src": "Game Developer · 07-22",
      "url": "https://www.gamedeveloper.com/business/hasbro-records-56m-write-down-after-scrapping-several-video-games"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Alpha Dog Games 脱离微软恢复独立",
      "sum": "被 Xbox 关闭两年后，Alpha Dog Games 重新获得独立运营权。",
      "ta": "工作室生存案例，了解行业并购后独立回归现象。",
      "src": "Game Developer · 07-22",
      "url": "https://www.gamedeveloper.com/business/alpha-dog-games-returns-to-independence-two-years-after-being-shuttered-by-xbox"
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
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "体积数据高效有损压缩",
      "sum": "EVOLVE 提出跨域数据库上的变速率编码，用于大规模科学模拟体积压缩。",
      "ta": "体积数据压缩技术可能影响未来体积渲染管线的存储与传输效率。",
      "src": "arXiv · cs.GR · 07-20",
      "url": "https://arxiv.org/abs/2607.18187v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "无损隐式神经体积表示",
      "sum": "Lossless-INR 实现无损体积隐式神经表示，克服了现有 INR 有损问题。",
      "ta": "无损 INR 为体积数据在实时渲染中的高保真存储提供新可能。",
      "src": "arXiv · cs.GR · 07-20",
      "url": "https://arxiv.org/abs/2607.18150v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "快速VEM流体模拟",
      "sum": "提出快速虚拟元法，高效处理复杂边界下的流体-边界交互模拟。",
      "ta": "流体特效模拟新方法，可能提升Niagara中复杂边界流体性能。",
      "src": "arXiv · cs.GR · 07-20",
      "url": "https://arxiv.org/abs/2607.17725v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "特征引导扩散逆渲染",
      "sum": "非可微逆渲染方法，用特征引导扩散避免局部最优，减少工程定制。",
      "ta": "简化材质/光照逆向重建流程，可能用于自动生成PBR贴图。",
      "src": "arXiv · cs.GR · 07-19",
      "url": "https://arxiv.org/abs/2607.17411v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "点云快速符号距离计算",
      "sum": "Points as Tori 方法支持任意分辨率下点云符号距离快速逐点查询。",
      "ta": "加速点云重建和SDF场计算，对程序化植被或地形工具可能有用。",
      "src": "arXiv · cs.GR · 07-18",
      "url": "https://arxiv.org/abs/2607.16946v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可微几何图像薄壳生成",
      "sum": "DiffGI 用可微几何图像实现高保真薄壳3D生成。",
      "ta": "薄壳模型生成新范式，对角色或道具的自动拓扑生成有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.13365"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "长尾驾驶数据生成",
      "sum": "OpenLongTail 生成式扩增长尾驾驶场景数据。",
      "ta": "自动驾驶仿真数据生成，与游戏AI或开放世界NPC行为无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.09655"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "实时多模态应用代理",
      "sum": "FlashRT 提供代理框架，引导部署实时多模态应用。",
      "ta": "实时应用部署工具，与游戏渲染管线无直接关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.18171"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型推理时对齐",
      "sum": "DiFA 在推理时进行前向过程对齐，提升扩散模型生成质量。",
      "ta": "扩散模型改进，可能间接影响AI生成纹理或资产质量。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.17972"
    }
  ]
};
