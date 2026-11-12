// daily-intel 近期热点层 —— 由 run.py 自动累积，供「近期」入口翻阅。
// 与 data.js（仅今日新增）分离：data.js 是“今天有什么新的”，recent.js 是“近期攒了啥”。

window.INTEL_RECENT = {
  "updated": "2026-11-12 16:08",
  "cards": [
    {
      "cat": "ai",
      "imp": "mid",
      "title": "GTAGym 提供 3A 任务评测环境",
      "sum": "HuggingFace 新论文发布 GTAGym，用真实 3A 游戏任务做强化学习评测环境。",
      "ta": "可关注其任务定义方式，作为游戏内 AI 行为评测或自动化测试环境的参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.13028"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender 动画可像网格一样编辑",
      "sum": "一款免费工具让 Blender 动画编辑无需切换 Graph Editor 操作 F-curve。",
      "ta": "若团队有 Blender 预研或资产管线，这类工具能降低动画微调成本。",
      "src": "80 Level · 11-11",
      "url": "https://80.lv/articles/edit-your-blender-animations-just-like-editing-mesh-with-this-free-tool/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Tripo AI 办 3D 世界黑客松",
      "sum": "Tripo AI 首届 3D World Hackathon 吸引 78 国 2000 多支队伍，产出游戏与 VR 体验。",
      "ta": "可速览参赛作品，观察 AI 生成 3D 资产在可玩场景中的实际落地形态。",
      "src": "80 Level · 11-11",
      "url": "https://80.lv/articles/creators-developed-playable-worlds-vr-games-digital-pets-for-tripo-ai-s-first-3d-world-hackathon/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "风格化法式小屋场景拆解",
      "sum": "Eloi Landes 拆解法式阿尔卑斯小屋项目，涵盖风格化雕刻、手绘贴图与氛围光照。",
      "ta": "环境美术流程参考，可看其风格化雕刻与手绘贴图如何配合光照出氛围。",
      "src": "80 Level · 11-11",
      "url": "https://80.lv/articles/building-wayfinder-inspired-stylized-french-cottage-environment/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "塞尔达重制版首周破五百万",
      "sum": "《时之笛》重制版四天销量超 500 万，成为 Switch 2 第二畅销游戏。",
      "ta": "行业风向参考：经典 IP 重制在 Switch 2 上的强势表现。",
      "src": "Game Developer · 11-11",
      "url": "https://www.gamedeveloper.com/business/the-legend-of-zelda-ocarina-of-time-exceeds-5-million-copies-solid-in-first-week"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PlayStation 取消 Fairgames",
      "sum": "报道称 2023 年公布的多人射击游戏 Fairgames 被取消，但无裁员。",
      "ta": "项目取消的行业动态，速览即可。",
      "src": "Game Developer · 11-11",
      "url": "https://www.gamedeveloper.com/console/report-playstation-s-fairgame-cancelled-but-haven-studios-remains"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "UE5.9预览版发布",
      "sum": "UE 5.9预览版上线，含AI工作流增强、Web平台支持、渲染与动画更新。",
      "ta": "引擎大版本预览，渲染与动画管线改动需第一时间评估对植被/材质/Niagara的兼容影响。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/unreal-engine-5-9-preview-is-out-it-was-built-with-ai/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时皮肤渲染可微方法",
      "sum": "提出轻量可微方法，直接估计适配游戏引擎近似着色器的次表面散射参数。",
      "ta": "把离线逆向渲染参数直接映射到实时shader，对角色皮肤材质管线有参考价值。",
      "src": "arXiv · cs.GR · 11-10",
      "url": "https://arxiv.org/abs/2611.14451v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态微几何编译为神经纹理",
      "sum": "Deformable Texture Maps将形变表面的细尺度几何编译进神经纹理，避免显式实例化。",
      "ta": "布料等形变材质的微观外观压缩思路，可借鉴到植被/织物材质性能优化。",
      "src": "arXiv · cs.GR · 11-10",
      "url": "https://arxiv.org/abs/2611.13677v1"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "罗技360赛车展厅用UE5",
      "sum": "UE服务伙伴用Lumen、Nanite、Sequencer与Pixel Streaming搭建浏览器可进的360赛车展厅。",
      "ta": "Pixel Streaming+Lumen的商用落地案例，可看其大场景实时推流与光照取舍。",
      "src": "Unreal Engine · 11-10",
      "url": "https://www.unrealengine.com/spotlights/beyond-the-product-page-logitech-g-s-360-racing-studio"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Godot程序化低模树生成器",
      "sum": "免费工具可在编辑器内生成各类树木，保存预设并导出带LOD与碰撞的资产。",
      "ta": "程序化植被+LOD+碰撞一体化导出，与植被工具方向直接相关，可对比其生成策略。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/free-procedural-low-poly-tree-generator-for-godot/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "单骨骼驱动喷气引擎绑定",
      "sum": "用单根骨骼控制整个喷气引擎所有运动的Blender绑定案例。",
      "ta": "极简骨骼驱动的机械绑定思路，可参考到硬表面道具动画。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/real-world-jet-engine-recreated-with-intricate-blender-rig/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "程序化地牢设计经验谈",
      "sum": "Bloody Hell Hotel开发者谈吸血鬼酒店沙盒机制与程序化地牢的设计方式。",
      "ta": "程序化关卡生成的一线设计经验，与PCG工具思路可对照。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/bloody-hell-hotel-developer-on-making-a-vampire-management-sandbox/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "俯视恐怖氛围营造手法",
      "sum": "前《小小梦魇》开发者谈用实拍特效恐怖、动画构图与环境光照营造不安感。",
      "ta": "环境光照与镜头构图的具体做法，对氛围向场景打光有参考。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/end-of-abyss-devs-explain-how-they-made-top-down-horror-feel-unsettling/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "XR实时三维元胞自动机框架",
      "sum": "提出统一交互框架，在XR硬件约束下协调3D元胞自动机的模拟、体数据管理与渲染。",
      "ta": "体数据实时模拟与渲染的约束权衡，对体积特效有边缘参考。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.13296v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "GPU加速QP求解器",
      "sum": "FAME-QP用CUDA图与融合核函数加速线性MPC的稠密二次规划求解。",
      "ta": "GPU求解器工程优化手法，可参考到仿真类计算任务的核融合思路。",
      "src": "arXiv · cs.GR · 11-10",
      "url": "https://arxiv.org/abs/2611.13766v1"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "GTA6预载提前九天",
      "sum": "GTA6成PS Store史上预购最多游戏，索尼与Rockstar开放提前九天预载。",
      "ta": "行业级发行事件，关注其体量与上线节奏对同期项目排期的影响。",
      "src": "PlayStation Blog · 11-10",
      "url": "https://blog.playstation.com/2026/11/10/pre-load-grand-theft-auto-vi-on-ps5-starting-today/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "索尼Fairgames项目取消",
      "sum": "索尼服务型劫案模拟游戏Fairgames被取消，不计划裁员。",
      "ta": "服务型游戏收缩的又一信号，速览行业动向。",
      "src": "80 Level · 11-11",
      "url": "https://80.lv/articles/sony-s-live-service-heist-simulator-fairgames-has-been-canceled/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "瑞奇与叮当手游将停服",
      "sum": "Ratchet & Clank: Ranger Rumble软发布一年后停运，11月下架、次年5月关服。",
      "ta": "服务型项目生命周期案例，速览。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/ratchet-clank-ranger-rumble-is-shutting-down-a-year-after-its-soft-launch/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS Plus十一月阵容",
      "sum": "十一月PS Plus游戏目录含《死亡搁浅2》《如龙8外传》等。",
      "ta": "订阅阵容信息，速览即可。",
      "src": "PlayStation Blog · 11-10",
      "url": "https://blog.playstation.com/2026/11/10/playstation-plus-game-catalog-for-november-death-stranding-2-on-the-beach-like-a-dragon-pirate-yakuza-in-hawaii-atomfall-dragon-quest-iii-hd-2d-remake-and-more/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "神经纹理压缩补上各向异性过滤",
      "sum": "论文为神经纹理压缩引入显式LOD条件与各向异性过滤，弥补GPU纹理单元缺失的滤波。",
      "ta": "材质/Shader性能方向值得精读：NTC若接入AF，直接影响贴图内存与采样开销的权衡。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.12650v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "3DGS攻克SM级负载不均",
      "sum": "论文针对3D高斯泼溅在GPU上的SM级负载不均衡提出优化，无需重训练或专用加速器。",
      "ta": "实时渲染管线相关：3DGS调度优化思路可迁移到大规模植被/场景泼溅的性能调优。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.12319v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "体积光传输免路径实时推断",
      "sum": "提出用低成本场景特征与统计量实时重建体积介质下的像素辐射，替代蒙特卡洛降噪。",
      "ta": "Niagara流体/体积特效方向必看：无路径的实时体积光照方案可能改变雾效与体积渲染成本结构。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.12103v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "曲线狄拉克质量的卷积微分",
      "sum": "论文提出Spaghetti Splatting，用卷积对点线三角等图元定义的狄拉克质量做可微体渲染。",
      "ta": "关注图元级可微渲染的数学处理，对程序化几何重建管线有潜在参考。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.12716v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可微物理仿真梯度综述",
      "sum": "系统梳理可微物理仿真中各引擎所微分的数学对象差异及其对梯度的影响。",
      "ta": "做程序化/物理驱动动画时，可据此判断不同仿真器的梯度语义与优化适用性。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.12162v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "建筑纹理代理模型一体化生成",
      "sum": "提出将几何抽象与纹理生成合并的建筑纹理代理生成方法，替代串行流水线。",
      "ta": "程序化场景生成相关：建筑代理的几何+纹理联合生成可启发大场景LOD资产管线。",
      "src": "arXiv · cs.GR · 11-09",
      "url": "https://arxiv.org/abs/2611.12077v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "文本生成可仿真形变3D场景",
      "sum": "SoftPAT3D将布料、玩偶、绳索等形变体生成为物理有效、可直接仿真的3D场景。",
      "ta": "3D生成与仿真衔接：形变体生成即仿真就绪，对道具/场景资产生成流程有参考价值。",
      "src": "arXiv · cs.GR · 11-08",
      "url": "https://arxiv.org/abs/2611.11087v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "贝塞尔泼溅改进笔触渲染",
      "sum": "提出带结构初始化的二次贝塞尔泼溅，缓解笔触渲染中图元碎片化与缺陷被遮盖问题。",
      "ta": "非真实感渲染方向可速览，泼溅图元的结构化初始化思路可借鉴。",
      "src": "arXiv · cs.GR · 11-07",
      "url": "https://arxiv.org/abs/2611.10713v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "LiDAR骨架约束紧凑高斯泼溅",
      "sum": "PLS-GS用概率LiDAR骨架引导3DGS，得到更紧凑、贴合表面的高斯表示。",
      "ta": "若涉及扫描资产重建，LiDAR约束可提升几何贴合度并压缩高斯数量。",
      "src": "arXiv · cs.GR · 11-07",
      "url": "https://arxiv.org/abs/2611.10699v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "潜在动作世界模型跨体型迁移",
      "sum": "实证研究无标签潜在动作世界模型中，动作能否在不同2D角色体型间迁移。",
      "ta": "角色动画方向可关注：跨体型动作迁移若成立，可简化多角色动画复用。",
      "src": "arXiv · cs.GR · 11-07",
      "url": "https://arxiv.org/abs/2611.10523v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "世界模型测试时学新游戏机制",
      "sum": "研究世界模型需要多少曝光才能在测试时学会未见过的游戏机制。",
      "ta": "与游戏AI/世界模型相关，可了解其对游戏机制泛化的评估方式。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.12324"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "ArtStation上线AI声明与过滤",
      "sum": "ArtStation新增生成式AI使用声明与举报机制，用户可自选AI内容可见度。",
      "ta": "资产参考与作品集平台规则变化，影响素材溯源与AI标注合规习惯。",
      "src": "80 Level · 11-10",
      "url": "https://80.lv/articles/artstation-adds-ai-declarations-default-ai-filtering-for-artwork/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Substance手绘基础生成器教程",
      "sum": "Theresa Schlag分享用Substance 3D Designer制作手绘基础生成器的流程与难点。",
      "ta": "程序化材质工作流参考：渐变与图结构处理经验可直接用于植被/地表材质生成。",
      "src": "80 Level · 11-09",
      "url": "https://80.lv/articles/how-to-make-hand-painted-base-generator-in-substance-3d-designer/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ZBrush与Marmoset角色工作流",
      "sum": "Jessie Chan分享街霸6 A.K.I.同人流程：对称低模联动高模雕刻，再于Marmoset打光。",
      "ta": "角色资产速览，低模与高模联动便于贴图制作的做法可借鉴。",
      "src": "80 Level · 11-09",
      "url": "https://80.lv/articles/reimagining-street-fighter-6-s-a-k-i-in-zbrush-marmoset-toolbag/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "星战战术新作工作室裁员",
      "sum": "报道称《Star Wars Zero Company》开发商Bit Reactor裁减数量不明员工。",
      "ta": "行业动态速览，反映中型工作室项目后的组织波动。",
      "src": "Game Developer · 11-09",
      "url": "https://www.gamedeveloper.com/business/report-star-wars-zero-company-developer-bitreactor-lays-off-an-unspecified-number-of-staff"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "NanoVDB 支持动态体素网格",
      "sum": "NanoVDB 新增 GPU 原生拓扑动态更新与体素顺序访问范式，加速稀疏网格算子。",
      "ta": "稀疏体素/体积特效的底层数据结构升级，值得评估对流体烟雾与程序化体积生成的性能收益。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.08665v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "蒙皮角色自穿插实时修复",
      "sum": "提出免训练后处理，通过姿态修正与有界蒙皮压缩减少角色自穿插伪影。",
      "ta": "角色动画后处理思路，可参考其软接触预算约束用于布料/植被与角色交互的穿插处理。",
      "src": "arXiv · cs.GR · 11-06",
      "url": "https://arxiv.org/abs/2611.09693v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "自然语言实时调度人群仿真",
      "sum": "CrowdDirector 用自然语言指令在仿真运行时编排人群，兼顾灵活性与低延迟。",
      "ta": "运行时人群/群集编排思路，可借鉴到植被风场或 Niagara 群集行为的动态指令控制。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.08763v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "生成视频的视野外世界演化",
      "sum": "EvoWorld 研究生成视频模型在镜头外区域的世界演化一致性。",
      "ta": "与实时渲染关联有限，仅作生成式世界建模趋势速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.06748"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "质量效应2早期过场动画曝光",
      "sum": "动画师公开 BioWare 蒙特利尔内部 pre-alpha 过场动画预告及其制作方式。",
      "ta": "过场动画分镜与镜头构建的行业参考，速览即可。",
      "src": "80 Level · 11-09",
      "url": "https://80.lv/articles/mass-effect-2-animator-shares-pre-alpha-cinematics-trailer/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Blackwell 加速 FLUX 图像生成",
      "sum": "NVIDIA 介绍在 Blackwell GPU 上部署 FLUX 3 Image Klein 的推理延迟优化。",
      "ta": "关注扩散模型推理优化思路，可迁移到材质贴图/概念图批量生成的工具链。",
      "src": "NVIDIA · 11-06",
      "url": "https://developer.nvidia.com/blog/speed-up-image-generation-with-flux-3-image-klein-on-nvidia-blackwell-gpus/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "RL 权重重载加速新集合通信",
      "sum": "NVIDIA 提出 Reshard Collective 加速强化学习后训练的权重重载。",
      "ta": "纯训练侧优化，与实时渲染无直接关系，速览即可。",
      "src": "NVIDIA · 11-06",
      "url": "https://developer.nvidia.com/blog/accelerating-reinforcement-learning-weight-refit-with-the-reshard-collective/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型多教师蒸馏再思考",
      "sum": "论文重新审视扩散模型中的多教师 on-policy 蒸馏方法。",
      "ta": "生成模型训练侧研究，暂不涉及引擎或实时管线。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.04386"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时全波形 LiDAR Transformer",
      "sum": "论文用强度引导 token 削减与物理感知增强实现实时全波形 LiDAR Transformer。",
      "ta": "实时点云感知加速思路，对扫描资产处理与程序化植被点云有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.07613"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "手游渠道壁垒正在松动",
      "sum": "80 Level 分析长期把守手游分发的两大平台格局开始变化。",
      "ta": "发行侧信息，与 TA 日常无直接关联，速览。",
      "src": "80 Level · 11-07",
      "url": "https://80.lv/articles/mobile-game-gatekeepers-are-opening-the-gates/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "无源码逆向复活经典 RPG",
      "sum": "SNEG 在无源码、无工具、无文档下逆向零售版重制 2001 年 D&D RPG。",
      "ta": "逆向重建资产与数据管线的案例，值得看其资源还原与工具重建思路。",
      "src": "80 Level · 11-06",
      "url": "https://80.lv/articles/this-forgotten-classic-d-d-rpg-was-revived-without-source-code-or-tools/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "GTA6 发售前放出 39 张截图",
      "sum": "Rockstar 在发售两周前公布 39 张 GTA6 新截图，展示罪恶都市与主角。",
      "ta": "可观察其植被密度、光照与材质表现，作为画面基准参考。",
      "src": "80 Level · 11-06",
      "url": "https://80.lv/articles/rockstar-shares-39-new-gta-6-screenshots-two-weeks-before-launch/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 1,
      "title": "Quixel Megascans 全库永久免费",
      "sum": "整个 Quixel Megascans 素材库现已免费开放，且为永久性。",
      "ta": "植被与地表扫描资产可直接进 UE 管线，大幅降低环境搭建的素材成本。",
      "src": "80 Level · 11-06",
      "url": "https://80.lv/articles/entire-quixel-megascans-library-now-available-for-free/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "神经纹理实时超分采样",
      "sum": "提出轻量MLP在纹理采样阶段实时放大低分辨率纹理，泛化而非过拟合。",
      "ta": "纹理采样阶段做神经超分，直接关系到显存与带宽预算，值得评估能否进材质管线。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.07289v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "网格泼溅解耦拓扑与外观",
      "sum": "T²-Splat用自适应拓扑网格加纹理残差，减少为保细节而过密细分。",
      "ta": "三角泼溅接传统管线，拓扑与外观解耦的思路可参考到程序化植被的LOD与网格化流程。",
      "src": "arXiv · cs.GR · 11-04",
      "url": "https://arxiv.org/abs/2611.06974v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "按感知分配高斯而非几何",
      "sum": "重新审视基于网格的泼溅中每面固定高斯数的分配策略，主张以感知驱动。",
      "ta": "高斯分配策略直接影响渲染开销与画质平衡，做程序化散布时可借鉴其分配逻辑。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.07979v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "分层增量Beta泼溅在线重建",
      "sum": "针对在线3DGS每关键帧仅数十次迭代、初始化差的问题提出分层增量方案。",
      "ta": "在线重建的收敛速度问题，与扫描/实景进引擎的流程相关，速览即可。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.08288v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "扩散驱动高斯头像精修",
      "sum": "用合成失败样本引导扩散模型，修复单目视频高斯头像的模糊与拉伸伪影。",
      "ta": "数字人与面部资产方向，与植被/特效本职关联弱，速览。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.07909v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "对偶轮廓提取中轴网格",
      "sum": "DC-SQEM用球面二次误差度量的对偶轮廓从点云提取保特征中轴网格。",
      "ta": "几何处理与简化方向，可留意其对点云到网格的保特征能力。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.07328v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "四维点泼溅雷达渲染",
      "sum": "面向毫米波雷达微多普勒的可微渲染，缓解雷达数据集稀缺。",
      "ta": "传感仿真方向，与实时渲染本职距离较远，速览。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.08342v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "骨骼运动信号实时补全",
      "sum": "REACT针对游戏、XR等交互场景，实时补全质量不佳的追踪骨骼运动信号。",
      "ta": "涉及游戏动捕数据管线，若做角色/植被交互驱动可关注其补全思路。",
      "src": "arXiv · cs.GR · 11-05",
      "url": "https://arxiv.org/abs/2611.08301v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Houdini流体交互教程",
      "sum": "Gnomon Workshop推出Houdini流体与交互模拟入门课程，限时八折。",
      "ta": "流体特效学习资源，与Niagara流体方向可互补参考，速览。",
      "src": "80 Level · 11-05",
      "url": "https://80.lv/articles/learn-to-simulate-realistic-fluid-interactions-in-houdini/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Maya多视觉风格制作解析",
      "sum": "华纳动画新片团队讲解如何用Maya处理影片的多种视觉风格。",
      "ta": "离线动画流程参考，与实时管线关联有限，速览。",
      "src": "80 Level · 11-06",
      "url": "https://80.lv/articles/how-the-cat-in-the-hat-was-made-with-autodesk-maya-flow/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "LAIKA手工羽毛制作揭秘",
      "sum": "LAIKA分享《Wildwood》中鸟族将领每根羽毛均为手工打造。",
      "ta": "离线角色资产细节参考，对实时毛发/植被有启发但非直接，速览。",
      "src": "80 Level · 11-05",
      "url": "https://80.lv/articles/laika-shares-how-it-made-the-feathers-of-general-in-wildwood/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "K/DA新MV动画幕后",
      "sum": "Fortiche导演与动画总监谈FIRESTARTER的动画、VFX与镜头及所用3D软件。",
      "ta": "风格化动画与VFX流程参考，速览。",
      "src": "80 Level · 11-05",
      "url": "https://80.lv/articles/take-a-look-behind-animation-in-k-da-s-firestarter-music-video/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "FF7重制制作人暗示新作",
      "sum": "北濑佳范称SE更倾向投资新IP，但不排除更多重制。",
      "ta": "行业动向，与TA工作无直接关联，速览。",
      "src": "80 Level · 11-05",
      "url": "https://80.lv/articles/final-fantasy-vii-remake-producer-hints-at-more-adaptations-new-games/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "AC英灵殿升级PSSR支持",
      "sum": "《刺客信条：英灵殿》免费更新为PS5 Pro带来升级版PSSR支持。",
      "ta": "主机超分方案落地案例，可留意PSSR升级后的画质表现。",
      "src": "PlayStation Blog · 11-05",
      "url": "https://blog.playstation.com/2026/11/05/assassins-creed-valhalla-new-update-brings-new-game-upgraded-pssr-support-for-ps5-pro-today/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "UE将展示网格地形与MCP集成",
      "sum": "虚幻引擎将在I/ITSEC 2026展示Mesh Terrain演示及Unreal MCP与LLM集成讨论。",
      "ta": "Mesh Terrain演示与MCP/LLM集成值得关注，可能影响地形工具与引擎内AI工作流。",
      "src": "Unreal Engine · 11-04",
      "url": "https://www.unrealengine.com/news/unreal-engine-innovation-heads-to-i-itsec-2026"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "GPU加速的渐进式UMAP降维",
      "sum": "GPUMAP将渐进式UMAP降维搬到GPU，降低高维数据交互分析的计算成本。",
      "ta": "GPU并行降维思路可借鉴到大规模植被/参数空间的实时可视化分析。",
      "src": "arXiv · cs.GR · 11-04",
      "url": "https://arxiv.org/abs/2611.06191v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "单图去玻璃反射新方法",
      "sum": "CLEAR用颜色-纹理潜空间对齐，从透过玻璃拍摄的单图恢复透射场景。",
      "ta": "反射分离技术对屏幕空间反射/玻璃材质后期处理有参考价值。",
      "src": "arXiv · cs.GR · 11-04",
      "url": "https://arxiv.org/abs/2611.05969v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "生成房间评估新框架GREP",
      "sum": "GREP基于原则对LLM生成的家具房间场景做整体质量评估。",
      "ta": "程序化场景生成的自动评估思路，可迁移到植被布置质量打分。",
      "src": "arXiv · cs.GR · 11-04",
      "url": "https://arxiv.org/abs/2611.05802v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "扩散模型单次引导蒸馏分解",
      "sum": "分解蒸馏实现可解释的单次前向引导，替代每步条件/无条件双评估。",
      "ta": "单次引导降低扩散推理成本，对贴图/材质生成的实时化有潜在意义。",
      "src": "arXiv · cs.GR · 11-03",
      "url": "https://arxiv.org/abs/2611.05755v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "title": "Transformer直接渲染3D高斯",
      "sum": "GaussianRenderFormer用Transformer将高斯与相机直接输出图像，无需光栅化器。",
      "ta": "无光栅化的神经高斯渲染，值得关注其对实时渲染管线与GS工作流的潜在冲击。",
      "src": "arXiv · cs.GR · 11-03",
      "url": "https://arxiv.org/abs/2611.05593v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "分钟级游戏交互世界模型数据集",
      "sum": "GameVerse提供分钟级游戏画面数据集，用于长时程交互式世界建模。",
      "ta": "长时程世界模型数据对程序化生成与游戏内AI模拟有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.37257"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "未见游戏的解说与研究智能体",
      "sum": "StreamDuo为未见过的游戏提供实时解说与研究智能体。",
      "ta": "面向游戏的智能体框架，可留意其对游戏内AI交互的启发。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.01120"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "少步扩散速度对抗蒸馏",
      "sum": "VA-TDM用速度对抗蒸馏统一改进少步扩散模型。",
      "ta": "少步扩散加速对实时生成类工具链有潜在价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.06796"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "从部分点云补全完整场景网格",
      "sum": "AnchorComplete从部分点云恢复完整场景网格。",
      "ta": "点云补全对扫描重建、场景资产修复工作流有直接参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.03228"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "战神新作延期至2027年5月",
      "sum": "圣莫尼卡工作室宣布战神Laufey延期三个月至2027年5月以打磨。",
      "ta": "行业排期动态，速览即可。",
      "src": "80 Level · 11-05",
      "url": "https://80.lv/articles/god-of-war-laufey-delayed-to-may-2027/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "星战竞速动画的混合工作流",
      "sum": "Fuse Games结合物理驱动动画、动捕、关键帧与快速预演呈现700km/h竞速。",
      "ta": "物理驱动+动捕+关键帧的混合动画管线，对高速运动表现有借鉴意义。",
      "src": "80 Level · 11-05",
      "url": "https://80.lv/articles/behind-the-animation-of-star-wars-galactic-racer-s-high-speed-chaos/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "塞尔达时之笛重制版年度最高分",
      "sum": "Switch 2版时之笛重制获96 Metascore，为2026年评分最高游戏。",
      "ta": "行业评分动态，速览即可。",
      "src": "80 Level · 11-04",
      "url": "https://80.lv/articles/the-legend-of-zelda-ocarina-of-time-switch-2-remake-is-the-highest-rated-game-of-2026/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "模块化建筑套件搭建巴塞罗那场景",
      "sum": "作者用模块化建筑套件、可平铺材质与trim sheets在UE5中搭建风格化场景。",
      "ta": "模块化套件+trim sheet的UE5环境搭建流程，对场景资产复用有直接参考。",
      "src": "80 Level · 11-04",
      "url": "https://80.lv/articles/creating-a-stylized-barcelona-environment-using-a-modular-architecture-kit/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender绝区零风格Shader更新",
      "sum": "Kythera的ZZZ风格Shader更新，附带自动连接贴图与光照的插件。",
      "ta": "风格化卡通Shader的自动应用工具，可留意其材质连接思路。",
      "src": "80 Level · 11-04",
      "url": "https://80.lv/articles/have-a-look-at-this-zzz-shader-for-blender-that-comes-with-auto-apply-add-on/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Tripwire扩展发行业务",
      "sum": "Tripwire Interactive扩展发行业务，聚焦更小规模开发者与游戏。",
      "ta": "发行侧动态，速览即可。",
      "src": "Game Developer · 11-04",
      "url": "https://www.gamedeveloper.com/business/tripwire-interactive-expands-publishing-business-to-focus-on-smaller-developers-and-games"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "育碧竞购Arkane工作室",
      "sum": "Xbox拟出售Arkane，育碧等为潜在竞购方，以避免工作室关闭。",
      "ta": "工作室归属变动可能影响相关团队与技术流向，值得留意。",
      "src": "Game Developer · 11-04",
      "url": "https://www.gamedeveloper.com/business/ubisoft-among-the-bidders-for-arkane-as-xbox-looks-to-sell-the-studio"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Steam审核放缓或因AI游戏激增",
      "sum": "Valve警告Steam新游审核变慢，但未直接归因于任何开发趋势。",
      "ta": "审核积压或与AI生成游戏涌入相关，影响独立团队上线节奏。",
      "src": "Game Developer · 11-04",
      "url": "https://www.gamedeveloper.com/business/valve-warns-of-slower-steam-approval-process-due-to-flood-of-new-games"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "AMD支持DX12新Agility SDK",
      "sum": "DX12 Agility SDK 1.620带来Dump Files与扩展PIX标记，1.722预览版加新DXR特性。",
      "ta": "新DXR特性与PIX标记对渲染调试和光追管线值得跟进。",
      "src": "AMD GPUOpen · 11-03",
      "url": "https://gpuopen.com/learn/amd-directx12-agility-sdk-october-2026/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "相位引导动态高斯泼溅重建",
      "sum": "Phase-DGS用相位引导从非同步多视角视频做动态高斯泼溅重建。",
      "ta": "放宽同步假设，对实拍素材转动态3D重建流程有参考价值。",
      "src": "arXiv · cs.GR · 11-03",
      "url": "https://arxiv.org/abs/2611.04666v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "FlowRig统一3D与4D骨骼生成",
      "sum": "FlowRig用流匹配为静态3D与动态4D网格统一生成骨骼。",
      "ta": "自动绑定统一方案，对角色/植被等资产绑定自动化有启发。",
      "src": "arXiv · cs.GR · 11-02",
      "url": "https://arxiv.org/abs/2611.03775v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "DreamX视频扩散学潜在动作",
      "sum": "DreamX将视频扩散模型用作通用潜在动作学习器。",
      "ta": "潜在动作表征或与动画/动作生成相关，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.05377"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "PrimeSim通用世界模型模拟器",
      "sum": "PrimeSim基于大规模跨具身演示构建通用世界模型模拟器。",
      "ta": "世界模型方向，与实时仿真有潜在交集，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.04870"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "LOLPlay实时视觉智能体基准",
      "sum": "LOLPlay提出在英雄联盟中评测实时视觉智能体的基准。",
      "ta": "实时视觉智能体评测，对游戏内AI/自动化测试有参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.03685"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "SeMo3D统一3D生成编辑补全",
      "sum": "SeMo3D用选择性建模统一3D生成、编辑与补全。",
      "ta": "3D资产生成编辑一体化，对程序化资产流程有潜在价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.02568"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "如龙创作者工作室解散",
      "sum": "Nagoshi Studio于10月31日经股东决议解散。",
      "ta": "行业人事变动，速览。",
      "src": "80 Level · 11-03",
      "url": "https://80.lv/articles/yakuza-creator-s-studio-has-been-dissolved/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "塞尔达制作人谈时之笛重制",
      "sum": "青沼英二称Switch 2版时之笛重制与系列40周年相关。",
      "ta": "行业动态，速览。",
      "src": "80 Level · 11-03",
      "url": "https://80.lv/articles/zelda-producer-explains-what-led-to-ocarina-of-time-switch-2-remake/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前Xbox COO回应离职说法",
      "sum": "前Xbox COO Helen Chiang否认外界对其离职原因的多种说法。",
      "ta": "商业八卦，速览。",
      "src": "Game Developer · 11-03",
      "url": "https://www.gamedeveloper.com/business/former-xbox-coo-helen-chiang-takes-umbrage-with-the-characterizations-of-her-departure"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rami Ismail谈回归开发",
      "sum": "独立开发者Rami Ismail时隔六年重返游戏开发并分享心得。",
      "ta": "行业经验分享，速览。",
      "src": "Game Developer · 11-03",
      "url": "https://www.gamedeveloper.com/design/what-rami-ismail-learned-with-his-return-to-game-development"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "South of Midnight总监谈Xbox",
      "sum": "该作前总监称若由他决定不会资助自己执导的这款游戏。",
      "ta": "行业观点，速览。",
      "src": "Game Developer · 11-03",
      "url": "https://www.gamedeveloper.com/business/south-of-midnight-director-was-always-worried-about-rome-burning-at-xbox"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "GPU原生实时纹理网格重建",
      "sum": "提出GPU原生体视频系统，从多RGB-D实时重建带纹理三角网格，含接缝感知辐射校正。",
      "ta": "关注其把逐帧纹理化网格化从CPU搬到GPU的思路，对实时扫描/数字人管线有参考价值。",
      "src": "arXiv · cs.GR · 11-02",
      "url": "https://arxiv.org/abs/2611.03033v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "单图自监督个性化人体视频",
      "sum": "用自生成监督在测试时个性化姿态驱动人体视频扩散，缓解身份与服饰失真。",
      "ta": "若涉及角色动画/数字人，可看其测试时自监督如何避免额外训练数据。",
      "src": "arXiv · cs.GR · 11-02",
      "url": "https://arxiv.org/abs/2611.02964v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "参数化CAD智能体评测基准",
      "sum": "Parametric CAD Bench v3用100个任务评测从文本与工程图生成可执行CAD脚本的智能体。",
      "ta": "与游戏TA工作流关联弱，仅作程序化建模评测方法速览。",
      "src": "arXiv · cs.GR · 11-02",
      "url": "https://arxiv.org/abs/2611.02659v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "无摄像头视线物体识别",
      "sum": "GazeTags用约2美元电子标签配合头戴设备实现无摄像头的视线物体感知。",
      "ta": "偏XR交互硬件，与渲染/特效关联弱，速览即可。",
      "src": "arXiv · cs.GR · 11-02",
      "url": "https://arxiv.org/abs/2611.02599v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "语音口型动画新评测指标",
      "sum": "提出Fréchet Oral Distance，为语音驱动口型动画提供无坐标系的客观评测基准。",
      "ta": "若做面部动画质量评估可参考该指标，非渲染性能方向。",
      "src": "arXiv · cs.GR · 11-01",
      "url": "https://arxiv.org/abs/2611.01705v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "高斯泼溅免逐帧排序",
      "sum": "AbacusGS把3DGS混合顺序预存于场景，省去每帧逐splat深度排序，加速Web/移动端查看器。",
      "ta": "直击3DGS在Web/移动端CPU排序瓶颈，对实时查看器与植被/场景泼溅渲染性能有直接借鉴。",
      "src": "arXiv · cs.GR · 11-01",
      "url": "https://arxiv.org/abs/2611.01534v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "有限元方法可扩展编程规范",
      "sum": "提出有限元方法的可扩展程序化规范，便于试验不同单元提升求解质量与效率。",
      "ta": "偏工程仿真，与游戏实时渲染关联弱。",
      "src": "arXiv · cs.GR · 11-01",
      "url": "https://arxiv.org/abs/2611.01414v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "4D高斯泼溅球谐水印",
      "sum": "SHield通过扰动球谐系数为4DGS模型嵌入水印，避免重训练与神经解码器。",
      "ta": "关注4DGS资产保护与球谐系数层面的改动，对动态场景资产分发有参考。",
      "src": "arXiv · cs.GR · 10-31",
      "url": "https://arxiv.org/abs/2611.01162v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "单例无限世界生成约束",
      "sum": "研究仅凭一个样例生成无界世界时局部生成器必须共享什么，对应WFC的局部约束难题。",
      "ta": "直接关系程序化世界/植被生成的理论边界，值得精读其对局部约束与远距一致性的分析。",
      "src": "arXiv · cs.GR · 10-31",
      "url": "https://arxiv.org/abs/2611.01048v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "视频扩散统一相机运动控制",
      "sum": "UniCaMo用稀疏3D物体轨迹与相机轨迹联合控制视频扩散中的相机与物体运动。",
      "ta": "若用视频扩散做预演/参考，可看其相机轨迹控制如何构造运动一致输入噪声。",
      "src": "arXiv · cs.GR · 10-31",
      "url": "https://arxiv.org/abs/2611.00810v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "智能体视频生成与世界建模",
      "sum": "探讨视频生成结合智能体框架，涉及智能体视频生成、世界建模与递归自我改进。",
      "ta": "世界模型方向，关注其与交互式仿真的关联，暂非直接落地工具。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.40191"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "持久个人智能体增强人类能动性",
      "sum": "提出Avatar Intelligence概念，用持久个人智能体放大人的能动性。",
      "ta": "偏通用AI智能体，与游戏/渲染关联弱。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2611.03092"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "自建扩散语言模型转换法",
      "sum": "BYOD提出高效的自回归到扩散语言模型转换方法。",
      "ta": "纯语言模型方向，与TA工作流无关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.41574"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "像素拼贴营造工业恐惧",
      "sum": "Medium Rare开发者谈如何用像素艺术与拼贴营造恐惧而非惊吓，并可视化心理创伤。",
      "ta": "美术风格参考，速览其拼贴与像素表现手法。",
      "src": "80 Level · 11-02",
      "url": "https://80.lv/articles/how-medium-rare-uses-pixel-art-collages-to-evoke-dread-of-industrialized-cannibalism/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender复刻Control嘶嘶特效",
      "sum": "教程演示在Blender中复刻《控制》里的Hiss特效。",
      "ta": "可看其特效分层与材质做法，作为Niagara/材质思路的对照参考。",
      "src": "80 Level · 11-02",
      "url": "https://80.lv/articles/recreating-hiss-effect-from-remedy-s-control-in-blender/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Claude Code拦截游戏克隆",
      "sum": "新规则阻止模型重建特定现有游戏，开发者称也误伤自家项目与部分逆向工程任务。",
      "ta": "若在工具链中用AI编码助手做逆向或复刻，需注意此类策略限制。",
      "src": "80 Level · 11-02",
      "url": "https://80.lv/articles/claude-code-blocks-video-game-cloning-some-reverse-engineering-tasks/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "超现实免费游戏探索巨构",
      "sum": "HELENA: Cloud District为无跳跃键的超现实探索游戏，可拍摄奇异植物。",
      "ta": "独立游戏资讯，速览即可。",
      "src": "80 Level · 11-02",
      "url": "https://80.lv/articles/explore-a-decaying-megastructure-photograph-strange-plants-in-this-free-surreal-game/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "名越工作室因网易撤资关闭",
      "sum": "名越稔洋离开世嘉后创立的工作室因网易削减资金而关闭。",
      "ta": "行业动向，关注大厂投资收缩对项目稳定性的影响。",
      "src": "Game Developer · 11-02",
      "url": "https://www.gamedeveloper.com/business/nagoshi-studio-toshihiro-nagoshi-s-game-development-studio-after-leaving-sega-closes-as-netease-cuts-its-funding"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "AI游戏淹没Itch.io",
      "sum": "Itch.io游戏页面数量翻倍，AI游戏涌入但销量未同比增加。",
      "ta": "关注AI生成内容对独立发行生态的冲击。",
      "src": "Game Developer · 11-02",
      "url": "https://www.gamedeveloper.com/pc/number-of-game-pages-doubles-on-itch-io-as-ai-clones-flood-the-store"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "塞尔达重制助新人学习",
      "sum": "青沼英二称时之笛重制旨在让年轻员工从经典设计中学习。",
      "ta": "制作理念速览，与TA技术关联弱。",
      "src": "Game Developer · 11-02",
      "url": "https://www.gamedeveloper.com/production/zelda-producer-ocarina-of-time-remake-helps-junior-staff-learn-classic-insights"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "椭球基元语义形状抽象",
      "sum": "用椭球基元集合表示3D形状，兼顾紧凑性与计算效率。",
      "ta": "基元式形状抽象可用于程序化生成与碰撞代理，值得看其语义分组方式。",
      "src": "arXiv · cs.GR · 10-30",
      "url": "https://arxiv.org/abs/2610.42145v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "VR手部反馈改变震颤感知",
      "sum": "探索性研究：VR中改变视觉手部反馈对特发性震颤患者的影响。",
      "ta": "偏人机交互医学研究，与渲染管线无关，速览即可。",
      "src": "arXiv · cs.GR · 10-30",
      "url": "https://arxiv.org/abs/2610.41496v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态蒙皮免模拟次级运动",
      "sum": "扩展LBS，用一组变形器偏移顶点位置产生类物理次级运动，无需仿真。",
      "ta": "角色/植被骨骼次级运动可参考此免模拟思路，成本远低于物理解算。",
      "src": "arXiv · cs.GR · 10-29",
      "url": "https://arxiv.org/abs/2610.40976v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "语音驱动全身动作生成",
      "sum": "结构化潜空间流匹配，从语音同步生成表情、手势与身体动作。",
      "ta": "若做虚拟角色/过场动画，可关注其分部位建模与长时序一致性处理。",
      "src": "arXiv · cs.GR · 10-29",
      "url": "https://arxiv.org/abs/2610.40972v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "代码即策略机器人后训练管线",
      "sum": "面向机器人智能体的代码即策略后训练流程。",
      "ta": "与游戏实时渲染无直接关联，速览即可。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.40799"
    },
    {
      "cat": "ai",
      "imp": "hi",
      "rank": 1,
      "title": "UE EULA 开放 AI 训练授权",
      "sum": "Epic 更新 UE 最终用户协议，开发者可自愿选择用 UE 与 MetaHuman 项目训练 AI 模型。",
      "ta": "直接关系到项目资产能否喂给模型，需确认团队合规口径与资产授权策略。",
      "src": "Unreal Engine · 10-29",
      "url": "https://www.unrealengine.com/ue-devs-can-now-choose-to-train-ai-models-on-their-projects"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "实时无限世界生成新方案",
      "sum": "L3G-World 用隐式 3D 高斯记忆实现实时无限世界生成。",
      "ta": "与程序化场景生成思路直接相关，可看其记忆表示如何支撑实时扩展。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.40614"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "块注意力加速视频扩散",
      "sum": "AB-Attention 提出精确块注意力以加速视频扩散 Transformer。",
      "ta": "视频生成加速思路，对实时序列类生成管线有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.39663"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "像素空间生成 Transformer 分词",
      "sum": "论文提出角色耦合的分词方案，用于像素空间生成 Transformer。",
      "ta": "偏生成模型底层，速览即可，暂无明显引擎侧落点。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.40647"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Claude 被限制复刻游戏",
      "sum": "Anthropic 更新 Opus 5.5，引导 Claude Code 不再复刻他人具体游戏。",
      "ta": "用 AI 辅助写玩法/工具代码时需注意其能力边界与合规限制。",
      "src": "Game Developer · 10-30",
      "url": "https://www.gamedeveloper.com/programming/anthropic-appears-to-have-ordered-ai-tool-claude-to-stop-remaking-video-games"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "EA 关停 BioWare 转投星战",
      "sum": "报道称 EA 关闭 BioWare，将资源从质量效应转向新星战前线作品。",
      "ta": "行业资源再分配信号，关注大厂项目取舍对人才与外包流向的影响。",
      "src": "Game Developer · 10-30",
      "url": "https://www.gamedeveloper.com/business/report-ea-shut-down-bioware-in-favor-of-star-wars-battlefront-sequel-after-previously-decrying-licensed-games"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Romero 取消项目找到新发行",
      "sum": "John Romero 被 Xbox 取消的项目获新发行商接手，团队部分保留。",
      "ta": "行业动态速览，与 TA 日常无直接关联。",
      "src": "Game Developer · 10-30",
      "url": "https://www.gamedeveloper.com/business/john-romero-canceled-game-finds-a-new-publisher-amidst-an-overall-scope-change"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "暗黑风 PvP 新作将抢先体验",
      "sum": "前暴雪 CCO 的 Bonfire Studios 首作 Arkheron 十一月进入抢先体验。",
      "ta": "新项目动态速览，可留意其美术与特效风格走向。",
      "src": "80 Level · 10-30",
      "url": "https://80.lv/articles/diablo-style-pvp-by-former-blizzard-cco-is-coming-to-early-access-in-november"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ZBrush 半写实胸像流程",
      "sum": "Eric Liu 分享 ZBrush 雕刻、Substance 3D 贴图与 Marmoset 打光的胸像制作。",
      "ta": "常规角色资产流程参考，可看贴图与打光的衔接细节。",
      "src": "80 Level · 10-30",
      "url": "https://80.lv/articles/sculpting-texturing-a-semi-realistic-lobo-bust-with-zbrush-substance-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "索尼动画片晨间动作参考",
      "sum": "Daniel Ceballos 发布为索尼 GOAT 电影制作的晨间日常动画参考。",
      "ta": "动画参考素材，速览即可。",
      "src": "80 Level · 10-30",
      "url": "https://80.lv/articles/fun-morning-routine-animation-reference-for-sony-s-goat-movie/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "殡葬师开发商取消作免费玩",
      "sum": "The Mortuary Assistant 团队被取消的 Paranormal Activity 游戏现可免费游玩。",
      "ta": "恐怖品类动态速览，与 TA 工作无直接关联。",
      "src": "80 Level · 10-30",
      "url": "https://80.lv/articles/you-can-now-play-the-mortuary-assistant-dev-s-canceled-paranormal-activity-game-for-free/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "六款独立游戏共襄善举",
      "sum": "六支独立团队谈各自游戏的创意与开发决策。",
      "ta": "独立开发访谈速览，参考价值有限。",
      "src": "80 Level · 10-30",
      "url": "https://80.lv/articles/inside-six-very-different-indie-games-supporting-a-shared-cause/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "单图生成可动画发卡",
      "sum": "HairDeck 从单张图像生成风格化 hair cards，可直接用 spring bone 驱动动画。",
      "ta": "植被/卡片类几何的程序化生成思路可迁移，关注其 ribbon 布局与骨骼绑定方式。",
      "src": "arXiv · cs.GR · 10-29",
      "url": "https://arxiv.org/abs/2610.40599v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "鱼眼全视场高斯泼溅",
      "sum": "GOFish 实现鱼眼镜头全视场高斯泼溅渲染并提取对齐碰撞网格。",
      "ta": "数字孪生场景重建可参考，网格与渲染对齐对碰撞/物理资产制作有借鉴。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37818v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "神经显式形状表示",
      "sum": "提出兼顾连续曲面建模、高效渲染与对象压缩的神经显式形状表示。",
      "ta": "显式曲面查询对光追友好，值得关注其结构化输出空间如何服务实时渲染。",
      "src": "arXiv · cs.GR · 10-28",
      "url": "https://arxiv.org/abs/2610.38441v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "频率自适应高斯网格",
      "sum": "融合特征网格与 2D 高斯，提出频率自适应的高效图像表示。",
      "ta": "结构化与非结构化表示的权衡思路，可类比到植被分布与 LOD 表示策略。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.38007v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "多视图一致几何注入",
      "sum": "将几何推断与纹理合成解耦，提升单图到多视图生成的一致性。",
      "ta": "几何与纹理解耦的思路对程序化资产与贴图生成管线有参考价值。",
      "src": "arXiv · cs.GR · 10-28",
      "url": "https://arxiv.org/abs/2610.38518v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "城市植被配置优化",
      "sum": "Greenscapes 优化城市植被配置，平衡遮荫、微气候与景观风格。",
      "ta": "植被布局优化的目标函数设计，可借鉴到开放世界植被程序化分布规则。",
      "src": "arXiv · cs.GR · 10-29",
      "url": "https://arxiv.org/abs/2610.40007v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "AI 原生引擎做游戏",
      "sum": "VibeGame 提出提示词到游戏的开发框架，含自演化对抗智能体团队。",
      "ta": "关注其引擎侧接口设计，判断对 TA 工具链与自动化流程的潜在影响。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.33106"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "MPM 驱动灵巧操作",
      "sum": "MG-CD-MPM 用连续损伤与粘塑性 MPM 支撑强化学习灵巧操作仿真。",
      "ta": "大变形与拓扑变化的仿真方案，与流体/软体特效求解器思路可对照。",
      "src": "arXiv · cs.GR · 10-29",
      "url": "https://arxiv.org/abs/2610.39975v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "人群数据嵌入仿真",
      "sum": "Trajeform 将人群轨迹数据嵌入，学习更自然的环境适配行为。",
      "ta": "群体行为数据驱动思路，可类比到场景中 NPC 与植被交互的分布逻辑。",
      "src": "arXiv · cs.GR · 10-29",
      "url": "https://arxiv.org/abs/2610.39563v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "网页版介观程序化建模",
      "sum": "MesoCraft 提供浏览器内交互式介观生物结构程序化建模工具。",
      "ta": "交互式程序化建模的 Web 实现，对工具 UX 设计有轻量参考。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37954v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "极端角度动漫脸工具",
      "sum": "DillonGoo Studios 发布 Blender 工具，处理极端角度下的动漫脸部。",
      "ta": "风格化角色制作辅助，关注其形变与透视处理方式。",
      "src": "80 Level · 10-29",
      "url": "https://80.lv/articles/create-perfect-anime-faces-at-extreme-angles-with-this-blender-tool/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "上古卷轴6副标题传闻",
      "sum": "报道称《上古卷轴6》官方副标题与 Hammerfell 相关。",
      "ta": "行业动态速览，与 TA 工作无直接关联。",
      "src": "80 Level · 10-29",
      "url": "https://80.lv/articles/the-elder-scrolls-6-may-finally-have-a-name-confirmation-and-it-makes-perfect-sense/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "第二人生转型现代平台",
      "sum": "Linden Lab 介绍 Luau、VS Code 集成与实时迭代等平台现代化举措。",
      "ta": "脚本语言与编辑器集成方案，对工具链设计有轻度参考。",
      "src": "80 Level · 10-29",
      "url": "https://80.lv/articles/second-life-wants-its-23-year-old-world-to-be-a-modern-game-platform/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "Epic确认AI参与UE开发",
      "sum": "Epic副总裁称AI代码工具已修复UE存在十年的非确定性烘焙Bug，AI将塑造引擎未来。",
      "ta": "关注AI辅助引擎开发对烘焙/构建稳定性的实际影响，以及后续版本迭代节奏变化。",
      "src": "Game Developer · 10-28",
      "url": "https://www.gamedeveloper.com/programming/unreal-engine-will-be-developed-with-ai-code-confirms-epic"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "FSR 2.4下放RX 6000",
      "sum": "AMD FSR Redstone SDK 2.4将ML超分4.1.2带入RX 6000系与部分Ryzen，新增Vulkan支持。",
      "ta": "老卡与APU也能跑ML超分，评估项目最低配置与Vulkan路径下的画质/性能取舍。",
      "src": "AMD GPUOpen · 10-28",
      "url": "https://gpuopen.com/learn/amd-fsr-sdk-2-4-rx-6000-ryzen-apus/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE移动开发免费课程上线",
      "sum": "Epic十月免费学习内容聚焦UE移动开发，涵盖入门、性能优化与发布流程。",
      "ta": "移动端性能优化章节可作植被/材质在低端设备上的预算参考。",
      "src": "Unreal Engine · 10-28",
      "url": "https://www.unrealengine.com/learning/octobers-epic-learning-content-mobile-development-in-unreal-engine"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5.8程序化角色绑定框架",
      "sum": "社区开发者发布面向UE5.8的程序化模块化角色绑定框架。",
      "ta": "程序化绑定思路可借鉴到植被/道具的批量骨骼与模块化装配流程。",
      "src": "Tech-Artists · 10-28",
      "url": "https://www.tech-artists.org/t/developed-procedural-modular-character-rigging-framework-unreal-engine-5-8/18593"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Substance Designer内物理模拟",
      "sum": "新工具可在Substance 3D Designer中直接物理模拟堆叠3D模型并生成无缝平铺贴图。",
      "ta": "程序化堆叠生成贴图，适合做碎石/落叶类地表细节的可平铺材质。",
      "src": "80 Level · 10-28",
      "url": "https://80.lv/articles/simulate-physics-right-in-substance-3d-designer-with-this-tool/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "BioWare创始人谈工作室关闭",
      "sum": "Greg Zeschuk首次受访，称EA收购与杠杆收购是致命一击，好工作室无法靠随机人员和AI重建。",
      "ta": "行业组织与人才结构视角，与TA团队建设无直接技术关联，速览即可。",
      "src": "80 Level · 10-28",
      "url": "https://80.lv/articles/bioware-co-founder-greg-zeschuk-says-studio-was-killed-by-executives-who-have-never-made-a-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Valve回应Steam AI克隆现象",
      "sum": "Valve承认Steam上快速AI克隆游戏的问题，但将防范责任推给开发者自身。",
      "ta": "了解平台对AI素材的合规态度，涉及资产来源时留意风险。",
      "src": "Game Developer · 10-28",
      "url": "https://www.gamedeveloper.com/pc/valve-addresses-steam-ai-cloning-problem"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Kenshi团队招募地形美术",
      "sum": "Lo-Fi Games正在招聘一名地形美术，参与下一款沙盒RPG开发。",
      "ta": "地形岗位需求侧信息，可侧面了解程序化地形技能的市场价值。",
      "src": "80 Level · 10-28",
      "url": "https://80.lv/articles/join-kenshi-developers-to-create-next-great-sandbox-rpg/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "影之刃零谈Boss武器设计",
      "sum": "Phantom Blade Zero介绍Boss武器如何改变战斗与探索，融合魂类与砍杀玩法。",
      "ta": "玩法设计向内容，与渲染/工具链无直接关联。",
      "src": "PlayStation Blog · 10-29",
      "url": "https://blog.playstation.com/2026/10/28/phantom-blade-zero-how-boss-weapons-transform-combat-and-exploration/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 2,
      "title": "Epic 改 EULA 允许 AI 训练",
      "sum": "Epic 更新 EULA，允许用 UE 与 MetaHuman 输出训练 AI，开发者可按项目限制。",
      "ta": "自研资产与 MetaHuman 产出可能被纳入训练语料，需确认项目合同与资产授权边界。",
      "src": "Game Developer · 10-27",
      "url": "https://www.gamedeveloper.com/programming/epic-is-updating-its-eula-to-allow-ai-training-on-outputs-from-unreal-engine-and-metahuman"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "RTX Spark 平台主打神经渲染",
      "sum": "NVIDIA 推出面向 AI 开发与游戏的 Windows PC 平台 RTX Spark，基于 Blackwell RTX。",
      "ta": "关注其神经渲染与 AI 角色在游戏端的落地形态，判断对渲染管线的新要求。",
      "src": "NVIDIA · 10-27",
      "url": "https://developer.nvidia.com/blog/nvidia-rtx-spark-powers-neural-rendering-and-ai-characters-in-games/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "六边形面元替代高斯泼溅",
      "sum": "提出 Hexels 平面六边形面元与一阶空间颜色场，降低渲染与重建开销。",
      "ta": "紧凑图元思路可参考到植被/地表点云表达，关注显存与重建质量权衡。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37668v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CT 体渲染烘焙为 3DGS",
      "sum": "CTBakeGS 无需训练即可把 CT 体渲染结果烘焙成 3D 高斯泼溅。",
      "ta": "体渲染转实时图元的烘焙思路，可类比体积雾/流体特效的离线转实时方案。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37406v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "VR 无界 3DGS 背景补全",
      "sum": "DomeGS 针对 VR 中无界 3DGS 场景做感知一致的背景补全。",
      "ta": "关注其补全策略对 VR 大场景空洞问题的处理，可迁移到环境搭建流程。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37172v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "路径追踪网格插入高斯场景",
      "sum": "GraftRay 通过路径追踪把网格物体插入 2DGS/3DGS 场景并保证光照一致。",
      "ta": "虚拟物体与扫描场景的光照/阴影一致性，是混合渲染管线的关键参考。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.37036v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "可复用传输骨架加速 PDE",
      "sum": "用持久化传输骨架复用随机游走轨迹，加速交互式蒙特卡洛 PDE 求解。",
      "ta": "路径复用思路与实时路径追踪降噪有相通之处，可速览。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.36931v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高斯 SLAM 解耦几何与跟踪",
      "sum": "LingGS 将前馈几何预测与相机跟踪解耦，提升单目高斯 SLAM 重建质量。",
      "ta": "扫描/实景重建流程的实时化参考，关注有限优化预算下的质量表现。",
      "src": "arXiv · cs.GR · 10-27",
      "url": "https://arxiv.org/abs/2610.36853v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "长时序任务可视化视角规划",
      "sum": "VISTA 提出可微的视角规划方法，用于长时序任务的 3D 过程可视化。",
      "ta": "与工具链中的自动取景/演示镜头生成有潜在关联，速览即可。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.36111v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "多视图渲染合并为单张纹理",
      "sum": "提出把稀疏多视图渲染整合为单张一致纹理的系统，可接入生成模型。",
      "ta": "与程序化贴图/资产纹理烘焙流程相关，值得看其图集合并策略。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.36098v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 替代 AE 做 MV",
      "sum": "展示如何在 Blender 而非 After Effects 中完成音乐视频的动态设计。",
      "ta": "Blender 动效工作流可作工具链替代方案参考，速览。",
      "src": "80 Level · 10-27",
      "url": "https://80.lv/articles/see-how-this-music-video-was-made-in-blender-instead-of-after-effects/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "几何生成助力空间理解",
      "sum": "论文探讨几何生成任务如何帮助模型进行空间理解与推理。",
      "ta": "与 3D 生成模型能力边界相关，速览。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.36022"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Rockstar 员工投票组建工会",
      "sum": "Rockstar 员工将在 GTA6 发售前两周内投票决定是否承认工会。",
      "ta": "行业劳资动向，关注对 3A 制作节奏的潜在影响。",
      "src": "Game Developer · 10-27",
      "url": "https://www.gamedeveloper.com/business/rockstar-workers-to-vote-on-unionization-ahead-of-grand-theft-auto-vi-release"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Warhorse 遭网络安全事件",
      "sum": "《天国拯救》开发商披露遭遇严重网络安全攻击，正在评估影响。",
      "ta": "提醒项目资产与源码的访问安全，速览。",
      "src": "Game Developer · 10-27",
      "url": "https://www.gamedeveloper.com/programming/warhorse-studios-hit-by-an-undetailed-cybersecurity-incident"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Sucker Punch 裁员 24 人",
      "sum": "Sucker Punch 裁减 24 人，约占团队 10%，称与市场及下个项目需求对齐。",
      "ta": "行业收缩信号，速览。",
      "src": "Game Developer · 10-27",
      "url": "https://www.gamedeveloper.com/business/sucker-punch-lays-off-24-to-align-with-current-market-next-project-needs"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Konami 谈寂静岭多形态布局",
      "sum": "制作人谈寂静岭的创作自由、第一人称恐怖与苏格兰环境还原及系列未来。",
      "ta": "环境还原与美术方向参考，速览。",
      "src": "80 Level · 10-27",
      "url": "https://80.lv/articles/interview-konami-envisions-silent-hill-like-a-premium-tv-series-with-various-game-formats/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CVTSplat 用Voronoi重建多视图",
      "sum": "以自适应质心Voronoi划分做多视图形状与外观重建，降低优化中重复重建开销。",
      "ta": "关注其自适应空间划分思路，或可借鉴到程序化植被分布与LOD划分。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.35347v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "GaussianSpline 动态4D高斯",
      "sum": "用自适应非均匀分段三次贝塞尔样条建模每个高斯运动，实现动态4D高斯泼溅。",
      "ta": "动态场景重建的运动参数化方案，对植被风动等非刚体动画重建有参考价值。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.35224v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "断件模型生成Blendshape",
      "sum": "针对含多个不连通部件的动漫风角色模型，生成ARKit/MediaPipe固定表情Blendshape。",
      "ta": "角色面部管线中处理断件网格的实用案例，可参考其部件拆分策略。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.35076v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "仿昆虫逆折纸曲面成形",
      "sum": "受昆虫变态发育褶皱展开启发，提出逆折纸方法设计曲面成形的褶皱结构。",
      "ta": "几何设计思路偏学术，暂与实时管线距离较远，速览即可。",
      "src": "arXiv · cs.GR · 10-26",
      "url": "https://arxiv.org/abs/2610.34903v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RacerGS 压缩3D高斯泼溅",
      "sum": "用残差自回归上下文构建紧凑3DGS压缩框架，显著降低参数存储与传输量。",
      "ta": "3DGS资产体积是落地瓶颈，压缩方案直接影响扫描植被/场景的运行时内存预算。",
      "src": "arXiv · cs.GR · 10-25",
      "url": "https://arxiv.org/abs/2610.34263v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "单相机可试穿虚拟人建模",
      "sum": "仅用单目视频或单图重建高保真、可动画、可试穿的虚拟人化身。",
      "ta": "单相机重建降低数字人采集门槛，与植被/特效本职关联较弱。",
      "src": "arXiv · cs.GR · 10-25",
      "url": "https://arxiv.org/abs/2610.34223v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "神经服装仿真显式摩擦建模",
      "sum": "为GNN服装仿真引入显式摩擦项与可设摩擦系数μ，替代隐式训练能量中的摩擦。",
      "ta": "布料/软体仿真中摩擦参数可控化，对角色与植被交互的物理表现有借鉴意义。",
      "src": "arXiv · cs.GR · 10-24",
      "url": "https://arxiv.org/abs/2610.33492v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "WorldCast 大角度相机可控角色视频",
      "sum": "提出世界一致的角色视频生成方法，支持大角度相机控制。",
      "ta": "相机可控的角色视频生成，可关注其在镜头运动一致性上的处理方式。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.33135"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "World-in-Context 交互式视频世界模型",
      "sum": "以in-context条件实现可交互的视频世界建模。",
      "ta": "交互式世界模型方向，与实时引擎结合尚早，关注其条件控制接口设计。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.33169"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox 拒Netflix五亿改编约",
      "sum": "报道称Netflix拟以5亿美元改编Xbox多个游戏IP，Xbox为抬价拒绝。",
      "ta": "IP影视化商业动向，与TA日常无直接关系，速览即可。",
      "src": "Game Developer · 10-26",
      "url": "https://www.gamedeveloper.com/business/xbox-reportedly-turned-down-a-500-million-deal-from-netflix-for-adapting-gaming-properties"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "前馈神经渲染做全局光照",
      "sum": "RADIANT 用物体为中心的前馈神经渲染器，无需逐场景优化或运行时光线追踪即可合成全局光照。",
      "ta": "关注其 token 化方式：按物体而非三角形切分，规避自注意力随网格分辨率平方增长，对实时 GI 方案有参考价值。",
      "src": "arXiv · cs.GR · 10-23",
      "url": "https://arxiv.org/abs/2610.32075v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "长时语音动作生成抗漂移",
      "sum": "提出持久状态分块流匹配方法，用状态记忆与注意力缓解长时共语动作生成的风格漂移。",
      "ta": "分块生成+持久状态的长序列一致性思路，可借鉴到程序化动作/动画长片段生成流程。",
      "src": "arXiv · cs.GR · 10-23",
      "url": "https://arxiv.org/abs/2610.32373v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "VLA 智能体玩开放世界游戏",
      "sum": "HiSTEVE 1.0 利用人机界面视觉语言动作智能体，在开放世界游戏中执行操作。",
      "ta": "关注其如何把游戏画面接口转成动作空间，对自动化测试与游戏内 AI 行为有潜在参考。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.31162"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "多模态智能体与世界模型评测",
      "sum": "Dual Exam 提出受控评测框架，用于评估多模态智能体与世界模型。",
      "ta": "若涉及世界模型评测维度，可留意其指标设计，但原文未提引擎或渲染关联。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.31066"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "浏览器版 2D 动画编辑器",
      "sum": "Rigby2D v0.2.6 发布，可在浏览器中直接试用完整 2D 动画编辑器。",
      "ta": "轻量 2D 绑定/动画工具，可速览其交互设计，与植被/3D 管线关联有限。",
      "src": "Tech-Artists · 10-25",
      "url": "https://www.tech-artists.org/t/rigby2d-v0-2-6-is-out-you-can-now-try-the-full-2d-animation-editor-directly-in-your-browser/18591"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Bluey 2D 风格靠自定义 Shader",
      "sum": "Gameloft 用 SDF 贴图、2D 平面、自定义 Shader 与 UE Control Rig 复刻手绘风。",
      "ta": "看 SDF 贴图与自定义 Shader 如何在 UE 里稳定还原 2D 手绘轮廓，Control Rig 部分可参考绑定流程。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/bluey-s-simple-2d-look-required-gameloft-s-most-technically-challenging-art-pipeline/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Tripo P2.0 打通 Blender 与 Unity",
      "sum": "Tripo 介绍 P2.0 与 Astra 在 Blender、Unity 中完成生成、绑定到动画的流程。",
      "ta": "关注 3D 原生基础模型输出资产进引擎后的质量控制与人工美术指导环节。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/how-tripo-p2-0-astra-work-together-in-blender-and-unity/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "Houdini 水体特效转 Solaris 复活",
      "sum": "Mario Sánchez Aguado 分享由 Maya 项目转为 Houdini 水模拟、经 Solaris 完成的作品。",
      "ta": "可看 Solaris 流程下发光水体 FX 的搭建思路，对流体特效与灯光合成衔接有参考。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/this-dreamy-wooden-cabin-scene-with-glowing-water-fx-was-made-with-houdini/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "GameMaker 新运行时将免费商用",
      "sum": "GMRT 运行时自 2027 年起对所有开发者免费商用，各档位均开放源码。",
      "ta": "2D 引擎运行时开源免费，对轻量工具链选型有影响，与 UE 主线工作关联有限。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/gamemaker-s-new-runtime-will-become-free-for-commercial-use/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "GMRT 运行时 2027 全面免费",
      "sum": "GameMaker 的 GMRT 运行时将从 2027 年起对所有开发者免费使用。",
      "ta": "同一事件另一来源，仅作速览，无需重复精读。",
      "src": "Game Developer · 10-23",
      "url": "https://www.gamedeveloper.com/programming/gamemaker-s-gmrt-runtime-will-soon-be-free-for-all-commercial-devs"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "3ds Max/Maya 肌肉模拟插件测试",
      "sum": "Shirzad Bahrami 展示受 Ziva VFX 启发的肌肉模拟插件，正式发布前开放测试。",
      "ta": "角色肌肉解算工具，偏离线建模流程，与实时管线关联较弱。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/artist-shows-ziva-vfx-inspired-muscle-simulation-plug-in-for-3ds-max-maya/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "RLSplat 给 3DGS 加预算控制",
      "sum": "RLSplat 为前馈 3D Gaussian Splatting 提供资源线性预算控制。",
      "ta": "关注 3DGS 在固定显存/算力预算下的可控性，对程序化场景与实时渲染有潜在价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.27712"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "HyperDrone 实现百万帧仿真迁移",
      "sum": "HyperDrone 以每秒百万帧级仿真实现从仿真到现实的迁移。",
      "ta": "大规模仿真吞吐思路可借鉴，但与游戏实时渲染管线距离较远。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.28950"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Raw Fury CEO 谈独立游戏发行",
      "sum": "Pim Holfve 谈发行变迁、独立发行现状及选品标准。",
      "ta": "纯行业访谈，与 TA 技术工作无关，速览即可。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/on-the-lookout-for-games-that-make-you-feel-something-raw-fury-ceo-on-game-publishing/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "半条命 3 代号 HLX 再被提及",
      "sum": "Valve 员工在 GameSoundCon 上提到粉丝讨论两年的代号 HLX。",
      "ta": "传闻性质，无技术信息，速览即可。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/rumored-half-life-3-title-hlx-gets-mentioned-by-valve-employee/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "赛博朋克 2 任务团队半数出身 Mod",
      "sum": "CDPR 副总监称续作任务团队约一半成员曾是 Mod 作者。",
      "ta": "人才来源话题，与渲染/工具技术无关。",
      "src": "80 Level · 10-23",
      "url": "https://80.lv/articles/half-of-cyberpunk-2-s-quest-team-are-former-modders-says-associate-game-director/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Saros 打造 Carcosa 首领战",
      "sum": "Housemarque 与 Nixxes 合作完成 Saros 的 Boss 遭遇设计与动画。",
      "ta": "偏关卡与动画协作流程，技术细节有限。",
      "src": "PlayStation Blog · 10-23",
      "url": "https://blog.playstation.com/2026/10/23/saros-creating-the-epic-overlords-of-carcosa/"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "Epic办AI游戏Jam赛",
      "sum": "2026 Epic AI MegaJam于11月12-15日举行，用UE或UEFN组队做可玩游戏赢奖金。",
      "ta": "看参赛作品能了解AI agent在UE工作流里的实际落地方式。",
      "src": "Unreal Engine · 10-22",
      "url": "https://www.unrealengine.com/news/2026-epic-ai-megajam"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "高度场高斯泼溅重建曲面",
      "sum": "H-2DGS用高度场高斯泼溅做神经外科手术表面的锐利可变形重建。",
      "ta": "高度场约束2DGS的思路可借鉴到地形/植被表面的高质量重建。",
      "src": "arXiv · cs.GR · 10-22",
      "url": "https://arxiv.org/abs/2610.30910v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "跨游戏实体一致生成渲染",
      "sum": "AnyGameRenderer实现跨游戏的实体一致生成式渲染，并给出实体级基准。",
      "ta": "实体一致性是生成式渲染进游戏管线的关键卡点，值得看其评测口径。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2610.31466"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "HD-2D像素艺术电影化管线",
      "sum": "FF Resonance制作人谈HD-2D管线、动态镜头、精灵调整、光照与VFX。",
      "ta": "像素风下的光照与VFX处理手法，对风格化渲染有直接参考价值。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/interview-how-final-fantasy-resonance-turns-hd-2d-pixel-art-into-a-cinematic-experience/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "废弃场景自定义材质流程",
      "sum": "作者分享地中海废弃房屋场景，讲多边形分配技巧与Substance Designer自定义材质。",
      "ta": "多边形预算分配与程序化材质搭建，是环境TA的日常可复用经验。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/building-an-abandoned-the-last-of-us-inspired-mediterranean-house-with-custom-materials/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender做2D漫画角色",
      "sum": "Chloe Worthy用Blender将热门漫画封面角色做成3D版本。",
      "ta": "2D转3D的角色还原流程，可看其造型与材质简化取舍。",
      "src": "80 Level · 10-22",
      "url": "https://80.lv/articles/these-2d-characters-from-popular-manga-are-made-in-3d-with-blender/"
    }
  ]
};
