import { useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.config";
import { useState } from "react";
import "animate.css"; 

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || "");
  const [fadeOut, setFadeOut] = useState(false); 

  const handlePasswordReset = async () => {
    if (!email) {
      alert("Please provide a valid email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Please check your inbox.");
      setFadeOut(true); 
      setTimeout(() => {
        navigate("/"); 
      }, 1000); 
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <div
      className={`flex flex-col pt-20 my-24 items-center justify-center min-h-screen bg-gray-100 ${
        fadeOut ? "animate__animated animate__fadeOut" : "animate__animated animate__bounceInDown animate__delay-2s  bg-gray-400"
      }`}
    >
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePasswordReset();
          }}
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
