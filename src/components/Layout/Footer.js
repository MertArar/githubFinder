import React from "react";
import { Link } from "react-router-dom";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="bg-gray-500  gap-x-10 text-base p-4 text-center text-white">
      <div className="flex flex-row gap-4 justify-center items-center mb-6 font-semibold">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/login">
          <h3>Search</h3>
        </Link>
        <Link to="/about">
          <h3>Terms & Policy</h3>
        </Link>
      </div>
      Copyright &copy; 2023 Mert Arar. All rights reserved.
      <div
        className=" text-[20px] flex place-content-center max-w-full gap-x-6  mx-auto
              lg:mx-0 mt-6 "
      >
        <a href="https://github.com/MertArar">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mert-arar-6788771bb/">
          <FaLinkedinIn />
        </a>
        <a href="https://medium.com/@mertarar.ma">
          <SiMedium />
        </a>
      </div>
    </div>
  );
};

export default Footer;
