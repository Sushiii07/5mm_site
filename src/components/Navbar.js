import React, { useState, useEffect } from 'react'
import logo from '../assets/FiveMM Website Data/Images/FiveMM Logos/FiveMM Logo - Black Border.png'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Link as Linker, animateScroll as scroll } from "react-scroll";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
      <div>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src={logo} alt="logo" width='150px' />
            </Link>

            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Linker className='nav-links' to="client-heading" offset={-200}>
                  Client
                </Linker>
              </li>
              <li className='nav-item'>
                <Linker className='nav-links' to="team-heading" offset={-100}>
                  Team
                </Linker>
              </li>
              <li className='nav-item'>
                <Linker className='nav-links' to="contact-heading" offset={-100}>
                  Contact
                </Linker>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
}

export default Navbar