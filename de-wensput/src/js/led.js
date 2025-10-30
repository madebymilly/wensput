const dataOff = { "on": false };
const dataTwinkleSlow = {"on":true,"bri":255,"transition":7,"mainseg":0,"seg":[{"id":0,"start":0,"stop":120,"grp":1,"spc":0,"of":0,"on":true,"frz":false,"bri":255,"cct":127,"set":0,"n":"","col":[[0,255,0],[0,0,0],[0,0,0]],"fx":106,"sx":128,"ix":128,"pal":59,"c1":128,"c2":128,"c3":16,"sel":true,"rev":false,"mi":false,"o1":false,"o2":false,"o3":false,"si":0,"m12":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0}]}
const dataTwinkleMedium = {"on":true,"bri":255,"transition":7,"mainseg":0,"seg":[{"id":0,"start":0,"stop":92,"grp":1,"spc":0,"of":0,"on":true,"frz":false,"bri":255,"cct":127,"set":0,"n":"","col":[[0,255,0],[0,0,0],[0,0,0]],"fx":106,"sx":191,"ix":128,"pal":59,"c1":128,"c2":128,"c3":16,"sel":true,"rev":false,"mi":false,"o1":false,"o2":false,"o3":false,"si":0,"m12":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0}]}
const dataTwinkleFast = {"on":true,"bri":255,"transition":7,"mainseg":0,"seg":[{"id":0,"start":0,"stop":92,"grp":1,"spc":0,"of":0,"on":true,"frz":false,"bri":255,"cct":127,"set":0,"n":"","col":[[0,255,0],[0,0,0],[0,0,0]],"fx":106,"sx":202,"ix":105,"pal":55,"c1":128,"c2":128,"c3":16,"sel":true,"rev":false,"mi":false,"o1":false,"o2":false,"o3":false,"si":0,"m12":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0}]}
const dataMultiColor = {"on":true,"bri":255,"transition":7,"mainseg":0,"seg":[{"id":0,"start":0,"stop":92,"grp":1,"spc":0,"of":0,"on":true,"frz":false,"bri":255,"cct":127,"set":0,"col":[[255,0,8],[0,0,0],[0,0,0]],"fx":66,"sx":64,"ix":160,"pal":11,"c1":128,"c2":128,"c3":16,"sel":true,"rev":false,"mi":false,"o1":false,"o2":false,"o3":false,"si":0,"m12":1},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0},{"stop":0}]}

export function turnLedOff() {
  console.log('turn led off');
  sendCommand(dataOff);
}

export function addSlowTwinkle() {
  console.log('add medium twinkle');
  sendCommand(dataTwinkleSlow);
}

export function addMediumTwinkle() {
  console.log('add medium twinkle');
  sendCommand(dataTwinkleMedium);
}

export function addFastTwinkle() {
  console.log('add fast twinkle');
  sendCommand(dataTwinkleFast);
}

export function addMultiColor() {
  console.log('test multi color leds');
  sendCommand(dataMultiColor);
}

const sendCommand = async (data) => {
  const ip = "192.168.1.229"; // IP address of ESP8266
  const url = `http://${ip}/json`; // JSON API endpoint

  console.log('Sending command:', data);

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
    // Add any necessary cleanup actions here:
    console.log('Command completed, performing cleanup.');

  }
};

