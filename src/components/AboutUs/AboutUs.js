import React from "react";
import pic from "../Jobconnect IMG/AboutUS1.png";

const AboutUs = () => {
  return (
    <>
      <div className="container mx-auto px-2 sm:px-2 lg:px-4 mt-12 mb-8 gap-2">
        <section className="mx-auto px-2 flex flex-col lg:flex-row mb-4 lg:mb-8">
          <div className="w-full lg:w-3/4 h-1/2">
            <div className="mt-12 mb-8">
              <h1 className="font-bold mb-8">Welcome to Job Connect</h1>
              <p>
                At Job Connect, we're on a mission to simplify the job search
                and hiring process for both employers and job seekers in today's
                fast-paced world, finding the perfect job or candidate can be
                daunting. That's where Job Connect comes in - we're your trusted
                partner in navigating the ever-evolving landscape of employment
                opportunities.
              </p>
            </div>
            <div>
              <h1 className="font-bold mb-8">Introduction</h1>
              <p>
                Founded on the principles of efficiency, transparency, and
                innovation, Job Connect is a leading online platform dedicated
                to connecting employers with qualified candidates. Whether
                you're a multinational corporation or a budding startup, our
                platform caters to businesses of all sizes and industries.
                Likewise, job seekers from diverse backgrounds trust Job Connect
                to discover meaningful career opportunities that align with
                their skills and aspirations.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-3/4 h-1/2">
            <img src={pic} alt="Job Connect Logo" />
          </div>
        </section>
        <section className="mx-auto px-2 gap-2">
          <h1 className="font-bold mb-4">Overview</h1>
          <p className="mb-4">
            Job Connect offers a comprehensive suite of features designed to
            streamline the entire hiring process. From creating job listings to
            managing applications, our platform empowers users with the tools
            they need to succeed. Here's an Overview of what Job Connect has to
            offer.
          </p>

          <p className="mb-4">
            1. Effortless Job Posting: Employers can create and post job
            listings with ease, providing detailed descriptions of job roles,
            responsibilities, and requirements.{" "}
          </p>
          <p className="mb-4">
            2. Advanced Candidate Search: Our powerful search filters allow
            employees to find the perfect candidates based on specific criteria
            such as skills, experience, and location.
          </p>
          <p className="mb-4">
            3. Seamless Application Management: Job seekers can browse through a
            wide range of job listings and apply with just a few clicks. Our
            intuitive interface makes it easy to track applications and stay
            updated on the hiring process.
          </p>
          <p className="mb-8">
            4. Centralized Communication: Job Connect serves as a centralized
            hub for communication between employers and candidates, facilitating
            seamless interactions throughout the recruitment journey.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
