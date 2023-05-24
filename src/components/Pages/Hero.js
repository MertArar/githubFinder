import React from "react";
import Typed from "react-typed";

import { Link } from "react-router-dom";

import { AiOutlineWarning } from "react-icons/ai";

import { RiSendPlaneFill, RiShieldCheckFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#0073DF] font-bold p-2 uppercase">
          github finder application
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Reach all users!
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Quickly reach
          </p>{" "}
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4"
            strings={["Users ", "Developers", "Engineers"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Use the search engine to reach users. However, there are some rules
          you need to pay attention to.
        </p>

        <button
          to="/"
          className="bg-[#0059DF] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white"
        >
          <Link to="/login">Get Started</Link>
        </button>

        <div className="flex flex-col justify-start items-start mt-8 gap-2">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <AiOutlineWarning size={25} />
            <p className="md:text-xl sm:text-lg text-sm font-bold md:py-6">
              When searching, you must type the user's username exactly.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <RiShieldCheckFill size={25} />
            <p className="md:text-xl sm:text-lg text-sm font-bold md:py-6">
              No information other than the user information on the site can be
              accessed.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <RiSendPlaneFill size={25} />
            <p className="md:text-xl sm:text-lg text-sm font-bold md:py-6">
              You can access all the user's data on Github
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
