import {  NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {user,userLogOut} = useContext(AuthContext)
  console.log(user)
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/updateProfile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/userProfile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign UP</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
        <div className="hidden lg:flex items-center justify-start">
        <img className="w-[20%] h-[20%] rounded-xl px-4" src={logo} alt="" />
        <a className=" text-2xl">Diving Story<small className="flex items-center">Eco Adventures</small></a>
        </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="">
          {
            user && user?.email ?<div className="flex items-center gap-2 justify-end" title={user.displayName}>
            
            <img className="w-[20%] lg:w-[30%] h-[10%] rounded-xl border-1 border-cyan-500 btn-outline" src={user.photoURL} alt="" />
      
              
               <button onClick={userLogOut} className="btn btn-outline">Logout</button>
            </div> : <NavLink to='/login' className="btn btn-outline">Login</NavLink>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
