import React from 'react';

function App() {
  // Add this code for the toggling
  const toggleOverlay = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleOverlay' });
    });
  };

  return (
    <div>
      <h1>SkyPal</h1>
      <button onClick={toggleOverlay}>Toggle Overlay</button>
    </div>
  );
}

export default App;
