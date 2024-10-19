var div = document.createElement("div");
div.style.position = "fixed";  // If you want it to be visible on the screen
div.style.top = "10px";
div.style.right = "10px";
div.style.backgroundColor = "yellow"; // Make it stand out visually
div.style.zIndex = "1000";  // Make sure it appears above other elements
div.innerText = "test123";
document.body.appendChild(div);
