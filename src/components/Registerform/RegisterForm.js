import { FaBriefcase } from "react-icons/fa";
import React, { useState } from "react";
import RegisterUser from "./RegisterUser"; // Import the function to register a user

const RegisterForm = () => {
  // Define state variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform signup logic here, such as sending the data to the backend
    // Reset form fields after submission if needed
    const userData = { username, email, password };
    RegisterUser(userData); // Call RegisterUser function
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="w-full max-w-md items-center bg-blue-500 py-10 px-10 rounded-half">
        <div className="flex justify-center items-center">
          <FaBriefcase className="text-xl text-blue-700 mr-2 h-9 w-9" />
          <h1 className="font-bold text-2xl">Job</h1>
          <h1 className="font-bold text-blue-700 text-2xl">Connect</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="mt-4">
            {/* Username input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                id="username"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            {/* Email input */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Password input */}
            <div className="mb-4">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* Add more input fields as needed */}
            <div className="mt-6 justify-center">
              <button
                type="submit"
                className="w-half justify-center bg-black text-white rounded-md py-2 px-4 font-semibold hover:bg-gray-600 focus:outline-none focus:bg-blue-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="text-white mt-6">
          <p>By Signing up, you accept our conditions</p>
          <p>
            Have an account?
            <span className="ml-1">
              <a href="#">Login</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
