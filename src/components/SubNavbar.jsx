import React from "react";

const SubNavbar = () => {
  return (
    <nav className="bg-[#F7F7F7] border-t-2 border-[#33A137] w-full flex justify-between items-center px-6 h-12">
     
      <div className="flex items-center space-x-2">
       <img src="zameem logo.png" className="w-[10rem]" alt="" />
      </div>
<div className="mr-[32rem] font-light">
      {/* Center - Navigation Links */}
      <ul className="flex space-x-6 text-gray-700 text-sm font-light">
        <li className="hover:text-[#33A137] flex gap-3 cursor-pointer">BUY </li>
        <li className="hover:text-[#33A137] font-bold text-red-600 flex gap-6 cursor-pointer">HOMES </li>
        <li className="hover:text-[#33A137] flex gap-6 cursor-pointer">PLOTS </li>
        <li className="hover:text-[#33A137] flex gap-6 cursor-pointer">COMMERCIAL <span>|</span></li>
        <li className="hover:text-[#33A137] flex gap-6 cursor-pointer">RENT <span>|</span></li>
        <li className="hover:text-[#33A137] flex gap-6 cursor-pointer">AGENTS <span>|</span></li>
        <li className="hover:text-[#33A137] flex gap-6 cursor-pointer">NEW PROJECTS </li>
      </ul>
      </div>
    </nav>
  );
};

export default SubNavbar;
