import React from "react";
import { Link } from "react-router-dom";
import moneyIcon from "../assets/images/Icons/Frame.png";
import locationIcon from "../assets/images/Icons/Location Icon.png";

const FeaturedJobs = ({ jobData }) => {
  const {
    id,
    company_logo,
    job_title,
    company_title,
    job_type,
    job_time,
    location,
    salary,
  } = jobData;
  return (
    <div>
      <img src={company_logo} alt="company-logo" />
      <h2>{job_title}</h2>
      <p>{company_title}</p>
      <div>
        <button>{job_type}</button>
        <button>{job_time}</button>
      </div>
      <div>
        <div className="inline-flex">
          <img src={locationIcon} alt="" />
          <span> {location}</span>
          <img src={moneyIcon} alt="" />
          <span>Salary:{salary}</span>
        </div>
      </div>
      <Link to={`job/${id}`}>
        <button className="px-3 py-2 bg-gradient-to-r from-purple-400 to-purple-500  font-bold text-white rounded">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FeaturedJobs;
