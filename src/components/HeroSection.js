import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import vid1 from '../assets/5MM Website Videos/Game Development - Cricket Raiders/Cricket 1080p.mp4';
import vid2 from '../assets/5MM Website Videos/Game Development - Purrfect Mayhem/DSC 1080p.mp4';
import vid3 from '../assets/5MM Website Videos/MetaVerse - Virtual Concert/DJ Verse - 1080p.mp4';
import vid4 from '../assets/5MM Website Videos/NFT Creation/Ram 1 - Landscape 1080p - Black bars.mp4';
import vid5 from '../assets/5MM Website Videos/Virtual Meetings/Dr. Reddy 1080p.mp4';
import ReactTyped from 'react-typed';


function HeroSection() {

    let vid = vid1;
    const vids = [
        vid1,
        vid2,
        vid3,
        vid4,
        vid5,
    ]
    const [sliderData, setSliderData] = useState(vids[1])
    const handleClick=(index) => {
        console.log(index);
        const slider = vids[index];
        console.log("New video source:", slider);
        setSliderData(slider);
    }

  return (
    <div className='hero-container'>
        <div className='main-content'>
            <h1>
                <ReactTyped strings={["ABOUT US"]} typeSpeed={100} />
            </h1>
            <p>
                FiveMM Games is a Game-Tech company with its presence in multiple 
                Platforms across the web.
            </p>
            <p>
                With an experience of designing & developing over 150 mobile games 
                for clients and publishers globally, FiveMM Games is a popular name 
                in the global gaming market.
            </p>
        </div>
        <div className='hero-container-videos'>
            <div className='main-video-container'>

                <video key={sliderData} autoPlay loop muted className='main-video'>
                    <source src={sliderData} type="video/mp4" />
                </video>
                {/* <div className='hidden-text'>
                    <h1>hello</h1>
                    <p>sfszjbf,zdfjks,bs</p>
                </div> */}

            </div>
            <div className='video-icons'>
            {
                vids.map((data, i) => (
                <video key={i} muted onClick={() => handleClick(i)}>
                    <source src={data} type="video/mp4" />
                </video>
                ))
            }
            </div>
        </div>
    </div>
  );
}

export default HeroSection;