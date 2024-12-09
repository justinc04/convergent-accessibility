let overlay = null;
let overlayPosition = { left: 50, top: 50 }; // Starting position of the overlay
let overlayPositionSpeechBubble = { left: 50, top: 50 }; // Starting position of the overlay
let overlayPositionDot = { left: 50, top: 50 }; // Starting position of the overlay
let isFollowingMouse = false; // Flag to track whether the overlay should follow the mouse

// Create overlay only if it doesn't already exist
const createOverlay = () => {
  console.log("creating overlay");
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'extension-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = `${overlayPosition.top}px`;
    overlay.style.left = `${overlayPosition.left}px`;
    overlay.style.width = '250px';
    overlay.style.height = '125px';
    overlay.style.transition = 'top .75s ease, left .75s ease'; 
    
    // Ensure the background image fits well without being cut off
    overlay.style.backgroundImage = `url("chrome-extension://${chrome.runtime.id}/images/overlay.png")`;  // Use the image as background
    overlay.style.backgroundSize = 'contain';  // This ensures the entire image fits without distortion
    overlay.style.backgroundPosition = 'center center'; // Center the image both horizontally and vertically
    overlay.style.backgroundRepeat = 'no-repeat'; // Ensure the image doesn't repeat
    overlay.style.borderRadius = '10px';
    overlay.style.zIndex = 1000;
    overlay.style.pointerEvents = 'none'; 



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

const createSpeechBubble = (text) => {
    console.log("got into here");
    if(!overlay) {
      console.log("overlay doesn't exist");
    }
    const bubble = document.createElement('div');
    bubble.id = 'speech-bubble-overlay';
    bubble.style.position = 'fixed';
    bubble.style.top = `${overlayPositionSpeechBubble.top}px`;
    bubble.style.left = `${overlayPositionSpeechBubble.left}px`;
    bubble.style.backgroundColor = '#fff';
    bubble.style.border = '2px solid #000';
    bubble.style.borderRadius = '10px';
    bubble.style.padding = '10px 20px';
    bubble.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    bubble.style.fontFamily = 'Arial, sans-serif';
    bubble.style.fontSize = '16px';
    bubble.style.color = '#000';
    bubble.style.zIndex = '10000';
    bubble.style.width = '250px';
    bubble.style.height = '75px';
    bubble.textContent = text; 
    bubble.style.pointerEvents = 'none'; 
  // Append the bubble to the body
    overlay.appendChild(bubble);
}


const createLittleDot = () => {
    dot = document.createElement('div');
    dot.id = 'little-dot';
    dot.style.position = 'fixed';
    dot.style.top = `${overlayPositionDot.top}px`;
    dot.style.left = `${overlayPositionDot.left}px`;
    dot.style.width = '75px';
    dot.style.height = '75px';
    dot.style.transition = 'top .75s ease, left .75s ease'; 
    
    // Ensure the background image fits well without being cut off
    dot.style.backgroundImage = `url("chrome-extension://${chrome.runtime.id}/images/click_on.png")`;  // Use the image as background
    dot.style.backgroundSize = 'contain';  // This ensures the entire image fits without distortion
    dot.style.backgroundPosition = 'center center'; // Center the image both horizontally and vertically
    dot.style.backgroundRepeat = 'no-repeat'; // Ensure the image doesn't repeat
    dot.style.borderRadius = '10px';
    dot.style.zIndex = 1000000;
    dot.style.pointerEvents = 'none'; 

    overlay.appendChild(dot);
}


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

const changePos = (event) => { 
  if(overlay) {
    overlay.style.left = `${overlayPosition.left}px`;
    overlay.style.top = `${overlayPosition.top}px`;
  }
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'toggleOverlay') {
    if (!overlay) {
      createOverlay();
    } else {
      removeOverlay();
    }
  }
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'send-coordinates') {
    if (overlay) {
      overlayPosition.left = message.coordinates.x; 
      overlayPosition.top = message.coordinates.y;
      overlayPositionSpeechBubble.left = message.coordinates.x - 175; 
      overlayPositionSpeechBubble.top = message.coordinates.y + 25; 
      overlayPositionDot.left = message.coordinates.x + 185; 
      overlayPositionDot.top = message.coordinates.y; 
      changePos();
      setTimeout(() => {
        createSpeechBubble(message.instructions);
        createLittleDot(); 
      }, 500);

    } else {
      overlayPosition.left = message.coordinates.x; 
      overlayPosition.top = message.coordinates.y;
      overlayPositionSpeechBubble.left = message.coordinates.x - 175; 
      overlayPositionDot.left = message.coordinates.x - 20; 
      overlayPositionDot.top = message.coordinates.y + 5; 
      createOverlay(); 
      setTimeout(() => {
        createSpeechBubble();
        createLittleDot(); 
      }, 3000);
  
    }
  }
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'send-coordinates2') {
    message.coordinates.x += 200; 
    overlayPosition.left = message.coordinates.x; 
    overlayPosition.top = message.coordinates.y;
    overlayPositionSpeechBubble.left = message.coordinates.x - 175; 
    overlayPositionSpeechBubble.top = message.coordinates.y + 25; 
    overlayPositionDot.left = message.coordinates.x - 213; 
    overlayPositionDot.top = message.coordinates.y - 27; 
    createOverlay(); 
    setTimeout(() => {
      createSpeechBubble(message.instructions);
      createLittleDot(); 
    }, 500);

    

  }
});


// Add event listeners
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keydown', handleArrowKeyMovement);
document.addEventListener('mousemove', handleMouseMove);
