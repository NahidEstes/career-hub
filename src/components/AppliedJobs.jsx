import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobList from "./AppliedJobList";

const AppliedJobs = () => {
  const { applyJob } = useLoaderData();
  const [isFilter, setIsFilter] = useState(false);
  const remoteFiltering = () => {
    const filterData = applyJob.filter((job) => job.job_type === "Remote");
    setIsFilter(filterData);
  };

  const onsiteFiltering = () => {
    const remoteFilterData = applyJob.filter(
      (job) => job.job_type === "Onsite"
    );
    setIsFilter(remoteFilterData);
  };

  return (
    <div className="custom-container">
      <h1 className="text-center font-bold text-3xl text-gray-800">
        {applyJob.length === 0 ? "You did not apply to any job yet..." : ""}
      </h1>
      <div className="mb-20 mt-10">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          Applied Jobs
        </h1>
      </div>
      <div>
        <div className="text-end">
          <button
            onClick={() => remoteFiltering()}
            className="px-3 py-2 bg-pink-500 font-bold text-white rounded mr-5"
          >
            Show Remote Jobs
          </button>
          <button
            onClick={() => onsiteFiltering()}
            className="px-3 py-2 bg-pink-500 font-bold text-white rounded mr-10"
          >
            Show Onsite Jobs
          </button>
        </div>
      </div>

      <div>
        {isFilter
          ? isFilter.map((job) => (
              <AppliedJobList
                key={job.id}
                remoteFiltering={remoteFiltering}
                job={job}
              />
            ))
          : applyJob.map((job) => (
              <AppliedJobList
                key={job.id}
                remoteFiltering={remoteFiltering}
                job={job}
              />
            ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
