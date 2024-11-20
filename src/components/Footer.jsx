
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full px-4 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Website Name or Logo */}
        <div className="text-center md:text-left mb-4 md:mb-0">
        <a className=" text-2xl">Diving Story<small className="flex items-center">Eco Adventures</small></a>
          <p>Explore eco-friendly travel adventures.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/shawonctg22/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/shahab-uddin24/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/shahab-24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-pink-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://github.com/shahab-24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="text-center mt-4 text-sm text-gray-400">
        &copy; 2024 Eco Adventures. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
