import React, { useEffect, useState, useRef } from 'react';
import './Clients.css';
import logo1 from '../assets/FiveMM Website Data/Images/Client Logos/Dr-Reddys-launches-drug-blood-pressure-drug-in-US.png'
import logo2 from '../assets/FiveMM Website Data/Images/Client Logos/Fantunez.png'
import logo3 from '../assets/FiveMM Website Data/Images/Client Logos/crazylabs-20220623143944.png'
import logo4 from '../assets/FiveMM Website Data/Images/Client Logos/gametion-20220603175124.png'
import logo5 from '../assets/FiveMM Website Data/Images/Client Logos/homa-games-20220523154128.png'
import logo6 from '../assets/FiveMM Website Data/Images/Client Logos/ketchapp-20220603175240.png'
import logo7 from '../assets/FiveMM Website Data/Images/Client Logos/moonee-squarelogo-1628086725581-20220623130706.png'
import logo8 from '../assets/FiveMM Website Data/Images/Client Logos/super-sonic-20220523154528.png'
import logo9 from '../assets/FiveMM Website Data/Images/Client Logos/voodoo-20220623130719.png'
import logo10 from '../assets/FiveMM Website Data/Images/Client Logos/winzo-20220822112243.jpg'
import ReactTyped from "react-typed";

function Cards() {

    var theLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //You can customize what letters it will cycle through
    var ctnt = "OUR CLIENTS"; // Your text goes here
    var speed = 50; // ms per frame
    var increment = 3; // frames per step. Must be >2
    const clen = ctnt.length;       
    let si = 0;
    let stri = 0;
    let block = "";
    let fixed = "";

    const logos = [
      logo1, logo2, logo3, logo4, logo6, logo7, logo8, logo9
    ]

    useEffect(() => {
        const rustle = (i) => {
            setTimeout(function () {
                if (i) {
                    rustle(i);
                }
                nextFrame(i);
                si = si + 1;
            }, speed);
        };

        rustle(clen * increment + 1);

        function nextFrame(pos) {
            for (let i=0; i < clen - stri; i++) {
                //Random number
                const num = Math.floor(theLetters.length * Math.random());
                //Get random letter
                const letter = theLetters.charAt(num);
                block = block + letter;
            }
            if (si === increment - 1) {
                stri++;
            }
            if (si === increment) {
                // Add a letter; 
                // every speed*10 ms
                fixed = fixed +  ctnt.charAt(stri - 1);
                si = 0;
            }

            setOutput(fixed + block);
            block = "";
        }
    }, []);

    const [output, setOutput] = useState('');

  return (
    <div className='clients-container'>
      <div className='heading'>
        <h1 id='client-heading'>
          <ReactTyped strings={["OUR CLIENTS"]} typeSpeed={100} loop />
        </h1>
      </div>

      <div class="slider-area">
	    	<div class="wrapper">
	    		<div class="item"><img alt="" src={logo1} /></div>
	    		<div class="item"><img alt="" src={logo2} /></div>
	    		<div class="item"><img alt="" src={logo3} /></div>
	    		<div class="item"><img alt="" src={logo4} /></div>
	    		<div class="item"><img alt="" src={logo6} /></div>
	    		<div class="item"><img alt="" src={logo7} /></div>
	    		<div class="item"><img alt="" src={logo8} /></div>
	    		<div class="item"><img alt="" src={logo9} /></div>
	    	</div>
	    </div>
    </div>
  );
}

export default Cards;