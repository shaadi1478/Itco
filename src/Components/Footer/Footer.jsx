import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#164343F2] text-white py-12">
      <div className="max-w-[1296px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        
        {/* Logo & Description */}
        <div>
          <h1 className="flex items-center text-2xl font-bold mb-4">
            <img src="/logo.png" alt="Itco Logo" className="w-10 h-10 mr-2" />
            Itco
          </h1>
          <p className="text-sm mb-4 leading-relaxed">
            Mauris ut enim sit amet lacus ornare ullamcorper. Praesent placerat 
            neque purus, rhoncus tincidunt odio ultrices. Sed odio feugiat feugiat felis.
          </p>
          <div className="flex gap-3 mt-4 text-lg">
            <FaFacebook className="hover:text-blue-500 cursor-pointer transition-colors" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer transition-colors" />
            <FaLinkedin className="hover:text-blue-600 cursor-pointer transition-colors" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2 text-sm">
            <li>Tech Solutions</li>
            <li>Digital Marketing</li>
            <li>Web Development</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        {/* Links */}
        <div>
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
              <img src="/public/footerimage.png" alt="" className="w-16 h-16 object-cover rounded" />
              <div>
                <p className="text-xs text-gray-300">October 2, 2023</p>
                <p className="text-sm font-medium">Efficiency redefined through technology</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src="/public/footerimage2.png" alt="" className="w-16 h-16 object-cover rounded" />
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
