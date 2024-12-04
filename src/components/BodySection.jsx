import React from 'react';

const BodySection = () => {
  return (
    <div className="w-screen h-[60vh] relative">
      {/* Background Image */}
      <img
        className="h-[70vh] w-screen object-cover"
        src="https://www.zameen.com/assets/imageBackgroundLarge.deeb0c70dcee6ae1d029e18e0dcc4d89.webp"
        alt="Background"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-4">
          Search properties for sale in Pakistan
        </h1>

        {/* Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200">
            BUY
          </button>
          <button className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200">
            RENT
          </button>
          <button className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200">
            PROJECTS
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-black bg-opacity-75 p-4 rounded-lg flex items-center space-x-4 w-[80%]">
          {/* City Dropdown */}
          <div className="flex-1">
            <label className="text-sm font-bold block mb-1">CITY</label>
            <select className="w-full px-3 py-2 border rounded">
              <option>Islamabad</option>
              <option>Karachi</option>
              <option>Lahore</option>
            </select>
          </div>

          {/* Location Input */}
          <div className="flex-1">
            <label className="text-sm font-bold block mb-1">LOCATION</label>
            <input
              type="text"
              placeholder="Enter location"
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          {/* Find Button */}
          <button className="px-6 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700">
            FIND
          </button>
        </div>

        {/* Additional Options */}
        <div className="flex space-x-4 text-sm mt-2">
          <a href="#" className="text-white underline">
            More Options
          </a>
          <a href="#" className="text-white underline">
            Change Currency
          </a>
          <a href="#" className="text-white underline">
            Change Area Unit
          </a>
          <a href="#" className="text-white underline">
            Reset Search
          </a>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
