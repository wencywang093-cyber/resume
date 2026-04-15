import { useEffect } from 'react';

export default function UmamiAnalytics() {
  useEffect(() => {
    // Umami 配置 - 替换为你的实际配置
    const umamiConfig = {
      websiteId: 'your-website-id', // 在 Umami 后台创建网站后获取
      hostUrl: 'https://cloud.umami.is' // 或使用自托管的 Umami 实例
    };

    // 动态加载 Umami 脚本
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `${umamiConfig.hostUrl}/script.js`;
    script.setAttribute('data-website-id', umamiConfig.websiteId);
    
    document.head.appendChild(script);

    return () => {
      // 清理（如果需要）
    };
  }, []);

  return null;
}
