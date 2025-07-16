import React from "react";

const Home = () => {
  return (
    <div className="p-4 flex items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Search Jobs</h1>

      {/* Keyword Input */}
      <input
        type="text"
        placeholder="Skill/Keyword"
        className="border border-gray-300 px-4 py-2 rounded mr-2 mb-2"
      />

      {/* City Dropdown */}
      <select
        className="border border-gray-300 px-4 py-2 rounded mr-2 mb-2"
        defaultValue=""
      >
        <option value="" disabled>
          Select City
        </option>
        <option value="mumbai">Mumbai</option>
        <option value="delhi">Delhi</option>
        <option value="bangalore">Bangalore</option>
        <option value="hyderabad">Hyderabad</option>
        <option value="chennai">Chennai</option>
        <option value="pune">Pune</option>
      </select>

      {/* Submit Button */}
      <button className="bg-orange-400 text-black px-6 py-2 rounde">
        Find Jobs
      </button>
    </div>
  );
};

export default Home;
