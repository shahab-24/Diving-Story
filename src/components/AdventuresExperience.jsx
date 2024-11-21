import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css"; 

const AdventureExperiences = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: "ease-in-out", 
      offset: 100, 
      once: false, 
    });
  }, []);

  useEffect(() => {
    fetch("/Adventures.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching adventures:", error));
  }, []);

  const handleExploreNow = (id) => {
    if (user) {
      navigate(`/adventureDetails/${id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8" data-aos="fade-up">
      <h1
        className="text-3xl font-bold text-center mb-8"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Adventure Experiences
      </h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        data-aos="zoom-out"
        data-aos-anchor-placement="top-bottom"
      >
        {data.slice(0, 6).map((adventure) => (
          <div
            key={adventure.id}
            className="card bg-base-100 shadow-xl"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center" 
            data-aos-offset="50" 
          >
            <figure className="relative overflow-hidden">
              <img
                src={adventure.image}
                alt={adventure.title}
                className="w-full h-52 object-cover transform hover:scale-105 transition-transform duration-200"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{adventure.title}</h2>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                {adventure.ecoFriendlyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => handleExploreNow(adventure.id)}
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdventureExperiences;
