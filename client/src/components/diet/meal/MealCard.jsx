/* eslint-disable react/prop-types */
import { Clock } from "lucide-react";

export const MealCard = ({ meal, icon: Icon }) => (
  <>
    {meal.name&&
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 mb-4">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-purple-500 p-2 rounded-lg">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{meal.name}</h3>
            <p className="text-sm text-gray-500 flex items-center">
              <Clock className="h-4 w-4 mr-1" /> {meal.time}
            </p>
          </div>
          <div className="ml-auto">
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">
              {meal.calories} kcal
            </span>
          </div>
        </div>
        <div className="space-y-3">
          {meal?.items?.map((item, idx) => (
            <div key={idx} className="border-l-4 border-purple-500 pl-4 py-2">
              <p className="font-medium">{item.food}</p>
              <p className="text-sm text-gray-500">{item.portion}</p>
              <div className="flex gap-4 mt-1 text-sm text-gray-600">
                <span>P: {item?.protein}g</span>
                <span>C: {item?.carbs}g</span>
                <span>F: {item?.fats}g</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    }
  </>
);
