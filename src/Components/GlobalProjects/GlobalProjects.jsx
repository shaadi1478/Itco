import React, { useState, useEffect } from "react";
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
  const [cardsPerView, setCardsPerView] = useState(3);

  // Update cardsPerView based on window width
  const updateCardsPerView = () => {
    if (window.innerWidth < 768) {
      setCardsPerView(1); // Mobile
    } else {
      setCardsPerView(3); // Tablet/Desktop
    }
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - cardsPerView : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= projects.length - cardsPerView ? 0 : prev + 1
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-green-500 text-sm font-medium mb-2 uppercase tracking-wide">
          Latest Project
        </p>
        <h2 className="text-4xl font-bold text-gray-800">
          Let’s Look at Our Global Projects
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            width: `${(projects.length / cardsPerView) * 100}%`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`px-3 flex-shrink-0`}
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.category}</p>
                  </div>
                  <FiArrowRight className="text-green-500 text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white border border-green-500 text-green-600 p-2 rounded-full hover:bg-green-100 transition"
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
    </section>
  );
};

export default GlobalProjects;
