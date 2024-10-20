import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import FitnessForm from "./FitnessForm";

const ProfileForm = () => {
  return (
    <div className="w-full  bg-gray-100">
      <Navbar />
      <FitnessForm />
      <Footer />
    </div>
  );
};

export default ProfileForm;
