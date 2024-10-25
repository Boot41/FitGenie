import { Link } from "react-router-dom";

const SubscriptionSection = () => {
  return (
    <section className="py-16 bg-purple-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-500">
          Start Your Fitness Journey Today
        </h2>
        <p className="text-lg text-gray-800 font-semibold mt-4">
          Join thousands of others and take the first step towards a healthier
          you.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600">
          <Link to={"/signup"}>Sign Up Now</Link>
        </button>
      </div>
    </section>
  );
};

export default SubscriptionSection;
