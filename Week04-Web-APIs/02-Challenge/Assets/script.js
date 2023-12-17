// selecting by HTML elements
var startButton = document.getElementById('start-button');
var timerElement = document.getElementById('timer-count');
// setting variables
var timer;
var timerCount;
var trueCounter = 0;

// in the event of a start button click, the quiz begins
startButton.addEventListener("click", startQuiz);

// the startQuiz function is called when the start button is clicked
function startQuiz() {
    timerCount = 75;
    startTimer() // call the start timer function
    var start = document.getElementById('start');
    start.style.display = 'none'; // hide the first section
    var question1 = document.getElementById('question1');
    question1.style.display = 'block'; // display the first question
    
  }






  

  function init() {
    getWins();
  }
  


  
  // The winGame function is called when the win condition is met
  function winGame() {
    wordBlank.textContent = "YOU WON!!!🏆 ";
    winCounter++
    setWins()
  }




// Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}


// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}







// start timer function
function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }




//Clear highscores- clears the board
//Submit nothing in initials- needs to show error- POP UP ALERT- you need to put something in
//Sound for wrong or right


// First question presents




// Multiple choice options in form of ordered list


// Answer is submitted


// Second question presents



// 5 questions total



// Message pops up underneath as 'correct' or 'incorrect'

// Wrong answer deducts 1 from total score


// Wrong answers result 10 seconds subtracted from clock



// If all questions are answered or the timer reaches 0, game is over


// Save initials and score to scoreboard

// Initials are stored in local storage to show on leader board



// Go back repeats quiz

