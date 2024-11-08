import React from "react";
import ConnectForFree from "../connectToWifi/connectForFree";
const WifiService = () => {
  return (
    <div className="h-5/6 flex flex-col items-center justify-center space-y-2 py-6">
      <ConnectForFree />
    </div>
  );
};

export default WifiService;
