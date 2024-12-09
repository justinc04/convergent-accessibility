# convergent-accessibility
TX Convergent 2024
Tech Stack: 
Utilized React.js for the front end and Node.js to handle the backend 
Originally, we would use Google Vision API to extract text from the images 
Then we would feed the text into ChatGPT in order to provide an element
for Puppeteer to give the bounding box coordinates for. We then realized that
ChatGPT 4.0 could analyze images for us, and were in the process of implementing
that instead of Google Vision API. However, in the end, we were limited by the 
cost of ChatGPT's pricing plan. Therefore, we resorted to keeping Google 
Vision API in the presentation, as its flexible pricing would've been better 
for us. 

Our product currently takes Voice Input from the user in the front end, sends 
it to the backend. From there, the backend analyzes the input and then provides
coordinates of the object that the cloud must move to based on the HTML page 
with Puppeteer. It sends the coordinates back and then moves the cloud to the 
correct position. 

The way to use it is to first install it in Chrome. When you install it, you
will be presented with a landing page, that will request microphone permission.
Once you recieve microphone permission, the extension can be used in any page.
You must click the cloud icon in the Chrome hotbar and then from there, you 
click on the button to send voice input. Once that is complete, the cloud will
redirect you to where you must click. 

Group Members: 
Aditya Bhardwaj
Aparna Patait
Hassaan Ali
Justin Chang
Pranav Pillai
Sheena Vaghela
Wajeeh Jafry
Zahra Shaikhali

