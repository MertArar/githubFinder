import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-500 mt-32 gap-x-10 text-base p-4 text-center text-white">
      <div className="flex justify-center items-start text-gray-200 gap-x-6  ">
        <Link to="/" className="hover:text-sky-400 hover:animate-pulse">
          Home
        </Link>
        <Link to="/login" className="hover:text-sky-400 hover:animate-pulse">
          Login
        </Link>
        <Link to="/about" className="hover:text-sky-400 hover:animate-pulse">
          About
        </Link>
      </div>
      <div className="mt-4 text-sm">
        Copyright &copy; 2023 Mert Arar. All rights reserved.
      </div>
      <div className="text-[20px] flex place-content-center max-w-full gap-x-6 mx-auto mt-4 lg:mx-0">
        <a
          href="https://github.com/MertArar"
          className="hover:text-sky-400 hover:animate-pulse"
        >
          <FaGithub />
        </a>
        <a
          href="https://medium.com/@mertarar.ma"
          className="hover:text-sky-400 hover:animate-pulse"
        >
          <BsMedium />
        </a>
        <a
          href="https://www.linkedin.com/in/mert-arar-6788771bb/"
          className="hover:text-sky-400 hover:animate-pulse"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/mertararr/"
          className="hover:text-sky-400 hover:animate-pulse"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
