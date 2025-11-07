import React from "react";
import { FaCalendarAlt, FaUserAlt, FaComments } from "react-icons/fa";
import blog1 from "../../assets/news4.png";
import blog2 from "../../assets/services.png";
import blog3 from "../../assets/blog1.png";
import blog4 from "../../assets/services2.png";
import Container from "../../Container/Container";

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "Maximizing Productivity with IT Support Service",
    date: "July 3, 2023",
    author: "Admin",
    comments: 5,
    description:
      "With decades of experience, we established ourselves as one of the biggest agencies in the world. We help designers create amazing digital products faster and easier.",
  },
  {
    id: 2,
    image: blog2,
    title: "Leaves Should Be Shredded Before Used As Mulch",
    date: "July 2, 2023",
    author: "Admin",
    comments: 3,
    description:
      "Mulch helps retain moisture and prevents weeds. Before applying as mulch, leaves should be shredded properly for better soil enrichment and air circulation.",
  },
  {
    id: 3,
    image: blog3,
    title: "It’s Time To Design Your Dream Outdoor Living Space",
    date: "July 1, 2023",
    author: "Admin",
    comments: 8,
    description:
      "With our decades of experience, we established ourselves as one of the leading design agencies. We help designers and developers bring creative visions to life.",
  },
];

const categories = [
  "Software Development",
  "Web Design",
  "App Development",
  "Digital Marketing",
  "Information Security",
];

const recentPosts = [
  {
    id: 1,
    title: "Execute your Business With IT Expertise",
    date: "July 3, 2023",
    image: blog2,
  },
  {
    id: 2,
    title: "Maximizing Productivity with IT Support Service",
    date: "July 2, 2023",
    image: blog4,
  },
  {
    id: 3,
    title: "Execute your Business With IT Expertise",
    date: "July 1, 2023",
    image: blog3,
  },
];

const tags = [
  "Marketing",
  "Tech",
  "Web Design",
  "Development",
  "Daily Inspiration",
];

const BlogSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <Container>
        <section className="px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* --- Left: Blog List --- */}
          <div className="lg:col-span-2 space-y-10">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[550px] object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm gap-4 mb-3">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt /> {blog.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaUserAlt /> {blog.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaComments /> {blog.comments} Comments
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 hover:text-green-600 cursor-pointer transition">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mt-3">{blog.description}</p>
                  <button className="mt-5 bg-green-500 text-white px-5 py-2 rounded-md font-medium hover:bg-green-600 transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* --- Right: Sidebar --- */}
          <aside className="space-y-8">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-md p-5">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-500"
              />
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md p-5">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                Categories
              </h3>
              <ul className="space-y-2 text-gray-700">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    className="hover:text-green-500 cursor-pointer transition"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow-md p-5">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-4 items-center">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <p className="text-gray-800 font-medium text-sm hover:text-green-500 cursor-pointer">
                        {post.title}
                      </p>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl shadow-md p-5">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="border px-3 py-1 rounded-md text-sm text-gray-700 hover:bg-green-500 hover:text-white cursor-pointer transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </Container>
    </div>
  );
};

export default BlogSection;
