// daily-intel 近期热点层 —— 由 run.py 自动累积，供「近期」入口翻阅。
// 与 data.js（仅今日新增）分离：data.js 是“今天有什么新的”，recent.js 是“近期攒了啥”。

window.INTEL_RECENT = {
  "updated": "2026-10-15 13:45",
  "cards": [
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "UE6将整合UEFN与虚幻引擎",
      "sum": "Epic路线图显示UE6将把虚幻引擎与UEFN合并，官方推出免费UEFN训练营。",
      "ta": "UE6整合UEFN意味着编辑器与运行时工具链可能统一，植被/程序化工具需提前关注UEFN侧能力边界。",
      "src": "Unreal Engine · 10-14",
      "url": "https://www.unrealengine.com/news/uefn-professional-bootcamp-prepare-for-unreal-engine-6"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 2,
      "title": "GTA6因海量智能NPC延期",
      "sum": "彭博社披露Rockstar打造最雄心作品，海量智能NPC是GTA6延期原因之一。",
      "ta": "海量智能NPC对CPU预算、群体AI调度与LOD策略提出极高要求，值得关注其实现取舍。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/enormous-number-of-smart-npcs-was-one-of-reasons-for-gta-6-delay/"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 3,
      "title": "Epic迪士尼项目转向AI优先",
      "sum": "报道称Epic旗下星战与漫威射击项目要求大量依赖AI，尤其用于代码与美术创作。",
      "ta": "若美术生产转向AI优先，TA需重新评估资产管线、材质规范与AI产出的可维护性。",
      "src": "Game Developer · 10-14",
      "url": "https://www.gamedeveloper.com/programming/no-more-hand-written-code-epic-s-disney-project-reportedly-shifts-to-ai-first-development"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "GLoD-LVSM连续LOD场景表示",
      "sum": "提出几何锚定的紧凑场景表示，为大规模视图合成模型提供连续LOD以降低存储与渲染开销。",
      "ta": "连续LOD与token冗余削减思路，对程序化植被的层级细节与实例化策略有参考价值。",
      "src": "arXiv · cs.GR · 10-14",
      "url": "https://arxiv.org/abs/2610.20254v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "VisibilitySplat光线追踪遮挡重光照",
      "sum": "为3DGS引入显式可见性建模，用稀疏可见性预言机估计透射率加权遮挡以支持重光照与材质光照分解。",
      "ta": "3DGS重光照与材质分解若成熟，可用于扫描植被资产的光照一致化与材质复用。",
      "src": "arXiv · cs.GR · 10-14",
      "url": "https://arxiv.org/abs/2610.19847v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Q-MAGIC生成纯四边形网格",
      "sum": "提出奇点感知的循环相对偏移token化，实现自回归生成纯四边形网格。",
      "ta": "纯四边形拓扑生成对建模与重拓扑流程有潜在价值，可关注其拓扑质量与可控性。",
      "src": "arXiv · cs.GR · 10-14",
      "url": "https://arxiv.org/abs/2610.19777v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "光谱世界渲染器统一高光谱解混",
      "sum": "提出统一3D高光谱解混方法，将每个光谱解释为材质特征混合而非仅对渲染图像后处理。",
      "ta": "材质识别与解混思路或可用于程序化材质分层与扫描资产的材质分类。",
      "src": "arXiv · cs.GR · 10-14",
      "url": "https://arxiv.org/abs/2610.19520v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "DiffGIPC可微混合坐标接触动力学",
      "sum": "提出GPU上的可微混合坐标接触动力学，兼顾高效梯度与非穿透约束。",
      "ta": "可微接触仿真对布料、植被碰撞与破坏效果的可微调参有潜在借鉴意义。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.19091v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "RoboSimStudio交互式Real2Sim工具",
      "sum": "推出交互式工具包，支持机器人操作任务的快速真实到仿真，涵盖求解器与接触参数选择。",
      "ta": "接触力学与求解器选择思路对物理交互效果调参有间接参考，非直接游戏向。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.18835v2"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "RAR自适应rollout交互世界模型",
      "sum": "提出速率自适应rollout方法，用于时间一致的交互式世界模型。",
      "ta": "交互式世界模型的时间一致性若落地，可用于实时预览与程序化生成的动态验证。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.16302"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "VITAL从视觉运动到精确动作",
      "sum": "提出从视觉运动信息到精确动作的映射方法。",
      "ta": "视觉到动作的映射思路对动画驱动与动作捕捉后处理有间接参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.20604"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "TextVerifier验证中文文本渲染",
      "sum": "提出超越识别的验证方法，用于校验中文文本渲染质量。",
      "ta": "文本渲染验证对UI与贴图文字自动化质检有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.19551"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "MimicX视频驱动人形动作跟踪",
      "sum": "提出策略在环的监督精炼方法，用于视频驱动的人形动作跟踪。",
      "ta": "视频驱动动作跟踪若成熟，可降低动画捕捉与重定向成本。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.09055"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "MetaHuman动画工具免费更新",
      "sum": "Anthony Koithra的Locodrome角色动画工具更新，让虚幻引擎动画制作更简单快速。",
      "ta": "免费MetaHuman动画工具可直接用于角色动画原型与快速迭代，值得试用。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/grab-this-updated-metahuman-animation-tool-for-free/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Photoshop 3D取色器预览色相",
      "sum": "ColgArt推出Chroma Space面板，带实时3D视口，可在上色前于3D元素上预览颜色。",
      "ta": "3D取色预览可减少贴图绘制反复试错，对材质配色流程有提效价值。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/color-picker-for-photoshop-that-lets-you-see-hues-on-3d-shapes-before-painting-them/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "育碧关闭RedLynx并缩减新加坡",
      "sum": "育碧将关闭Trials工作室RedLynx并缩减育碧新加坡，影响超120个岗位。",
      "ta": "行业持续重组，关注其对引擎与工具团队规模及外包协作模式的连带影响。",
      "src": "Game Developer · 10-14",
      "url": "https://www.gamedeveloper.com/business/ubisoft-to-close-trials-studio-redlynx-downsize-ubisoft-singapore"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox Labs复活经典并移植",
      "sum": "Xbox推出Project Xbox Labs，聚焦经典游戏复活、移植到苹果电脑与网页，并支持模组作者。",
      "ta": "跨平台移植与模组支持可能带来新的资产兼容与工具链需求。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/xbox-launches-new-project-xbox-labs-to-revive-classics-port-games-explore-new-features/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rockstar联合创始人回顾经典",
      "sum": "Dan Houser分享GTA3、Bully等经典制作回忆，包括GTA3盒图最后一刻改动。",
      "ta": "经典项目复盘对理解开放世界设计取舍有参考，非技术直接相关。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/rockstar-co-founder-looks-back-at-making-gta-3-bully-other-classics/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "War Robots谈中国手游发行",
      "sum": "War Robots高管分享自2014年以来的留存经验，谈过度本地化风险与中国玩家差异。",
      "ta": "面向中国市场的发行经验对国内项目运营有参考，与技术管线无关。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/war-robots-exec-on-the-nuances-of-launching-mobile-games-for-chinese-players/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Annapurna发行老人公路冒险",
      "sum": "Third Shift开发的Forever Ago由Annapurna发行，是一款第三人称情感冒险游戏。",
      "ta": "叙事向独立作品，与TA技术方向无直接关联，速览即可。",
      "src": "80 Level · 10-14",
      "url": "https://80.lv/articles/annapurna-releases-a-heartbreaking-third-person-adventure-about-an-old-man-on-a-road-trip/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender开发者BCON26演讲",
      "sum": "Blender年度主活动结束后，开发者演讲内容现已可回看。",
      "ta": "Blender开发者演讲可能涉及几何节点与渲染管线更新，值得按需回看。",
      "src": "Blender 开发博客 · 10-14",
      "url": "https://code.blender.org/2026/10/bcon26-talks-by-blender-developers/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 1,
      "title": "全UE流程做手绘风动画",
      "sum": "Dardo Studios用Control Rig、Sequencer、Lumen在UE内完成整部动画，无Maya到引擎管线。",
      "ta": "值得看小团队如何用Control Rig+Sequencer替代传统动画管线，Lumen与投影手绘叠加的合成思路可复用。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/how-this-painterly-animated-short-was-rigged-animated-entirely-in-unreal-engine/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini曲线生成服装工具",
      "sum": "新工具Fibric基于曲线在Houdini中创建服装与布料。",
      "ta": "程序化布料生成思路可借鉴到植被/装饰物的曲线驱动建模流程。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/new-curve-based-clothing-garment-creation-houdini-tool-released/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender自动UV展开插件",
      "sum": "免费插件UVgami可快速自动展开UV，支持浏览器试用。",
      "ta": "批量资产UV自动化对植被/道具流水线有直接提效价值。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/this-free-blender-add-on-quickly-automates-uv-unwrapping/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender单对象万级撤销",
      "sum": "Sculpt Rewind插件把ZBrush的History Recall Brush带入Blender，每对象可撤销万次。",
      "ta": "雕刻阶段的历史回溯能力，对高模细节迭代有用。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/undo-history-for-each-blender-object-10-000-times-with-this-add-on/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "19个免费万圣节动捕",
      "sum": "Anderson Rohr发布僵尸、怪物、吸血鬼等19个免费动捕动画包。",
      "ta": "免费动捕资源可作原型或NPC动画填充。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/get-ready-for-halloween-with-these-19-free-mocap-animations/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Mystery House经典重制",
      "sum": "Guillotine Games谈用现代工具重制1980年Apple II经典Mystery House 3D的挑战。",
      "ta": "老游戏视觉语言现代化重制的案例参考。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/reviving-mystery-house-roberta-and-ken-williams-1980-apple-ii-classic/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "权游S3视效解析",
      "sum": "Rodeo FX分享《龙之家族》第三季视效拆解，共制作超45000帧。",
      "ta": "大规模影视VFX流程与帧量级参考。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/rodeo-fx-shared-their-house-of-the-dragon-season-3-vfx-breakdown/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "实时瀑布建造游戏",
      "sum": "Mogmek的Waterfalls Dream让玩家实时创建和编辑风格化瀑布。",
      "ta": "实时流体/瀑布编辑交互设计可作参考。",
      "src": "80 Level · 10-13",
      "url": "https://80.lv/articles/this-game-allows-you-to-create-your-own-stylized-waterfalls-with-realistic-behavior/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "精灵动画关键帧插值",
      "sum": "低成本深度学习方案为精灵动画自动生成中间帧，避免写实插值的平滑伪影。",
      "ta": "针对像素/精灵内容的插值方法，对2D游戏动画工具链有参考价值。",
      "src": "arXiv · cs.GR · 10-12",
      "url": "https://arxiv.org/abs/2610.16423v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "相机可控图生视频框架",
      "sum": "Gen Through the Lens通过跨坐标条件融合实现物理一致的相机运镜图生视频。",
      "ta": "相机可控生成对预演/虚拟拍摄的镜头设计有潜在价值。",
      "src": "arXiv · cs.GR · 10-11",
      "url": "https://arxiv.org/abs/2610.15900v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "跨族运动补全解耦尺度",
      "sum": "Cepheid解耦尺度与结构，解决稀疏到稠密运动补全的跨几何族泛化问题。",
      "ta": "网格运动补全的泛化思路，对角色/形变动画工具有启发。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.18871v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态抓取序列合成",
      "sum": "Learning Dynamic Grasping合成可信的4D手-物抓取序列，用于角色动画与XR。",
      "ta": "手物交互合成对角色动画与VR交互有直接参考。",
      "src": "arXiv · cs.GR · 10-10",
      "url": "https://arxiv.org/abs/2610.14848v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "骨骼关节球面四边形化",
      "sum": "从无序方向向量集构造球面简单四边形化，用于骨骼关节参数化体积模型。",
      "ta": "参数化体积建模的拓扑构造方法，对程序化角色/关节建模有参考。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.17803v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CAD图纸全景符号识别",
      "sum": "TempFit用模板拟合方法解决CAD图纸的全景符号识别问题。",
      "ta": "图纸符号识别思路可迁移到场景资产/图元的自动解析。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.17776v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "投影球面行走等距嵌入",
      "sum": "WoAP将嵌入视为求解变量，改进Projected Walk on Spheres的表面PDE求解。",
      "ta": "几何PDE求解器改进，对程序化纹理/距离场有潜在价值。",
      "src": "arXiv · cs.GR · 10-11",
      "url": "https://arxiv.org/abs/2610.15573v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "可加工性拓扑优化",
      "sum": "用裁剪神经场做面向减材加工的拓扑优化，减少点铣加工。",
      "ta": "制造约束下的几何优化思路，与游戏资产关联较弱。",
      "src": "arXiv · cs.GR · 10-11",
      "url": "https://arxiv.org/abs/2610.15301v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "全息感知目标函数",
      "sum": "HoOPOE提出全息优化的感知目标函数，缓解计算机生成全息的散斑伪影。",
      "ta": "全息显示方向，与实时渲染管线关联有限。",
      "src": "arXiv · cs.GR · 10-12",
      "url": "https://arxiv.org/abs/2610.17474v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "内容编辑式版式生成",
      "sum": "CELG提出内容编辑式条件版式生成，扩展内容感知版式生成。",
      "ta": "图形设计版式生成，与游戏UI自动化有弱关联。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.17905v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "LLM协同设计空间概念",
      "sum": "Co-DSL让用户与LLM协同设计可复用的空间概念用于版式生成。",
      "ta": "人机协同的布局生成框架，可参考到关卡/场景布局工具。",
      "src": "arXiv · cs.GR · 10-11",
      "url": "https://arxiv.org/abs/2610.15290v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "机器人Real2Sim交互工具",
      "sum": "RoboSimStudio提供交互式工具包，快速实现机器人操作任务的Real2Sim。",
      "ta": "物理仿真求解器选择与接触建模，与游戏物理有间接参考。",
      "src": "arXiv · cs.GR · 10-13",
      "url": "https://arxiv.org/abs/2610.18835v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "可执行3D世界建模基准",
      "sum": "ExeWorldBench基准评测基于代码的可执行3D世界建模。",
      "ta": "可执行3D世界生成评测，对程序化世界生成方向有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.15166"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "多人世界模型分层通信",
      "sum": "Multics提出带分层通信的生成式多人世界模型。",
      "ta": "多人世界模型对多人游戏状态预测有潜在启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.17201"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "4D一致生成几何修复",
      "sum": "GeoFix通过几何修复实现4D一致生成。",
      "ta": "4D一致性生成对动态资产/序列生成有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.14293"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "高分辨率扩散注意力优化",
      "sum": "AReA提出自适应感受野注意力，提升高分辨率扩散Transformer效率。",
      "ta": "注意力效率优化思路对高分辨率生成/渲染有借鉴意义。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.17227"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型自参考优势学习",
      "sum": "SALD提出自参考优势学习用于扩散模型。",
      "ta": "扩散训练方法，与游戏资产生成间接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.01496"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "混合模型解码状态存储优化",
      "sum": "NVIDIA 提出 ReplaySSM，重构 SSM 与注意力混合模型的 state 存储以加速解码。",
      "ta": "若团队在本地跑 Nemotron/Qwen 类混合模型做工具链推理，可关注其显存与吞吐权衡。",
      "src": "NVIDIA · 10-12",
      "url": "https://developer.nvidia.com/blog/replayssm-rethinking-state-storage-for-faster-hybrid-model-decoding/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "任意分辨率曲面重建新法",
      "sum": "T3lescope 从图像做任意分辨率高保真生成式曲面重建。",
      "ta": "曲面重建若成熟，可接入扫描资产到引擎的自动化管线，值得跟踪精度与拓扑质量。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.03308"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 2,
      "title": "实时软体切割剥离仿真",
      "sum": "KAIST 的 OmniBody 用椭球粒子、局部 XPBD 约束与 GPU 并行实现可形变可破坏物体实时仿真。",
      "ta": "无需全局求解器与重网格化，对破坏类特效与程序化碎裂的实时方案有直接参考价值。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/this-soft-body-simulation-can-cut-peel-break-objects-in-real-time/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "真实物体影子玩平台跳跃",
      "sum": "导演 Tee Ken Ng 展示混合现实游戏 Plato，用现实物体投影作为玩法元素。",
      "ta": "影子识别与投影对齐的交互思路，对 AR 类玩法原型有启发。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/this-platformer-lets-you-use-shadows-of-real-life-objects-to-play/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "拆城建停车场游戏抢先体验",
      "sum": "Car Park Capital 上线抢先体验，玩法是拆房毁绿建停车场。",
      "ta": "与 TA 工作无直接关联，行业速览。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/this-game-where-you-replace-an-entire-city-with-shiny-parking-lots-is-out-in-early-access/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "毛线等距城市建造游戏",
      "sum": "Cotton City 让玩家用毛线质感搭建等距城市，含桥梁道路房屋与树木。",
      "ta": "等距植被与场景摆放的视觉风格参考，速览即可。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/srochet-your-own-cozy-isometric-city-with-cotton-in-this-cute-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "寂静岭将推二三波作品",
      "sum": "系列制作人称 Konami 正规划第二、第三波寂静岭游戏项目。",
      "ta": "纯行业动向，与 TA 技术工作无关。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/silent-hill-producer-says-konami-plans-second-and-third-waves-of-games/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "3DGS场景可动水面动画",
      "sum": "新方法让3D高斯泼溅静态场景支持动态水面流动动画。",
      "ta": "3DGS动态化是实时渲染热点，植被/流体TA可关注其运动合成思路。",
      "src": "arXiv · cs.GR · 10-09",
      "url": "https://arxiv.org/abs/2610.13860v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "空间音频流式动作生成",
      "sum": "Sonic-AMG从空间音频流式生成人体动作，模拟实时反应。",
      "ta": "音频驱动动作生成，可关注其在游戏角色实时动画中的潜力。",
      "src": "arXiv · cs.GR · 10-09",
      "url": "https://arxiv.org/abs/2610.13300v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "优先化人形动作重定向",
      "sum": "PriMoRetarget用优先化重定向处理多角色多物体交互动作迁移。",
      "ta": "多接触动作重定向，对角色动画管线与物理交互有参考。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.12642v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型强化学习框架",
      "sum": "DiffusionART提出高效稳定的扩散模型强化方法。",
      "ta": "扩散模型训练优化，与3D生成/材质生成间接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12572"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散语言模型免校准量化",
      "sum": "SoloQ为扩散语言模型提供免校准量化方案。",
      "ta": "量化技术偏LLM，与实时渲染关联弱，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.07121"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "游戏智能体启发式学习评测",
      "sum": "在长时游戏智能体竞赛中评测启发式学习效果。",
      "ta": "游戏AI智能体研究，与TA工具链关联有限。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12341"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型递归自改进",
      "sum": "RSI-Anything用世界模型实现递归自我改进。",
      "ta": "世界模型自改进，与游戏AI/生成间接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.13912"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "表征引导像素扩散Transformer",
      "sum": "学习表征以引导像素扩散Transformer生成。",
      "ta": "扩散生成质量优化，与材质/贴图生成间接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12978"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "激活波分析加速推测解码",
      "sum": "分析LLM隐状态信息与几何以优化推测解码。",
      "ta": "LLM推理加速，与实时渲染无直接关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12939"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "潜空间语义压缩奖励建模",
      "sum": "在潜空间用语义保持压缩做高效生成式奖励建模。",
      "ta": "奖励建模偏LLM训练，与TA工作流关联弱。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.09788"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender泳池VFX病毒短片",
      "sum": "BrutalDuck用Blender、Omniscient App与AE制作病毒泳池VFX。",
      "ta": "VFX拆解可看Blender+AE合成流程，对特效制作有参考。",
      "src": "80 Level · 10-12",
      "url": "https://80.lv/articles/this-viral-pool-clip-was-made-using-blender-omniscient-app-after-effects/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "第一人称恐怖新作Farsight公布",
      "sum": "Studio Noori新作让玩家用望远镜、对讲机和90年代手持摄像机探索后室风格房屋。",
      "ta": "可关注其90年代手持摄像机UI与后室氛围的视觉呈现手法，作为恐怖游戏氛围参考。",
      "src": "80 Level · 10-10",
      "url": "https://80.lv/articles/in-this-first-person-horror-eye-exam-pulls-you-into-backrooms-style-house/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "模块化灯塔场景制作解析",
      "sum": "作者分享可平铺材质、材质平滑过渡技巧，及手工雕刻植物图集做风格化植被。",
      "ta": "植被图集+可平铺材质混合方案，对程序化植被工具与风格化场景搭建有直接参考价值。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/how-to-build-an-atmospheric-stylized-lighthouse-scene-with-a-custom-modular-set/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "PS1与N64模型资产免费归档",
      "sum": "Pardall Games 建立 PS1、N64 时代 3D 模型与游戏资产的免费在线存档库。",
      "ta": "低模资产可作风格化参考或复古项目素材来源，注意版权与授权范围。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/free-online-archive-of-ps1-n64-3d-models-game-assets/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "节奏RPG十年三次重做",
      "sum": "Nocturne 开发者讲述十年开发中三次重做，及战斗、工具、像素美术与现场管弦乐制作。",
      "ta": "长周期小团队的工具与美术迭代复盘，可速览其战斗与工具链取舍。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/this-rhythm-rpg-was-rebuilt-three-times-during-its-10-year-development/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏长线运营靠主动运维",
      "sum": "文章称平稳的游戏上线并非运气，而是发布前长期准备工作的结果。",
      "ta": "偏运维与发布流程，与TA日常关联弱，速览即可。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/proactive-not-reactive-24-years-of-keeping-games-online/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "目标导向视频世界模型",
      "sum": "WorldGuide 提出面向程序化任务执行的目标导向视频世界模型。",
      "ta": "世界模型若用于任务序列生成，或可启发程序化生成与工具自动化，但需确认实时性。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12459"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型推测解码加速",
      "sum": "SpecFold 通过折叠多分支冗余，加速扩散语言模型的推测解码。",
      "ta": "推理加速方向，与实时渲染管线无直接关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.04875"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多任务强化学习GPU并行框架",
      "sum": "提出面向异构多任务强化学习的 GPU 并行框架。",
      "ta": "训练框架类论文，未提及游戏或实时渲染，关联度低。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.03335"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "仿真合成企业数据",
      "sum": "通过可扩展的智能体-系统交互仿真，生成连贯的企业数据。",
      "ta": "纯数据合成方向，与游戏/实时渲染无关，建议丢弃。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.10549"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS官方播客第550期",
      "sum": "PlayStation 官方播客回归，聊近期通关游戏、新冒险与听众来信。",
      "ta": "纯播客内容，无技术信息，速览即可。",
      "src": "PlayStation Blog · 10-09",
      "url": "https://blog.playstation.com/2026/10/09/official-playstation-podcast-episode-550-now-this-is-podcasting/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "雅达利800XL复刻开售",
      "sum": "雅达利 1980 年代经典电脑 800XL 回归，支持现代显示并内置 25 款游戏。",
      "ta": "怀旧硬件新闻，与TA工作无关，速览即可。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/atari-s-iconic-1980s-computer-is-back-available-for-purchase/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "低多边形实体家居装饰",
      "sum": "荷兰法波设计师 Jonas Hejduk 为现实世界制作低多边形实体装饰资产。",
      "ta": "低模美术的跨界应用，趣味参考，与生产管线无关。",
      "src": "80 Level · 10-09",
      "url": "https://80.lv/articles/this-real-life-low-resolution-interior-design-decor-turns-any-space-into-a-retro-game-scene/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "镜面光照神经缓存新方案",
      "sum": "提出面向镜面光照的NRC变体，用反射方向参数化与粗糙度相关辐射目标。",
      "ta": "实时路径追踪镜面反射降噪直接相关，UE5光追管线值得关注。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.11702v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "可微渲染引入敏感度AOV",
      "sum": "将敏感度作为可微渲染的任意输出变量，为导数提供可分解检查的表示。",
      "ta": "为渲染管线调试与参数分析提供新维度，Shader/材质优化可借鉴。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.10852v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "刚体交互局部接触神经模拟",
      "sum": "RiCo通过局部接触推理实现刚体交互的神经模拟。",
      "ta": "物理模拟精度提升方向，对破坏/交互特效有潜在参考。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.12333v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "复用前帧的局部视图合成",
      "sum": "LVS利用相机小位移时图像重叠，复用已渲染视图加速新视角合成。",
      "ta": "3DGS渲染加速思路，对实时场景探索性能优化有启发。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.12127v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "网格转SubD的建模代理工作流",
      "sum": "SubDGuide用建模师启发的代理工作流从密集网格重建细分曲面控制笼。",
      "ta": "程序化建模与拓扑重建工具链可参考其控制笼推断逻辑。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.11721v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "局部PCA正则的高斯泼溅",
      "sum": "PCAsplat用局部PCA正则优化3DGS，改善被遮挡高斯的学习。",
      "ta": "3DGS重建质量提升，对场景扫描与植被重建有参考价值。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.11011v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "免训练物理感知流体视频生成",
      "sum": "Fluid-Gen-Zero将运动交给物理模拟器，外观交给预训练视频生成器。",
      "ta": "流体特效生成思路，物理与外观解耦对Niagara流体有启发。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.10984v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "常数内存可微光追反向传播",
      "sum": "ResLRB实现内存与路径长度无关的反向模式可微光追。",
      "ta": "可微渲染内存瓶颈突破，对渲染管线研究有参考意义。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.10847v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "特征保持压缩通用框架",
      "sum": "FeatureZ通过逐点边界与星形分类实现几何拓扑特征保持的有损压缩。",
      "ta": "科学可视化数据压缩，与游戏资产管线关联较弱，速览即可。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.12371v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "扩散模型反事实响应轨迹归因",
      "sum": "提出反事实响应轨迹方法，追踪扩散模型输出到训练样本的归因。",
      "ta": "AI生成内容溯源，对生成资产版权与调试有潜在价值。",
      "src": "arXiv · cs.GR · 10-08",
      "url": "https://arxiv.org/abs/2610.11238v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "多智能体自我中心世界模型",
      "sum": "提出多智能体自我中心世界模型，支持细粒度具身交互。",
      "ta": "交互式环境模拟方向，对游戏AI与仿真环境构建有启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12299"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "动作忠实机器人世界模型",
      "sum": "DreamTrue用反事实后训练构建动作忠实的机器人世界模型。",
      "ta": "世界模型动作忠实度提升，对交互仿真有潜在参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.12468"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "流式全景世界模型导航",
      "sum": "SPW-Nav提出语言引导导航的流式全景世界模型。",
      "ta": "导航与全景生成，与游戏TA工作流关联较弱。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.08941"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "智能体语言世界模型",
      "sum": "从轨迹到智能体世界：面向交互环境模拟的智能体语言世界模型。",
      "ta": "交互环境模拟方向，与实时渲染关联间接。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.06100"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "RizomUV 2027大幅升级",
      "sum": "RizomUV 2027带来更快展开、实时更新、完整UI定制与无头操作。",
      "ta": "UV工具链重大更新，场景级UV管理与管线支持值得关注。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/rizomuv-2027-introduces-faster-unfolding-live-updates-full-ui-customization/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "手绘风格矿车道具制作教程",
      "sum": "Raphael Fabris分享手绘纹理风格化矿车道具的制作技巧与拓扑经验。",
      "ta": "手绘纹理与跨软件工作流技巧，可速览借鉴。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/how-to-make-a-stylized-game-ready-minecart-prop-using-hand-painted-textures/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "实时WebGL着色器触感UI",
      "sum": "展示由实时WebGL着色器驱动的触感UI效果。",
      "ta": "着色器交互效果参考，速览即可。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/explore-this-tactile-ui-powered-by-real-time-webgl-shader/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "转描技术打造恐怖美术",
      "sum": "Wych Elm拆解Silver Pines的手工美术管线，含1800帧角色与转描怪物。",
      "ta": "非主流美术管线案例，对风格化表现有参考。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/how-silver-pines-used-rotoscoping-to-create-its-unsettling-horror/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "谷歌发布AI游戏创作平台",
      "sum": "Google推出Playground平台，让用户用AI制作游戏。",
      "ta": "AI游戏创作工具动向，关注其对原型制作流程的潜在影响。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/google-released-its-own-game-creation-platform/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox成立XP新部门",
      "sum": "Xbox CEO宣布成立XP部门，专注游戏周边IP拓展业务。",
      "ta": "行业商业动向，与TA工作关联较弱。",
      "src": "Game Developer · 10-08",
      "url": "https://www.gamedeveloper.com/console/xbox-ceo-unveils-new-xbox-division-for-game-adjacent-ventures-named-xp-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "招魂改编恐怖游戏将发售",
      "sum": "Netflix与Until Dawn开发商合作的《招魂》改编游戏即将推出。",
      "ta": "行业产品新闻，速览即可。",
      "src": "80 Level · 10-08",
      "url": "https://80.lv/articles/horror-game-from-netflix-until-dawn-s-developers-based-on-the-conjuring-is-coming-soon/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "多物理场仿真综述出炉",
      "sum": "arXiv 综述系统梳理视觉计算中多物理场仿真的各类技术。",
      "ta": "做流体/破碎/布料特效可当工具书索引，找可复用的物理建模方法。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09822v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "小波约束扩散生成全身语音动作",
      "sum": "DynaConTalk 用小波约束扩散解决长时语音动作过平滑问题。",
      "ta": "长时程角色动画生成思路，可参考其分频解耦策略处理手势与表情。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09846v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "单图重建物理稳定抓握手势",
      "sum": "StableGrasp 从单张 RGB 图重建物理稳定的手部抓取姿态。",
      "ta": "涉及物理约束下的姿态估计，对角色手部交互与道具抓取动画有参考价值。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.09195v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "肌电驱动高表现力面部动画",
      "sum": "emg2face 用高密度表面肌电实现面部动画，解决 HMD 遮挡下的捕捉难题。",
      "ta": "VR 头显遮挡面部时的表情捕捉替代方案，关注其信号到动画的映射管线。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09304v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "技能组合实现长时程全身控制",
      "sum": "Co²Skill 通过技能组合实现长时程人-环境交互的全身控制。",
      "ta": "物理角色控制的分层组合思路，可借鉴到 NPC 全身交互行为生成。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09291v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "涂鸦编辑图像基准发布",
      "sum": "ScribbleEdit 提出仅凭涂鸦输入的图像编辑基准，评估现有模型能力。",
      "ta": "交互式编辑意图理解评测，对材质/贴图快速迭代工具有潜在启发。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.09382v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "赛车遥测分析教练框架",
      "sum": "TRACK 框架分析模拟赛车驾驶表现并对车手行为聚类画像。",
      "ta": "遥测数据分析方法，可迁移到游戏内玩家行为分析与自适应难度设计。",
      "src": "arXiv · cs.GR · 10-07",
      "url": "https://arxiv.org/abs/2610.10061v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "移动端实时高斯泼溅统一动静",
      "sum": "Mobile-4DGS 在移动端统一静态与动态场景的实时高斯泼溅渲染。",
      "ta": "移动端 4DGS 实时方案，关注其动静统一表示与性能优化手段。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.05289"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "编码智能体能否造出想要的游戏",
      "sum": "SWE-Game 评测编码智能体构建游戏的能力边界。",
      "ta": "了解 AI 编码代理在游戏开发任务上的真实水平，评估其可辅助的环节。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.33678"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "递归游戏生成器代理框架",
      "sum": "Recursive Game Creator 提出面向产品级体验的智能体游戏生成框架。",
      "ta": "关注其代理编排与体验导向的生成流程，思考对工具链自动化的启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.08621"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "图像生成视觉文本双语基准",
      "sum": "UltraText Bench 提出评估图像生成中视觉文本渲染的双语基准。",
      "ta": "贴图/UI 中文字渲染质量评测，对生成式贴图工具选型有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.09823"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "分层过程理解提升主动助手",
      "sum": "用分层过程理解改进 AI 主动协助的时机与内容。",
      "ta": "过程理解思路或可迁移到编辑器内主动式辅助工具的交互设计。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.06505"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "策略内蒸馏将经验写入扩散权重",
      "sum": "通过策略内上下文蒸馏把智能体经验内化进扩散模型权重。",
      "ta": "模型经验内化方法，关注其对生成式资产工具持续学习能力的启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.07250"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Unity 发布提示式游戏工具 Spark",
      "sum": "Unity 联合 Google AI 推出基于提示的游戏开发工具 Unity Spark。",
      "ta": "关注其如何把 Asset Store 美术资产接入 AI 辅助编辑器，影响未来工作流。",
      "src": "Game Developer · 10-07",
      "url": "https://www.gamedeveloper.com/programming/unity-unveils-unity-spark-an-prompt-based-tool-for-google-s-ai-games-platform"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Godot 伪 3D 视觉实现解析",
      "sum": "开发者分享在 Godot 中为恐怖合作游戏伪造 3D 观感的具体做法。",
      "ta": "低成本伪 3D 渲染技巧，对风格化项目与性能受限平台有借鉴价值。",
      "src": "80 Level · 10-07",
      "url": "https://80.lv/articles/see-how-developers-faked-3d-look-in-godot-for-their-darkwood-inspired-co-op-horror/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "潜行者 2 风化工具箱制作流程",
      "sum": "美术师讲解潜行者 2 DLC 中可交互工具箱的建模、布料模拟与做旧贴图。",
      "ta": "布料仿真与风化材质流程细节，可参考其做旧贴图思路。",
      "src": "80 Level · 10-07",
      "url": "https://80.lv/articles/creating-a-weathered-toolbox-for-s-t-a-l-k-e-r-2-cost-of-hope/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "南极克苏鲁合作恐怖视觉解析",
      "sum": "UNFROST 团队谈南极克苏鲁合作恐怖的视觉机制灵感与 Unity 工作流。",
      "ta": "小团队 Unity 工作流与敌人运动迭代经验，对原型验证节奏有参考。",
      "src": "80 Level · 10-07",
      "url": "https://80.lv/articles/making-a-co-op-survival-horror-with-lovecraftian-creatures-set-in-antarctica/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Bit Reactor 召回过半停职员工",
      "sum": "星战 Zero Company 开发商 Bit Reactor 召回超半数此前停职的员工。",
      "ta": "工作室人事波动，关注其对项目排期与外包协作的间接影响。",
      "src": "Game Developer · 10-07",
      "url": "https://www.gamedeveloper.com/business/star-wars-zero-company-developer-bit-reactor-brings-back-over-half-of-furloughed-staff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Undead Labs 反思裁员沟通方式",
      "sum": "Undead Labs 负责人称在裁员准备中对员工过度坦诚。",
      "ta": "行业管理侧反思，与 TA 日常工作关联有限，速览即可。",
      "src": "Game Developer · 10-06",
      "url": "https://www.gamedeveloper.com/business/unlead-labs-studio-head-says-they-were-irresponsibly-transparent-in-preparing-staff-for-layoffs"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RGA 2.15支持源码到ISA关联",
      "sum": "AMD Radeon GPU Analyzer 2.15可将预编译GPU代码对象关联回源码行，便于ISA分析优化。",
      "ta": "做Shader性能调优时，能直接定位到具体源码行对应的ISA指令，省去盲猜汇编的功夫。",
      "src": "AMD GPUOpen · 10-06",
      "url": "https://gpuopen.com/learn/rga-source-to-isa-correlation-gpu-code-objects/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "扩散风格化支持局部控制",
      "sum": "该工作解耦内容与风格两个条件权重，实现区域级的图像风格化控制。",
      "ta": "做材质贴图风格化时，区域级控制比全局风格迁移更实用，可关注其条件解耦方式。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.08704v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "点基变形混合做面部重定向",
      "sum": "PDB用点基变形混合实现跨网格面部动画重定向，减少表面伪影。",
      "ta": "面部重定向若走点云混合而非拓扑依赖，可跨不同网格复用表情动画，值得看其抗伪影策略。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.08672v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "超声可微渲染做形状优化",
      "sum": "UltraDiff将可微渲染范式扩展到医学超声，通过匹配渲染图像优化场景参数。",
      "ta": "与游戏渲染无关，但可微渲染从光传输扩展到其他成像模态的思路可作方法论参考。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.07941v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "潜扩散做高保真形变仿真",
      "sum": "PhysLDM用潜扩散模型做高分辨率体积网格的长时程形变仿真，缓解误差累积。",
      "ta": "若做布料/软体离线仿真或ML变形器，其长时程预测的误差控制策略值得关注。",
      "src": "arXiv · cs.GR · 10-06",
      "url": "https://arxiv.org/abs/2610.07609v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "仿真中递归自改进扩具身数据",
      "sum": "EmbodiedSmith在仿真中通过递归自改进飞轮扩展具身智能训练数据。",
      "ta": "与游戏TA无直接关联，仅作具身数据生成范式的速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.07969"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Web世界模型抗提示注入训练",
      "sum": "AdvSim2Real在Web世界模型中用自适应提示注入训练Web智能体。",
      "ta": "与游戏/渲染无关，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.08773"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型自适应潜容量",
      "sum": "该工作为世界模型引入自适应潜容量机制。",
      "ta": "若关注世界模型架构，可速览其潜容量调度思路，但与当前TA工作无直接交集。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.32921"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界模型物理能力终考",
      "sum": "该工作提出针对世界模型物理理解能力的评测基准。",
      "ta": "可作世界模型物理常识的评测参考，与实时渲染管线无直接关系。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.08791"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "世界规模由移动速度与密度决定",
      "sum": "资深世界设计师Nathan Cheever指出，移动速度、遭遇密度、可复用空间与产能决定世界该多大。",
      "ta": "做程序化植被/地形工具时，世界尺度应服从玩法节奏与产能，而非盲目求大。",
      "src": "80 Level · 10-06",
      "url": "https://80.lv/articles/veteran-game-world-designer-explains-why-bigger-game-worlds-aren-t-always-better/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "恐龙腿部肌肉仿真获导演认可",
      "sum": "一段恐龙腿部肌肉仿真作品获得Guillermo del Toro的公开认可。",
      "ta": "可速览其肌肉形变表现，作为生物动画参考。",
      "src": "80 Level · 10-06",
      "url": "https://80.lv/articles/dinosaur-leg-muscle-simulation-gets-guillermo-del-toro-s-approval/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "title": "白水求解器基于Wētā研究开源",
      "sum": "VFX艺术家Alexander Vasilenko发布Guided Bubbles & Wet Foam Solver，基于Wētā研究改善气泡与泡沫运动。",
      "ta": "做Niagara流体/白水特效时，这套气泡引导与湿泡沫求解思路可直接借鉴，是难得的公开实现。",
      "src": "80 Level · 10-06",
      "url": "https://80.lv/articles/vfx-artist-shared-advanced-whitewater-solver-based-on-w-t-s-research/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Fate角色3D化流程分享",
      "sum": "Sarah Paiva分享BJD娃娃风格Saber的3D制作，含基础形塑与金色材质处理。",
      "ta": "可速览其金属材质处理手法，作为角色材质参考。",
      "src": "80 Level · 10-06",
      "url": "https://80.lv/articles/how-to-recreate-saber-from-type-moon-s-fate-stay-night-in-3d/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "二手PS5 Pro溢价66%出售",
      "sum": "GameStop等零售商以高于MSRP 66%的价格出售二手PS5 Pro。",
      "ta": "硬件市场行情，与TA工作无直接关系。",
      "src": "Game Developer · 10-06",
      "url": "https://www.gamedeveloper.com/console/gamestop-other-retailers-to-sell-used-playstation-5-pro-units-for-66-percent-over-msrp"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "工作室称裁员沟通过于透明",
      "sum": "Unlead Labs工作室负责人称在裁员准备中对员工'不负责任地透明'。",
      "ta": "行业管理八卦，速览即可。",
      "src": "Game Developer · 10-06",
      "url": "https://www.gamedeveloper.com/business/unlead-labs-studio-head-says-they-were-irresponsibly-transparent-in-preparing-staff-for-layoffs"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "合作开发助Backrooms破400万",
      "sum": "Blackbird Interactive与Secret Mode通过合作开发帮助Escape the Backrooms达到超400万玩家。",
      "ta": "合作开发案例，可速览其分工模式。",
      "src": "Game Developer · 10-06",
      "url": "https://www.gamedeveloper.com/production/co-dev-case-study-how-blackbird-interactive-and-secret-mode-helped-escape-the-backrooms-ride-the-backrooms-hype-wave"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "预积分神经发光体实时渲染",
      "sum": "提出预积分神经发光体方案，解决带遮挡外壳的高面数发光网格直接光照瓶颈。",
      "ta": "实时直接光照的硬核突破，对材质/Shader性能优化有直接参考价值。",
      "src": "arXiv · cs.GR · 10-05",
      "url": "https://arxiv.org/abs/2610.06762v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "低方差高斯重采样抗噪",
      "sum": "SteadySplats对低方差高斯重采样，降低随机顺序无关透明渲染的高频噪声。",
      "ta": "3DGS渲染噪声抑制方案，对半透明植被/粒子渲染有借鉴意义。",
      "src": "arXiv · cs.GR · 10-04",
      "url": "https://arxiv.org/abs/2610.05576v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时神经发丝仿真",
      "sum": "Neuroll用模拟器在环展开实现实时神经发丝仿真。",
      "ta": "发丝实时仿真思路可迁移到植被/毛发类程序化动画。",
      "src": "arXiv · cs.GR · 10-03",
      "url": "https://arxiv.org/abs/2610.04689v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "八叉树无损网格压缩",
      "sum": "OctMesh提出统一八叉树层级框架，实现无损三角网格压缩。",
      "ta": "网格压缩对资产管线与运行时内存优化有潜在价值。",
      "src": "arXiv · cs.GR · 10-03",
      "url": "https://arxiv.org/abs/2610.04281v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "骨骼无关动画压缩",
      "sum": "CurveCodec 2用学习熵模型实现骨骼无关的动画压缩。",
      "ta": "动画压缩方案对大规模角色/植被动画数据管理有参考。",
      "src": "arXiv · cs.GR · 10-03",
      "url": "https://arxiv.org/abs/2610.04211v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "图像条件B-Rep生成",
      "sum": "UniBRep以几何优先框架从单图生成统一几何与拓扑的B-Rep。",
      "ta": "CAD级几何生成对硬表面资产程序化有潜在启发。",
      "src": "arXiv · cs.GR · 10-02",
      "url": "https://arxiv.org/abs/2610.04092v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "感知均匀图像编辑滑块",
      "sum": "UniSlider提出感知均匀的滑块实现连续图像编辑。",
      "ta": "对AI辅助纹理/材质编辑的交互设计有参考。",
      "src": "arXiv · cs.GR · 10-05",
      "url": "https://arxiv.org/abs/2610.06831v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "人形运动模仿自演化框架",
      "sum": "InterMimicGen通过自演化运动模仿扩展人形机器人运动操作。",
      "ta": "与游戏TA关联较弱，仅作运动生成技术速览。",
      "src": "arXiv · cs.GR · 10-05",
      "url": "https://arxiv.org/abs/2610.06850v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "自由曲面灯罩计算设计",
      "sum": "提出可3D打印的自由曲面灯罩计算设计方法以控制光照。",
      "ta": "光学设计思路，与实时渲染关联有限，速览即可。",
      "src": "arXiv · cs.GR · 10-05",
      "url": "https://arxiv.org/abs/2610.05770v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "编码智能体生成游戏世界",
      "sum": "Code2Games让编码智能体面向游戏世界生成。",
      "ta": "AI生成游戏世界的探索，对程序化关卡/世界工具有潜在启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.05033"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时世界动作模型",
      "sum": "RealtimeWAM提出单步异步世界动作模型。",
      "ta": "实时世界模型方向，与游戏TA关联间接，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.06617"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散语言模型自适应循环",
      "sum": "ALoDLM提出自适应循环的扩散语言模型。",
      "ta": "纯语言模型方向，与游戏渲染无关，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.04198"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型定向偏置注入",
      "sum": "通过闭环激活引导在扩散语言模型中定向注入偏置。",
      "ta": "语言模型安全方向，与游戏TA无关，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.05894"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散语言模型表示空间MMD",
      "sum": "为扩散语言模型提出表示空间MMD方法。",
      "ta": "纯语言模型理论，与游戏渲染无关，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.06648"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "皇牌空战8用UE5获系列最高分",
      "sum": "Project Aces结合UE5、自研云技术与高细节战机，获系列自2001年来最高评价。",
      "ta": "UE5在3A空战游戏中的落地案例，值得关注其技术组合。",
      "src": "80 Level · 10-05",
      "url": "https://80.lv/articles/ace-combat-8-is-the-highest-reviewed-game-in-the-series-since-the-ps2/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "Capcom计划用AI进化RE引擎",
      "sum": "Capcom公布REX项目，目标是以AI共同创造游戏来进化RE引擎。",
      "ta": "主流引擎引入AI功能的动向，值得关注对TA工作流的影响。",
      "src": "80 Level · 10-05",
      "url": "https://80.lv/articles/capcom-reveals-plans-to-evolve-re-engine-with-ai-features/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini空间殖民+Pyro烟雾",
      "sum": "Karlis Stigis用Houdini几何节点结合空间殖民求解器与Pyro模拟制作循环烟雾爆发。",
      "ta": "程序化+流体特效的实战案例，对Niagara流体思路有借鉴。",
      "src": "80 Level · 10-05",
      "url": "https://80.lv/articles/merging-space-colonization-solver-with-pyro-simulation-to-create-looping-smoke-bursts/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini角色水附着R&D",
      "sum": "Milad Sãvar分享在动画角色上控制水附着、滴落与飞溅的程序化工作流R&D。",
      "ta": "程序化流体交互R&D，对特效与材质工作流有参考。",
      "src": "80 Level · 10-05",
      "url": "https://80.lv/articles/artist-explores-realistic-water-adhesion-on-animated-characters-in-houdini/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender绑定引入RBF求解器",
      "sum": "RBF Nodes插件为Blender绑定带来RBF求解器，用多输入驱动多属性。",
      "ta": "绑定工具链增强，对角色/植被骨骼驱动有实用价值。",
      "src": "80 Level · 10-05",
      "url": "https://80.lv/articles/bring-rbf-solver-to-your-blender-rigs/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Ninja Theory据报裁员",
      "sum": "Hellblade开发商Ninja Theory在脱离Xbox失败后据报裁员。",
      "ta": "行业动态，反映3A工作室整合压力，速览。",
      "src": "Game Developer · 10-05",
      "url": "https://www.gamedeveloper.com/business/report-ninja-theory-lays-off-workers-after-failing-to-spin-off-from-xbox"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "ARC Raiders等将影视化",
      "sum": "Embark Studios的The Finals与ARC Raiders获影视改编。",
      "ta": "商业动态，与TA工作无直接关联，速览。",
      "src": "Game Developer · 10-05",
      "url": "https://www.gamedeveloper.com/business/arc-raiders-and-the-finals-set-for-tv-and-film-adaptations-from-backrooms-co-producer"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "沉浸式模拟仍值得做",
      "sum": "Harvey Smith与Ben Horne阐述Black Pony Immersive的设计愿景。",
      "ta": "设计理念访谈，与TA技术关联弱，速览。",
      "src": "Game Developer · 10-05",
      "url": "https://www.gamedeveloper.com/design/why-it-s-still-worth-making-immersive-sims-ft-harvey-smith-ben-horne"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "城市级高斯泼溅实时化",
      "sum": "Budgeted-GS 通过分解 LOD 实现大规模高斯泼溅的实时渲染，解决百万级图元显存瓶颈。",
      "ta": "关注其 LOD 分解策略，可迁移到植被海量实例的实时渲染与显存预算控制。",
      "src": "arXiv · cs.GR · 10-02",
      "url": "https://arxiv.org/abs/2610.03162v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "矢量图形可微渲染闭式解",
      "sum": "Windfoil 用闭式求解二次贝塞尔轮廓的盒滤波环绕数，在 WebGPU 上统一光栅化与可微矢量图形。",
      "ta": "闭式环绕数算法对 UI/图标类矢量渲染与可微管线有参考价值。",
      "src": "arXiv · cs.GR · 10-01",
      "url": "https://arxiv.org/abs/2610.02468v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "冻结DiT的外观几何解耦",
      "sum": "DAGS 对冻结的图像 DiT 做无注意力解耦式外观与几何引导，实现时序稳定的生成式渲染。",
      "ta": "时序稳定性方案可参考用于生成式贴图或程序化材质的帧间一致控制。",
      "src": "arXiv · cs.GR · 10-01",
      "url": "https://arxiv.org/abs/2610.02567v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "动态场景逆图形基准",
      "sum": "4DCodeBench 让智能体从视频重建动态场景为可执行图形程序，评测逆图形能力。",
      "ta": "可关注其程序化表示思路，对场景重建与程序化生成的自动化流程有启发。",
      "src": "arXiv · cs.GR · 10-02",
      "url": "https://arxiv.org/abs/2610.03715v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "语音驱动面部协同发音度量",
      "sum": "提出唇部路径长度等几何度量，量化语音驱动 3D 面部动画中的协同发音轨迹。",
      "ta": "面部动画质量度量思路可借鉴到口型驱动的效果评估。",
      "src": "arXiv · cs.GR · 10-02",
      "url": "https://arxiv.org/abs/2610.03436v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "空间锚定手势生成基准",
      "sum": "提出评测生成手势是否指向环境中正确指称物的基准框架。",
      "ta": "与游戏内 NPC 手势/指向动画的自动生成评测相关。",
      "src": "arXiv · cs.GR · 10-02",
      "url": "https://arxiv.org/abs/2610.03105v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时交互视听世界模型",
      "sum": "HelixWorld 提出实时交互的音频-视觉世界模型。",
      "ta": "世界模型方向可关注，但与当前渲染管线落地距离较远。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.38123"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Marvel Rivals 角色管线揭秘",
      "sum": "漫威争锋美术团队详解自定义 NPR/PBR 渲染、英雄专属 VFX 与可扩展破坏系统。",
      "ta": "NPR/PBR 混合渲染与英雄级 VFX 的工程化落地，值得对照自家角色管线看材质分层与破坏性能取舍。",
      "src": "80 Level · 10-02",
      "url": "https://80.lv/articles/inside-marvel-rivals-character-art-vfx-destruction-pipeline/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Reigns 开发商停摆裁员",
      "sum": "Reigns 开发商 Nerial 进入「休眠模式」并裁撤员工。",
      "ta": "小型工作室收缩的又一案例，可作为行业环境冷热的速览信号。",
      "src": "Game Developer · 10-02",
      "url": "https://www.gamedeveloper.com/business/nerial-to-enter-hibernation-mode-and-lay-off-developers"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "星战新作口碑创二十年最佳",
      "sum": "Star Wars: Galactic Racer 融合 Burnout 式撞击与 podracing，成二十年来评分最高星战游戏。",
      "ta": "与 TA 本职关联弱，仅作行业口碑速览。",
      "src": "80 Level · 10-02",
      "url": "https://80.lv/articles/star-wars-galactic-racer-is-the-best-reviewed-star-wars-game-in-20-years/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "GTA6 发售前情报汇总",
      "sum": "随 11 月发售临近，媒体汇总目前已知的 GTA6 全部信息。",
      "ta": "无技术细节，仅作行业大事件速览。",
      "src": "80 Level · 10-02",
      "url": "https://80.lv/articles/grand-theft-auto-6-what-we-know-about-rockstar-s-anticipated-game/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "流式世界模型线性记忆方案",
      "sum": "LOCI 提出面向流式世界模型的空间线性记忆机制。",
      "ta": "世界模型的长时序空间一致性是程序化生成与实时场景推演的关键，可关注其记忆结构设计。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.40222"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频生成文字渲染基准",
      "sum": "VTR-Bench 提出系统评估视频生成中视觉文字渲染质量的基准。",
      "ta": "若涉及游戏内 UI/字幕类生成素材，可参考其评测维度。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.01499"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 2,
      "title": "战争机器E-Day成15年最高分",
      "sum": "该前传结合硬件光追、Nanite环境、实时破坏与数百动态阴影光源。",
      "ta": "数百动态阴影光源+实时破坏的性能预算，是光照与几何管线的实战参考。",
      "src": "80 Level · 10-01",
      "url": "https://80.lv/articles/gears-of-war-e-day-is-the-highest-rated-gears-game-in-over-15-years/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 3,
      "title": "PSSR AI超分将登陆PS5",
      "sum": "索尼把PS5 Pro的PSSR逐像素AI超分下放到基础版PS5主机。",
      "ta": "主机端AI超分普及，跨平台项目的分辨率与后处理预算需重新评估。",
      "src": "PlayStation Blog · 10-01",
      "url": "https://blog.playstation.com/2026/10/01/ai-upscaling-is-coming-to-ps5/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "title": "AMD发布高级着色器交付编译器",
      "sum": "AMD推出Direct3D 12 State Object Compiler插件，支持微软ASD预编译。",
      "ta": "预编译PSO可大幅削减首次运行卡顿，是管线优化必跟的工具链更新。",
      "src": "AMD GPUOpen · 10-01",
      "url": "https://gpuopen.com/news/asd-compiler-launch/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "Lumen降噪不牺牲光照质量",
      "sum": "Aleksander Goryachev分享UE复杂多光源场景下的Lumen降噪设置。",
      "ta": "多光源场景Lumen噪点治理的实操经验，可直接对照自己的光照配置。",
      "src": "80 Level · 10-01",
      "url": "https://80.lv/articles/suppressing-noise-without-sacrificing-lighting-quality-when-using-unreal-engine-s-lumen/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高斯点画实现免排序渲染",
      "sum": "Gaussian Stippling用混合采样与时空重建，实现免深度排序的3DGS渲染。",
      "ta": "免排序可省掉3DGS的排序开销，对实时高斯渲染性能有直接价值。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.38488v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Dirichlet泼溅做波动逆问题",
      "sum": "针对太赫兹、合成孔径声学等波动成像，提出Dirichlet核的可微渲染方法。",
      "ta": "非高斯PSF的可微渲染思路，对非常规成像与重建方向有参考意义。",
      "src": "arXiv · cs.GR · 09-30",
      "url": "https://arxiv.org/abs/2610.00618v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "镜头光晕去除与重建",
      "sum": "论文提出去除镜头光晕的方法，以提升3D场景重建等下游任务质量。",
      "ta": "做扫描重建或照片建模时，光晕是常见污染源，可关注其去除策略。",
      "src": "arXiv · cs.GR · 09-30",
      "url": "https://arxiv.org/abs/2609.39527v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "原生3D纹理生成是否需3D资产",
      "sum": "论文探讨原生3D纹理生成是否必须依赖3D资产进行训练。",
      "ta": "若成立可降低3D纹理生成的数据门槛，与材质生成工作流相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.34621"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "SILSA保拓扑高分辨率3D生成",
      "sum": "SILSA用滑窗切片潜变量实现保拓扑的高分辨率3D生成。",
      "ta": "高分辨率3D生成的拓扑保持，对资产可用性与后续绑定有意义。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.02201"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "4Director用刚体几何控视频世界模型",
      "sum": "4Director以刚性3D几何控制视频世界模型，实现更可控的生成。",
      "ta": "用3D几何约束视频生成，是预演与镜头控制方向的可用思路。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.02160"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "ROWBench检验视频模型渲染程序",
      "sum": "ROWBench评测视频模型是否按程序规范渲染出正确结果。",
      "ta": "为程序化生成的视频验证提供基准，与程序化内容评测思路相通。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.02205"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "世界观察者联合生成持久世界",
      "sum": "World Observer提出联合actor-observer生成，用于持久世界建模。",
      "ta": "持久世界建模方向，可留意其对长时序场景一致性的处理。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.02162"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Memorizon让世界模型超上下文训练",
      "sum": "Memorizon提出让世界模型在超出上下文窗口的情况下继续训练。",
      "ta": "长时程世界模型训练技巧，对长序列场景模拟有潜在参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.00544"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "像素扩散用稠密预测做表征对齐",
      "sum": "PixelDense把稠密预测作为像素扩散的表征对齐手段。",
      "ta": "像素级扩散的表征对齐思路，可关注其对生成细节的影响。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.00483"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "自适应奖励路由优化音视频扩散",
      "sum": "论文提出动态多奖励优化，用前向过程RL联合音视频扩散。",
      "ta": "多奖励联合优化思路，对音视频同步生成方向有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.37200"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "分层连续扩散语言模型",
      "sum": "论文提出分层连续扩散的语言模型方法。",
      "ta": "与图形工作流关联较弱，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.02193"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender与Substance做外星角色",
      "sum": "Artur Ledur分享一周内用Blender与Substance 3D完成科幻短片角色。",
      "ta": "短周期角色设计与贴图流程，可看其设计与场景匹配的做法。",
      "src": "80 Level · 10-01",
      "url": "https://80.lv/articles/creating-an-alien-character-for-a-sci-fi-short-film-with-blender-substance-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Godot与Unity矢量图形资源集",
      "sum": "DK Liao用极简风格矢量图形库制作游戏，资源可供Godot与Unity使用。",
      "ta": "轻量2D矢量资源，适合快速原型或小体量项目取用。",
      "src": "80 Level · 10-01",
      "url": "https://80.lv/articles/check-out-this-free-collection-of-vector-graphics-for-godot-unity/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "布料撕裂自缝合特效演示",
      "sum": "一段布料撕裂后自行缝合的惊悚特效演示，含密集恐惧提示。",
      "ta": "可看其布料撕裂与缝合的形变与材质表现手法。",
      "src": "80 Level · 10-01",
      "url": "https://80.lv/articles/watch-this-creepy-fabric-rip-apart-stitch-itself-back-together/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "UE5.8 MCP服务器与AnimGen实验",
      "sum": "Epic九月学习内容涵盖UE 5.8的MCP服务器与全新实验性AnimGen工作流。",
      "ta": "MCP服务器可能改变TA与引擎交互方式，AnimGen实验流程值得提前评估。",
      "src": "Unreal Engine · 09-30",
      "url": "https://www.unrealengine.com/learning/septembers-epic-learning-content-metahumans-physics-animation-and-more"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "RSIGame递归自改进做游戏",
      "sum": "提出用递归自我改进的自主智能体完成游戏开发流程。",
      "ta": "可关注其自动化管线思路，是否可用于TA工具链的脚本生成。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.39045"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "A2Z基准测编码智能体做游戏",
      "sum": "新基准评估编码智能体从游戏设计规格生成游戏的忠实度。",
      "ta": "可了解AI生成游戏原型的当前上限，评估对工具链的参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.39564"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "自博弈游戏引导技能发现",
      "sum": "通过自博弈实现可玩智能体控制的游戏引导技能发现方法。",
      "ta": "偏AI研究，与TA日常工作关联弱，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.40137"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Physis-Lang自演化物理表征",
      "sum": "提出自演化语言作为视频世界模型的物理表征方法。",
      "ta": "与实时渲染管线暂无直接关联，可略过。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.40358"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "中文文本渲染部首分解奖励",
      "sum": "通过分解部首再奖励的细粒度检查提升中文文本渲染准确度。",
      "ta": "若涉及游戏内UI文字生成可留意，否则关联有限。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.37569"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "DC-SAE加速扩散收敛",
      "sum": "提出深度压缩语义自编码器以加速扩散模型收敛。",
      "ta": "纯AI方法，与实时渲染无直接关系，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2609.39222"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "古森林石墙浮雕制作解析",
      "sum": "Ilya Oskanyan分享Heart of the Forest项目中自然浮雕资产的省时制作流程。",
      "ta": "可参考其焦距选择与浮雕雕刻流程，对植被环境资产制作有借鉴。",
      "src": "80 Level · 09-30",
      "url": "https://80.lv/articles/sculpting-nature-inspired-bas-reliefs-on-a-stone-wall-in-a-moody-ancient-forest-environment/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "007 First Light的VFX与世界观",
      "sum": "IO Interactive开发者分享007 First Light的世界、角色、场景与VFX制作。",
      "ta": "可参考其VFX与场景美术实现，了解3A级项目的美术管线。",
      "src": "80 Level · 09-30",
      "url": "https://80.lv/articles/insighful-look-at-007-first-light-s-world-characters-concent-vfx/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS Plus十月会免公布",
      "sum": "十月PS Plus月度游戏为F1 25、Hunt: Showdown 1896与地球防卫军World Brothers 2。",
      "ta": "行业动态速览，与TA工作无直接关联。",
      "src": "PlayStation Blog · 09-30",
      "url": "https://blog.playstation.com/2026/09/30/playstation-plus-monthly-games-for-october-f1-25-hunt-showdown-1896-earth-defense-force-world-brothers-2/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "纹理空间材质扩散生成",
      "sum": "微调视频扩散Transformer，在纹理空间做文本引导材质生成与超分。",
      "ta": "直接在UV纹理空间生成PBR材质，比多视图烘焙更贴合现有材质管线，值得看投影映射思路。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.37654v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "高斯泼溅残差场提表达",
      "sum": "用神经残差场替代低阶球谐，缓解3DGS视角相关反射的表达冗余。",
      "ta": "低阶SH是3DGS高光发糊的根因，这套残差建模对植被/材质高光重建有直接参考价值。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.37115v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "文本生成物理仿真管线",
      "sum": "Text2Sim用智能体管线把纯文本请求转成可执行可编辑的物理仿真。",
      "ta": "资产、布局、物理参数、运动、渲染联合生成，可关注其对特效预演自动化的启发。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.36593v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "域是残差的自监督迁移",
      "sum": "不换生成器，只适配DINO自监督特征，实现去雾去雨与渲染转照片。",
      "ta": "渲染转照片的思路对风格化后处理与去噪有参考，特征层迁移比像素层更稳。",
      "src": "arXiv · cs.GR · 09-29",
      "url": "https://arxiv.org/abs/2609.37330v1"
    }
  ]
};
