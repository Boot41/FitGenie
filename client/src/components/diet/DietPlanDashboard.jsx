/* eslint-disable react/prop-types */
import {
  Droplet,
  Info,
  Coffee,
  Apple,
  ChefHat,
  Utensils,
  Scale,
  Pill,
} from "lucide-react";
import { MacroCard } from "./meal/MacroCard";
import { MealCard } from "./meal/MealCard";

const DietPlanDashboard = ({ data }) => {
  const meals = [
    { icon: Coffee, ...data.meals[0] },
    { icon: Apple, ...data.meals[1] },
    { icon: Utensils, ...data.meals[2] },
    { icon: Apple, ...data.meals[3] },
    { icon: ChefHat, ...data.meals[4] },
    { icon: Apple, ...data.meals[5] },
  ];

  console.log("Data - ", data);

  return (
    <div className="w-10/12 mx-auto p-6 bg-yellow-100 min-h-screen my-6 rounded-lg shadow-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Daily Nutrition Plan
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <MacroCard
            title="Calories"
            value={data.dailyOverview.calories}
            unit="kcal"
          />
          <MacroCard
            title="Protein"
            value={data.dailyOverview.macros.protein}
            unit="g"
          />
          <MacroCard
            title="Carbs"
            value={data.dailyOverview.macros.carbs}
            unit="g"
          />
          <MacroCard
            title="Fats"
            value={data.dailyOverview.macros.fats}
            unit="g"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Utensils className="text-yellow-500" /> Meals
          </h2>
          {meals.length > 0 &&
            meals.map((meal, idx) => (
              <MealCard key={idx} meal={meal} icon={meal.icon} />
            ))}
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Droplet className="text-yellow-500" /> Water Intake
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <span className="text-lg">Daily Target:</span>
                <span className="text-2xl font-bold text-yellow-600">3L</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Info className="text-yellow-500" /> Guidelines
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ul className="space-y-3">
                {data?.guidelines?.map((guideline, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-yellow-400" />
                    <span>{guideline}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {data?.supplements?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Pill className="text-yellow-500" /> Supplements
              </h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="space-y-2">
                  {data.supplements?.map((supplement, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between border-b border-gray-100 py-2 last:border-0"
                    >
                      <span className="font-medium">{supplement.name}</span>
                      <span className="text-sm text-gray-500">
                        {supplement.timing}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div>
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Scale className="text-yellow-500" /> Meal Prep Tips
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ul className="space-y-3">
                {data?.mealPrepTips?.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-yellow-400" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietPlanDashboard;
