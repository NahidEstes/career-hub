import React from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobList from "./AppliedJobList";

const AppliedJobs = () => {
  const { applyJob } = useLoaderData();
  return (
    <div className="custom-container">
      <h1>{applyJob.length}</h1>
      <div>
        {applyJob.map((job) => (
          <AppliedJobList key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
