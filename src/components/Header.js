import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  return (
    <ul className="flex flex-col md:flex-row md:space-x-6 font-semibold text-lg text-gray-600">
      <li>
        <Link
          className="block px-4 py-2 hover:text-blue-600 transition-colors"
          to="/careerDetails"
        >
          Career
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-2 hover:text-blue-600 transition-colors"
          to="/College"
        >
          Colleges
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-2 hover:text-blue-600 transition-colors"
          to="/Course"
        >
          Courses
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-2 hover:text-blue-600 transition-colors"
          to="/Exam"
        >
          Exam
        </Link>
      </li>
    </ul>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [isOpen, setOpen] = useState(false);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const togglemenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="w-full flex items-center justify-between shadow-lg py-4 px-6 bg-white">
      <div className="flex items-center">
        <span
          className="text-2xl font-bold text-black cursor-pointer"
          onClick={() => {
            navigate("/browse");
          }}
        >
          STUDENTAMIGO
        </span>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex">
        <Navbar />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
          onClick={togglemenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* SignOut Button */}
      {user && (
        <button
          className="ml-6 font-bold text-gray-700 hover:text-blue-600 transition-colors"
          onClick={handleSignout}
        >
          SignOut
        </button>
      )}

      {/* Mobile Navbar */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-10 py-4">
          <Navbar />
        </div>
      )}
    </div>
  );
};

export default Header;