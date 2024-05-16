import React, { useState } from "react";
import { FaBriefcase } from "react-icons/fa"; // Import the desired icon
import { AiOutlineSearch } from "react-icons/ai"; // Import the search icon
import pic from "../Navbar/highC.jpeg";

const UserProfile = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (e) => {
    // Capture the selected image file
    const file = e.target.files[0];
    setProfilePic(file);
  };

  const handleUpload = () => {
    // Handle the submission of the image file to the backend
    // You'll need to implement this part to upload the image file to your backend server
    console.log("Uploading profile picture:", profilePic);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-24">
      <div id="profiletitle" className="text-center mt-8">
        <div className="flex justify-center items-center">
          <FaBriefcase className="text-xl text-blue-700 mr-2 h-9 w-9" />{" "}
          {/* Use the icon component */}
          <h1 className="font-bold text-2xl">Job</h1>
          <h1 className="font-bold text-blue-700 text-2xl">Connect</h1>
        </div>
      </div>
      <div
        id="profileheader"
        className="flex items-center mb-10 p-2 text-center text-bold font-bold justify-between mt-10 bg-gray-200 rounded-sm"
      >
        <h1>User Profile</h1>
        <div className="flex flex-end">
          <a href="#">Logout</a>
          <AiOutlineSearch className="text-xl text-blue-700 cursor-pointer" />
        </div>
      </div>
      <div
        id="profileinput"
        className="bg-gray-200 p-4 flex flex-col md:flex-row"
      >
        <div id="editprofile" className="mb-8 md:mr-8 w-full md:w-1/2">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="w-full md:w-3/4 mr-4 mb-4 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            id="firstname"
            placeholder="First Name"
            className="w-full md:w-3/4 mr-4 mb-4 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            id="lastname"
            placeholder="Last Name"
            className="w-full md:w-3/4 mr-4 mb-4 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="w-full md:w-3/4 mr-4 mb-4 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            id="city"
            placeholder="City"
            className="w-full md:w-3/4 mr-4 mb-4 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            id="country"
            placeholder="Country"
            className="w-full md:w-3/4 mr-4 mb-4 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <textarea
            id="aboutme"
            placeholder="About me"
            className="w-full h-auto border-4 mt-8"
          />
          <button className="flex items-end bg-white hover:bg-gray-300 mt-4 text-black text-lg p-3 rounded-xl">
            Update Profile
          </button>
        </div>
        <div id="uploadpic" className="w-full md:w-1/2">
          {/* Profile picture upload section */}
          <input type="file" onChange={handleFileChange} accept="image/*" />
          <button
            onClick={handleUpload}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Upload Profile Picture
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
