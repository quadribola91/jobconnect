import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    Message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implement your logic to handle form submission here
      console.log("Form submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container p-4 mt-16 max-auto min-auto">
      <h1 className="text-black font-bold text-3xl mb-5">Contact us</h1>
      <div className="container flex flex-col md:flex-row gap-5">
        {/* Card 1 */}
        <div className="bg-black text-white lg:text-xl lg:text-bold rounded-3xl p-8 flex flex-col justify-center items-center flex-grow-1">
          <p>Email: Jobconnect123@example.net</p>
          <hr className="w-full border-gray-600 my-2" />
          <p>Phone: (555) 123-4567</p>
          <hr className="w-full border-gray-600 my-2" />
          <p>Address: 123 Main Street Anytown, USA 12345</p>
          <hr className="w-full border-gray-600 my-2" />
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 rounded-3xl font-bold text-center flex-grow-1">
          <div className="p-4">
            <p>
              Got a question? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="p-4">
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className="w-full mb-3 rounded-3xl justify-center border border-gray-300 rounded-md py-3 px-3 focus:outline-none focus:border-blue-500"
              placeholder="NAME"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-3 border border-gray-300 rounded-3xl py-3 px-3 focus:outline-none focus:border-blue-500"
              placeholder="EMAIL"
              required
            />
            <textarea
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              className="w-full mb-3 border border-gray-300 rounded-3xl py-5 px-3 focus:outline-none focus:border-blue-500"
              placeholder="MESSAGE"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white rounded-2xl py-2 px-4 font-semibold hover:bg-blue-400 focus:outline-none focus:bg-blue-600"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
