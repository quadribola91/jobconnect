import React, { useState } from "react"; // Import useState hook
import axios from "axios";

const RegisterUser = async (userData) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      userData
    );
    console.log("User registered successfully:", response.data);
    // Handle success (e.g., redirect user or show success message)
  } catch (error) {
    console.error("Registration failed:", error.response.data);
    // Handle error (e.g., display error message)
  }
};

const RegisterForm = () => {
  // State variables to store user input
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
  );
};

export default RegisterForm;
