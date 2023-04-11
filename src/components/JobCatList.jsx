import React from "react";

const JobCatList = ({ jobsData }) => {
  return (
    <div className="my-5 custom-container">
      <h1 className="text-4xl text-center font-bold">Job Category List</h1>
      <p className="text-center my-4 text-slate-600">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid lg:grid-cols-4 gap-4 justify-center items-center lg:pl-10 my-10">
        {jobsData &&
          jobsData.map((job) => (
            <div key={job.id} className="bg-slate-50 lg:w-10/12 rounded p-5">
              <img src={job.img} alt="" />
              <h3 className="text-lg font-semibold my-2">{job.title}</h3>
              <p>{job.available_jobs} Jobs Available</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobCatList;
