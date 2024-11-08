import React, { useContext, useEffect, useState } from "react";
import { TimeContext } from "../context/WifiTimeContext";

const Header = () => {
  const { timeLeft, isConnected } = useContext(TimeContext);
  const [message, setMessage] = useState(
    "Connect to wifi to see live information"
  );

  // Format time in MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (isConnected && timeLeft > 0) {
      setMessage(`Connection time left: ${formatTime(timeLeft)}`);
    } else {
      setMessage("Connect to wifi to see live information");
    }
  }, [isConnected, timeLeft]);

  return (
    <header className="bg-[#002D74] text-white py-2 md:py-3 px-6 sticky top-0 z-40">
      <div
        className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
          Wifi
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">
          {message}
        </span>
        <svg
          className="fill-current opacity-75 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
