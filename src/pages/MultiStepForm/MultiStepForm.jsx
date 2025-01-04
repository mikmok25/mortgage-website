import React, { useState } from "react";
import "./MultiStepForm.scss";
import RenewMortgage from "./RenewMortgage/RenewMortgage";
import BuyHomeIcon from "../../assets/BuyHomeIcon.svg";
import RenewMortgageIcon from "../../assets/RenewMortgageIcon.svg";
import RefinanceMortgageIcon from "../../assets/RefinanceMortgageIcon.svg";
import PurchaseIcon from "../../assets/PurchaseIcon2.svg";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import BuyingNewHome from "./BuyingNewHome/BuyingNewHome";
import ReverseMortgage from "./ReverseMortgage/ReverseMortgage";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [selectedType, setSelectedType] = useState("");
  const [formData, setFormData] = useState({});
  const [validationError, setValidationError] = useState("");

  // Handle next step
  const handleNext = () => {
    if (currentStep === 0 && !selectedType) {
      setValidationError("Please select an option to proceed.");
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  // Handle previous step
  const handleBack = () => setCurrentStep((prev) => prev - 1);

  // Handle input changes
  const handleChange = (field, value) => {
    let formattedValue = value;

    if(field === "homeValue" || field === "mortgageBalance" || field === "estimatedPropertyValue") {
      formattedValue = formatNumberWithCommas(value);
    } else if (field === "phoneNumber") {
      formattedValue = formatPhoneNumber(value);
     }


    setFormData((prev) => ({
      ...prev,
      [field]: formattedValue,
    }));
  };

  const formatNumberWithCommas = (value) => {
    if (!value) return "";
    const numericValue = value.replace(/[^0-9]/g, "");
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatPhoneNumber = (value) => {
    if (!value) return "";
    const numericValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    if (numericValue.length <= 3) {
      return numericValue; // Only area code
    } else if (numericValue.length <= 6) {
      return `(${numericValue.slice(0, 3)}) ${numericValue.slice(3)}`; // Area code + first three digits
    } else {
      return `(${numericValue.slice(0, 3)}) ${numericValue.slice(3, 6)}-${numericValue.slice(6, 10)}`; // Full format
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    const cleanData = {
      ...formData,
      homeValue: +formData.homeValue?.replace(/,/g, ""),
      mortgageBalance: +formData.mortgageBalance?.replace(/,/g, ""),
    };
    console.log("Submitting data:", cleanData);
  };
  return (
    <div className="multi-step-form-container">
      <div className="container">
        {/* Step 1: Select Mortgage Type */}
        {currentStep > 0 &&   (
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        )}
        {currentStep === 0 && (
          <div className="step-0">
            <h2>What are you looking for?</h2>
            <div className="flex-row">
              <div
                className={`card-container ${
                  selectedType === "Renew Mortgage" ? "active" : ""
                }`}
              >
                <label>
                  <input
                    type="radio"
                    name="mortgageType"
                    value="Renew Mortgage"
                    checked={selectedType === "Renew Mortgage"}
                    onChange={(e) => {
                      setSelectedType(e.target.value)
                      setTotalSteps(8)
                    }
                    }
                  />
                  <div className="flex-column">
                    <img src={RenewMortgageIcon} alt="Renew Mortgage" />
                    <h4>Renew Mortgage</h4>
                  </div>
                </label>
              </div>
              <div
                className={`card-container ${
                  selectedType === "Buy a New Home" ? "active" : ""
                }`}
              >
                <label>
                  <input
                    type="radio"
                    name="mortgageType"
                    value="Buy a New Home"
                    checked={selectedType === "Buy a New Home"}
                    onChange={(e) => {
                      setSelectedType(e.target.value)
                      setTotalSteps(5)
                    }
                    }
                  />
                  <div className="flex-column">
                    <img src={BuyHomeIcon} alt="Buy Home Icon" />

                    <h4>Buy a new home</h4>
                  </div>
                </label>
              </div>

              <div
                className={`card-container ${
                  selectedType === "Refinance Mortgage" ? "active" : ""
                }`}
              >
                <label>
                  <div className="flex-column">
                    <img src={RefinanceMortgageIcon} alt="" />

                    <input
                      type="radio"
                      name="mortgageType"
                      value="Refinance Mortgage"
                      checked={selectedType === "Refinance Mortgage"}
                      onChange={(e) => setSelectedType(e.target.value)}
                    />

                    <h4>Refinance Mortgage</h4>
                  </div>
                </label>
              </div>
              <div
                className={`card-container ${
                  selectedType === "Reverse Mortgage" ? "active" : ""
                }`}
              >
                <label>
                  <div className="flex-column">
                    <img src={PurchaseIcon} alt="" />
                    <input
                      type="radio"
                      name="reverseMortgage"
                      value="Reverse Mortgage"
                      checked={selectedType === "Reverse Mortgage"}
                      onChange={(e) =>{ 
                        setSelectedType(e.target.value)
                        setTotalSteps(4)
                      }}
                    />
                    <h4>Reverse Mortgage</h4>
                  </div>
                </label>
              </div>
            </div>
            <div id="flex-column">
              {validationError && (
                <p className="error-msg">{validationError}</p>
              )}
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}
       
       
        <RenewMortgage
          selectedType={selectedType}
          currentStep={currentStep}
          formData={formData}
          handleNext={handleNext}
          handleBack={handleBack}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <BuyingNewHome 
           selectedType={selectedType}
           currentStep={currentStep}
           formData={formData}
           handleNext={handleNext}
           handleBack={handleBack}
           handleChange={handleChange}
           handleSubmit={handleSubmit}
        />

        <ReverseMortgage 
           selectedType={selectedType}
           currentStep={currentStep}
           formData={formData}
           handleNext={handleNext}
           handleBack={handleBack}
           handleChange={handleChange}
           handleSubmit={handleSubmit}
           setCurrentStep={setCurrentStep}
           setSelectedType={setSelectedType}
           setFormData={setFormData}
        />
{/*       
        {selectedType === "Refinance Mortgage" && currentStep === 1 && (
          <div className="step-1">
            <h2> Enter your current loan amount</h2>
            <input
              type="number"
              placeholder="Enter current loan amount"
              value={formData.currentLoan || ""}
              onChange={(e) => handleChange("currentLoan", e.target.value)}
            />
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default MultiStepForm;
