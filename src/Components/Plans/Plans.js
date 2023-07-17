import React from 'react'
import './Plans.css'
import { plansData } from '../plansData'
import whiteTick from '../../Assets/whiteTick.png'
const Ps = () => {
  return (
    <div className='Plans-container'>
   <div className='programs-header' style ={{gap: '2rem', marginTop: '36px'}}>
   <span>Ready To Start</span>
   <span>Your Journey</span>
   <span>With US</span>
   </div>
   <div className='plans'>
      {plansData.map((plan,i) =>{
            return(
            <div className='plan' >
                {plan.icon}
                <span>{plan.name}</span>
                <span> $ {plan.price}</span>

                <div className="features">
                    {plan.features.map((feature,i)=>{
                        return(
                      <div className="feature"> 
                       <img src={whiteTick} alt=""/>
                       <span > {feature}</span>
                      </div>
      )})}
                    </div>

                    <div>
                        <span>See More Benifits</span>
                    </div>
                    <button className='btn'>Join now</button>
            </div>
     ) })}
   </div>
    </div>
  )
}

export default Ps