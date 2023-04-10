import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import FeaturedJobs from "./FeaturedJobs";
import JobCatList from "./JobCatList";

const Home = () => {
  const jobsData = useLoaderData();

  const [data, setData] = useState();

  useEffect(() => {
    fetch("job-data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <Banner />
      <JobCatList jobsData={jobsData} />
      <div className="custom-container">
        <h1 className="text-4xl text-center font-bold">Featured Jobs</h1>
        <p className="text-center my-4 text-slate-600">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid lg:grid-cols-2 gap-4">
          {data &&
            data.map((jobData) => (
              <FeaturedJobs key={jobData.id} jobData={jobData} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
