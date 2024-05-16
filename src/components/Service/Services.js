import React from "react";
import pic from "../Jobconnect IMG/RecruitH.png";
import man from "../Jobconnect IMG/Man is hired.png";

const Services = () => {
  return (
    <>
      <div className="container mx-auto px-2 sm:px-2 lg:px-8 mt-20">
        <h1 className="font-bold text-3xl mb-12">Services we provide:</h1>
        <section className="container mx-auto flex flex-col lg:flex-row mb-4">
          <div className="w-full lg:w-3/4 h-1/2">
            <h1 className="font-bold text-xl mb-8">For User's</h1>
            <p className="mb-4">
              <span className="font-bold">1.Create Your Account:</span>
              Begin your journey by creating a personalized account on
              JobConnect. Simply fill out a few details about yourself, upload
              your resume, and set your preferences to receive tailored job
              recommendations.
            </p>
            <p className="mb-4">
              <span className="font-bold">2.Discover Opportunities:</span>
              Explore a vast array of job listings from leading companies across
              various industries. Use our advanced search filters to narrow down
              your optionsbased on criteria such as location, job title, slary
              range, and more.
            </p>
            <p className="mb-4">
              <span className="font-bold">3.Build Your Profile:</span>
              Showcase your skills, experience, and accomplishments by creating
              a comprehensive profile on JobConnect. Highlight your strengths,
              upload work samples or portfolios, and provide relevant details to
              stand out to potential employers.
            </p>
            <p className="mb-4">
              <span className="font-bold">4.Apply with Ease:</span>
              Apply to job openings directly through the JobConnect platform
              with just a few clicks. Save time by storing multiple versions of
              your resume and cover letter, making it easily to tailor your
              application to each opportunity.
            </p>
            <p className="mb-4">
              <span className="font-bold">5.Receive Recommendations:</span>
              Benefit from personalized job reommendations based on your
              profile, preferences, and search history. Stay informed about new
              opportunities that match your interests, ensuring you never miss
              out on a potential career-changing opportunity.
            </p>
          </div>
          <div className="w-full lg:w-1/2 h-1/2 justify-center ml-4 lg:ml-16 lg:mt-4">
            <img
              className="w-full md:w-1/2 lg:w-3/4 h-1/2justify-center items-center"
              src={man}
            />
          </div>
        </section>
        <section className="container mx-auto flex flex-col lg:flex-row mb-4">
          <div className="w-full  lg:w-1/2 h-1/2 justify-center items-center">
            <img
              className="w-full md:w-1/2 lg:w-3/4 h-1/2 justify-center items-center"
              src={pic}
            />
          </div>
          <div className="w-full lg:w-1/2 h-1/2">
            <h1 className="font-bold text-xl mb-8">For Recruiters-</h1>
            <p>
              <span className="font-bold">1.Create Your Employer Account:</span>
              Get started by creating an employer account on JobConnect. Provide
              essential details about your company, including your industry,
              size, and hiring needs, to customize your recruiting experience.
            </p>
            <p>
              <span className="font-bold">2.Post Job Opening:</span>
              Easily post job openings on JobConnect to attract top talent from
              our extensive pool of job seekers. Provide detailed descriptions,
              qualifications, and other relevant information to ensure your
              listings stand out to potential candidates.
            </p>
            <p>
              <span className="font-bold">3.Manage Applications:</span>
              Streamline your hiring process by managing all applications
              directly throughthe JobConnect platform. Review resumes, cover
              letters, and portfolios, and communicate with candidates
              seamlessly to move them through the recruitment pipeline.
            </p>
            <p>
              <span className="font-bold">4.Search for Candidates:</span>
              Access our database of job seekers to proactively search for
              candidates who meet your specific requirements. Use advanced
              search filters to narrow down your options based on skills,
              experience, location, and oter criteria.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default Services;
