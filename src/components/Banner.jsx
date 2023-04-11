import React from "react";
import image from "../assets/images/All-Images/P3OLGJ1copy 1.png";
const Banner = () => {
  return (
    <div className="bg-zinc-50">
      <div className="lg:flex custom-container">
        <div className="flex flex-col items-start justify-center mb-4">
          <h1 className="text-6xl font-bold">
            <span className="mb-2">One Step</span> <br />
            <span className="mt-2">Closer To Your</span> <br />
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
