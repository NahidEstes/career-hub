import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import FeaturedJobs from "./FeaturedJobs";
import JobCatList from "./JobCatList";

const Home = () => {
  const jobsData = useLoaderData();
  const [data, setData] = useState();

  const [showAllData, setShowAllData] = useState(false);

  const showMoreButton = () => {
    setShowAllData(true);
  };

  useEffect(() => {
    fetch("job-data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
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
        <div className="grid lg:grid-cols-2 gap-4 lg:ml-10">
          {showAllData === true
            ? data &&
              data.map((jobData) => (
                <FeaturedJobs key={jobData.id} jobData={jobData} />
              ))
            : data &&
              data
                .slice(0, 4)
                .map((jobData) => (
                  <FeaturedJobs key={jobData.id} jobData={jobData} />
                ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => showMoreButton()}
            className="mt-4 px-3 py-2 bg-gradient-to-r from-purple-400 to-purple-500  font-bold text-white rounded"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
