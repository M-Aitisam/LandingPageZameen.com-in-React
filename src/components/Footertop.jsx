import React from "react";

const Footertop = () => {
  return (
    <div
      className=" h-[14rem] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.zameen.com/assets/mobileAppsBackground.937eb86be98b3bde537276043aa8e3da.png')",
      }}
    >
      {/* App Promotion Section */}
      <div className="container  px-[5rem] mx-auto leading-[17px] flex flex-col lg:flex-row items-center justify-between ">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-green-600">
            Get the Zameen App
          </h2>
          <p className="text-gray-700  text-1xl mt-2">
            Buy and Rent Property faster and <br /> better using our app.
          </p>
        </div>

        {/* App Image */}
        <div className=" relative flex justify-center">
          <img
          className="w-20 h-20 lg:w-64 lg:h-80 "
            src="scancode.png.png" // Replace with actual app preview image
            alt="App Preview"
            className="w-64 lg:w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Footertop;
