// Fill1.jsx
import React, { useState } from "react";

const Fill1 = ({ onNext }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    numberOfEmployees: "",
    firstName: "",
    lastName: "",
    isHiringManager: false,
    specifyRole: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleManagerChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      isHiringManager: value === "true" ? true : false,
      specifyRole: value === "false" ? "" : prevData.specifyRole,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onNext();
  };

  return (
    <div className="w-3/4 mx-auto">
      <section className="bg-gray-200 p-8 rounded-md">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Create Your Employer Account
        </h2>
        <p className="text-lg text-center">
          You haven't posted a job before, so you'll need to create an employer
          account.
        </p>
        <p className="text-lg text-center mt-2">
          Not here to post a job? <a href="#">Click here</a>
        </p>
        <form onSubmit={handleSubmit} className="mt-8">
          {/* Form fields */}
          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block text-lg font-semibold mb-2"
            >
              Your company's name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-lg font-semibold mb-2"
            >
              Your first name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-lg font-semibold mb-2"
            >
              Your last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {/* Other input fields */}
          <div className="mb-4">
            <label
              htmlFor="isHiringManager"
              className="block text-lg font-semibold mb-2"
            >
              Are you a hiring manager?
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="hiringManagerYes"
                name="isHiringManager"
                value="true"
                checked={formData.isHiringManager === true}
                onChange={handleManagerChange}
                className="mr-2"
              />
              <label htmlFor="hiringManagerYes">Yes</label>
              <input
                type="radio"
                id="hiringManagerNo"
                name="isHiringManager"
                value="false"
                checked={formData.isHiringManager === false}
                onChange={handleManagerChange}
                className="mr-2 ml-4"
              />
              <label htmlFor="hiringManagerNo">No</label>
            </div>
          </div>
          {formData.isHiringManager === false && (
            <div className="mb-4">
              <label
                htmlFor="specifyRole"
                className="block text-lg font-semibold mb-2"
              >
                If No, specify role
              </label>
              <input
                type="text"
                id="specifyRole"
                name="specifyRole"
                value={formData.specifyRole}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-lg font-semibold mb-2"
            >
              Your phone number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
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

export default Fill1;
