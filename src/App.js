import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./Homepage";
import HomeContent from "./HomeContent";
import ProfileContent from "./ProfileContent";
import MessagesContent from "./MessagesContent";
import SettingsContent from "./SettingsContent";
import "datatables.net-dt/css/jquery.dataTables.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Page Route */}
        <Route path="/" element={<LoginPage />} />

        {/* Home Page Route */}
        <Route path="/home" element={<HomePage />}>
          <Route index element={<HomeContent />} />
          <Route path="profile" element={<ProfileContent />} />
          <Route path="messages" element={<MessagesContent />} />
          <Route path="settings" element={<SettingsContent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
