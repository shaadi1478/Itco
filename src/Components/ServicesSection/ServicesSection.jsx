import React from 'react';
import { FiMonitor, FiBarChart2, FiSmartphone, FiSettings, FiArrowUpRight } from "react-icons/fi";

const ServicesSection = () => {
    return (
        <section className="bg-[#E3F9F5] mt-[140px] ">
            <div className='w-[1296px] m-auto py-20 px-10 flex justify-between items-start'>
                {/* Left Static Content */}
                <div className="max-w-lg">
                    <p className="text-green-600 text-sm">Our latest services</p>
                    <h2 className="text-4xl font-bold mt-2 leading-snug">
                        Our clients are the best at IT Management
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Our Custom Software Design And Development Teams Can Design, Build,
                        Test, And Deliver A Product That Fits Both Your Vision And With Market
                        Demand. With Our Support, You Will Find Customers, Build Income And
                        Attract New Investors.
                    </p>
                    <button className="mt-6 bg-green-600 text-white px-5 py-2 rounded-md font-medium">
                        View All Services
                    </button>
                </div>

                {/* Right Services List */}
                <div className="w-1/2 space-y-8">

                    {/* Service Item */}
                    <div className="flex items-center justify-between border-b border-gray-300 pb-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-green-600 text-white p-3 rounded-full text-xl">
                                <FiMonitor />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Software Development</h3>
                                <p className="text-gray-600 text-sm">Indeed vanity excuse or mr lovers of on.</p>
                            </div>
                        </div>
                        <FiArrowUpRight className="text-xl text-gray-700" />
                    </div>

                    {/* Service Item */}
                    <div className="flex items-center justify-between border-b border-gray-300 pb-4">
                        <div className="flex items-center gap-4">
                            <div className="border border-green-600 text-green-600 p-3 rounded-full text-xl">
                                <FiBarChart2 />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Data Analysis</h3>
                                <p className="text-gray-600 text-sm">Indeed vanity excuse or mr lovers of on.</p>
                            </div>
                        </div>
                        <FiArrowUpRight className="text-xl text-gray-700" />
                    </div>

                    {/* Service Item */}
                    <div className="flex items-center justify-between border-b border-gray-300 pb-4">
                        <div className="flex items-center gap-4">
                            <div className="border border-green-600 text-green-600 p-3 rounded-full text-xl">
                                <FiSmartphone />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">App Development</h3>
                                <p className="text-gray-600 text-sm">Indeed vanity excuse or mr lovers of on.</p>
                            </div>
                        </div>
                        <FiArrowUpRight className="text-xl text-gray-700" />
                    </div>

                    {/* Service Item */}
                    <div className="flex items-center justify-between border-b border-gray-300 pb-4">
                        <div className="flex items-center gap-4">
                            <div className="border border-green-600 text-green-600 p-3 rounded-full text-xl">
                                <FiSettings />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">IT Management</h3>
                                <p className="text-gray-600 text-sm">Indeed vanity excuse or mr lovers of on.</p>
                            </div>
                        </div>
                        <FiArrowUpRight className="text-xl text-gray-700" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
