import { useNavigate } from "react-router";
import heroImage from "../../assets/HomepageImage.jpg";
import { IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  return (
    <section className="relative h-screen bg-purple-100">
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${heroImage})`,
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white ">
        <h1 className="text-5xl font-extrabold leading-tight">
          Your Personalized{" "}
          <span className="text-purple-500">Fitness Journey</span> Starts Here
        </h1>
        <p className="text-lg mt-4 font-semibold max-w-2xl opacity-80">
          Get customized workout and diet plans tailored just for you by AI.
          Track your progress, engage with the community, and achieve your
          fitness goals.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => {
              if (token) {
                navigate("/diet"); 
              } else {
                navigate("/login"); 
              }
            }}
            
            className="flex items-center justify-center mt-16 px-12 font-semibold py-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 animate-bounce"
          >
            Get Started{" "}
            <span className="ml-2">
              <IoIosArrowForward size={20} className="animate-pulse" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
