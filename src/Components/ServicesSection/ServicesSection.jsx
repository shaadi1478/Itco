import React from "react";
import {
  FiMonitor,
  FiBarChart2,
  FiSmartphone,
  FiSettings,
  FiArrowUpRight,
} from "react-icons/fi";

const ServicesSection = () => {
  return (
    <section className="bg-[#E3F9F5] mt-20 md:mt-[140px] px-4">
      <div className="max-w-[1296px] mx-auto py-16 flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* --- Left Static Content --- */}
        <div className="w-full lg:w-1/2">
          <p className="text-green-600 text-sm text-center lg:text-left">
            Our latest services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 leading-snug text-center lg:text-left">
            Our clients are the best at IT Management
          </h2>
          <p className="text-gray-600 mt-4 text-center lg:text-left text-sm sm:text-base">
            Our custom software design and development teams can design, build,
            test, and deliver a product that fits both your vision and market
            demand. With our support, you’ll find customers, build income, and
            attract new investors.
          </p>
          <div className="text-center lg:text-left">
            <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-500 transition">
              View All Services
            </button>
          </div>
        </div>

        {/* --- Right Services List --- */}
        <div className="w-full lg:w-1/2 space-y-8">
          {[
            {
              icon: <FiMonitor />,
              title: "Software Development",
              desc: "Indeed vanity excuse or mr lovers of on.",
              filled: true,
            },
            {
              icon: <FiBarChart2 />,
              title: "Data Analysis",
              desc: "Indeed vanity excuse or mr lovers of on.",
            },
            {
              icon: <FiSmartphone />,
              title: "App Development",
              desc: "Indeed vanity excuse or mr lovers of on.",
            },
            {
              icon: <FiSettings />,
              title: "IT Management",
              desc: "Indeed vanity excuse or mr lovers of on.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-300 pb-4 gap-3"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div
                  className={`p-3 rounded-full text-xl ${
                    service.filled
                      ? "bg-green-600 text-white"
                      : "border border-green-600 text-green-600"
                  }`}
                >
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </div>
              <FiArrowUpRight className="text-xl text-gray-700 self-end sm:self-center" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
