import React from "react";
import { Link } from "react-router-dom";
import { BiWifi } from "react-icons/bi";
import logo from "./../assets/images/bkarena.png";

const Welcome = () => {
  return (
    <>
      <div className="h-screen flex items-start justify-center py-6 bg-[#002D74]">
        <div className="flex flex-col w-96 h-full items-center justify-between">
          <div className="flex flex-col">
            <div>
              <BiWifi size={150} className="text-slate-100" />
            </div>
          </div>

          <div className="border border-[#002D74] rounded-md shadow-xl">
            <img src={logo} alt="" className="w-36" />
          </div>

          <div className="w-full flex flex-col items-center space-y-4">
            <div className="px-2">
              <button
                className="relative group overflow-hidden px-8 h-12 rounded-md bg-lime-500
                      before:absolute 
                      before:inset-0 
                      before:bg-lime-600 
                      before:scale-y-[0.1] 
                      before:origin-bottom
                      before:transition
                      before:duration-300
                      hover:before:scale-y-100
                      "
              >
                <span className="relative uppercase text-base text-white">
                  Connect to wifi
                </span>
              </button>
            </div>
            <div className="px-2 w-full">
              <Link to="/homepage">
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
        </div>
      </div>
    </>
  );
};

export default Welcome;
