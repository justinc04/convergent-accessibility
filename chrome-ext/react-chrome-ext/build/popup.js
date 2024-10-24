window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


  var recognizing;
  var recognition = new SpeechRecognition();
  recognition.continuous = true;
  reset();
  recognition.onend = reset;

  recognition.addEventListener("error", (event) => {

    if (event.error === 'not-allowed') {
      // Open a new extension page to request microphone access

      const extensionPageUrl = chrome.runtime.getURL("permission.html");
      
      chrome.tabs.create({ url: extensionPageUrl });
    }
  
  });

  document.getElementById("button").addEventListener("click", toggleStartStop);


  recognition.onresult = function (event) {
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        textarea.value += event.results[i][0].transcript;
      }
    }
  }

  function reset() {
    recognizing = false;
    button.innerHTML = "Click to Speak";
  }

  function toggleStartStop() {

    if (recognizing) {
      recognition.stop();
      reset();
    } else {
      recognition.start();
      recognizing = true;
      button.innerHTML = "Click to Stop";
    }
  }