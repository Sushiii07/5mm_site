import React from 'react'
import ReactTyped from "react-typed";
import './Whatwedo.css'
import img1 from '../assets/card_pics/mobile_games.png'
import img2 from '../assets/card_pics/website.png'
import img3 from '../assets/card_pics/mobile_app.png'
import img4 from '../assets/card_pics/Blockchain.png'

function Whatwedo() {

  return (
    <div className='whatwedo-container'>
        <h1 id='whatwedo-heading'>
            {" "}
            <ReactTyped strings={["What We Do?"]} typeSpeed={100} loop />
        </h1>

        <div id="cards">
          <div class="card">
              <img src={img1} />
              <h2>Mobile Games</h2>
              <p>
                Curate, Design & Develop all kinds of mobile & tablet
                applications from social to ecommerce apps.
              </p>
          </div>
          <div class="card">
              <img src={img2} /> 
              <h2>Websites</h2>
              <p>
                Design & Develop all kinds of websites, from 
                traditional static to new-age dynamic webpages.
              </p>
          </div>
          <div class="card">
              <img src={img3} />
              <h2>Mobile Applications</h2>
              <p>
                Curate, Design & Develop all kinds of mobile & tablet
                applications from social to ecommerce apps.
              </p>
          </div>
          <div class="card">
              <img src={img4} />
              <h2>Blockchain</h2>
              <p>
                Design & integrate all kinds of Web3.0, NFT, Crypto 
                marketplaces, ideas in web as well as application.
              </p>
          </div>
        </div>
    </div>
  );
}

export default Whatwedo