import React, { useRef, useState, useEffect } from 'react';

const AudioPlayer = ({ audioSrc, play, volume, timeout, loop = false, startFrom, lowerVolume }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [volume, setVolume] = useState(1); // Volume variëren van 0 tot 1

  const fadeOutAudio = () => {
    const audio = audioRef.current;
    const fadeOutInterval = setInterval(() => {
      if (audio.volume > 0.01) {
        audio.volume -= 0.01;
      } else {
        audio.volume = 0;
        clearInterval(fadeOutInterval);
        audio.pause();
      }
    }, 500); // Decrease volume every second
  };

  const lowerTheVolume = () => {
    const audio = audioRef.current;
    const lowerVolumeInterval = setInterval(() => {
      if (audio.volume > 0.2) {
        audio.volume -= 0.1;
      } else {
        audio.volume = 0.1;
        clearInterval(lowerVolumeInterval);
        //audio.pause();
        setTimeout(() => {
          fadeOutAudio();
        }, 3000);
      }
    }, 750); // Decrease volume every second
  };

  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (startFrom) {
      audio.currentTime = startFrom;
    }

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

      //setTimeout(fadeOutAudio, 3000); // Fade out after 3 seconds
      setIsPlaying(true);

    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };



  useEffect(() => {
    if (play) {
      togglePlayPause();
    }
  }, [play]);

  useEffect(() => {
    if (lowerVolume) {
      lowerTheVolume();
    }
  }, [lowerVolume]);

  return (
    <div className="AudioPlayer">
      <audio ref={audioRef} src={audioSrc} loop={loop} />
    </div>
  );
};

export default AudioPlayer;

