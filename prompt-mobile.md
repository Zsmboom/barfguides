## 手机适配 — barfguides

当前有 17 个页面。请逐一修改以下 4 类问题，**每类所有页面都要覆盖**，不要漏页。

---

### 1. Header — 汉堡菜单（仅在手机上）

修改文件：`src/components/Header.tsx`

当前 Desktop 导航有 5 项，手机上只能横向滚动。改成：
- 屏幕宽度 < 768px (`md:` 断点) 时隐藏 `<nav>`，显示一个 hamburger button（三条横线图标）
- 点击 hamburger 展开一个下拉菜单，包含 5 个导航项，样式是垂直列表
- 用 React `useState` 控制展开/收起，点击任意链接或再次点击 hamburger 收起
- 在 `<header>` 整体加一个红色醒目评论 `{/* MOBILE ADAPTED */}` 标记已改
- 键盘无障碍：hamburger 按钮有 `aria-label="Toggle navigation menu"`，菜单用 `aria-expanded`
- 样式：hamburger 按钮白色文字，下拉菜单半透明深色背景 `bg-slate-950/95 backdrop-blur`

不要动 desktop 端布局（md+ 保持现有水平 nav）。

---

### 2. 所有 Grid 布局 — 手机默认 1 列

搜索项目中所有 `md:grid-cols-` 或 `lg:grid-cols-` 的 className，确保它们前面有 `grid-cols-1`（手机默认 1 列）。

例如：
```
❌ className="grid gap-4 md:grid-cols-3"
✅ className="grid gap-4 grid-cols-1 md:grid-cols-3"
```

以下所有文件都要改：

src/app/page.tsx
src/app/tier-list/page.tsx
src/app/seeds-database/page.tsx
src/app/events-guide/page.tsx
src/app/beginner-guide/page.tsx
src/app/money-guide/page.tsx
src/app/codes/page.tsx
src/app/contact/page.tsx
src/app/faq/page.tsx
src/app/pets-tier-list/page.tsx
src/app/mutations-tier-list/page.tsx
src/app/transcendent-seeds-guide/page.tsx
src/app/update-4-patch-notes/page.tsx
src/app/compost-machine-guide/page.tsx
src/app/contracts-guide/page.tsx
src/app/profit-calculator/page.tsx
src/app/about/page.tsx
src/app/privacy-policy/page.tsx
src/components/ProfitCalculator.tsx
src/components/Footer.tsx
src/components/Tables.tsx

如果某个 grid 已经有了 `grid-cols-1`、`sm:grid-cols-` 或非 md/lg 前置，则跳过。

---

### 3. 所有可交互元素 — 触控安全区

给所有 `<Link>`、`<button>`、`<a>` 加上 `min-h-[44px]`（Apple HIG 最小触控目标）。

涉及文件：全项目都要扫。场景包括：
- Header 中的 `<Link>` 导航项
- 各页面中的按钮和链接
- Footer 中的链接
- CopyButton 组件
- Tables 中的交互元素
- ProfitCalculator 中的按钮和选择器

不要改成难以阅读的样子。链接类保持 `px-3 py-2` 内边距不变，如果 `py-2` 加上 `min-h-[44px]` 后实际高度不足 44px 才需要额外调整。

---

### 4. 验证 viewport meta

确认 `src/routes/__root.tsx` 中已有：
```tsx
{ name: "viewport", content: "width=device-width, initial-scale=1" }
```
这段在 `head: () => ({ meta: [...] })` 中。如果有，加注释 `{/* MOBILE ADAPTED */}` 标记已确认。如果没有则添加。

---

### 完成后

不要跑 `npm install` 或 `npm run build`。只改代码，改完后告诉我改了哪些文件以及改了哪些模式（stat）。
