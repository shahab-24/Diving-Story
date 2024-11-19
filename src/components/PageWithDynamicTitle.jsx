
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageWithDynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    
    if (location.pathname === '/about') {
      document.title = "About Us - Diving Story";
    } 
    else if (location.pathname === '/contact') 
      {
      document.title = "Contact Us -  Diving Story";
    }
     else if(location.pathname === "/userProfile") {
      document.title = "Profile -  Diving Story"; 
    }
     else if(location.pathname === "/updateProfile") {
      document.title = "Update Profile -  Diving Story"; 
    }
     else if(location.pathname === "/signup") {
      document.title = "Sign Up -  Diving Story"; 
    }
     else if(location.pathname === "/login") {
      document.title = "Log In -  Diving Story"; 
    }
    else{
    location.pathname = "dafault title - Diving Story"
    }

    
  }, [location]);

  return (
    <div>
    
      <h1>This is the Page with Dynamic Title</h1>
    </div>
  );
};

export default PageWithDynamicTitle;
