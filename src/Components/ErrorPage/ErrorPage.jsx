import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../assets/404.png"; // তোমার ইমেজ path অনুযায়ী বদলাও

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white">
      {/* Header Section */}
      <div className="w-full bg-[#0A4B46] text-white py-10 relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-semibold">Page Not Found</h1>
          <p className="text-gray-200 mt-3 md:mt-0">
            Home <span className="text-gray-400">›</span> 404
          </p>
        </div>

        {/* Background Shape */}
        <div className="absolute inset-0 opacity-10 bg-[url('/path/to/pattern.svg')] bg-cover"></div>
      </div>

      {/* Main Error Illustration */}
      <div className="text-center py-20">
        <img
          src={errorImg}
          alt="404 Error"
          className="mx-auto w-[300px] sm:w-[400px] mb-8"
        />
        <h2 className="text-5xl font-bold text-gray-800 mb-4">404 Error</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="inline-block bg-[#16A571] text-white px-6 py-3 rounded-md hover:bg-[#12845b] transition-all duration-300"
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
