import React from "react";
const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Hire</h1>

      <p className="text-gray-700 mb-6 text-lg text-center">
        Top Hire is a modern platform dedicated to helping individuals find the
        right job opportunities faster and easier. Whether you’re a fresher or
        experienced, we connect you to companies that matter.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Why Choose JobSeeker?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Verified job listings</li>
            <li>Apply with 1 click</li>
            <li>Smart filters for location, role, and skills</li>
            <li>Career guidance & resume tips</li>
            <li>Trusted by 500+ companies</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to bridge the gap between great talent and great
            companies by offering a simple, intuitive, and efficient job search
            experience.
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition">
          Start Your Search
        </button>
      </div>
    </div>
  );
};

export default About;
