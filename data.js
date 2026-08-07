// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年8月7日 · 周五",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>GPU自适应细分贝塞尔曲面</em>。其余按重要性自动排序，红色优先。",
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
      "rank": 2,
      "title": "Looman加Nanite优化课",
      "sum": "Tom Looman 给优化课新增两节 Nanite 课：拆解 kitbash 网格 overdraw 与 500 个空 Shading Bin 修复。",
      "ta": "原文是 Nanite VisBuffer/overdraw 与 Shading Bin 优化实战，与你正在做的 Nanite A/B 性能对比直接相关。",
      "handle": "@t_looman",
      "who": "Tom Looman · 06-25",
      "url": "https://x.com/t_looman/status/2070126139482247654"
    },
    {
      "cat": "x",
      "imp": "hi",
      "title": "UE5.8正式发布带AI集成",
      "sum": "UE5.8 上线，终端内 Claude/Codex 经 MCP 全控编辑器，可摆放道具、程序化生成城市、调灯光。",
      "ta": "原文是 UE5.8 发布及 AI 接入编辑器，含程序化生成与 MCP 控制，与你用 MCP 跑 UE 工作流直接相关。",
      "handle": "@SebAaltonen",
      "who": "转发 · 06-17",
      "url": "https://x.com/Grummz/status/2067322819814527179"
    },
    {
      "cat": "x",
      "imp": "hi",
      "title": "UE5.8实验性网格地形",
      "sum": "UE5.8 新增实验性 Mesh Terrain，不再受限高度图，支持世界分区流送与协作分块。",
      "ta": "原文是 UE5.8 Mesh Terrain 实验特性，摆脱 heightfield 限制，与你的地形导入/植被填充管线直接相关。",
      "handle": "@SebAaltonen",
      "who": "转发 · 06-17",
      "url": "https://x.com/UnrealEngine/status/2067249231887225179"
    },
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
      "imp": "mid",
      "title": "World Labs放三篇3D生成",
      "sum": "Ben Mildenhall 团队一次分享三篇新论文，借大规模生成模型与 2D 先验生成 3D 内容。",
      "ta": "原文是借 2D 先验做 3D 内容生成的三篇研究，与你关注的程序化/AI 辅助资产生成方向相关。",
      "handle": "@BenMildenhall",
      "who": "Ben Mildenhall · 06-12",
      "url": "https://x.com/theworldlabs/status/2065466830052098058"
    },
    {
      "cat": "x",
      "imp": "mid",
      "title": "Epic布道师呼吁设性能岗",
      "sum": "Ari Arnbjörnsson 在 Unreal Fest 见到职衔含 Performance 的人，呼吁工作室专设性能优化岗。",
      "ta": "原文是 Epic 布道师主张把性能优化制度化、贯穿研发全程，做引擎性能调优时值得参考其团队配置观点。",
      "handle": "@flassari",
      "who": "Ari Arnbjörnsson · 06-24",
      "url": "https://x.com/flassari/status/2069690018059211176"
    },
    {
      "cat": "x",
      "imp": "mid",
      "title": "Codex群驱动机器人研究",
      "sum": "Jim Fan 发布 ENPIRE：给 8 个 Codex agent 一队机器人加 GPU 和 token 预算自主解任务。",
      "ta": "原文是 AI agent 集群自主驱动真实机器人的实验，关注 AI 进开发/生产管线的可看其调度思路。",
      "handle": "@DrJimFan",
      "who": "Jim Fan · 06-16",
      "url": "https://x.com/DrJimFan/status/2066921736369766762"
    },
    {
      "cat": "x",
      "imp": "lo",
      "title": "Gemini视频模型登顶Arena",
      "sum": "Gemini Omni Flash 在 Video Arena 文生/图生视频双榜登顶，文生视频大幅领先 Veo 3.1。",
      "ta": "原文是视频生成模型榜单更新，视频生成迭代速度可作为 AI 生成素材能力上限的参照。",
      "handle": "@poolio",
      "who": "Ben Poole · 06-11",
      "url": "https://x.com/arena/status/2065112147093545333"
    },
    {
      "cat": "gfx",
      "imp": "hi",
      "rank": 1,
      "title": "GPU自适应细分贝塞尔曲面",
      "sum": "AMD发布GPU工作图自适应细分方案，无裂缝且大幅降低三角形数量。",
      "ta": "关注其工作图实现与硬件细分质量对比，对植被曲面减面有直接参考价值。",
      "src": "AMD GPUOpen · 08-06",
      "url": "https://gpuopen.com/learn/gpu-view-adaptive-subdivision/"
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
      "cat": "flow",
      "imp": "lo",
      "title": "3D雕刻游戏玩法新作",
      "summary": "《FAKE ME》将3D雕刻与捉迷藏玩法结合，提供新类型体验。",
      "ta": "对3D雕刻交互玩法感兴趣可速览，了解创意方向。",
      "src": "80 Level · 08-06",
      "url": "https://80.lv/articles/meccha-chameleon-prop-hunt-meet-in-this-3d-sculpting-game/",
      "sum": "3D雕刻游戏玩法新作"
    },
    {
      "cat": "flow",
      "imp": "mid",
      "title": "Blender视口绘制动画路径",
      "summary": "Motion Painter插件支持在Blender视口绘制运动路径并生成可编辑关键帧。",
      "ta": "对程序化动画或特效预览工作流有直接效率提升。",
      "src": "80 Level · 08-06",
      "url": "https://80.lv/articles/this-blender-add-on-lets-you-draw-animation-paths-in-viewport/",
      "sum": "Blender视口绘制动画路径"
    },
    {
      "cat": "flow",
      "imp": "lo",
      "title": "Blender写实渲染展示",
      "summary": "展示Blender制作的逼真3D渲染效果，附工作过程对比。",
      "ta": "可快速浏览写实渲染效果，但无技术细节。",
      "src": "80 Level · 08-06",
      "url": "https://80.lv/articles/impressively-realistic-3d-render-made-with-blender/",
      "sum": "Blender写实渲染展示"
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
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "Unreal Engine",
      "NVIDIA",
      "Blender 开发博客",
      "PlayStation Blog",
      "AMD GPUOpen",
      "arXiv · cs.GR",
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：HuggingFace。"
  },
  "xStale": false
};
