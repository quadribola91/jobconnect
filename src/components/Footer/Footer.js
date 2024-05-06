import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // Function to handle smooth scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
          {/* Navigation Links */}
          <div className="w-full md:w-1/4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* Add onClick event to scroll to the top */}
              <li>
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Additional Content */}
          <div className="w-full md:w-1/2 mb-8">
            <h3 className="text-lg font-semibold mb-4">About Our Company</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat, odio eget molestie accumsan, turpis massa maximus enim.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
