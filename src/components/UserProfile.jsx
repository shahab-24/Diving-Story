import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  
  

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen  animate__animated  animate__fadeInBottomRight animate__slow shadow-2xl  rounded-xl">
      <div
      
      >
        <h1 className="text-3xl font-bold text-center mb-5">
          Welcome, <span className="text-blue-500">{user.displayName}</span>!
        </h1>
        <div className="flex flex-col items-center">
          <img
            src={user.photoURL}
            alt="User Profile"
            className="w-72 h-72 rounded-full border-4 border-blue-500 shadow-md"
          />
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">Name: {user.displayName}</p>
            <p className="text-lg font-semibold">Email: {user.email}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Link to="/updateProfile">
            <button className="btn btn-primary w-full">Update Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
