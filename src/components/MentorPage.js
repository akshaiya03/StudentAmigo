import React from 'react'
import Header from './Header'

const MentorPage = () => {
  return (
    <div>
      <Header/>
      <div  className='p-4 m-4 font-bold text-2xl'>
         Start the Session
         <div className="m-4 min-w-[600px] p-6 bg-green-100 text-green-900 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">Interview Preparation</h3>
              <p className="mb-3">Professional guidance on how to excel in your interviews.</p>
              <p className="font-bold mb-6">Session: 11:00 AM</p>
              <button className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">Join Meeting</button>
            </div>
      </div>

    </div>
  )
}

export default MentorPage
