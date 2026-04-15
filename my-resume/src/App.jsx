import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import html2pdf from 'html2pdf.js';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UmamiAnalytics from './components/UmamiAnalytics';
import './i18n';
import './index.css';

function App() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [currentSection, setCurrentSection] = useState('about');

  // 初始化深色模式
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    const isDark = saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
  }, []);

  // 应用深色模式
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // 切换语言
  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };

  // 切换深色模式
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // 下载 PDF
  const downloadPDF = () => {
    const element = document.getElementById('resume-content');
    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  // 滚动到指定区域
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  return (
    <div className="creative-bg min-h-screen">
      <UmamiAnalytics />
      <div id="resume-content">
        <Header 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          language={i18n.language}
          toggleLanguage={toggleLanguage}
          currentSection={currentSection}
          scrollToSection={scrollToSection}
        />
        
        <main>
          <Hero 
            t={t}
            downloadPDF={downloadPDF}
            scrollToSection={scrollToSection}
          />
          <Experience t={t} />
          <Projects t={t} />
          <Skills t={t} />
          <Blog t={t} />
          <Contact t={t} />
        </main>

        <Footer t={t} />
      </div>
    </div>
  );
}

export default App;
