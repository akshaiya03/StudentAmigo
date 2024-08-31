import React from 'react';
import { useParams } from 'react-router-dom';
import software from "./images/software.png"; // Assuming the image is stored locally
import Header from './Header';
const DetailsPage = () => {
  const { courseId } = useParams(); // Assuming courseId is passed in URL

  // Sample course data - in real use case, you would fetch this data
  const courseData = {
    name: 'Software Engineer',
    description: 'Learn to design, develop, and maintain software applications using modern technologies.',
    image: software, // Replace with your image URL
    youtubeLink: "https://www.youtube.com/embed/OVZYOItkUUs?si=ckMW6NNmtN8Pdwpr", // Replace with your YouTube video link
    colleges: [
      'IIT',
      'Anna University',
      'Siva Subramanium Nadar College of Engineering'
    ],
    mentors: [
      { name: 'Dr. John Doe', title: 'Senior Software Engineer', company: 'Google' },
      { name: 'Jane Smith', title: 'Software Architect', company: 'Microsoft' },
      { name: 'Alice Johnson', title: 'Tech Lead', company: 'Amazon' },
    ]
  };

  return (
    <div>
    <Header/>
    <div className="pt-8 min-h-screen bg-gray-50 flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">{courseData.name}</h1>
        <img src={courseData.image} alt={courseData.name} className="w-full h-auto mb-6 rounded-lg shadow-md" />
        <p className="text-lg text-gray-600 mb-6">{courseData.description}</p>

        {/* YouTube Video Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Learn More About Software Engineering</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src={courseData.youtubeLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Colleges Offering This Course</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {courseData.colleges.map((college, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-300 to-gray-200 text-gray-800 p-4 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-medium">{college}</h3>
            </div>
          ))}
        </div>

        
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Connect with Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courseData.mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{mentor.name}</h3>
              <p className="text-gray-600">{mentor.title}</p>
              <p className="text-gray-600">at {mentor.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default DetailsPage;
