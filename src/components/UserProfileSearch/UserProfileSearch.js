import React from "react";

const UserProfileSearch = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Upload CV */}
            <div className="mb-4">
              <label
                htmlFor="cv"
                className="block text-sm font-medium text-gray-700"
              >
                Upload CV (PDF)
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                accept=".pdf"
                className="mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Qualification */}
            <div className="mb-4">
              <label
                htmlFor="qualification"
                className="block text-sm font-medium text-gray-700"
              >
                Qualification
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                className="mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Job Preference */}
            <div className="mb-4">
              <label
                htmlFor="jobPreference"
                className="block text-sm font-medium text-gray-700"
              >
                Job Preference
              </label>
              <input
                type="text"
                id="jobPreference"
                name="jobPreference"
                className="mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Ready to Work Option */}
            <div className="mb-4">
              <label
                htmlFor="readyToWork"
                className="block text-sm font-medium text-gray-700"
              >
                Ready to Work
              </label>
              <select
                id="readyToWork"
                name="readyToWork"
                className="mt-1 p-2 border border-gray-300 rounded-md"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSearch;
