// daily-intel 近期热点层 —— 由 run.py 自动累积，供「近期」入口翻阅。
// 与 data.js（仅今日新增）分离：data.js 是“今天有什么新的”，recent.js 是“近期攒了啥”。

window.INTEL_RECENT = {
  "updated": "2026-07-21 12:20",
  "cards": [
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
      "imp": "lo",
      "title": "抗丢包3D高斯压缩",
      "sum": "通过原子打包和GNN错误隐藏，使3DGS比特流在网络丢包下更鲁棒。",
      "ta": "对云游戏或流式3D场景的实时渲染有直接实用价值。",
      "src": "arXiv · cs.GR · 07-20",
      "url": "https://arxiv.org/abs/2607.17916v1"
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
      "title": "拓扑感知3DGS平面重建",
      "sum": "TopoGS 通过拓扑感知3D高斯泼溅提取结构化参数化平面几何。",
      "ta": "从图像直接生成可编辑平面几何，利于场景编辑和LOD构建。",
      "src": "arXiv · cs.GR · 07-18",
      "url": "https://arxiv.org/abs/2607.16838v1"
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
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Unity 7路线图公布",
      "sum": "Unity 7基于Unity 6架构，提供不破坏构建的更新路径和新工具。",
      "ta": "引擎升级策略，确保项目迁移稳定性，对管线维护有影响。",
      "src": "Game Developer · 07-21",
      "url": "https://www.gamedeveloper.com/programming/unity-unveils-unity-7-roadmap-with-update-path-that-won-t-break-your-build"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "文本到动作的逐笔时间控制",
      "sum": "引入动作单元实现文本到动作的逐笔时间控制。",
      "ta": "对角色动画工作流中的动作生成精度有参考价值。",
      "src": "arXiv · cs.GR · 07-17",
      "url": "https://arxiv.org/abs/2607.15717v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视频基础模型生成建模",
      "sum": "通过表示自编码器驯服视频基础模型用于生成。",
      "ta": "视频生成技术可能间接影响实时渲染中的动态内容创建。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.14088"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE Expanse体积工作流教程",
      "sum": "Reza Sarkamari发布视频教程，讲解Unreal Engine中Expanse体积效果工作流。",
      "ta": "可学习Expanse插件在UE中实现云、雾等体积特效的完整流程。",
      "src": "80 Level · 07-18",
      "url": "https://80.lv/articles/check-out-this-tutorial-on-expanse-workflow-in-unreal-engine/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Godot极地生存游戏动画",
      "sum": "Frost Kin是一款Godot引擎开发的极地生存冒险游戏，展示超现实动画。",
      "ta": "Godot引擎在动画表现上的进展可作为参考，但非UE直接相关。",
      "src": "80 Level · 07-18",
      "url": "https://80.lv/articles/surreal-animations-from-an-arctic-survival-game-made-in-godot/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "B社确认多个辐射项目",
      "sum": "Bethesda确认辐射3/新维加斯重制版及Obsidian新辐射游戏，老滚6仍是重点。",
      "ta": "辐射IP重制可能带动UE5或自研引擎的渲染管线需求，但无直接技术细节。",
      "src": "80 Level · 07-17",
      "url": "https://80.lv/articles/bethesda-confirms-multiple-fallout-projects-including-remasters-and-new-obsidian-game/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "蜘蛛机甲后末日游戏",
      "sum": "一款玩家操控蜘蛛状机甲的后末日游戏发布。",
      "ta": "游戏概念有趣，但无技术或工作流参考价值。",
      "src": "80 Level · 07-17",
      "url": "https://80.lv/articles/in-this-game-you-ll-be-a-spider-like-mech-navigating-a-post-apocalyptic-world/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "15年游戏合作经验分享",
      "sum": "ZiMAD首席BD官分享15年游戏合作经验，聚焦玩家信任与快速变革。",
      "ta": "商业经验分享，对TA工作流无直接帮助。",
      "src": "80 Level · 07-17",
      "url": "https://80.lv/articles/what-15-years-of-game-partnerships-taught-me/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Epic与Google和解安卓商店",
      "sum": "Epic与Google达成和解，第三方应用商店即将登陆Android。",
      "ta": "平台生态变化可能影响游戏分发，但非技术相关。",
      "src": "80 Level · 07-17",
      "url": "https://80.lv/articles/epic-games-google-withdraw-settlement-third-party-app-stores-are-coming-to-android/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "ZA/UM工作室裁员32人",
      "sum": "ZA/UM在发布新作两个月后裁员最多32人，称艺术标准不变。",
      "ta": "行业裁员新闻，无技术参考价值。",
      "src": "Game Developer · 07-17",
      "url": "https://www.gamedeveloper.com/business/za-um-studios-to-lay-off-up-to-32-workers-two-months-after-releasing-zero-parades-for-dead-spies"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Todd Howard确认与Obsidian合作",
      "sum": "辐射总监Todd Howard确认与Obsidian合作开发新辐射游戏。",
      "ta": "辐射新作可能采用UE5或自研引擎，但无具体技术细节。",
      "src": "Game Developer · 07-17",
      "url": "https://www.gamedeveloper.com/business/todd-howard-says-the-timing-is-right-for-a-collaboration-with-obsidian"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "工会挑战Xbox等业界动态",
      "sum": "工会挑战Xbox、GameStop CEO称实体游戏销售无关紧要、Glen Schofield退休。",
      "ta": "行业综合新闻，无技术或工作流参考价值。",
      "src": "Game Developer · 07-17",
      "url": "https://www.gamedeveloper.com/business/labor-unions-challenge-xbox-gamestop-ceo-says-physical-game-sales-are-irrelevant-and-glen-schofield-retires-patch-notes-61"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "交互世界模型作为游戏引擎",
      "sum": "论文提出将交互世界模型重新构想为游戏引擎，从像素到状态。",
      "ta": "可能影响未来游戏AI驱动的动态世界生成，需关注其与实时渲染的接口。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.14076"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "卡普空RE引擎实装路径追踪",
      "sum": "卡普空在《PRAGMATA》和《生化危机：安魂曲》中同时实装路径追踪。",
      "ta": "RE引擎路径追踪落地方案，对UE5 TA有直接参考价值。",
      "src": "NVIDIA · 07-16",
      "url": "https://developer.nvidia.com/blog/qa-how-capcom-brought-path-tracing-to-re-engine-across-pragmata-and-resident-evil-requiem/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "在线神经时空记忆动态视图合成",
      "sum": "提出在线神经时空记忆方法，用于多视角流视频的动态新视角合成。",
      "ta": "实时动态场景重建技术，可能影响未来游戏内动态环境渲染。",
      "src": "arXiv · cs.GR · 07-16",
      "url": "https://arxiv.org/abs/2607.15271v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender多求解器物理引擎",
      "sum": "Hurricane引擎支持流体、布料、软体、沙粒在同一模拟中交互。",
      "ta": "多物理场耦合模拟工具，可辅助特效预演与资产测试。",
      "src": "80 Level · 07-16",
      "url": "https://80.lv/articles/hurricane-new-multi-solver-physics-engine-for-blender/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Godot免费2D足球游戏课程",
      "sum": "12小时免费Godot课程，面向初/中级开发者制作2D街机足球游戏。",
      "ta": "Godot入门资源，适合TA了解轻量引擎工作流。",
      "src": "80 Level · 07-16",
      "url": "https://80.lv/articles/create-your-own-2d-arcade-soccer-game-in-godot-with-this-free-12-hour-course/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "ZeniMax工作室领导层被裁",
      "sum": "Xbox裁员波及ZeniMax Online Studios，包括工作室负责人等高层。",
      "ta": "行业裁员动态，可能影响相关项目资源分配。",
      "src": "Game Developer · 07-16",
      "url": "https://www.gamedeveloper.com/business/zenimax-online-studios-leadership-is-part-of-the-379-laid-off-workers"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "Houdini 22 发布",
      "sum": "SideFX 发布 Houdini 22，原生支持高斯泼溅、新 UI 和程序化工具。",
      "ta": "原生高斯泼溅支持意味着 TA 可直接在 Houdini 中处理实时渲染点云资产，无需外部转换。",
      "src": "80 Level · 07-15",
      "url": "https://80.lv/articles/houdini-22-is-out-now-bringing-native-gaussian-splats-new-ui-and-more/"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "超快纹理图集泼溅",
      "sum": "3DGS 新方法：解耦辐射表示，实现超快纹理图集泼溅渲染。",
      "ta": "若成熟可大幅降低高斯泼溅的片段着色开销，对实时场景渲染性能优化有直接参考。",
      "src": "arXiv · cs.GR · 07-15",
      "url": "https://arxiv.org/abs/2607.13808v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "体积逆渲染新框架",
      "sum": "提出神经辐射传输方法，从图像恢复参与介质光学属性。",
      "ta": "对体积云、烟雾等参与介质的材质重建与光照模拟有潜在应用。",
      "src": "arXiv · cs.GR · 07-15",
      "url": "https://arxiv.org/abs/2607.13695v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "渐进推理室内场景生成",
      "sum": "ThinkBLOX 用 VLM 渐进推理生成 3D 室内场景布局。",
      "ta": "程序化生成室内场景的 AI 辅助方法，可加速关卡原型设计。",
      "src": "arXiv · cs.GR · 07-15",
      "url": "https://arxiv.org/abs/2607.13539v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "单目新视角合成",
      "sum": "MetaView 用尺度感知隐式几何先验实现单目新视角合成。",
      "ta": "单目重建技术，可能用于快速生成参考视角或辅助材质贴图。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.12000"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《明日方舟：终末地》PSSR 升级",
      "sum": "PS5 Pro 版 1.4 更新升级 PSSR，提升画质与时间稳定性。",
      "ta": "PSSR 升级对 UE 游戏在 PS5 Pro 上的渲染管线调优有参考意义。",
      "src": "PlayStation Blog · 07-15",
      "url": "https://blog.playstation.com/2026/07/15/arknights-endfield-on-ps5-pro-upgraded-pssr-launches-with-version-1-4/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《使命召唤》动态地图模式",
      "sum": "MW4 引入 Kill Block 模式，模块化战场每局重新配置。",
      "ta": "动态关卡生成思路，可能涉及程序化布局与碰撞检测优化。",
      "src": "PlayStation Blog · 07-15",
      "url": "https://blog.playstation.com/2026/07/15/everything-to-know-about-modern-warfare-4s-ever-changing-kill-block-multiplayer-mode/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "《Denshattack!》开发访谈",
      "sum": "开发者谈融合托尼霍克与 Jet Set Radio 的火车玩法与赛璐璐风格。",
      "ta": "赛璐璐风格与高速运动系统的实现细节对 TA 有启发。",
      "src": "80 Level · 07-15",
      "url": "https://80.lv/articles/interview-how-denshattack-blends-tony-hawk-jet-set-radio-with-trains/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "前 Epic 高管加入 Saber",
      "sum": "前 Epic Games VP Steve Allison 任 Saber Interactive 首席商务官。",
      "ta": "行业人事变动，可能影响 Saber 的引擎合作策略。",
      "src": "Game Developer · 07-15",
      "url": "https://www.gamedeveloper.com/business/former-epic-games-vp-appointed-saber-interactive-s-chief-business-officer"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "《死亡空间》联合创始人退休",
      "sum": "Glen Schofield 结束 35 年游戏开发生涯退休。",
      "ta": "行业资深人物退休，对恐怖游戏视觉风格有历史影响。",
      "src": "80 Level · 07-15",
      "url": "https://80.lv/articles/dead-space-creator-retires-after-35-years-in-game-development/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "GPU崩溃调试LLM助手",
      "sum": "AMD发布RGD MCP Server，用LLM分析GPU崩溃并给出修复建议。",
      "ta": "调试GPU崩溃可借助LLM自动根因分析，提升Shader/材质调试效率。",
      "src": "AMD GPUOpen · 07-14",
      "url": "https://gpuopen.com/learn/post-mortem-gpu-crash-debugging-with-llms/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "非人形头部Blendshape注册",
      "sum": "RegHead框架为可动画非人形头部构建语义Blendshape集，支持重定向。",
      "ta": "对非人形角色面部动画有直接参考价值，可简化Blendshape制作流程。",
      "src": "arXiv · cs.GR · 07-13",
      "url": "https://arxiv.org/abs/2607.12206v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "曲面自适应流体同调模拟",
      "sum": "新方法处理非单连通曲面上的无粘不可压流体，关注谐波分量动态。",
      "ta": "对曲面流体特效（如角色表面水流）有理论支撑，可能影响Niagara实现。",
      "src": "arXiv · cs.GR · 07-13",
      "url": "https://arxiv.org/abs/2607.12001v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Unity程序化节点网格框架",
      "sum": "Viktor Grigorev分享基于节点的程序化网格框架构建方法。",
      "ta": "类似Houdini的节点化工作流，可借鉴到UE程序化生成工具链。",
      "src": "80 Level · 07-14",
      "url": "https://80.lv/articles/building-procedural-node-based-mesh-framework-in-unity/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Material Maker 1.7登陆Steam",
      "sum": "程序化材质工具Material Maker发布1.7版本并上架Steam。",
      "ta": "免费程序化材质工具更新，适合快速原型和材质库扩展。",
      "src": "80 Level · 07-14",
      "url": "https://80.lv/articles/create-procedural-materials-with-material-maker-now-on-steam/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "黑旗重制版首日销量200万",
      "sum": "育碧《刺客信条：黑旗重制版》24小时销量超200万，巴塞罗那工作室罢工。",
      "ta": "重制版商业成功，但工作室劳资冲突值得关注行业动态。",
      "src": "Game Developer · 07-14",
      "url": "https://www.gamedeveloper.com/business/assassin-s-creed-black-flag-topped-2m-sales-on-its-first-day"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Compulsion Games寻求合作",
      "sum": "《午夜以南》开发商从Xbox独立后，公开招募商业伙伴。",
      "ta": "独立后工作室动向可能影响后续项目技术合作机会。",
      "src": "Game Developer · 07-14",
      "url": "https://www.gamedeveloper.com/business/compulsion-games-is-seeking-partners-after-xbox-spin-off"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Azra Games融资后裁员",
      "sum": "前《星战：银河英雄》GM创立的工作室在首作未发布前裁员。",
      "ta": "行业融资环境收紧，注意项目稳定性。",
      "src": "Game Developer · 07-14",
      "url": "https://www.gamedeveloper.com/business/ex-star-wars-galaxy-of-heroes-gm-studio-lays-off-staff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Spin Master发售后即裁员",
      "sum": "《汪汪队立大功》游戏开发商在发售后两天被裁，开发转交其他团队。",
      "ta": "发售后立即裁员反映行业不稳定，影响后续维护。",
      "src": "Game Developer · 07-14",
      "url": "https://www.gamedeveloper.com/mobile/spin-master-lays-off-paw-patrol-the-game-devs-two-days-after-launch"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "LLM生成多场景游戏世界",
      "sum": "MAGIC利用大语言模型实现多场景导航游戏世界的过渡感知生成。",
      "ta": "关注LLM如何辅助程序化关卡设计，减少手动编辑门户和室内布局的工作量。",
      "src": "arXiv · cs.GR · 07-13",
      "url": "https://arxiv.org/abs/2607.11594v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "文本引导网格变形",
      "sum": "PoseAlign通过文本引导变形生成姿态一致的3D网格。",
      "ta": "文本驱动变形工具可加速角色姿态调整，减少手动雕刻。",
      "src": "arXiv · cs.GR · 07-12",
      "url": "https://arxiv.org/abs/2607.10560v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "按需属性控制界面",
      "sum": "Spatula系统生成生成式内容迭代中的按需原位属性控制界面。",
      "ta": "探索交互式生成工作流，可能改善TA在引擎内调整参数的方式。",
      "src": "arXiv · cs.GR · 07-11",
      "url": "https://arxiv.org/abs/2607.10405v1"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "跨拓扑角色动作混合",
      "sum": "新框架实现任意角色拓扑间的神经动作混合，无需固定骨架。",
      "ta": "跨拓扑动作混合可简化不同角色间的动画复用，提升动画管线效率。",
      "src": "arXiv · cs.GR · 07-11",
      "url": "https://arxiv.org/abs/2607.10370v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "双人对话动作生成",
      "sum": "Learn2Chat通过交互调制单语先验生成双人对话动作。",
      "ta": "对话动作生成技术可能用于NPC交互动画，但当前与游戏管线距离较远。",
      "src": "arXiv · cs.GR · 07-11",
      "url": "https://arxiv.org/abs/2607.10313v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "推理时动作迁移",
      "sum": "Motion4Motion实现推理时跨主体动作迁移。",
      "ta": "动作迁移技术可快速复用动画数据，但需验证实时性能。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.11644"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5角色CGI广告流程",
      "sum": "SuperBlimp分享用Unreal Engine制作角色CGI广告的工作流。",
      "ta": "了解UE5在商业CGI中的实际管线，可借鉴角色制作与渲染技巧。",
      "src": "80 Level · 07-13",
      "url": "https://80.lv/articles/building-captain-itch-designing-a-character-led-cgi-campaign-with-unreal-engine/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 5.2雕刻新功能",
      "sum": "3D艺术家分享Blender 5.2新增雕刻功能的教程。",
      "ta": "Blender雕刻更新可能影响资产制作流程，但非UE5核心。",
      "src": "80 Level · 07-13",
      "url": "https://80.lv/articles/3d-artist-shares-a-tutorial-on-new-sculpting-features-in-blender-5-2/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "11 Bit Studios裁员20人",
      "sum": "《冰汽时代》开发商11 Bit Studios裁员20人，部分员工内部转岗。",
      "ta": "行业裁员动态，反映工作室成本压力，可能影响人才流动。",
      "src": "Game Developer · 07-13",
      "url": "https://www.gamedeveloper.com/business/the-alters-and-frostpunk-developer-11-bit-studios-is-laying-off-20-employees-"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态逆渲染分解材质光照",
      "sum": "提出动态逆渲染方法，从表面辐射分解材质与光照，支持重光照与AR。",
      "ta": "逆渲染技术直接影响材质工作流，可提升PBR资产重建精度。",
      "src": "arXiv · cs.GR · 07-10",
      "url": "https://arxiv.org/abs/2607.09329v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "示例编程批量编辑碰撞网格",
      "sum": "提出通过示例编程批量编辑3D碰撞网格的方法，提升物理资产制作效率。",
      "ta": "碰撞网格是物理交互基础，批量编辑可加速关卡和角色碰撞体制作。",
      "src": "arXiv · cs.GR · 07-09",
      "url": "https://arxiv.org/abs/2607.08804v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型合成沙沸图像",
      "sum": "基于扩散模型合成沙沸缺陷图像，用于低资源堤坝检测。",
      "ta": "扩散合成技术可迁移至游戏纹理或缺陷资产生成，但当前应用领域非游戏。",
      "src": "arXiv · cs.GR · 07-08",
      "url": "https://arxiv.org/abs/2607.08794v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Ornatrix毛发烘焙管线",
      "sum": "Ornatrix毛发烘焙管线及免费Maya自动化工具发布。",
      "ta": "可简化毛发从DCC到引擎的烘焙流程，提升毛发资产制作效率。",
      "src": "Tech-Artists · 07-12",
      "url": "https://www.tech-artists.org/t/ornatrix-groom-to-bake-pipeline-a-free-maya-tool-that-automates-the-setup/18462"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "CUDA核融合优化内存",
      "sum": "NVIDIA 博客介绍核融合技术改善 GPU 内存带宽与启动开销。",
      "ta": "核融合思路可借鉴到 UE Shader 合并与渲染 Pass 优化。",
      "src": "NVIDIA · 07-10",
      "url": "https://developer.nvidia.com/blog/kernel-fusion-in-nvidia-cuda-optimizing-memory-traffic-and-launch-overhead/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "事件视频重建与插帧",
      "sum": "LongE2V 用视频扩散模型实现长时域事件视频重建与插帧。",
      "ta": "视频插帧技术可应用于游戏过场或实时回放效果。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.08770"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时交互多目标视频分割",
      "sum": "SAM-MT 实现实时交互式多目标视频分割。",
      "ta": "实时分割可用于游戏内动态遮罩或后期特效。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.08688"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "赛博朋克治愈系建造游戏",
      "sum": "一款允许玩家建造雨浸世界的赛博朋克治愈游戏。",
      "ta": "环境建造玩法展示程序化天气与场景交互潜力。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/this-cyberpunk-cozy-game-allows-you-to-build-your-own-rain-soaked-world/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Poppy Playtime恐怖IP解析",
      "sum": "总监谈武器化怀旧、心理恐怖与环境叙事设计哲学。",
      "ta": "环境叙事与关卡设计思路可启发场景氛围构建。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/how-poppy-playtime-became-one-of-gaming-s-biggest-horror-franchises/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "独立工作室驾驶平台续作开发",
      "sum": "开发者谈 Stunt Paradise 2 关卡重设计及车辆行为软件。",
      "ta": "车辆物理与关卡设计经验可参考。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/how-an-indie-studio-created-a-sequel-of-a-driving-platformer-game/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Hunt: Showdown武器皮肤制作",
      "sum": "详解 Nitro Express 皮肤的金色细节与材质设置。",
      "ta": "高精度武器材质工作流，含金属细节与材质节点。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/behind-creation-of-nitro-express-checks-and-balances-skin-for-hunt-showdown-1896/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "独立游戏发行困境分析",
      "sum": "Skystone Games 谈 2026 年发行策略与 2.1 万款游戏问题。",
      "ta": "行业生态分析，对独立项目发行时机有参考。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/indie-game-publishing-the-21k-game-problem/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "浏览器内程序化藤蔓生成器",
      "sum": "基于 Three.js 的完全程序化常春藤与无花果树生成器。",
      "ta": "程序化植被生成算法可直接参考用于 UE 工具。",
      "src": "80 Level · 07-10",
      "url": "https://80.lv/articles/this-fully-procedural-ivy-and-fig-tree-generator-runs-in-your-browser/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "NexusMods向UGC平台转型",
      "sum": "CEO 谈从文件托管向用户生成内容平台进化。",
      "ta": "Mod 生态变化影响游戏内容生产与工具需求。",
      "src": "Game Developer · 07-10",
      "url": "https://www.gamedeveloper.com/pc/nexusmods-ceo-digs-into-the-dynamics-of-video-game-modding-ft-victor-folmann"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "交互式人体动作生成",
      "sum": "ARDY用自回归扩散+混合表示实现实时3D人体动作生成。",
      "ta": "实时动作生成可加速角色动画原型，但需验证UE5管线集成度。",
      "src": "arXiv · cs.GR · 07-09",
      "url": "https://arxiv.org/abs/2607.08741v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "物理仿真统一网格重建",
      "sum": "HoloTetSphere直接优化体积基元，绕过表面提取+四面体化两步流程。",
      "ta": "直接输出物理就绪网格，可简化程序化资产到仿真管线的转换。",
      "src": "arXiv · cs.GR · 07-09",
      "url": "https://arxiv.org/abs/2607.08398v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "PBR条件视频重光照",
      "sum": "LightCrafter用PBR条件扩散模型实现可控且时序一致的重光照。",
      "ta": "PBR条件控制可提升视频重光照的物理准确性，对过场动画有用。",
      "src": "arXiv · cs.GR · 07-09",
      "url": "https://arxiv.org/abs/2607.08016v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时交互视频生成模型",
      "sum": "Vidu S1发布实时交互式视频生成模型。",
      "ta": "实时视频生成可能用于游戏内动态过场，但当前质量未知。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.03118"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "扩散模型推理加速草稿",
      "sum": "Flash-BoN为扩散模型提供即时草稿以加速推理。",
      "ta": "推理加速技术可降低生成式工具在游戏工作流中的延迟。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.04461"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "端侧图像转视频相机运动",
      "sum": "CineMobile在设备上实现图像到视频的扩散，生成电影级相机运动。",
      "ta": "端侧生成相机运动可用于快速预览，但实时性存疑。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.03803"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "行星飞船动画概念",
      "sum": "用整个行星构建巨型飞船的史诗动画概念。",
      "ta": "视觉灵感参考，无直接技术细节。",
      "src": "80 Level · 07-09",
      "url": "https://80.lv/articles/epic-animation-of-giant-spaceship-built-from-entire-planets/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "免费Maya面部绑定变形器",
      "sum": "Zhenggang Deng发布免费自定义Maya变形器，用于高端面部绑定。",
      "ta": "免费面部绑定工具可提升角色管线效率，需测试兼容性。",
      "src": "80 Level · 07-09",
      "url": "https://80.lv/articles/free-custom-maya-deformer-for-high-end-facial-rigging/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "玩具手柄改Mario Kart",
      "sum": "开发者将Fisher-Price玩具手柄改造成Mario Kart陀螺仪游戏手柄。",
      "ta": "硬件改造趣味项目，与TA工作流无关。",
      "src": "80 Level · 07-09",
      "url": "https://80.lv/articles/developer-turns-fisher-price-toy-controller-into-a-mario-kart-gyro-gamepad/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "风格化角色面部绑定测试",
      "sum": "3D短片《Noah and Jade》的风格化角色面部绑定测试。",
      "ta": "风格化绑定案例参考，无新技术细节。",
      "src": "80 Level · 07-09",
      "url": "https://80.lv/articles/facial-rig-tests-for-stylized-characters-in-3d-short-film/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "游戏媒体新站Respec上线",
      "sum": "Eurogamer和VG247老将推出独立游戏媒体Respec。",
      "ta": "行业动态，可能影响游戏资讯获取渠道。",
      "src": "Game Developer · 07-09",
      "url": "https://www.gamedeveloper.com/business/eurogamer-and-vg247-veterans-launch-new-independent-site"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "风险规避游戏行业边缘化开发者",
      "sum": "Nazih Fares的卡牌游戏因行业风险规避难获融资。",
      "ta": "反映行业融资困境，与TA工作无直接关联。",
      "src": "Game Developer · 07-09",
      "url": "https://www.gamedeveloper.com/production/the-game-industry-is-failing-marginalized-developers"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "title": "黑曜石工作室裁员52+人",
      "sum": "WARN通知确认黑曜石至少52名员工被裁，涉及Pentiment和天外世界团队。",
      "ta": "3A工作室裁员影响行业信心，可能波及项目外包需求。",
      "src": "Game Developer · 07-09",
      "url": "https://www.gamedeveloper.com/business/report-obsidian-losing-around-one-quarter-of-its-staff-to-xbox-reset-"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "title": "Xbox裁减379名Zenimax员工",
      "sum": "Xbox在马里兰州裁减379名Zenimax员工，含213名ESO开发者。",
      "ta": "大规模裁员影响游戏行业生态，可能影响UE5项目资源。",
      "src": "Game Developer · 07-09",
      "url": "https://www.gamedeveloper.com/business/xbox-had-laid-off-379-zenimax-workers-in-maryland"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Maya动画层节点自连接Bug",
      "sum": "Maya 2024.2中引用绑定的动画层节点保存重开后自连接循环。",
      "ta": "直接影响绑定和动画管线，需关注修复或规避。",
      "src": "Tech-Artists · 07-09",
      "url": "https://www.tech-artists.org/t/bug-animation-layer-nodes-self-connect-cycle-after-save-reopen-on-referenced-rigs-maya-2024-2/18445"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "SPEAR 仿真器发布",
      "sum": "SPEAR 是用于具身 AI 研究的光真实感交互仿真器。",
      "ta": "关注其渲染管线与实时性能，可能影响虚拟数据生成工作流。",
      "src": "arXiv · cs.GR · 07-07",
      "url": "https://arxiv.org/abs/2607.06701v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "WildCity 城市级测试床",
      "sum": "WildCity 是真实城市规模的渲染、仿真与空间智能测试平台。",
      "ta": "可作为程序化城市生成与实时渲染的参考基准。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.06838"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "黑旗重制版无缝世界技术",
      "sum": "育碧谈黑旗重制版：Anvil 引擎升级，移除加载屏，现代化航海。",
      "ta": "直接相关：Anvil 引擎开放世界流式加载与性能优化细节。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/interview-the-tech-behind-assassin-s-creed-black-flag-resynced-s-seamless-open-world/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "黑曜石将开发新辐射",
      "sum": "微软取消 Avowed 续作，黑曜石转向新辐射项目。",
      "ta": "行业动向，可能影响后续引擎/工具需求。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/fallout-new-vegas-studio-obsidian-is-reportedly-making-a-new-fallout-game/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "法环短剑资产制作解析",
      "sum": "Maya 粗模、ZBrush 高模、Substance Painter 纹理与晶体材质。",
      "ta": "关注晶体材质挑战与 PBR 纹理流程。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/elden-ring-glintstone-kris-shortsword-made-in-maya-zbrush-substance-3d-painter/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "Godot 虫洞 Shader 关卡过渡",
      "sum": "Godot 飞行游戏用虫洞 Shader 实现无缝关卡切换，纯 GDScript。",
      "ta": "可借鉴其 Shader 实现无缝过渡的思路。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/wormhole-shader-for-seamless-level-transitions-in-godot-powered-arcade-flying-game/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "Unity 格斯特纳波海洋 Shader",
      "sum": "Unity 中实现带格斯特纳波的海洋 Shader。",
      "ta": "经典海洋渲染技术，适合实时水面效果参考。",
      "src": "80 Level · 07-08",
      "url": "https://80.lv/articles/ocean-shader-with-gerstner-waves-in-unity/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "马里奥赛车手游停运",
      "sum": "任天堂宣布《马里奥赛车巡回赛》手游将停运，无离线版。",
      "ta": "行业新闻，无直接技术关联。",
      "src": "Game Developer · 07-08",
      "url": "https://www.gamedeveloper.com/business/mobile-game-mario-kart-tour-is-winding-down"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "id Software 裁员 136 人",
      "sum": "id Software 裁员 136 人，Xbox 游戏部门计划裁 3200 人。",
      "ta": "行业新闻，无直接技术关联。",
      "src": "Game Developer · 07-07",
      "url": "https://www.gamedeveloper.com/business/report-around-half-of-the-id-software-team-have-been-laid-off"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "手绘晶体剑制作",
      "sum": "Swayam Sontakke详解晶体剑建模、UV及光照技巧。",
      "ta": "手绘风格资产制作流程参考，适合风格化项目。",
      "src": "80 Level · 07-07",
      "url": "https://80.lv/articles/how-to-make-magical-hand-painted-crystal-sword-in-3d/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "手绘精灵角色全流程",
      "sum": "Arturo Galván Soler分享Blender和Substance 3D Painter制作精灵角色。",
      "ta": "手绘风格角色管线参考，涵盖雕刻、纹理和动画。",
      "src": "80 Level · 07-07",
      "url": "https://80.lv/articles/creating-hand-painted-elf-character-in-3d-from-scratch-using-blender-substance-3d-painter/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "UE实时水体模拟工具",
      "sum": "EasyFog Creator发布EasyWaterscape实时水体模拟工具。",
      "ta": "UE水体模拟新工具，可快速提升场景水体效果。",
      "src": "80 Level · 07-07",
      "url": "https://80.lv/articles/easyfog-creator-presents-real-time-water-simulation-tool-for-unreal-engine/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Meccha Chameleon销量破1500万",
      "sum": "绘画捉迷藏游戏Meccha Chameleon 26天销量达1500万。",
      "ta": "独立游戏市场表现案例，了解玩家偏好。",
      "src": "80 Level · 07-07",
      "url": "https://80.lv/articles/painting-hide-and-seek-game-meccha-chameleon-hits-15-million-sales-in-26-days/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Compulsion Games独立后保留IP",
      "sum": "Compulsion Games独立后保留IP，类似Double Fine安排。",
      "ta": "行业动态，了解工作室独立与IP归属趋势。",
      "src": "80 Level · 07-07",
      "url": "https://80.lv/articles/compulsion-games-to-retain-ip-rights-after-going-independent/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Supercell非洲开发者资助",
      "sum": "Supercell启动非洲工作室资助计划，金额2万至20万美元。",
      "ta": "行业资助动态，关注新兴市场开发者生态。",
      "src": "Game Developer · 07-07",
      "url": "https://www.gamedeveloper.com/business/supercell-starts-developer-grants-program-for-studios-across-africa"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "IO Interactive关闭伊斯坦布尔工作室",
      "sum": "IO Interactive因Xbox撤资关闭伊斯坦布尔工作室，重组项目。",
      "ta": "行业重组案例，关注大厂投资变动影响。",
      "src": "Game Developer · 07-07",
      "url": "https://www.gamedeveloper.com/business/io-interactive-closing-istanbul-studio-after-regaining-control-of-project-fantasy"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 1,
      "title": "id Software半数裁员",
      "sum": "报告称id Software约半数员工被裁，Xbox计划削减3200岗位。",
      "ta": "行业地震级事件，影响3A工作室人才流动和项目稳定性。",
      "src": "Game Developer · 07-07",
      "url": "https://www.gamedeveloper.com/business/report-around-half-of-the-id-software-team-have-been-laid-off"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "多视角长视频生成新方法",
      "sum": "MV-Forcing 通过4D时空自强制实现长序列多视角视频生成。",
      "ta": "对动态场景多视角一致性生成有参考价值，但离实时游戏管线尚远。",
      "src": "arXiv · cs.GR · 07-06",
      "url": "https://arxiv.org/abs/2607.05376v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "实时毛发渲染软件光栅化",
      "sum": "提出延迟软件光栅化管线，实现实时发丝渲染。",
      "ta": "直接相关：实时发丝渲染方案，可评估是否适合UE5角色管线。",
      "src": "arXiv · cs.GR · 07-05",
      "url": "https://arxiv.org/abs/2607.04230v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "物理模拟面部接触皱纹",
      "sum": "基于物理的皮肤接触皱纹模拟，考虑非线性分层材料。",
      "ta": "面部细节模拟技术，对数字人皮肤动态有参考。",
      "src": "arXiv · cs.GR · 07-06",
      "url": "https://arxiv.org/abs/2607.04768v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "数字人创建综述报告",
      "sum": "综述从先验学习到可动写实化身的3D数字人管线。",
      "ta": "数字人管线全景参考，适合了解当前技术栈。",
      "src": "arXiv · cs.GR · 07-05",
      "url": "https://arxiv.org/abs/2607.04341v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "可微眩光评估方法",
      "sum": "用可微光传输优化统一眩光评级，用于建筑/汽车设计。",
      "ta": "可微渲染在物理设计中的应用，与游戏渲染间接相关。",
      "src": "arXiv · cs.GR · 07-06",
      "url": "https://arxiv.org/abs/2607.04796v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "全动态Omnitree压缩",
      "sum": "用矩守恒各向异性小波压缩，改进八叉树和k-d树。",
      "ta": "空间数据结构优化，对程序化生成和场景管理有潜在价值。",
      "src": "arXiv · cs.GR · 07-06",
      "url": "https://arxiv.org/abs/2607.04881v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "自中心八叉树点流更新",
      "sum": "ECO 增量更新八叉树，用于移动机器人实时点流处理。",
      "ta": "实时空间数据结构，可借鉴到游戏中的动态场景管理。",
      "src": "arXiv · cs.GR · 07-06",
      "url": "https://arxiv.org/abs/2607.05092v1"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "VFX复原史前生物幕后",
      "sum": "Framestore 用VFX为纪录片复原剑齿虎等灭绝动物。",
      "ta": "生物毛发/皮肤VFX流程参考，可借鉴到游戏角色制作。",
      "src": "80 Level · 07-06",
      "url": "https://80.lv/articles/how-prehistoric-planet-ice-age-recreated-extinct-creatures-with-vfx/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "雕塑神秘崇拜领袖技巧",
      "sum": "Matteo Constant 分享夹克建模与磨损着色器纹理方法。",
      "ta": "角色材质与着色器技巧，对写实服装渲染有参考。",
      "src": "80 Level · 07-06",
      "url": "https://80.lv/articles/how-to-sculpt-an-intriguing-and-mysterious-worship-leader/"
    },
    {
      "cat": "biz",
      "imp": "hi",
      "rank": 1,
      "title": "Xbox裁员3200人",
      "sum": "Xbox裁员3200人，4个工作室换管理，包括Double Fine等。",
      "ta": "行业震荡影响工作室稳定性，可能波及UE5项目资源。",
      "src": "80 Level · 07-06",
      "url": "https://80.lv/articles/xbox-is-laying-off-3-200-employees-giving-4-studios-new-management/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "黑曜石流失四分之一员工",
      "sum": "Obsidian因Xbox调整流失60-70人，约占员工四分之一。",
      "ta": "知名工作室人才流失，可能影响其UE5项目进度。",
      "src": "Game Developer · 07-07",
      "url": "https://www.gamedeveloper.com/business/report-obsidian-losing-around-one-quarter-of-its-staff-to-xbox-reset-"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Niantic关闭新西兰工作室",
      "sum": "Ingress开发商Niantic关闭新西兰办公室，转向非游戏领域。",
      "ta": "AR游戏公司转型，对游戏行业AR/VR方向有信号意义。",
      "src": "Game Developer · 07-06",
      "url": "https://www.gamedeveloper.com/business/ingress-developer-niantic-spatial-shuttering-new-zealand-office"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "EVE Online引擎框架开源",
      "sum": "EVE Online跨平台引擎框架Carbon现已完全开源。",
      "ta": "开源游戏引擎框架，可研究其跨平台设计。",
      "src": "Game Developer · 07-06",
      "url": "https://www.gamedeveloper.com/production/eve-online-s-cross-platform-game-engine-framework-is-now-fully-open-source"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "赛博朋克2077销量达4000万",
      "sum": "CDPR宣布《赛博朋克2077》累计销量突破4000万份。",
      "ta": "商业里程碑，反映大型3A游戏长尾表现。",
      "src": "80 Level · 07-06",
      "url": "https://80.lv/articles/cyberpunk-2077-has-reached-40-million-copies-sold/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "独立开发者制作卡牌店模拟器",
      "sum": "Sia Ding Shen 分享TCG卡牌店模拟器开发经验。",
      "ta": "独立游戏开发案例，对模拟类游戏系统设计有参考。",
      "src": "80 Level · 07-06",
      "url": "https://80.lv/articles/solo-developer-on-creating-a-simulation-game-about-a-local-game-store/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PS商店6月下载榜",
      "sum": "PS5/PS4/PS VR2游戏下载排行，体育与恐怖类领跑。",
      "ta": "了解亚洲市场热门游戏类型，对特效资源分配有参考。",
      "src": "PlayStation Blog · 07-06",
      "url": "https://blog.playstation.com/2026/07/05/20260706-top/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "点云联邦学习基准",
      "sum": "联合评估联邦学习与知识蒸馏在3D点云分类上的性能。",
      "ta": "点云处理技术进展，对程序化生成中几何数据隐私与效率有参考价值。",
      "src": "arXiv · cs.GR · 06-30",
      "url": "https://arxiv.org/abs/2607.01272v1"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Godot 3D地牢教程",
      "sum": "20小时Godot教程覆盖资产创建全流程，面向中级开发者。",
      "ta": "可对比Godot与UE的植被/程序化生成工作流差异。",
      "src": "80 Level · 07-04",
      "url": "https://80.lv/articles/godot-tutorial-build-3d-dungeon-crawler-in-20-hours/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "风格化秋景环境雕刻",
      "sum": "Lili Brujin分享Evergrove项目工作流，使用RGB遮罩纹理房屋。",
      "ta": "RGB遮罩纹理技术可直接用于UE材质层，优化植被与建筑纹理性能。",
      "src": "80 Level · 07-03",
      "url": "https://80.lv/articles/sculpting-and-texturing-a-stylized-3d-environment-with-autumn-vibes/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Red Rover裁员",
      "sum": "《Enginefall》开发商Red Rover Interactive裁员，曾融资2000万美元。",
      "ta": "行业动荡影响中小团队，需关注UE项目稳定性。",
      "src": "Game Developer · 07-03",
      "url": "https://www.gamedeveloper.com/business/enginefall-developer-red-rover-interactive-is-making-layoffs"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "PlayStation停售实体盘",
      "sum": "PlayStation放弃实体光盘，Xbox测试光盘转数字功能。",
      "ta": "数字分发趋势影响资产交付与版本管理流程。",
      "src": "Game Developer · 07-03",
      "url": "https://www.gamedeveloper.com/business/rockstar-workers-hit-back-playstation-ditches-physical-discs-and-chipmakers-accused-of-price-fixing-patch-notes-58"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "情感环境设计案例",
      "sum": "《Sky光遇》环境设计师分享用光照与色彩营造情感空间的流程。",
      "ta": "可借鉴其用光照与色彩平衡传达情绪的方法，用于游戏关卡氛围设计。",
      "src": "80 Level · 07-02",
      "url": "https://80.lv/articles/how-to-design-emotional-game-environments-for-sky-children-of-the-light/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "索尼全数字遭抵制",
      "sum": "玩家请愿保留实体光盘，反对索尼停止PS游戏光盘生产。",
      "ta": "数字发行趋势影响游戏分发，但非直接技术相关，速览即可。",
      "src": "80 Level · 07-02",
      "url": "https://80.lv/articles/dont-kill-the-disc-petition-pushes-back-against-sony-s-all-digital-playstation-future/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ZBrush写实雕刻教程",
      "sum": "艺术家分享ZBrush中绘制写实3D雕刻的完整流程。",
      "ta": "雕刻技巧可辅助高模制作，但非实时渲染核心内容。",
      "src": "80 Level · 07-02",
      "url": "https://80.lv/articles/zbrush-tutorial-how-to-paint-realistic-3d-sculpts/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏开发者困难基金",
      "sum": "美加工会设立基金，为受裁员影响的开发者提供最高5000美元。",
      "ta": "行业动态，非技术相关，速览即可。",
      "src": "Game Developer · 07-02",
      "url": "https://www.gamedeveloper.com/business/union-workers-establish-hardship-fund-to-support-devs-impacted-by-layoffs/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "四款免费网格简化工具评测",
      "sum": "Lukáš Gallo与Bohemia Interactive合作，测试四款开源简化工具的性能与适用场景。",
      "ta": "TA可参考此评测选择适合植被或场景LOD的简化工具，优化性能管线。",
      "src": "80 Level · 07-01",
      "url": "https://80.lv/articles/testing-4-free-mesh-simplification-tools/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Houdini果冻物理手部追踪实验",
      "sum": "Alvaro Moreira在Houdini中进行手部追踪与果冻物理实验，计划发布拆解。",
      "ta": "TA可关注其Niagara或Houdini中软体物理与追踪的结合技巧。",
      "src": "80 Level · 07-01",
      "url": "https://80.lv/articles/hand-tracking-experiments-with-jelly-like-physics-in-houdini/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "ZBrush 8250 Alpha笔刷大包",
      "sum": "CGSphere推出包含8250个Alpha和笔刷的Mega Bundle，用于历史/现代角色细节。",
      "ta": "TA可快速获取高质量笔刷，提升植被或地形细节雕刻效率。",
      "src": "80 Level · 07-01",
      "url": "https://80.lv/articles/grab-this-cgsphere-s-mega-bundle-with-8250-alpha-brushes-for-zbrush/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "PlayStation 2028年停止光盘生产",
      "sum": "索尼宣布2028年1月起新游戏仅数字发行，PS3/PS Vita商店逐步关闭。",
      "ta": "数字发行趋势影响游戏分发，TA需关注数字资产管理和更新策略。",
      "src": "PlayStation Blog · 07-01",
      "url": "https://blog.playstation.com/2026/07/01/physical-disc-production-ending-in-january-2028-for-new-games-releasing-on-playstation-consoles/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "多对象运动轨迹控制生成",
      "sum": "TrajLoc方法在图像到视频生成中控制多对象运动，处理轨迹交叉和遮挡。",
      "ta": "对TA而言，此技术可能用于程序化动画或特效中的多物体运动控制。",
      "src": "arXiv · cs.GR · 07-01",
      "url": "https://arxiv.org/abs/2607.00861v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "无肢运动几何形状优化",
      "sum": "提出微分几何框架模拟蛇等软体无肢生物的运动。",
      "ta": "TA可借鉴其物理模拟方法，用于Niagara或Houdini中的软体动画。",
      "src": "arXiv · cs.GR · 07-01",
      "url": "https://arxiv.org/abs/2607.00524v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "AI美学修改在可视化中的可接受性",
      "sum": "专家评估AI对3D自然现象可视化进行美学修改的可接受性。",
      "ta": "TA需平衡AI增强视觉效果与数据保真度，尤其在科学可视化或场景渲染中。",
      "src": "arXiv · cs.GR · 06-30",
      "url": "https://arxiv.org/abs/2607.00239v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Valdi：价值扩散世界模型",
      "sum": "HuggingFace论文介绍Valdi，一种价值扩散世界模型。",
      "ta": "TA可了解世界模型在游戏AI或模拟中的潜在应用，但非直接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2607.00917"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "NURBS可微分渲染框架",
      "sum": "提出统一可微分渲染框架，支持平面有理样条（NURBS）的矢量图形渲染。",
      "ta": "对矢量图形渲染管线有参考价值，但非实时渲染直接相关。",
      "src": "arXiv · cs.GR · 06-30",
      "url": "https://arxiv.org/abs/2606.31764v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "高保真蝴蝶新视角合成",
      "sum": "针对自然历史标本的微距摄影，提出高保真新视角合成方法。",
      "ta": "涉及微距摄影和3D重建，对数字孪生或高精度扫描有启发。",
      "src": "arXiv · cs.GR · 06-30",
      "url": "https://arxiv.org/abs/2606.31679v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "双场连续B-rep表示",
      "sum": "提出DualBrep，一种用于CAD边界表示的连续双场表示方法。",
      "ta": "与CAD建模相关，对程序化几何生成工具有潜在影响。",
      "src": "arXiv · cs.GR · 06-30",
      "url": "https://arxiv.org/abs/2606.31579v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可编辑物理反射高斯场",
      "sum": "在光线追踪高斯辐射场中实现可编辑的基于物理的反射，而非伪造几何。",
      "ta": "提升3DGS反射真实感，支持编辑，对材质工作流有参考价值。",
      "src": "arXiv · cs.GR · 06-29",
      "url": "https://arxiv.org/abs/2606.30861v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "艺术家风格网格生成",
      "sum": "PolyFlow：连续拓扑嵌入流匹配，用于艺术家风格网格生成。",
      "ta": "AI辅助3D建模，但非实时渲染或TA工具链核心。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.30673"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "游戏托管基础设施扩展",
      "sum": "GPORTAL解释裸金属服务器和全球部署如何支持多人游戏扩展。",
      "ta": "后端基础设施，非TA直接相关。",
      "src": "80 Level · 06-30",
      "url": "https://80.lv/articles/how-game-hosting-infrastructure-scales-modern-multiplayer-games/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "90年代卡通风格游戏",
      "sum": "一款探索中年男人内部的90年代卡通风格游戏。",
      "ta": "美术风格参考，无技术细节。",
      "src": "80 Level · 06-30",
      "url": "https://80.lv/articles/this-90s-cartoon-inspired-game-will-have-you-exploring-the-inside-of-a-middle-aged-man/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Xbox暂停新Game Pass协议",
      "sum": "Xbox据报道暂停与外部工作室的新Game Pass协议谈判。",
      "ta": "行业商业动态，可能影响外包合作。",
      "src": "80 Level · 06-30",
      "url": "https://80.lv/articles/xbox-reportedly-halts-new-game-pass-agreements-with-outside-studios/"
    },
    {
      "cat": "biz",
      "imp": "mid",
      "title": "Xbox考虑出售Arkane",
      "sum": "报道称Xbox考虑出售或关闭Arkane等工作室，Blade项目可能被砍。",
      "ta": "重大行业重组，可能影响UE5项目和技术人才流动。",
      "src": "Game Developer · 06-30",
      "url": "https://www.gamedeveloper.com/business/report-xbox-considering-sales-or-closures-at-arkane-and-at-least-4-other-studios"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "R星开发者寻求工会认可",
      "sum": "GTA开发者寻求在Rockstar成立工会。",
      "ta": "行业劳工动态，非技术相关。",
      "src": "Game Developer · 06-30",
      "url": "https://www.gamedeveloper.com/production/grand-theft-auto-developers-seek-union-recognition-at-rockstar"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "NBCUniversal或进军游戏",
      "sum": "NBCUniversal分拆后可能扩展游戏业务。",
      "ta": "行业潜在新玩家，但无具体技术影响。",
      "src": "Game Developer · 06-30",
      "url": "https://www.gamedeveloper.com/business/report-nbcuniversal-could-expand-into-games-after-comcast-spinoff"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "nDreams联合创始人新工作室",
      "sum": "nDreams联合创始人成立独立游戏和音乐工作室Atmospheric。",
      "ta": "行业创业动态，非技术相关。",
      "src": "Game Developer · 06-30",
      "url": "https://www.gamedeveloper.com/business/ndreams-co-founder-launches-indie-game-and-music-studio-atmospheric"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "前馈神经渲染框架RenderFormer++",
      "sum": "提出可扩展、物理基础的Transformer前馈神经渲染，用于网格场景全局光照。",
      "ta": "关注其物理一致性改进，可能影响未来实时GI管线设计。",
      "src": "arXiv · cs.GR · 06-29",
      "url": "https://arxiv.org/abs/2606.30380v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 2,
      "title": "量子碰撞模型渲染相干散射",
      "sum": "结合经典光线追踪与量子碰撞模型，处理动态光学属性散射。",
      "ta": "全新着色框架，可能颠覆材质散射模拟方法，值得深入理解。",
      "src": "arXiv · cs.GR · 06-29",
      "url": "https://arxiv.org/abs/2606.29989v1"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 3,
      "title": "薄几何偶极子散射误差分析",
      "sum": "揭示偶极子模型在薄/弯曲物体上的系统误差，提出光学厚度定律。",
      "ta": "直接关联次表面散射渲染精度，对皮肤/树叶等薄材质有指导意义。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29387v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "可变形可重光照2D高斯泼溅",
      "sum": "DR-GS实现可变形物体的物理基可重光照，分离照明与材质。",
      "ta": "对VR/AR中动态数字人重光照有直接应用价值。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29379v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "前馈动态高斯场景重建L2D2-GS",
      "sum": "学习稠密化前馈重建动态城市场景，无需逐场景优化。",
      "ta": "提升动态高斯泼溅的可扩展性，适用于自动驾驶仿真。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29374v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "任意尺度超分共振Brane泼溅",
      "sum": "用2D高斯泼溅实现连续放大因子超分，解决平滑伪影。",
      "ta": "可能用于实时纹理/帧上采样，提升渲染质量。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29453v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "自适应分配高斯任意尺度超分",
      "sum": "学习自适应分配高斯用于图像超分，处理连续缩放。",
      "ta": "对引擎中动态缩放和VR注视点渲染有潜在应用。",
      "src": "arXiv · cs.GR · 06-28",
      "url": "https://arxiv.org/abs/2606.29400v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "低计算实时可控世界模型",
      "sum": "DreamForge-World 0.1预览，低计算量实时可控世界模型。",
      "ta": "可能用于游戏内动态场景生成或交互式世界模拟。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.30292"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时扩散流视频编辑LiveEdit",
      "sum": "面向实时流式视频编辑的扩散模型。",
      "ta": "关注实时视频编辑在游戏过场或直播中的应用潜力。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.26740"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "视觉世界模型长尾评估修剪",
      "sum": "修剪视觉世界模型评估中的长尾问题。",
      "ta": "对评估生成式世界模型质量有参考价值。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.24256"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender 5.1实时焦散教程",
      "sum": "Alan Wayne分享Blender Cycles中水与玻璃实时焦散方法。",
      "ta": "了解Blender实时焦散工作流，可迁移至UE。",
      "src": "80 Level · 06-29",
      "url": "https://80.lv/articles/tutorial-real-time-caustics-in-blender-5-1-s-cycles/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "角色动画幕后制作解析",
      "sum": "Framed51展示生动角色动画幕后。",
      "ta": "观察角色动画制作细节，可借鉴表情与动态设计。",
      "src": "80 Level · 06-29",
      "url": "https://80.lv/articles/check-out-this-behind-the-scenes-animation-of-an-expressive-character/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "毛发系统自碰撞宽度不一致",
      "sum": "Tech-Artists论坛讨论hairSystems自碰撞宽度缩放问题。",
      "ta": "直接关联UE毛发系统bug，需关注修复进展。",
      "src": "Tech-Artists · 06-29",
      "url": "https://www.tech-artists.org/t/hairsystems-self-collide-width-scale-is-inconsistent/18439"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Supermassive Games CEO离职",
      "sum": "Directive 8020发售后，Supermassive Games CEO离职。",
      "ta": "行业人事变动，可能影响工作室未来方向。",
      "src": "Game Developer · 06-29",
      "url": "https://www.gamedeveloper.com/business/supermassive-games-ceo-steps-down-following-launch-of-directive-8020"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "阿凡达格斗游戏新舞台公布",
      "sum": "Avatar Legends格斗游戏PS5预购开启，公布Spirit Wilds舞台。",
      "ta": "关注游戏美术风格和舞台设计。",
      "src": "PlayStation Blog · 06-29",
      "url": "https://blog.playstation.com/2026/06/29/avatar-legends-the-fighting-game-spirit-wilds-stage-revealed/"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "光谱皮肤次表面散射",
      "sum": "从RGB反演生物物理参数实现光谱级皮肤次表面散射渲染。",
      "ta": "对写实角色皮肤渲染有直接参考价值，可探索管线集成。",
      "src": "arXiv · cs.GR · 06-25",
      "url": "https://arxiv.org/abs/2606.27604v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "PUBG Ally AI同伴系统",
      "sum": "KRAFTON用NVIDIA ACE为PUBG构建可对话AI同伴，突破固定对话限制。",
      "ta": "AI同伴系统在实时游戏中落地，可关注其对话与行为逻辑对NPC管线的启发。",
      "src": "NVIDIA · 06-25",
      "url": "https://developer.nvidia.com/blog/how-krafton-built-pubg-ally-a-co-playable-character-powered-by-nvidia-ace/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Temtem开发幕后",
      "sum": "Crema分享Temtem: Pioneers的多人生物收集与生存建造开发挑战。",
      "ta": "多人游戏技术挑战案例，可快速了解其程序化生成与实时战斗管线。",
      "src": "80 Level · 06-26",
      "url": "https://80.lv/articles/temtem-developing-massively-multiplayer-creature-collection-adventure/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "精灵塔光照场景展示",
      "sum": "Daniel Novillo展示精美沉浸式精灵塔光照场景。",
      "ta": "光照与场景艺术参考，可快速浏览其材质与光照设置。",
      "src": "80 Level · 06-26",
      "url": "https://80.lv/articles/take-a-look-at-this-beautiful-and-immersive-elven-tower-lighting-scene/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "2026游戏注意力经济",
      "sum": "玩家时间碎片化，游戏需争夺注意力，Lexi Sydow分析趋势。",
      "ta": "行业趋势分析，对游戏设计方向有参考价值。",
      "src": "80 Level · 06-26",
      "url": "https://80.lv/articles/the-attention-economy-how-games-win-mind-share-in-2026/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "title": "WebXR汽车配置器无像素流",
      "sum": "Miris构建WebXR配置器，1.2GB资产无需云GPU实现HDR级材质。",
      "ta": "无像素流实时渲染方案，对UE5 Web部署与材质性能优化有重要参考。",
      "src": "80 Level · 06-26",
      "url": "https://80.lv/articles/miris-built-a-car-configurator-without-pixel-streaming-here-s-what-they-found/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Skybound游戏战略",
      "sum": "Skybound CEO讨论Invisible VS成功后未来游戏战略。",
      "ta": "行业战略动态，可快速了解发行商方向。",
      "src": "Game Developer · 06-26",
      "url": "https://www.gamedeveloper.com/business/analysts-attempt-to-make-sense-of-xbox-s-exclusivity-mindset-shift"
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
      "cat": "tech",
      "imp": "hi",
      "rank": 1,
      "title": "FSR 4.1支持RDNA 3",
      "sum": "AMD FSR SDK 2.3发布，ML超分4.1.1支持RX 7000系列，帧生成与光线重建更新。",
      "ta": "FSR 4.1引入ML超分，对UE5渲染管线中的性能优化与跨平台画质策略有直接影响。",
      "src": "AMD GPUOpen · 06-24",
      "url": "https://gpuopen.com/learn/amd-fsr-sdk-2-3-blog/"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "路径追踪立体视差捷径",
      "sum": "路径追踪合成立体数据中MC噪声方差场存在隐藏捷径，影响训练。",
      "ta": "对依赖路径追踪合成训练数据的视差估计管线有潜在影响，需关注数据偏差。",
      "src": "arXiv · cs.GR · 06-24",
      "url": "https://arxiv.org/abs/2606.25483v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "多智能体运动逆设计",
      "sum": "EvoFlock自动调优鸟群、人群等多智能体运动模型参数。",
      "ta": "可用于程序化人群或生物群系动画的自动调参，提升模拟真实感。",
      "src": "arXiv · cs.GR · 06-24",
      "url": "https://arxiv.org/abs/2606.25280v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "基于笼形变纹理传递",
      "sum": "实时纹理传递方法，结合几何滤波，适用于角色化妆与程序化汽车纹理。",
      "ta": "为实时纹理投影提供新方案，可优化角色或载具的细节贴花工作流。",
      "src": "arXiv · cs.GR · 06-23",
      "url": "https://arxiv.org/abs/2606.25220v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "自监督布料持久褶皱",
      "sum": "自监督神经布料模拟引入塑性持久褶皱，提升视觉真实感。",
      "ta": "布料模拟更真实，对角色服装动态与褶皱效果有直接改进潜力。",
      "src": "arXiv · cs.GR · 06-23",
      "url": "https://arxiv.org/abs/2606.25065v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "实时交互基础模型",
      "sum": "Wan-Streamer端到端实时低延迟全双工音视频交互模型。",
      "ta": "虽非游戏专用，但实时音视频交互能力可能用于NPC对话或直播特效。",
      "src": "arXiv · cs.GR · 06-23",
      "url": "https://arxiv.org/abs/2606.25041v1"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "改进大语言扩散模型",
      "sum": "改进版大语言扩散模型发布，提升生成质量。",
      "ta": "扩散模型在文本生成领域进展，与游戏内容生成间接相关。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.25331"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "视频虚拟试穿4D代理",
      "sum": "TryOnCrafter利用相机轨迹生成可渲染4D代理实现视频虚拟试穿。",
      "ta": "4D试穿代理技术可迁移至游戏角色换装或虚拟化身系统。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.26092"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "SEGA老兵谈自走棋",
      "sum": "前SEGA开发者Yasuhiro Nishiyama访谈，讨论自走棋类型与三国题材新作。",
      "ta": "行业趋势参考，对TA工作流无直接影响。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/interview-the-sega-veteran-behind-get-wrapped-up-on-sangokushi-bond-and-the-future-of-auto-battlers/"
    },
    {
      "cat": "tech",
      "imp": "lo",
      "title": "极限竞速地平线6美术",
      "sum": "Playground Games艺术家分享《极限竞速地平线6》世界创作细节。",
      "ta": "可观摩AAA级开放世界环境美术的资产与场景制作水准。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/take-a-closer-look-at-the-world-of-forza-horizon-6/"
    },
    {
      "cat": "flow",
      "imp": "hi",
      "rank": 2,
      "title": "UE5.6森林环境教程",
      "sum": "Michael Gerard指导在UE5.6中从零创建生产级森林环境全流程。",
      "ta": "直接关联植被工具与程序化生成工作流，是TA必读的实战教程。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/create-production-quality-forest-environments-from-scratch-in-ue5-6/"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "免费人群反应动捕动画",
      "sum": "Anderson Rohr发布免费人群反应动捕动画包。",
      "ta": "可直接用于人群模拟或NPC动画，节省动捕成本。",
      "src": "80 Level · 06-24",
      "url": "https://80.lv/articles/check-out-these-free-crowd-reaction-mocap-animations/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Tim Sweeney谈游戏经济",
      "sum": "Epic CEO称新游戏成功需连接其他游戏经济体系。",
      "ta": "行业战略观点，对TA技术决策无直接影响。",
      "src": "Game Developer · 06-24",
      "url": "https://www.gamedeveloper.com/business/tim-sweeney-says-only-hope-for-new-games-is-to-connect-to-economies-of-other-games-"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Denmu设立5000万基金",
      "sum": "投资公司Denmu宣布5000万美元游戏开发基金，优先支持作者型开发者。",
      "ta": "行业资金动态，对TA工作流无直接影响。",
      "src": "Game Developer · 06-24",
      "url": "https://www.gamedeveloper.com/business/investment-house-denmu-announces-auteur-first-50-million-fund-for-game-devs"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Trailmark Games成立",
      "sum": "《尼克儿童频道全明星大乱斗》开发商创立授权游戏新发行商。",
      "ta": "行业发行动态，对TA工作流无直接影响。",
      "src": "Game Developer · 06-24",
      "url": "https://www.gamedeveloper.com/business/new-publisher-trailmark-games-promises-new-path-forward-for-licensed-games"
    }
  ]
};
