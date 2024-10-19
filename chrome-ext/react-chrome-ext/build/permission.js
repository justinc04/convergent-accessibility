const requestPermissionButton = document.getElementById('requestPermission');

requestPermissionButton.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
      console.log('Microphone access granted');
      // Close the permission page after access is granted
      window.close();
    })
    .catch((error) => {
      console.error('Microphone access denied', error);
      alert('Please grant microphone access to continue.');
    });
});
