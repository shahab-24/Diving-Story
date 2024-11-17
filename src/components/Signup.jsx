import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { createUser, setUser, manageUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
  

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        alert(user, "user created successfully");

        manageUpdateProfile(name, photo);
        setUser(user);
        
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-11/12 mx-auto bg-[#FFFFFF] flex justify-center items-center">
      <div className="card bg-base-100 min-h-screen max-w-lg w-full shrink-0 shadow-2xl p-10 my-4">
        <h2 className="font-semibold text-center">Sign Up to your Account</h2>
        <form onSubmit={handleSignup} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
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
              <span className="label-text">PhotoURL</span>
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
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
          <p>
            Already Have an Account ? Please <Link to="/auth/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

