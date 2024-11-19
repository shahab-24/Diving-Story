import { useState, useEffect } from "react";

import AdventuresExperience from "./AdventuresExperience";
import Banner from "./Banner";
import PopularEcoAdventures from "./PopularEcoAdventures";
import WhyChooseEcoAdventures from "./WhyChooseEcoAdventures";


const Home = () => {

  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    fetch("/Adventures.json")
      .then((res) => res.json())
      .then((data) => setAdventures(data))
      .catch((error) => console.error("Error fetching adventures:", error));
  }, []);
  return (
    <div>
    
      <div>
        <Banner></Banner>
      </div>
      <div>
        <AdventuresExperience></AdventuresExperience>
        
      </div>
      <div>
      <PopularEcoAdventures adventures={adventures.slice(0, 5)} />
      </div>
      <div>
        <WhyChooseEcoAdventures></WhyChooseEcoAdventures>
      </div>
      
      
    </div>
  );
};

export default Home;