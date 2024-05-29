import React from "react";

const Submit3 = () => {
  return (
    <>
      <div className="container mx-auto py-4 px-2 md:px-4 lg:px-8">
        <section className="container mx-auto py-8 px-8 rounded-md mb-4 justify-center">
          <h1 className="font-bold mb-4">Pleease review your application</h1>
          <section className="mb-4  mt-8 px-4 md:px-12 lg:px-24">
            <div className="mx-auto mb-4">
              <div className="flex flex-row justify-between font-bold mb-2">
                <h1>Contact information</h1>
                <h1>Edit</h1>
              </div>
              <div className="bg-gray-200 h-48 px-4 py-2 text-sm rounded-xl">
                <p className="mb-12">Full name</p>
                <hr className="w-full border-gray-600 my-2" />
                <p>Email</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex flex-row justify-between font-bold">
                <h1>CV</h1>
                <h1>Edit</h1>
              </div>
              <input
                type="text"
                className="w-full md:px-2 bg-gray-200 text-black rounded-xl py-2 border-2 md:border-4 outline-none"
                id="search"
              />
            </div>
            <label>
              <input type="checkbox" name="acceptTerms" className="mr-2" />
              you agree to our <u>Terms,Cookie and Privacy Policies.</u>
            </label>
          </section>
          <div className="flex justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-200 text-sm text-white rounded-lg px-8 py-1">
              Submit your application
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Submit3;
