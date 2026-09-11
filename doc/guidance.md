下面这份我会直接当作 **v1 Figma Style Guide / Design System Specification**。它不是单纯的 moodboard，而是可以交给设计师或 Coding Agent 执行的视觉规范。

# Personal Digital Studio — Visual Design Specification

**Design Direction:** Dark Technical Editorial
**Core Ratio:** 70% Editorial / 20% Technical / 10% Experimental

---

## 01 — Design Principles

### 关键词

**Precise · Quiet · Technical · Editorial · Human · Experimental**

网站应该给人的第一感觉：

> **“这是一个懂技术、懂设计，而且真的在做东西的人。”**

而不是：

> “这是一个 SaaS 产品。”

或者：

> “这是一个炫技型 Creative Agency。”

### 视觉原则

| Principle                     | Rule                         |
| ----------------------------- | ---------------------------- |
| Typography first              | 用 typography 建立视觉冲击，而不是图片/渐变 |
| High contrast                 | 黑白为主，Accent 极少使用             |
| Editorial rhythm              | 大标题 + 小 metadata + 大量留白      |
| Technical details             | Mono font、编号、边框、grid         |
| Controlled motion             | 动效服务于信息层级，不做炫技               |
| Human touch                   | 保留个人笔记、项目过程、实验感              |
| No decoration without purpose | 没有功能意义的装饰尽量删除                |

---

# 02 — Color System

## Core Palette

```text
INK
#080808
```

主背景。

```text
SURFACE
#111111
```

Card、hover、secondary surface。

```text
SURFACE-2
#181818
```

Interactive surface。

```text
BORDER
#252525
```

默认 border。

```text
BORDER-SUBTLE
#1B1B1B
```

非常弱的分割线。

---

### Text

```text
TEXT-PRIMARY
#F2F2F0
```

```text
TEXT-SECONDARY
#A0A09B
```

```text
TEXT-MUTED
#666661
```

```text
TEXT-DISABLED
#454542
```

---

## Accent

我建议第一版使用：

```text
SIGNAL GREEN
#B7FF5A
```

它不是传统的 neon green，而是比较偏 **acid / signal green**。

用途：

```text
Links
Active states
Small indicators
Tags
Important numbers
CTA accents
```

**不要**用它大面积做背景。

---

### Color Ratio

```text
Black / Dark      82%
White / Grey      15%
Accent             3%
```

Accent 越少，越有价值。

---

# 03 — Typography

我建议：

### Primary

**Geist**

用于：

```text
Headings
Body
Navigation
Buttons
UI
```

### Technical

**Geist Mono**

用于：

```text
Dates
Categories
Project metadata
Technology labels
Numbers
Navigation indices
Code-related content
```

---

# 04 — Type Scale

Desktop：

```text
Display XL
96px
line-height: 0.92
letter-spacing: -0.055em
weight: 500
```

用途：

```text
Homepage Hero
```

---

```text
Display
72px
line-height: 0.95
letter-spacing: -0.045em
weight: 500
```

---

```text
H1
56px
line-height: 1
letter-spacing: -0.035em
weight: 500
```

---

```text
H2
40px
line-height: 1.05
letter-spacing: -0.025em
weight: 500
```

---

```text
H3
28px
line-height: 1.15
letter-spacing: -0.015em
weight: 500
```

---

```text
Body Large
20px
line-height: 1.5
```

---

```text
Body
16px
line-height: 1.6
```

---

```text
Small
14px
line-height: 1.45
```

---

```text
Mono
12px
line-height: 1.4
letter-spacing: 0.02em
```

---

# 05 — Typography Hierarchy

一个典型 Project：

```text
01 / PROJECT
```

使用：

```text
Geist Mono
12px
uppercase
#A0A09B
```

然后：

```text
A BETTER WAY
TO MOVE GOODS.
```

使用：

```text
Geist
56–72px
#F2F2F0
```

然后：

```text
Web design · Development · E-commerce
```

使用：

```text
16px
#A0A09B
```

这种 **3-level hierarchy** 是整个网站最重要的视觉语言之一。

---

# 06 — Grid

Desktop：

```text
12-column grid
```

左右：

```text
margin: 32px
```

gap：

```text
16px
```

最大内容宽度：

```text
max-width: 1440px
```

更大的屏幕不要无限拉宽内容。

---

### Mobile

```text
4-column grid
```

左右 padding：

```text
20px
```

gap：

```text
12px
```

---

# 07 — Spacing System

使用 4px base unit：

```text
4
8
12
16
24
32
48
64
80
96
128
160
192
```

