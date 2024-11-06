import React from 'react';

function App() {
  const printHTML = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
  
      if (tab.url && !tab.url.startsWith("chrome://")) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: () => document.documentElement.outerHTML
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
      <button onClick={printHTML}>Print HTML</button>
    </div>
  );
  
}

export default App;
