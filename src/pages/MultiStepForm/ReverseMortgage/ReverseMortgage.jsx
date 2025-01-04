import React from "react";
import "./ReverseMortgage.scss";

function ReverseMortgage({
  selectedType,
  currentStep,
  formData,
  handleNext,
  handleBack,
  handleChange,
  setCurrentStep,
  handleSubmit,
  setSelectedType,
  setFormData,
}) {
  const initialFormData = {
    homeOwnerAge: "",
    homeOwnerGender: "",
    propertyType: "",
    locationType: "",
    estimatedPropertyValue: "",
  };
  const handleReset = () => {
    setCurrentStep(1);
    setSelectedType("Reverse Mortgage");
    setFormData(initialFormData);
  };
  return (
    <div className="reverse-mortgage-container">
      {selectedType === "Reverse Mortgage" && currentStep > 0 && (
        <div className="page-title">
          <h1>Reverse Mortgage Calculator</h1>
          <p>
            Please fill out the following details to determine how much wealth
            your client could unlock
          </p>
        </div>
      )}

      {selectedType === "Reverse Mortgage" && currentStep === 1 && (
        <>
          <div className="step-1">
            <div className="flex-column">
              <div className="input-field">
                <label htmlFor="homeOwnerAge" className="input-label">
                  Homeowner Age
                </label>
                <input
                  type="number"
                  value={formData.homeOwnerAge || ""}
                  onChange={(e) => handleChange("homeOwnerAge", e.target.value)}
                  id="homeOwnerAge"
                />
              </div>

              <div className="input-field">
                <label htmlFor="homeOwnerGender" className="input-label">
                  Homeowner 1 Gender
                </label>

                <select
                  name="homeOwnerGender"
                  id="homeOwnerGender"
                  value={formData.homeOwnerGender || ""}
                  onChange={(e) =>
                    handleChange("homeOwnerGender", e.target.value)
                  }
                >
                  <option value="">Select Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div>
                <button onClick={handleBack} className="back-btn">
                  Back
                </button>
                <button onClick={handleNext}>Next</button>
              </div>
            </div>
          </div>
        </>
      )}

      {selectedType === "Reverse Mortgage" && currentStep === 2 && (
        <>
          <div className="step-2">
            <div className="flex-column">
              <div className="input-field">
                <label htmlFor="homeOwner2Age" className="input-label">
                  Homeowner 2 Age
                </label>
                <input
                  type="number"
                  value={formData.homeOwner2Age || ""}
                  onChange={(e) =>
                    handleChange("homeOwner2Age", e.target.value)
                  }
                  id="homeOwnerAge"
                />
              </div>

              <div className="input-field">
                <label htmlFor="homeOwner2Gender" className="input-label">
                  Homeowner 2 Gender
                </label>

                <select
                  name="homeOwner2Gender"
                  id="homeOwner2Gender"
                  value={formData.homeOwner2Gender || ""}
                  onChange={(e) =>
                    handleChange("homeOwner2Gender", e.target.value)
                  }
                >
                  <option value="">Select Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div>
                <button onClick={handleBack} className="back-btn">
                  Back
                </button>
                <button onClick={handleNext}>Next</button>
              </div>
            </div>
          </div>
        </>
      )}

      {selectedType === "Reverse Mortgage" && currentStep === 3 && (
        <>
          <div className="step-2">
            <div className="flex-column">
              <div className="input-field">
                <label htmlFor="propertyType" className="input-label">
                  Property Type
                </label>

                <select
                  name="propertyType"
                  id="propertyType"
                  value={formData.propertyType || ""}
                  onChange={(e) => handleChange("propertyType", e.target.value)}
                >
                  <option value="">Select Property Type</option>
                  <option value="Single Family Detached">
                    Single Family Detached
                  </option>
                  <option value="Semi-Detached">Semi Detached</option>
                  <option value="Residential Duplex">Residential Duplex</option>
                  <option value="Residential town or row house">
                    Residential town or row house
                  </option>
                  <option value="Residential Condominium">
                    Residential Condominium
                  </option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="input-field">
                <label htmlFor="locationType" className="input-label">
                  Location Type
                </label>

                <select
                  name="locationType"
                  id="locationType"
                  value={formData.locationType || ""}
                  onChange={(e) => handleChange("locationType", e.target.value)}
                >
                  <option value="">Select Location Type</option>
                  <option value="Metropolitan or Large Urban">
                    Metropolitan or Large Urban
                  </option>
                  <option value="Small Urban">Small Urban</option>
                  <option value="Rural">Rural</option>
                </select>
              </div>

              <div>
                <button onClick={handleBack} className="back-btn">
                  Back
                </button>
                <button onClick={handleNext}>Next</button>
              </div>
            </div>
          </div>
        </>
      )}
      {selectedType === "Reverse Mortgage" && currentStep === 4 && (
        <>
          <div className="step-3">
            <div className="flex-column">
              <div className="input-field">
                <label htmlFor="estimatedPropertyValue" className="input-label">
                  Estimated Property Value
                </label>
                <input
                  type="text"
                  value={formData.estimatedPropertyValue || ""}
                  onChange={(e) =>
                    handleChange("estimatedPropertyValue", e.target.value)
                  }
                  id="estimatedPropertyValue"
                />
              </div>

              <div>
                <button onClick={handleBack} className="back-btn">
                  Back
                </button>
                <button onClick={handleNext}>Calculate Quote</button>
              </div>
            </div>
          </div>
        </>
      )}

      {selectedType === "Reverse Mortgage" && currentStep === 5 && (
        <div className="step-4">
          <div className="flex-column">
            <h1>Great Great! Your client may be eligible for</h1>
            <h2>$000,000</h2>
            <p>
              This is an estimate only based on the information provided, and is
              subject to CCCapital credit review. Please contact us at
              1-866-882-5666 for an accurate quote.
            </p>

            <div>
              <button onClick={handleBack} className="back-btn">
                Back
              </button>
              <button onClick={handleReset}>Retry</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReverseMortgage;
