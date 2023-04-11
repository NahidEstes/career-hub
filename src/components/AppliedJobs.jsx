import React from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobList from "./AppliedJobList";

const AppliedJobs = () => {
  const { jobData, applyJob } = useLoaderData();
  console.log(applyJob);
  // const jobData = useLoaderData();
  // console.log("dfd id", typeof jobData[0].id);
  // let applyJob = [];
  // const savedApplyJob = getStoredCart();
  // console.log(savedApplyJob);
  // for (const id in savedApplyJob) {
  //   console.log(typeof id);
  //   const foundJob = jobData.find((job) => job.id === parseInt(id));

  //   if (foundJob) {
  //     applyJob.push(foundJob);
  //   }
  // }
  // console.log(applyJob);

  return (
    <div className="custom-container">
      <h1>{applyJob.length}</h1>
      <div>
        {applyJob.map((job) => (
          <AppliedJobList job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
