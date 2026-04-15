export default function Projects({ t }) {
  const projects = [
    {
      id: 1,
      title: '电商平台重构',
      description: '主导大型电商平台的前后端重构，采用微服务架构，支持百万级日活用户',
      tags: ['React', 'Node.js', 'MongoDB', 'Redis'],
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=E-Commerce',
      demo: '#',
      code: '#'
    },
    {
      id: 2,
      title: '智能数据分析平台',
      description: '开发实时数据分析看板，集成多种数据源，提供可视化报表和预警功能',
      tags: ['Vue', 'Python', 'PostgreSQL', 'ECharts'],
      image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Analytics',
      demo: '#',
      code: '#'
    },
    {
      id: 3,
      title: '移动办公应用',
      description: '设计并实现跨平台移动办公应用，支持任务管理、即时通讯、文件共享等功能',
      tags: ['React Native', 'Firebase', 'TypeScript'],
      image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=Mobile+App',
      demo: '#',
      code: '#'
    },
    {
      id: 4,
      title: 'AI 内容生成工具',
      description: '集成大语言模型的智能内容生成工具，支持文章、代码、设计稿等多种输出',
      tags: ['Next.js', 'OpenAI API', 'Tailwind'],
      image: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=AI+Tool',
      demo: '#',
      code: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
            {t('projects.title')}
          </span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-16">
          {t('projects.featured')}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-emerald-600 text-white text-center rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    {t('projects.viewDemo')}
                  </a>
                  <a
                    href={project.code}
                    className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-center rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    {t('projects.viewCode')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
