import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth.js";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useAuth } from "../context/AuthContext.jsx";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);

      const { token } = response;

      localStorage.setItem("token", token);
      login();
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-50 to-yellow-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-center text-yellow-400 pb-2">
            <Link to={"/"}>FitGenie</Link>
          </h2>
          <p className="text-xl font-semibold">Login to Your Account</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Email is not valid",
                },
              })}
              className="input input-bordered w-full bg-inherit"
            />
            {errors.email && (
              <p className="text-red-500 font-semibold text-sm">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
                className="input input-bordered w-full bg-inherit"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? <HiEyeOff size={22} /> : <HiEye size={22} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 font-semibold text-sm">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary border-yellow-600 hover:border-yellow-400  w-full bg-yellow-400 hover:bg-yellow-600"
          >
            Login
          </button>
          <div className="text-center text-gray-600">
            Don&lsquo;t have an account?{" "}
            <Link to="/signup" className="text-yellow-400 hover:underline">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
