import React from "react";
import { Link } from "react-router-dom";
import moneyIcon from "../assets/images/Icons/Frame.png";
import locationIcon from "../assets/images/Icons/Location Icon.png";

const FeaturedJobs = ({ jobData }) => {
  const {
    id,
    company_logo,
    title,
    company_title,
    job_type,
    job_time,
    address,
    salary,
  } = jobData;
  return (
    <div className="border border-slate-300 p-5 ">
      <img src={company_logo} alt="company-logo" className="w-32" />
      <h2 className="text-xl my-3 font-semibold text-slate-800">{title}</h2>
      <p className="text-lg text-slate-700 font-semibold">{company_title}</p>
      <div className="my-3">
        <button className="w-24 border border-cyan-400 px-5 py-1 rounded font-semibold text-slate-600">
          {job_type}
        </button>
        <button className="border border-cyan-400 px-5 py-1 rounded ml-2 font-semibold text-slate-600">
          {job_time}
        </button>
      </div>
      <div>
        <div className="inline-flex">
          <img src={locationIcon} alt="" />
          <span className="ml-2 font-semibold text-slate-600"> {address}</span>
          <img src={moneyIcon} className="ml-4" alt="" />
          <span className="ml-2 font-semibold text-slate-600">
            Salary:{salary}
          </span>
        </div>
      </div>
      <Link to={`job/${id}`}>
        <button className="mt-4 px-3 py-2 bg-gradient-to-r from-purple-400 to-purple-500  font-bold text-white rounded">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FeaturedJobs;
