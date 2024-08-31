import React, { useState, useRef } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import Header from './Header';

const AcademicForm = () => {
  const [standard, setStandard] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Refs for input fields
  const nameRef = useRef(null);
  const schoolNameRef = useRef(null);
  const schoolLocationRef = useRef(null);
  const streamRef = useRef(null);
  const subjectsRef = useRef(null);
  const careerAspirationsRef = useRef(null);
  const extracurricularRef = useRef(null);
  const additionalSupportRef = useRef(null);

  const boardRef = useRef(null);
  const marksRef = useRef(null);
  const overallPercentageRef = useRef(null);
  const entranceExamPrepRef = useRef(null);
  const higherEducationAspirationsRef = useRef(null);
  const preferredInstitutionsRef = useRef(null);
  const careerGoalsRef = useRef(null);
  const extracurricularAchievementsRef = useRef(null);
  const scholarshipApplicationsRef = useRef(null);
  const gapYearConsiderationRef = useRef(null);

  const cutoffRef12th = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsSubmitted(true);

    try {
      const user = auth.currentUser;
      if (!user) {
        alert("User not authenticated");
        return;
      }

      const userId = user.uid;
      const db = getDatabase();
      const userRef = ref(db, `students/${userId}/academicDetails`);

      const academicData = {
        name: nameRef.current.value,
        schoolName: schoolNameRef.current.value,
        schoolLocation: schoolLocationRef.current.value,
        stream: standard === "10th" ? streamRef.current.value : null,
        subjectsOfInterest: standard === "10th" ? subjectsRef.current.value : null,
        careerAspirations: standard === "10th" ? careerAspirationsRef.current.value : null,
        extracurricularActivities: standard === "10th" ? extracurricularRef.current.value : null,
        additionalSupportNeeded: standard === "10th" ? additionalSupportRef.current.value : null,
        boardOfEducation: standard === "12th" ? boardRef.current.value : null,
        marksInKeySubjects: standard === "12th" ? marksRef.current.value : null,
        overallPercentage: standard === "12th" ? overallPercentageRef.current.value : null,
        streamConfirmation: standard === "12th" ? streamRef.current.value : null,
        entranceExamPreparation: standard === "12th" ? entranceExamPrepRef.current.value : null,
        higherEducationAspirations: standard === "12th" ? higherEducationAspirationsRef.current.value : null,
        preferredInstitutions: standard === "12th" ? preferredInstitutionsRef.current.value : null,
        careerGoals: standard === "12th" ? careerGoalsRef.current.value : null,
        extracurricularAchievements: standard === "12th" ? extracurricularAchievementsRef.current.value : null,
        scholarshipApplications: standard === "12th" ? scholarshipApplicationsRef.current.value : null,
        gapYearConsideration: standard === "12th" ? gapYearConsiderationRef.current.value : null,
        cutoffMarks12th: standard === "12th" ? cutoffRef12th.current.value : null,
      };

      await set(userRef, academicData);

      alert("Academic details submitted successfully!");
      navigate('/browse');
    } catch (error) {
      console.error("Error submitting academic details: ", error);
      alert("Failed to submit academic details.");
      setIsSubmitted(false);
    }
  };

  return (

    <div>
      <Header/>
      <div className='flex justify-center items-center min-h-screen'>
        <div className='shadow-2xl bg-white rounded-lg p-7 mx-4 md:w-4/12 md:my-36 sm:my-28 sm:mx-auto'>
          <h1 className="font-semibold text-2xl mb-4">Academic Details</h1>

          <input
            ref={nameRef}
            type='text'
            placeholder="Your Name"
            className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
          />

          <select
            value={standard}
            onChange={(e) => setStandard(e.target.value)}
            className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
          >
            <option value="">Select Standard</option>
            <option value="10th">10th Standard</option>
            <option value="12th">12th Standard</option>
          </select>

          <input
            ref={schoolNameRef}
            type='text'
            placeholder="Current School Name"
            className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
          />

          <input
            ref={schoolLocationRef}
            type='text'
            placeholder="School Location"
            className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
          />

          {standard === "10th" && (
            <>
              <select
                ref={streamRef}
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
                defaultValue=""
              >
                <option value="">Preferred Stream After 10th</option>
                <option value="Science">Science (with or without Biology)</option>
                <option value="Commerce">Commerce</option>
                <option value="Arts">Arts/Humanities</option>
                <option value="Vocational">Vocational/Technical Education</option>
              </select>

              <input
                ref={subjectsRef}
                type='text'
                placeholder="Subjects of Interest"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />

              <input
                ref={careerAspirationsRef}
                type='text'
                placeholder="Career Aspirations"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />

              <input
                ref={extracurricularRef}
                type='text'
                placeholder="Extracurricular Activities"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />

              <input
                ref={additionalSupportRef}
                type='text'
                placeholder="Additional Support Needed"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />
            </>
          )}

          {standard === "12th" && (
            <>
              <input
                ref={boardRef}
                type='text'
                placeholder="Board of Education"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />

              <input
                ref={marksRef}
                type='text'
                placeholder="Marks/Grades in Key Subjects"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />

              <input
                ref={overallPercentageRef}
                type='text'
                placeholder="Overall Percentage/CGPA"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />

              <input
                ref={streamRef}
                type='text'
                placeholder="Stream Confirmation"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />

              <input
                ref={entranceExamPrepRef}
                type='text'
                placeholder="Entrance Exam Preparation"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />

              <input
                ref={higherEducationAspirationsRef}
                type='text'
                placeholder="Higher Education Aspirations"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />

              <input
                ref={preferredInstitutionsRef}
                type='text'
                placeholder="Preferred Institutions/Universities"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />

              <input
                ref={careerGoalsRef}
                type='text'
                placeholder="Career Goals"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />

              <input
                ref={extracurricularAchievementsRef}
                type='text'
                placeholder="Extracurricular Achievements"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />

              <input
                ref={scholarshipApplicationsRef}
                type='text'
                placeholder="Scholarship Applications"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />

              <input
                ref={gapYearConsiderationRef}
                type='text'
                placeholder="Gap Year Consideration"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />

              <input
                ref={cutoffRef12th}
                type='text'
                placeholder="Cutoff Marks for 12th Standard"
                className='p-3 mb-4 border border-gray-400 w-full rounded-lg'
              />
            </>
          )}

          <button
            onClick={handleSubmit}
            disabled={isSubmitted}
            className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${isSubmitted ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcademicForm;
