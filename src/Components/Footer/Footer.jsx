import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import footerimage1 from "../../assets/footerimage.png";
import footerimage2 from "../../assets/footerimage2.png";

const Footer = () => {
  return (
    <footer className="bg-[#164343F2] text-white pt-40 relative">

      {/* Newsletter - Footer উপরের দিকে */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-[1296px]">
        <div className="bg-[#16A571] bg-opacity-90 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <h2 className="text-lg md:text-xl font-bold text-center md:text-left text-white">
            Subscribe to Our Newsletter for the daily Updates
          </h2>

          {/* Input with button inside */}
          <div className="relative w-full md:w-1/2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 pr-24 rounded-md border border-gray-300 text-black w-full bg-white"
            />
            <button className="absolute top-0 right-0 h-full bg-[#16A571] text-white px-4 rounded-r-md font-semibold hover:bg-green-600 transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-[1296px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 mt-0">
        
        {/* Logo & Description */}
        <div>
          <h1 className="flex items-center text-2xl font-bold mb-4">
            <img src="https://i.postimg.cc/brgttvnt/logo.png" alt="Itco Logo" className="w-10 h-10 mr-2" />
            Itco
          </h1>
          <p className="text-sm mb-4 leading-relaxed">
            Mauris ut enim sit amet lacus ornare ullamcorper. Praesent placerat 
            neque purus, rhoncus tincidunt odio ultrices. Sed odio feugiat feugiat felis.
          </p>
          <div className="flex gap-4 mt-4 text-2xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer transition-colors" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer transition-colors" />
            <FaLinkedin className="hover:text-blue-600 cursor-pointer transition-colors" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Services */}
        <div className="hidden md:block">
          <h2 className="text-xl font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2 text-sm">
            <li>Tech Solutions</li>
            <li>Digital Marketing</li>
            <li>Web Development</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        {/* Links */}
        <div className="hidden md:block">
          <h2 className="text-xl font-semibold mb-4">Links</h2>
          <ul className="space-y-2 text-sm">
            <li>What We Do</li>
            <li>Our Team</li>
            <li>FAQ Ask</li>
            <li>Contact Us</li>
            <li>Privacy & Terms</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={footerimage1} alt="" className="w-16 h-16 object-cover rounded" />
              <div>
                <p className="text-xs text-gray-300">October 2, 2023</p>
                <p className="text-sm font-medium">Efficiency redefined through technology</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={footerimage2} alt="" className="w-16 h-16 object-cover rounded" />
              <div>
                <p className="text-xs text-gray-300">October 9, 2023</p>
                <p className="text-sm font-medium">IT Solution for your Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-gray-500 my-8" />
      <p className="text-center text-sm text-gray-300">
        © Copyright 2023, All Rights Reserved by <span className="font-semibold">MirrorTheme</span>
      </p>
    </footer>
  );
};

export default Footer;
