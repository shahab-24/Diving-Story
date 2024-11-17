import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold my-2">Login With</h2>
      <div className="flex flex-col my-3 space-y-2">
        <button className="btn"><FaGoogle></FaGoogle> Login with Google </button>
        <button className="btn"><FaGithub></FaGithub> Login with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
