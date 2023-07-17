import React from 'react'
import './Reaons.css';
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'
import image4 from '../../Assets/image4.png'
import tick from '../../Assets/tick.png'
import nb from '../../Assets/nb.png'
import adidas from '../../Assets/adidas.png'
import nike from '../../Assets/nike.png'

const Reasons = () => {
  return (
    <div className='Reasons' id ="reasons">
    <div className='left-r'>
    <img src= {image1} alt=""/>
    <img src= {image2} alt=""/>
    <img src= {image3} alt=""/>
    <img src= {image4} alt=""/>
    </div>

    <div className='right-r'>

        <span>Some Reasons</span>
        <div>
            <span>Why</span>
        <span>choose us</span>
        </div>
    <div className='detail-r'>
        <div>
            <img src={tick} alt=""/>
            <span>
             Over 150+ Expert Coaches
            </span>
        </div>
        <div>
            <img src={tick} alt=""/>
            <span>
                Train Smarter and Faster
            </span>
        </div>
        <div>
            <img src={tick} alt=""/>
            <span>
                Free Program for new comers
            </span>
        </div>
        <div>
            <img src={tick} alt=""/>
            <span>
                Reliable Parteners
            </span>
        </div>
        <span
         style={{
            color: "#9c9c9c", fontWeight: 'normal'}}>   
            Our Parteners
            </span>
            <div className='parteners'>
                <img src= {nb} alt=""/>
                <img src= {adidas} alt=""/>
                <img src= {nike} alt=""/>
            </div>

    </div>
    </div>
    </div>
  )
}
export default Reasons