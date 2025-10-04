import React from "react";

const About = () => {
  return (
    <section className="bg-white mt-20 md:mt-[140px] px-4">
      <div className="max-w-[1296px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-[100px]">
        {/* Left Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            className="w-full max-w-[636px] h-auto rounded-lg object-cover"
            src="/public/Image (1).png"
            alt="About company"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 leading-relaxed">
          <h3 className="text-[#16A571] text-lg md:text-[20px] font-normal mb-2 text-center md:text-left">
            About Your Company
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-[50px] font-bold leading-tight text-center md:text-left">
            We Execute Our Ideas
            <br /> From The Start to Finish
          </h1>

          <p className="mt-4 text-[#383838] text-base md:text-[18px] font-normal text-center md:text-left">
            Solve business problems and automate workflows with artificial
            intelligence-based solutions. Unlock the hidden power of the data
            you already have and enhance creativity.
          </p>

          <div className="mt-5 flex flex-col gap-2 text-sm md:text-base text-center md:text-left">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <img src="/public/point.png" alt="" className="w-4 h-4" />
              Development of Financial Models
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <img src="/public/point.png" alt="" className="w-4 h-4" />
              Nifty team is a diverse network of consultants
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <img src="/public/point.png" alt="" className="w-4 h-4" />
              Industry professionals with a global mindset
            </p>
          </div>

          <div className="mt-6 text-center md:text-left">
            <button className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
