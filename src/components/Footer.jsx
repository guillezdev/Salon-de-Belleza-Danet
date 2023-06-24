import React from "react";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-400">
          © 2023 Creado por{" "}
          <a
            className="hover:text-white"
            href="https://www.linkedin.com/in/guillezdev/"
          >
            Guillezdev
            <FaLinkedin className="inline-block mr-1" />{" "}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
