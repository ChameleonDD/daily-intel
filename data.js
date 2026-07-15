// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月15日 · 周三",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>GPU崩溃调试LLM助手</em> / <em>非人形头部Blendshape注册</em> / <em>曲面自适应流体同调模拟</em>。其余按重要性自动排序，红色优先。",
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
