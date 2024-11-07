// TimeContext.js
import React, { createContext, useState, useContext } from "react";

// Create a context for the time state
const TimeContext = createContext();

// Custom hook to use the TimeContext
export const useTimeContext = () => {
  return useContext(TimeContext);
};

// TimeProvider component to wrap around the app
export const TimeProvider = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  const setTime = (timeInMinutes) => {
    setTimeLeft(timeInMinutes * 60); // Convert minutes to seconds
  };

  return (
    <TimeContext.Provider value={{ timeLeft, setTime }}>
      {children}
    </TimeContext.Provider>
  );
};
