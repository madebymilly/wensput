import { useState, useEffect } from 'react'
import AudioPlayer from './AudioPlayer'

import { turnLedOff, addSlowTwinkle } from '../js/led'

export default function Intermezzo({ run }) {

  let id;

  const [start, setStart] = useState(false);

  // Only do intermezzo if stop is false (game is running)
  if (run) {
    console.log('start intermezzo', start);
    startIntermezzo(id);
  } else {
    console.log('stop intermezzo', start);
    stopIntermezzo(id);
  }

  return (
    <div className="Intermezzo">
      <AudioPlayer 
        audioSrc="/audio/sound-default.mp3" 
        play={start} 
        volume={1}
        loop={false}
      />
    </div>
  );

  function startIntermezzo() {

    setInterval(() => {

      // === START 3 seconden actie ===
      setStart(true);

      // === STOP actie na 13 seconden ===
      setTimeout(() => {

        setStart(false);

      }, 13000); // 13 seconden actief

    }, 34000); // elke minuut starten

  }

  function stopIntermezzo(id) {
    console.log('stop intermezzo');
    clearInterval(id);
  }
}
