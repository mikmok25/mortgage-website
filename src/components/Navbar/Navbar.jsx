import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-row">
          <img
            src="https://cccapital.ca/images/logo/CCC-Caribbean-Connect-Capital-Logo-44.png"
            alt="CCC-Logo"
            className="navbar-logo"
          />
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">AGENTS</a></li>
            <li><a href="#">INFORMATION</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT US</a> </li>
          </ul>
        </div>
    </div>
  );
}

export default Navbar;
