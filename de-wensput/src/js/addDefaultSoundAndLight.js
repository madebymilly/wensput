import { turnLedOff, addSlowTwinkle } from '../js/led'

let intervalId;

export function startDefaultSoundAndLight() {

  addSlowTwinkle();

  intervalId = setInterval(() => {

    turnLedOff();
    // fadeOutSoundEffect();
    console.log('turn LED & sound off for 5 minutes')

    setTimeout(() => {

      addSlowTwinkle();
      // fadeInSoundEffect();
      console.log('twinkle & sound for 10 seconds')

    }, 30000); // 5 minutes
  }, 10000); // 10 seconds
}

export function stopDefaultSoundAndLight() {
  if (intervalId) {
    clearInterval(intervalId);
    console.log('Interval stopped');
  }
}





