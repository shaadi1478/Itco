import React from 'react';
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="py-16 bg-gray-50 mb-5">
            <div className="max-w-[1296px] mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* --- Left Column: Get A Quote --- */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get A Quote</h2>
                        <form className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-6">
                            {/* Name + Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Name"
                                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400" />
                                <input type="email" placeholder="Your Email"
                                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400" />
                            </div>

                            {/* Phone + Service */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Phone"
                                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400" />
                                <input type="text" placeholder="Your Service"
                                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400" />
                            </div>

                            {/* Message */}
                            <textarea placeholder="Write your Message here..."
                                className="border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none">
                            </textarea>

                            {/* Submit Button */}
                            <button type="submit"
                                className="bg-green-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-green-300 hover:scale-105 transition transform duration-300">
                                Send Now
                            </button>
                        </form>
                    </div>

                    {/* --- Right Column: Get In Touch + Social --- */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-8 mb-6">
                            <div className="flex items-start gap-4">
                                <FiPhoneCall className="text-3xl text-green-400 mt-1" />
                                <div>
                                    <h4 className="font-semibold mb-1">Call Us</h4>
                                    <p className="text-gray-600">(+44) 123 456 789, (+1) 234-567-9874</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FiMail className="text-3xl text-green-400 mt-1" />
                                <div>
                                    <h4 className="font-semibold mb-1">E-Mail</h4>
                                    <p className="text-gray-600">alomuddin285@gmail.com</p>
                                    <p className="text-gray-400 text-sm">
                                        Save your email, name, website or other details
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MdLocationOn className="text-3xl text-green-400 mt-1" />
                                <div>
                                    <h4 className="font-semibold mb-1">Location</h4>
                                    <p className="text-gray-600">66 Guild Street 512B, Great North Town.</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-6 mt-4">
                            <FaFacebookF className="text-2xl md:text-3xl text-green-400 cursor-pointer hover:text-green-600 transition" />
                            <FaInstagram className="text-2xl md:text-3xl text-green-400 cursor-pointer hover:text-green-600 transition" />
                            <FaLinkedinIn className="text-2xl md:text-3xl text-green-400 cursor-pointer hover:text-green-600 transition" />
                            <FaTwitter className="text-2xl md:text-3xl text-green-400 cursor-pointer hover:text-green-600 transition" />
                        </div>
                    </div>
                </div>

                {/* --- Google Map --- */}
                <div className="w-full h-96 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.1234567890!2d-1.2345678!3d53.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487abcdef1234567%3A0xabcdef1234567890!2s66%20Guild%20Street%20512B%2C%20Great%20North%20Town!5e0!3m2!1sen!2sbd!4v1696500000000!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Company Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
