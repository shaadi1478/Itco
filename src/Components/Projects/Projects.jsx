import React from 'react';
import services from "../../assets/project1.png"
import services2 from "../../assets/project2.png"
import services3 from "../../assets/project3.png"
import services4 from "../../assets/project4.png"
import services5 from "../../assets/project5.png"
import services6 from "../../assets/project6.png"

const Projects = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1296px] mx-auto px-6">
        <h3 className="text-lg text-green-400 font-semibold mb-2">What We Do</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Services That Help You Grow</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* --- Project 1 --- */}
          <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl group">
            <img src={services} alt="Project 1" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-white text-2xl font-semibold mb-2">Content Management</h3>
              <p className="text-gray-200 mb-4">We focus on the best practices IT solutions and services.</p>
              <button className="bg-green-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-300 transition">
                Read More
              </button>
            </div>
          </div>

          {/* --- Project 2 --- */}
          <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl group">
            <img src={services2} alt="Project 2" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-white text-2xl font-semibold mb-2">SEO Optimization</h3>
              <p className="text-gray-200 mb-4">We provide SEO strategies to boost your online presence.</p>
              <button className="bg-green-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-300 transition">
                Read More
              </button>
            </div>
          </div>

          {/* --- Project 3 --- */}
          <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl group">
            <img src={services3} alt="Project 3" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-white text-2xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-200 mb-4">Our digital marketing solutions help grow your business.</p>
              <button className="bg-green-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-300 transition">
                Read More
              </button>
            </div>
          </div>

          {/* --- Project 4 --- */}
          <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl group">
            <img src={services4} alt="Project 4" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-white text-2xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-200 mb-4">We build responsive and modern web applications.</p>
              <button className="bg-green-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-300 transition">
                Read More
              </button>
            </div>
          </div>

          {/* --- Project 5 --- */}
          <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl group">
            <img src={services5} alt="Project 5" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-white text-2xl font-semibold mb-2">App Development</h3>
              <p className="text-gray-200 mb-4">Create mobile apps that your users will love.</p>
              <button className="bg-green-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-300 transition">
                Read More
              </button>
            </div>
          </div>

          {/* --- Project 6 --- */}
          <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl group">
            <img src={services6} alt="Project 6" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-white text-2xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-200 mb-4">Designing user-friendly and aesthetic interfaces.</p>
              <button className="bg-green-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-300 transition">
                Read More
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
