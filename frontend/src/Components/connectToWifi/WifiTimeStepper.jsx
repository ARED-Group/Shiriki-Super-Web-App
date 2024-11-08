import React, { useState } from "react";
import { FaCheckCircle, FaLock } from "react-icons/fa"; // Verified and Padlock icons

const steps = ["Select Plan", "Confirm Details", "Payment", "Get Connected"];

const WifiTimeStepper = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="flex flex-col items-center justify-between h-full w-full">
      {/* Stepper navigation */}
      <div className="flex justify-between w-full px-2">
        {/* Only show previous, current, and next steps on small screens */}
        {steps.map((step, index) => (
          <div
            key={step}
            className={`flex-1 text-center py-2 ${
              index === activeStep
                ? "text-blue-500 font-semibold"
                : index < activeStep
                ? "text-blue-500"
                : "text-gray-500"
            }`}
          >
            {/* Show a verified badge for completed steps */}
            {index < activeStep ? (
              <div className="flex justify-center mb-2">
                <FaCheckCircle size={28} className="text-green-500" />
              </div>
            ) : null}

            {/* Show padlock icon for upcoming steps */}
            {index > activeStep ? (
              <div className="flex justify-center mb-2">
                <FaLock size={20} className="text-gray-500" />
              </div>
            ) : null}

            {/* Only show step name for the current step */}
            {index === activeStep && (
              <span className="block font-semibold text-base">{step}</span>
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="flex-1 mb-6 p-4 bg-slate-100 rounded-sm text-black w-full">
        <h3 className="text-lg font-semibold">
          Step {activeStep + 1}: {steps[activeStep]}
        </h3>
        {/* Content for each step */}
        <div className="mt-2">
          <p>
            {/* Placeholder content for each step */}
            Content for {steps[activeStep]}
          </p>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between w-full px-2">
        <button
          onClick={handleBack}
          disabled={activeStep === 0}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg disabled:bg-gray-400"
        >
          Back
        </button>
        <button
          onClick={activeStep === steps.length - 1 ? onClose : handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default WifiTimeStepper;
