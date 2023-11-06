import React, { useState } from 'react';
import '../App.css';
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

    const heading = [
        "Cricket Raiders",
        "Purrfect Mayhem",
        "DJ Verse (Virtual Concert)",
        "Spiritual NFTs",
        "Connect VR (Virtual Meetings)"
    ]

    const id = [
        "CricketRaiders",
        "PurrfectMayhem",
        "DJVerse",
        "SpiritualNFTs",
        "ConnectVR"
    ]

    const text = [
        "Welcome to the high seas and the fierce cricket pitches of 'Cricket Raiders' – the ultimate collectible card game that blends the daring world of Vikings and the cunning realm of Pirates in a thrilling showdown of bat and ball",
        "Prepare for fur-midable action in 'Purrfect Mayhem', a thrilling top-down shooter that pits agile and cunning cats against hordes of menacing robots armed to the bolts! In this action-packed game, players take control of a squad of highly trained, gun-toting felines on a mission to defend their turf from an invasion of mechanical adversaries.",
        "Step into the future of entertainment with 'DJ-Verse', the ultimate virtual concert experience that brings artists and fans together in a digital realm like never before. In this groundbreaking event, music enthusiasts from around the world can unite in a virtual venue, immersing themselves in an electrifying fusion of music, technology, and community.",
        "At the forefront of the digital revolution, we specialize in crafting unique NFTs (Non-Fungible Tokens) that transcend traditional boundaries. Our expertise extends to NFT creation for a wide spectrum of applications, spanning the realms of gaming, websites, and Metaverses. Through our innovative approach, we transform digital assets and experiences into blockchain-backed, one-of-a-kind tokens, ushering in a new era of digital ownership and authenticity.",
        "Introducing 'ConnectVR', the revolutionary app that seamlessly bridges the virtual gap for meetings and interactions across various platforms! With ConnectVR, you can join virtual webcam meetings on your VR headset, PC, mobile device, and more, making it the ultimate cross-platform solution for immersive and convenient connectivity."
    ]

    const [sliderData, setSliderData] = useState(vids[1])
    const [sliderHead, setSliderHead] = useState(heading[1])
    const [sliderText, setSliderText] = useState(text[1])
    const [sliderID, setSliderID] = useState(id[1])
    
    const [selectedDot, setSelectedDot] = useState(0); // Initial selected dot index

    const handleClick=(index) => {
        console.log(index);
        const slider = vids[index];
        const newHeading = heading[index];
        const newText = text[index];
        const newID = id[index];
        console.log("New video source:", slider);
        console.log("New heading source:", newHeading);
        setSliderData(slider);
        setSliderHead(newHeading);
        setSliderText(newText);
        setSliderID(newID);
        setSelectedDot(index);
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
                <div className='hidden-text'>
                    <h1>{sliderHead}</h1>
                    <p>{sliderText}</p>
                </div>

            </div>
            {/* <div className='video-icons'>
            {
                vids.map((data, i) => (
                <video key={i} muted onClick={() => handleClick(i)}>
                    <source src={data} type="video/mp4" />
                </video>
                ))
            }
            </div> */}
            <div className='slider-navigation'>
            {
                vids.map((data, i) => (
                    <div key={i} onClick={() => handleClick(i)} className={`nav-btn ${selectedDot === i ? 'active' : ''}`} ></div>
                ))
            }
            </div>
        </div>
    </div>
  );
}

export default HeroSection;


/*

const btns = document.querySelectorAll(".nav-btn");

*/