import React from "react";

const Submit2 = () => {
  return (
    <>
      <div className="container mx-auto px-2 py-2 md:py-4 lg:px-48 lg:py-4">
        <section className="container mx-auto px-2 py-2 bg-gray-300 rounded-md mb-4">
          <h1 className="font-bold mb-3 mt-4 p-4">
            Add your contact information
          </h1>
          <div className="p-4">
            <div className="flex flex-row gap-3 lg:gap-12">
              <div>
                <label
                  htmlFor="Firstname"
                  className="block text-sm font-sm mb-2"
                >
                  Firstname{" "}
                </label>
                <input
                  type="text"
                  id="Firstname"
                  name="firstname"
                  className="w-full p-1 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                  required
                />
                <label
                  htmlFor="Lastname"
                  className="block text-sm font-sm mb-2"
                >
                  Lastname
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="w-full p-1 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="city,State"
                  className="block text-sm font-sm mb-2"
                >
                  city,State
                </label>
                <input
                  type="text"
                  id="city,state"
                  name="city,space "
                  className="w-full p-1 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                  required
                />
                <label
                  htmlFor="Contact no."
                  className="block text-sm font-sm mb-2"
                >
                  Contact no.
                </label>
                <input
                  type="text"
                  id="Contact no."
                  name="Contact no."
                  className="w-full p-1 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <label htmlFor="Email" className="block text-sm font-sm mb-2">
              Email{" "}
            </label>
            <input
              type="text"
              id="Email"
              name="Email"
              className="w-1/2 p-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex gap-12 lg:gap-96 p-4">
            <button className="bg-white hover:bg-gray-200 text-blue-500 px-6 py-3 rounded-md text-sm">
              Upload a CV
            </button>
            <button className="bg-blue-500 hover:bg-blue-300 text-white px-6 py-2 rounded-full">
              Continue
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Submit2;
