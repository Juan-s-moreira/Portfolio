import { translations } from "../translation"
import { useLanguage } from "../contexts/LanguageContext"

const About = () => {
    const { language } = useLanguage()
    const t = translations[language]


    return (
        <section id="about"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-purple-900/20"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {t.about.title}
                </h2>
                <div className="max-w-3xl mx-auto text-left md:text-justify">
                    <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                        {t.about.description}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
