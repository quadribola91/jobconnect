import React, { useEffect, useRef } from "react";
import Home2 from "./Home2";
import pic from "../Jobconnect IMG/Home1.png";
import "./HomeContent2.css";
import Dashboard from "../Dashboard/Dashboard";

const HomeContent2 = () => {
  const leftRef = useRef(null);

  useEffect(() => {
    function isInViewport(ref) {
      const rect = ref.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    function handleScroll() {
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
    <>
      <div
        ref={leftRef}
        className="container mx-auto flex flex-col md:flex-row mb-4 px-2 sm:px-2 lg:px-3 mt-4"
      >
        <section className="mx-auto w-full lg:w-1/2 h-1/2">
          <div
            id="right"
            className="mt-16 md:mt-32 justify-center text-center items-center mx-auto min-auto"
          >
            <div className="text-start justify-center items-center ">
              <h1 className="text-bold text-2xl md:text-3xl lg:text-4xl mb-7">
                <span className="text-blue-800">Connecting</span> Companies with
                Talent, Seamlessly.
              </h1>
              <p className="flex text-black text-md">
                At Job Connect,We understand the significance of finding the
                right <br />
                fit for both employers and job seekers. Our platform simplifes
                the recruitment process by providing a seamless interface where
                companies can effortlessly post their Job openings and talented
                individuals can explore opportunities that match their skills
                and aspirations. We believe in fostering genuine connections
                that lead to long-term success for both parties. With Job
                Connect, finding the perfect match has never been easier. Join
                us today and Unlock a world of possibilities for your career or
                business.
              </p>
            </div>

            {/* Inside the input field */}
            <div className="relative w-full justify-center mt-10">
              <input
                type="text"
                placeholder="Search any job openings here"
                className="w-full px-4 md:px-8 py-2 bg-white text-black rounded-full text-start border-2 md:border-4 outline-none"
                id="search"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35a7.5 7.5 0 10-1.41 1.41L21 21zm-10.5-5.5a5 5 0 115-5 5 5 0 01-5 5z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto w-full md:w-1/2 h-1/2 hidden lg:block">
          <div
            id="left"
            className="flex justify-center items-center mt-o p-15 ml-35 w-auto"
          >
            <div
              id="img-c"
              className="md:max-w-lg lg:max-w-xl hidden md:block mt-24"
            >
              <img src={pic} />
            </div>
          </div>
        </section>
      </div>
      <Home2 />
      <Dashboard />
    </>
  );
};

export default HomeContent2;
