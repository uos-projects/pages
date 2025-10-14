# UROS 项目网站

面向电力信息场景的人机物融合操作系统技术研发项目官方网站

## 项目简介

UROS (Ubiquitous and Resilient Operating System) 是一个面向电力信息场景的人机物融合操作系统。本网站用于展示项目信息、研究成果和新闻动态。

## 技术栈

- **框架**: Astro
- **语言**: TypeScript
- **特性**: 
  - 静态站点生成 (SSG)
  - 双语支持 (中文/英文)
  - 响应式设计
  - 博客/新闻系统

## 项目结构

```
pages/
├── src/
│   ├── components/      # 可复用组件
│   ├── layouts/         # 页面布局
│   ├── pages/          # 页面文件
│   │   ├── index.astro # 中文首页
│   │   ├── about.astro # 关于项目
│   │   ├── team.astro  # 研究团队
│   │   ├── news/       # 新闻列表和详情
│   │   ├── contact.astro # 联系我们
│   │   └── en/         # 英文版本页面
│   ├── content/        # 内容集合 (新闻文章)
│   │   └── news/       # 新闻 Markdown 文件
│   └── config.ts       # 配置文件 (国际化)
├── public/             # 静态资源
└── astro.config.mjs    # Astro 配置
```

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:4321 查看网站

### 构建生产版本

```bash
npm run build
```

构建产物会生成在 `dist/` 目录

### 预览生产版本

```bash
npm run preview
```

## 添加新闻

在 `src/content/news/` 目录下创建 Markdown 文件：

**中文新闻** (`example-zh.md`):
```markdown
---
title: '新闻标题'
description: '新闻简介'
pubDate: 2024-01-01
lang: 'zh'
---

新闻内容...
```

**英文新闻** (`example-en.md`):
```markdown
---
title: 'News Title'
description: 'News description'
pubDate: 2024-01-01
lang: 'en'
---

News content...
```

## 部署

本项目是静态网站，可以部署到任何静态托管服务：

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 许可证

版权所有 © 2024 UROS Project. 保留所有权利。
