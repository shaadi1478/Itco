import React from "react";
import Slider from "react-slick";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: `“I requested a UI update gig and received excellent work from Maria! Talented young UI/UX designer who exceeded expectations! Great experience and quick feedback. Will definitely work with again!”`,
    name: "Maria Johnson",
    designation: "UI/UX Designer",
    img: "https://i.postimg.cc/XqPDjT5w/testim1.png",
  },
  {
    text: `“Best Seller for website design, she goes above and beyond to please her clients. She is by my side the entire time. I will keep using her for additional projects. Thank You so much Techoweb.”`,
    name: "John Smith",
    designation: "Project Manager",
    img: "https://i.postimg.cc/X7ysK1FL/testim2.png",
  },
  {
    text: `“I requested a UI update gig and received excellent work from Maria! Talented young UI/UX designer who exceeded expectations! Great experience and quick feedback. Will definitely work with again!”`,
    name: "Sara Lee",
    designation: "Marketing Head",
    img: "https://i.postimg.cc/Kc16VNBr/testim3.png",
  },
  {
    text: `“Nurjahan96 is amazing. The website exceeded my expectations. She made all requested changes and ensured everything was exactly how I wanted it. Thank you so much!”`,
    name: "Alex Brown",
    designation: "Product Manager",
    img: "https://i.postimg.cc/g0M7tXJd/testim4.png",
  },
  {
    text: `“I would recommend nurjahan96 to everyone who wants to work with a professional. Amazing job and communication within the timeframe. One of the best designers you can find!”`,
    name: "Lily Adams",
    designation: "CEO",
    img: "https://i.postimg.cc/LssCP9VN/testm5.png",
  },
  {
    text: `“A master of UI/UX! This designer crafts digital experiences that captivate. With a keen eye for detail and user-centric approach, they deliver top-notch results. Highly impressed!”`,
    name: "Rosy Flower Gaggero",
    designation: "CEO",
    img: "https://i.postimg.cc/bJtR0sSq/testim6.png",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Desktop view
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-16 ">
      <div className="max-w-[1296px] mx-auto px-4">
        <h4 className="text-green-500 font-semibold mb-2">Clients Testimonials</h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Customers Say</h2>

        <Slider {...settings} className="gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="px-2">
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-evenly h-full min-h-[350px] md:min-h-[400px]">
                {/* Star & Quote */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <FaQuoteLeft className="text-gray-300 ml-auto text-2xl" />
                  </div>
                  <p className="text-gray-700">{item.text}</p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
