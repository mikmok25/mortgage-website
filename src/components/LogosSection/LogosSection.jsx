import React from "react";
import "./LogosSection.scss";
import HandShake from "../../assets/HandShake.png";

function LogosSection() {
  return (
    <div className="container">
        
        <div className="flex-column">
            <img src={HandShake} alt="" />
            <h2>OUR LENDERS, WHO TRUSTS OUR SERVICES</h2>
        </div>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img
              src="https://cccapital.ca/images/logo/CCC-Caribbean-Connect-Capital-Logo-44.png"
              alt="Logo1"
            />
          </div>
          <div className="slide">
            <img
              src="https://cccapital.ca/images/lenders/CMLS-Lending-To-CCC-Caribbean-Connect-Capital.jpg"
              alt="Logo2"
            />
          </div>
          <div className="slide">
            <img
              src="https://cccapital.ca/images/lenders/CMLS-Lending-To-CCC-Caribbean-Connect-Capital.jpg"
              alt="Logo3"
            />
          </div>
          <div className="slide">
            <img
              src="https://cccapital.ca/images/lenders/Equitable-Bank-Lending-To-CCC-Caribbean-Connect-Capital.jpg"
              alt="Logo4"
            />
          </div>
          <div className="slide">
            <img
              src="https://cccapital.ca/images/lenders/First-Ontario-Credit-Union-Lending-To-CCC-Caribbean-Connect-Capital.jpg"
              alt="Logo5"
            />
          </div>
          <div className="slide">
            <img
              src="https://cccapital.ca/images/lenders/First-Ontario-Credit-Union-Lending-To-CCC-Caribbean-Connect-Capital.jpg"
              alt="Logo6"
            />
          </div>
          {/* Duplicate logos for seamless looping */}
          <div className="slide">
            <img
              src="https://cccapital.ca/images/logo/CCC-Caribbean-Connect-Capital-Logo-44.png"
              alt="Logo1"
            />
            <p>13.8%</p>
          </div>
          <div className="slide">
            <img
              src="https://cccapital.ca/images/lenders/CMLS-Lending-To-CCC-Caribbean-Connect-Capital.jpg"
              alt="Logo2"
            />
            <p>13.8%</p>
          </div>
          <div className="slide">
            <img
              src="https://cccapital.ca/images/lenders/CMLS-Lending-To-CCC-Caribbean-Connect-Capital.jpg"
              alt="Logo3"
            />
            <p>13.8%</p>
          </div>
          <div className="slide">
            <img
              src="https://cccapital.ca/images/lenders/Equitable-Bank-Lending-To-CCC-Caribbean-Connect-Capital.jpg"
              alt="Logo4"
            />
            <p>13.8%</p>
          </div>
          <div className="slide">
            <img
              src="https://cccapital.ca/images/lenders/First-Ontario-Credit-Union-Lending-To-CCC-Caribbean-Connect-Capital.jpg"
              alt="Logo5"
            />
            <p>13.8%</p>
          </div>
          <div className="slide">
            <img
              src="https://cccapital.ca/images/lenders/First-Ontario-Credit-Union-Lending-To-CCC-Caribbean-Connect-Capital.jpg"
              alt="Logo6"
            />
            <p>13.8%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogosSection;
