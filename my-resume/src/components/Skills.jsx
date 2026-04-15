export default function Skills({ t }) {
  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'Vue / Nuxt', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML5 / CSS3', level: 98 }
      ]
    },
    {
      title: t('skills.backend'),
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL / MySQL', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'Redis', level: 80 }
      ]
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'AWS / Cloud', level: 80 },
        { name: 'CI/CD', level: 88 },
        { name: 'Figma', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
            {t('skills.title')}
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg animate-slide-up"
              style={{ animationDelay: `${catIndex * 0.15}s` }}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
