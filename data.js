// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月17日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>卡普空RE引擎实装路径追踪</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "gfx",
      "imp": "mid",
      "title": "前馈3D高斯重建驾驶场景",
      "sum": "Instant NuRec实现前馈3D高斯重建，用于驾驶场景模拟。",
      "ta": "前馈3D高斯方法，可加速程序化场景生成与仿真管线。",
      "src": "arXiv · cs.GR · 07-15",
      "url": "https://arxiv.org/abs/2607.14203v1"
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
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "NVIDIA",
      "PlayStation Blog",
      "AMD GPUOpen",
      "arXiv · cs.GR",
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Unreal Engine、Blender 开发博客、HuggingFace。"
  },
  "xStale": false
};
