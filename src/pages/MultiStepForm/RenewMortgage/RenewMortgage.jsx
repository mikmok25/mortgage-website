import React, { useState } from "react";
import "./RenewMortgage.scss";

function RenewMortgage({
  selectedType,
  currentStep,
  formData,
  handleNext,
  handleBack,
  handleChange,
  handleSubmit,
}) {
  const [validationError, setValidationError] = useState("");
  const totalSteps = 8;

  const handleNextWithValidation = () => {
    // Validate required fields for each step
    if (currentStep === 1 && !formData.timeframe) {
      setValidationError("Please select an option to proceed.");
      return;
    }

    if (currentStep === 2 && !formData.homeValue) {
      setValidationError("Please enter the home value to proceed.");
      return;
    }

    if (currentStep === 3 && !formData.mortgageBalance) {
      setValidationError("Please enter your mortgage balance to proceed.");
      return;
    }

    if (currentStep === 4 && !formData.creditProfile) {
      setValidationError("Please select your credit profile to proceed.");
      return;
    }
    if (currentStep === 5 && (!formData.firstName || !formData.lastName)) {
      setValidationError("Please fill the field.");
      return;
    }

    // Clear validation error and move to the next step
    setValidationError("");
    handleNext();
  };
  return (
    <div className="renew-mortgage-container">
      {selectedType === "Renew Mortgage" && currentStep === 1 && (
        <div className="step-1">
          <h2>When does your mortgage renew?</h2>
          <div className="flex-column">
            <div className="option-container">
              <label>
                <input
                  type="radio"
                  name="timeframe"
                  value="Within 30 days"
                  checked={formData.timeframe === "Within 30 days"}
                  onChange={(e) => handleChange("timeframe", e.target.value)}
                />
                Within 30 days
              </label>
            </div>
            <div className="option-container">
              <label>
                <input
                  type="radio"
                  name="timeframe"
                  value="1 - 4 months"
                  checked={formData.timeframe === "1 - 4 months"}
                  onChange={(e) => handleChange("timeframe", e.target.value)}
                />
                1 - 4 months
              </label>
            </div>
            <div className="option-container">
              <label>
                <input
                  type="radio"
                  name="timeframe"
                  value="5 - 6 months"
                  checked={formData.timeframe === "5 - 6 months"}
                  onChange={(e) => handleChange("timeframe", e.target.value)}
                />
                5 - 6 months
              </label>
            </div>
            <div className="option-container">
              <label>
                <input
                  type="radio"
                  name="timeframe"
                  value="7+ months"
                  checked={formData.timeframe === "7+ months"}
                  onChange={(e) => handleChange("timeframe", e.target.value)}
                />
                7+ months
              </label>
            </div>

            {validationError && <p className="error-msg">{validationError}</p>}
            <div>
              <button onClick={handleBack} className="back-btn">
                Back
              </button>
              <button onClick={handleNextWithValidation}>Next</button>
            </div>
          </div>
        </div>
      )}

      {selectedType === "Renew Mortgage" && currentStep === 2 && (
        <div className="step-2">
          <h2>Estimated Home Value</h2>
          <div className="flex-column">
            <div className="input-field">
              <label htmlFor="homeValue" className="input-label">
                Home Value
              </label>
              <input
                type="text"
                value={formData.homeValue || ""}
                onChange={(e) => handleChange("homeValue", e.target.value)}
                id="homeValue"
              />
            </div>
            {validationError && <p className="error-msg">{validationError}</p>}
            <div>
              <button onClick={handleBack} className="back-btn">
                Back
              </button>
              <button onClick={handleNextWithValidation}>Next</button>
            </div>
          </div>
        </div>
      )}

      {selectedType === "Renew Mortgage" && currentStep === 3 && (
        <div className="step-3">
          <h2>Mortgage Balance</h2>
          <div className="flex-column">
            <div className="input-field">
              <label htmlFor="mortgageBalance" className="input-label">
                Mortgage Balance
              </label>
              <input
                type="text"
                value={formData.mortgageBalance || ""}
                onChange={(e) =>
                  handleChange("mortgageBalance", e.target.value)
                }
                id="mortgageBalance"
              />
            </div>
            {validationError && <p className="error-msg">{validationError}</p>}
            <div>
              <button onClick={handleBack} className="back-btn">
                Back
              </button>
              <button onClick={handleNextWithValidation}>Next</button>
            </div>
          </div>
        </div>
      )}

      {selectedType === "Renew Mortgage" && currentStep === 4 && (
        <div className="step-4">
          <h2>Your Credit Profile</h2>
          <div className="flex-column">
            <div className="option-container">
              <label>
                <input
                  type="radio"
                  name="creditProfile"
                  value="720+"
                  checked={formData.creditProfile === "720+"}
                  onChange={(e) =>
                    handleChange("creditProfile", e.target.value)
                  }
                />
                720+
              </label>
            </div>
            <div className="option-container">
              <label>
                <input
                  type="radio"
                  name="creditProfile"
                  value="720+"
                  checked={formData.creditProfile === "720+"}
                  onChange={(e) =>
                    handleChange("creditProfile", e.target.value)
                  }
                />
                660 - 719
              </label>
            </div>
            <div className="option-container">
              <label>
                <input
                  type="radio"
                  name="creditProfile"
                  value="720+"
                  checked={formData.creditProfile === "720+"}
                  onChange={(e) =>
                    handleChange("creditProfile", e.target.value)
                  }
                />
                620 - 659
              </label>
            </div>
            <div className="option-container">
              <label>
                <input
                  type="radio"
                  name="creditProfile"
                  value="720+"
                  checked={formData.creditProfile === "720+"}
                  onChange={(e) =>
                    handleChange("creditProfile", e.target.value)
                  }
                />
                580 - 619
              </label>
            </div>
            <div className="option-container">
              <label>
                <input
                  type="radio"
                  name="creditProfile"
                  value="720+"
                  checked={formData.creditProfile === "720+"}
                  onChange={(e) =>
                    handleChange("creditProfile", e.target.value)
                  }
                />
                579 or below
              </label>
            </div>
            {validationError && <p className="error-msg">{validationError}</p>}

            <div className="button-container">
              <button onClick={handleBack} className="back-btn">
                Back
              </button>
              <button onClick={handleNextWithValidation}>Next</button>
            </div>
          </div>
        </div>
      )}
      {selectedType === "Renew Mortgage" && currentStep === 5 && (
        <div className="step-5">
          <h2>Your Name</h2>
          <div className="flex-column">
            <div className="input-field">
              <label htmlFor="firstName" className="input-label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName || ""}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="lastName" className="input-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName || ""}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
            {validationError && <p className="error-msg">{validationError}</p>}
            <div>
              <button onClick={handleBack} className="back-btn">
                Back
              </button>
              <button onClick={handleNextWithValidation}>Next</button>
            </div>
          </div>
        </div>
      )}

      {selectedType === "Renew Mortgage" && currentStep === 6 && (
        <div className="step-6">
          <h2>Your Email</h2>
          <div className="flex-column">
            <div className="input-field">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email || ""}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            {validationError && <p className="error-msg">{validationError}</p>}
            <div>
              <button onClick={handleBack} className="back-btn">
                Back
              </button>
              <button onClick={handleNextWithValidation}>Next</button>
            </div>
          </div>
        </div>
      )}
      {selectedType === "Renew Mortgage" && currentStep === 7 && (
        <div className="step-7">
          <h2>Your Phone Number</h2>
          <div className="flex-column">
            <div className="input-field">
              <label htmlFor="phoneNumber" className="input-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber || ""}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
              />
            </div>
            {validationError && <p className="error-msg">{validationError}</p>}
            <div>
              <button onClick={handleBack} className="back-btn">
                Back
              </button>
              <button onClick={handleNextWithValidation}>Next</button>
            </div>
          </div>
        </div>
      )}

      {selectedType === "Renew Mortgage" && currentStep === 8 && (
        <div className="step-8">
          <h2>What province is your property located in?</h2>
          <div className="flex-column">
            <div className="input-field">
              <label htmlFor="province" className="input-label">
                Province
              </label>

              <select 
              name="province" 
              id="province"
              value={formData.province || ""}
              onChange={(e) => handleChange("province", e.target.value)}
              >
                <option value="">Select Province</option>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="NB">New Brunswick</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="NT">Northwest Territories</option>
                <option value="NS">Nova Scotia</option>
                <option value="NU">Nunavut</option>
                <option value="ON">Ontario</option>
                <option value="PE">Prince Edward Island</option>
                <option value="QC">Quebec</option>
                <option value="SK">Saskatchewan</option>
                <option value="YT">Yukon</option>
              </select>
            </div>
            {validationError && <p className="error-msg">{validationError}</p>}
            <div>
              <button onClick={handleBack} className="back-btn">
                Back
              </button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RenewMortgage;
