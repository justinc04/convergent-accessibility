import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const appContainer = document.createElement('div');
appContainer.id = 'react-extension-root';
document.body.appendChild(appContainer);

const root = ReactDOM.createRoot(appContainer);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const injectOverlay = () => {
  const overlayContainer = document.createElement('div');
  overlayContainer.id = 'extension-overlay';
  document.body.appendChild(overlayContainer);

  // base overlay properties
  const Overlay = () => (
    <div style={{
      position: 'fixed',
      top: '50px',         
      left: '50px',        
      width: '150px',      
      height: '75px',      
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10px',
      zIndex: 1000,
    }}>
      <h1 style={{
        color: 'white',
        fontFamily: '"Roboto", sans-serif',
        fontWeight: 'normal',
        textAlign: 'center',
        fontSize: '1.7em',
        margin: 0,
        width: '100%',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}>
        Test overlay
      </h1>
    </div>
  );

  
  const overlayRoot = ReactDOM.createRoot(overlayContainer);
  overlayRoot.render(<Overlay />);
};

// Call the function to inject the overlay when the extension is loaded
injectOverlay();
