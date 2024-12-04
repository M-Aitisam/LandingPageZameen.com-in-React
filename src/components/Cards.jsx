import React from 'react';

const Cards = () => {
  return (
    <div className="p-[7rem] bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Browse Properties</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {/* Homes Section */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Homes</h3>
          <ul className="flex border-b mb-4">
            <li className="text-green-500 border-b-2 border-green-500 px-4 py-2">Popular</li>
            <li className="px-4 py-2 text-gray-500">Type</li>
            <li className="px-4 py-2 text-gray-500">Area Size</li>
          </ul>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-gray-100 p-2 rounded text-sm">5 Marla Houses</button>
            <button className="bg-gray-100 p-2 rounded text-sm">10 Marla Houses</button>
            <button className="bg-gray-100 p-2 rounded text-sm">3 Marla Houses</button>
            <button className="bg-gray-100 p-2 rounded text-sm">New Houses</button>
            <button className="bg-gray-100 p-2 rounded text-sm">Low Price</button>
            <button className="bg-gray-100 p-2 rounded text-sm">Small Houses</button>
          </div>
        </div>

        {/* Plots Section */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Plots</h3>
          <ul className="flex border-b mb-4">
            <li className="text-green-500 border-b-2 border-green-500 px-4 py-2">Popular</li>
            <li className="px-4 py-2 text-gray-500">Type</li>
            <li className="px-4 py-2 text-gray-500">Area Size</li>
          </ul>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-gray-100 p-2 rounded text-sm">5 Marla Plots</button>
            <button className="bg-gray-100 p-2 rounded text-sm">10 Marla Plots</button>
            <button className="bg-gray-100 p-2 rounded text-sm">3 Marla Plots</button>
            <button className="bg-gray-100 p-2 rounded text-sm">On Installments</button>
            <button className="bg-gray-100 p-2 rounded text-sm">With Possession</button>
            <button className="bg-gray-100 p-2 rounded text-sm">Commercial Plots</button>
          </div>
        </div>

        {/* Commercial Section */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Commercial</h3>
          <ul className="flex border-b mb-4">
            <li className="text-green-500 border-b-2 border-green-500 px-4 py-2">Popular</li>
            <li className="px-4 py-2 text-gray-500">Type</li>
            <li className="px-4 py-2 text-gray-500">Area Size</li>
          </ul>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-gray-100 p-2 rounded text-sm">Small Offices</button>
            <button className="bg-gray-100 p-2 rounded text-sm">New Offices</button>
            <button className="bg-gray-100 p-2 rounded text-sm">On Installments</button>
            <button className="bg-gray-100 p-2 rounded text-sm">Small Shops</button>
            <button className="bg-gray-100 p-2 rounded text-sm">New Shops</button>
            <button className="bg-gray-100 p-2 rounded text-sm">Running Shops</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
