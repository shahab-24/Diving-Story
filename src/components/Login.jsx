import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          
          setUser(user);
          navigate(location?. state ? location.state : "/")
          form.reset();
        } else {
          return;
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      });
  };
  return (
    <div className="w-11/12 mx-auto h-[600px] mt-4 bg-[url('https://i.ibb.co.com/6R51DRP/marldive-water-2.jpg')] flex justify-center items-center py-10">
      <div className="card opacity-60 bg-gray-200 py-10 h-[500px] transparent max-w-lg w-full shrink-0 shadow-2xl p-10 my-4">
        <h2 className="font-bold text-center text-purple-700 text-3xl">Login to your Account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-purple-700 text-xl font-semibold ">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-purple-700 text-xl font-semibold ">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered text-black"
              name="password"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-purple-700  font-semibold ">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-black font-semibold ">
            Dont Have Account ? please <Link to="/signup"><span className="text-purple-700  font-semibold ">Sign Up</span></Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
import React from "react";
