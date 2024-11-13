import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "../Pages/Welcome_page";
import Verification from "../Pages/Verification";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ComingSoon from "../Pages/ComingSoon";
import MobileLayout from "../Layout/MobileLayout";
import WifiService from "../Components/Services/WifiService";
import Queue from "../Pages/Queue"
import QueueDetails from "../Pages/QueueDetails"
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/services" element={<MobileLayout />}>
        <Route index element={<Home />} />
        <Route path="wifi" element={<WifiService />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/wifi-connection" element={<ComingSoon />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/queue" element={<Queue />} />
      <Route path="/queue-details" element={<QueueDetails />} />
    </Routes>
  );
};

export default AppRoutes;
