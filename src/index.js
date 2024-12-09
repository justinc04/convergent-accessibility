import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Wait until the DOM is fully loaded
window.addEventListener('DOMContentLoaded', (event) => {
  // Dynamically create the div to hold React
  const appContainer = document.createElement('div');
  appContainer.id = 'react-extension-root';
  document.body.appendChild(appContainer);

  if (document.getElementById('react-extension-root')) {
    const root = ReactDOM.createRoot(appContainer);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Target container for React root does not exist.");
  }
});
