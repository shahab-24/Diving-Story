import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
  
    AOS.init({
      duration: 2000, 
      easing: "ease-in-out",
      once: true, 
    });
  }, []);

  const aboutContent = [
    {
      title: "Our Mission",
      description:
        "To promote eco-friendly adventures that inspire people to connect with nature while preserving it for future generations.",
      icon: "🌿",
    },
    {
      title: "Our Vision",
      description:
        "We envision a world where travel harmonizes with sustainability, leaving a positive impact on the environment and local communities.",
      icon: "🌎",
    },
    {
      title: "What We Offer",
      description:
        "From adventure bookings to eco-friendly gear rentals, we provide everything you need for an unforgettable and responsible journey.",
      icon: "🧭",
    },
  ];

  return (
    <div className="relative bg-gray-100 min-h-screen py-16">
      <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutContent.map((content, index) => (
            <div
              key={index}
              data-aos="flip-left" 
              data-aos-delay={`${index * 300}`} 
              data-aos-anchor-placement="center-bottom"
              className={`relative group bg-white shadow-lg rounded-lg p-6 text-center transform transition-all duration-500 hover:scale-110 ${
                index % 2 === 0 ? "animate-floating" : "animate-floating-reverse"
              }`}
            >
              <div className="text-5xl text-green-500 mb-4">{content.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{content.title}</h3>
              <p className="text-gray-700">{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
