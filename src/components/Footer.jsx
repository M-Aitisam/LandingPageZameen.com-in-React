import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Jobs</li>
            <li>Help & Support</li>
            <li>Advertise On Zameen</li>
            <li>Terms Of Use</li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>News</li>
            <li>Forum</li>
            <li>Expo</li>
            <li>Real Estate Agents</li>
            <li>Add Property</li>
          </ul>
        </div>

        {/* Head Office Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Head Office</h3>
          <ul className="space-y-2">
            <li>
              📍 Pearl One, 94-B/I, MM Alam Road, Gulberg III, Lahore, Pakistan
            </li>
            <li>📞 0800-ZAMEEN (92633)</li>
            <li>🕒 Monday To Sunday 9AM To 6PM</li>
            <li>✉️ Email Us</li>
          </ul>
        </div>

        {/* Roshan Digital Account Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">
            Roshan Digital Account
          </h3>
          <img
            src="https://www.zameen.com/assets/roshanDigitalAccount.b7e508798daec6e72108df98cc013efc.png"
            alt="Roshan Digital Account"
            className="mb-4"
          />
          <h4 className="text-lg font-bold text-white">Get Connected</h4>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-white text-2xl hover:text-green-500 cursor-pointer" />
            <FaInstagram className="text-white text-2xl hover:text-green-500 cursor-pointer" />
            <FaYoutube className="text-white text-2xl hover:text-green-500 cursor-pointer" />
            <FaLinkedinIn className="text-white text-2xl hover:text-green-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 flex justify-between items-center px-6 lg:px-12">
        <p className="text-gray-500 text-sm">
          © Copyright 2007 - 2024 Zameen.com. All Rights Reserved
        </p>
        <button
          className="text-white bg-green-500 p-2 rounded-full hover:bg-green-600 transition"
          title="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
