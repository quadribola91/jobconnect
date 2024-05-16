import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Function to handle smooth scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };
  return (
    <div className="px-6">
      <h2 className="text-center font-bold text-xl md:text-3xl mb-4">
        Dashboard!
      </h2>
      <div className="justify-between p-3 flex">
        <Link
          to="/recruiterhome"
          className="dashboard-button flex flex-start text-white bg-gray-300 hover:bg-blue-200 p-3 rounded-md"
          onClick={scrollToTop}
        >
          Recruiter
        </Link>
        <Link
          to="/seekerhome"
          className="dashboard-button flex flex-end text-white bg-gray-300 hover:bg-blue-200 p-3 rounded-md"
          onClick={scrollToTop}
        >
          Job Seeker
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
