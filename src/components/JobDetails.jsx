import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import moneyIcon from "../assets/images/Icons/Frame.png";
import { addToDb } from "../utils/fakeDb";

const JobDetails = () => {
  const detailsData = useLoaderData();
  const { id } = useParams();
  const [jobData, setJobData] = useState({});

  const {
    job_description,
    job_responsibility,
    edu_requirements,
    experience,
    salary,
    title,
  } = jobData;

  const applyHandler = (id) => {
    console.log(id);
    addToDb(id);
  };

  useEffect(() => {
    const findData =
      detailsData && detailsData.find((detail) => detail.id === parseInt(id));
    setJobData(findData);
  }, []);

  //   console.log(jobDatas);
  return (
    <div className="custom-container">
      <h1>job details</h1>
      <div className="lg:flex">
        <div className="lg:w-8/12">
          <p>
            <strong>Job Description:</strong> {job_description}
          </p>
          <p>
            <strong>Job Responsibility:</strong> {job_responsibility}
          </p>
          <p>
            <strong>Educational Requirements:</strong> <br />
            {edu_requirements}
          </p>
          <p>
            <strong>Experiences:</strong> <br />
            {experience}
          </p>
        </div>
        <div>
          <div className="leading-8 bg-purple-100 rounded p-8">
            <h3>Job Details</h3>
            <hr />
            <div className="">
              <div className="flex">
                <img src={moneyIcon} alt="" />
                <span>
                  <strong>Salary:</strong> {salary}
                </span>
              </div>
              <strong>Job Title:</strong>
              {title}
            </div>
            <h3>Contact Information</h3>
            <hr />
            <div>
              <p>
                <strong>Phone:</strong> 0134553234345
              </p>
              <p>
                <strong>Email:</strong>info@gmail.com
              </p>
              <p>
                <strong>Address</strong>Ghulsan-2, Dhaka, Bangladesh:
              </p>
            </div>
          </div>

          <button
            onClick={() => applyHandler(id)}
            className="w-full mt-5 px-3 py-3 bg-purple-500 font-bold text-white rounded"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
