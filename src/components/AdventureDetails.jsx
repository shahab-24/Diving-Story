import  { useState, useEffect, useContext } from "react";
import {
  
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../Provider/AuthProvider";

const AdventureDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const adventure = useLoaderData();
  console.log(adventure,user, id)
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init();
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  

  
  if (!adventure) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-8 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
    ); 
  }

  const handleTalkWithExpert = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 10 && currentHour <= 20) {
      window.open("https://meet.google.com/", "_blank");
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="container mx-auto mt-20 p-5" data-aos="fade-up">
      <div
        className="card w-[80%] h-[100%] bg-base-100 shadow-xl mx-auto"
        data-aos="zoom-in"
      >
        <figure>
          <img
            src={adventure.image}
            alt={adventure.name}
            className="w-full h-[550px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-bold text-primary">{adventure.title}</h2>
          <h2 className="card-title text-2xl font-bold">{adventure.name}</h2>
          <p>{adventure.shortDescription}</p>
          <p>
            <strong>Category:</strong> {adventure.category}
          </p>
          <p>
            <strong>Location:</strong> {adventure.location}
          </p>
          <p>
            <strong>Difficulty:</strong> {adventure.adventureLevel}
          </p>
          <p>
            <strong>Duration:</strong> {adventure.duration}
          </p>
          <p>
            <strong>Travelers:</strong> {adventure.maxGroupSize}
          </p>
          <p>
            <strong>Price:</strong> {adventure.adventureCost}
          </p>

          <div className="flex justify-around">
            <div className="text-start">
              <p>Features: </p>
              {adventure.ecoFriendlyFeatures.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
            <div className="text-start">
              <p>Included items: </p>
              {adventure.includedItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
            <div>
              <p>Special Instructions: </p>
              {adventure.specialInstructions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
          </div>

          <div className="card-actions justify-center mt-4">
            <button onClick={handleTalkWithExpert} className="btn btn-primary">
              Talk with Expert
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2>Consultation Time</h2>
            <p>
              Our expert is available from 10:00 AM to 8:00 PM. Please come back
              during these hours for a consultation.
            </p>
            <div className="modal-action">
              <button onClick={() => setShowModal(false)} className="btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdventureDetails;
