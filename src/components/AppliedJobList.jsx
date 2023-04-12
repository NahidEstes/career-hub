import { Link } from "react-router-dom";
import locationIcon from "../assets/images/Icons/Frame-4.png";
import moneyIcon from "../assets/images/Icons/Frame.png";

const AppliedJobList = ({ job }) => {
  const { id, company_logo, title, company_title, job_type, job_time, salary } =
    job;

  return (
    <div className="lg:flex justify-between items-center border border-slate-200 my-5 shadow p-4">
      <div className="lg:flex">
        <div className="bg-slate-200 rounded p-5">
          <img className="h-20 w-52 my-10 p-2" src={company_logo} alt="" />
        </div>
        <div className="p-5">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="my-3 text-slate-500">{company_title}</p>
          <div>
            <button className="border w-30 rounded  text-purple-500 border-purple-400 px-4 py-1 mr-5 ">
              {job_type}
            </button>
            <button className="border w-30 rounded border-purple-400 text-purple-500 px-4 py-1 mr-5 ">
              {job_time}
            </button>
          </div>
          <div className="flex gap-2 mt-3 ">
            <div className="flex">
              <img src={locationIcon} alt="" />
              <span>Dhaka, Bangladesh</span>
            </div>

            <div className="flex">
              <img src={moneyIcon} alt="" />
              <span>Salary: {salary}</span>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/job/${id}`}>
        <button className="px-3 py-2 bg-purple-500 font-bold text-white rounded mr-10">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default AppliedJobList;
