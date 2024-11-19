import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center">
      not found page
      <Link to='/' className="mt-6 px-6 py-3 bg-secondary text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400">
                  Back to Home
                </Link>
    </div>
  );
};

export default ErrorPage;