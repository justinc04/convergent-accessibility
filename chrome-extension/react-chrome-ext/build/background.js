chrome.runtime.onInstalled.addListener(({reason}) => {   
    if (reason === 'install') chrome.tabs.create({ url: 'index.html?mode=install'}); 
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    
            // Now that formData is populated, send the request
            fetch('http://localhost:3000/api/get-page', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }, 
              body: JSON.stringify({url: changeInfo.url})
            })
            .then(response => response.json())
            .then(data => {
              const instructions = "Click on the button that says Espanol";
              if (data.coordinates) {
                chrome.tabs.sendMessage(tabs[0].id, { 
                  action: 'send-coordinates2', 
                  coordinates: data.coordinates,
                  instructions: instructions
                });
              }
            })
            .catch(error => console.error('Error:', error));
          });
    }
});