import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import md5 from "md5";
import axios from "axios"; // Import Axios
import successRefresh from "./../../assets/images/successRefreshToken.png";
import { Buffer } from "buffer";

const steps = ["Enter Phone Number", "Submit Token", "Success"];

const WifiTimeStepper = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleNext = () => {
    if (activeStep === 0) {
      handleSubmit(onSubmitPhoneNumber)();
    } else if (activeStep === 1) {
      handleSubmit(onSubmitToken)();
    } else {
      onClose();
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const onSubmitPhoneNumber = (data) => {
    console.log("Phone Number:", data.phoneNumber);
    setActiveStep((prev) => prev + 1);
  };

  const onSubmitToken = async (data) => {
    const challenge = "hardcodedchallenge"; // Replace with actual challenge value
    const uamsecret = "greatsecret"; // Replace with your secret key
    const userToken = data.token;

    console.log("Submitted Token:", userToken);

    // Debugging steps
    const debug = [];
    debug.push(`Step 1: Received token: ${userToken}`);
    debug.push(`Step 2: Using hardcoded challenge: ${challenge}`);

    // Generate the new challenge
    const hexchal = Buffer.from(challenge, "hex");
    debug.push(
      `Step 3: Packed challenge (hexchal): ${hexchal.toString("hex")}`
    );

    const newchal = md5(hexchal + uamsecret);
    debug.push(`Step 4: New challenge (newchal): ${newchal}`);

    // Generate the response
    const response = md5(`\0${userToken}${newchal}`);
    debug.push(`Step 5: Generated response: ${response}`);

    // Create the final URL
    const url = new URL("http://192.168.182.1:4990/logon");
    url.searchParams.append("username", userToken);
    url.searchParams.append("response", response);
    url.searchParams.append("userurl", ""); // Add userurl if needed
    url.searchParams.append("challenge", challenge);

    const maskedUrl = url.href.replace(/username=.*?&/, "username=MASKED&");
    debug.push(`Step 6: Final URL (sensitive info masked): ${maskedUrl}`);

    // Make Axios GET request
    try {
      const response = await axios.get(url.href, {
        headers: {
          "X-Debug-Info": JSON.stringify(debug), // Pass debug info in a custom header
        },
      });
      console.log("Server Response:", response.data);
      debug.push(`Step 7: Server responded successfully.`);

      // Move to success step
      setActiveStep((prev) => prev + 1);
    } catch (error) {
      console.error("Error during authentication request:", error);
      debug.push(`Step 7: Error - ${error.message}`);
      alert("Authentication failed. Please try again.");
    }

    // Optionally store debug info in sessionStorage for troubleshooting
    sessionStorage.setItem("debugInfo", JSON.stringify(debug));
  };

  return (
    <div className="flex flex-col items-center justify-between h-full w-full">
      {/* Stepper navigation */}
      <div className="flex justify-between w-full px-2">
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
            {index < activeStep ? (
              <FaCheckCircle size={28} className="text-green-500" />
            ) : (
              <span className="font-semibold text-base">{step}</span>
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="flex-1 mb-6 p-4 bg-slate-100 rounded-sm text-black w-full">
        {activeStep === 0 && (
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="block mb-2">Phone Number:</label>
            <input
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
              type="tel"
              className="border p-2 rounded w-full"
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </form>
        )}
        {activeStep === 1 && (
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="block mb-2">Enter Token:</label>
            <input
              {...register("token", { required: "Token is required" })}
              type="text"
              className="border p-2 rounded w-full"
            />
            {errors.token && (
              <p className="text-red-500">{errors.token.message}</p>
            )}
          </form>
        )}
        {activeStep === 2 && (
          <div className="text-center h-full">
            <p className="text-green-600 font-thin text-lg">
              You are back online
            </p>
            <img
              src={successRefresh}
              className="py-2"
              alt="Success refresh token"
            />
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Finish
            </button>
          </div>
        )}
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
        {activeStep < 2 && (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            {activeStep === steps.length - 2 ? "Submit" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default WifiTimeStepper;
