import { useState } from "react"
import { translations } from "../translation"
import { useLanguage } from "../contexts/LanguageContext"
import { Globe, Menu, X } from "lucide-react"



const Header = () => {
    const {language, toggleLanguage} = useLanguage()
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const t = translations[language]
 

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
    }


    return (
        <header className="fixed top-0 w-full bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-sm border-b border-purple-800/50 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ">
                        Juan Santos
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <button
                            onClick={() => scrollToSection("about")}

                            className="text-gray-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer">{t.nav.about}</button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="text-gray-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer">{t.nav.projects}</button>
                        <button
                            onClick={() => scrollToSection("skills")}

                            className="text-gray-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer"> {t.nav.skills}</button>
                        <button
                            onClick={() => scrollToSection("education")}

                            className="text-gray-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer">{t.nav.education}</button>
                        <button
                            onClick={() => scrollToSection("contact")}

                            className="text-gray-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer">{t.nav.contact}</button>
                    </nav>


                    <div className="flex items-center space-x-4">
                        <button onClick={toggleLanguage} className=" flex items-center px-3 py-1 border-purple-700 text-gray-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-sm cursor-pointer">
                            <Globe className="w-4 h-4 mr-2" />
                            {language.toUpperCase()}
                        </button>

                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300 ">
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}

                        </button>
                    </div>

                </div>

                {isMenuOpen && (
                    <nav className="md:hidden py-4">
                        <div className="flex flex-col space-y-4">
                            <button
                                // onClick={() => scrollToSection("about")}
                                className="text-gray-300 hover:text-purple-400 transition-colors text-left">
                                {t.nav.about}
                            </button>
                            <button
                                // onClick={() => scrollToSection("about")}
                                className="text-gray-300 hover:text-purple-400 transition-colors text-left">
                                {t.nav.projects}
                            </button>
                            <button
                                // onClick={() => scrollToSection("about")}
                                className="text-gray-300 hover:text-purple-400 transition-colors text-left">
                                {t.nav.skills}
                            </button>
                            <button
                                // onClick={() => scrollToSection("about")}
                                className="text-gray-300 hover:text-purple-400 transition-colors text-left">
                                {t.nav.education}
                            </button>
                            <button
                                // onClick={() => scrollToSection("about")}
                                className="text-gray-300 hover:text-purple-400 transition-colors text-left">
                                {t.nav.contact}
                            </button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Header
