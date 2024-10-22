import { generateAiDiet } from "../../api/api";
import useUserStore from "../../store/useUserStore";
import { useState } from "react";
import DietPlanDashboard from "./DietPlanDashboard";
import toast from "react-hot-toast";

const GenerateDiet = () => {
  const { userDetails } = useUserStore();
  const [dietPlan, setDietPlan] = useState("");
  const { gotPerfectMeal } = useUserStore();

  const handleGenerateDiet = async () => {
    const res = await generateAiDiet(userDetails);
    console.log(res);

    let jsonObject;
    try {
      jsonObject = JSON.parse(res.message);
    } catch (error) {
      jsonObject = "";
      console.log(error);
    }
    if (jsonObject != "") {
      setDietPlan(jsonObject);
      if (gotPerfectMeal) {
        toast.success("Here you go 🥗");
      }
    } else {
      toast.error("Please try again 🤦‍♂️");
    }
    console.log("jsonObject ", jsonObject);
  };

  console.log("gotPerfectMeal ", gotPerfectMeal);


  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-200 to-yellow-300 pt-4 ">
      <div className="w-10/12 bg-gray-50 shadow-lg rounded-lg p-8 text-center ">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Your AI Diet Plan
        </h1>
        <p className="text-gray-600 text-xl font-semibold">
          Let us help you generate a personalized diet plan using AI tailored
          just for you.
        </p>
        <p className="font-semibold text-sm opacity-80 mb-8">
          If the genie failed please do try again cause its not you it us 👀
        </p>
        <button
          className="bg-yellow-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:bg-yellow-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400"
          onClick={handleGenerateDiet}
        >
          Generate Diet
        </button>
      </div>
      {/* Render the diet plan when it's available */}
      {/* {dietPlan && (
        <div className="w-10/12 bg-white shadow-lg rounded-lg p-8 my-6">
          <ReactMarkdown className="text-2xl">
            {dietPlan}
          </ReactMarkdown>
        </div>
      )} */}
      {dietPlan && <DietPlanDashboard data={dietPlan} />}
    </div>
  );
};

export default GenerateDiet;
