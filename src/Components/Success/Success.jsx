import React from "react";
import { FaUsers, FaProjectDiagram, FaHandshake } from "react-icons/fa";

const Success = () => {
  return (
    <section className="bg-[#E3F9F5] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <p className="text-green-700 font-semibold mb-2">Business Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Easy Way Build Success <br /> your Business Plan
          </h2>
          <p className="text-gray-600 mb-8">
            Solve Business Problems And Automate Workflows With Artificial
            Intelligence-Based Solutions. Unlock The Hidden Power Of The Data
            You Already Have And Hand.
          </p>

          {/* Progress Bars */}
          <div className="space-y-5">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">Productivity</span>
                <span className="font-medium text-gray-700">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">Digital Marketing</span>
                <span className="font-medium text-gray-700">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">Technology</span>
                <span className="font-medium text-gray-700">70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/KctSyM7t/success.png"
            alt="Business Discussion"
            className="rounded-xl shadow-md w-full max-w-md"
          />
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="bg-[#0B3C3D] text-white mt-16 rounded-xl flex flex-col md:flex-row justify-around items-center py-8">
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <FaUsers size={40} className="text-green-400 mb-3" />
          <h3 className="text-2xl font-bold">200+</h3>
          <p className="text-gray-300">Team Member</p>
        </div>

        <div className="flex flex-col items-center mb-6 md:mb-0">
          <FaProjectDiagram size={40} className="text-green-400 mb-3" />
          <h3 className="text-2xl font-bold">25k+</h3>
          <p className="text-gray-300">Complete Project</p>
        </div>

        <div className="flex flex-col items-center">
          <FaHandshake size={40} className="text-green-400 mb-3" />
          <h3 className="text-2xl font-bold">1100+</h3>
          <p className="text-gray-300">Client Review</p>
        </div>
      </div>
    </section>
  );
};

export default Success;
