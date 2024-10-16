import React, { useRef, useState, useEffect } from 'react';

const AudioPlayer = ({ audioSrc, play, volume, timeout }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(audioSrc)
  //const [volume, setVolume] = useState(1); // Volume variëren van 0 tot 1

  // Functie om audio af te spelen of te pauzeren en volume aan te passen
  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      // Set volume if volume
      if (volume) {
        audioRef.current.volume = volume;
      }

      // Set timeout if timeout
      if (timeout) {
        setTimeout(() => {
        audio.play();
        }, timeout);
      } else {
        audio.play();
      }

    } else {
      audio.pause();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (play) {
      togglePlayPause();
    }
  }, [play]);

  return (
    <div>
      <audio ref={audioRef} src={audioSrc} loop />
    </div>
  );
};

export default AudioPlayer;

