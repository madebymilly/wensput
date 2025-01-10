import React from "react";

const LedController = () => {
  // Functie om een WLED-commando te sturen
  const sendCommand = async (data) => {
    const ip = "192.168.1.229"; // IP address of ESP8266
    const url = `http://${ip}/json`; // JSON API endpoint

    console.log('Sending command:', data);

    //   fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   })
    //     .then(response => {
    //       response.json()
    //       console.log('Response:', response);
    //     })
    //     .then(data => {
    //       console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    // }
    try {
      console.log('Sending command:', data);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      console.log('Response:', response);
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Cleanup logic to stop the command
      console.log('Command completed, performing cleanup.');
      // Add any necessary cleanup actions here
    }
  };

  const dataOff = {
    "on": false
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

  const dataTwinkle = {"on":true,"bri":20,"transition":7,"mainseg":0,"seg":[{"id":0,"start":0,"stop":120,"grp":1,"spc":0,"of":0,"on":true,"frz":false,"bri":255,"cct":127,"set":0,"n":"","col":[[0,255,0],[0,0,0],[0,0,0]],"fx":106,"sx":128,"ix":128,"pal":59,"c1":128,"c2":128,"c3":16,"sel":true,"rev":false,"mi":false,"o1":false,"o2":false,"o3":false,"si":0,"m12":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0}]}

  return (
    <div className="LedController">
      <button onClick={() => sendCommand(dataOff)}>Zet LED uit</button>
      <button onClick={() => sendCommand(dataRed)}>Zet LED op rood</button>
      <button onClick={() => sendCommand(dataTwinkle)}>Zet LED op TWINKLE</button>
    </div>
  );
};

export default LedController;
