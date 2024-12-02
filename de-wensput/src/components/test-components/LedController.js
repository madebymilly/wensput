import React from "react";

const LedController = () => {
  // Functie om een WLED-commando te sturen
  const sendCommand = async (data) => {
    const ip = "192.168.1.230"; // IP address of ESP8266
    const url = `http://${ip}/json`; // JSON API endpoint

    console.log('Sending command:', data);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        response.json()
        console.log('Response:', response);
      })
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const dataBlue = {
    "on": true,
    "bri": 10, // Brightness
    "seg": [{
      "fx": 0, // Effect
      "col": [
        [0, 0, 255, 0],
      ]
    }]
  };

  const dataRed = {
    "on": true,
    "bri": 10, // Brightness
    "seg": [{
      "fx": 0, // Effect
      "col": [
        [0, 255, 0, 0],
      ]
    }]
  };

  const dataTwinkle = {
    "on": true,
    "bri": 10,
    "seg": [{
      "fx": 51, // Twinkle effect
      "pal": 15 // Ocean palette
    }]
  };

  return (
    <div className="LedController">
      <button onClick={() => sendCommand(dataBlue)}>Zet LED op blauw</button>
      <button onClick={() => sendCommand(dataRed)}>Zet LED op rood</button>
      <button onClick={() => sendCommand(dataTwinkle)}>Zet LED op TWINKLE</button>
    </div>
  );
};

export default LedController;
