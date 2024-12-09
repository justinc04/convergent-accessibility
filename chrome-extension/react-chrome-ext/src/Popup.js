import React from 'react';
import VoiceBox from './VoiceBox.js'; 
import {useEffect, useState} from "react"; 
import "./Popup.css"


function Popup() {


  const [voiceText, changeText] = useState(""); 
  const [instructionText, changeInstructions] = useState(""); 
  const [openPopup, togglePopup] = useState(true); 
  // const [numPrompt, updatePromptCount] = useState(0); 

  useEffect(() => {
    const handleMessage = (message) => {
        if (message.type === 'URL_CHANGED') {
            console.log('Received new URL:', message.url);
        }
    };

    chrome.runtime.onMessage.addListener(handleMessage);

    return () => {
        chrome.runtime.onMessage.removeListener(handleMessage);
    };
  }, []);

  const toggleOverlay = () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { 
        action: 'toggleOverlay', 
      });
    })
  }


  const findObject = () => {

    // const viewportParams = {
    //   width: window.innerWidth, // Visible width of the browser viewport
    //   height: window.innerHeight, // Visible height of the browser viewport
    //   devicePixelRatio: window.devicePixelRatio // Device pixel ratio for scaling
    // };

    // chrome.tabs.captureVisibleTab(null, { format: 'png' }, async (dataUrl) => {
    //   if (!dataUrl) {
    //     console.error('Failed to capture screenshot');
    //     return;
    //   }
      // Get the current tab URL

      // console.log(numPrompt);
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    
        // Now that formData is populated, send the request
        fetch('http://localhost:3000/api/get-page', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({url: tabs[0].url})
        })
        .then(response => response.json())
        .then(data => {
          if (data.coordinates) {
            data.coordinates.x += 50; 
            data.coordinates.y -= 30;
            const instructions = "Click on the button that says EN";
            chrome.tabs.sendMessage(tabs[0].id, { 
              action: 'send-coordinates', 
              coordinates: data.coordinates,
              instructions: instructions
            }, (response) => {
              togglePopup(false);
            })
            changeInstructions("Click all");
          }
        })
        .catch(error => console.error('Error:', error));
      });
    // });
    

  }

  return ( openPopup && (
    <div>
        <div id="popup-container">
          <h1>SkyPal</h1>
          <button id="toggle-btn" onClick={toggleOverlay}>
            Toggle Popup
          </button>
          <VoiceBox voiceChangeText={changeText} findObject={findObject} />
        </div>
    </div>
  ) )

}


export default Popup; 
