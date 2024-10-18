import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { IoExit } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();


  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    logout();
  };

  const token = localStorage.getItem("token");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "AI Diets", path: "/diet" },
    { name: "AI Workout", path: "/features" },
    { name: "Profile", path: "/profile" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-yellow-50 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-yellow-400 font-extrabold text-2xl ">
          FitGenie
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-yellow-400 focus:outline-none"
          >
            {isOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </button>
        </div>

        {token ? (
          <ul
            className={`md:flex md:items-center md:space-x-8 text-gray-600 font-medium fixed md:relative bg-yellow-50 w-full md:w-auto left-0 md:left-auto top-0 md:top-auto transition-all duration-300 ease-in ${
              isOpen ? "top-16 z-40" : "top-[-400px]"
            } md:top-auto`}
          >
            {navLinks.map((link, index) => (
              <li key={index} className="py-2 md:py-0">
                <Link
                  to={link.path}
                  className="hover:text-yellow-400 block text-center"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <div className="hidden md:flex space-x-4">
              <button
                onClick={handleLogout}
              >
                <IoExit size={32} className="text-gray-700 hover:text-gray-900"/>
              </button>
            </div>
          </ul>
        ) : (
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-inherit text-yellow-400 font-semibold px-6 py-[10px]  border-2 border-yellow-400 rounded-lg hover:bg-yellow-100"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
