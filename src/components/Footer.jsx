import { translations } from "../data/translation"
import { useLanguage } from "../contexts/LanguageContext"
const Footer = () => {
    const { language } = useLanguage()
    const t = translations[language]

    return (
        <footer className="py-8 px-4 sm:px-6 lg:-px-8 bg-gradient-to-r from-slate-900/50">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-gray-400">
                    © 2026 {t.hero.name}. {t.footer.rights}
                </p>
            </div>
        </footer>
    )
}

export default Footer
