import React, { useEffect, useState } from "react";
import pic from "../Jobconnect IMG/Recruit.png";

// Card component for each section
const Card = ({ title, description }) => {
  return (
    <div className="text-center justify-center bg-gray-200 p-4 mb-4 md:w-60 rounded-2xl h-auto md:h-60">
      <h1 className="text-xl font-bold mt-8 mb-4">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

const RecruiterHome = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  // Function to handle smooth scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <div className="container mx-auto px-4 mt-24 md:mt-8" onClick={scrollToTop}>
      <section className="flex-col md:flex md:flex-row justify-between items-center">
        <div className="flex flex-col md:text-center md:w-1/2 items-center">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-8 text-center">
            Unleash Your Hiring Potential: <br />
            Post Your Job Listing Today!
          </h1>
          {/* Call redirectToJobForm function when button is clicked */}
          <button className="bg-blue-800 rounded-2xl py-3 px-12 text-white text-xl md:text-2xl font-bold">
            Post a job
          </button>
        </div>
        <div className="p-4 md:w-1/2">
          <img src={pic} alt="High C" className="w-full" />
        </div>
      </section>
      <div className="container mx-auto flex flex-col md:flex-row gap-3 px-4 lg:px-32 gap-4 md:gap-6 justify-between">
        {/* Card components */}
        <Card
          title="1. Build your job post"
          description="Then Just add a title, description and location to your job post, and you're ready to go."
        />
        <Card
          title="2. Post your job"
          description="After you post your job, use your state-of-the-art tools to help you find dream talent."
        />
        <Card
          title="3. Find quality applicants"
          description="List your required skills for the job so relevant candidates apply."
        />
      </div>
    </div>
  );
};

export default RecruiterHome;
