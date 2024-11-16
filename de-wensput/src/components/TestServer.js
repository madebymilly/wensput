
import React from 'react';
import axios from 'axios';

export default function TestServer() {

  const testServer = () => {
    fetch('http://[2a01:7c8:aabc:10:5054:ff:fe77:889a]:3000')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <>
      <div>TestServer:</div>
      <button onClick={testServer}>Test Server</button>
    </>
  )
}
