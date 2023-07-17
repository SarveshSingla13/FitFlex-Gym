import React from 'react'
import './Testimonials.css'
import { useState } from 'react';
import { testimonialsData } from '../TestimonialData.js'
import leftarrow from '../../Assets/leftArrow.png'
import rightarrow from '../../Assets/rightArrow.png'


const Testimonials = () => {
    const [selectedData, setSelectedData] = useState(0);
const tlength = testimonialsData.length;

  return (
    <div className='Testimonials'>
        <div className='left-t'>
        <span>Testimonials</span>
        <span> What They say</span>
        <span>About us</span>
       <span>
        {testimonialsData[selectedData].review}
       </span>
       <span>
        <span style={{color: "#f48915"}}>
            {testimonialsData[selectedData].name}
        </span> (" ")
        --
        {testimonialsData[selectedData].status}
       </span>
        </div>
      <div className='right-t'>
        <div></div>
        <div></div>
        <img src={testimonialsData[selectedData].image} alt="" />
      <div className='arrows'>
       <img 
       onClick={()=>{
        selectedData===0
        ? setSelectedData(tlength-1)
        :setSelectedData((prev)=> prev-1);
       }}
       src={leftarrow} alt=""/>
       <img 
        onClick={()=>{
            selectedData=== tlength-1
            ? setSelectedData(0)
            :setSelectedData((prev)=> prev+1);
           }}
       
       src={rightarrow} alt=""/>
      </div>
      </div>
    </div>
  )
}

export default Testimonials