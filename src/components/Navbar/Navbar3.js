import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pic from "../Jobconnect IMG/logo.jpg";
import pic1 from "../Jobconnect IMG/notIcon.png";
import pic2 from "../Jobconnect IMG/ChatIcon.png";
import pic3 from "../Jobconnect IMG/proIcon.png";

const Navbar3 = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle smooth scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    navigate("/"); // Navigate to home page after logout
  };

  return (
    <nav className="bg-white p-4 flex items-center fixed top-0 left-0 w-full z-10 justify-between">
      {/* Start Section */}
      <div className="flex items-center">
        <div className="flex flex-row">
          <Link
            to="/recruiterhome"
            className="flex flex-row"
            onClick={scrollToTop}
          >
            <img src={pic} alt="Logo" />
          </Link>
        </div>
      </div>

      {/* Center Section */}
      <div className="hidden md:flex flex-grow justify-center">
        <Link
          to="/recruiterhome"
          className="text-blue-700 mr-4 font-bold"
          onClick={scrollToTop}
        >
          HOME
        </Link>
        <button
          onClick={handleLogout}
          className="hidden md:block bg-blue-700 text-sm rounded-full px-7 py-3 text-white hover:text-gray-300  mr-4"
        >
          Log Out
        </button>
      </div>

      {/* End Section */}
      <div className="flex items-center">
        <Link to="/notify1" onClick={scrollToTop}>
          <img
            src={pic1}
            className="hidden md:block mr-3"
            alt="Notification Icon"
          />
        </Link>
        <Link to="/message1" onClick={scrollToTop}>
          <img src={pic2} className="hidden md:block mr-3" alt="Message Icon" />
        </Link>
        <Link to="/message2" onClick={scrollToTop}>
          <img src={pic3} className="hidden md:block mr-3" alt="Profile Icon" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          id="menuToggleBtn"
          className="md:hidden block text-gray-600 hover:text-gray-200 focus:text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Conditionally render the menu icon based on the isMenuOpen state */}
          {isMenuOpen ? (
            // Close icon (X)
            <svg
              className="h-8 w-8 bg-blue-50 transition-transform duration-300 transform"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            // Menu icon (three horizontal lines)
            <svg
              className="h-8 w-8 bg-blue-50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div
        className={`fixed inset-y-0 left-0 top-0 z-50 gap-4 p-8 bg-gray-200 w-half bg-opacity-50 md:hidden transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col top-40 justify-center items-center h-18 pt-8 pr-8">
          <Link
            to="/recruiterhome"
            className="block py-2 px-4 mt-8 mb-4 text-blue-800 hover:bg-blue-200 hover:text-gray-600 font-bold"
            onClick={scrollToTop}
          >
            HOME
          </Link>
          <button
            onClick={handleLogout}
            className="bg-blue-700 text-sm rounded-full px-7 py-3 text-white hover:text-gray-300  mr-4"
          >
            Log Out
          </button>
          <Link to="/notify1" onClick={scrollToTop}>
            <img src={pic1} className="mb-2" alt="Notification Icon" />
          </Link>
          <Link to="/message1" onClick={scrollToTop}>
            <img src={pic2} className="mb-2" alt="Message Icon" />
          </Link>
          <Link to="/message2" onClick={scrollToTop}>
            <img src={pic3} className="mb-2" alt="Profile Icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar3;
