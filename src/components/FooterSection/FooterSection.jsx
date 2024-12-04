import React from "react";
import "./FooterSection.scss";
import FooterLogo from "../../assets/FooterLogo.png";

function FooterSection() {
  return (
    <div className="container">
      <div className="flex-row">
        <div className="image-container">
          <img src={FooterLogo} alt="footer-logo" />
        </div>
        <div className="our-services">
          <h2>OUR SERVICES</h2>
          <ul>
            <li>
              <a href="#">Home Loans</a>
            </li>
            <li>
              <a href="#">Reverse Mortgage</a>
            </li>
            <li>
              <a href="#">Mortgage Refinancing</a>
            </li>
            <li>
              <a href="#">Mortgage Affordability</a>
            </li>
          </ul>
        </div>
        <div className="quick-links">
          <h2>QUICK LINKS</h2>
          <ul>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Agents</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="quick-contact">
          <h2>QUICK CONTACT</h2>
          <ul>
            <li>
              <a href="#">4300 Steeles Ave West #33, Vaughan, ON. L4L 4C2, CA </a>
            </li>
            <li>
              <a href="#">416-904-9597</a>
            </li>
            <li>
              <a href="#">dalston.spencer@cccapital.ca</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
