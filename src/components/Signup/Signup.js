import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Mock RegisterUser function
const RegisterUser = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000); // Simulate network delay
  });
};

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    acceptTerms: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted: ", formData);
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.role) {
      alert("Please select a role");
      return;
    }
    try {
      const response = await RegisterUser(formData);
      if (response.success) {
        // Store user data in localStorage after successful registration
        const userData = {
          fullName: formData.fullName,
          email: formData.email,
          role: formData.role,
        };
        localStorage.setItem("userData", JSON.stringify(userData));

        // Redirect the user to the appropriate dashboard
        if (formData.role === "recruiter") {
          navigate("/recruiterhome");
        } else if (formData.role === "jobSeeker") {
          navigate("/seekerhome");
        }
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("An error occurred during registration");
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center p-4 mt-12 mb-6">
      <div className="w-full max-w-md items-center bg-blue-600 py-10 px-10 rounded-2xl">
        <div className="flex justify-center items-center mb-5">
          <h1 className="font-bold text-2xl text-white">Sign Up</h1>
        </div>
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
            <label htmlFor="confirmPassword" className="text-white mb-1 block">
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
            disabled={!formData.acceptTerms}
          >
            Sign Up
          </button>
        </form>
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
