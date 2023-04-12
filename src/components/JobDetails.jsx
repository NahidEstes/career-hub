import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import moneyIcon from "../assets/images/Icons/Frame.png";
import jobTitleIcon from "../assets/images/Icons/Frame-1.png";
import phoneIcon from "../assets/images/Icons/Frame-2.png";
import emailIcon from "../assets/images/Icons/Frame-3.png";
import locationIcon from "../assets/images/Icons/Frame-4.png";
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
      <div className="mb-28 mt-16">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          Job Details
        </h1>
      </div>
      <div className="lg:flex gap-3">
        <div className="lg:w-8/12">
          <p>
            <strong>Job Description: </strong>
            <span className="text-gray-600">{job_description}</span>
          </p>
          <p className="my-4">
            <strong>Job Responsibility: </strong>
            <span className="text-gray-600">{job_responsibility}</span>
          </p>
          <p>
            <strong>Educational Requirements: </strong> <br />
            <span className="text-gray-600">{edu_requirements}</span>
          </p>
          <p className="mt-4">
            <strong>Experiences: </strong> <br />
            <span className="text-gray-600">{experience}</span>
          </p>
        </div>
        <div>
          <div className=" bg-purple-100 rounded p-6">
            <h3 className="text-lg font-bold mb-2">Job Details</h3>
            <hr />

            <div className="mt-3">
              <div className="flex">
                <img src={moneyIcon} alt="" />
                <p>
                  <strong className="ml-2 text-gray-700">Salary: </strong>
                  <span className="text-gray-600">{salary}</span>
                </p>
              </div>
              <div className="flex items-center">
                <img src={jobTitleIcon} className="h-6" alt="" />
                <p className="my-2">
                  <strong className="ml-2 text-gray-700">Job Title: </strong>
                  <span className="text-gray-600">{title}</span>
                </p>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Contact Information
            </h3>
            <hr />
            <div>
              <div className="flex items-center mt-2">
                <img src={phoneIcon} className="h-5" alt="" />
                <p>
                  <strong className="ml-2 text-gray-700">Phone: </strong>
                  <span className="text-gray-600">{phone_no}</span>
                </p>
              </div>
              <div className="flex items-center">
                <img src={emailIcon} className="w-5" alt="" />
                <p className="my-2">
                  <strong className="ml-2 text-gray-700">Email: </strong>
                  <span className="text-gray-600">{email}</span>
                </p>
              </div>

              <div className="flex items-center">
                <img src={locationIcon} className="w-5" alt="" />
                <p>
                  <strong className="ml-2 text-gray-700">Address: </strong>
                  <span className="text-gray-600">{address}</span>
                </p>
              </div>
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
