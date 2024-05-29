import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder login logic
    // For demonstration purposes, let's assume the login is successful if both email and password are non-empty
    if (email && password) {
      // Simulate login success by setting authentication flag in localStorage
      localStorage.setItem("isLoggedIn", true);

      // Store user data in localStorage
      const userData = {
        email: email,
        // Add other user data as needed
      };
      localStorage.setItem("userData", JSON.stringify(userData));

      // Redirect the user to the dashboard or another page
      navigate("/dashboard");
    } else {
      // Handle login failure, such as displaying an error message
    }
    // Reset form fields after submission if needed
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="w-full max-w-md items-center bg-white border-2 border-blue-600 py-8 px-10 rounded-2xl">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-2xl text-black">LogIn</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="email" className="block text-blue-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-blue-600 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mt-6 justify-center">
              <button
                type="submit"
                className="w-full bg-blue-800 text-white rounded-md py-2 px-4 font-semibold hover:bg-blue-400 focus:outline-none focus:bg-blue-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="text-blue-600 mt-6">
          <p>
            Forgot Password?
            <span className="ml-1">
              <a href="#">Remember</a>
            </span>
          </p>
          <p>
            Don't have an account?
            <span className="ml-1">
              <Link to="/signup">Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
