# 🚀 快速部署指南

## 方式一：GitHub Pages（推荐）

### 1. 创建 GitHub 仓库

```bash
cd my-resume
git init
git add .
git commit -m "Initial commit: resume website"
```

### 2. 关联远程仓库

在 GitHub 上创建新仓库（例如：`your-username/resume`），然后：

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/resume.git
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 进入仓库 → **Settings** → **Pages**
2. 在 **Build and deployment** 部分：
   - **Source**: 选择 `GitHub Actions`
3. 等待自动部署（约 1-2 分钟）

### 4. 访问你的网站

部署完成后，网站地址为：
```
https://YOUR_USERNAME.github.io/resume/
```

---

## 方式二：Vercel（最简单）

### 1. 安装 Vercel CLI

```bash
npm install -g vercel
```

### 2. 部署

```bash
cd my-resume
vercel
```

按提示操作即可，首次需要登录。

### 3. 访问

部署完成后会提供访问链接。

---

## 方式三：Netlify

### 1. 拖拽部署（无需命令行）

1. 先构建项目：
   ```bash
   npm run build
   ```
2. 访问 [Netlify Drop](https://app.netlify.com/drop)
3. 将 `dist` 文件夹拖拽到页面
4. 完成！

---

## 📝 部署前必做

### 1. 修改个人信息

编辑以下文件替换占位内容：

- `src/components/Hero.jsx` - 姓名、职位、描述
- `src/components/Experience.jsx` - 工作经历
- `src/components/Projects.jsx` - 项目信息
- `src/components/Skills.jsx` - 技能列表
- `src/components/Blog.jsx` - 博客文章
- `src/components/Contact.jsx` - 联系方式

### 2. 配置 Umami 统计（可选）

1. 访问 [umami.is](https://umami.is) 注册
2. 创建网站获取 `websiteId`
3. 编辑 `src/components/UmamiAnalytics.jsx`：
   ```javascript
   const umamiConfig = {
     websiteId: '你的 websiteId',
     hostUrl: 'https://cloud.umami.is'
   };
   ```

### 3. 添加个人照片

将照片放入 `public/` 目录，然后在 `Hero.jsx` 中引用：

```jsx
<img src="/your-photo.jpg" alt="Your Name" />
```

### 4. 自定义域名（可选）

在 `public/` 目录创建 `CNAME` 文件：
```
your-domain.com
```

---

## 🔧 常见问题

### Q: 部署后页面空白？

A: 检查 `vite.config.js` 中的 `base` 配置：
```javascript
// 如果部署到 https://username.github.io/resume/
base: '/resume/',

// 如果使用自定义域名
base: '/',
```

### Q: 图片不显示？

A: 确保图片放在 `public/` 目录，使用绝对路径引用：
```jsx
<img src="/images/photo.jpg" />
```

### Q: 如何启用 HTTPS？

A: GitHub Pages、Vercel、Netlify 都自动提供 HTTPS，无需额外配置。

---

## 📊 部署后验证清单

- [ ] 网站可以正常访问
- [ ] 所有链接有效
- [ ] 深色模式正常工作
- [ ] 语言切换正常
- [ ] PDF 下载功能正常
- [ ] 移动端显示正常
- [ ] 联系表单可以提交
- [ ] Umami 统计正常记录（如果配置）

---

**部署完成后，别忘了分享你的简历网站！** 🎉
