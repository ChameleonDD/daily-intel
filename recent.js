// daily-intel 近期热点层 —— 由 run.py 自动累积，供「近期」入口翻阅。
// 与 data.js（仅今日新增）分离：data.js 是“今天有什么新的”，recent.js 是“近期攒了啥”。

window.INTEL_RECENT = {
  "updated": "2026-06-24 13:06",
  "cards": [
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
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Epic免费UE专业课程",
      "sum": "Epic开发者社区免费开放20+门UE专业课程，涵盖动画、游戏开发等。",
      "ta": "可作为团队新人培训或TA技能拓展的免费学习资源。",
      "src": "Unreal Engine · 06-15",
      "url": "https://www.unrealengine.com/news/free-professional-unreal-engine-courses-now-available-on-the-epic-developer-community"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "显式几何约束3D生成",
      "sum": "Arbor通过显式几何条件控制3D资产生成的空间占用。",
      "ta": "对程序化生成工作流有参考价值，可控制物体空间边界。",
      "src": "arXiv · cs.GR · 06-22",
      "url": "https://arxiv.org/abs/2606.23514v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "等变流匹配网格生成",
      "sum": "MeshFlow直接生成三角网格，保持顶点和面的置换不变性。",
      "ta": "直接输出网格的生成方法，可能简化3D资产管线。",
      "src": "arXiv · cs.GR · 06-22",
      "url": "https://arxiv.org/abs/2606.23489v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "高分辨率人体4D数据集",
      "sum": "VolHuMe数据集包含104个受试者的高质量4D人体扫描。",
      "ta": "可用于训练人体动画或物理模拟模型，但数据量有限。",
      "src": "arXiv · cs.GR · 06-22",
      "url": "https://arxiv.org/abs/2606.23062v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可控纹理平铺扩散模型",
      "sum": "用变换RoPE增强扩散模型实现可控纹理平铺。",
      "ta": "对材质贴图自动生成和纹理合成有潜在应用。",
      "src": "arXiv · cs.GR · 06-22",
      "url": "https://arxiv.org/abs/2606.22945v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "紧凑位移映射基网格",
      "sum": "DJM用三角形雅可比计算紧凑基网格，支持位移映射。",
      "ta": "直接优化置换贴图基网格，对植被/地形LOD和内存压缩有价值。",
      "src": "arXiv · cs.GR · 06-22",
      "url": "https://arxiv.org/abs/2606.22880v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "光照一致对象迁移",
      "sum": "在辐射场间迁移对象并保持光照一致性。",
      "ta": "对3DGS场景合成和VFX工作流有参考意义。",
      "src": "arXiv · cs.GR · 06-21",
      "url": "https://arxiv.org/abs/2606.22481v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "网格转3DGS白盒构建",
      "sum": "Mesh2GS通过全光采样将网格转换为3DGS表示。",
      "ta": "桥接网格和3DGS管线，可用于资产格式转换。",
      "src": "arXiv · cs.GR · 06-20",
      "url": "https://arxiv.org/abs/2606.21898v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "物理信息微光学合成引擎",
      "sum": "OSOG为微光学环境提供可微物理合成数据引擎。",
      "ta": "专业领域工具，与游戏图形学关联较弱。",
      "src": "arXiv · cs.GR · 06-19",
      "url": "https://arxiv.org/abs/2606.21381v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "物理交互虚拟人化身",
      "sum": "PIAvatar通过变形梯度解耦实现物理交互化身。",
      "ta": "对角色物理交互和动画系统有参考价值。",
      "src": "arXiv · cs.GR · 06-19",
      "url": "https://arxiv.org/abs/2606.21162v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Maya泰龙角色绑定展示",
      "sum": "Sahil Banik展示Maya中泰龙角色绑定，含发光眼睛。",
      "ta": "角色绑定参考案例，可学习眼睛发光效果实现。",
      "src": "80 Level · 06-22",
      "url": "https://80.lv/articles/this-maya-rig-of-tai-lung-with-his-iconic-glowing-eyes-looks-really-cool/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5/Houdini短片制作解析",
      "sum": "Argentum Studio分享UE5/Houdini/Blender短片《The Cradle》制作流程。",
      "ta": "包含自定义毛发渲染系统，对特效和工具开发有参考。",
      "src": "80 Level · 06-22",
      "url": "https://80.lv/articles/creating-surreal-short-film-the-cradle-with-ue5-houdini-blender/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Substance 3D瓢虫材质教程",
      "sum": "Romain Lemaire讲解用Substance 3D SDF制作瓢虫材质。",
      "ta": "材质设计流程参考，SDF用法可迁移到其他生物材质。",
      "src": "80 Level · 06-22",
      "url": "https://80.lv/articles/how-to-design-a-vibrant-ladybug-material-using-substance-3d/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "小团队游戏22小时回本",
      "sum": "独立游戏《Thank You For Your Application》22小时收回开发成本。",
      "ta": "行业案例，与TA技术无直接关联。",
      "src": "Game Developer · 06-22",
      "url": "https://www.gamedeveloper.com/business/-larger-budgets-and-longer-schedules-do-not-lead-to-better-games-thank-you-for-your-application-recoups-dev-costs-in-22-hours"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多模态扩散语言模型",
      "sum": "提出并行区域感知的多模态扩散语言模型。",
      "ta": "与游戏实时渲染无直接关联，可速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.19534"
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
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "李群注意力机制新架构",
      "sum": "首次将注意力token定义为矩阵李群元素，无特征载荷。",
      "ta": "纯数学理论，与实时渲染无直接关联，但可能影响未来几何学习。",
      "src": "arXiv · cs.GR · 06-18",
      "url": "https://arxiv.org/abs/2606.20547v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "TriFlow生成类艺术家网格拓扑",
      "sum": "从SDF等输入直接生成紧凑三角网格，拓扑类似艺术家手工。",
      "ta": "对程序化生成和资产管线有潜在价值，可减少手动拓扑重拓扑工作。",
      "src": "arXiv · cs.GR · 06-18",
      "url": "https://arxiv.org/abs/2606.20131v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "JanusMesh零样本3D视错觉生成",
      "sum": "跨空间去噪实现快速零样本3D视错觉生成。",
      "ta": "3D生成方向新方法，但视错觉在游戏资产中应用有限。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.20563"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "自适应体积力学属性场",
      "sum": "提出分辨率无关的自适应体积力学属性场。",
      "ta": "与物理模拟相关，但未提及实时或游戏引擎应用。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.18231"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Holo-World视频世界模型控制",
      "sum": "统一控制相机、物体和天气的视频世界模型。",
      "ta": "视频生成方向，与游戏实时渲染无直接关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.20083"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型缺乏持久状态核心",
      "sum": "指出当前世界模型缺少持久状态核心。",
      "ta": "AI研究，对游戏引擎管线无直接影响。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.20545"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "JAMER游戏引擎代码框架数据集",
      "sum": "发布专业游戏引擎项目级代码框架数据集和基准。",
      "ta": "对引擎代码分析和工具开发有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.19830"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "AERO 1.7 Unity体积雾着色器",
      "sum": "免费Unity体积雾和薄雾着色器AERO 1.7发布。",
      "ta": "可直接用于Unity项目的体积雾效果，免费资源。",
      "src": "80 Level · 06-18",
      "url": "https://80.lv/articles/aero-1-7-a-volumetric-fog-and-mist-shader-in-unity/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "育碧谈《飙酷车神》RC模式开发",
      "sum": "育碧分享RC Frenzy的自定义物理、关卡设计和玩法系统。",
      "ta": "了解大厂在特殊物理和玩法系统上的技术挑战。",
      "src": "80 Level · 06-18",
      "url": "https://80.lv/articles/interview-ubisoft-transformed-the-crew-motorfest-into-an-rc-playground/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Houdini/EmberGen特效课程",
      "sum": "VFX Apprentice推出Houdini、EmberGen和LiquiGen模拟课程。",
      "ta": "学习特效模拟工作流的培训资源。",
      "src": "80 Level · 06-18",
      "url": "https://80.lv/articles/create-stunning-vfx-in-houdini-embergen-liquigen-with-this-course/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "加拿大开发者2026年现状",
      "sum": "Game Developer采访加拿大开发者，讨论行业动荡中的生存。",
      "ta": "行业宏观动态，了解开发者生态。",
      "src": "Game Developer · 06-18",
      "url": "https://www.gamedeveloper.com/business/-a-new-industry-with-a-new-identity-how-canadian-devs-are-faring-in-2026"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Pocketpair称玩家不想要生成式AI",
      "sum": "Pocketpair公关总监认为生成式AI不会在游戏中太突出。",
      "ta": "行业对AI在游戏中应用的态度参考。",
      "src": "Game Developer · 06-18",
      "url": "https://www.gamedeveloper.com/business/palworld-lead-on-genai-gamers-don-t-want-it"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Maya-Blender资产桥免费工具",
      "sum": "GitHub上发布免费Maya到Blender资产桥工具。",
      "ta": "跨DCC工作流工具，方便资产迁移。",
      "src": "Tech-Artists · 06-18",
      "url": "https://www.tech-artists.org/t/free-maya-blender-asset-bridge-github-link-provided/18419"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "HYPERyuki滑雪游戏开发",
      "sum": "Wabisabi Games 分享多人滑雪游戏 HYPERyuki 的艺术风格与物理设计。",
      "ta": "可了解滑雪物理与艺术风格的结合思路，但非硬核技术突破。",
      "src": "80 Level · 06-18",
      "url": "https://80.lv/articles/wabisabi-games-on-creating-the-sports-game-hyperyuki-snowboard-syndicate/"
    }
  ]
};
