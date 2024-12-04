import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#33A137] w-screen flex justify-between items-center px-4 h-[3rem]">
      {/* Left Side - Navigation Links */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img src="homelogo.png" alt="Logo" className="h-8 w-8" />
          <h1 className="text-white font-bold">PROPERTIES</h1>
        </div>
        <ul className="flex space-x-4 text-white">
          <li>PLOT FINDER</li>
          <li>AREA GUIDE</li>
          <li>BLOG</li>
          <li>MAPS</li>
          <li>TOOLS</li>
          <li>MORE</li>
        </ul>
      </div>

      {/* Right Side - Buttons and Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-white border-2 flex  px-2 py-1 rounded">
         <img src="search.png" className="w-4 mt-[1px]"  alt="" />
          <span className=" text-[12px] ml-2">Property ID</span>
        </button>
        <button className="bg-white d-flex items-center justify-center text-[#33A137] px-2  rounded">
         <span className=" text-2xl text-black font-bold ">+</span> <span className="">Add Property </span> 
        </button>
        <div className="flex space-x-2">
          <img src="pakistan.png" alt="User Icon" className="h-6 w-6" />
          <img src="setting.png"  alt="Notification Icon" className="m h-6 w-6" />
          <img src="men.png" alt="Settings Icon" className="h-6 w-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
