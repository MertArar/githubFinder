import React, { useState } from "react";
import { Link } from "react-router-dom";

// icons
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 mb-3 bg-gray-900 shadow-2xl bg-blueGray-500">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap"
              to="/"
            >
              <span className="m-2 text-lg text-white opacity-75 leading-lg animate-pulse">
                <AiFillGithub />
              </span>
              Github Finder
            </Link>
            <button
              className="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen ? <FaBars /> : <FaTimes />}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? "flex" : "hidden")
            }
          >
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              <li className="nav-item">
                <Link>
                  <i className="text-lg text-white opacity-75 fas fa-home leading-lg"></i>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="text-lg text-white opacity-75 fas fa-home leading-lg"></i>
                  <span>Login</span>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="text-lg text-white opacity-75 fas fa-home leading-lg"></i>
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
