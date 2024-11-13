import React, { useState } from 'react';

function App() {
  
  const [top, setTop] = useState(50);
  const [left, setLeft] = useState(50);

  // Function to move the overlay by x (left) and y (top)
  // + x moves to right,  + y moves up
  const moveOverlay = (x, y) => {
    const newTop = top + y;  // Move by y (top position)
    const newLeft = left + x; // Move by x (left position)

    setTop(newTop);
    setLeft(newLeft);
    console.log(newLeft);

    // Inject the overlay script into the current tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];

      if (tab) {
        if (!tab.url.startsWith('chrome-extension://') && !tab.url.startsWith('about:')) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (top, left) => {
              let overlay = document.getElementById('extension-overlay');
              if (!overlay) {
                overlay = document.createElement('div');
                overlay.id = 'extension-overlay';
                document.body.appendChild(overlay);
              }

              // properties of overlay after moving
              overlay.style.position = 'fixed';
              overlay.style.top = `${top}px`;
              overlay.style.left = `${left}px`;
              overlay.style.width = '150px';
              overlay.style.height = '75px';
              overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
              overlay.style.display = 'flex';
              overlay.style.justifyContent = 'center';
              overlay.style.alignItems = 'center';
              overlay.style.borderRadius = '10px';
              overlay.style.zIndex = 1000;

              overlay.innerHTML = `
                <h1 style="color: white; font-family: 'Roboto', sans-serif; font-weight: normal; text-align: center; margin: 0;">
                  Test overlay
                </h1>
              `;
            },
            args: [newTop, newLeft],
          }).catch((error) => {
            console.error('Error executing script:', error);
          });
        } else {
          console.warn('Not injecting overlay into chrome:// or about: pages');
        }
      }
    });
  };

  const printHTML = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];

      if (tab.url && !tab.url.startsWith("chrome://")) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => document.documentElement.outerHTML
        }).then((results) => {
          if (results && results[0]) {
            console.log("HTML content:", results[0].result);
          } else {
            console.error("No HTML content returned.");
          }
        }).catch((error) => {
          console.error("Error executing script:", error);
        });
      } else {
        console.error("Cannot access chrome:// or restricted URLs.");
      }
    });
  };

  return (
    <div>
      {/* Button to move the overlay */}
      <button onClick={() => moveOverlay(50, 0)}>Move Overlay Right</button>
      <button onClick={() => moveOverlay(0, 50)}>Move Overlay Down</button>
      <button onClick={() => moveOverlay(-50, 0)}>Move Overlay Left</button>
      <button onClick={() => moveOverlay(0, -50)}>Move Overlay Up</button>

      {/* Button to print HTML content */}
      <button onClick={printHTML}>Print HTML</button>
    </div>
  );
}

export default App;
