import React from "react";
import "./BuyingNewHome.scss";

function BuyingNewHome({
  selectedType,
  currentStep,
  formData,
  handleNext,
  handleBack,
  handleChange,
  handleSubmit,
}) {
  return (
    <div className="buying-new-home-container">
      {selectedType === "Buy a New Home" && currentStep === 1 && (
        <div className="flex-column" style={{ textAlign: "center" }}>
          <h1>Features Coming Soon!</h1>

          <button className="back-btn" onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
}

export default BuyingNewHome;
