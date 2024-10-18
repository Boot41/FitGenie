/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import HomePage from "./components/Home/HomePage";
import ProfileForm from "./components/Form/ProfileForm";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {

  return (
    <div className="bg-white">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfileForm  />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
    </div>
  );
};

export default App;
