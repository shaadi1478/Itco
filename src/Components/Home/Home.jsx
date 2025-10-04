import React from 'react';
import { FaPlay } from "react-icons/fa";
import About from '../About/About';
import Subscrib from '../Subscrib/Subscrib';
import ServicesSection from '../ServicesSection/ServicesSection';
import Success from '../Success/Success';
import GlobalProjects from '../GlobalProjects/GlobalProjects';
import Colabaration from '../Colabaration/Colabaration';
import Pricing from '../Pricing/Pricing';
import Footer from '../Footer/Footer';
import Blogs from '../Blogs/Blogs';
import heroimage from "../../assets/heroimage.png"

const Home = () => {
    return (
        <div>
             <section className="bg-[#0F3D3E] text-white">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1296px] mx-auto px-6 md:px-10 py-12 md:py-20 gap-10">
        {/* Left Text Section */}
        <div className="max-w-lg text-center md:text-left">
          <p className="text-green-300 text-sm">IT solutions for the new era</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
            Beautiful IT services
            <br className="hidden sm:block" /> for your success
          </h1>
          <p className="text-gray-300 mt-4 text-sm sm:text-base">
            Leverage agile frameworks to provide a robust synopsis for high level
            overviews. Iterative approaches bring table survival.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
            <button className="bg-green-400 text-black px-5 py-2 rounded-md font-semibold hover:bg-green-300 transition">
              Read More
            </button>
            <button className="flex items-center gap-2 border border-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition">
              <FaPlay /> Play Intro
            </button>
          </div>

          {/* Team Members */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-8">
            <div className="flex -space-x-3">
              <img
                src="/public/Ellipse 10.png"
                alt="team"
                className="w-10 h-10 rounded-full border border-white"
              />
              <img
                src="/public/Ellipse 8.png"
                alt="team"
                className="w-10 h-10 rounded-full border border-white"
              />
              <img
                src="/public/Ellipse 12.png"
                alt="team"
                className="w-10 h-10 rounded-full border border-white"
              />
            </div>
            <div className="text-lg font-bold text-center md:text-left">
              36k+{" "}
              <span className="text-gray-300 text-sm block">
                Team Members
              </span>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://i.postimg.cc/y8QyGLkW/heroimage.png"
            alt="Hero"
            className="w-[90%] sm:w-[450px] md:w-[550px] lg:w-[636px] h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
            <About />
            <ServicesSection />
            <Subscrib />
            <GlobalProjects />
            <Success />
            <Pricing />
            <Colabaration />
            <Blogs />
            <Footer />
        </div>
    );
};

export default Home;