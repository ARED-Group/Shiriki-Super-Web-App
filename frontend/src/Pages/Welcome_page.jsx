import React from "react";
import { Link } from "react-router-dom";
import ConnectForFree from "../Components/connectToWifi/connectForFree";

const Welcome = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center space-y-2 py-6 bg-[#002D74]">
        <ConnectForFree />
        <div className="px-2 w-96">
          <Link to="/services">
            <button className="relative group overflow-hidden px-6 w-full h-12 rounded-full flex space-x-2 items-center justify-center bg-gradient-to-r from-blue-800 to-blue-500 hover:to-purple-600">
              <span className="relative text-sm text-white">Later</span>
              <div className="flex items-center -space-x-3 translate-x-3">
                <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
