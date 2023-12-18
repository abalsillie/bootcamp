// selecting by HTML elements
var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer-count");
var correctAnswers = document.querySelectorAll(".correct-ans");
var incAnswers = document.querySelectorAll(".inc-ans");
// setting variables
var timer;
var timerCount;
var trueCounter = 0;

// var correctAnswers = ["4. Blue", "3. Cow", "1. China", "2. Ocean", "2. Acute"]

var divQuestion1 = document.getElementById('question1');
var divQuestion2 = document.getElementById('question2');
var divQuestion3 = document.getElementById('question3');
var divQuestion4 = document.getElementById('question4');
var divQuestion5 = document.getElementById('question5');

var correct = document.getElementById('correct');
var incorrect = document.getElementById('incorrect');

// in the event of a start button click, the quiz begins
startButton.addEventListener("click", startQuiz);

// in the event of a correct answer button click, the quiz begins
correctAnswers.forEach(button => {
  button.addEventListener("click", correctAnswer);
});

incAnswers.forEach(button => {
  button.addEventListener("click", incAnswer);
});


// the startQuiz function is called when the start button is clicked
function startQuiz() {
    var currentQuestion = 1;
    var playerScore = 0;
    timerCount = 75;
    startTimer() // call the start timer function
    var start = document.getElementById('start');
    start.style.display = 'none'; // hide the first section
    loadQuestion(currentQuestion);
  }

function loadQuestion(questionNumber){
  if(questionNumber == 1){
    divQuestion1.style.display = 'block'; // display the first question
  }
  else if(questionNumber == 2){
    divQuestion1.style.display = 'none'; // display the first question
    divQuestion2.style.display = 'block'; // display the first question
  }
  else if(questionNumber == 3){
    divQuestion2.style.display = 'none'; // display the first question
    divQuestion3.style.display = 'block'; // display the first question
  }
  else if(questionNumber == 4){
    divQuestion3.style.display = 'none'; // display the first question
    divQuestion4.style.display = 'block'; // display the first question
  }
  else if(questionNumber == 5){
    divQuestion4.style.display = 'none'; // display the first question
    divQuestion5.style.display = 'block'; // display the first question
  }
  else if(questionNumber == 6){
    // Call function that ends quiz
    console.log("End of quiz");
  }
}

function correctAnswer() {
    // if 
    console.log("right");
    
    incorrect.style.display = 'none';
    correct.style.display = 'block'; // hide the first section
    
    currentQuestion++;
    loadQuestion(currentQuestion);
    
  }

  function incAnswer(){
    console.log("wrong");
    
    correct.style.display = 'none';
    incorrect.style.display = 'block'; // hide the first section
    timerCount = timerCount - 10;
    currentQuestion++;
    loadQuestion(currentQuestion);
  }



  /*
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }*/



  
/*
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
*/






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

// Wrong answer deducts 1 from total score

// If all questions are answered or the timer reaches 0, game is over

// Save initials and score to scoreboard

// Initials are stored in local storage to show on leader board

// Go back repeats quiz

