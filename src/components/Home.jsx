import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
  const jobsData = useLoaderData();
  console.log(jobsData);
  return (
    <div className="bg-red-50">
      <Banner />
    </div>
  );
};

export default Home;
