const express = require('express');
const app = express();
const port = 3001;

// Controleer of het platform Linux is
if (process.platform === 'linux') {
  const Gpio = require('onoff').Gpio;
  const led = new Gpio(17, 'out');

  app.post('/toggle-led', (req, res) => {
    const { state } = req.body;
    led.writeSync(state);
    res.send(`LED is nu ${state === 1 ? 'aan' : 'uit'}`);
  });

  // Zorg ervoor dat de GPIO wordt vrijgegeven bij afsluiten
  process.on('SIGINT', () => {
    led.unexport();
    process.exit();
  });
} else {
  console.warn('GPIO is alleen beschikbaar op Linux-platforms zoals de Raspberry Pi.');
}

app.use(express.json());

// app.listen(port, () => {
//   console.log(`Server draait op http://localhost:${port}`);
// });

// Start de server op 0.0.0.0 zodat het netwerktoegang toestaat
app.listen(port, '0.0.0.0', () => {
  console.log(`GPIO-server draait op http://0.0.0.0:${port}`);
});
