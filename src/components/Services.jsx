import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const services = [
    {
      title: "Eco-Adventure Booking",
      description: "Book your eco-friendly adventure today! Explore nature sustainably through our adventure packages.",
      icon: "🌍",
    },
    {
      title: "Talk with Experts",
      description: "Consult with our adventure experts to plan your next journey with all the details you need.",
      icon: "💬",
    },
    {
      title: "Custom Travel Packages",
      description: "Personalized travel packages based on your preferences, ensuring the best eco-friendly experiences.",
      icon: "✈️",
    },
    {
      title: "Eco-Friendly Gear Rentals",
      description: "Rent eco-friendly gear for your adventure, from tents to hiking equipment, to minimize your carbon footprint.",
      icon: "🎒",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000,                            
      easing: "ease-in-out",
      once: true, 
    });
  }, []);

  return (
    <div className="services-section py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 300}`} 
              data-aos-anchor-placement="center-bottom"
              className={`relative group rounded-lg shadow-lg overflow-hidden p-6 bg-white transform transition-transform duration-500 hover:scale-110 ${
                index % 2 === 0 ? "rotate-3" : "-rotate-3"
              }`}
            >
              <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
