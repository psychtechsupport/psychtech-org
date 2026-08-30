import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProgramFacts from './components/ProgramFacts.jsx'
import AboutCareer from './components/AboutCareer.jsx'
import WhyPsychTech from './components/WhyPsychTech.jsx'
import GettingStarted from './components/GettingStarted.jsx'
import Contact from './components/Contact.jsx'
import Donate from './components/Donate.jsx'
import Footer from './components/Footer.jsx'
import TestQuestionsGate from './components/TestQuestionsGate.jsx'

function App() {
  // Shared open/close state so both the header "Donate" link and the
  // Donate section button open the same TestQuestionsGate instance.
  const [isGateOpen, setIsGateOpen] = useState(false)

  return (
    <div className="site">
      <Header onDonateClick={() => setIsGateOpen(true)} />
      <main>
        <Hero />
        <ProgramFacts />
        <AboutCareer />
        <WhyPsychTech />
        <GettingStarted />
        <Contact />
        <Donate onDonateClick={() => setIsGateOpen(true)} />
      </main>
      <Footer />

      {isGateOpen && <TestQuestionsGate onClose={() => setIsGateOpen(false)} />}
    </div>
  )
}

export default App
