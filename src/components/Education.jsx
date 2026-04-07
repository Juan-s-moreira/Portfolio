import { translations } from "../data/translation";
import { useLanguage } from "../contexts/LanguageContext";

const Education = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {t.education.title}
        </h2>
        <div className="max-w-2xl mx-auto mb-8">
          <div className="card bg-gray-800/80 backdrop-blur-sm border border-gray-700">
            <div className="card-body">
              <h3 card-title text-putple-400 text-xl>
                {t.education.degree1.title}
              </h3>
              <p className="text-gray-300">
                {t.education.degree1.school}
              </p>
              <span className="text-gray-400 text-sm">
                {t.education.degree1.period}
              </span>
              <p className="text-gray-300 mt-4">
                {t.education.degree1.description}
              </p>
              <ul className="space-y-2 mt-4">
                {t.education.degree1.highlights.map((highlights) => (
                  <li key={highlights} className="text-gray-400 text-sm flex items-start">
                    <span className="text-purple-400">•</span> {highlights}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
