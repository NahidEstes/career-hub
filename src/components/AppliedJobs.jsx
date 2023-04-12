import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobList from "./AppliedJobList";

const AppliedJobs = () => {
  const { applyJob } = useLoaderData();
  console.log(applyJob);
  const [isFilter, setIsFilter] = useState(false);

  const remoteFiltering = (job_param) => {
    // setIsFilter(true);
    const filterData = applyJob.filter((job) => job.job_type === job_param);
    setIsFilter(filterData);
  };

  const onsiteFiltering = (remote) => {
    const remoteFilterData = applyJob.filter((job) => job.job_type === remote);
    setIsFilter(remoteFilterData);
  };
  console.log("filter", isFilter);

  return (
    <div className="custom-container">
      <h1 className="text-center font-bold text-3xl text-gray-800">
        {applyJob.length === 0 ? "You did not apply to any job yet..." : ""}
      </h1>
      <div>
        <div className="text-end">
          <button
            onClick={() => remoteFiltering("Remote")}
            className="px-3 py-2 bg-pink-500 font-bold text-white rounded mr-5"
          >
            Show Remote Jobs
          </button>
          <button
            onClick={() => onsiteFiltering("Onsite")}
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
        {/* {applyJob.map((job) => (
          <AppliedJobList
            key={job.id}
            remoteFiltering={remoteFiltering}
            job={job}
          />
        ))} */}
      </div>
    </div>
  );
};

export default AppliedJobs;
