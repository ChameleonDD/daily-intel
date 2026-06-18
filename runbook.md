# 每日情报站执行手册 (runbook)

> 这份手册供「每日 9:00 定时自动化」唤起的 AI 执行。
> 目标：每天自动跑通 **抓取 → 降噪 → 生成页面 → 归档并自动打开**，产出当天日报。
> 工作目录：`C:/Users/jimiding/WorkBuddy/2026-06-16-10-44-16/daily-intel/`
> Python：`C:/Users/jimiding/.workbuddy/binaries/python/envs/default/Scripts/python.exe`

---

## 设计原则（不可违背）

来自用户的《碎片知识吸收媒介-科学设计规则》，每条都是硬约束：

1. **标题 ≤ 12 字**，单句断言，不用"和/也/；"。
2. **一句话摘要 ≤ 40 字**，只复述事实。
3. **TA 视角只复述原文真实存在的游戏/工作流关联**，措辞用"原文是…/原文讲的是…"，**绝不脑补延伸**。用户明确反感"你延伸出来的"关联。
4. **重要性三级**（红 hi=停下精读 / 橙 mid=值得关注 / 绿 lo=速览），是卡片色条+小徽标。
5. **正文按重要性排序**（hi>mid>lo，同档按日期新→旧），最重磅 1-3 条用 `rank` 置顶（见步骤3）。**领域只做顶部过滤标签**，不再主导排序。
6. **抓不到的源如实标注"未覆盖+原因"**，绝不编造内容凑数。

---

## 频道结构（领域分类）

| 频道 | data-cat | 领域色 | 主要来源 |
|---|---|---|---|
| X 动态 | `x` | 紫 #8a4fb0 | 15 位大佬 X 主页（半自动） |
| 游戏技术 | `tech` | #2f7d8a | 80 Level（虚幻/实时渲染/美术工作流） |
| TA 工作流 | `flow` | (见现有 css) | Tech-Artists 论坛 |
| 游戏行业 | `biz` | (见现有 css) | Game Developer |
| 图形学前沿 | `gfx` | #2f7d8a | arXiv cs.GR（含 SIGGRAPH 录用） |
| AI 技术 | `ai` | #3b6fb0 | HuggingFace papers + NVIDIA（仅留原文真带游戏/实时/3D关联的） |

> ⚠️ 频道（cat）现在只用于**领域过滤 + 卡片小标签**，**不再决定正文先后**。正文一律按重要性排序。

---

## 每日执行步骤

### 步骤 1：抓取网页源（全自动，用 WebFetch）

按下表逐个抓，要"当天最新"。抓到的每条记录：标题、一句话事实摘要、原文 URL、发布日期。

| 源 | URL | 抓取方式 | 备注 |
|---|---|---|---|
| 80 Level | `https://80.lv/articles/` | 直抓 | 游戏美术/引擎/实时渲染 |
| Game Developer | `https://www.gamedeveloper.com/latest` | 直抓 | 行业新闻 |
| Tech-Artists | `https://www.tech-artists.org/latest.json` | **抓 .json** | Discourse 论坛，绕墙 |
| arXiv cs.GR | `https://arxiv.org/list/cs.GR/recent` | 直抓 | 优先实时渲染/仿真/几何/动画 |
| HuggingFace | `https://huggingface.co/papers` | 直抓 | 当作 X AI Posts 等价替代；只留 3D/世界模型/实时相关 |
| NVIDIA | `https://developer.nvidia.com/blog/recent-posts/` | 直抓 | 仅留图形/实时/AI生成内容相关 |
| 虚幻引擎 | `https://www.unrealengine.com/rss/news` | **抓 RSS** | 官网网页被 Cloudflare 挡，走 RSS 绕墙 |

**抓不到的源**（已知，本期如实标注，不重试浪费时间）：
- **ArtStation**：网页 + magazine feed 都被 Epic Cloudflare 挡，RSS 路径全 404。如实标注"验证墙拦截，未覆盖"。
- **X (Twitter) 网页直抓**：需登录，走步骤 2 的登录态方案，不在此步。

### 步骤 2：抓取 X（半自动，一周只抓两次 = 周一/周四）

> X 的内容更新慢、且常不是当天的，每天抓没意义。**只在周一、周四抓**，其余天直接沿用上次的 X 卡片。

先判断今天星期几：

```bash
"C:/Users/jimiding/.workbuddy/binaries/python/envs/default/Scripts/python.exe" -c "import datetime;print(datetime.date.today().weekday())"
# 0=周一 1=周二 ... 3=周四 ... 6=周日
```

- **若今天不是周一(0)/周四(3)** → **跳过 X 抓取**。步骤3 重写 data.js 时，把现存 `x` 频道卡片**原样保留**（连同它们的 imp/rank/who/url），只更新网页源那些频道。不要清空、不要重抓。
- **若今天是周一/周四** → 复用本地登录态抓一次：

```bash
cd "C:/Users/jimiding/WorkBuddy/2026-06-16-10-44-16/daily-intel"
"C:/Users/jimiding/.workbuddy/binaries/python/envs/default/Scripts/python.exe" x_scrape.py
```

**注意：x_scrape.py 必须用 `dangerouslyDisableSandbox: true` 跑在沙箱外**，否则 Playwright 弹不出/读不了浏览器缓存。

读 `x-raw.json` 的 `session_ok` 字段判断分支：

