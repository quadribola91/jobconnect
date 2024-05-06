import React from "react";
import searchIcon from "../Jobconnect IMG/searchicon.png"; // Import the search icon image

const Message1 = ({ messages, user }) => {
  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    // Perform search operation based on the input value
    const searchQuery = e.target.value;
    // Perform search logic here (e.g., filter messages based on searchQuery)
  };

  return (
    <>
      <div className="container mx-auto px-2 mb-8 mt-12">
        {/* Search input field with icon */}
        <div className="relative">
          <img
            src={searchIcon}
            alt="Search"
            className="absolute top-0 left-3 bottom-0 my-auto"
          />{" "}
          <input
            type="text"
            placeholder="Search messages"
            className="w-1/2 md:px-4 py-1 bg-white text-black text-auto text-center rounded-full ml-1 border-2 md:border-4 outline-none pl-10" // Added left padding for icon
            id="search"
            onChange={handleSearchInputChange} // Call handleSearchInputChange function on input change
          />
          {/* Position the search icon */}
        </div>

        {/* Remaining message content */}
        <h1 className="mt-8 mb-2 font-bold">Messages</h1>
        <section className="flex flex-row justify-between gap-2 lg:gap-12">
          {/* Message list */}
          <div className="w-1/2 h-96 overflow-y-auto aspect-w-2 aspect-h-4 bg-gray-300 p-2 rounded-2xl">
            {" "}
            {/* Set aspect ratio */}
            <div className="container mx-auto">
              {messages &&
                messages.map((msg, index) => (
                  <React.Fragment key={index}>
                    <h2 className="ml-1">
                      {msg.sender === user.name ? "You" : msg.sender}
                    </h2>
                    <p className="ml-2">{msg.text}</p>
                    <hr className="w-full border-gray-600 my-2" />
                  </React.Fragment>
                ))}
            </div>
          </div>

          {/* Current conversation */}
          <div className="bg-gray-200 p-2 rounded-2xl w-full h-96 overflow-y-auto relative">
            {" "}
            {/* Set height and overflow */}
            <h1>Username</h1>
            <hr className="w-full border-gray-600 my-2" />
            <div className="flex flex-col lg:flex-row justify-between item-center">
              <div>
                <h2>Username</h2>
                <p className="bg-white px-2 rounded-xl">msg....</p>
              </div>{" "}
              <div>
                <h2>You</h2>
                <p className="bg-white px-2 rounded-xl">msg....</p>
              </div>
              <div className="flex-end absolute bottom-0 left-0 right-0">
                {" "}
                {/* Position input field at bottom */}
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full md:px-2 bg-white text-black rounded-full py-2 text-start mb-1 border-2 md:border-4 outline-none"
                  id="search"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Message1;
