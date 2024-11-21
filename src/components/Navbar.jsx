import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  
  const dropdownRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); 
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const links = (
    <>
      <li>
        <NavLink to="/" activeClassName="active">Home</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/updateProfile" activeClassName="active">Update Profile</NavLink>
          </li>
          <li>
            <NavLink to="/userProfile" activeClassName="active">Profile</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">About</NavLink>
      </li>
      <li>
        <NavLink to="/services" activeClassName="active">Services</NavLink>
      </li>
      <li>
        <NavLink to="/gallery" activeClassName="active">Gallery</NavLink>
      </li>
    </>
  );

  return (
    <div
      data-aos="fade-down"
      className="navbar bg-base-100 shadow-lg lg:bg-transparent border-gray-300 py-4 fixed top-0 left-0 w-full z-50 mb-4"
    >
      <div className="navbar-start">
        <div className="dropdown text-white" ref={dropdownRef}>
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsOpen(!isOpen)} 
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box shadow-lg mt-3 p-2 w-52"
            >
              {links}
            </ul>
          )}
        </div>

        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full"
            src={logo}
            alt="Logo"
          />
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              Diving Story
            </h1>
            <span className="text-sm sm:text-base text-gray-500">
              Eco Adventures
            </span>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex items-center gap-2" title={user.displayName}>
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cyan-400"
              src={user.photoURL}
              alt="User"
            />
            <button onClick={userLogOut} className="btn btn-outline">
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/login" className="btn btn-outline">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
