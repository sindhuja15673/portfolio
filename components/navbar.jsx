"use client";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ScrollLink to="home" smooth={true} duration={500} className="text-2xl font-semibold text-white cursor-pointer">
          Portfolio
        </ScrollLink>


        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-gray-400 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>


        <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}>
          <ul className="font-medium flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 p-4 md:p-0 bg-gray-900 md:bg-transparent rounded-lg md:rounded-none">
            {[
              { name: "Home", path: "home" },
              { name: "About", path: "about" },
              { name: "Skills", path: "skills" },
              { name: "Projects", path: "projects" },
              { name: "Contact", path: "contact" },
            ].map((link) => (
              <li key={link.path}>
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} 
                  activeClass="!text-blue-400" 
                  className="block py-2 px-4 text-white rounded-sm transition duration-300 hover:bg-gray-800 hover:text-blue-400 md:hover:bg-transparent cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


