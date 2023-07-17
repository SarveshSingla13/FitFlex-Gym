import React from 'react'
import './Programs.css'
import { programsData } from '../programsData'

const Programs = () => {
  return (
    <div className='Programs' id='programs'>
     <div className='programs-header'>
        <span>Explore our</span><span>Programs</span><span>to Shape you</span>
        </div>     


        <div className='program-categories'>
         {programsData.map((program)=>{
         
         return <div className='category'>
            {program.image}
          <span>{program.heading}</span>
          <span>{program.details}</span>
          <div className='join-now'> <span>Join Now</span></div>
            </div>
         })}
        </div>
     </div>
  )
}

export default Programs