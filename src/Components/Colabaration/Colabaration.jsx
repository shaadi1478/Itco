import React from "react";

const Colabaration = () => {
  return (
    <section className="bg-[#164343] w-full py-20">
      <div className="max-w-[1296px] mx-auto px-4 text-center">
        {/* Heading */}
        <div className="text-[20px] md:text-[24px] font-bold text-white mb-12">
          <h2>
            We have more than <span className="text-[#16A571]">270+</span> Happy
          </h2>
          <h2>Customers with satisfaction</h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
          <img
            src="/public/sp1 1.png"
            alt="Client Logo 1"
            className="h-16 object-contain"
          />
          <img
            src="/public/sp4 1.png"
            alt="Client Logo 2"
            className="h-16 object-contain"
          />
          <img
            src="/public/sp5 1.png"
            alt="Client Logo 3"
            className="h-16 object-contain"
          />
          <img
            src="/public/sp7 1.png"
            alt="Client Logo 4"
            className="h-16 object-contain"
          />
          <img
            src="/public/sp8 1.png"
            alt="Client Logo 5"
            className="h-16 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Colabaration;
