import React, { useState } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import software from "./images/software.png"
const Career = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const careerCourses = [
    {
      name: 'Software Engineering',
      description: 'Learn to design, develop, and maintain software applications using modern technologies.',
      image: software
    },
    {
      name: 'Data Science',
      description: 'Explore data analysis, machine learning, and statistical techniques to extract valuable insights from data.',
      image: 'https://via.placeholder.com/400x200?text=Data+Science'
    },
    {
      name: 'Graphic Design',
      description: 'Develop skills in visual communication, including design principles, typography, and digital media.',
      image: 'https://via.placeholder.com/400x200?text=Graphic+Design'
    },
    {
      name: 'Marketing',
      description: 'Understand market research, advertising strategies, and digital marketing techniques to drive business growth.',
      image: 'https://via.placeholder.com/400x200?text=Marketing'
    },
  ];

  const filteredCourses = careerCourses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="bg-gray-50 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Career Opportunities</h1>

          <div className="mb-8">
            <input
              type="text"
              placeholder="Search for career courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{course.name}</h2>
                <p className="text-lg text-gray-600 mb-4">{course.description}</p>
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
                  onClick={() => navigate('/DetailsPage')}
                >
                  Know More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
