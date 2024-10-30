import React from "react";

import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Welcome = () => {
  const handleGetStarted = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-[#002D74]">
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-white text-lg  font-bold">
            Welcome to Company's Wi-Fi
          </h1>
          <div>
            <form onSubmit={handleGetStarted}>
              <Link to="/login">
                <button
                  type="submit"
                  className="h-12 px-6 m-2 py-3 px-2 text-sm font-semibold tracking-wide rounded-full text-[#002D74] bg-white focus:outline-none"
                >
                  Accept and Connect
                </button>
              </Link>
            </form>
          </div>
        </div>
        <Footer />
      </div>
      <div className="login-container min-h-screen flex items-center justify-center"></div>
    </>
  );
};

export default Welcome;
