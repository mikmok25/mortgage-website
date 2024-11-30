import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import './App.css'
import HeroSection from "./components/HeroSection/HeroSection"
import LogosSection from "./components/LogosSection/LogosSection"
import ServicesSection from "./components/ServicesSection/ServicesSection"
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection"
import AgentsSection from "./components/AgentsSection/AgentsSection"

function App() {

  return (
    <>
    <header>
    <Navbar />
    </header>

    <div className="hero-section">
      <HeroSection />
    </div>

    <div className="logos-section">
      <LogosSection />
    </div>

    <div className="services-section">
      <ServicesSection />
    </div>

    <div className="testimonials-section">
      <TestimonialsSection />
    </div>

    <div className="agents-section">
      <AgentsSection />
    </div>
   
    </>
  )
}

export default App
