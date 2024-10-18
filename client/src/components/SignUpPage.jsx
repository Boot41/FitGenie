/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../api/api.js";
import { HiEye, HiEyeOff } from "react-icons/hi";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    
    try {
      const response = await signUpUser(data);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-50 to-yellow-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg my-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-center text-yellow-400 pb-2">
            <Link to={"/"}>FitGenie</Link>
          </h2>
          <p className="text-xl font-semibold">Create Your Account</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("fullName", { required: "Full name is required" })}
              className="input input-bordered w-full bg-inherit"
            />
            {errors.fullName && (
              <p className="text-red-500 font-semibold text-sm">
                {errors.fullName.message}
              </p>
            )}
          </div>
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
                placeholder="Create a password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="input input-bordered w-full bg-inherit"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <HiEyeOff size={22} /> : <HiEye size={22} />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 font-semibold text-sm">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="input input-bordered w-full bg-inherit"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <HiEyeOff size={22} />
                ) : (
                  <HiEye size={22} />
                )}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 font-semibold text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary border-yellow-600 hover:border-yellow-400 w-full bg-yellow-400 hover:bg-yellow-600"
          >
            Sign Up
          </button>
          <div className="text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-yellow-400 font-semibold hover:underline "
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
