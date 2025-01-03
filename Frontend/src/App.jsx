import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import Start from "./pages/Start";
import Captainlogin from "./pages/Captainlogin";
import CaptainSignup from "./pages/CaptainSignup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
};

export default App;
