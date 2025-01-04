import React from "react";
import "./ProgressBar.scss";
function ProgressBar({ currentStep, totalSteps }) {
  const progressPercentage = (currentStep / totalSteps) * 100;
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="progress-bar-label">
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
}

export default ProgressBar;
