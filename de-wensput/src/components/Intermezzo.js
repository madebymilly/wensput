import { useState, useEffect } from 'react'
import AudioPlayer from './AudioPlayer'

import { turnLedOff, addSlowTwinkle } from '../js/led'

export default function Intermezzo() {

  const [start, setStart] = useState(false);
  const [intermezzo, setIntermezzo] = useState(false);

  let intervalId;

  useEffect(() => {
    console.log('use effect')
  }, []);

  function handleClick() {
    setStart(true)
    //setIntermezzo(true);
    startIntermezzo(intervalId);
  }

  return (
    <div className="Intermezzo">
      {!start && <button className="Intermezzo__button" onClick={handleClick}>Set Intermezzo</button>}
      <AudioPlayer audioSrc="/audio/sound-default.mp3" play={intermezzo} volume={1} />
    </div>
  );

  function startIntermezzo(intervalId) {
    console.log('start')
    intervalId = setInterval(() => {
      console.log('intermezzo');

        // turnLedOff();
        // // fadeOutSoundEffect();
        // console.log('turn LED & sound off for 5 minutes')

        setTimeout(() => {

          // addSlowTwinkle();
          // // fadeInSoundEffect();
          console.log('twinkle & sound for 3 seconds')

        }, 10000); // 10 seconds
      }, 3000); // 3 seconds
  }

  function stopIntermezzo() {
    console.log('stop')
    clearInterval(intervalId);

  }
}
