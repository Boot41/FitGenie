/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { updateUserProfile } from "../../api/api";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const FitnessForm = ({ userDetails }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, watch } = useForm();

  useEffect(() => {
    if (userDetails) {
      reset(userDetails); 
    }
  }, [userDetails, reset]);

  const onSubmit = async (data) => {
    const res = await updateUserProfile(data);
    navigate('/')
  };

  if (!userDetails) {
    return <div className="text-center py-4">Loading user details...</div>;
  }

  return (
    <div>
      {userDetails && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-6 md:mx-32  p-4 border rounded-lg shadow-lg bg-white pb-4 mb-12"
        >
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Fitness Profile
          </h2>

          <div className="mb-4 ">
            <label className="block mb-2 text-gray-800 font-semibold">
              Email
            </label>
            <span className="text-sm cursor-not-allowed">Email cannot be changed*</span>
            <input
              type="email"
              {...register("email")}
              className="w-full p-2 border rounded font-semibold bg-gray-200 text-gray-500 cursor-not-allowed"
              readOnly
            />
          </div>

          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
            <label className="block mb-2 text-gray-800 font-semibold">
              Smoking Habit
            </label>
            <select
              {...register("smokingHabit")}
              className="w-full p-2 border rounded bg-inherit text-gray-800"
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-800 font-semibold">
              Alcohol Habit
            </label>
            <select
              {...register("alcoholHabit")}
              className="w-full p-2 border rounded bg-inherit text-gray-800"
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-800 font-semibold">
              Do you currently workout?
            </label>
            <select
              {...register("currentlyWorkout")}
              className="w-full p-2 border rounded bg-inherit text-gray-800"
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {watch("currentlyWorkout") === "Yes" && (
            <>
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
                  <option value="Weightlifting">Weightlifting</option>
                  <option value="Calisthenics">Calisthenics</option>
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
            </>
          )}

          <button
            type="submit"
            className="w-full p-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default FitnessForm;
