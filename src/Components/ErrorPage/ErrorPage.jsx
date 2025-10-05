import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#0F3D3E] flex flex-col justify-center items-center text-center text-white px-6">
      {/* Error Illustration */}
      <img
        src="https://i.postimg.cc/K84VbTNv/Group-1000007663.png"
        alt="404 Illustration"
        className="w-72 md:w-96 mb-8 animate-bounce"
      />

      {/* Title */}
      <h1 className="text-6xl font-extrabold text-green-400 mb-2">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-300 max-w-md mb-6">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="flex items-center gap-2 bg-green-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-green-300 transition"
      >
        <FiHome className="text-xl" />
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
