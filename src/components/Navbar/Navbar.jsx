import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const yOffset = -120; // Adjust this value for the height of your navbar
        const yPosition =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: yPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        setOpacity(scrollPercentage >= 15 ? 0.85 : 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="navbar" style={{backgroundColor: `rgba(255, 255, 255, ${opacity})`}}>
        <div className="navbar-row">
          <img
            src="https://cccapital.ca/images/logo/CCC-Caribbean-Connect-Capital-Logo-44.png"
            alt="CCC-Logo"
            className="navbar-logo"
          />
        <ul>
          <li>
            <Link to="/#hero-section">HOME</Link>
          </li>
          <li>
            <Link to="/#services">SERVICES</Link>
          </li>
          <li>
            <Link to="/#testimonials">TESTIMONIALS</Link>
          </li>
          <li>
            <Link to="/#agents">AGENTS</Link>
          </li>
          <li>
            <Link to="/#calculators">CALCULATORS</Link>
          </li>
          <li>
            <Link to="#">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
