import React from "react";
import router from "../../assets/images/router.png";
import wifi from "../../assets/images/wifi.png";
import gemstone from "../../assets/images/gemstone.jpg";
import { useNavigate } from "react-router-dom";
import BottomNavBar from "../BottomNavBar.jsx";

const WifiService = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const toServices = () => {
    navigate("/services");
  };

  return (
    <div
      style={{
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
      }}
      className="max-w-lg mx-auto h-screen p-8 bg-white shadow-2xl rounded-lg flex flex-col items-center justify-between"
    >
      {/* Back Button and Header */}
      <div className="w-full flex items-center justify-between mb-8">
        <button onClick={goBack} className="text-gray-600 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <p className="flex items-center text-gray-700 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          127.0.0.1:8000
        </p>
      </div>

      {/* Logo and Title */}
      <header className="text-center mb-12">
        <img
          src={router}
          alt="Router Logo"
          className="w-30 mx-auto mb-6 shadow-lg rounded-lg transform hover:scale-105 transition"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Connect to Wifi</h1>
        <img
          src={wifi}
          alt="WiFi Icon"
          className="w-12 mx-auto shadow-sm rounded-lg"
        />
      </header>

      {/* Connect Button */}
      <form className="w-full">
        <button
          type="button"
          onClick={toServices}
          className="w-full py-3  text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition"
          style={{
            boxShadow:
              "0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",
            background: "linear-gradient(to bottom, #4299e1, #3182ce)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
        >
          Connect
        </button>
      </form>

      {/* Footer */}
      <footer className="w-full mt-12 flex flex-col items-center gap-4">
        <img
          src={gemstone}
          alt="Gemstone"
          className="w-12 shadow-md rounded-lg transform hover:rotate-6 transition"
        />
        <p className="text-gray-500 font-medium">
          Don’t have an account? <span className="text-gray-900 font-bold cursor-pointer">Sign in</span>
        </p>
      </footer>

        {/* Bottom Navigation */}
        <div className="sticky bottom-0 bg-white shadow-lg">
                <BottomNavBar />
            </div>
    </div>
  );
};

export default WifiService;
