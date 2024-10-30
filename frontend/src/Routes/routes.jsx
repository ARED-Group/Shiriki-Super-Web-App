import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "../Pages/Welcome_page";
import Verification from "../Pages/Verification"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import ComingSoon from "../Pages/ComingSoon" 
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Welcome />} />
      <Route path="/homepage" element={< Home/>} />
      <Route path="/login" element={< Login/>} />
      <Route path="/comingSoon" element={< ComingSoon/>} />
      <Route path="/verification" element={< Verification/>} />
    </Routes>
  );
};

export default AppRoutes;