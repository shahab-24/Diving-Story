import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



const Signup = () => {
  const { createUser, setUser, manageUpdateProfile } = useContext(AuthContext);
  const [err, setErr] = useState('')
  const [showPassword, setShowPassword] = useState();
  const navigate = useNavigate();
  const location = useLocation()

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name,email,photo,password)

    const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
          

          if(!passwordRegex.test(password)){
            setErr("Password must be at least 6 characters, include uppercase, lowercase, number, and a special character.")
          
            return;
          }

        

          setErr("")

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        

        manageUpdateProfile(name, photo);
      
          setUser(user);
          console.log(user, "from manage profile")
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `Congrats..! ${user.displayName}`,
            showConfirmButton: false,
            timer: 1500,
          });
          console.log("login successfully")
        
        form.reset();
        navigate(location?.state || "/");
        

        
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword)

  }
  return (
    <div className="w-11/12 mx-auto bg-[url('https://i.ibb.co.com/6R51DRP/marldive-water-2.jpg')] flex justify-center items-center h-[750px] object-cover">
      <div className="card opacity-80 py-4 h-auto transparent max-w-lg w-full shrink-0 shadow-2xl p-6 mb-6">
        <h2 className="font-bold text-center text-purple-700 text-3xl">
          Sign Up to your Account
        </h2>
        <form onSubmit={handleSignup} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-purple-700 text-xl font-semibold">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-purple-700 text-xl font-semibold">
                PhotoURL
              </span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-purple-700 text-xl font-semibold">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-purple-700 text-xl font-semibold">
                Password
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          <button onClick={handleShowPassword} className="btn btn-sm border-none hover:bg-none w-[30%] h-[30%] bg-transparent absolute right-2 bottom-10">
          {/* <img className=" " src="https://img.icons8.com/?size=24&id=85028&format=png" alt="" /> */}{   showPassword ?<FaEye></FaEye> :  <FaEyeSlash></FaEyeSlash>}
          </button>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-black">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-4">
            <button className="btn btn-primary text-purple-700 text-xl font-semibold">
              Sign Up
            </button>
          </div>
          <p className="text-black mb-4">
            Already Have an Account ? Please
            <Link to="/login">
              <span className="text-purple-700 text-xl font-semibold">
                Login
              </span>
            </Link>
          </p>
        </form>
        {err && <p className="text-red-700">{err}</p>}
      </div>
      
    </div>
  );
};

export default Signup;
