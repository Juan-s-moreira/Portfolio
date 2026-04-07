import { useState, useEffect } from "react"
import { translations } from "../data/translation"
import { useLanguage } from "../contexts/LanguageContext"
import heroImg from "../assets/juan-santos.jpg"


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
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  )
}

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-indigo-600/10"></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">

        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">

          <p className="text-purple-400 text-lg mb-4 font-semibold tracking-wider uppercase">
            {t.hero.greetings}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t.hero.name}
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center md:justify-start">
            <TypewriterText texts={t.hero.titles} speed={100} deleteSpeed={50} pauseTime={2000} />
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            {t.hero.description}
          </p>


          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
            <a href={language === 'pt' ? '/curriculo_juan_santos.pdf' : '/juan_santos_resume.pdf'} className="px-8 py-3 bg-purple-600 hover:bg-pink-500 text-white rounded-lg font-semibold transition-all duration-300 text-center" download={language === 'pt' ? 'curriculo_juan_santos' : 'juan_santos_resume'} >
              {language === 'pt' ? 'Currículo' : 'Resume'}
            </a>
            <a href="#contact" className="px-8 py-3 bg-transparent border border-purple-500 text-purple-400 hover:bg-pink-500 hover:text-white rounded-lg font-semibold transition-all duration-300 text-center">
              {language === 'pt' ? 'Contato' : 'Contact Me'}
            </a>
          </div>
        </div>


        <div className="w-full md:w-2/5 flex justify-center md:justify-end relative">
          <div className="relative w-[250px] h-[250px] md:w-[360px] md:h-[360px] rounded-full border-1">
            <img
              src={heroImg}
              alt={t.hero.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero