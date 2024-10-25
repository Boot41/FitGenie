import toast from "react-hot-toast";
import useUserStore from "../../store/useUserStore";
import DietPlanDashboard from "./DietPlanDashboard";
import {useNavigate}  from "react-router-dom"

const GenerateDiet = () => {
  const navigate = useNavigate();
  const { dietPlan, generateAndSaveDiet, valuesPresent } = useUserStore();

  const handleGenerateDiet = async () => {
    if (valuesPresent()) {
      generateAndSaveDiet();
    } else {
      toast.error("Please complete the profile details first 😵");
      navigate('/profile')
      return;
    }
  };
  
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 to-purple-400 pt-4 ">
      {!dietPlan ? (
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
            className="bg-purple-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:bg-purple-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500"
            onClick={handleGenerateDiet}
          >
            Generate Diet
          </button>
        </div>
      ) : (
        <DietPlanDashboard data={dietPlan} />
      )}
    </div>
  );
};

export default GenerateDiet;
