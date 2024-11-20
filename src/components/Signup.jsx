import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const { createUser, setUser, manageUpdateProfile } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent page reload

    const form = e.target; // Get the form element
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, email, photo, password);

    // Password validation regex
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setErr(
        "Password must be at least 6 characters, include uppercase, lowercase, number, and a special character."
      );
      return; // Stop further execution
    }

    // Reset the error if validation passes
    setErr("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        manageUpdateProfile(name, photo);

        setUser(user);

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Congrats..! ${user.name}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
        setErr(error.message);
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: error.message,
        });
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
            <button
              type="button"
              onClick={handleShowPassword}
              className="flex items-center justify-center btn btn-sm border-none hover:bg-none bg-transparent absolute right-2 bottom-16"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

            <label className="label mt-6">
              <a href="#" className="label-text-alt link link-hover text-black">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-4">
            <button
              type="submit"
              className="btn btn-primary text-purple-700 text-xl font-semibold"
            >
              Sign Up
            </button>
          </div>

          <p className="text-black mb-4">
            Already Have an Account? Please{" "}
            <Link to="/login">
              <span className="text-purple-700 text-xl font-semibold">
                Login
              </span>
            </Link>
          </p>
          {err && (
            <p className="text-red-600 text-sm mt-2 absolute -bottom-4">
              {err}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
