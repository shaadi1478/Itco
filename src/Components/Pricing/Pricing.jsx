import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Basic Plan",
      price: billing === "monthly" ? 110 : 999,
      features: [
        "Key Words Optimized",
        "Top 10 Ranking Guarantee",
        "Weekly Reporting",
        "Key Words Optimized",
        "Top 10 Ranking Guarantee",
        "Unlimited users",
      ],
      active: false,
    },
    {
      name: "Popular",
      price: billing === "monthly" ? 210 : 1899,
      features: [
        "Key Words Optimized",
        "Top 10 Ranking Guarantee",
        "Weekly Reporting",
        "Key Words Optimized",
        "Top 10 Ranking Guarantee",
        "Unlimited users",
      ],
      active: true,
    },
    {
      name: "Custom",
      price: billing === "monthly" ? 310 : 2899,
      features: [
        "Key Words Optimized",
        "Top 10 Ranking Guarantee",
        "Weekly Reporting",
        "Key Words Optimized",
        "Top 10 Ranking Guarantee",
        "Unlimited users",
      ],
      active: false,
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-[1296px] mx-auto text-center">
        <p className="text-green-700 font-medium mb-2">Our Pricing</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Find the Right Plan
        </h2>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-2 flex gap-2">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full font-medium transition ${
                billing === "monthly"
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Bill Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 rounded-full font-medium transition ${
                billing === "yearly"
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Bill Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-md overflow-hidden border transition-transform hover:scale-105 ${
                plan.active ? "bg-[#0B3C3D] text-white" : "bg-[#E3F9F5]"
              }`}
            >
              <div className="p-8 text-center">
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    plan.active ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold mb-2">
                  ${plan.price}
                  <span className="text-base font-normal text-gray-500 ml-1">
                    /Per Month
                  </span>
                </div>

                <button
                  className={`mt-4 mb-8 px-6 py-2 rounded-md font-medium border ${
                    plan.active
                      ? "bg-green-500 hover:bg-green-600 text-white border-green-500"
                      : "text-green-600 border-green-500 hover:bg-green-500 hover:text-white"
                  }`}
                >
                  Discover More
                </button>

                {/* Features */}
                <ul className="text-left space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle
                        className={`${
                          plan.active ? "text-green-400" : "text-green-600"
                        }`}
                      />
                      <span
                        className={`${
                          plan.active ? "text-gray-100" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
