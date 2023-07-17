import React from 'react';
import './Header.css';
import Logo from '../../Assets/logo.png';

import Testimonials from '../Testimonials/Testimonials';


const Header = () => {
  return (
    
    <div className='header'>
        <img  className= "logo" src={Logo} alt=""/>

        <ul className='header-menu'>
        <a href="/">Home</a>
  <a href="/Program">Program</a>
  <a href="/Plans">Plans</a>
  <a href="/Testimonials">Testimonial</a>
  <a href="/Join">Join us</a>


            
        </ul>
    </div>

  )
}

export default Header