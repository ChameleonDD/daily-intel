// daily-intel 近期热点层 —— 由 run.py 自动累积，供「近期」入口翻阅。
// 与 data.js（仅今日新增）分离：data.js 是“今天有什么新的”，recent.js 是“近期攒了啥”。

window.INTEL_RECENT = {
  "updated": "2026-09-02 13:37",
  "cards": [
    {
      "cat": "flow",
      "imp": "mid",
      "title": "金刚狼日本扫描之旅",
      "sum": "Insomniac 团队赴日本进行实景扫描，采集自然与建筑资产用于《金刚狼》开发。",
      "ta": "展示了 3A 工作室外景扫描的流程与规模，可参考其资产采集与整理思路。",
      "src": "PlayStation Blog · 09-01",
      "url": "https://blog.playstation.com/2026/09/01/marvels-wolverine-inside-insomniac-games-location-scanning-trip-to-japan/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "三角形神经渲染基准发布",
      "sum": "MeshSplatBench 提出统一基准，评估基于三角形的神经渲染在标准光栅硬件上的表现。",
      "ta": "为评估可光栅化的神经渲染方法提供标准，对探索混合渲染管线的 TA 有参考价值。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.01306v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "程序化生成可编辑科学图表",
      "sum": "新方法将科学图表生成视为程序合成，可递归生成并支持编辑，优于纯图像生成。",
      "ta": "程序化生成思路或可迁移至技术文档与资产管线中的可编辑图表制作。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.01006v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "可控视频素描风格生成",
      "sum": "HyperSketch 在风格超空间中实现可控的矢量素描动画生成，提升风格多样性与控制力。",
      "ta": "矢量风格化动画的可控生成，对探索非写实渲染与动态分镜的 TA 有启发。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.00919v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "填补动漫上色遗漏区域",
      "sum": "研究聚焦动画上色流程中常见的小面积未上色缝隙，提出针对性填补方法。",
      "ta": "针对 2D 动画管线的痛点，其思路或可辅助 3D 风格化贴图与手绘资产的自动化处理。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.00800v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "线条图逆向绑定优化",
      "sum": "提出从手绘轮廓线逆向推断并优化角色绑定参数的方法，以直接表达艺术意图。",
      "ta": "将 2D 轮廓意图映射到 3D 绑定，为风格化角色动画的创作提供新交互范式。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.00732v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "线图元逆向渲染建模",
      "sum": "新方法利用线图元逆向渲染，捕捉毛发、纤维等模糊各向异性结构用于实时可视化。",
      "ta": "针对毛发等复杂结构的实时渲染建模，对植被与特效资产的程序化生成有直接参考。",
      "src": "arXiv · cs.GR · 09-01",
      "url": "https://arxiv.org/abs/2609.00625v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频推断参数化折纸程序",
      "sum": "FoldingAgent 框架从演示视频中推断显式参数化折纸程序，结合 VLM 与专用工具。",
      "ta": "从视频学习程序化几何操作，或可启发程序化生成中从演示到规则提取的思路。",
      "src": "arXiv · cs.GR · 08-31",
      "url": "https://arxiv.org/abs/2609.00377v1"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "实时体素建筑破坏演示",
      "sum": "Dennis Gustafsson 发布新演示，展示令人满意的实时体素建筑拆除效果。",
      "ta": "体素破坏的实时效果演示，可关注其物理模拟与渲染性能平衡的实现细节。",
      "src": "80 Level · 09-01",
      "url": "https://80.lv/articles/this-real-time-voxel-building-demolition-is-so-satisfying/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "免费高级 Maya 绑定发布",
      "sum": "一款包含面部表情的免费 Maya 绑定，提供高级控制功能供下载。",
      "ta": "可直接用于动画测试与绑定学习，节省制作高质量面部绑定原型的时间。",
      "src": "80 Level · 09-01",
      "url": "https://80.lv/articles/get-this-free-maya-rig-with-advanced-controls/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "免费获取 70+ Shader 教程",
      "sum": "XorDev 提供超过 70 个 Shader 教程的免费访问权限。",
      "ta": "大量 Shader 教程资源，适合系统学习或查漏补缺，提升材质编写能力。",
      "src": "80 Level · 09-01",
      "url": "https://80.lv/articles/get-free-access-to-over-70-shader-tutorials/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 一键生成线稿",
      "sum": "Masamune Sakaki 发布免费工具，可一键从任意 3D 模型生成线稿。",
      "ta": "快速生成线稿的工具，可用于概念设计、技术美术文档或风格化渲染辅助。",
      "src": "80 Level · 09-01",
      "url": "https://80.lv/articles/one-click-line-art-from-any-3d-model-in-blender/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "C4D 与 Blender 损伤插件",
      "sum": "Edgy 插件为 C4D 与 Blender 提供六种预设，可创建逼真损伤效果并支持扩展。",
      "ta": "快速生成逼真损伤效果，适合用于场景破坏与资产老化，提升效率。",
      "src": "80 Level · 09-01",
      "url": "https://80.lv/articles/check-out-this-plug-in-for-c4d-blender-that-created-realistic-damage/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Paradox 新作吸引策略新手",
      "sum": "《Afterworld》游戏总监解释如何用 RPG 钩子吸引新玩家进入宏大策略游戏。",
      "ta": "了解策略游戏设计趋势，对理解玩家体验与引导机制设计有参考。",
      "src": "Game Developer · 09-01",
      "url": "https://www.gamedeveloper.com/design/paradox-interactive-s-afterworld-wants-to-entice-new-players-to-grand-strategy-with-tasty-rpg-hooks"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "高斯辐射场刚体变形新法",
      "sum": "提出ARAP约束下的3DGS变形方法，保持局部刚性，提升编辑质量。",
      "ta": "3DGS资产变形是TA做动态场景或角色特效的关键，此方法直接提升可控性。",
      "src": "arXiv · cs.GR · 08-30",
      "url": "https://arxiv.org/abs/2608.29538v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "扩散残差风格化高斯泼溅",
      "sum": "DReSG用扩散模型残差增强3DGS风格化，更好捕捉参考风格细节。",
      "ta": "风格化3DGS是快速迭代概念美术的利器，此方法能提升风格迁移的保真度。",
      "src": "arXiv · cs.GR · 08-29",
      "url": "https://arxiv.org/abs/2608.29048v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "视频驱动3D物体动画新法",
      "sum": "BLARM从视频中提取刚性运动基元，混合生成3D物体动画。",
      "ta": "从视频直接驱动3D资产动画，可加速动画预演和动态资产制作流程。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.31113"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "实时流式交互世界模型增强",
      "sum": "Matrix-Game 3.5引入Patch Memory，增强实时流式交互世界模型性能。",
      "ta": "实时交互世界模型是游戏AI和动态环境生成的前沿，值得关注其技术演进。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.29910"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "生成先于重建的潜变量模型",
      "sum": "GenFirst提出先生成后重建的端到端潜变量生成建模，提升稳定性。",
      "ta": "潜变量生成模型稳定性提升，可能影响未来3D资产生成工具的开发方向。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.29335"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "独立游戏全本地AI训练实践",
      "sum": "Atelico工作室用自家美术作品训练本地AI模型，分享10个原型开发经验。",
      "ta": "本地AI模型训练与美术资产结合，为工作室内部AI工具链提供真实案例。",
      "src": "80 Level · 08-31",
      "url": "https://80.lv/articles/interview-new-indie-game-uses-local-ai-model-trained-entirely-on-studio-s-own-artists/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "叙事沙盒开放世界RPG评测",
      "sum": "Rebel Wolves新作《血之黎明行者》获好评，或成年度游戏竞争者。",
      "ta": "关注其叙事沙盒设计，可能影响开放世界关卡和任务流程的构建方式。",
      "src": "80 Level · 08-31",
      "url": "https://80.lv/articles/the-blood-of-dawnwalker-is-a-special-kind-of-open-world-rpg-with-a-narrative-sandbox/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "2XKO角色特效制作解析",
      "sum": "Sonia Firsova展示《英雄联盟》格斗游戏2XKO的角色VFX制作细节。",
      "ta": "角色特效的材质和Shader设计是TA核心技能，此案例提供实战参考。",
      "src": "80 Level · 08-31",
      "url": "https://80.lv/articles/take-closer-look-at-character-vfx-made-for-2xko/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Unity闪耀特效制作展示",
      "sum": "展示用Unity制作的精细闪耀VFX效果，视觉上很魔幻。",
      "ta": "Unity特效案例可对比UE5工作流，关注粒子系统和Shader实现差异。",
      "src": "80 Level · 08-31",
      "url": "https://80.lv/articles/check-out-these-detailed-sparkling-vfx-made-with-unity/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender与Krita纹理绘制桥接",
      "sum": "新工具连接Blender场景与Krita绘制，支持投影式纹理绘画。",
      "ta": "纹理绘制工作流优化，可减少DCC工具切换成本，提升贴图制作效率。",
      "src": "80 Level · 08-31",
      "url": "https://80.lv/articles/this-tool-connects-blender-krita-for-texture-painting/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Steam 13TB数据泄露事件",
      "sum": "Steam公开端点泄露13TB数据，含Valve及EA、WB等厂商预发布内容。",
      "ta": "数据泄露可能暴露未发布引擎特性或资产，但需关注官方后续声明。",
      "src": "Game Developer · 08-31",
      "url": "https://www.gamedeveloper.com/pc/report-13tb-of-steam-data-leaked-after-users-access-publicly-accessible-endpoint-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Gamescom设备盗窃事件",
      "sum": "Gamescom独立展区遭窃，多家小团队笔记本电脑和Steam Deck被盗。",
      "ta": "行业展会安全事件，对独立开发者影响大，但无直接技术关联。",
      "src": "Game Developer · 08-31",
      "url": "https://www.gamedeveloper.com/business/indie-devs-and-publishers-hit-in-gamescom-equipment-thefts"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CAD透明渲染综述",
      "sum": "综述CAD中透明渲染的工业部署与底层算法，梳理方法、权衡与挑战。",
      "ta": "透明排序与性能权衡是实时渲染常客，可借鉴CAD工业方案。",
      "src": "arXiv · cs.GR · 08-28",
      "url": "https://arxiv.org/abs/2608.28310v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "铜氧化外观预测PBR化",
      "sum": "提出管线预测铜表面氧化后外观，并转为albedo、法线、粗糙度、金属度贴图。",
      "ta": "材质老化预测直接服务PBR工作流，可扩展至植被或场景风化。",
      "src": "arXiv · cs.GR · 08-28",
      "url": "https://arxiv.org/abs/2608.28102v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "神经纹理压缩线程高效解码",
      "sum": "提出共享解码器MLP与渐进冻结训练，解决NTC的GPU线程分歧问题。",
      "ta": "NTC性能瓶颈在分歧，此方案直接提升运行时解码效率，值得精读。",
      "src": "arXiv · cs.GR · 08-28",
      "url": "https://arxiv.org/abs/2608.27888v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "恒定显存辐射场训练",
      "sum": "ABCD框架以块坐标下降实现3DGS外核训练，仅激活一个空间块参数。",
      "ta": "3DGS训练显存受限，此方法可支撑更大场景，对程序化生成有参考。",
      "src": "arXiv · cs.GR · 08-27",
      "url": "https://arxiv.org/abs/2608.27735v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频生成模型学几何",
      "sum": "论文探讨视频生成模型作为几何学习器的能力，未提游戏或实时应用。",
      "ta": "视频模型几何能力或影响未来3D重建，但当前无直接TA关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.28549"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "自回归视频扩散长记忆",
      "sum": "提出Ring Forcing方法提升自回归视频扩散的长期记忆精度。",
      "ta": "视频扩散长时一致性或影响特效预览，但无实时渲染关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.26794"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频时空定位新方法",
      "sum": "提出高效生成式时空视频定位方法，用于视频中目标定位。",
      "ta": "视频定位与TA工作流无直接关联，仅作AI技术速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.28192"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Claude Code驱动Blender工具",
      "sum": "用Claude Code快速生成Blender工具，提升自动化效率。",
      "ta": "AI辅助工具开发是趋势，可探索用于DCC脚本自动化。",
      "src": "Tech-Artists · 08-29",
      "url": "https://www.tech-artists.org/t/claude-in-blender-quick-blender-tools-with-claude-code/18530"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 1,
      "title": "Roji端到端OpenUSD工作流",
      "sum": "Roji提供场景组装、外观开发、灯光渲染的完整OpenUSD流程。",
      "ta": "OpenUSD标准化是TA管线核心，端到端方案值得深入评估。",
      "src": "Tech-Artists · 08-29",
      "url": "https://www.tech-artists.org/t/introducing-roji-an-end-to-end-openusd-workflow-for-scene-assembly-look-development-lighting-and-rendering/18528"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Epic 八月学习内容发布",
      "sum": "Epic 发布免费学习内容，涵盖网络物理、Mesh Terrain、项目优化与材质创建。",
      "ta": "Mesh Terrain 与材质工作流是 TA 日常，可快速获取官方最新实践。",
      "src": "Unreal Engine · 08-28",
      "url": "https://www.unrealengine.com/learning/augusts-epic-learning-content-networked-physics-dynamic-audio-and-more"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Tripo 攻克 3D 资产拓扑",
      "sum": "Tripo 推出 Smart Mesh，数秒生成可用拓扑，增强艺术家对生成资产的控制。",
      "ta": "生成式 3D 资产若具备干净拓扑，可直接进入 DCC 管线，减少重拓扑工作量。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/how-tripo-is-tackling-clean-topology-for-its-3d-asset-pipeline/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "EditaLive 实时角色视频编辑",
      "sum": "论文提出 EditaLive，用于直播场景的统一角色视频编辑方法。",
      "ta": "实时角色编辑若用于虚拟制片或直播，可能影响 TA 的实时渲染管线设计。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.27123"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Mistfall Hunter 融合魂系与撤离玩法",
      "sum": "Bellring Games 谈魂系战斗与撤离机制结合，及北欧废墟美术风格设计。",
      "ta": "PvPvE 可读性设计对 TA 的视觉引导与特效表现有参考价值。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/interview-how-mistfall-hunter-blends-soulslike-combat-with-dark-fantasy-rpg-extraction-mechanics/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Fable 展示风格化战斗系统",
      "sum": "Fable 新演示聚焦风格化战斗，强调玩家自定义英雄与技能组合。",
      "ta": "风格化战斗的视觉反馈设计，可关注其特效与动画的配合方式。",
      "src": "PlayStation Blog · 08-28",
      "url": "https://blog.playstation.com/2026/08/28/a-new-look-at-fables-style-weaving-combat/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 1,
      "title": "城市示例项目大更新",
      "sum": "City Sample 更新至 UE5.8，新增 PCG 与 Unreal MCP 工作流。",
      "ta": "PCG 与 MCP 工作流是程序化世界构建的核心，值得精读新示例。",
      "src": "Unreal Engine · 08-27",
      "url": "https://www.unrealengine.com/learning/city-sample-gets-a-major-update-with-pcg-and-unreal-mcp-workflows"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 2,
      "title": "AMD FSR 插件更新",
      "sum": "AMD FSR 插件更新至 UE5.8，支持 ML 升频与帧生成。",
      "ta": "FSR 插件更新直接影响 UE5.8 渲染管线的性能优化方案。",
      "src": "AMD GPUOpen · 08-27",
      "url": "https://gpuopen.com/learn/amd-fsr-plugin-updated-for-unreal-engine-58/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "三维重建方法对比评估",
      "sum": "对比摄影测量、NeRF、高斯泼溅等四种三维重建方法。",
      "ta": "了解不同重建方法的优劣，有助于选择资产制作技术路线。",
      "src": "arXiv · cs.GR · 08-27",
      "url": "https://arxiv.org/abs/2608.27301v1"
    },
    {
      "cat": "ai",
      "imp": "hi",
      "rank": 3,
      "title": "程序化控制的三维建模",
      "sum": "提出“形状即代码”范式，实现可编辑的程序化三维建模。",
      "ta": "该研究有望解决生成网格不可编辑的痛点，对程序化资产管线意义重大。",
      "src": "arXiv · cs.GR · 08-26",
      "url": "https://arxiv.org/abs/2608.26238v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "游戏世界动作模型",
      "sum": "GameWAM 提出用于视频游戏的世界动作模型。",
      "ta": "世界模型是游戏 AI 前沿，可能影响未来 NPC 与关卡生成。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.26200"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "代理式游戏开发引擎",
      "sum": "将代理式游戏开发作为可验证轨迹数据引擎，用于扩展世界模型。",
      "ta": "该思路可能为程序化内容生成提供新的数据驱动方法。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.25518"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "实时游戏世界渲染器",
      "sum": "Magpie 提出用于交互游戏的实时世界渲染器。",
      "ta": "实时渲染器是 TA 核心关注点，该技术可能带来渲染管线革新。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.27168"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Blender 2D 风格水门",
      "sum": "艺术家在 Blender 中制作了 2D 风格的水中传送门。",
      "ta": "视差效果制作技巧，可参考用于风格化场景。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/magical-2d-style-aquatic-portal-in-blender/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Godot 重现博德之门着色器",
      "sum": "艺术家在 Godot 中重现了《博德之门3》的遮挡着色器。",
      "ta": "跨引擎着色器实现案例，对理解遮挡效果原理有参考价值。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/artist-recreates-baldur-s-gate-3-s-occlusion-shader-in-godot/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Nomad Sculpt 直连 Blender",
      "sum": "Nomad Sculpt 新增直接链接 Blender 与 ZBrush 功能。",
      "ta": "移动端雕刻到桌面软件的直连，简化了资产制作流程。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/nomad-sculpt-adds-direct-app-linking-to-blender-zbrush/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "低成本 Nanite 视差着色器",
      "sum": "POM 着色器以更低成本实现类似 Nanite 的位移效果。",
      "ta": "支持贴花、材质和地形，是性能敏感场景下的重要替代方案。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/pom-shader-that-achieves-nanite-like-displacement-at-lower-cost/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《星际公民》跳票至2027",
      "sum": "《星际公民》的 Squadron 42 因与 GTA 6 发售期重叠而延期。",
      "ta": "行业发售策略调整，对项目排期有一定参考意义。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/star-citizen-s-squadron-42-delayed-over-gta-6-release-overlap/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "矮人要塞程序化魔法系统",
      "sum": "《矮人要塞》20周年更新将加入程序化魔法系统。",
      "ta": "程序化生成在游戏玩法中的应用案例，值得关注。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/dwarf-fortress-will-get-an-update-with-procedural-magic-systems/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "模块化建筑与植被工作流",
      "sum": "Elie Paquiet 详解《庭院》项目模块化套件与多层着色器制作。",
      "ta": "模块化建筑套件与植被制作流程，对 TA 工作流有直接参考价值。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/modeling-and-texturing-assets-and-foliage-for-a-detailed-3d-environment/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "程序化贝壳石窟制作",
      "sum": "Coraline Lyu 分享用 Substance 3D Designer 与 UE 制作程序化石窟。",
      "ta": "节点式程序化建模与材质流程，是 TA 技能树的重要参考。",
      "src": "80 Level · 08-28",
      "url": "https://80.lv/articles/building-a-procedural-shell-grotto-with-substance-3d-designer-unreal-engine/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "巫师4全平台同步开发",
      "sum": "CD Projekt Red 吸取《赛博朋克2077》教训，全平台同步开发《巫师4》。",
      "ta": "跨平台开发策略调整，对多平台渲染优化有间接影响。",
      "src": "Game Developer · 08-27",
      "url": "https://www.gamedeveloper.com/production/cd-projekt-red-has-the-witcher-4-running-on-all-target-platforms-after-cyberpunk-2077-lesson"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏业需拓展北美以外市场",
      "sum": "Saber 高管称游戏行业需寻求北美以外市场以分散风险。",
      "ta": "行业市场策略讨论，对团队项目立项方向有参考意义。",
      "src": "Game Developer · 08-27",
      "url": "https://www.gamedeveloper.com/business/saber-exec-the-game-industry-must-look-beyond-north-america-and-dilute-risk"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "MBC 集团进军游戏业",
      "sum": "沙特 MBC 集团成立游戏工作室，已招募多位资深开发者。",
      "ta": "行业资本动态，可能影响未来人才市场与项目合作。",
      "src": "Game Developer · 08-27",
      "url": "https://www.gamedeveloper.com/business/saudi-owned-media-conglomerate-mbc-expands-into-the-game-industry"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "GLOSS 纹理填充新方法",
      "sum": "GLOSS 提出几何局部自相似学习，忠实参考引导纹理填充。",
      "ta": "对材质/贴图工作流有直接参考价值，可探索几何细节保持的自动纹理生成。",
      "src": "arXiv · cs.GR · 08-26",
      "url": "https://arxiv.org/abs/2608.25461v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Godot 4.8 开发新特性",
      "sum": "Godot 4.8 新增3D轨迹节点、VisualShader节点组、多反弹AO等。",
      "ta": "关注引擎进展，多反弹AO和VisualShader节点组对TA工具链有参考。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/godot-4-8-development-is-in-full-swing/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Morrowind 重制版 RTX 预览",
      "sum": "NVIDIA 展示 Morrowind 重制版路径追踪效果与新资源。",
      "ta": "看路径追踪在经典场景的落地效果，对光照管线有参考。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/nvidia-shows-preview-of-the-elder-scrolls-iii-morrowind-remastered-with-rtx/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "暗黑奇幻角色雕刻流程",
      "sum": "Kang Jeong 详解 CLOCK SAINT 角色四段雕刻与材质金属度粗糙度管理。",
      "ta": "材质参数管理思路对角色贴图工作流有实操参考。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/sculpting-a-dark-fantasy-character-with-clockwork-elements-religious-imagery/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "CDPR 与暴雪合作",
      "sum": "巫师3重制版登陆Battle.net，并推出杰洛特皮肤。",
      "ta": "行业合作动态，对TA无直接技术关联。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/the-witcher-developer-cd-projekt-red-partners-with-blizzard/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Exodus 发售定档 2027",
      "sum": "前质量效应开发者科幻RPG Exodus 2027年4月发售。",
      "ta": "行业动态，关注其技术展示但无直接TA关联。",
      "src": "80 Level · 08-26",
      "url": "https://80.lv/articles/mass-effect-sci-fi-rpg-exodus-launch-date-2027/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "GTA6 大规模泄露事件",
      "sum": "Rockstar 回应 GTA6 大规模泄露，表示心碎。",
      "ta": "行业事件，对TA工作无直接技术影响。",
      "src": "Game Developer · 08-26",
      "url": "https://www.gamedeveloper.com/business/rockstar-games-heartbroken-by-grand-theft-auto-6-leaks"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "育碧推出玩家委员会",
      "sum": "育碧启动Player Council平台，邀请测试早期概念与原型。",
      "ta": "玩家反馈机制，对TA工作流无直接关联。",
      "src": "Game Developer · 08-26",
      "url": "https://www.gamedeveloper.com/business/ubisoft-debuts-player-council-platform-to-expand-early-game-development-feedback"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "世嘉多款新作试玩亮相",
      "sum": "世嘉在Gamescom 2026展出六款可玩新作。",
      "ta": "行业动态，关注新作技术表现但无直接TA关联。",
      "src": "PlayStation Blog · 08-26",
      "url": "https://blog.playstation.com/2026/08/26/sega-gameplay-updates-persona-4-revival-crazy-taxi-world-tour-total-war-warhammer-40000-and-more/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "星球大战策略新作试玩",
      "sum": "Bit Reactor与Respawn合作开发星战策略游戏Zero Company。",
      "ta": "策略游戏技术表现可关注，但无直接TA关联。",
      "src": "PlayStation Blog · 08-26",
      "url": "https://blog.playstation.com/2026/08/26/hands-on-report-star-wars-zero-company/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "卡普空双作试玩报告",
      "sum": "Gamescom试玩洛克人双重重置与龙之信条2暗黑觉醒。",
      "ta": "行业动态，无直接TA技术关联。",
      "src": "PlayStation Blog · 08-26",
      "url": "https://blog.playstation.com/2026/08/26/hands-on-report-mega-man-dual-override-and-dragons-dogma-2-dark-arisen/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PlayStation Plus 九月阵容",
      "sum": "九月PS Plus含狙击精英抵抗、MLB秀26等四款游戏。",
      "ta": "纯商业资讯，无TA关联。",
      "src": "PlayStation Blog · 08-26",
      "url": "https://blog.playstation.com/2026/08/26/playstation-plus-monthly-games-for-september-sniper-elite-resistance-mlb-the-show-26-wobbly-life-chained-echoes/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "赛博朋克枪斗游戏定档",
      "sum": "John Wick风格赛博朋克动作游戏确认明年发售。",
      "ta": "行业动态，无直接TA关联。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/this-cyberpunk-gun-fu-game-gets-a-confirmed-release-window/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Poppy Playtime 新合作游戏",
      "sum": "Poppy Playtime宇宙推出合作生存恐怖游戏Escape from Playtime。",
      "ta": "行业动态，无直接TA关联。",
      "src": "80 Level · 08-27",
      "url": "https://80.lv/articles/poppy-playtime-universe-gets-a-new-survival-horror-co-op-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "天野喜孝艺术访谈",
      "sum": "最终幻想艺术家天野喜孝谈视觉风格、跨媒介创作与建议。",
      "ta": "艺术风格参考，对TA审美有启发但非技术。",
      "src": "80 Level · 08-26",
      "url": "https://80.lv/articles/interview-yoshitaka-amano-on-creating-art-that-transcends-games-anime-and-generations/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "演员蒂姆·库里去世",
      "sum": "演员蒂姆·库里去世，享年80岁，曾参与多款游戏。",
      "ta": "行业悼念，无TA技术关联。",
      "src": "Game Developer · 08-26",
      "url": "https://www.gamedeveloper.com/audio/obituary-actor-tim-curry-celebrated-for-his-work-in-games-has-passed-at-age-80"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "星战新作采用UE5开发",
      "sum": "Bit Reactor技术总监谈为何选择UE5及开发中亮点功能。",
      "ta": "了解3A战术游戏在UE5中的技术选型与管线实践。",
      "src": "Unreal Engine · 08-25",
      "url": "https://www.unrealengine.com/developer-interviews/star-wars-zero-company-bit-reactor-crafts-a-galaxy-of-tactical-possibilities-with-ue5"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "语义优先动作编解码器",
      "sum": "SeMoCo提出语义优先的离散动作表示，用于文本生成动作。",
      "ta": "关注动作生成中语义与细节的平衡，对动画管线有参考价值。",
      "src": "arXiv · cs.GR · 08-25",
      "url": "https://arxiv.org/abs/2608.24334v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "视觉中心智能几何编辑",
      "sum": "ViSculpt利用LLM进行视觉驱动的3D几何编辑，减少手动操作。",
      "ta": "探索LLM在DCC工具中辅助几何编辑的潜力，提升效率。",
      "src": "arXiv · cs.GR · 08-25",
      "url": "https://arxiv.org/abs/2608.24169v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "多视图重建可重光照网格",
      "sum": "ExMesh++从多视图图像重建带UV和PBR材质的可编辑网格资产。",
      "ta": "直接产出可用的PBR资产，对程序化资产管线意义重大。",
      "src": "arXiv · cs.GR · 08-25",
      "url": "https://arxiv.org/abs/2608.24109v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "三参数细分曲线设计",
      "sum": "提出一种三参数9点二进制近似细分方案用于曲线形状控制。",
      "ta": "基础数学研究，对曲线建模工具的实现有潜在参考。",
      "src": "arXiv · cs.GR · 08-23",
      "url": "https://arxiv.org/abs/2608.23637v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "扩展位置动力学旋转处理",
      "sum": "利用李群统一处理XPBD中的旋转自由度，提升刚体和Cosserat杆模拟。",
      "ta": "对物理模拟中旋转约束的稳定性有改进，值得关注。",
      "src": "arXiv · cs.GR · 08-21",
      "url": "https://arxiv.org/abs/2608.23606v1"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "地铁新作展示自研引擎进化",
      "sum": "Metro 2039 gamescom预告展示4A引擎最新进化，环境更压抑。",
      "ta": "观察4A引擎在光照、氛围渲染上的技术演进。",
      "src": "80 Level · 08-25",
      "url": "https://80.lv/articles/metro-2039-looks-darker-and-more-claustrophobic-than-ever-in-new-gameplay/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "巫师3免费重制版将发布",
      "sum": "巫师3将获得包含Switch 2版本在内的免费全面重制升级。",
      "ta": "关注重制版在新技术下的画面表现与性能优化。",
      "src": "80 Level · 08-25",
      "url": "https://80.lv/articles/the-witcher-3-is-getting-a-massive-full-remaster-as-a-free-upgrade-very-soon/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "波西杰克逊VFX特效解析",
      "sum": "解析剧中石像鬼Sirens特效，使用自定义Bullet和Vellum解算器。",
      "ta": "了解影视级VFX中刚体与布料解算器的实际应用。",
      "src": "80 Level · 08-25",
      "url": "https://80.lv/articles/inside-vfx-of-percy-jackson-and-the-olympians-season-2/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Riot停止2XKO开发",
      "sum": "Riot宣布12月停止格斗游戏2XKO的积极开发，因留存不足。",
      "ta": "行业动态，关注格斗游戏市场表现与运营策略。",
      "src": "Game Developer · 08-25",
      "url": "https://www.gamedeveloper.com/business/riot-games-is-winding-down-fighter-2xko-in-december-2026"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Among Us 3D开发商裁员",
      "sum": "Schell Games被报道裁员，此前曾多次谈及避免裁员。",
      "ta": "行业动态，关注外包与协作工作室的稳定性。",
      "src": "Game Developer · 08-25",
      "url": "https://www.gamedeveloper.com/business/report-among-us-3d-dev-schell-games-lays-off-staff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "浏览器游戏新创公司融资",
      "sum": "爱尔兰浏览器游戏公司Entity融资500万美元，目标2027年推出平台。",
      "ta": "关注WebGPU等新技术在浏览器游戏中的应用前景。",
      "src": "Game Developer · 08-25",
      "url": "https://www.gamedeveloper.com/business/irish-browser-games-start-up-entity-raises-5m-in-funding-for-console-quality-games-for-the-new-web-era-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "thatgamecompany成立发行部门",
      "sum": "《光·遇》开发商thatgamecompany宣布成立发行部门thatgamepublisher。",
      "ta": "行业动态，关注独立游戏发行生态变化。",
      "src": "Game Developer · 08-25",
      "url": "https://www.gamedeveloper.com/business/journey-maker-thatgamecompany-announces-thatgamepublisher"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "W4 Games融资扩展Godot",
      "sum": "W4 Games融资1800万美元，并与腾讯合作拓展亚洲Godot生态。",
      "ta": "Godot引擎商业支持增强，可能影响跨引擎工具链选择。",
      "src": "Game Developer · 08-25",
      "url": "https://www.gamedeveloper.com/business/w4-games-raises-18m-to-expand-its-international-team"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini地理追踪器稳定版",
      "sum": "GeoTracker for Houdini发布稳定版，支持Houdini 22。",
      "ta": "用于Houdini的相机追踪工具，对特效合成工作流有用。",
      "src": "Tech-Artists · 08-25",
      "url": "https://www.tech-artists.org/t/geotracker-for-houdini-stable-release-houdini-22-support/18508"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "虚拟人表情生成新法",
      "sum": "CVAE模型基于真实人脸数据合成可控虚拟人面部表情。",
      "ta": "关注表情强度控制与真实感，对角色动画管线有参考价值。",
      "src": "arXiv · cs.GR · 08-22",
      "url": "https://arxiv.org/abs/2608.21697v1"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "武侠沙盒万人NPC",
      "sum": "《太吾绘卷》实现一万动态NPC与七百武学技能的系统设计。",
      "ta": "大规模NPC系统与程序化生成思路，对开放世界TA有借鉴意义。",
      "src": "80 Level · 08-24",
      "url": "https://80.lv/articles/interview-building-a-wuxia-sandbox-rpg-with-up-to-10-000-dynamic-npcs/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "独立钓鱼游戏两日百万",
      "sum": "一款独立钓鱼模拟游戏发售两天内销量破百万。",
      "ta": "独立游戏市场表现参考，与TA技术关联弱。",
      "src": "80 Level · 08-24",
      "url": "https://80.lv/articles/this-indie-fishing-simulation-game-sold-1-million-copies-in-2-days/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "异形生物眼部系统开发",
      "sum": "电影与游戏角色工作坊展示复杂异形生物眼部系统制作。",
      "ta": "眼部着色与材质细节技术，对生物角色TA有参考价值。",
      "src": "80 Level · 08-24",
      "url": "https://80.lv/articles/developing-complex-eye-system-for-strange-alien-creature/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "title": "MD新增布料撕裂捏合",
      "sum": "Marvelous Designer 2026.1新增缝线撕裂、笔刷捏合与模拟覆盖工具。",
      "ta": "布料塑形工具增强，直接提升TA制作服装与布料模拟效率。",
      "src": "80 Level · 08-24",
      "url": "https://80.lv/articles/new-marvelous-designer-update-lets-artists-rip-pinch-shape-fabric-like-never-before/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Blender BSDF支持色散",
      "sum": "Blender 5.3 Cycles的Principled BSDF新增色散支持。",
      "ta": "材质色散效果增强，对离线渲染与材质测试有参考价值。",
      "src": "80 Level · 08-24",
      "url": "https://80.lv/articles/principled-bsdf-in-blender-s-cycles-now-supports-dispersion/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "CAA成立独立游戏基金",
      "sum": "Creative Artists Agency推出Frame1Games，支持资源不足的独立团队。",
      "ta": "行业资金动向，与TA技术无直接关联。",
      "src": "Game Developer · 08-24",
      "url": "https://www.gamedeveloper.com/business/creative-artists-agency-spins-up-indie-funding-venture-frame1games"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "科隆游戏展奖项揭晓",
      "sum": "Gamescom Dev Awards 2026在科隆颁发六个奖项。",
      "ta": "行业奖项信息，与TA技术无直接关联。",
      "src": "Game Developer · 08-24",
      "url": "https://www.gamedeveloper.com/business/mutter-and-blue-prince-among-winners-at-gamescom-dev-awards-2026"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可微矢量图前向松弛优化",
      "sum": "提出CubicSplat，用误差有界前向松弛实现矢量图可微优化。",
      "ta": "矢量图可微优化对程序化生成和资产管线有潜在价值，可关注其误差控制方法。",
      "src": "arXiv · cs.GR · 08-21",
      "url": "https://arxiv.org/abs/2608.20803v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高斯面片与网格表面重建闭环",
      "sum": "TopoSurfel方法结合高斯面片与网格，提升3DGS表面重建精度。",
      "ta": "3DGS表面重建是TA常用技术，此方法可能改善扫描资产质量。",
      "src": "arXiv · cs.GR · 08-21",
      "url": "https://arxiv.org/abs/2608.20687v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "数字解压盒触感交互",
      "sum": "一款数字解压盒游戏提供令人满足的触觉交互，可试玩。",
      "ta": "关注其交互反馈设计，对游戏手感与UI动效有参考价值。",
      "src": "80 Level · 08-22",
      "url": "https://80.lv/articles/this-digital-fidget-box-game-has-a-lot-of-satisfying-tactile-interactions/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "物理模拟剑斗游戏",
      "sum": "独立开发者用物理模拟武器实现第一人称近战，碰撞反弹锁定偏转全实时。",
      "ta": "关注物理武器交互与玩家操控的实时反馈，对战斗手感设计有参考价值。",
      "src": "80 Level · 08-21",
      "url": "https://80.lv/articles/this-first-person-sword-fighting-game-s-combat-is-100-physics-based/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "真实服装扫描工作流",
      "sum": "Render Ready用真实服装扫描替代数字布料模拟，配合自定义可摆姿势模特。",
      "ta": "了解实拍扫描在角色服装制作中的流程，可能提升资产真实度与效率。",
      "src": "80 Level · 08-21",
      "url": "https://80.lv/articles/building-a-hero-garment-from-real-world-data/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "HTML5游戏转独立网站",
      "sum": "Playgama Wrap免费服务将HTML5游戏转为带支付、分析、SEO的独立网站。",
      "ta": "对游戏分发渠道有影响，但技术含量低，可速览。",
      "src": "80 Level · 08-21",
      "url": "https://80.lv/articles/this-free-tool-turns-html5-games-into-full-standalone-websites/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "黑神话钟馗实机预告",
      "sum": "《黑神话：钟馗》发布15分钟实机预告，画面表现优于前作《悟空》。",
      "ta": "关注国产3A画面表现趋势，但非技术细节，速览即可。",
      "src": "80 Level · 08-21",
      "url": "https://80.lv/articles/see-what-black-myth-zhong-kui-brings-in-15-minute-gameplay-trailer/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rusty Lake新作开发访谈",
      "sum": "Rusty Lake联合创始人谈新作《Servant of the Lake》的谜题设计与世界观。",
      "ta": "了解解谜游戏设计思路，对关卡设计有启发，但非硬核技术。",
      "src": "80 Level · 08-21",
      "url": "https://80.lv/articles/puzzles-lore-inspiration-get-glimpse-of-rusty-lake-development/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Tails of Iron 2免费扩展",
      "sum": "《Tails of Iron 2》免费扩展包上线，新增11个任务、10个Boss和9套护甲。",
      "ta": "游戏内容更新，无技术参考价值。",
      "src": "PlayStation Blog · 08-21",
      "url": "https://blog.playstation.com/2026/08/21/tails-of-iron-2-blood-brine-free-expansion/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "生成式推荐系统新范式",
      "sum": "NVIDIA 探讨生成式推荐系统在规模化的训练挑战与重构。",
      "ta": "虽非游戏直接相关，但生成式架构思路可迁移至程序化内容推荐。",
      "src": "NVIDIA · 08-20",
      "url": "https://developer.nvidia.com/blog/how-generative-recommenders-are-redefining-recsys-at-scale/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "渐进式因果视频世界模型",
      "sum": "ForgeWM 提出少步动作条件视频世界模型的渐进式因果训练。",
      "ta": "视频世界模型进展可能影响未来实时场景生成与交互模拟。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.14022"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Human Fall Flat 开发商推 VR 新作",
      "sum": "开发商宣布一款 cozy VR 解谜游戏，风格延续轻松幽默。",
      "ta": "VR 解谜玩法或带来新的交互设计参考，但技术含量有限。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/human-fall-flat-developers-announce-a-new-cozy-vr-puzzle-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "行业动荡期入行游戏美术时机",
      "sum": "Vertex School 认为行业动荡为掌握基础与工作流的新人创造机会。",
      "ta": "对 TA 新人而言，强调工作流熟练度是入行关键信号。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/why-now-might-be-the-right-time-to-start-a-career-in-game-art/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Aura 加速 Dark and Darker 开发",
      "sum": "IRONMACE 用 Aura 让非技术设计师直接改代码，功能开发时间减半。",
      "ta": "Aura 这类工具可能改变 TA 与策划协作方式，值得关注其工作流潜力。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/how-dark-and-darker-s-devs-used-aura-to-build-a-major-feature-in-half-the-time/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前耻辱2创意总监创立新工作室",
      "sum": "Black Pony Immersive 专注单人第一人称动作 RPG，成员来自 Arkane。",
      "ta": "新工作室动向对行业人才流动有参考，但无直接技术内容。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/ex-dishonored-2-creative-director-founds-his-own-studio-with-former-arkane-devs/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "空洞骑士 Hornet 动画赏析",
      "sum": "Brad Faucheux 制作的 Hornet 动画动作流畅，2D 特效出色。",
      "ta": "2D 动画与特效结合是 TA 可借鉴的视觉表现案例。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/this-hollow-knight-s-hornet-animation-belongs-in-smash-bros/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Blender 与 3DGS 打造梦境巴士",
      "sum": "用 Blender 和 3DGS 制作巴士场景，欠训练产生有趣视觉效果。",
      "ta": "3DGS 欠训练伪影可作风格化手段，探索非写实渲染新路径。",
      "src": "80 Level · 08-20",
      "url": "https://80.lv/articles/bus-ride-straight-out-of-dream-made-with-blender-3dgs/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Makers Fund 募资 2.5 亿美元",
      "sum": "Makers Fund 完成 2.5 亿美元融资，扩大游戏行业投资版图。",
      "ta": "资本动向影响行业生态，但对日常 TA 工作无直接指导。",
      "src": "Game Developer · 08-20",
      "url": "https://www.gamedeveloper.com/business/makers-fund-expands-game-industry-footprint-after-closing-250-million-investment-round"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "音频驱动鼓手动作合成",
      "sum": "新方法从音乐音频生成高精度鼓手演奏动作，兼顾高速动态与空间精度。",
      "ta": "对角色动画与程序化动作生成有参考价值，可关注其动作-音频对齐技术。",
      "src": "arXiv · cs.GR · 08-19",
      "url": "https://arxiv.org/abs/2608.19055v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "稻草人转人类角色设计",
      "sum": "Anna Cerutti 分享 Harvey 项目工作流，融合卡通比例与写实细节。",
      "ta": "角色建模与材质混合思路可借鉴，适合生物角色设计参考。",
      "src": "80 Level · 08-19",
      "url": "https://80.lv/articles/breakdown-how-to-design-a-scarecrow-turned-human-character/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "真菌生物雕刻与纹理制作",
      "sum": "Kamil Tondera 详解藤蔓树皮制作工具与手绘材质实现有机外观。",
      "ta": "植被与有机表面材质制作流程，对程序化植被工具开发有启发。",
      "src": "80 Level · 08-19",
      "url": "https://80.lv/articles/sculpting-and-texturing-a-fungal-creature-inspired-by-the-last-of-us/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "阴影驱动角色面部变化",
      "sum": "利用阴影效果让角色面部产生诡异变化，鼓励自行尝试复现。",
      "ta": "光影对角色表现力影响显著，可关注其着色器或光照技巧。",
      "src": "80 Level · 08-19",
      "url": "https://80.lv/articles/shadows-make-this-character-s-face-change-in-the-creepiest-way/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Arkane 老兵成立新工作室",
      "sum": "Harvey Smith 等 Arkane Austin 老将创立 Black Pony Immersive，专注第一人称动作 RPG。",
      "ta": "行业动向，关注其后续技术选型或沉浸式设计理念。",
      "src": "Game Developer · 08-19",
      "url": "https://www.gamedeveloper.com/business/harvey-smith-and-fellow-arkane-austin-veterans-launch-a-new-studio"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "3A 老兵成立合作制工作室",
      "sum": "Raze and Rebuild Studio 由 3A 老兵与无障碍专家创立，采用合作制结构。",
      "ta": "行业模式创新，可关注其协作流程对开发效率的影响。",
      "src": "Game Developer · 08-19",
      "url": "https://www.gamedeveloper.com/business/triple-a-vets-and-accessibility-experts-launch-new-game-dev-co-op-raze-and-rebuild-studio"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "索尼缩减地平线服务型游戏",
      "sum": "Guerrilla 据报因反馈不佳，移除 Horizon Hunters Gathering 的在线服务元素。",
      "ta": "服务型游戏趋势调整，影响在线渲染与后端技术需求。",
      "src": "Game Developer · 08-19",
      "url": "https://www.gamedeveloper.com/business/report-playstation-reworks-horizon-live-service-game-after-negative-feedback"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Human Fall Flat 老兵建新工作室",
      "sum": "Pretty Cool Games 在英国成立，已获融资并开始招聘。",
      "ta": "行业动态，关注其首款作品的技术栈选择。",
      "src": "Game Developer · 08-19",
      "url": "https://www.gamedeveloper.com/business/human-fall-flat-veterans-launch-new-uk-studio-pretty-cool-games"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "MetaSapiens v2 实时注视点渲染",
      "sum": "提出注视点感知剪枝与立体扭曲，加速点云神经渲染至实时。",
      "ta": "关注其剪枝与扭曲策略，对 VR/AR 实时渲染管线优化有直接参考价值。",
      "src": "arXiv · cs.GR · 08-18",
      "url": "https://arxiv.org/abs/2608.17969v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "3DGS 加速光线追踪新法",
      "sum": "基于粒子反向传播加速 3DGS 训练，支持反射等次级光线效果。",
      "ta": "突破光栅化近似限制，对追求真实反射的实时渲染方案意义重大。",
      "src": "arXiv · cs.GR · 08-18",
      "url": "https://arxiv.org/abs/2608.17298v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "WebGPU 六法绘制多层地形",
      "sum": "比较六种 WebGPU 渲染方法，用于可编辑多层高度场地形。",
      "ta": "游戏地形常非单值高度场，此对比对 TA 选型实时地形渲染方案有启发。",
      "src": "arXiv · cs.GR · 08-18",
      "url": "https://arxiv.org/abs/2608.17390v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "变分 r 自适应布料模拟",
      "sum": "首个面向现代布料管线的 r-自适应方法，模拟褶皱与摩擦接触。",
      "ta": "自适应分辨率可提升布料细节模拟效率，对角色布料系统有参考价值。",
      "src": "arXiv · cs.GR · 08-18",
      "url": "https://arxiv.org/abs/2608.17833v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RADmesh 重网格感知形变",
      "sum": "提出重网格增强的网格形变方法，避免大形变时三角质量恶化。",
      "ta": "对程序化形变或绑定系统，可改善大形变下的网格质量与稳定性。",
      "src": "arXiv · cs.GR · 08-17",
      "url": "https://arxiv.org/abs/2608.17182v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "PXDepth 像素级单目深度",
      "sum": "像素空间建模提升单目深度估计对细粒度结构与边界的保持。",
      "ta": "对基于深度估计的自动 LOD、植被放置等 TA 工具链有潜在价值。",
      "src": "arXiv · cs.GR · 08-17",
      "url": "https://arxiv.org/abs/2608.16984v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Love Handles 形变手柄简化",
      "sum": "为形变手柄提供低内存、紧支撑的网格简化方法。",
      "ta": "可优化物理模拟中形变手柄的存储与计算效率。",
      "src": "arXiv · cs.GR · 08-18",
      "url": "https://arxiv.org/abs/2608.17930v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "Lambda-Hold 肌肉骨骼模拟",
      "sum": "最小任务奖励即可让肌肉骨骼模型涌现类人运动。",
      "ta": "对角色动画或生物力学模拟的 RL 训练策略有参考意义。",
      "src": "arXiv · cs.GR · 08-17",
      "url": "https://arxiv.org/abs/2608.17030v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "aDSL 智能体 3D 程序化创建",
      "sum": "联合智能体与程序设计，提升 LLM 生成 3D 程序的稳定性。",
      "ta": "对探索 LLM 辅助程序化资产生成工作流的 TA 有参考价值。",
      "src": "arXiv · cs.GR · 08-18",
      "url": "https://arxiv.org/abs/2608.17975v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "ZBrush 2D 概念转 3D 角色",
      "sum": "David Papunashvili 分享 Punk Knight 项目，投影 2D 概念到雕刻并 PolyPaint 上色。",
      "ta": "2D 概念直接投影参考的工作流，可提升风格化角色制作效率。",
      "src": "80 Level · 08-18",
      "url": "https://80.lv/articles/creating-a-stylized-3d-character-in-a-2d-illustrated-look-with-zbrush/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 程序化手绘风 Shader",
      "sum": "lassyla 发布教程与下载，制作程序化手绘外观 Blender 着色器。",
      "ta": "程序化手绘风 Shader 对风格化渲染有直接参考价值。",
      "src": "80 Level · 08-18",
      "url": "https://80.lv/articles/tutorial-procedural-blender-shader-with-hand-painted-look/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "珊瑚生长模拟视觉效果",
      "sum": "展示一个美观且令人着迷的珊瑚生长模拟。",
      "ta": "可关注其模拟算法与视觉表现，对自然现象特效有启发。",
      "src": "80 Level · 08-18",
      "url": "https://80.lv/articles/this-coral-growth-simulation-looks-beautiful-and-mesmerizing/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "尼龙张力模拟设置展示",
      "sum": "展示一个令人印象深刻的 3D 尼龙张力模拟设置。",
      "ta": "可关注其布料/张力模拟设置，对角色布料或道具模拟有参考。",
      "src": "80 Level · 08-18",
      "url": "https://80.lv/articles/check-out-this-impressive-nylon-tension-simulation-set-up-in-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 专业 VFX 工具捆绑",
      "sum": "RBDLab、VDBLab 和 FluidLab 三款 Blender VFX 工具捆绑销售。",
      "ta": "工具捆绑可提升 Blender 特效制作效率，值得关注。",
      "src": "80 Level · 08-18",
      "url": "https://80.lv/articles/three-professional-vfx-tools-for-blender-in-one-bundle/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "OpenStudioHub 简化 Blender 管线",
      "sum": "介绍 OpenStudioHub，用于简化 Blender 工作室工具、Kitsu 与管线。",
      "ta": "对使用 Blender 的 TA 团队，可简化资产管理流程。",
      "src": "Tech-Artists · 08-18",
      "url": "https://www.tech-artists.org/t/simplifying-blender-studio-tools-kitsu-and-blender-pipeline-meet-openstudiohub/18500"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "游戏工作室转向外部开发合作",
      "sum": "Juego Studios 讨论外部开发、全流程制作、AI 辅助工作流与 LiveOps。",
      "ta": "了解行业外包趋势，对 TA 的跨团队协作与流程设计有参考。",
      "src": "80 Level · 08-18",
      "url": "https://80.lv/articles/why-game-studios-are-turning-to-external-development-partnerships/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Deus Ex 总监 Warren Spector 退休",
      "sum": "《杀出重围》总监 Warren Spector 在游戏行业近 45 年后宣布退休。",
      "ta": "行业资深人物动向，可速览。",
      "src": "Game Developer · 08-18",
      "url": "https://www.gamedeveloper.com/business/deus-ex-director-warren-spector-is-retiring-after-43-years"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "WINGS 资助独立游戏新途径",
      "sum": "独立游戏投资机构 WINGS 为 PC 项目推出新资助途径。",
      "ta": "行业投资动态，可速览。",
      "src": "Game Developer · 08-18",
      "url": "https://www.gamedeveloper.com/business/wings-really-really-wants-to-fund-your-neat-indie-video-game"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "NBA 2K27 新玩法细节公布",
      "sum": "NBA 2K27 公布 The City、合作模式、MyNBA 时代等新玩法细节。",
      "ta": "商业游戏动态，可速览。",
      "src": "PlayStation Blog · 08-18",
      "url": "https://blog.playstation.com/2026/08/18/new-nba-2k27-gameplay-details-on-the-city-co-op-mynba-eras-and-more/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Phantom Blade Zero 深度实机",
      "sum": "State of Play 深入展示《Phantom Blade Zero》战斗与武林世界。",
      "ta": "商业游戏动态，可速览。",
      "src": "PlayStation Blog · 08-18",
      "url": "https://blog.playstation.com/2026/08/17/phantom-blade-zero-state-of-play-dives-deep-into-combat-and-the-wulin-world/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS Store 七月下载榜公布",
      "sum": "PlayStation 公布 2026 年 7 月亚洲区 PS5、PS4 等下载排行榜。",
      "ta": "行业数据，可速览。",
      "src": "PlayStation Blog · 08-18",
      "url": "https://blog.playstation.com/2026/08/17/20260818-top/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "拓扑感知三角网格重建",
      "sum": "用持续同调改进可微三角网格重建，修正拓扑错误。",
      "ta": "对程序化生成与几何处理有参考价值，可提升重建网格拓扑正确性。",
      "src": "arXiv · cs.GR · 08-17",
      "url": "https://arxiv.org/abs/2608.16848v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "逐像素渲染难度描述符",
      "sum": "提出稳定传输机制描述符，衡量逐像素渲染难度。",
      "ta": "对蒙特卡洛渲染采样策略优化有参考价值，可提升渲染效率。",
      "src": "arXiv · cs.GR · 08-17",
      "url": "https://arxiv.org/abs/2608.16730v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "GPU资源受限虚拟机",
      "sum": "在GPU上实现资源受限虚拟机，对抗软件膨胀。",
      "ta": "对GPU计算资源管理有启发，但非TA核心方向。",
      "src": "arXiv · cs.GR · 08-17",
      "url": "https://arxiv.org/abs/2608.16387v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "身份保持视频生成新法",
      "sum": "KeyID解耦草稿与关键帧编辑，实现身份保持视频生成。",
      "ta": "对角色动画与过场生成有参考价值，可探索身份一致性控制。",
      "src": "arXiv · cs.GR · 08-17",
      "url": "https://arxiv.org/abs/2608.16154v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "任意角色语音动画生成",
      "sum": "AnyTalk无需动画数据，为任意角色生成3D语音动画。",
      "ta": "对语音驱动面部动画工作流有参考价值，可简化角色动画制作。",
      "src": "arXiv · cs.GR · 08-17",
      "url": "https://arxiv.org/abs/2608.16143v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "表面表示可微体素化",
      "sum": "提出表面表示的可微体素化方法，优化体积查询。",
      "ta": "对几何处理与体积渲染有参考价值，可提升空间查询效率。",
      "src": "arXiv · cs.GR · 08-16",
      "url": "https://arxiv.org/abs/2608.15934v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "隐式曲面ARAP正则化",
      "sum": "为隐式曲面引入ARAP正则化，保持形状刚性。",
      "ta": "对隐式曲面建模与优化有参考价值，可提升形状保真度。",
      "src": "arXiv · cs.GR · 08-16",
      "url": "https://arxiv.org/abs/2608.15933v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "可探索世界合成数据引擎",
      "sum": "WorldRover生成带丰富标注的合成视频，用于世界探索。",
      "ta": "对程序化世界生成与AI训练数据有参考价值，可提升数据质量。",
      "src": "arXiv · cs.GR · 08-16",
      "url": "https://arxiv.org/abs/2608.15659v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "不确定感知雅可比集计算",
      "sum": "提出不确定感知的雅可比集计算方法，用于多场可视化拓扑描述。",
      "ta": "拓扑描述符在科学可视化中常用，可关注其对多场数据梯度对齐分析的改进。",
      "src": "arXiv · cs.GR · 08-14",
      "url": "https://arxiv.org/abs/2608.14409v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "流体动力学可迁移潜算子",
      "sum": "提出从固定网格到移动粒子的可迁移潜算子，用于流体动力学建模。",
      "ta": "拉格朗日视角的神经算子可能为粒子流体模拟提供新思路，值得关注。",
      "src": "arXiv · cs.GR · 08-14",
      "url": "https://arxiv.org/abs/2608.14120v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "固定预算高斯体编码",
      "sum": "用各向异性高斯基元在固定预算下编码标量场，用于原位数据缩减。",
      "ta": "高斯编码策略可能影响体积数据压缩与传输，对程序化生成有参考价值。",
      "src": "arXiv · cs.GR · 08-14",
      "url": "https://arxiv.org/abs/2608.14112v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "游戏实况自动解说系统",
      "sum": "用视觉语言模型为任意游戏录像生成电竞风格口头解说。",
      "ta": "自动解说可能用于游戏内事件反馈或工具演示，但非核心渲染工作流。",
      "src": "arXiv · cs.GR · 08-14",
      "url": "https://arxiv.org/abs/2608.14016v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "G-Buffer条件生成渲染",
      "sum": "扩散模型作为学习渲染器，以G-Buffer为条件实现真实感生成。",
      "ta": "生成式渲染与G-Buffer结合可能改变TA的材质输出流程，值得精读。",
      "src": "arXiv · cs.GR · 08-14",
      "url": "https://arxiv.org/abs/2608.13929v1"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 2,
      "title": "基于大模型的发丝生成",
      "sum": "用大重建和多模态模型生成基于发丝的头发，减少手工制作依赖。",
      "ta": "发丝自动生成可大幅提升角色资产制作效率，对TA工具链有直接价值。",
      "src": "arXiv · cs.GR · 08-13",
      "url": "https://arxiv.org/abs/2608.13679v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Marionette世界状态预测",
      "sum": "模型预测世界状态、渲染几何并绘制外观，实现多模态生成。",
      "ta": "世界状态预测可能用于动态场景生成，但需确认与实时渲染的关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.14530"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "暗黑幻想材质合集发布",
      "sum": "Kai Mergener 在 Substance 3D Assets 发布 15 款暗黑幻想材质，并分享技术流程。",
      "ta": "关注 Substance 3D Designer 材质构建思路，可借鉴其风格化纹理制作流程。",
      "src": "80 Level · 08-14",
      "url": "https://80.lv/articles/build-eerie-worlds-with-this-dark-fantasy-signature-collection/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "影之刃零采用甄子丹武术动捕",
      "sum": "S-GAME 工作室使用甄子丹武术指导，为《影之刃零》战斗系统制作真实功夫动作捕捉。",
      "ta": "高质量武术动捕数据对战斗动画和特效同步有参考价值，可关注其动作设计流程。",
      "src": "80 Level · 08-14",
      "url": "https://80.lv/articles/phantom-blade-zero-uses-authentic-kung-fu-motion-capture/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "恶霸鲁尼精神续作Steam差评",
      "sum": "一款恶霸鲁尼精神续作在 Steam 发售，因技术问题获负面评价，部分玩家认可其独立魅力。",
      "ta": "技术问题导致差评的案例提醒 TA 在项目早期需重视性能与稳定性。",
      "src": "80 Level · 08-14",
      "url": "https://80.lv/articles/bully-spiritual-successor-launches-to-negative-reviews-on-steam/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Netflix关闭更多工作室",
      "sum": "Netflix 关闭更多游戏工作室，Twitch 承认使用生成式 AI，行业动态汇总。",
      "ta": "行业收缩信号，关注大厂对游戏部门投入变化，可能影响外包与工具生态。",
      "src": "Game Developer · 08-14",
      "url": "https://www.gamedeveloper.com/business/scabby-versus-sharma-twitch-s-genai-admission-and-netflix-shutters-more-studios-patch-notes-65"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "MiniDXNN 神经纹理压缩",
      "sum": "MiniDXNN v0.4.0 支持 D3D12 线性代数与实时 GUI 训练 MLP 纹理压缩。",
      "ta": "神经纹理压缩是 TA 关注的前沿方向，D3D12 实时训练与可视化工具链值得上手评估。",
      "src": "AMD GPUOpen · 08-13",
      "url": "https://gpuopen.com/learn/minidxnn-v040-interactive-neural-texture-compression/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "SCULPT 减法式部件生成",
      "sum": "SCULPT 提出减法组合方法，在生成循环内构建带结构部件的 3D 资产。",
      "ta": "部件级 3D 生成对程序化资产管线有参考价值，可关注其结构编辑与复用能力。",
      "src": "arXiv · cs.GR · 08-13",
      "url": "https://arxiv.org/abs/2608.13541v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "蓝噪声格点吉布斯模型",
      "sum": "论文将蓝噪声采样建模为格点吉布斯系综，统一统计建模与可扩展生成。",
      "ta": "蓝噪声采样是渲染与放置的核心，新理论框架可能带来更高效的采样器实现。",
      "src": "arXiv · cs.GR · 08-13",
      "url": "https://arxiv.org/abs/2608.13446v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "锥束CT金属伪影消除",
      "sum": "基于 Splat 的多色建模方法减少锥束 CT 中金属引起的束硬化伪影。",
      "ta": "虽偏医学成像，但多色 X 射线建模思路对体积渲染与材质重建有启发。",
      "src": "arXiv · cs.GR · 08-13",
      "url": "https://arxiv.org/abs/2608.13159v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "四阶 Overhauser 曲面框架",
      "sum": "提出 Quartic Overhauser 曲面生成框架，解决边界对齐与局部形状修改约束。",
      "ta": "曲面建模算法对程序化几何工具开发有参考，但偏理论，速览即可。",
      "src": "arXiv · cs.GR · 08-13",
      "url": "https://arxiv.org/abs/2608.12697v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "PlayWorld 世界模型基准",
      "sum": "PlayWorld 提出用智能体玩家在长时程目标下评测世界模型的基准。",
      "ta": "世界模型评测基准对游戏 AI 与模拟环境有参考，可关注其任务设计。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.13552"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Spline Architect GPU 实例化",
      "sum": "Spline Architect 新版本支持沿样条线 GPU 实例化 100 万物体。",
      "ta": "样条线百万级实例化对道路、管线等程序化场景布置效率提升显著。",
      "src": "80 Level · 08-13",
      "url": "https://80.lv/articles/spline-architect-s-new-version-adds-gpu-instancing-for-1-000-000-objects-along-splines/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "AAA 级独立角色管线",
      "sum": "独立开发者用 Character Creator 5 与 iClone 8 构建 AAA 级角色流程。",
      "ta": "角色资产快速管线对 UE/Unity 项目有参考，可对比现有 DCC 流程。",
      "src": "80 Level · 08-13",
      "url": "https://80.lv/articles/unveiling-the-pipeline-behind-aaa-quality-indie-game-characters/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Wild Blue Skies 轨道射击",
      "sum": "开发者分享 Unity 中现代化轨道射击游戏与日式动画风格渲染。",
      "ta": "Cel-shaded 风格化渲染与 Unity 自定义系统对风格化项目有参考。",
      "src": "80 Level · 08-13",
      "url": "https://80.lv/articles/interview-how-wild-blue-skies-modernizes-classic-on-rails-shooters/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "2K 新温哥华 AAA 工作室",
      "sum": "2K 宣布由 EA 老将 Aaron McHardy 领导新温哥华 AAA 工作室 Small Axe。",
      "ta": "新工作室成立可能带来引擎与工具链岗位机会，TA 可关注。",
      "src": "Game Developer · 08-13",
      "url": "https://www.gamedeveloper.com/business/2k-announces-new-vancouver-based-studio-led-by-ea-veteran"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Saber 否认 AI 替代编剧",
      "sum": "Saber Interactive 澄清未用 AI 替代 Rideshare 编剧，Unigine 引擎亦未参与。",
      "ta": "AI 在游戏内容生产中的边界争议，TA 需关注工具链中 AI 的合规使用。",
      "src": "Game Developer · 08-13",
      "url": "https://www.gamedeveloper.com/business/saber-interactive-denies-replacing-writers-with-ai-on-rideshare-stimulator-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Twitch 默认训练 AI 模型",
      "sum": "Twitch 默认用用户内容训练亚马逊生成式 AI，退出选项不彻底。",
      "ta": "AI 训练数据政策影响创作者权益，TA 需留意平台内容使用条款。",
      "src": "Game Developer · 08-13",
      "url": "https://www.gamedeveloper.com/marketing/twitch-will-sacrifice-you-to-its-ai-overlord-whether-you-like-it-or-not"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏保存项目恢复",
      "sum": "UNC Greensboro 游戏保存项目在资金削减后恢复，强调平台不可信。",
      "ta": "游戏资产保存对行业长期有价值，TA 可关注存档与工具链标准化。",
      "src": "Game Developer · 08-13",
      "url": "https://www.gamedeveloper.com/production/library-video-game-preservation-project-back-on-track-after-trump-funding-cuts"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "UE5.8动画示例项目更新",
      "sum": "UE5.8版Game Animation Sample Project发布，新增物理、运动匹配、姿态搜索和注视功能。",
      "ta": "直接对标UE5.8最新动画管线，是验证运动匹配与物理融合效果的官方参考。",
      "src": "Unreal Engine · 08-12",
      "url": "https://www.unrealengine.com/tech-blog/download-the-latest-game-animation-sample-project-now-updated-for-ue-5-8"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "测地线切割单元蒙皮先验",
      "sum": "提出cut-cell skinning几何先验，增强数据驱动蒙皮权重生成的泛化性。",
      "ta": "对程序化角色绑定和蒙皮权重优化有参考价值，可改善数据驱动方法的几何鲁棒性。",
      "src": "arXiv · cs.GR · 08-11",
      "url": "https://arxiv.org/abs/2608.11272v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "物理反射模拟与视频去反射",
      "sum": "提出物理接地反射模拟与扩散模型视频去反射方法。",
      "ta": "反射模拟与去反射技术对材质开发和光照调试有潜在应用。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2608.11562"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "手绘2D与3D环境融合",
      "sum": "Lunarium团队分享手绘2D美术、3D几何、自定义光照与Unity工具结合的制作流程。",
      "ta": "手绘风格化渲染的实战案例，对非真实感管线和美术风格统一有借鉴意义。",
      "src": "80 Level · 08-12",
      "url": "https://80.lv/articles/how-lunarium-blends-hand-painted-2d-art-with-3d-environments/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 2,
      "title": "GPU计算程序化2D草",
      "sum": "Jarl游戏实现GPU Compute程序化2D草，提供浏览器交互演示。",
      "ta": "GPU Compute生成植被的轻量方案，对移动端或风格化场景的草渲染有直接参考。",
      "src": "80 Level · 08-12",
      "url": "https://80.lv/articles/building-procedural-2d-grass-with-gpu-compute/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender纹理绘制插件MatPlus",
      "sum": "MatPlus在Blender内实现类似Substance Painter的3D模型直接绘制，支持多UDIM和游戏贴图导出。",
      "ta": "Blender内完成贴图绘制可简化资产管线，对依赖Substance的TA是潜在替代工具。",
      "src": "80 Level · 08-12",
      "url": "https://80.lv/articles/matplus-brings-substance-3d-painter-inspired-texture-painting-to-blender/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Epic出售ArtStation与Sketchfab",
      "sum": "Epic Games将ArtStation和Sketchfab出售给KitBash，两平台于2021年收购。",
      "ta": "资产平台易主可能影响TA常用的资产获取与分享生态，需关注后续整合。",
      "src": "Game Developer · 08-12",
      "url": "https://www.gamedeveloper.com/business/epics-sells-artstation-and-sketchfab-to-kitbash"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "高斯雕刻实现可控表面重建",
      "sum": "3DGS新方法Gaussian Sculpting通过场优化实现端到端可控表面重建，解决几何误差难题。",
      "ta": "对依赖3DGS做扫描资产重建的TA，此法可显著提升表面精度与可控性，值得精读。",
      "src": "arXiv · cs.GR · 08-11",
      "url": "https://arxiv.org/abs/2608.10602v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "Amulet实现高频帧外推渲染",
      "sum": "新渲染法Amulet用稀疏分层场景表示与自适应着色，实现高频帧外推，优于重投影技术。",
      "ta": "对追求高帧率或VR体验的TA，此法可突破帧生成瓶颈，是渲染管线的重要参考。",
      "src": "arXiv · cs.GR · 08-11",
      "url": "https://arxiv.org/abs/2608.10423v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "物理野火模拟融入高斯场景",
      "sum": "WildFireGS在语义增强的高斯泼溅森林场景中实现基于物理的野火模拟，兼顾真实与规模。",
      "ta": "对做环境特效或程序化植被的TA，此方法展示了GS场景中物理模拟的集成路径。",
      "src": "arXiv · cs.GR · 08-11",
      "url": "https://arxiv.org/abs/2608.11100v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "GENEA挑战评估手势生成",
      "sum": "第四届GENEA挑战赛发布结果，大规模评估五个语音驱动手势生成系统在对话数据集上的表现。",
      "ta": "对关注NPC动画或程序化动作的TA，可了解当前语音驱动手势生成的技术水平。",
      "src": "arXiv · cs.GR · 08-11",
      "url": "https://arxiv.org/abs/2608.10839v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Three.js纯着色器构建外星生物",
      "sum": "开发者Drin展示在Three.js中完全用着色器数学构建的无网格外星生物。",
      "ta": "对WebGL或轻量级渲染的TA，此案例展示了纯Shader建模的极致技巧与思路。",
      "src": "80 Level · 08-11",
      "url": "https://80.lv/articles/this-alien-has-no-mesh-is-built-in-three-js-with-shader-math/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "文字构建FPS游戏解析",
      "sum": "开发者Yechan Choi分享文字FPS游戏《Torizon Telecom》的创作历程与机制设计。",
      "ta": "对探索非传统渲染或UI交互的TA，此案例提供了独特的视觉与玩法结合思路。",
      "src": "80 Level · 08-11",
      "url": "https://80.lv/articles/torizon-telecom-an-fps-built-entirely-out-of-letters-and-words/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《1666阿姆斯特丹》定档",
      "sum": "Panache Digital Games宣布《1666: Amsterdam》抢先体验日期并公布新玩法视频。",
      "ta": "对关注行业动态的TA，可留意此作的开发进展与美术风格。",
      "src": "80 Level · 08-11",
      "url": "https://80.lv/articles/1666-amsterdam-s-early-access-launch-date-revealed/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《影之刃零》公布实机演示",
      "sum": "《Phantom Blade Zero》开启预购，并宣布8月17日State of Play将深度展示实机玩法。",
      "ta": "对关注动作游戏画面表现的TA，可留意其后续实机演示中的渲染与特效。",
      "src": "PlayStation Blog · 08-12",
      "url": "https://blog.playstation.com/2026/08/11/watch-the-phantom-blade-zero-gameplay-deep-dive-state-of-play-on-august-17-pre-orders-live-today/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《金刚狼》限定PS5公布",
      "sum": "Insomniac Games公布《漫威金刚狼》主题PS5数字版限定主机捆绑包及配件。",
      "ta": "对行业动态感兴趣的TA，可快速了解该作的市场营销节奏。",
      "src": "PlayStation Blog · 08-11",
      "url": "https://blog.playstation.com/2026/08/11/first-look-at-marvels-wolverine-limited-edition-ps5-console-bundle-and-accessories/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前育碧员工成立新工作室",
      "sum": "前育碧巴塞罗那员工在裁员后成立新工作室Dark Ritual Studios。",
      "ta": "对行业生态关注的TA，可留意新团队的动向与潜在项目。",
      "src": "Game Developer · 08-11",
      "url": "https://www.gamedeveloper.com/business/former-ubisoft-barcelona-devs-launch-dark-ritual-studios"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Supermassive再启裁员",
      "sum": "英国工作室Supermassive Games三年内第三轮裁员，计划裁减多达75个职位。",
      "ta": "对行业稳定性关注的TA，需了解当前游戏行业的就业形势。",
      "src": "Game Developer · 08-11",
      "url": "https://www.gamedeveloper.com/business/supermassive-games-begins-third-round-of-layoffs-in-three-years"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "英国订阅提案引担忧",
      "sum": "Ukie称英国限制性订阅提案可能损害游戏企业，阻碍投资并造成财务风险。",
      "ta": "对商业模式敏感的TA，可关注此政策对游戏发行与订阅制的影响。",
      "src": "Game Developer · 08-11",
      "url": "https://www.gamedeveloper.com/business/ukie-claims-restrictive-subscription-proposals-could-harm-uk-game-businesses-in-the-uk"
    },
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
    }
  ]
};
