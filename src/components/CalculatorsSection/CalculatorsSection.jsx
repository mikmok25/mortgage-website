import React from "react";
import "./CalculatorsSection.scss";
import { useNavigate } from "react-router-dom";
import AffordabilityIcon from "../../assets/AffordabilityIcon.svg";
import PurchaseIcon from "../../assets/PurchaseIcon.svg";

function CalculatorsSection() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };
  return (
    <div className="container">
      <div className="flex-row">
        <div
          className="calculator-container"
          onClick={() => handleRedirect("/mortgage-payment-calculator")}
        >
          <div className="flex-row">
            <div className="image-container">
              <img src={PurchaseIcon} alt="Purchase-Icon" />
            </div>
            <div className="calculator-info">
              <h2>
                Mortgage Payment <span className="break-point">Calculator</span>
              </h2>
              <p>
                Estimate your monthly{" "}
                <span className="break-point">payment</span>
              </p>
            </div>
          </div>
        </div>
        <div className="calculator-container"
        onClick={() => handleRedirect("/home-affordability-calculator")}
        >
          <div className="flex-row">
            <div className="image-container">
              <img src={AffordabilityIcon} alt="Affordability-Icon" />
            </div>
            <div className="calculator-info">
              <h2>
                Home Affordability{" "}
                <span className="break-point">Calculator</span>
              </h2>
              <p>
                See how much home you can{" "}
                <span className="break-point">afford</span>
              </p>
            </div>
          </div>
        </div>
        <div className="calculator-container"
        onClick={() => handleRedirect("/mortgage-amortization-calculator")}
        >
          <div className="flex-row">
            <div className="image-container">
              <img src={AffordabilityIcon} alt="Affordability-Icon" />
            </div>
            <div className="calculator-info">
              <h2>
                Mortgage Amortization{" "}
                <span className="break-point">Calculator</span>
              </h2>
              <p>
                Estimate your amortization{" "}
                <span className="break-point">schedule</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorsSection;
