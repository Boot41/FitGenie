import { HiOutlineHeart, HiOutlineScale, HiOutlineUserGroup } from 'react-icons/hi';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Personalized Diet Plans',
      description: 'Get diet plans tailored to your goals and lifestyle.',
      icon: <HiOutlineHeart  className="text-4xl text-yellow-400" />,
    },
    {
      title: 'Track Your Progress',
      description: 'Monitor your progress with detailed insights and reports.',
      icon: <HiOutlineScale className="text-4xl text-yellow-400" />,
    },
    {
      title: 'Join a Community',
      description: 'Engage with a supportive community of fitness enthusiasts.',
      icon: <HiOutlineUserGroup className="text-4xl text-yellow-400" />,
    },
  ];

  return (
    <section className="py-16 px-24 bg-yellow-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose Us</h2>
        <p className="text-lg text-gray-600 mt-4 font-semibold">
          Our app is designed to help you stay on track and achieve your goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Centered Icon */}
              <div className="mb-4 flex items-center justify-center h-16 w-16">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 text-center">{feature.title}</h3>
              <p className="text-gray-600 mt-2 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
