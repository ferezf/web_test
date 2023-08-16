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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomeContent />} />
          <Route path="profile" element={<ProfileContent />} />
          <Route path="messages" element={<MessagesContent />} />
          <Route path="settings" element={<SettingsContent />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
