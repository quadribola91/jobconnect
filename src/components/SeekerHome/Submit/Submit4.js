import React from "react";
import Email from "../Submit/Image/Email.png";
import Location from "../Submit/Image/Location.png";
import phone from "../Submit/Image/Phone.png";
import Menu from "../Submit/Image/Menu.png";
import { Link } from "react-router-dom";

const Submit4 = () => {
  return (
    <>
      <div className="container mx-auto px-2 md:px-8 lg:px-24">
        <section className="container mx-auto px-4 py-3 rounded-md mb-4">
          <h1 className="font-bold mb-8">USERNAME</h1>
          <div>
            <div className="mb-2 flex">
              <img src={Email} /> Email
            </div>
            <div className="mb-2 flex">
              <img src={phone} />
              phn no.
            </div>
            <div className="flex">
              <img src={Location} />
              Address
            </div>
          </div>
          <h1 className="font-bold mt-4 mb-4">Resume</h1>
          <div className="bg-gray-200 p-2 w-40 flex justify-between mb-4">
            Resume.pdf{" "}
            <Link>
              {" "}
              <img src={Menu} />
            </Link>
          </div>
          <h1 className="font-bold mb-4">My jobs</h1>
          <div className="flex flex-row gap-4">
            <div>
              <p>0</p>
              <p>Saved</p>
            </div>
            <div>
              <p>0</p>
              <p>Applied</p>
            </div>
            <div>
              <p>0</p>
              <p>Interviews</p>
            </div>
            <div>
              <p>0</p>
              <p>Archieved</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="mt-8 text-sm mb-8">No jobs yet</p>
            <button className="bg-blue-800 hover:bg-blue-500 text-md text-white rounded-lg px-4 py-1">
              Find Jobs
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Submit4;
