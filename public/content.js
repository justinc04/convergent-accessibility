let overlay = null;
let overlayPosition = { left: 50, top: 50 }; // Starting position of the overlay
let isFollowingMouse = false; // Flag to track whether the overlay should follow the mouse

// Create overlay only if it doesn't already exist
const createOverlay = () => {
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'extension-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = `${overlayPosition.top}px`;
    overlay.style.left = `${overlayPosition.left}px`;
    overlay.style.width = '450px';
    overlay.style.height = '225px';
    
    // Ensure the background image fits well without being cut off
    overlay.style.backgroundImage = `url("chrome-extension://${chrome.runtime.id}/images/overlay.png")`;  // Use the image as background
    overlay.style.backgroundSize = 'contain';  // This ensures the entire image fits without distortion
    overlay.style.backgroundPosition = 'center center'; // Center the image both horizontally and vertically
    overlay.style.backgroundRepeat = 'no-repeat'; // Ensure the image doesn't repeat
    overlay.style.borderRadius = '10px';
    overlay.style.zIndex = 1000;

    document.body.appendChild(overlay);
  }
};

// Remove the overlay if it exists
const removeOverlay = () => {
  if (overlay) {
    document.body.removeChild(overlay);
    overlay = null;
  }
};

// Listen for the ] key to toggle overlay visibility
const handleKeyPress = (event) => {
  if (event.key === ']') {  // When the ] key is pressed, toggle overlay
    if (!overlay) {
      createOverlay();
    } else {
      removeOverlay();
    }
  }

  if (event.key === '[') {  // When the [ key is pressed, toggle follow mouse behavior
    isFollowingMouse = !isFollowingMouse;  // Toggle following mouse behavior
  }
};

// Arrow key listener for controlling the overlay's position
const handleArrowKeyMovement = (event) => {
  if (!overlay) return;

  const step = 10; // The number of pixels to move with each key press
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

// Update overlay position to follow mouse pointer when enabled
const handleMouseMove = (event) => {
  if (isFollowingMouse && overlay) {
    overlay.style.left = `${event.clientX - overlay.offsetWidth / 2}px`; // Center overlay on mouse
    overlay.style.top = `${event.clientY - overlay.offsetHeight / 2}px`;
  }
};

// Add event listeners
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keydown', handleArrowKeyMovement);
document.addEventListener('mousemove', handleMouseMove);
