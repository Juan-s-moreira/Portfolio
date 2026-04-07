import { translations } from "../data/translation";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id='skills'
      className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-indigo-900/20'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
          {t.skills.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="card bg-gray-800/80 backdrop-blur-sm border border-gray-700 shadow-xl">
            <div className="card-body p-8 md:p-12">
              <div className="flex flex-wrap gap-4 justify-center">
                {t.skills.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-3 badge badge-lg bg-gray-700/50 backdrop-blur-sm text-gray-200 rounded-full text-sm font-medium border border-gray-600 hover:border-purple-500 hover:text-purple-400 hover:bg-gray-700/80 transition-all duration-300 cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="card bg-gray-800/80 backdrop-blur-sm border border-gray-700 mt-6 shadow-xl ">
            <div className="card-body">
              <h3 className="card-title text-purple-400 text-xl justify-center">
                <Globe size={24}/>
                {t.skills.languages.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {t.skills.languages.items.map((lang) => (
                  <div key={lang} className="flex items-center">
                    <span className="text-gray-300">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;