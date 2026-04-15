# 个人简历网站 🚀

一个现代化、创意风格的个人简历网站，基于 React + Vite + Tailwind CSS 构建。

## ✨ 功能特性

- 🌐 **多语言支持** - 中文/英文一键切换
- 🌙 **深色模式** - 自动/手动切换，保护视力
- 📱 **响应式设计** - 完美适配各种设备
- 📄 **PDF 导出** - 一键下载简历 PDF
- 📊 **访客统计** - 集成 Umami 分析
- 🎨 **创意风格** - 渐变色、动画效果、卡片悬停
- ⚡ **高性能** - Vite 构建，代码分割优化

## 🛠️ 技术栈

- **框架**: React 18
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **多语言**: react-i18next
- **PDF 生成**: html2pdf.js
- **分析**: Umami

## 🚀 快速开始

### 1. 安装依赖

```bash
cd my-resume
npm install
```

### 2. 本地开发

```bash
npm run dev
```

访问 http://localhost:5173 预览

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产构建

```bash
npm run preview
```

## 📝 自定义指南

### 修改个人信息

1. **基本信息** - 编辑 `src/components/Hero.jsx`
   - 修改姓名、职位、描述

2. **工作经历** - 编辑 `src/components/Experience.jsx`
   - 添加/修改工作经历条目

3. **项目展示** - 编辑 `src/components/Projects.jsx`
   - 替换项目图片、描述、链接

4. **技能清单** - 编辑 `src/components/Skills.jsx`
   - 调整技能分类和熟练度

5. **博客文章** - 编辑 `src/components/Blog.jsx`
   - 添加你的技术文章

6. **联系方式** - 编辑 `src/components/Contact.jsx`
   - 修改邮箱、地址、社交媒体链接

### 配置多语言

编辑 `src/i18n.js`，在 `resources` 对象中添加或修改翻译内容。

### 配置 Umami 统计

1. 访问 [Umami](https://umami.is) 注册账号
2. 创建新网站，获取 `websiteId`
3. 编辑 `src/components/UmamiAnalytics.jsx`：
   ```javascript
   const umamiConfig = {
     websiteId: 'your-actual-website-id',
     hostUrl: 'https://cloud.umami.is'
   };
   ```

### 自定义主题色

编辑 `tailwind.config.js`，修改 `colors` 配置：

```javascript
colors: {
  primary: {
    light: '#a78bfa',
    DEFAULT: '#8b5cf6',
    dark: '#7c3aed',
  },
  // ...
}
```

## 📦 部署到 GitHub Pages

### 方法一：自动部署（推荐）

1. 创建 GitHub 仓库
2. 推送代码到 `main` 分支
3. 在仓库设置中启用 GitHub Pages：
   - Settings → Pages
   - Source: GitHub Actions
4. 每次推送到 main 分支会自动部署

### 方法二：手动部署

```bash
# 构建
npm run build

# 安装 gh-pages
npm install -D gh-pages

# 部署
npx gh-pages -d dist
```

### 配置自定义域名

1. 在 GitHub Pages 设置中添加自定义域名
2. 在 `public` 目录创建 `CNAME` 文件：
   ```
   your-domain.com
   ```

## 📁 项目结构

```
my-resume/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 部署配置
├── public/                  # 静态资源
├── src/
│   ├── components/          # React 组件
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── UmamiAnalytics.jsx
│   ├── i18n.js             # 多语言配置
│   ├── App.jsx             # 主应用组件
│   ├── main.jsx            # 入口文件
│   └── index.css           # 全局样式
├── index.html
├── tailwind.config.js      # Tailwind 配置
├── vite.config.js          # Vite 配置
└── package.json
```

## 🎨 动画说明

- **fade-in**: 淡入效果
- **slide-up**: 从下方滑入
- **float**: 浮动动画（用于头像）
- **card-hover**: 卡片悬停上浮效果

## 🔧 开发技巧

### 添加新组件

1. 在 `src/components/` 创建新组件
2. 在 `App.jsx` 中导入并渲染
3. 在 `i18n.js` 中添加翻译

### 调整动画延迟

在组件中使用 `animationDelay` 控制动画顺序：

```jsx
<div style={{ animationDelay: `${index * 0.1}s` }}>
```

### 性能优化

- 使用 `React.memo` 包裹纯展示组件
- 大图片使用懒加载
- 代码分割（已配置）

## 📄 许可证

MIT License - 可自由使用和修改

## 🙏 致谢

感谢以下开源项目：

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-i18next](https://react.i18next.com/)
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js)
- [Umami](https://umami.is/)

---

**祝你构建出出色的简历网站！** 🎉
