
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const ErrorPage = () => {
  const navigate = useNavigate();

  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-900 text-white"
      data-aos="fade-up" 
    >
      <div className="text-center animate__animated animate__fadeIn">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-2xl mb-4">Oops! Page Not Found</p>
        <p className="text-lg mb-6">The page you are looking for might have been moved or deleted.</p>
        
        
        <button
          onClick={handleGoHome}
          className="btn btn-primary px-6 py-3 rounded-xl text-white hover:bg-blue-600 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
