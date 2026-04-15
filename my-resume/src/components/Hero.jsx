export default function Hero({ t, downloadPDF, scrollToSection }) {
  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
              {t('hero.greeting')}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-slate-600 dark:text-slate-300 mb-6">
              {t('hero.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={downloadPDF}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                {t('hero.downloadCV')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-semibold rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200"
              >
                {t('hero.contactMe')}
              </button>
            </div>
          </div>

          {/* Avatar/Illustration */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900/30 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-emerald-300 dark:bg-emerald-900/30 rounded-full blur-3xl opacity-50"></div>
              
              {/* Avatar placeholder */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-purple-500 to-emerald-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                  {/* Replace with your photo */}
                  <svg className="w-32 h-32 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
