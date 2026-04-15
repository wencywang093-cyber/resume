import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  zh: {
    translation: {
      // 导航
      nav: {
        about: '关于我',
        experience: '工作经历',
        projects: '项目展示',
        skills: '技能清单',
        blog: '博客文章',
        contact: '联系我'
      },
      // Hero 区域
      hero: {
        greeting: '你好，我是',
        title: '全栈开发工程师',
        description: '热爱创造优雅、高效的解决方案，将复杂问题转化为简洁代码',
        downloadCV: '下载简历 PDF',
        contactMe: '联系我'
      },
      // 工作经历
      experience: {
        title: '工作经历',
        present: '至今'
      },
      // 项目展示
      projects: {
        title: '项目展示',
        viewDemo: '查看演示',
        viewCode: '查看代码',
        featured: '精选项目'
      },
      // 技能清单
      skills: {
        title: '技能清单',
        frontend: '前端开发',
        backend: '后端开发',
        tools: '工具与其他'
      },
      // 博客
      blog: {
        title: '博客文章',
        readMore: '阅读全文',
        noPosts: '暂无文章'
      },
      // 联系方式
      contact: {
        title: '联系我',
        description: '有合作意向或想聊聊？随时联系我！',
        name: '姓名',
        email: '邮箱',
        message: '留言',
        send: '发送消息',
        sending: '发送中...',
        sent: '已发送',
        social: '社交媒体'
      },
      // 页脚
      footer: {
        rights: '版权所有',
        built: '使用 React + Tailwind CSS 构建'
      },
      // 通用
      common: {
        loading: '加载中...',
        error: '出错了',
        copy: '复制',
        copied: '已复制'
      }
    }
  },
  en: {
    translation: {
      // Navigation
      nav: {
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        blog: 'Blog',
        contact: 'Contact'
      },
      // Hero Section
      hero: {
        greeting: 'Hello, I\'m',
        title: 'Full Stack Developer',
        description: 'Passionate about creating elegant, efficient solutions that transform complex problems into clean code',
        downloadCV: 'Download CV',
        contactMe: 'Contact Me'
      },
      // Experience
      experience: {
        title: 'Work Experience',
        present: 'Present'
      },
      // Projects
      projects: {
        title: 'Featured Projects',
        viewDemo: 'View Demo',
        viewCode: 'View Code',
        featured: 'Featured Projects'
      },
      // Skills
      skills: {
        title: 'Skills & Expertise',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools & Others'
      },
      // Blog
      blog: {
        title: 'Blog Posts',
        readMore: 'Read More',
        noPosts: 'No posts yet'
      },
      // Contact
      contact: {
        title: 'Get In Touch',
        description: 'Have a project in mind or want to chat? Feel free to reach out!',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        sent: 'Sent',
        social: 'Social Media'
      },
      // Footer
      footer: {
        rights: 'All rights reserved',
        built: 'Built with React + Tailwind CSS'
      },
      // Common
      common: {
        loading: 'Loading...',
        error: 'Something went wrong',
        copy: 'Copy',
        copied: 'Copied'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh',
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
