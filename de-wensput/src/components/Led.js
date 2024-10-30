// const Gpio = require('onoff').Gpio;
// const led = new Gpio(17, 'out');
// const button = new Gpio(4, 'in', 'both');

// button.watch((err, value) => led.writeSync(value));

export default function Led() {

  const onClick = () => {
    console.log('Led clicked');
    toggleLED(1);
  }

  function toggleLED(state) {
    fetch('http://192.168.1.120:3001/toggle-led', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ state }),
    })
      .then(response => response.text())
      .then(data => console.log(data));
  }

// Bijvoorbeeld:
// toggleLED(1); // LED aan
// toggleLED(0); // LED uit


  return (
    <button className="Button" onClick={onClick}>
      Turn Led on / off
    </button>
  );
}
