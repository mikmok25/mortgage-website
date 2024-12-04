import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./App.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import LogosSection from "./components/LogosSection/LogosSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import AgentsSection from "./components/AgentsSection/AgentsSection";
import FooterSection from "./components/FooterSection/FooterSection";
import CalculatorsSection from "./components/CalculatorsSection/CalculatorsSection";
import MortgagePaymentCalculator from "./components/CalculatorsSection/MortgagePaymentCalculator/MortgagePaymentCalculator";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import BackToTopBtn from "./components/BackToTopBtn/BackToTopBtn";
import HomeAffordabilityCalculator from "./components/CalculatorsSection/MortgagePaymentCalculator/HomeAffordabilityCalculator";
import MortgageAmortizationCalculator from "./components/CalculatorsSection/MortgagePaymentCalculator/MortgageAmortizationCalculator";

function App() {
  const location = useLocation();
  const showHeroSection = location.pathname === "/";
  return (
    <>
      <header>
        <Navbar />
      </header>

      {showHeroSection && (
        <>
        <div className="hero-section" id="hero-section">
          <HeroSection />
        </div>
         <div className="logos-section">
         <LogosSection />
       </div>
 
       <div className="services-section" id="services">
         <ServicesSection />
       </div>
 
       <div className="testimonials-section" id="testimonials">
         <TestimonialsSection />
       </div>
 
       <div className="agents-section" id="agents">
         <AgentsSection />
       </div>
       </>
      )}

     

      <div className="calculators-section" id="calculators"
      style={{margin: showHeroSection ? "75px 0 75px 0" : "140px 0"}}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CalculatorsSection />
                <Outlet />
              </>
            }
          >
            <Route
              path="/mortgage-payment-calculator"
              element={<MortgagePaymentCalculator />}
            />
            <Route
              path="/home-affordability-calculator"
              element={<HomeAffordabilityCalculator />}
            />
            <Route
              path="/mortgage-amortization-calculator"
              element={<MortgageAmortizationCalculator />}
            />
          </Route>
        </Routes>
      </div>

      <BackToTopBtn />

      <div className="footer-section">
        <FooterSection />
      </div>
    </>
  );
}

export default App;
