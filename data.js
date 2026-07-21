// daily-intel 数据层 —— 由 run.py 自动生成，请勿手改。
// 骨架 index.html 永不动；此文件每天重写。
// 排序：渲染引擎按 imp(hi>mid>lo) + rank + 日期 自动排，cards 顺序无所谓。

window.INTEL_DATA = {
  "date": "2026年7月21日 · 周二",
  "tagline": "为留存而读，不为刷新而读",
  "todayHtml": "今天值得停下精读的有：<em>体积数据高效有损压缩</em> / <em>无损隐式神经体积表示</em> / <em>抗丢包3D高斯压缩</em>。其余按重要性自动排序，红色优先。",
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
      "cat": "ai",
      "imp": "mid",
      "title": "文本生成3D室内场景",
      "sum": "Text2Villa 分层生成多房间3D室内环境，支持物理感知分析合成。",
      "ta": "程序化生成室内场景的AI方案，可辅助关卡或环境美术快速原型。",
      "src": "arXiv · cs.GR · 07-19",
      "url": "https://arxiv.org/abs/2607.17145v1"
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
      "imp": "lo",
      "title": "类别无关3D形状编辑",
      "sum": "CNS-Edit++ 基于耦合神经形状表示，实现隐空间3D形状编辑。",
      "ta": "通用3D形状编辑框架，可能用于DCC工具中的非破坏性编辑。",
      "src": "arXiv · cs.GR · 07-18",
      "url": "https://arxiv.org/abs/2607.16577v1"
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
      "cat": "flow",
      "imp": "mid",
      "title": "景观绘画启发3D光照",
      "sum": "访谈：艺术家通过户外风景画理解光线、色彩与构图，用于3D环境光照。",
      "ta": "光照艺术方法论，对TA理解真实感光照和材质表现有启发。",
      "src": "80 Level · 07-20",
      "url": "https://80.lv/articles/interview-understanding-3d-art-lighting-through-landscape-painting/"
    },
    {
      "cat": "biz",
      "imp": "lo",
      "title": "Unity 7路线图公布",
      "sum": "Unity 7基于Unity 6架构，提供不破坏构建的更新路径和新工具。",
      "ta": "引擎升级策略，确保项目迁移稳定性，对管线维护有影响。",
      "src": "Game Developer · 07-21",
      "url": "https://www.gamedeveloper.com/programming/unity-unveils-unity-7-roadmap-with-update-path-that-won-t-break-your-build"
    }
  ],
  "flashbackTitle": "",
  "sources": {
    "ok": [
      "NVIDIA",
      "PlayStation Blog",
      "AMD GPUOpen",
      "arXiv · cs.GR",
      "HuggingFace",
      "80 Level",
      "Game Developer",
      "Tech-Artists",
      "X（沿用上次本机抓取）"
    ],
    "missed": "未覆盖：Unreal Engine、Blender 开发博客。"
  },
  "xStale": false
};
