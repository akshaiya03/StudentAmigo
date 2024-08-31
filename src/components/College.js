import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const CollegeList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://legion.tailaadcc.ts.net:5000/listcolleges', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data.results); // Update to match the JSON structure
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleViewCourses = (courseLink) => {
    navigate(courseLink); 
  };

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div>
      <Header />
      <div className="bg-gray-50 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">List of Colleges</h1>
          <ul className="space-y-8">
            {data.map((college, index) => (
              <li key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6">
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{college.name}</h2>
                  <p className="text-lg text-gray-600 mb-4">NRIF: {college.nrif}</p>
                  <div className="space-x-4">
                    <a
                      href={college.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
                    >
                      Visit Website
                    </a>
                    <button
                      onClick={() => handleViewCourses(college.coursesn_link)} // Pass the course link to the handler
                      className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition duration-300"
                    >
                      View Courses
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollegeList;
