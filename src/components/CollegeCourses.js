import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';

const CourseList = () => {
  const { collegeId } = useParams(); 
  const [collegeName, setCollegeName] = useState('');
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://legion.tailaadcc.ts.net:5000/college/${collegeId}`, {
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
        setCollegeName(data.college_name[0]); 
        setCourses(data.results); 
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching courses:', err);
        setError(err);
        setLoading(false);
      });
  }, [collegeId]);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error loading courses: {error.message}</p>;

  return (
    <div>
      <Header />
      <div className="bg-gray-50 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b-2 border-black pb-2">
            {collegeName} - Course List
          </h1>
          <ul className="space-y-4">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="flex items-stretch bg-white p-2 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out"
              >
                <div className="flex-shrink-0 w-1/3"> {/* Reduced width for the image */}
                  <img
                    src={course.course_img}
                    alt={course.course_name}
                    className="w-full h-full object-cover rounded-lg" // Image is smaller
                  />
                </div>
                <div className="flex-1 ml-4 flex flex-col justify-center"> {/* Less margin */}
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{course.course_name}</h2>
                  <p className="text-lg text-gray-600 mb-2 font-bold"><strong></strong> {course.course_id}</p>
                  <p className="text-sm text-gray-600 mb-2"><strong>Description:</strong> {course.course_desc}</p>
                  <p className="text-lg text-gray-600 mb-2"><strong>Requirements:</strong> {course.course_requirements}</p>
                  <div className="text-lg text-gray-600">
                    <strong>Cutoff:</strong>
                    <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded-lg ml-2">
                      {course.cutoff}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
