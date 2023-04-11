import React from "react";

const AppliedJobList = ({ job }) => {
  const {
    id,
    company_logo,
    title,
    company_title,
    job_type,
    job_time,
    location,
    salary,
  } = job;
  return (
    <div>
      <div className="lg:flex justify-between items-center border border-slate-200">
        <div className="lg:flex">
          <img className="h-20 w-52 mt-5 p-2" src={company_logo} alt="" />
          <div className="p-5">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="my-3 text-slate-500">{company_title}</p>
            <div>
              <button className="border w-30 rounded  text-blue-500 border-cyan-100 px-4 py-1 mr-5 ">
                {job_type}
              </button>
              <button className="border w-30 rounded border-cyan-100 text-blue-500 px-4 py-1 mr-5 ">
                {job_time}
              </button>
            </div>
            <div className="mt-3">
              <span>Dhaka, Bangladesh</span>
              <span>Salary: {salary}</span>
            </div>
          </div>
        </div>
        {/* <Link to={`job/${id}`}> */}
        <button className="px-3 py-2 bg-purple-500 font-bold text-white rounded mr-10">
          View Details
        </button>
        {/* </Link>          {/* </Link> */}
      </div>
    </div>
  );
};

export default AppliedJobList;
