let overlay = null;
let overlayPosition = { left: 50, top: 50 }; // Starting position of the overlay
let isFollowingMouse = false;

const createOverlay = () => {
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'extension-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = `${overlayPosition.top}px`;
    overlay.style.left = `${overlayPosition.left}px`;

  
    overlay.style.width = '225px';
    overlay.style.height = '110px';

    overlay.style.backgroundImage = `url("chrome-extension://${chrome.runtime.id}/images/overlay2.png")`;
    overlay.style.backgroundImage = `url("chrome-extension://${chrome.runtime.id}/images/overlay1.png")`; 
    overlay.style.backgroundImage = `url("chrome-extension://${chrome.runtime.id}/images/overlay0.png")`; 
    overlay.style.backgroundSize = 'contain'; 
    overlay.style.backgroundPosition = 'center center'; 
    overlay.style.backgroundRepeat = 'no-repeat';
    overlay.style.borderRadius = '10px';
    overlay.style.zIndex = 1000;
    overlay.style.transition = 'top .75s ease, left .75s ease'; 
    

    document.body.appendChild(overlay);

    let images = [
      `chrome-extension://${chrome.runtime.id}/images/overlay0.png`,
      `chrome-extension://${chrome.runtime.id}/images/overlay1.png`,
      `chrome-extension://${chrome.runtime.id}/images/overlay2.png`,
      `chrome-extension://${chrome.runtime.id}/images/overlay1.png`
    ];
    
    let delays = [3000, 50, 50, 50];
    let currentIndex = 0;
    
    function blinkImages() {
      overlay.style.backgroundImage = `url("${images[currentIndex]}")`;
      let nextIndex = (currentIndex + 1) % images.length;
      setTimeout(() => {
        currentIndex = nextIndex;
        blinkImages();
      }, delays[currentIndex]);
    }
    
    blinkImages();
    
  }
};

// Remove the overlay if it exists
const removeOverlay = () => {
  if (overlay) {
    document.body.removeChild(overlay);
    overlay = null;
  }
};


const moveTo = (x, y) => {
  if (overlay) {
    overlay.style.left = `${x}px`;
    overlay.style.top = `${y}px`;
    overlayPosition = { left: x, top: y };
  }
};

// All keypress handling functions
const handleKeyPress = (event) => {
  if (event.key === ']') { 
    if (!overlay) {
      createOverlay();
    } else {
      removeOverlay();
    }
  }

  if (event.key === '[') { 
    isFollowingMouse = !isFollowingMouse;
  }

  if (event.key === 'a') { 
    moveTo(600, 250);
  }
  if (event.key === 'b') { 
    moveTo(50, 50);
  }
};


// mouse pointer following function
const handleMouseMove = (event) => {
  if (isFollowingMouse && overlay) {
    overlay.style.left = `${event.clientX - overlay.offsetWidth / 2}px`;
    overlay.style.top = `${event.clientY - overlay.offsetHeight / 2}px`;
  }
};

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'toggleOverlay') {
    if (!overlay) {
      createOverlay();
    } else {
      removeOverlay();
    }
  }
});





//Event listeners
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('mousemove', handleMouseMove);


