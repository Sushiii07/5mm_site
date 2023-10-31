import React from 'react'
import './Team.css'
import RollingText from './Rollint_Text';
import mem1 from '../assets/FiveMM Website Data/Images/Team Pics/Aseem.jpg'
import mem2 from '../assets/FiveMM Website Data/Images/Team Pics/Rajeev.png'
import mem3 from '../assets/FiveMM Website Data/Images/Team Pics/Snehil.jpg'
import mem4 from '../assets/FiveMM Website Data/Images/Team Pics/Vaibhav.jpg'
import mem5 from '../assets/FiveMM Website Data/Images/Team Pics/Vishal.jpg'
import ReactTyped from "react-typed";

const Team = () => {

  return (
    <div className='team-container'>
      <div className='heading'>
        <h1 id='team-heading'>
          <ReactTyped strings={["OUR TEAM"]} typeSpeed={100} />
        </h1>
      </div>
      <div className='team-card-container'>
        <div class="profile-card">
          <div class="img">
            <img src={mem1} alt="" />
          </div>
          <div class="caption">
            <h3>Aseem</h3>
            <p>SCo-Founder, CEO</p>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src={mem3} alt="" />
          </div>
          <div class="caption">
            <h3>Snehil</h3>
            <p>Co-Founder, Game Designer</p>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src={mem5} alt="" />
          </div>
          <div class="caption">
            <h3>Vishal Kumar</h3>
            <p>Senior 3D Artist</p>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src={mem2} alt="" />
          </div>
          <div class="caption">
            <h3>Rajeev Mishra</h3>
            <p>2D/Concept Artist</p>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src={mem4} alt="" />
          </div>
          <div class="caption">
            <h3>Vaibhav Shukla</h3>
            <p>Game Engineer</p>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
