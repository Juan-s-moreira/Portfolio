import { useState } from "react"
import { translations } from "../translation"
import { Globe } from "lucide-react"



const Header = () => {
    const [language, setLanguage] = useState("en")
    // const [isMenuOpen, setIsMenuOpen] = useState(false)


    const t = translations[language]
    const toggleLanguage = () => {
        setLanguage(language === "en" ? "pt" : "en")
    }

    // const scrollToSection = (sectionId) => {
    //     document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    //     setIsMenuOpen(false)
    // }


    return (
        <header className="fixed top-0 w-full bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-sm border-b border-purple-800/50 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ">
                        Juan Santos
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <button className="text-gray-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer">{t.nav.about}</button>
                        <button className="text-gray-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer">{t.nav.projects}</button>
                        <button className="text-gray-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer"> {t.nav.skills}</button>
                        <button className="text-gray-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer">{t.nav.education}</button>
                        <button className="text-gray-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer">{t.nav.contact}</button>
                    </nav>


                    <div className="flex items-center space-x-4">
                        <button onClick={toggleLanguage} className=" flex items-center px-3 py-1 border-purple-700 text-gray-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-sm cursor-pointer">
                            <Globe className="w-4 h-4 mr-2" />
                            {language.toUpperCase()}
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header
