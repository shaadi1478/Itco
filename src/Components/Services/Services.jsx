import React from 'react';
import Subscribe from '../Subscrib/Subscrib';
import Pricing from '../Pricing/Pricing';
import services from "../../assets/services.png"
import services2 from "../../assets/services2.png"
import services3 from "../../assets/services3.png"
import services4 from "../../assets/services4.png"
import services5 from "../../assets/services5.png"
import services6 from "../../assets/services6.png"
import mask from "../../assets/mask.png"
import mask2 from "../../assets/Mask group.png"
import mask3 from "../../assets/Mask group (1).png"
import mask4 from "../../assets/Mask group (2).png"
import mask5 from "../../assets/Mask group (3).png"
import mask6 from "../../assets/Mask group (4).png"
// import mask3 from "../../assets/Mask group (1).png"

const Services = () => {
    return (
        <div>
            <section className="py-16 bg-gray-50">
                <div className="max-w-[1296px] mx-auto px-6">
                    <h3 className="text-lg text-green-400 font-semibold mb-2">What We Do</h3>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">Services That Help You Grow</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* --- Service 1 --- */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img src={services} alt="Content Management" className="w-full h-48 object-cover" />
                            <div className="p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Content Management</h3>
                                    <p className="text-gray-600 mb-2">
                                        We focus on the best practices IT solutions and services.
                                    </p>
                                    <p className="text-green-400 font-semibold cursor-pointer hover:underline">Read More</p>
                                </div>
                                <img src={mask} alt="mask" className="w-12 h-12" />
                            </div>
                        </div>

                        {/* --- Service 2 --- */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img src={services2} alt="SEO Optimization" className="w-full h-48 object-cover" />
                            <div className="p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Information Security</h3>
                                    <p className="text-gray-600 mb-2">
                                        We focus on the best practices it
                                        solutions and for services.
                                    </p>
                                    <p className="text-green-400 font-semibold cursor-pointer hover:underline">Read More</p>
                                </div>
                                <img src={mask2} alt="mask" className="w-12 h-12" />
                            </div>
                        </div>

                        {/* --- Service 3 --- */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img src={services3} alt="Digital Marketing" className="w-full h-48 object-cover" />
                            <div className="p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Software Development</h3>
                                    <p className="text-gray-600 mb-2">
                                        We focus on the best practices it
                                        solutions and for services.
                                    </p>
                                    <p className="text-green-400 font-semibold cursor-pointer hover:underline">Read More</p>
                                </div>
                                <img src={mask3} alt="mask" className="w-12 h-12" />
                            </div>
                        </div>

                        {/* --- Service 4 --- */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img src={services4} alt="Web Development" className="w-full h-48 object-cover" />
                            <div className="p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Web Analysis</h3>
                                    <p className="text-gray-600 mb-2">
                                        We build responsive and modern web applications.
                                    </p>
                                    <p className="text-green-400 font-semibold cursor-pointer hover:underline">Read More</p>
                                </div>
                                <img src={mask4} alt="mask" className="w-12 h-12" />
                            </div>
                        </div>

                        {/* --- Service 5 --- */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img src={services5} alt="App Development" className="w-full h-48 object-cover" />
                            <div className="p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
                                    <p className="text-gray-600 mb-2">
                                        We focus on the best practices it
                                        solutions and for services.
                                    </p>
                                    <p className="text-green-400 font-semibold cursor-pointer hover:underline">Read More</p>
                                </div>
                                <img src={mask5} alt="mask" className="w-12 h-12" />
                            </div>
                        </div>

                        {/* --- Service 6 --- */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img src={services6} alt="UI/UX Design" className="w-full h-48 object-cover" />
                            <div className="p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Tech Support Pro</h3>
                                    <p className="text-gray-600 mb-2">
                                        We focus on the best practices it
                                        solutions and for services.
                                    </p>
                                    <p className="text-green-400 font-semibold cursor-pointer hover:underline">Read More</p>
                                </div>
                                <img src={mask6} alt="mask" className="w-12 h-12" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Subscribe />
            <Pricing />
        </div>
    );
};

export default Services;