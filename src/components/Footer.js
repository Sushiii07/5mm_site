import React from 'react'
import './Footer.css'
import { Link as Linker, animateScroll as scroll } from "react-scroll";
import logo from '../assets/FiveMM Website Data/Images/FiveMM Logos/FiveMM Logo - Black Border.png'

function Footer() {
  return (
    <div className='footer'>
      
      <div className='moto'>
        <h1 id='moto-1'>
          Where Worlds  
        </h1>
        <h1 id='moto-2'>
          Unfold &
        </h1>
        <h1 id='moto-3'>
          Adventure Begin
        </h1>
      </div>

      <div className='footer-logo'>
        <img src={logo} alt=''></img>
      </div>

      <ul className='footer-links-container'>
        <li className='footer-links-items'>
          <Linker className='footer-links' to="whatwedo-heading" offset={-100}>
            What We Do?
          </Linker>
        </li>
        <li className='footer-links-items'>
          <Linker className='footer-links' to="client-heading" offset={-200}>
            Our Clients
          </Linker>
        </li>
        <li className='footer-links-items'>
          <Linker className='footer-links' to="team-heading" offset={-100}>
            Our Team
          </Linker>
        </li>
        <li className='footer-links-items'>
          <Linker className='footer-links' to="contact-heading" offset={-100}>
            Contact Us
          </Linker>
        </li>
      </ul>


      {/* <ul class="social-media-list">
        <li>
          <a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-github" aria-hidden="true">
            </i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-codepen" aria-hidden="true">
            </i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true">
            </i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-instagram" aria-hidden="true">
            </i>
          </a>
        </li>       
      </ul> */}
      <div className='copyright'>
        <p>
          Copyright © 2023 FiveMM Games LLP - All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer