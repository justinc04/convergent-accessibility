let overlay = null;
let overlayPosition = { left: 50, top: 50 };

const createOverlay = () => {
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'extension-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = `${overlayPosition.top}px`;
    overlay.style.left = `${overlayPosition.left}px`;
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
    document.body.appendChild(overlay);
  }
};

const removeOverlay = () => {
  if (overlay) {
    document.body.removeChild(overlay);
    overlay = null;
  }
};

// Message that activates overlay
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'toggleOverlay') {
    if (!overlay) {
      createOverlay();
    } else {
      removeOverlay();
    }
  }
});


const handleArrowKeyMovement = (event) => {
  if (!overlay) return;

  const step = 30;
  switch (event.key) {
    case 'ArrowRight':
      overlayPosition.left += step;
      break;
    case 'ArrowLeft':
      overlayPosition.left -= step;
      break;
    case 'ArrowUp':
      overlayPosition.top -= step;
      break;
    case 'ArrowDown':
      overlayPosition.top += step;
      break;
    default:
      return;
  }

  // Update the position of the overlay
  overlay.style.left = `${overlayPosition.left}px`;
  overlay.style.top = `${overlayPosition.top}px`;
};


document.addEventListener('keydown', handleArrowKeyMovement);
