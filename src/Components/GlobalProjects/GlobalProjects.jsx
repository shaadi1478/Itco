import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const projects = [
    {
        id: 1,
        title: "Project Analysis",
        category: "Data Management",
        image: "https://i.postimg.cc/mkXJtXz9/Rectangle-22818.png", // replace with actual path or import
    },
    {
        id: 2,
        title: "Project Development",
        category: "IT Management",
        image1: "https://i.postimg.cc/pLXQ0WS5/Rectangle-22816.png",
    },
    {
        id: 3,
        title: "Team Collaboration",
        category: "Business Strategy",
        image2: "/path-to-your-image3.png",
    },
];

const GlobalProjects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <p className="text-green-500 text-sm font-medium mb-2">Latest Project</p>
            <h2 className="text-3xl font-bold mb-6">Let’s Looks Our Global Projects</h2>

            <div className="relative">
                <div className="flex space-x-4 overflow-hidden">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`min-w-full transition-transform duration-500 ${index === currentIndex ? "translate-x-0" : "translate-x-full"
                                }`}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                <div className="relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                    {project.title && (
                                        <div className="absolute bottom-4 left-4 bg-white p-3 rounded shadow flex items-center justify-between w-64">
                                            <div>
                                                <h3 className="font-bold">{project.title}</h3>
                                                <p className="text-sm text-gray-500">{project.category}</p>
                                            </div>
                                            <FiArrowRight className="text-green-500 text-xl" />
                                        </div>
                                    )}
                                </div>
                                <div className="relative">
                                    <img
                                        src={project.image1}
                                        alt={project.title}
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                    {project.title && (
                                        <div className="absolute bottom-4 left-4 bg-white p-3 rounded shadow flex items-center justify-between w-64">
                                            <div>
                                                <h3 className="font-bold">{project.title}</h3>
                                                <p className="text-sm text-gray-500">{project.category}</p>
                                            </div>
                                            <FiArrowRight className="text-green-500 text-xl" />
                                        </div>
                                    )}
                                </div>
                                <div className="relative">
                                    <img
                                        src={project.image2}
                                        alt={project.title}
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                    {project.title && (
                                        <div className="absolute bottom-4 left-4 bg-white p-3 rounded shadow flex items-center justify-between w-64">
                                            <div>
                                                <h3 className="font-bold">{project.title}</h3>
                                                <p className="text-sm text-gray-500">{project.category}</p>
                                            </div>
                                            <FiArrowRight className="text-green-500 text-xl" />
                                        </div>
                                    )}
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
