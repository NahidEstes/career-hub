import React from "react";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  return (
    <div className="custom-container">
      <div>
        <div className="flex justify-between items-center border border-slate-200">
          <div className="flex ">
            <img
              className="w-52"
              src="https://i.ibb.co/X7RHRs1/P3-OLGJ1copy-1.png"
              alt=""
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold">
                Technical Database Engineer
              </h2>
              <p className="my-3 text-slate-500">Google LLC</p>
              <div>
                <button className="border w-30 rounded  text-blue-500 border-cyan-100 px-4 py-1 mr-5 ">
                  Remote
                </button>
                <button className="border w-30 rounded border-cyan-100 text-blue-500 px-4 py-1 mr-5 ">
                  Full Time
                </button>
              </div>
              <div className="mt-3">
                <span>Dhaka, Bangladesh</span>
                <span>Salary: 100K - 200K</span>
              </div>
            </div>
          </div>
          {/* <Link to={`job/${id}`}> */}
          <button className="px-3 py-2 bg-purple-500 font-bold text-white rounded mr-10">
            View Details
          </button>
          {/* </Link>          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
