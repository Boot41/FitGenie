/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/common/LoginPage";
import SignUpPage from "./components/common/SignUpPage";
import HomePage from "./components/Home/HomePage";
import ProfileForm from "./components/Form/ProfileForm";
import ProtectedRoute from "./components/common/ProtectedRoute";
import AiDiet from "./components/diet/AiDiet";
import AiWorkout from "./components/workout/AiWorkout";

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
                <ProfileForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/diet"
            element={
              <ProtectedRoute>
                <AiDiet />
              </ProtectedRoute>
            }
          />
          <Route
            path="/workout"
            element={
              <ProtectedRoute>
                <AiWorkout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
