import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';
const Join = ()=> {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zkj5ojg', 'template_1m2qxjj', form.current, 'vNKnheahgQkhmt3sJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='Join' id='join-us'>
        <div className='left-j'>
            <hr/>
       <div>
        <span>Ready to </span>
        <span> Level Up </span>
       </div>
       <div>
        <span>Your Body </span>
        <span>With US ? </span>
       </div>
        </div>
        <div className='right-j'>
            <form  ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name= "user.email" placeholder='Enter your Email address'/>
            <button className='btn-btn-join'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join