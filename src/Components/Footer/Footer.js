import React from 'react'
import './Footer.css'
import logo from '../../Assets/logo.png'
import github from '../../Assets/github.png'
import instagram from '../../Assets/instagram.png'
import linkedin from '../../Assets/linkedin.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr/>
        <div className='footer'>
        <div className='social-links'>
            <img src={github} alt=""/>
            <img src={instagram} alt=""/>
            <img src={linkedin} alt=""/>
        </div>
        <div className='logo-f'>
         <img src={logo} alt=""/>
        </div>
    </div>
    </div>
  )
}

export default Footer