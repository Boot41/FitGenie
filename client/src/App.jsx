import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

const App = () => {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
