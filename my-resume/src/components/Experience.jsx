export default function Experience({ t }) {
  const experiences = [
    {
      id: 1,
      title: '高级全栈工程师',
      company: '某某科技公司',
      period: '2022.01 - 至今',
      description: [
        '负责公司核心产品的架构设计与开发',
        '带领 5 人团队完成多个重要项目',
        '优化系统性能，提升 40% 响应速度'
      ]
    },
    {
      id: 2,
      title: '全栈开发工程师',
      company: '创新科技有限公司',
      period: '2019.06 - 2021.12',
      description: [
        '参与多个 Web 应用的前后端开发',
        '实现 CI/CD 流程自动化',
        '开发内部工具提升团队效率'
      ]
    },
    {
      id: 3,
      title: '前端开发工程师',
      company: '数字创意工作室',
      period: '2017.03 - 2019.05',
      description: [
        '负责多个客户项目的界面开发',
        '实现响应式设计和跨浏览器兼容',
        '优化页面加载性能'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
            {t('experience.title')}
          </span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-emerald-500"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-20 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg card-hover">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-block px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-600 dark:text-slate-400">
                        <svg className="w-5 h-5 mr-2 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