主要 section：

```text
Desktop
128–192px
```

普通 section：

```text
80–128px
```

Card：

```text
24–32px
```

文字之间：

```text
8–16px
```

**宁愿留白，不要把页面塞满。**

---

# 08 — Border

默认：

```css
border: 1px solid #252525;
```

Hover：

```css
border-color: #444;
```

Accent：

```css
border-color: #B7FF5A;
```

不建议大量使用圆角。

---

# 09 — Radius

整体风格应该偏 sharp。

```text
Buttons       999px / pill
Cards         0–4px
Images        0–2px
Inputs        2–4px
```

也就是说：

> **不要做成圆润 SaaS UI。**

---

# 10 — Navigation

Desktop：

```text
┌─────────────────────────────────────────────┐
│ DAKAI                 Blog Projects Tools   │
│                       About      EN / 中    │
└─────────────────────────────────────────────┘
```

高度：

```text
72px
```

Logo：

```text
12–14px
Mono
letter-spacing: .04em
```

Navigation：

```text
14px
```

---

### Active state

不要使用大面积背景。

使用：

```text
● Projects
```

或者：

```text
Projects
────────
```

Accent dot 可以是：

```text
#B7FF5A
```

---

# 11 — Buttons

主要 CTA：

```text
DISCUSS A PROJECT →
```

不要：

```text
START A PROJECT
```

因为你的定位不是纯 Agency。

### Primary Button

```text
Background: #F2F2F0
Text: #080808
Height: 48px
Padding: 0 20px
Radius: 999px
```

Hover：

```text
Background: #B7FF5A
```

---

### Secondary

```text
Background: transparent
Border: #383838
Text: #F2F2F0
```

Hover：

```text
Border: #B7FF5A
Text: #B7FF5A
```

---

# 12 — Cards

Card 不要有明显的：

```text
shadow
gradient
glass effect
```

使用：

```text
background: #111111
border: 1px solid #252525
```

Hover：

```text
border → #444
image scale → 1.02
```

动画：

```text
250–400ms
ease-out
```

---

# 13 — Project Card

推荐结构：

```text
┌─────────────────────────────────────────┐
│                                         │
│              PROJECT IMAGE              │
│                                         │
├─────────────────────────────────────────┤
│ 01 / CLIENT WORK                        │
│                                         │
│ PROJECT NAME                            │
│ Short description of the project.       │
│                                         │
│ ASTRO · SVELTE · TYPESCRIPT             │
└─────────────────────────────────────────┘
```

图片占主要面积。

文字非常克制。

---

# 14 — Blog Card

Blog 不要设计成普通 Blog card。

推荐：

```text
09.10.26   WEB DEVELOPMENT

Why I moved my personal website
from WordPress to Astro

→ Read
```

甚至可以完全没有 card：

```text
────────────────────────────────────────────

09.10.26      Why I moved my personal website
              from WordPress to Astro

              Development · 8 min

────────────────────────────────────────────
```

这会更有 **editorial publication** 的感觉。

---

# 15 — Tools

Tools 可以比 Blog 更“technical”。

例如：

```text
TOOLS

01
IMAGE COMPRESSOR
Reduce image size without destroying quality.

[ OPEN TOOL → ]

02
JSON FORMATTER
Format, validate and inspect JSON.

[ OPEN TOOL → ]
```

可以使用：

```text
Mono
technical labels
status indicators
small icons
```

但是不要做成 Dashboard。

---

# 16 — Image Treatment

图片是 Projects 的主要视觉元素。

原则：

> **真实项目图 > 装饰图片**

Project screenshot：

```text
aspect-ratio: 16 / 10
```

默认：

```text
grayscale: 0
```

Hover：

```text
scale(1.02)
```

不要给所有图片统一加：

```text
gradient overlay
dark overlay
glow
```

---

# 17 — Experimental Visual Language

这是网站允许“科技感”的地方。

可以偶尔使用：

### Grid

```text
· · · · · · · · · ·
· · · · · · · · · ·
· · · · · · · · · ·
```

### Coordinates

```text
48.8566° N
2.3522° E
```

### System labels

```text
SYSTEM / 001
BUILD / 2026
STATUS / ACTIVE
```

### Tiny indicator

```text
● ONLINE
```

颜色：

```text
#B7FF5A
```

但这些元素**不能超过页面视觉的 5–10%**。

---

# 18 — Motion

Motion philosophy：

> **Quiet but noticeable.**

页面进入：

```text
opacity: 0 → 1
translateY: 12px → 0
duration: 500–700ms
```

Project hover：

