import React from "react";
import pic1 from "../Jobconnect IMG/+ Create New.png";
import pic2 from "../Jobconnect IMG/Business.png";
import pic3 from "../Jobconnect IMG/GroupMessage.png";
import pic4 from "../Jobconnect IMG/Tune.png";
import pic5 from "../Jobconnect IMG/People.png";
import { Link } from "react-router-dom";

const Message2 = () => {
  const handleSearchInputChange = (e) => {
    // Perform search operation based on the input value
    const searchQuery = e.target.value;
    // Perform search logic here (e.g., filter messages based on searchQuery)
  };
  return (
    <>
      <section className="container mx-auto flex gap-12 mb-8 px-4 py-2">
        <div className="gap-col-3 bg-gray-300 rounded-xl px-6 py-3">
          <Link>
            <img src={pic1} />
          </Link>
          <div className="mb-4 mt-16">
            <Link to="/" className="flex gap-3">
              <img src={pic2} />
              <p>Jobs</p>
            </Link>
          </div>
          <div>
            <Link to="/" className="flex gap-3">
              <img src={pic5} />
              <p>Candidates</p>
            </Link>
          </div>
        </div>
        <div className="container mx-auto flex flex-col">
          <h1 className="font-bold mb-4">Jobs</h1>
          <div className="gap-2 mb-4">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-lg mr-3">
              Open and Paused(0) <span className="bg-gray-200">Closed(0)</span>
            </button>
          </div>
          <div className="relative mb-4">
            <Link>
              <img
                src={pic4}
                alt="Search"
                className="absolute top-0 left-3 bottom-0 my-auto"
              />{" "}
            </Link>
            <input
              type="text"
              placeholder="Filter and search jobs"
              className="w-96 md:px-4 py-1 bg-white text-black text-auto text-center rounded-full ml-1 border-2 md:border-4 outline-none pl-10" // Added left padding for icon
              id="search"
              onChange={handleSearchInputChange} // Call handleSearchInputChange function on input change
            />
          </div>
          <div className="justify-center">
            <Link>
              <h1>Messages (0)</h1>
            </Link>
            <div>
              <img src={pic3} />
              <p>No messages to review !</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Message2;