- **`session_ok: true`** → 正常降噪，挑近期、本人原创、handle 对得上的推文进卡片（一般留 5-8 条真金）。
- **`session_ok: false`（输出 `STALE_SESSION`）** → 登录态过期。此时：
  1. **不抓新 X 数据**，沿用上一份页面里已有的 X 卡片（或最近一次 `x-raw.json` 的有效数据）。
  2. **在页面顶部和给用户的消息里明确提示**："X 登录态已过期，今日 X 动态为上次数据。需要时运行 `x_login.py` 重新登录一次（约 10 秒）。"
  3. 重登命令（需用户在桌面端、沙箱外）：
     ```bash
     "C:/Users/jimiding/.workbuddy/binaries/python/envs/default/Scripts/python.exe" x_login.py
     ```

### 步骤 3：降噪 + 只重写 data.js（关键：不要碰 index.html）

⚠️ **页面已做骨架/数据分离。`index.html` 是固定骨架（CSS+渲染引擎），永远不要改它。每天只重写 `data.js` 这一个小文件**——这是为省 token 做的核心优化，几百行 CSS/JS 不再每天重新生成。

把所有真实素材按"科学卡片"约束加工，**只生成 `data.js`** 里的 `window.INTEL_DATA` 对象。字段规范见 `data.js` 文件头注释，要点：

- `date`：当天日期串，如 `"2026年6月17日 · 周三"`。
- `todayHtml`：「今日一句」，概括当天几条主线，可用 `<em>...</em>` 高亮关键短语。
- `channels`：频道定义（顺序即显示顺序）。一般保持现有 6 个（x/tech/flow/biz/gfx/ai）；某频道当天 0 条时渲染引擎会自动隐藏，**不用手动删**。
- `cards`：每条一个对象，**数组顺序无所谓**（页面按重要性自动排序）——
  - `cat` 频道key / `imp` 重要性(hi/mid/lo) / `title`(≤12字) / `sum`(≤40字) / `ta`(复述原文不脑补) / `url` 原文链接。
  - `rank`（可选，今日头条置顶）：给当天**最重磅的 1-3 条**填 `rank:1/2/3`，数字越小越靠前。**只在同 imp 档内生效**，所以置顶的消息本身也要是 `imp:"hi"`。适用场景：重大引擎版本发布（如 UE5.8 上线）、行业地震级新闻。其余卡片**不要填 rank**。
  - 网页源卡片填 `src`（如 `"80 Level · 06-17"`）。
  - X 卡片填 `handle`（如 `"@karpathy"`）和 `who`（如 `"Andrej Karpathy · 05-19"`），不填 src。
  - **排序逻辑（渲染引擎自动执行，无需手动排）**：① imp 档 hi>mid>lo → ② 同档内 rank 小的靠前 → ③ 再同则按 who/src 里的日期新→旧 → ④ 兜底原始顺序。
- `sources`：`ok` 是抓取成功的源名数组；`missed` 是未覆盖源的说明（ArtStation 等）。
- `xStale`：X 登录态过期时设 `true`（页面会自动显示红色提示横幅）；正常为 `false`。

总条数、各频道计数、过滤条都由渲染引擎**自动算**，不用手填。

写法：**直接覆盖写 `data.js`**。写完后页面打开即按新数据渲染，无需改 index.html。
保险检查：可用 `node -e "global.window={};require('./data.js');console.log(window.INTEL_DATA.cards.length)"` 确认数据能正常解析。

### 步骤 4：归档 + 自动打开

```bash
cd "C:/Users/jimiding/WorkBuddy/2026-06-16-10-44-16/daily-intel"
"C:/Users/jimiding/.workbuddy/binaries/python/envs/default/Scripts/python.exe" publish.py
```

这一步会：把当天 index.html 存一份 `archive/YYYY-MM-DD.html`，并用默认浏览器自动打开当天页面。

### 步骤 5：上云 + 手机推送（让 iPhone 锁屏收到「日报已就绪」）

> 目的：每天定点往手机弹一条横幅，点开直接看云端日报。链路 = 把快照传 GitHub Pages → Bark 推送带链接。
> **前置：只需配一次** `push_config.json`（填 bark.key 和 github_pages.repo/page_url，文件里有「_怎么拿」说明）。没配好时这两步会安全跳过并提示，不影响前面流程。

```bash
cd "C:/Users/jimiding/WorkBuddy/2026-06-16-10-44-16/daily-intel"
# ① 把当天 archive/<日期>.html 推到 GitHub Pages（同时存为 today.html，链接永远指向最新一期）
"C:/Users/jimiding/.workbuddy/binaries/python/envs/default/Scripts/python.exe" deploy.py
# ② Bark 推一条锁屏通知（标题/正文自动从 data.js 提取：条数+今日头条），点开跳 page_url
"C:/Users/jimiding/.workbuddy/binaries/python/envs/default/Scripts/python.exe" notify.py
```

- `deploy.py` 需本机装 git 且对该仓库有推送权限（建议 `gh auth login` 或 PAT）。首次会自动 clone 到 `_pages_repo/`。
- `notify.py` 仅用标准库，无需 pip。未填 key 会输出 `ERR_NO_BARK_KEY` 安全退出；填了 key 但没填 page_url 会推送但提示「点开不跳转」。
- 推送通道当前选定 **Bark（iPhone 锁屏）**。若将来想换微信，把 notify.py 的 URL 换成 Server酱/PushPlus 的接口即可，其余不动。

---

## 给用户的收尾消息（每天跑完后）

简短汇报：今天抓了几个源、共几条、X 动态状态（正常 / 已过期需重登）、几条值得停下精读的、**已推送到手机（Bark）+ 云端链接**。附页面已自动打开的提示。

---

## 已知坑（避免踩）

- 单次 Write 超大 HTML 可能被截断 → 大改动时分块写或精简。
- Playwright 相关脚本（x_login.py / x_scrape.py）**必须沙箱外**。
- X 用户名可能改名，翻不到的当场标注，**绝不用错号顶替**。
- 账号列表在 `x-accounts.json`，要增减大佬改这里。
