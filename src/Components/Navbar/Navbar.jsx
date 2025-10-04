import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FiMail, FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0F3D3E] text-white">
      {/* --- Top Contact Bar --- */}
      <div className="hidden lg:flex justify-between items-center max-w-[1296px] mx-auto py-2 text-sm px-6">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <FiMail /> info@example.com
          </span>
          <span className="flex items-center gap-2">
            <MdLocationOn /> 629 Elgin St. Celina, 2202
          </span>
          <span className="flex items-center gap-2">
            <FiPhoneCall /> (888) 123 456 7890
          </span>
        </div>
        <div className="flex gap-3 text-lg">
          <FaFacebookF className="cursor-pointer hover:text-green-400" />
          <FaTwitter className="cursor-pointer hover:text-green-400" />
          <FaLinkedinIn className="cursor-pointer hover:text-green-400" />
          <FaInstagram className="cursor-pointer hover:text-green-400" />
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <div className="bg-white text-black">
        <div className="flex justify-between items-center max-w-[1296px] mx-auto px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl text-[#16A571] font-bold flex items-center gap-2">
            <img src="/public/logo.png" alt="logo" className="w-8 h-8" />
            Itco
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="hover:text-green-400">
              Home
            </a>
            <a href="#" className="hover:text-green-400">
              About
            </a>
            <a href="#" className="hover:text-green-400">
              Services
            </a>
            <a href="#" className="hover:text-green-400">
              Projects
            </a>
            <a href="#" className="hover:text-green-400">
              Blogs
            </a>
            <a href="#" className="hover:text-green-400">
              Contact
            </a>
          </nav>

          {/* Quote Button (Desktop) */}
          <div className="hidden md:block">
            <button className="bg-green-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-300 transition">
              Get A Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* --- Mobile Menu Dropdown --- */}
        {menuOpen && (
          <div className="md:hidden bg-[#0F3D3E] text-white px-6 py-4 flex flex-col gap-4">
            <a href="#" className="hover:text-green-400">
              Home
            </a>
            <a href="#" className="hover:text-green-400">
              About
            </a>
            <a href="#" className="hover:text-green-400">
              Services
            </a>
            <a href="#" className="hover:text-green-400">
              Projects
            </a>
            <a href="#" className="hover:text-green-400">
              Blogs
            </a>
            <a href="#" className="hover:text-green-400">
              Contact
            </a>
            <button className="bg-green-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-300 transition">
              Get A Quote
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
