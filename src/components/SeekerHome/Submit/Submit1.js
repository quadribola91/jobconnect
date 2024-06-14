import React from "react";
import { useNavigate } from "react-router-dom";
import "./Submit1.css";

const Submit1 = () => {
  const navigate = useNavigate();

  // Function to handle smooth scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to handle navigation to another page/component
  const handleApplyNow = () => {
    navigate("/submit2"); // Replace with the actual path to your component
  };

  return (
    <>
      <div
        className="container mx-auto px-2 py-2 md:py-8 lg:px-48 lg:py-24"
        onClick={scrollToTop}
      >
        <div className="search-bar">
          <input type="text" placeholder="Job titles, Company or Keywords" />
          <input type="text" placeholder="City, State, Zipcode or 'Remote'" />
          <button>Find Jobs</button>
        </div>
        <div className="job-listing">
          <div className="job-summary">
            <h2>PHP/Laravel Developer</h2>
            <p>
              <a href="#">
                <u>Meera.ai</u>
              </a>
            </p>
            <p>Remote</p>
            <p>₹80,000 - ₹1,00,000 a month</p>
            <p>
              <button>Easily apply</button>
            </p>
            <p>
              Ability to work independently and adapt to a fast-paced and
              dynamic environment, specifically when working on Laravel-based
              tasks and supporting Laravel applications...
            </p>
          </div>
          <div className="job-details">
            <h3>Job details</h3>
            <p>Here's how the job details align with your profile.</p>
            <ul>
              <li>Pay: ₹80,000 - ₹1,00,000 a month</li>
              <li>Job type: Permanent, Full-time</li>
              <li>
                Shift and schedule: Night shift, Fixed shift, Monday to Friday
              </li>
            </ul>
            <h3>Full job description</h3>
            <p>Position: PHP/Laravel Developer</p>
            <p>Location: Remote</p>
            <p>Type: Full-time</p>
            <p>About Mantra Digital - Meera</p>
            <p>
              Join us at Mantra Digital and be part of reshaping business
              communication with Meera, our AI-powered text-based engagement
              platform. Boost confidence, trust, and customer relationships with
              Meera's human-like interactions at scale. As a Senior PHP/Laravel
              Support Engineer, you'll drive the development and maintenance of
              our PHP-based backend systems, ensuring efficient software
              delivery and providing exceptional support to our customers.
              Experience the excitement of revolutionizing customer engagement
              and brand loyalty. Apply now to join our dynamic team and make a
              significant impact in transforming how businesses communicate with
              customers.
            </p>
            <button
              className="bg-gray-200 hover:bg-gray-100"
              onClick={handleApplyNow}
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submit1;
