// Check if the Web Speech API is supported
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = false;
recognition.continuous = false;

const startBtn = document.getElementById('start-btn');
const transcriptElement = document.getElementById('transcript');

startBtn.addEventListener('click', () => {
  recognition.start();
});

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  transcriptElement.textContent = `You said: ${transcript}`;
  console.log(`You said: ${transcript}`);
};

recognition.onerror = (event) => {
  console.error('Speech recognition error detected: ' + event.error);
};