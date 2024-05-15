import React, { useState } from "react";

const Fill3 = ({ onPost }) => {
  const [formData, setFormData] = useState({
    jobType: "",
    schedule: "",
    payBy: "",
    amount: "",
    rate: "",
    jobDescription: "",
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
    onPost();
  };

  return (
    <div className="w-full lg:w-3/4 p-1 mx-auto mb-4">
      <section className="bg-gray-200 p-6 rounded-md">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Add Job Details
        </h2>
        <form onSubmit={handleSubmit} className="mt-8">
          {/* Form fields */}
          <div className="mb-4">
            <label
              htmlFor="jobType"
              className="block text-lg font-semibold mb-2"
            >
              Job Type <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="schedule"
              className="block text-lg font-semibold mb-2"
            >
              Schedule <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="schedule"
              name="schedule"
              value={formData.schedule}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4 flex flex-wrap">
            <div className="flex flex-col mb-4 w-full md:w-1/3 md:pr-2">
              <label htmlFor="payBy" className=" text-lg font-semibold mb-2">
                Pay Show pay by <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="payBy"
                name="payBy"
                value={formData.payBy}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col mb-4 w-full md:w-1/3 md:px-2">
              <label htmlFor="amount" className=" text-lg font-semibold mb-2">
                Amount <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col mb-4 w-full md:w-1/3 md:pl-2">
              <label htmlFor="rate" className=" text-lg font-semibold mb-2">
                Rate <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="rate"
                name="rate"
                value={formData.rate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="jobDescription"
              className="block text-lg font-semibold mb-2"
            >
              Job Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 block mx-auto"
          >
            Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default Fill3;
