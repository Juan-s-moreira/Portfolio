import React from 'react'
import Header from './layouts/Header'
import Hero from './layouts/Hero'
import { LanguageProvider } from './contexts/LanguageContext'
// import { translations } from './translation'

const App = () => {
  return (
    <LanguageProvider>

      <div className='bg-gradient-to-br h-screen from-slate-900 via-purple-900 to-slate-900'>
        <Header />
        <Hero />
      </div>
    </LanguageProvider>
  )
}

export default App
