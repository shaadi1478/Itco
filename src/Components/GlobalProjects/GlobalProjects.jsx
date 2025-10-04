import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Project Analysis",
    category: "Data Management",
    image: "https://i.postimg.cc/mkXJtXz9/Rectangle-22818.png",
  },
  {
    id: 2,
    title: "Project Development",
    category: "IT Management",
    image: "https://i.postimg.cc/pLXQ0WS5/Rectangle-22816.png",
  },
  {
    id: 3,
    title: "Team Collaboration",
    category: "Business Strategy",
    image: "https://i.postimg.cc/mkfJMz8G/Group-1000007468.png",
  },
  {
    id: 4,
    title: "Marketing Strategy",
    category: "Business Growth",
    image: "https://i.postimg.cc/mkXJtXz9/Rectangle-22818.png",
  },
  {
    id: 5,
    title: "App Development",
    category: "IT Management",
    image: "https://i.postimg.cc/mkfJMz8G/Group-1000007468.png",
  },
];

const GlobalProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 3;

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? projects.length - cardsPerView : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex >= projects.length - cardsPerView ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <p className="text-green-500 text-sm font-medium mb-2">Latest Project</p>
      <h2 className="text-3xl font-bold mb-6">Let’s Look at Our Global Projects</h2>

      <div className="relative overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)` }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-1/3 px-2" // each card takes 1/3 of the container
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.category}</p>
                  </div>
                  <FiArrowRight className="text-green-500 text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-green-100 text-green-500 p-2 rounded-full hover:bg-green-200 transition"
        >
          <FiArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"
        >
          <FiArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default GlobalProjects;
