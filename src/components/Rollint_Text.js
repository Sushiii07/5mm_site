import React, { useEffect, useState, useRef } from 'react';

function Rolling_Text(props) {

    var theLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //You can customize what letters it will cycle through
    var ctnt = props.text; // Your text goes here
    var speed = 50; // ms per frame
    var increment = 3; // frames per step. Must be >2
    const clen = ctnt.length;       
    let si = 0;
    let stri = 0;
    let block = "";
    let fixed = "";

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
    <h1>{output}</h1>
  );
}

export default Rolling_Text