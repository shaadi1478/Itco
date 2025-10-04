import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="w-full bg-[#0F3D3E] text-white">
      {/* Top Contact Bar */}
      <div className="w-[1296px] m-auto flex justify-between items-center  py-2 text-sm ">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><FiMail /> info@example.com</span>
          <span className="flex items-center gap-2"><MdLocationOn /> 629 Elgin St. Celina, 2202</span>
          <span className="flex items-center gap-2"><FiPhoneCall /> (888) 123 456 7890</span>
        </div>
        <div className="flex gap-3 text-lg">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6 py-4 rounded-xs bg-white w-[1296px] m-auto">
        <h1 className="text-2xl text-[#16A571] font-bold flex items-center gap-2"><img src="/public/logo.png" alt="" />Itco</h1>

        <nav className="flex gap-6">
          <a href="#" className="hover:text-green-400 text-black">Home</a>
          <a href="#" className="hover:text-green-400 text-black">About</a>
          <a href="#" className="hover:text-green-400 text-black">Services</a>
          <a href="#" className="hover:text-green-400 text-black">Projects</a>
          <a href="#" className="hover:text-green-400 text-black">Blogs</a>
          <a href="#" className="hover:text-green-400 text-black">Contact</a>
        </nav>

        <button className="bg-green-400 text-black px-4 py-2 rounded-md font-semibold">Get A Quote</button>
      </div>
    </header>
  );
};

export default Navbar;
