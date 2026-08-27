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

function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <ProgramFacts />
        <AboutCareer />
        <WhyPsychTech />
        <GettingStarted />
        <Contact />
        <Donate />
      </main>
      <Footer />
    </div>
  )
}

export default App
