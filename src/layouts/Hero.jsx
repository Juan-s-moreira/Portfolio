
import { useState, useEffect } from "react"
import { translations } from "../translation"
import { useLanguage } from "../contexts/LanguageContext"

const TypewriterText = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
    const [displayText, setDisplayText] = useState("")
    const [textIndex, setTextIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
  
    useEffect(() => {
      const currentText = texts[textIndex]
  
      const timeout = setTimeout(
        () => {
          if (!isDeleting) {
            if (displayText.length < currentText.length) {
              setDisplayText(currentText.slice(0, displayText.length + 1))
            } else {
              setTimeout(() => setIsDeleting(true), pauseTime)
            }
          } else {
            if (displayText.length > 0) {
              setDisplayText(displayText.slice(0, -1))
            } else {
              setIsDeleting(false)
              setTextIndex((prev) => (prev + 1) % texts.length)
            }
          }
        },
        isDeleting ? deleteSpeed : speed,
      )
  
      return () => clearTimeout(timeout)
    }, [displayText, textIndex, isDeleting, texts, speed, deleteSpeed, pauseTime])
  
    return (
      <span>
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    )
  }

const Hero = () => {
    const {language} = useLanguage()
    const t = translations[language]


  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg-px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-indigo-600/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
            <p className="text-purple-400 text-lg mb-4">{t.hero.greetings}</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to indigo-400 bg-clip-text text-transparent">
                {t.hero.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
                <TypewriterText texts={t.hero.titles} speed={100} deleteSpeed={50} pauseTime={2000} />
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"> {t.hero.description}</p>
        </div>
      
    </section>
  )
}

export default Hero
