import React from "react";
import { FaUser, FaCalendarAlt, FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import news from '../../assets/news.png'
// import news2 from '../../assets/news2.png'
// import news3 from '../../assets/news3.png'
// import news4 from '../../assets/news4.png'

const Blogs = () => {
  const blogData = [
    {
      id: 1,
      title: "Everything you need to learn about IT Solution for your Company.",
      date: "October 2, 2023",
      admin: "Admin",
      img: "https://i.postimg.cc/66D42dRD/news4.png",
    },
    {
      id: 2,
      title: "Everything you need to learn about IT Solution for your Company.",
      date: "October 2, 2023",
      admin: "Admin",
      img: "https://i.postimg.cc/YCx77HM3/news.png",
    },
    {
      id: 3,
      title:
        "New Technology for System Secutiry to improve secutiry system.",
      date: "October 2, 2023",
      admin: "Admin",
      img: "https://i.postimg.cc/XvG0Cyw0/news2.png",
    },
    {
      id: 4,
      title:
        "Analytical Solutions lorem ispsum take a trivial example, which of us ever under.",
      date: "October 2, 2023",
      admin: "Admin",
      img: "https://i.postimg.cc/Gt37vZZ8/news3.png",
    },
  ];

  return (
    <section className="bg-[#E9FBF7] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-green-700 font-medium mb-2">Our Blogs</p>
            <h2 className="text-4xl font-bold text-gray-900 leading-snug">
              Let's Checkout Our All <br /> Latest News
            </h2>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center border border-green-600 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition">
              <FaArrowLeft />
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-green-600 rounded-full text-white hover:bg-green-700 transition">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Main Blog */}
          <div>
            <img
              src={blogData[0].img}
              alt="Main Blog"
              className="rounded-xl shadow-md mb-4 w-full h-[350px] object-cover"
            />
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
              <span className="flex items-center gap-1">
                <FaUser className="text-green-600" /> {blogData[0].admin}
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="text-green-600" /> {blogData[0].date}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              {blogData[0].title}
            </h3>
          </div>

          {/* Right - Blog List */}
          <div className="flex flex-col gap-6">
            {blogData.slice(1).map((blog) => (
              <div
                key={blog.id}
                className="flex gap-4 border-b pb-4 hover:translate-x-1 transition-transform"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-32 h-24 object-cover rounded-lg"
                />
                <div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <FaUser className="text-green-600" /> {blog.admin}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-green-600" /> {blog.date}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </h4>
                  <button className="text-green-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <FaArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
