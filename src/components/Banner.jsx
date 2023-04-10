import React from "react";
import image from "../assets/All Images/P3OLGJ1 copy 1.png";

const Banner = () => {
  return (
    <div className="custom-container">
      <div className="flex">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-5xl font-bold">
            One Step <br /> Closer To Your <br />
            <span className="text-purple-500 ">Dream Job</span>
          </h1>
          <p className="text-slate-600 my-7 lg:w-8/12">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="px-3 py-2 bg-purple-500 font-bold text-white rounded">
            Get Started
          </button>
        </div>
        <div>
          <img src={image} alt="banner-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
