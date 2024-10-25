/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useUserStore from "../../store/useUserStore";
import toast from "react-hot-toast";
import ConfirmationModal from "../common/ConfirmationModal";

const FitnessForm = () => {
  const navigate = useNavigate();
  const {
    userDetails,
    dietPlan,
    workoutPlan,
    deleteDiet,
    updateProfile,
    deleteWorkout,
  } = useUserStore();
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit, reset, watch } = useForm();
  const [actionType, setActionType] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    if (userDetails && Object.keys(userDetails).length > 0) {
      reset(userDetails);
    }
  }, [userDetails, reset]);

  const onSubmit = async (data) => {
    updateProfile(data);
  };

  if (!userDetails) {
    return <div className="text-center py-4">Loading user details...</div>;
  }

  const handleDeleteDiet = async () => {
    try {
      await deleteDiet();
      toast.success("Diet plan deleted successfully");
      setShowModal(false);
    } catch (error) {
      toast.error("Failed to delete diet plan");
    }
  };

  const handelDeleteWorkout = async () => {
    try {
      await deleteWorkout();
      setShowModal(false);
    } catch (error) {
      toast.error("Failed to delete Workout plan");
    }
  };

  const openModal = (action) => {
    setActionType(action);
    setShowModal(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-400 to-purple-200">
      {userDetails && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-6 md:mx-16  py-6 "
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Fitness Profile
          </h2>

          <div className="block md:flex w-full gap-4 ">
            <div className="w-full md:w-[25%]">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="relative mb-4">
                  <div className="w-full aspect-square rounded-lg overflow-hidden bg-purple-200">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <svg
                          className="w-20 h-20"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <label className="absolute bottom-2 right-2 bg-purple-500 rounded-full p-2 cursor-pointer hover:bg-purple-500 transition-colors">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 font-semibold  ">
                    {userDetails.email}
                  </p>
                </div>
              </div>
              {dietPlan && (
                <div className="mt-4 bg-gray-50 rounded-lg">
                  <button
                    type="button"
                    onClick={() => openModal("diet")}
                    className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Delete Current Diet Plan
                  </button>
                </div>
              )}
              {workoutPlan && (
                <div className="mt-4  bg-gray-50 rounded-lg">
                  <button
                    type="button"
                    onClick={() => openModal("workout")}
                    className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Delete Current Workout Plan
                  </button>
                </div>
              )}
            </div>
            {/* ------------------------------BASIC INFO------------------------------------------ */}
            <div className="w-[75%] ">
              <div className="bg-purple-50 mt-4 md:mt-0 p-4 w-full rounded-lg">
                <div className="block md:flex w-full gap-4">
                  <div className="mb-4 w-full">
                    <label className="block mb-2 text-gray-800 font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      className="w-full p-2 border rounded bg-inherit text-gray-800 "
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="mb-4 w-full">
                    <label className="block mb-2 text-gray-800 font-semibold">
                      Age
                    </label>
                    <input
                      type="number"
                      {...register("age")}
                      className="w-full p-2 border rounded bg-inherit text-gray-800"
                      placeholder="Enter you Age"
                      required
                    />
                  </div>
                  <div className="mb-4 w-full">
                    <label className="block mb-2 text-gray-800 font-semibold">
                      Gender
                    </label>
                    <select
                      {...register("gender")}
                      className="w-full p-2 border rounded bg-inherit text-gray-800"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex w-full gap-4">
                  <div className="mb-4 w-full">
                    <label className="block mb-2 text-gray-800 font-semibold">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      {...register("height")}
                      className="w-full p-2 border rounded bg-inherit text-gray-800"
                      placeholder="Enter you Height"
                      required
                    />
                  </div>

                  <div className="mb-4 w-full">
                    <label className="block mb-2 text-gray-800 font-semibold">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      {...register("weight")}
                      className="w-full p-2 border rounded bg-inherit text-gray-800"
                      placeholder="Enter your Weight"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* -------------------------------DIET INFO----------------------------------------- */}
              <div className=" gap-4 bg-white mt-4  p-4 w-full rounded-lg">
                <h1 className="font-semibold py-4 text-2xl">Diet Info</h1>
                <div className="mb-4">
                  <label className="block mb-2 text-gray-800 font-semibold">
                    Diet Type
                  </label>
                  <select
                    {...register("dietType")}
                    className="w-full p-2 border rounded bg-inherit text-gray-800"
                    required
                  >
                    <option value="">Select Diet Type</option>
                    <option value="Veg">Veg</option>
                    <option value="Non-Veg">Non-Veg</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Any">Any</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-gray-800 font-semibold">
                    Food Restrictions
                  </label>
                  <input
                    type="text"
                    {...register("foodRestrictions")}
                    className="w-full p-2 border rounded bg-inherit text-gray-800"
                    placeholder="List if any like Milk, Nuts ..."
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-gray-800 font-semibold">
                    Injuries
                  </label>
                  <input
                    type="text"
                    {...register("injuries")}
                    className="w-full p-2 border rounded bg-inherit text-gray-800"
                    placeholder="List if any like Dislocated Shoulder, Fractures, ..."
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-gray-800 font-semibold">
                    Health Conditions
                  </label>
                  <input
                    type="text"
                    {...register("healthConditions")}
                    className="w-full p-2 border rounded bg-inherit text-gray-800"
                    placeholder="List if any like diabetes, cardiovascular diseases ..."
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-gray-800 font-semibold">
                    Water Intake
                  </label>
                  <select
                    {...register("waterIntake")}
                    className="w-full p-2 border rounded bg-inherit text-gray-800"
                    required
                  >
                    <option value="">Select Water Intake</option>
                    <option value="Less than 1L">Less than 1L</option>
                    <option value="2-3L">2-3L</option>
                    <option value="Above 3L">Above 3L</option>
                  </select>
                </div>
              </div>
              {/* ---------------------WORKOUT PLAN-------------------------------- */}

              <div className=" gap-4 bg-white my-4  p-4 w-full rounded-lg">
                <h1 className="font-semibold py-4 text-2xl">Workout Info</h1>
                <div className="mb-4">
                  <label className="block mb-2 text-gray-800 font-semibold">
                    Activity Level
                  </label>
                  <select
                    {...register("activityLevel")}
                    className="w-full p-2 border rounded bg-inherit text-gray-800"
                    required
                  >
                    <option value="">Select Activity Level</option>
                    <option value="Sedentary">Sedentary</option>
                    <option value="Lightly Active">Lightly Active</option>
                    <option value="Moderately Active">Moderately Active</option>
                    <option value="Very Active">Very Active</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-gray-800 font-semibold">
                    Fitness Goal
                  </label>
                  <select
                    {...register("fitnessGoal")}
                    className="w-full p-2 border rounded bg-inherit text-gray-800"
                    required
                  >
                    <option value="">Select Fitness Goal</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Muscle Gain">Muscle Gain</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Endurance">Endurance</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-gray-800 font-semibold">
                    Workout Type
                  </label>
                  <select
                    {...register("workoutType")}
                    className="w-full p-2 border rounded bg-inherit text-gray-800"
                    required
                  >
                    <option value="">Select Workout Type</option>
                    <option value="Cardio">Cardio</option>
                    <option value="Strength">Strength</option>
                    <option value="Flexibility">Flexibility</option>
                    <option value="Mixed">Mixed</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-gray-800 font-semibold">
                    Workout Intensity
                  </label>
                  <select
                    {...register("intensity")}
                    className="w-full p-2 border rounded bg-inherit text-gray-800"
                    required
                  >
                    <option value="">Select Workout Type</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-gray-800 font-semibold">
                    Workout Duration (mins)
                  </label>
                  <input
                    type="number"
                    {...register("workoutDuration")}
                    className="w-full p-2 border rounded bg-inherit text-gray-800"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-gray-800 font-semibold">
                    Workout Frequency
                  </label>
                  <select
                    {...register("workoutFrequency")}
                    className="w-full p-2 border rounded bg-inherit text-gray-800"
                    required
                  >
                    <option value="">Select Frequency</option>
                    <option value="1 day a week">1 day a week</option>
                    <option value="2 days a week">2 days a week</option>
                    <option value="3 days a week">3 days a week</option>
                    <option value="4 days a week">4 days a week</option>
                    <option value="5 days a week">5 days a week</option>
                    <option value="6 days a week">6 days a week</option>
                    <option value="7 days a week">7 days a week</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-gray-800 font-semibold">
                    Workout Time Preference
                  </label>
                  <select
                    {...register("workoutTimePreference")}
                    className="w-full p-2 border rounded bg-inherit text-gray-800"
                    required
                  >
                    <option value="">Select Time Preference</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full mb-6 p-2 bg-purple-500 text-white rounded hover:bg-purple-500 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={
          actionType === "diet" ? handleDeleteDiet : handelDeleteWorkout
        }
        message={
          actionType === "diet"
            ? "You currently have an active diet plan. Are you sure you want to delete your current diet plan?"
            : "You currently have an active workout plan. Are you sure you want to delete your current workout plan?"
        }
      />
    </div>
  );
};

export default FitnessForm;
