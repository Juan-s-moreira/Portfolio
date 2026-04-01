import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'

const App = () => {
  return (
    <LanguageProvider>

      <div className='bg-gradient-to-br min-h-screen from-slate-900 via-purple-900 to-slate-900'>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />

        </main>
      </div>
    </LanguageProvider>
  )
}

export default App
