import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import moneyIcon from "../assets/images/Icons/Frame.png";
import { addToDb } from "../utils/fakeDb";

const JobDetails = () => {
  const detailsData = useLoaderData();
  const { id } = useParams();
  const [jobData, setJobData] = useState({});
  const [applyJob, setApplyJob] = useState({});

  const {
    job_description,
    job_responsibility,
    edu_requirements,
    experience,
    salary,
    title,
    phone_no,
    email,
    address,
  } = jobData;

  const applyHandler = (id) => {
    let newCart = [];

    const exists = detailsData.find(
      (jobDetail) => jobDetail.id === parseInt(id)
    );
    if (!exists) {
      product.quantity = 1;
      newCart = [...applyJob, product];
    } else {
      const rest = detailsData.filter(
        (existingProduct) => existingProduct.id !== parseInt(id)
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setApplyJob(newCart);
    addToDb(id);
  };

  useEffect(() => {
    const findData =
      detailsData && detailsData.find((detail) => detail.id === parseInt(id));
    setJobData(findData);
  }, []);

  return (
    <div className="custom-container">
      <div className="my-10">
        <h1 className="text-center">Job Details</h1>
      </div>
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
                  <strong>Salary: </strong> {salary}
                </span>
              </div>
              <strong>Job Title: </strong>
              {title}
            </div>
            <h3>Contact Information</h3>
            <hr />
            <div>
              <p>
                <strong>Phone: </strong> {phone_no}
              </p>
              <p>
                <strong>Email: </strong>
                {email}
              </p>
              <p>
                <strong>Address: </strong>
                {address}
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
