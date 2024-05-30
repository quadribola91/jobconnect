// Fill2.jsx
import React, { useState } from "react";

const Fill2 = ({ onNext }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobLocation: "",
    city: "",
    area: "",
    pincode: "",
    streetAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onNext();
  };

  // Function to handle smooth scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };
  return (
    <div className="w-full lg:w-3/4 p-1 mx-auto mb-4" onClick={scrollToTop}>
      <section className="bg-gray-200 p-6 rounded-md">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Add Job Basics
        </h2>
        <form onSubmit={handleSubmit} className="mt-8">
          {/* Form fields */}
          <div className="mb-4">
            <label
              htmlFor="jobTitle"
              className="block text-lg font-semibold mb-2"
            >
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jobLocation"
              className="block text-lg font-semibold mb-2"
            >
              Which option best describes this job location
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="jobLocation"
              name="jobLocation"
              value={formData.jobLocation}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4 flex">
            <div className="flex flex-col mr-4 w-1/2">
              <label
                htmlFor="city"
                className="block text-lg font-semibold mb-2"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="area"
                className="block text-lg font-semibold mb-2"
              >
                Area
              </label>
              <input
                type="text"
                id="area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="pincode"
              className="block text-lg font-semibold mb-2"
            >
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="streetAddress"
              className="block text-lg font-semibold mb-2"
            >
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 block mx-auto"
          >
            Continue
          </button>
        </form>
      </section>
    </div>
  );
};

export default Fill2;
