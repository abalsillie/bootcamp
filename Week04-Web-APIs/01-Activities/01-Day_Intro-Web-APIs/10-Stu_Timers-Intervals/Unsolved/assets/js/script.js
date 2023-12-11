// Selecting elements with ID countdown
var timerEl = document.getElementById('countdown');
// Selecting elements with ID main
var mainEl = document.getElementById('main');

// Defining the message
var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' '); // String function called split into an array of words, for this message split it at every space, create an array of words

function countdown() {
  var timeLeft = 5; // Countdown envoked

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  // Returning different messages for every time left
  var timeInterval = setInterval(function () {
    //
    // YOUR CODE HERE
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if(timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;      
    } else {
      timerEl.textContext = "";
      clearInterval(timeInterval);
      displayMessage() // As defined above
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++; // Increments word count by 1
    }
  }, 1000);
}

countdown();
