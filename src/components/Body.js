import React from 'react'
import { useDispatch } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import LandingPage from './LandingPage'
import { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/UserSlice'
import { onAuthStateChanged } from 'firebase/auth'
import Browse from './Browse'
import Login from './Login'
import AcademicForm from './Academic'
import Career from './Career'
import DetailsPage from './DetailsPage'
import CollegeData from './College'
import MentorPage from './MentorPage'
import CollegeCourses from './CollegeCourses'
import CourseList from './CollegeCourses'
const Body = () => {
    const dispatch=useDispatch()
    const approuter =createBrowserRouter([
        {
          path:"/",
          element:<LandingPage/>,
        },
        {
            path:"/Login",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/academic",
            element:<AcademicForm/>
        },
        {
          path:"/careerDetails",
          element:<Career/>
        },
        {
          path:"/DetailsPage",
          element:<DetailsPage/>
        },
        {
          path:"/College",
          element:<CollegeData/>
        },
        {
          path:"/mentor-page",
          element:<MentorPage/>
        },
        {
          path: "/college/:collegeId",
          element: <CourseList/>
        }
        
    ])
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            
            const  {uid,email,displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}) )
          } else {
            dispatch(removeUser());
          }
        });
      },[])
  return (
    <div>
      <div className='m-0 p-0'>
      
      <RouterProvider router={approuter}/>
    </div>
    </div>
  )
}

export default Body
