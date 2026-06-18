// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年6月18日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE 5.8 正式发布</em> / <em>UE6 统一引擎路线图</em> / <em>No Law 展示 UE5 密集开放世界</em>。其余按重要性自动排序，红色优先。",
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
      "sum": "Epic 发布 UE 5.8，含优化改进、实验性 Mesh Terrain 工具及 Lumen 更新。",
      "ta": "Mesh Terrain 直接影响植被和地形程序化生成管线，需立即测试。",
      "src": "80 Level · 06-17",
      "url": "https://80.lv/articles/unreal-engine-5-8-is-out-today-with-big-optimization-improvements-and-mesh-terrain/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 2,
      "title": "UE6 统一引擎路线图",
      "sum": "Epic 宣布 UE6 将合并 UE 和 UEFN 为统一引擎，扩展创作者工作流。",
      "ta": "引擎架构重大变革，影响未来工具链和跨平台部署策略。",
      "src": "80 Level · 06-17",
      "url": "https://80.lv/articles/unreal-engine-6-will-combine-uefn-and-ue-into-a-unified-engine/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 3,
      "title": "No Law 展示 UE5 密集开放世界",
      "sum": "Neon Giant 在 State of Unreal 展示 No Law，使用 Nanite、Lumen、MegaLights、Mass Framework。",
      "ta": "MegaLights 和 Mass Framework 的实际应用案例，对大规模植被和 NPC 性能有参考价值。",
      "src": "80 Level · 06-18",
      "url": "https://80.lv/articles/how-no-law-s-developers-are-making-one-of-the-densest-open-worlds-in-new-cyberpunk-fps/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "Alien: Isolation 2 使用 UE5",
      "sum": "续作采用 UE5、户外空间、恶劣天气和动态音频扩展恐怖氛围。",
      "ta": "UE5 在恐怖游戏中的环境系统应用，关注天气和音频集成。",
      "src": "80 Level · 06-17",
      "url": "https://80.lv/articles/how-alien-isolation-2-expands-on-the-original-s-terrifying-atmosphere/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Maya-Blender 一键资产同步",
      "sum": "社区发布一键 Maya-Blender 资产同步工具。",
      "ta": "解决跨 DCC 工具资产传输痛点，提升植被/模型管线效率。",
      "src": "Tech-Artists · 06-12",
      "url": "https://www.tech-artists.org/t/i-made-a-one-click-maya-blender-asset-sync/18411"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5.6 风格化传送门 Shader",
      "sum": "社区分享 Ratchet & Clank 风格 UE5.6 传送门 Shader 教程。",
      "ta": "风格化 Shader 实现参考，可应用于特效和材质开发。",
      "src": "Tech-Artists · 06-03",
      "url": "https://www.tech-artists.org/t/featured-ue5-6-stylized-portal-shader-help-ratchet-clank-inspired/18393"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini 真实地形工具",
      "sum": "新工具替代 Mapbox-to-Houdini，用于 Houdini 真实地形生成。",
      "ta": "程序化地形管线新选择，对植被和地形生成有直接帮助。",
      "src": "Tech-Artists · 05-24",
      "url": "https://www.tech-artists.org/t/real-world-terrain-for-houdini-replaces-mapbox-to-houdini/18374"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Maya 皮肤权重复制工具",
      "sum": "免费 Maya Python 工具 SkinPassVtx，复制顶点间皮肤权重。",
      "ta": "简化角色绑定中权重迁移工作流。",
      "src": "Tech-Artists · 06-03",
      "url": "https://www.tech-artists.org/t/skinpassvtx-free-maya-python-tool-to-copy-skin-weights-between-specific-vertex-selections-across-meshes/18385"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Houdini 原生 GeoTracker Beta",
      "sum": "Houdini 原生匹配移动工具 GeoTracker 进入 Beta 阶段。",
      "ta": "简化 Houdini 内摄像机跟踪和特效匹配流程。",
      "src": "Tech-Artists · 05-08",
      "url": "https://www.tech-artists.org/t/native-matchmove-inside-houdini-geotracker-beta/18360"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时神经透明度渲染加速",
      "sum": "STAR-NT 框架利用时空加速提升实时神经透明度渲染性能。",
      "ta": "透明材质渲染优化新方法，对移动端和性能敏感项目有价值。",
      "src": "arXiv · cs.GR · 06-15",
      "url": "https://arxiv.org/abs/2606.16747v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态高斯泼溅部分表示",
      "sum": "研究动态高斯压缩在交互渲染中处理不完整时空区域的问题。",
      "ta": "高斯泼溅流式渲染技术进展，影响实时体积和特效表现。",
      "src": "arXiv · cs.GR · 06-15",
      "url": "https://arxiv.org/abs/2606.17212v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "动态头部编辑框架 Edit3DGS",
      "sum": "Edit3DGS 结合 2D 指令扩散和 3D 高斯泼溅实现动态头部编辑。",
      "ta": "3D 高斯泼溅在角色编辑中的应用，可关注其 Shader 集成方式。",
      "src": "arXiv · cs.GR · 06-16",
      "url": "https://arxiv.org/abs/2606.17432v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "食品断裂模拟材质估计",
      "sum": "使用强化学习逆向估计食品断裂模拟中的材质参数。",
      "ta": "物理材质参数估计方法，对破坏和破碎特效有参考意义。",
      "src": "arXiv · cs.GR · 06-15",
      "url": "https://arxiv.org/abs/2606.16870v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "多模态超图融合低光人群计数",
      "sum": "提出多模态超图融合方法解决低光环境人群计数问题。",
      "ta": "低光视觉技术，可间接用于游戏内低光照场景优化。",
      "src": "arXiv · cs.GR · 06-17",
      "url": "https://arxiv.org/abs/2606.18566v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "NVIDIA ACE 游戏代理 SDK",
      "sum": "NVIDIA 发布 ACE Game Agent SDK 和 UE5 插件，用于设备端 AI 同伴。",
      "ta": "AI 同伴集成到 UE5 管线，需评估其对角色和 NPC 系统的性能影响。",
      "src": "NVIDIA · 06-16",
      "url": "https://developer.nvidia.com/blog/build-on-device-ai-companions-with-the-nvidia-ace-game-agent-sdk-and-unreal-engine-5-plugins/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "Kairos 世界模型栈",
      "sum": "HuggingFace 发布 Kairos，原生世界模型栈用于物理 AI。",
      "ta": "世界模型进展，可能影响未来游戏 AI 和物理模拟。",
      "src": "HuggingFace",
      "url": "https://huggingface.co/papers/2606.16533"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Don't Nod 寻求财务稳定",
      "sum": "腾讯放弃短期投资后，Don't Nod 寻求多种方式确保财务未来。",
      "ta": "行业财务动态，间接影响工作室技术投入。",
      "src": "Game Developer · 06-17",
      "url": "https://www.gamedeveloper.com/business/don-t-nod-pursuing-several-levers-to-secure-financial-future-after-tencent-decides-against-short-term-investment"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "OtherSide 裁员 17 人",
      "sum": "OtherSide Entertainment 因项目取消裁员 17 人。",
      "ta": "行业裁员潮持续，关注对人才市场的影响。",
      "src": "Game Developer · 06-17",
      "url": "https://www.gamedeveloper.com/business/otherside-entertainment-lays-off-17-staff-following-game-cancellation"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rockstar 工会诉讼受挫",
      "sum": "Rockstar 在工会打压纠纷中败诉，审判日期已定。",
      "ta": "法律事件，可能影响工作室内部政策。",
      "src": "Game Developer · 06-17",
      "url": "https://www.gamedeveloper.com/business/rockstar-suffers-legal-blow-in-union-busting-dispute-as-trial-date-set"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Treyarch 工作室负责人离职",
      "sum": "Treyarch 工作室负责人 Mark Gordon 在 22 年后离职。",
      "ta": "工作室领导层变动，可能影响未来项目方向。",
      "src": "Game Developer · 06-16",
      "url": "https://www.gamedeveloper.com/business/treyarch-studio-head-steps-down-after-22-years"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "EU 回应停止杀死游戏倡议",
      "sum": "欧盟委员会将就停止杀死游戏倡议与行业接触，但暂无法提出法律义务。",
      "ta": "行业监管动态，影响游戏长期可玩性策略。",
      "src": "Game Developer · 06-16",
      "url": "https://www.gamedeveloper.com/business/eu-commission-to-engage-with-the-industry-over-stop-killing-games-initiative"
    }
  ],
  "sources": {
    "ok": [
      "80 Level",
      "Game Developer",
      "Unreal Engine",
      "NVIDIA",
      "Tech-Artists",
      "arXiv · cs.GR",
      "HuggingFace",
      "X（沿用上次本机抓取）"
    ],
    "missed": ""
  },
  "xStale": false
};
