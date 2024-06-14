//  This is the Job Seeker Notification Bar (Notify bar for job seeker )

//  This is the Job Seeker Notification Bar (Notify bar for job seeker )

//  This is the Job Seeker Notification Bar (Notify bar for job seeker )

//  This is the Job Seeker Notification Bar (Notify bar for job seeker )

//  This is the Job Seeker Notification Bar (Notify bar for job seeker )

//  This is the Job Seeker Notification Bar (Notify bar for job seeker )

//  This is the Job Seeker Notification Bar (Notify bar for job seeker )

//  This is the Job Seeker Notification Bar (Notify bar for job seeker )

//  This is the Job Seeker Notification Bar (Notify bar for job seeker )

//  This is the Job Seeker Notification Bar (Notify bar for job seeker )

import React, { useEffect, useRef } from "react";
import pic from "../Jobconnect IMG/notify1.png";
import "./Notify1.css";
import { Link } from "react-router-dom";

const Notify3 = () => {
  const rightRef = useRef(null);

  useEffect(() => {
    function isInViewport(ref) {
      const rect = ref.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    function handleScroll() {
      if (isInViewport(rightRef)) {
        rightRef.current.classList.add("slide-in-from-right");
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on initial render

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={rightRef}
      className="container mx-auto flex flex-col items-center justify-center h-full mb-8 mt-4"
    >
      <img src={pic} alt="Notification" className="mb-4" />
      <div className="text-center">
        <h1 className="text-xl font-bold mb-2">
          Nothing right now. Check back later!
        </h1>
        <p className="mx-auto mb-4 w-1/2 text-sm">
          This is where we'll notify you about your job applications and other
          useful information to help you with your job search.
        </p>
        <Link to="/post-job">
          <button className="bg-blue-800 hover:bg-blue-600 text-white px-5 py-2 rounded-xl">
            Post a Job
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Notify3;
