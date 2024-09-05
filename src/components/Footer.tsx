import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full min-h-[100px] bg-transparent text-white py-6 mt-10 border-t border-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm text-gray-300">
          © 2024 Maximiliano. Todos los derechos reservados.
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="https://github.com/devnotmax"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#C778DD]"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/machifrias"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#C778DD]"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
