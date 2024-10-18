import { useEffect, useState } from "react";
import { getUserProfile } from "../../api/api";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import FitnessForm from "./FitnessForm";

const ProfileForm = () => {
  const [userDetails, setUserDetails] = useState({});

  const getProfileData = async () => {
    const data = await getUserProfile();
    setUserDetails(data);
  };

  useEffect(() => {
    getProfileData();
  }, []);
  
  return (
    <div className="w-full pt-24 bg-gray-100">
      <Navbar />
      <FitnessForm userDetails={userDetails} />
      <Footer />
    </div>
  );
};

export default ProfileForm;
