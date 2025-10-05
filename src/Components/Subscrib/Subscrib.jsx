import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-[#164343] w-full">
      <div className="max-w-[1296px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-[85px] px-6 py-12 lg:py-[100px]">
        {/* --- Left Image --- */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://i.postimg.cc/gk9zVpsr/Rectangle-4638.pngpng"
            alt="Newsletter"
            className="w-full max-w-[550px] h-auto object-cover rounded-lg"
          />
        </div>

        {/* --- Right Content --- */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] text-white font-bold leading-snug">
            Subscribe to Our Newsletter
          </h2>

          <p className="text-white font-normal mt-4 text-sm sm:text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-stretch justify-center lg:justify-start gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[300px] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 placeholder:text-white text-white"
            />
            <button className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition">
              Submit Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
