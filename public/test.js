var btn = document.createElement("div");
btn.className = "test";
var t = document.createTextNode("popup!");
btn.appendChild(t);
document.body.appendChild(btn);

document.getElementById('html-grabber').addEventListener('click', function() {
  chrome.runtime.sendMessage({ action: "getHTML" }, function(response) {
      if (chrome.runtime.lastError) {
          console.error("Error:", chrome.runtime.lastError);
      } else {
          console.log(response.html); // Log the HTML received from background.js
      }
  });
});