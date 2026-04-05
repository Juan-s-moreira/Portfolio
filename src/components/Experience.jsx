import { translations } from "../data/translation";
import { useLanguage } from "../contexts/LanguageContext";

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];


  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {t.experience.title}
        </h2>
        <div className="space-y-8">
          {/* jobs */}
          {t.experience.items.map((exp) => (
            <div key={exp.id} className="card bg-gray-800/80 backdop-blur-sm border border-gray-700">
              <div className="card-body">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="card-title text-purple-400 text-lg">
                      {exp.title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end text-gray-400 text-sm">
                    <span className="text-gray-400 text-sm mt-2 md:mt-0 font-bold">{exp.period}</span>
                    {exp.employmentType && (
                      <span className="text-gray-400 text-sm font-bold mt-2 md:mt-0">{exp.employmentType}</span>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 mt-4">
                  {exp.description}
                </p>
                <ul className="space-y-2 mt-2">
                  {exp.achievements.map((achievements) => (
                    <li key={achievements} className="text-gray-400 text-sm items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      {achievements}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience