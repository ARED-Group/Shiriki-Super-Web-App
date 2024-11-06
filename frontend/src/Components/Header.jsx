import React from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "../Components/LanguageSelector";

const Header = () => {
  return (
    <header className="bg-[#002D74] text-white py-2 md:py-3 px-6 sticky top-0 z-40">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          {/* <button className="focus:outline-none mr-4">
            <i className="fas fa-bars"></i>
          </button>
          <h1 className="text-white text-lg md:text-xl font-bold">LOGO</h1> */}
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="hidden md:flex rounded-md border-2 border-blue-500 overflow-hidden max-w-md font-[sans-serif]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none bg-white text-gray-600 text-sm px-2 md:px-4 py-2 md:py-3"
            />
            <button
              type="button"
              className="flex items-center justify-center bg-[#007bff] px-3 md:px-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="fill-white"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
              </svg>
            </button>
          </div>
          {/* Changing language */}
          <LanguageSelector />
          {/* Notification icon */}
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </div>
          <Link
            to="/homepage"
            className="flex flex-col items-center hidden md:flex"
          >
            {/* Voice assistance icon */}
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                />
              </svg>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
