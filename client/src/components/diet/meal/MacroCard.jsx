/* eslint-disable react/prop-types */
export const MacroCard = ({ title, value, unit }) => (
  <div className="bg-purple-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-gray-600 font-medium">{title}</h3>
    <p className="text-2xl font-bold text-purple-600">
      {value}
      <span className="text-sm ml-1">{unit}</span>
    </p>
  </div>
);
