import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FiMail, FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState("h-[500px]");
  const location = useLocation();

  // current route path
  const currentPath = location.pathname;
  const routeName =
    currentPath === "/"
      ? "Home"
      : currentPath.slice(1).charAt(0).toUpperCase() +
        currentPath.slice(2).toLowerCase();

  useEffect(() => {
    // Route অনুযায়ী height পরিবর্তন
    if (location.pathname === "/about") {
      setNavHeight("h-[250px]");
    } else if (location.pathname === "/services") {
      setNavHeight("h-[250px]");
    } else {
      setNavHeight("h-[150px]");
    }
  }, [location]);

  return (
    <header
      className={`w-full bg-[#0F3D3E] text-white transition-all duration-700 ease-in-out ${navHeight}`}
    >
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
      <div className="bg-white text-black max-w-[1296px] mx-auto">
        <div className="flex justify-between items-center  px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl text-[#16A571] font-bold flex items-center gap-2">
            <img
              src="https://i.postimg.cc/brgttvnt/logo.png"
              alt="logo"
              className="w-8 h-8"
            />
            Itco
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-green-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-green-400">
              About
            </Link>
            <Link to="/services" className="hover:text-green-400">
              Services
            </Link>
            <Link to="/project" className="hover:text-green-400">
              Projects
            </Link>
            <Link to="/Blogs" className="hover:text-green-400">
              Blogs
            </Link>
            <Link to="/contact" className="hover:text-green-400">
              Contact
            </Link>
          </nav>

          {/* Quote Button (Desktop) */}
          <div className="hidden md:block">
            <button className="bg-green-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-300 transition">
              Get A Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* --- Mobile Menu Dropdown --- */}
        {menuOpen && (
          <div className="md:hidden bg-[#0F3D3E] text-white px-6 py-4 flex flex-col gap-4">
            <Link to="/" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/services" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
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

      {/* --- Route Info Section (নিচে দেখাবে শুধু Home বাদে) --- */}
      {currentPath !== "/" && (
        <div className="max-w-[1296px] mx-auto flex justify-between items-center px-6 py-8">
          {/* Left: Route Title */}
          <h2 className="text-6xl font-bold text-white">{routeName}</h2>

          {/* Right: Breadcrumb */}
          <p className="text-gray-300 text-sm">
            <Link to="/" className="hover:text-green-400">
              Home
            </Link>{" "}
            / <span className="text-green-400">{routeName}</span>
          </p>
        </div>
      )}
    </header>
  );
};

export default Navbar;
