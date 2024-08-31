import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import apple from "./images/apple.png"
const Landingpage = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: "Udemy Course Creation for Passive Income (Unofficial)",
      author: "CRFT Productions",
      rating: 4.6,
      reviews: 3109,
      price: "₹449",
      originalPrice: "₹3,099",
      label: "Bestseller",
      imageUrl: "https://your-image-source.com/your-course1.png",
    },
    {
      title: "Teach English Online: find students and start teaching now",
      author: "Charlie Cornelius",
      rating: 4.7,
      reviews: 2276,
      price: "₹449",
      originalPrice: "₹3,099",
      label: "Bestseller",
      imageUrl: "https://your-image-source.com/your-course2.png",
    },
    {
      title: "Create Responsive HTML5 eLearning with Articulate 360 Rise",
      author: "Jeff Batt",
      rating: 4.7,
      reviews: 1018,
      price: "₹449",
      originalPrice: "₹3,099",
      label: "Bestseller",
      imageUrl: "https://your-image-source.com/your-course3.png",
    },
    {
      title: "Udemy Masters: Learn Online Course Creation - Unofficial",
      author: "Phil Ebiner, Video School",
      rating: 4.6,
      reviews: 4371,
      price: "₹449",
      originalPrice: "₹2,899",
      label: "Bestseller",
      imageUrl: "https://your-image-source.com/your-course4.png",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <Header />
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:mt-20 px-5 md:px-20 max-w-6xl w-full">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Find and become a
            <span className="text-blue-500"> professional </span>
            with passion
          </h1>
          <p className="text-lg md:text-xl mt-6 font-medium text-gray-600">
            Make smart decisions with our revolutionary AI-enabled career
            guidance tools and expert career counsellors.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 hover:bg-blue-600 text-white text-lg md:text-xl rounded-lg py-4 px-10 mt-8 shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={apple}
            alt="Career Guidance"
            className="w-full md:w-3/4"
          />
        </div>
      </div>

      {/* Courses Section */}
      <div className="w-full mt-20 px-5 md:px-20 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Courses to get you started
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Explore courses from experienced, real-world experts.
        </p>
        <div className="mt-4 flex justify-start space-x-8">
          <span className="text-black font-bold cursor-pointer">
            Most popular
          </span>
          <span className="text-gray-600 cursor-pointer">Trending</span>
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="shadow-md rounded-lg overflow-hidden">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-lg">
                  {course.title}
                </h3>
                <p className="text-gray-600 mt-1">{course.author}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 font-bold">
                    {course.rating}
                  </span>
                  <span className="text-gray-600 ml-2">({course.reviews})</span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <span className="font-bold text-gray-800">
                      {course.price}
                    </span>
                    <span className="text-gray-500 line-through ml-2">
                      {course.originalPrice}
                    </span>
                  </div>
                  {course.label && (
                    <span className="text-sm bg-green-100 text-green-800 font-bold py-1 px-2 rounded">
                      {course.label}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center py-20">
        <h2 className="text-lg text-red-500">OUR SPECS </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          What Our App <span className="text-red-500">Provides</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center p-6 shadow-lg rounded-lg">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-bold">Option 1</h3>
          </div>
          <div className="text-center p-6 shadow-lg rounded-lg">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-bold">Option 2</h3>
          </div>
          <div className="text-center p-6 shadow-lg rounded-lg">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-bold">Option 3</h3>
          </div>
          <div className="text-center p-6 shadow-lg rounded-lg">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-bold">Option 4</h3>
          </div>
        </div>
      </div>

      {/* Gradient Banner */}
      <div className="bg-gradient-to-r from-red-400 to-purple-600 w-full py-16 text-white text-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">---Content---</h1>
          <h2 className="text-xl md:text-2xl mt-4">
            ---Description---
            <br />
            Sih Sih
          </h2>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full px-5 md:px-20 max-w-6xl mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
          Get in Touch
        </h2>
        <form
          action="https://formsubmit.co/invictus.sih@gmail.com"
          method="POST"
          className="bg-gray-100 p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-lg font-medium mb-2">
              Enter your message
            </label>
            <input
            
              type="text"
              name="message"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-lg py-3 px-6 shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            Send
          </button>
        </form>
      </div>

<br></br>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white w-full py-16">
        <div className="border-b border-gray-700 pb-8 mb-8 text-center">
          <p className="text-lg font-bold">
            Content <span className="text-indigo-400">Student's Amigo</span>{" "}
            Content
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-around max-w-6xl mx-auto text-left space-y-8 sm:space-y-0">
          <div className="flex flex-col space-y-4">
            <a href="#!" className="hover:underline">
              Business
            </a>
            <a href="#!" className="hover:underline">
              Teach
            </a>
            <a href="#!" className="hover:underline">
              App
            </a>
            <a href="#!" className="hover:underline">
              About Us
            </a>
            <a href="#!" className="hover:underline">
              Contact Us
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="#!" className="hover:underline">
              Careers
            </a>
            <a href="#!" className="hover:underline">
              Blog
            </a>
            <a href="#!" className="hover:underline">
              Help & Support
            </a>
            <a href="#!" className="hover:underline">
              Affiliate
            </a>
            <a href="#!" className="hover:underline">
              Investors
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="#!" className="hover:underline">
              Terms
            </a>
            <a href="#!" className="hover:underline">
              Privacy
            </a>
            <a href="#!" className="hover:underline">
              Cookie Preferences
            </a>
            <a href="#!" className="hover:underline">
              Sitemap
            </a>
            <a href="#!" className="hover:underline">
              Featured Courses
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;