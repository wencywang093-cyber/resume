export default function Blog({ t }) {
  const posts = [
    {
      id: 1,
      title: 'React 性能优化实战：从 3s 到 300ms',
      excerpt: '分享我在大型 React 项目中实践的性能优化技巧，包括代码分割、懒加载、memo 等...',
      date: '2024-03-15',
      tags: ['React', 'Performance'],
      readTime: '8 min'
    },
    {
      id: 2,
      title: 'TypeScript 高级类型技巧',
      excerpt: '深入探讨 TypeScript 中的泛型、条件类型、映射类型等高级特性...',
      date: '2024-02-28',
      tags: ['TypeScript'],
      readTime: '12 min'
    },
    {
      id: 3,
      title: '微服务架构下的数据一致性方案',
      excerpt: '在分布式系统中如何保证数据一致性？介绍 Saga、事件溯源等模式...',
      date: '2024-02-10',
      tags: ['Architecture', 'Microservices'],
      readTime: '15 min'
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
            {t('blog.title')}
          </span>
        </h2>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              {t('blog.noPosts')}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {post.date}
                  </span>
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">
                  {post.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                    {t('blog.readMore')} →
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
