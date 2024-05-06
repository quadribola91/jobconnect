import React, { useState } from "react";

const Apply1 = () => {
  const [jobRoles, setJobRoles] = useState([]);
  const [locations, setLocations] = useState([]);
  const [types, setTypes] = useState([]);
  const [newJobRole, setNewJobRole] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newType, setNewType] = useState("");

  const handleAddJobRole = () => {
    if (newJobRole.trim() !== "") {
      setJobRoles([...jobRoles, newJobRole]);
      setNewJobRole("");
    }
  };

  const handleRemoveJobRole = (index) => {
    const updatedJobRoles = [...jobRoles];
    updatedJobRoles.splice(index, 1);
    setJobRoles(updatedJobRoles);
  };

  const handleAddLocation = () => {
    if (newLocation.trim() !== "") {
      setLocations([...locations, newLocation]);
      setNewLocation("");
    }
  };

  const handleRemoveLocation = (index) => {
    const updatedLocations = [...locations];
    updatedLocations.splice(index, 1);
    setLocations(updatedLocations);
  };

  const handleAddType = () => {
    if (newType.trim() !== "") {
      setTypes([...types, newType]);
      setNewType("");
    }
  };

  const handleRemoveType = (index) => {
    const updatedTypes = [...types];
    updatedTypes.splice(index, 1);
    setTypes(updatedTypes);
  };

  const handleKeyDown = (e, addFunction) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addFunction();
    }
  };

  return (
    <div className="w-3/4 mx-auto">
      <h2 className="text-xl font-semibold text-center mb-8">
        What Kind of Jobs are you looking for?
      </h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">
          What role do you want to see?
        </h3>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Add job title"
            value={newJobRole}
            onChange={(e) => setNewJobRole(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, handleAddJobRole)}
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 w-1/2"
          />
          <button
            onClick={handleAddJobRole}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            +
          </button>
        </div>
        <div className="flex flex-wrap mt-2">
          {jobRoles.map((role, index) => (
            <div key={index} className="flex items-center mb-2 mr-2">
              <p className="bg-gray-200 p-2 rounded-l-md">{role}</p>
              <button
                onClick={() => handleRemoveJobRole(index)}
                className="bg-blue-200 text-white font-semibold py-2 px-4 rounded-r-md hover:bg-blue-600 focus:outline-none"
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Add job location */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">
          Where do you wish to work?
        </h3>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Add job location"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, handleAddLocation)}
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 w-1/2"
          />
          <button
            onClick={handleAddLocation}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            +
          </button>
        </div>
        <div className="flex flex-wrap mt-2">
          {locations.map((location, index) => (
            <div key={index} className="flex items-center mb-2 mr-2">
              <p className="bg-gray-200 p-2 rounded-l-md">{location}</p>
              <button
                onClick={() => handleRemoveLocation(index)}
                className="bg-blue-200 text-white font-semibold py-2 px-4 rounded-r-md hover:bg-blue-600 focus:outline-none"
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Add job type */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">
          What type of job fits you better?
        </h3>
        <div className="flex items-center">
          <select
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 w-1/2"
          >
            <option value="">Add job type</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            {/* Add more options here */}
          </select>
          <button
            onClick={handleAddType}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            +
          </button>
        </div>
        <div className="flex flex-wrap mt-2">
          {types.map((type, index) => (
            <div key={index} className="flex items-center mb-2 mr-2">
              <p className="bg-gray-200 p-2 rounded-l-md">{type}</p>
              <button
                onClick={() => handleRemoveType(index)}
                className="bg-blue-200 text-white font-semibold py-2 px-4 rounded-r-md hover:bg-blue-400 focus:outline-none"
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-blue-800 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none mr-2">
          OK
        </button>
        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-md hover:bg-gray-400 focus:outline-none">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Apply1;
