// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年6月18日 · 周四",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>UE5.8正式发布</em> / <em>UE6路线图公布</em> / <em>No Law展示UE5密集开放世界</em>。其余按重要性自动排序，红色优先。",
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
      "title": "UE5.8正式发布",
      "sum": "Epic发布UE5.8，含性能优化、实验性Mesh Terrain工具及Lumen更新。",
      "ta": "Mesh Terrain是植被/地形程序化生成的关键新工具，需立即评估其对工作流的影响。",
      "src": "80 Level · 06-17",
      "url": "https://80.lv/articles/unreal-engine-5-8-is-out-today-with-big-optimization-improvements-and-mesh-terrain/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 2,
      "title": "UE6路线图公布",
      "sum": "Epic宣布UE6将统一UE与UEFN为单一引擎，改变编程模型并引入跨游戏互操作工具。",
      "ta": "引擎统一直接影响未来工具链和管线设计，需关注编程模型变化对Shader/材质系统的影响。",
      "src": "80 Level · 06-17",
      "url": "https://80.lv/articles/unreal-engine-6-will-combine-uefn-and-ue-into-a-unified-engine/"
    },
    {
      "cat": "tech",
      "imp": "hi",
      "rank": 3,
      "title": "No Law展示UE5密集开放世界",
      "sum": "Neon Giant在State of Unreal展示No Law，使用Nanite、Lumen、MegaLights和Mass Framework构建赛博朋克城市。",
      "ta": "MegaLights和Mass Framework的实际应用案例，对光照和人群系统性能优化有参考价值。",
      "src": "80 Level · 06-18",
      "url": "https://80.lv/articles/how-no-law-s-developers-are-making-one-of-the-densest-open-worlds-in-new-cyberpunk-fps/"
    },
    {
      "cat": "tech",
      "imp": "mid",
      "title": "Alien: Isolation 2使用UE5",
      "sum": "续作采用UE5、户外空间、恶劣天气及动态音频，扩展异形潜行玩法。",
      "ta": "UE5在恐怖氛围渲染中的实际应用，关注动态音频与天气系统对性能的影响。",
      "src": "80 Level · 06-17",
      "url": "https://80.lv/articles/how-alien-isolation-2-expands-on-the-original-s-terrifying-atmosphere/"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Maya-Blender一键资产同步工具",
      "sum": "社区用户开发一键Maya到Blender资产同步工具。",
      "ta": "跨DCC工具链痛点解决方案，可提升资产传递效率。",
      "src": "Tech-Artists · 06-12",
      "url": "https://www.tech-artists.org/t/i-made-a-one-click-maya-blender-asset-sync/18411"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "UE5.6风格化传送门Shader求助",
      "sum": "社区讨论基于瑞奇与叮当风格的UE5.6风格化传送门Shader实现。",
      "ta": "风格化Shader案例，对材质开发有直接参考意义。",
      "src": "Tech-Artists · 06-03",
      "url": "https://www.tech-artists.org/t/featured-ue5-6-stylized-portal-shader-help-ratchet-clank-inspired/18393"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini真实地形工具发布",
      "sum": "新工具替代Mapbox-to-Houdini，用于Houdini中生成真实世界地形。",
      "ta": "程序化地形生成工作流的重要更新，适合植被和场景布局。",
      "src": "Tech-Artists · 05-24",
      "url": "https://www.tech-artists.org/t/real-world-terrain-for-houdini-replaces-mapbox-to-houdini/18374"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Maya皮肤权重复制工具SkinPassVtx",
      "sum": "免费Maya Python工具，可在网格间复制特定顶点选择的皮肤权重。",
      "ta": "角色绑定和蒙皮工作流的实用工具，提升权重调整效率。",
      "src": "Tech-Artists · 06-03",
      "url": "https://www.tech-artists.org/t/skinpassvtx-free-maya-python-tool-to-copy-skin-weights-between-specific-vertex-selections-across-meshes/18385"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Houdini原生运动跟踪工具GeoTracker",
      "sum": "Houdini Beta版原生匹配移动工具GeoTracker发布。",
      "ta": "Houdini内直接进行运动跟踪，简化VFX和动画管线。",
      "src": "Tech-Artists · 05-08",
      "url": "https://www.tech-artists.org/t/native-matchmove-inside-houdini-geotracker-beta/18360"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态高斯泼溅部分表示渲染",
      "sum": "研究动态高斯压缩在交互渲染中处理不完整时空区域的问题。",
      "ta": "对实时渲染中高斯泼溅的流式传输和性能优化有启发。",
      "src": "arXiv · cs.GR · 06-15",
      "url": "https://arxiv.org/abs/2606.17212v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "实时神经透明度渲染加速",
      "sum": "STAR-NT框架利用时空加速提升实时神经透明度渲染性能。",
      "ta": "透明渲染性能优化方案，对移动端和旧硬件有实际意义。",
      "src": "arXiv · cs.GR · 06-15",
      "url": "https://arxiv.org/abs/2606.16747v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "动态3D头部编辑框架Edit3DGS",
      "sum": "基于2D指令引导扩散和3D高斯泼溅的统一动态头部编辑框架。",
      "ta": "3D高斯泼溅在角色编辑中的应用，可能影响角色管线。",
      "src": "arXiv · cs.GR · 06-16",
      "url": "https://arxiv.org/abs/2606.17432v1"
    },
    {
      "cat": "gfx",
      "imp": "mid",
      "title": "食物断裂模拟逆材质估计",
      "sum": "使用强化学习从断裂目标描述中估计食物材质参数。",
      "ta": "物理模拟中材质参数反演方法，对破坏效果有参考价值。",
      "src": "arXiv · cs.GR · 06-15",
      "url": "https://arxiv.org/abs/2606.16870v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "协同人-物交互运动增强",
      "sum": "MOCHI方法增强多人-物体交互场景的运动数据质量。",
      "ta": "对动画和物理模拟中的多人交互数据生成有参考。",
      "src": "arXiv · cs.GR · 06-16",
      "url": "https://arxiv.org/abs/2606.18243v1"
    },
    {
      "cat": "gfx",
      "imp": "lo",
      "title": "平滑曲面拟合的显式表示",
      "sum": "Blended Chart Surfaces提供紧凑显式表示，支持全局平滑和多种拓扑。",
      "ta": "几何处理新表示法，可能影响建模和曲面重建工具。",
      "src": "arXiv · cs.GR · 06-16",
      "url": "https://arxiv.org/abs/2606.18069v1"
    },
    {
      "cat": "ai",
      "imp": "mid",
      "title": "NVIDIA ACE游戏Agent SDK",
      "sum": "NVIDIA发布ACE Game Agent SDK，含UE5插件，支持设备端AI同伴。",
      "ta": "AI同伴集成到UE5管线，需评估其对游戏逻辑和性能的影响。",
      "src": "NVIDIA · 06-16",
      "url": "https://developer.nvidia.com/blog/build-on-device-ai-companions-with-the-nvidia-ace-game-agent-sdk-and-unreal-engine-5-plugins/"
    },
    {
      "cat": "ai",
      "imp": "lo",
      "title": "AR眼镜AI代理构建",
      "sum": "NVIDIA XR AI帮助开发者为AR眼镜和XR设备构建AI代理。",
      "ta": "XR设备AI代理开发，可能影响未来AR/VR游戏交互。",
      "src": "NVIDIA · 06-16",
      "url": "https://developer.nvidia.com/blog/building-ai-agents-for-ar-glasses-and-xr-devices-with-nvidia-xr-ai/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Don't Nod寻求财务稳定",
      "sum": "腾讯决定短期不追加投资后，Don't Nod寻求多种财务杠杆。",
      "ta": "行业财务动态，间接影响工作室项目和技术投入。",
      "src": "Game Developer · 06-17",
      "url": "https://www.gamedeveloper.com/business/don-t-nod-pursuing-several-levers-to-secure-financial-future-after-tencent-decides-against-short-term-investment"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "OtherSide裁员17人",
      "sum": "OtherSide因项目取消裁员17人，称游戏行业环境艰难。",
      "ta": "行业裁员动态，反映市场压力。",
      "src": "Game Developer · 06-17",
      "url": "https://www.gamedeveloper.com/business/otherside-entertainment-lays-off-17-staff-following-game-cancellation"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Rockstar工会纠纷败诉",
      "sum": "法院裁定被解雇工会工人可对Rockstar提出黑名单指控。",
      "ta": "行业法律事件，对工作室管理有间接影响。",
      "src": "Game Developer · 06-17",
      "url": "https://www.gamedeveloper.com/business/rockstar-suffers-legal-blow-in-union-busting-dispute-as-trial-date-set"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "EU回应停止杀死游戏倡议",
      "sum": "欧盟委员会将参与行业讨论，但暂无法提出法律义务。",
      "ta": "游戏可玩性立法动态，可能影响长期项目规划。",
      "src": "Game Developer · 06-16",
      "url": "https://www.gamedeveloper.com/business/eu-commission-to-engage-with-the-industry-over-stop-killing-games-initiative"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Treyarch工作室主管离职",
      "sum": "Treyarch工作室主管Mark Gordon在22年后离职，由两位联合主管接替。",
      "ta": "工作室领导层变动，可能影响未来项目方向。",
      "src": "Game Developer · 06-16",
      "url": "https://www.gamedeveloper.com/business/treyarch-studio-head-steps-down-after-22-years"
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
