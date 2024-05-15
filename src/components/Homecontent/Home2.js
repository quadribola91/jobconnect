import React, { useEffect, useRef } from "react";
import pic1 from "../Jobconnect IMG/How2.png";
import pic2 from "../Jobconnect IMG/Recruit.png";
import pic3 from "../Jobconnect IMG/T1.png";
import pic4 from "../Jobconnect IMG/T2.png";
import "./Home2.css";

const Home2 = () => {
  const rightRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    function isInViewport(ref) {
      const rect = ref.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    function handleScroll() {
      if (isInViewport(rightRef)) {
        rightRef.current.classList.add("slide-in-from-right");
      }
      if (isInViewport(leftRef)) {
        leftRef.current.classList.add("slide-in-from-left");
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on initial render

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container mx-auto px-2 md:px-4 lg:px-12 py-8 mt-8">
      <h1 className="font-bold mb-4">About Job Connect</h1>
      <p className="lg:w-1/2">
        Welcome to Job Connect, your ultimate destination for seamless job
        postings and effortless applications. We understand the challenges job
        seekers and employers face in today's competitive market, and we're here
        to bridge the gap with our innovative platform.
      </p>

      {/* Why Choose Job Connect Section */}
      <section ref={rightRef} className="flex flex-col lg:flex-row mb-12">
        <img
          src={pic2}
          alt="Why Choose Job Connect"
          className="w-full lg:w-1/2 lg:mr-4 mb-4 lg:mb-0"
        />
        <div className="lg:w-1/2 lg:ml-4">
          <h2 className="font-bold mb-4 mt-4 lg:mt-16">
            Why Choose Job Connect?
          </h2>
          <ol className="list-decimal pl-4">
            <li>
              Extensive Network: Job Connect boasts an extensive network of
              employers and job seekers, ensuring a diverse pool of
              opportunities for both parties.
            </li>
            <li>
              Efficiency Redefined: With our user-friendly interface and
              intuitive features, finding the right job or candidate has never
              been easier. We streamline the entire process, saving you time and
              effort.
            </li>
            <li>
              Customized Solutions: Whether you're a job seeker looking for that
              perfect role or an employer seeking top talent, Job Connect offers
              tailored solutions to meet your unique needs.
            </li>
            <li>
              Reliable Support: Our dedicated support team is here to assist you
              every step of the way. From resolving technical issues to offering
              career advice, we're committed to your success.
            </li>
          </ol>
        </div>
      </section>

      {/* How it Works Section */}
      <section ref={leftRef} className="flex flex-col lg:flex-row mb-12">
        <div className="lg:w-1/2 lg:mr-4 mt-8">
          <h2 className="font-bold mb-4 mt-4 lg:mt-12">How it Works</h2>
          <ol className="list-decimal pl-4">
            <li>
              Job Posting: Employers can easily create and post job listings,
              complete with detailed descriptions and requirements.
            </li>
            <li>
              Candidate Search: Job Connect provides advanced search filters to
              help employers find the ideal candidates based on specific
              criteria such as skills, experience, and location.
            </li>
            <li>
              Application Management: Job seekers can browse through various job
              listings and apply with just a few clicks. Our platform simplifies
              the application process, allowing candidates to track their
              applications and receive updates in real-time.
            </li>
            <li>
              Communication Hub: Job Connect serves as a centralized
              communication hub, facilitating seamless interactions between
              employers and candidates throughout the hiring process.
            </li>
          </ol>
        </div>
        <img
          src={pic1}
          alt="How it Works"
          className="w-full lg:w-1/2 lg:ml-4 mb-4 lg:mb-0"
        />
      </section>

      {/* Testimonials Section */}
      <h2 className="font-bold mb-12 text-center">Testimonials</h2>
      <section ref={rightRef} className="flex flex-col md:flex-row mb-12 gap-3">
        <div className="md:w-1/2 md:ml-4 flex justify-center items-center">
          <div className="container mx-auto flex flex-row justify-center">
            <img src={pic3} alt="Testimonials" className=" w-auto" />
            <img src={pic4} alt="Testimonials" className="w-auto" />
          </div>
        </div>

        <div className="md:w-1/2 md:mr-4">
          <div className="mb-4">
            <p className="bg-blue-800 text-white text-sm p-4 mb-4 lg:mb-8 rounded-2xl">
              *Job Connect has been a game changer for our hiring needs. Not
              only did we find highly qualified candidates quickly, but the
              platform also helped us streamline our recruitment process, saving
              us valuable time and resources.* <br />
              <br />
              <span>-- Sarah Smith, HR Manager, ABC Company</span>
            </p>
          </div>
          <div>
            <p className="bg-blue-800 text-white text-sm p-4 rounded-2xl">
              *As a job seeker, I found Job Connect incredibly user-friendly and
              efficient. Within a week of creating my profile, I received
              multiple interview requests from top companies. Thanks to Job
              Connect, I landed my dream job!* <br />
              <br />
              <span>-- Michael Johnson, Job Seeker</span>
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <p className="text-center font-bold mt-32">
        Join Job Connect today and unlock endless possibilities for your career
        or business!
      </p>
    </div>
  );
};

export default Home2;
