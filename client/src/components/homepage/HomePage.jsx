import React from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "../../assets/HomepageImage.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const token = localStorage.getItem("token");

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center py-3">
          <div className="text-2xl font-extrabold text-indigo-700">
            FitGenie
          </div>
          <div className="space-x-4">
            {token ? (
              <>
                <Link to="/profile">
                  <button className="btn w-28 btn-outline btn-indigo hover:bg-indigo-500 hover:text-white">
                    Profile
                  </button>
                </Link>
                <Link to="/dietplan">
                  <button className="btn w-28 btn-outline btn-indigo hover:bg-indigo-500 hover:text-white">
                    Diet Plan
                  </button>
                </Link>
                <Link to="/workout">
                  <button className="btn w-28 btn-outline btn-indigo hover:bg-indigo-500 hover:text-white">
                    Workout
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn w-28 text-white btn-primary bg-red-600 hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn w-28 btn-outline btn-indigo hover:bg-indigo-500 hover:text-white">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="btn w-28 text-white btn-primary bg-indigo-600 hover:bg-indigo-700">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 md:py-12">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Welcome to <span className="text-indigo-600">FitGenie</span>
          </h1>
          <p className="text-sm text-gray-600 md:text-lg md:leading-relaxed opacity-90 pe:0 md:pe-12 ">
            FitGenie is your go-to health application, offering personalized
            fitness guidance and nutrition plans. Whether you're looking to
            boost motivation or need tailored workout advice, we've got your
            back. Start achieving your fitness goals today.
          </p>
          <button
            onClick={() => {
              if (token) {
                navigate("/dietplan"); // Redirect to diet plan if token exists
              } else {
                navigate("/login"); // Redirect to login if no token
              }
            }}
            className="btn w-52 text-white btn-primary bg-indigo-600 hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg"
          >
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <img
            src={heroImage}
            alt="FitGenie"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
