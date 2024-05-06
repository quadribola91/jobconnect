import pic from "../Jobconnect IMG/seekerimg.png";

const Card = ({ title, description }) => {
  return (
    <div className="text-center justify-center bg-gray-200 p-4 w-1/2 mb-4 md:w-60 rounded-2xl h-60">
      <h1 className="text-xl font-bold mt-8 mb-4">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

const SeekerHome = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="flex-col md:flex-row flex-grow flex-shrink">
        <div id="top" className="rounded-lg p-8 flex-grow-1">
          <div className="px-6 md:px-4 text-xl md:text-4xl lg:text-5xl font-bold">
            <h1 className="text-center md:text-left">
              <span className="text-blue-800 mr-1">Empower</span>Your Career
              Journey:
              <br />
              Find Your Ideal Job Now!
            </h1>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-16 bg-gray-200  border border-gray-400 px-1/2 py-1 md:px-1 md:py-2 lg:px-2 lg:py-3  rounded-full w-full lg:w-3/4">
            <input
              type="text"
              placeholder="Job titles, Company or Keywords"
              className="border-none bg-gray-200 font-bold outline-none text-center text-sm md:text-xl w-full md:w-1/2 p-2 rounded-l-lg"
            />
            <div className="relative border-none mt-2 md:mt-0 bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-2 left-2 pointer-events-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M9 0a9 9 0 100 18 9 9 0 000-18zm0 1a8 8 0 100 16 8 8 0 000-16zM7 9a3 3 0 016 0c0 1.65-1.35 3-3 3a3 3 0 01-3-3z"
                  clipRule="evenodd"
                />
              </svg>
              <select className="border-none bg-gray-200 font-bold text-gray-400 outline-none text-center text-sm md:text-xl cursor-pointer w-full md:w-auto p-2 pl-8 rounded-r-lg appearance-none">
                <option value="" disabled selected>
                  City ,State,Zipcode or "Remote"
                </option>
                {/* Add options for 30 cities here */}
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
                <option value="city3">City 3</option>
                {/* Repeat for all cities */}
              </select>
            </div>
            <button className="bg-blue-800 hover:bg-blue-500 text-white text-sm flex flex-wrap font-bold px-1 py-1 md:py-3 rounded-lg mt-2 md:mt-0">
              Find Jobs
            </button>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center rounded-xl mb-8">
          <div className="flex-col md:flex md:flex-row gap-3 mt-10 px-6 md:px-36 gap-4 md:gap-20 justify-between">
            {/* Card components */}
            <Card
              title="1. Post your resume"
              description="Post your resume on our platform today and open the door to new opportunities!"
            />
            <Card
              title="2. Find jobs"
              description="Don't let opportunity pass you by -start your job search journey with us today!"
            />
          </div>
          <div className="flex justify-center items-center mt-10 md:mt-0">
            <img src={pic} className="w-full max-w-md h-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeekerHome;
