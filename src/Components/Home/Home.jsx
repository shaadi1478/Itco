import React from 'react';
import { FaPlay } from "react-icons/fa";
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <section className="bg-[#0F3D3E]">
                <div className='flex items-center justify-between px-10 py-20  text-white w-[1296px] m-auto'>

                    {/* Left Text Section */}
                    <div className="max-w-lg">
                        <p className="text-green-300 text-sm">IT solutions for the new era</p>
                        <h1 className="text-5xl font-bold leading-tight mt-2">
                            Beautiful IT services<br />for your success
                        </h1>
                        <p className="text-gray-300 mt-4">
                            Leverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches bring table survival.
                        </p>

                        <div className="flex items-center gap-4 mt-6">
                            <button className="bg-green-400 text-black px-5 py-2 rounded-md font-semibold">Read More</button>
                            <button className="flex items-center gap-2 border border-white px-5 py-2 rounded-md">
                                <FaPlay /> Play Intro
                            </button>
                        </div>

                        <div className="flex items-center gap-3 mt-8">
                            <div className="flex -space-x-3">
                                <img src="/public/Ellipse 10.png" alt="team" className="w-10 h-10 rounded-full border" />
                                <img src="/public/Ellipse 8.png" alt="team" className="w-10 h-10 rounded-full border" />
                                <img src="/public/Ellipse 12.png" alt="team" className="w-10 h-10 rounded-full border" />
                            </div>
                            <div className="text-lg font-bold">36k+ <span className="text-gray-300 text-sm block">Team Members</span></div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="">
                        <img src="/public/heroimage.png" alt="Hero" className="w-[636px] h-[600px] object-cover rounded-lg" />
                    </div>
                </div>
            </section>
            <About />
        </div>
    );
};

export default Home;