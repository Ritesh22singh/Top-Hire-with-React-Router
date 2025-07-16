import React from "react";
import jobListings from "./jobListings";

const Jobs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Open Positions</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobListings.map((job) => (
          <div
            key={job.id}
            className="bg-white border rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{job.Desination}</h3>
            <p className="text-gray-600 mb-4">{job.Discription}</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-600 font-medium">
                ₹ {job.Salary.toLocaleString()}/mo
              </span>
              <button className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
