import user1 from "../../assets/User1.webp";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "This app has changed my life. The plans are easy to follow, and I’ve seen incredible results!",
      image: user1,
    },
    {
      name: "Jane Smith",
      feedback:
        "I love the personalized diet plans. They are super effective and easy to stick to!",
      image:
        "https://play-lh.googleusercontent.com/RagJ2nxqi-CTjLz7-c5ql7YEuGBJHRdYnfM-guPhc5tMcjhbFn19YSppbQsr1cqzDw=w240-h480-rw",
    },
    {
      name: "Will Griffen",
      feedback:
        "I love the personalized diet plans. They are super effective and easy to stick to!",
      image:
        "https://play-lh.googleusercontent.com/iD0GQkxo3HO7bLMynyNMmbKUnFq060oMa8IMV3FwvSKofbvA75tHMy-xtdgQ4LMkow=w2560-h1440-rw",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-500">What Our Users Say</h2>

        <div className="carousel carousel-center  mt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="carousel-item pr-4">
              <div className="bg-purple-200 p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  )}
                </div>
                <p className="text-gray-600">{testimonial.feedback}</p>
                <h3 className="text-xl font-bold text-gray-800 mt-4">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <p className="my-5 text-sm font-semibold animate-pulse">Swipe to see more</p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
