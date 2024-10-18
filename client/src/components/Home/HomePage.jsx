import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import SubscriptionSection from "./SubscriptionSection";
import Footer from "./Footer";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default HomePage;
