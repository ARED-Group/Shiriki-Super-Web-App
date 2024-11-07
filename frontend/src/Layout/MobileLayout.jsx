import React from "react";
import Header from "../Components/Header";
import BottomNavBar from "../Components/BottomNavBar";
import { Outlet } from "react-router-dom";

const MobileLayout = () => {
  return (
    <div className="flex flex-col border-yellow-400" style={{ height: "100%" }}>
      <div>
        <Header />
      </div>

      <div className="grow">{<Outlet />}</div>
      <div className="fixed bottom-0 left-0 w-full bg-[#002D74] text-white py-2 px-4 lg:hidden p-4">
        <BottomNavBar />
      </div>
    </div>
  );
};

export default MobileLayout;
