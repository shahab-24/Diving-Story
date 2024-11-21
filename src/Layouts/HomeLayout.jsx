import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const HomeLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home - Diving Story",
      "/about": "About Us - Diving Story",
      "/login": "Login - Diving Story",
      "/signup": "Signup - Diving Story",
      "/userProfile": "Profile -  Diving Story",
      "/updateProfile": "Update Profile -  Diving Story",
      "/services": "Services -  Diving Story",
      "/adventureDetails": "AdventureDetails -  Diving Story",
      "/gallery": "Gallery -  Diving Story"
    };

    document.title = titles[location.pathname] || "Default Title - Diving Story";
  }, [location]);

  return (
    <div className="font-poppins overflow-hidden"> 
      <Navbar />
      <div className="my-20 py-20 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
