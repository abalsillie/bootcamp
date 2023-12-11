// Selects element by class time
var timeEl = document.querySelector(".time");

// Selects element by id main
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--; // Same as ++, -1
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval); // Stops timer at 0 seconds
      // Calls function to create and append image
      sendMessage(); // Sends image
    }

  }, 1000); // Keeps running until we tell it to stop, at an increment of 1000 miliseconds
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img"); // Create new image element
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl); // Append image element to main

}

setTime(); // Kick it off by selecting set time
