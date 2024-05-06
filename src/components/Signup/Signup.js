import React, { useState } from "react";
import RegisterUser from "../Registerform/RegisterUser";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "", // Added field for user role
    acceptTerms: false, // Added field to track if terms are accepted
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await RegisterUser(formData); // Call the registerUser function with form data
      // Handle success (e.g., redirect user or show success message)
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center p-4 mt-12 mb-6">
      <div className="w-full max-w-md items-center bg-blue-600 py-10 px-10 rounded-2xl">
        <div className="flex justify-center items-center mb-5">
          <h1 className="font-bold text-2xl">Sign Up</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="text-white mb-1 block">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full mb-3 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="text-white mb-1 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mb-3 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="text-white mb-1 block">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full mb-3 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="confirmPassword"
                className="text-white mb-1 block"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full mb-3 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>
            <div className="mb-3">
              <label className="text-white mb-1 block">Role</label>
              <div>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={formData.role === "recruiter"}
                    onChange={handleChange}
                  />{" "}
                  Recruiter
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="jobSeeker"
                    checked={formData.role === "jobSeeker"}
                    onChange={handleChange}
                  />{" "}
                  Job Seeker
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full justify-center cursor-pointer text-center bg-blue-900 text-white rounded-md py-2 px-4 font-semibold hover:bg-blue-800 focus:outline-none focus:bg-blue-600"
              disabled={!formData.acceptTerms} // Disable button if terms are not accepted
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="mt-3">
          <label>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="mr-2"
            />
            By Signing up, you accept our conditions
          </label>
        </div>
        <div className="text-white mt-1">
          <p>
            Have an account?
            <span className="ml-1">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
