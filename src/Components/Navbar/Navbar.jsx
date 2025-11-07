import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FiMail, FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { NavLink, useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;
  const routeName =
    currentPath === "/"
      ? "Home"
      : currentPath.slice(1).charAt(0).toUpperCase() +
        currentPath.slice(2).toLowerCase();

  // Active / inactive classes
  const activeClass =
    "text-green-500 font-semibold border-b-2 border-green-500 transition-all";
  const inactiveClass = "hover:text-green-400 transition";

  return (
    <header
      className={`w-full bg-[#0F3D3E] text-white transition-all duration-700 ease-in-out
      ${currentPath === "/" ? "h-[120px] md:h-[150px]" : "h-[200px] md:h-[250px]"}
      `}
    >
      {/* --- Top Contact Bar --- */}
      <div className="hidden lg:flex justify-between items-center max-w-[1296px] mx-auto py-2 text-sm px-6">
        <div className="flex flex-wrap items-center gap-6">
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
      <div className="text-black max-w-[1296px] mx-auto bg-white">
        <div className="flex justify-between items-center px-6 py-4">
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
          <nav className="hidden md:flex gap-6 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Contact
            </NavLink>

            {/* Quote Button */}
            <button className="ml-4 bg-green-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-300 transition">
              Get A Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div
            className={`md:hidden text-2xl cursor-pointer p-2 rounded transition-colors duration-300 ${
              menuOpen ? "bg-green-400 text-black" : "bg-black text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* --- Mobile Menu Dropdown --- */}
        <div
          className={`md:hidden bg-[#0F3D3E] text-white px-6 py-4 flex flex-col gap-4 transform transition-transform duration-300 origin-top ${
            menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-400 font-semibold" : "hover:text-green-400"
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-green-400 font-semibold" : "hover:text-green-400"
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-green-400 font-semibold" : "hover:text-green-400"
            }
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-green-400 font-semibold" : "hover:text-green-400"
            }
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "text-green-400 font-semibold" : "hover:text-green-400"
            }
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? "text-green-400 font-semibold" : "hover:text-green-400"
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          <button className="bg-green-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-300 transition">
            Get A Quote
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-green-400" />
            <FaTwitter className="cursor-pointer hover:text-green-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-green-400" />
            <FaInstagram className="cursor-pointer hover:text-green-400" />
          </div>
        </div>
      </div>

      {/* --- Route Info Section --- */}
      {currentPath !== "/" && (
        <div className="max-w-[1296px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-8 gap-4 md:gap-0">
          <h2 className="text-4xl md:text-6xl font-bold text-white">{routeName}</h2>
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
