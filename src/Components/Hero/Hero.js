import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import Heart from '../../Assets/heart.png'
import hero_image from '../../Assets/hero_image.png'
import hero_image_back from '../../Assets/hero_image_back.png'
import calories from '../../Assets/calories.png'

const Hero = () => {
  return (
    <div className='hero'>
    <div className='left-h'>
    <Header/>

    <div className='the-best-add'>
        <div></div>
        <span>The best fittness club in the town</span>
    </div>


    <div className='hero-text'>
        <div >
            <span className='shape'>Shape  </span>
            <span>Your</span>
        </div>
        <div>
            <span>Ideal Body</span>
        </div>
     
        <div>
            <span> In here we will help to shape and build your ideal body to live up your life to fullest</span>
        </div>
    </div>
    
  <div className='figures'>
   <div><span>+140</span><span>Experts</span></div>
   <div><span>+978</span><span>members joined</span></div>
   <div><span>+56</span><span>Fittness Programs</span></div>
  </div>

   <div className='hero-buttons'>
    <buttons className = 'btn'> Get Started</buttons>
    <buttons className = 'btn'> Learn More</buttons>
   </div>
</div>

    <div className='right-h'> 
    <button className='btn'> Join More</button>
    <div className='heart-rate'>
        <img src ={Heart} alt= ""/>
       <span>Heart rate</span>
       <span>bpm</span>
    </div>
     <img src={hero_image} alt="" className='hero-image'/>
     <img src = {hero_image_back} className='hero-image-back'/>

     <div className='calories'>
        <img  src={calories} alt=""/>
        <div>
       <span> Calories Burned</span>
        <span> 220 Calories</span>
     </div>
     </div>
    </div>    
    </div>

  )
}

export default Hero