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
    <div className="w-11/12 mx-auto bg-[url('https://i.ibb.co.com/6R51DRP/marldive-water-2.jpg')] flex justify-center items-center h-[750px] object-cover">
      <div className="card opacity-80 py-4 h-auto transparent max-w-lg w-full shrink-0 shadow-2xl p-6 mb-6">
        <h2 className="font-bold text-center text-purple-700 text-3xl">Sign Up to your Account</h2>
        <form onSubmit={handleSignup} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-purple-700 text-xl font-semibold">Name</span>
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
              <span className="label-text text-purple-700 text-xl font-semibold">PhotoURL</span>
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
              <span className="label-text text-purple-700 text-xl font-semibold">Email</span>
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
              <span className="label-text text-purple-700 text-xl font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-black">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-4">
            <button className="btn btn-primary text-purple-700 text-xl font-semibold">Sign Up</button>
          </div>
          <p className="text-black mb-4">
            Already Have an Account ? Please <Link to="/login"><span className="text-purple-700 text-xl font-semibold">Login</span></Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

