import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import FitnessForm from "./FitnessForm";

const ProfileForm = () => {
  return (
    <div className="w-full pt-24 bg-gray-100">
      <Navbar />
      <FitnessForm />
      <Footer />
    </div>
  );
};

export default ProfileForm;
