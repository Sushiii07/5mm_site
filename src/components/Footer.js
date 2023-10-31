import React from 'react'
import './Footer.css'
import { Link as Linker, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <div className='footer'>
      <ul className='footer-links-container'>
        <li className='footer-links-items'>
          <Linker className='footer-links' to="client-heading" offset={-200}>
            Client
          </Linker>
        </li>
        <li className='footer-links-items'>
          <Linker className='footer-links' to="team-heading" offset={-100}>
            Team
          </Linker>
        </li>
        <li className='footer-links-items'>
          <Linker className='footer-links' to="contact-heading" offset={-100}>
            Contact
          </Linker>
        </li>
      </ul>

      <ul class="social-media-list">
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
      </ul>
    </div>
  )
}

export default Footer