```text
image scale: 1 → 1.02
duration: 400ms
```

Navigation：

```text
underline / opacity
200ms
```

不要：

```text
parallax everywhere
cursor-following everywhere
large WebGL intro
scroll hijacking
```

尤其是 Blog。

阅读体验应该优先。

---

# 19 — Hero

首页 Hero 应该是整个网站视觉最强的部分。

推荐：

```text
┌─────────────────────────────────────────────┐
│                                             │
│  INDEPENDENT DIGITAL STUDIO                │
│                                             │
│  BUILDING                                  │
│  DIGITAL                                   │
│  THINGS.                                   │
│                                             │
│  Websites, tools and experiments.          │
│                                             │
│  [ VIEW PROJECTS ]  [ READ BLOG ]          │
│                                             │
│                              2026 / 001     │
└─────────────────────────────────────────────┘
```

重点：

**Hero 不需要图片。**

可以让 typography 本身成为视觉。

---

# 20 — Section Heading

统一采用：

```text
01 / SELECTED PROJECTS
```

而不是：

```text
Our Portfolio
```

例如：

```text
01 / PROJECTS

Things I've built
for clients and for myself.
```

这会同时体现：

* editorial
* technical
* personal

---

# 21 — Footer

Footer 不应该只是：

```text
© 2026 Dakai
```

可以做成：

```text
LET'S BUILD
SOMETHING
USEFUL.

Discuss a project →

────────────────────────────────────

DAKAI OU

Blog
Projects
Tools
About

GitHub
Email
LinkedIn

© 2026
EN / 中文
```

Footer 可以成为第二个 CTA。

---

# 22 — Chinese Typography

中英文混排必须单独考虑。

中文不要使用：

```text
uppercase
letter-spacing
```

中文正文：

```text
16px
line-height: 1.8
```

中文标题：

```text
40–56px
line-height: 1.2
```

英文标题：

```text
56–96px
line-height: .92–1.0
```

所以中英文页面**不一定需要完全相同的排版比例**。

---

# 23 — Dark / Light Mode

我建议：

### V1

**Dark only**

原因不是因为 dark “更酷”，而是你的：

```text
Technical
Editorial
Projects
Tools
```

非常适合 dark。

以后如果 Blog 内容增长很多，再增加：

```text
Light reading mode
```

甚至可以让：

```text
Home → Dark
Projects → Dark
Tools → Dark

Blog article → Light
```

但第一版不要增加这个复杂度。

---

# 24 — Figma Page Structure

如果实际在 Figma 建文件，我会这样组织：

```text
00 — Cover
01 — Foundations
    ├── Colors
    ├── Typography
    ├── Grid
    ├── Spacing
    └── Effects

02 — Components
    ├── Navigation
    ├── Buttons
    ├── Links
    ├── Tags
    ├── Cards
    ├── Inputs
    └── Footer

03 — Patterns
    ├── Hero
    ├── Project Grid
    ├── Blog List
    ├── Tools List
    └── CTA

04 — Pages
    ├── Home
    ├── Blog
    ├── Article
    ├── Projects
    ├── Project Detail
    ├── Tools
    ├── Tool Detail
    └── About

05 — Mobile
```

---

# 25 — 最终视觉关键词

如果把这整个 Design System 压缩成一句话：

> **A dark editorial interface with technical precision, restrained color, oversized typography and subtle experimental details.**

或者更简单：

```text
DARK
TYPE
GRID
MONO
SPACE
SIGNAL
MOTION
```

这 7 个词可以作为以后所有设计决策的 filter。

**任何设计元素如果不能服务这 7 个词之一，就考虑删掉。**

---

## 最后一个重要建议

我认为下一步**不是马上开始写 Astro**。

最好先把这个 Design System 做成一个真正的 **“Style Guide / Playground 页面”**，也就是：

```text
/style-guide
```

里面完整展示：

```text
Colors
Typography
Buttons
Links
Cards
Project cards
Blog rows
Tool cards
Grid
Section headings
Hero
Navigation
Footer
Mobile states
Hover states
```

它本身就是你整个网站的 **visual source of truth**。

以后无论是你自己写 Astro，还是让 Claude / Cursor / Codex 改网站，都可以直接以 `/style-guide` 为视觉基准，而不是每次重新解释“我要一种现代科技感”。

如果你最终决定采用这套方向，我会进一步把它转换成一份**可直接给 Astro/Codex 使用的 `DESIGN.md` + CSS design tokens (`:root`) + Tailwind theme 配置规范**，这样设计语言就可以直接落到代码层。

