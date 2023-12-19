var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer-count");
var correctAnswers = document.querySelectorAll(".correct-ans");
var incAnswers = document.querySelectorAll(".inc-ans");
var submitButton = document.querySelector("#submit");
var initialsInput = document.querySelector("#initials");
var timer;
var timerCount;
var trueCounter = 0;

var divQuestion1 = document.getElementById('question1');
var divQuestion2 = document.getElementById('question2');
var divQuestion3 = document.getElementById('question3');
var divQuestion4 = document.getElementById('question4');
var divQuestion5 = document.getElementById('question5');

var divFinish = document.getElementById('finish');
var score = document.getElementById('score');

var correct = document.getElementById('correct');
var incorrect = document.getElementById('incorrect');

// in the event of a start button click, the quiz begins
startButton.addEventListener("click", startQuiz);

correctAnswers.forEach(button => {
  button.addEventListener("click", correctAnswer);
});

incAnswers.forEach(button => {
  button.addEventListener("click", incAnswer);
});

var currentQuestion;
var playerScore;

// the startQuiz function is called when the start button is clicked
function startQuiz() {
    currentQuestion = 1;
    playerScore = 0;
    timerCount = 75;
    startTimer() // call the start timer function
    var start = document.getElementById('start');
    start.style.display = 'none'; // hide the first section
    loadQuestion(currentQuestion);
  }

function loadQuestion(questionNumber){
  if(questionNumber == 1){
    divQuestion1.style.display = 'block';
  }
  else if(questionNumber == 2){
    divQuestion1.style.display = 'none';
    divQuestion2.style.display = 'block';
  }
  else if(questionNumber == 3){
    divQuestion2.style.display = 'none';
    divQuestion3.style.display = 'block';
  }
  else if(questionNumber == 4){
    divQuestion3.style.display = 'none';
    divQuestion4.style.display = 'block';
  }
  else if(questionNumber == 5){
    divQuestion4.style.display = 'none';
    divQuestion5.style.display = 'block';
  }
  else if(questionNumber == 6){
    // Call function that ends quiz
    console.log("End of quiz");
    loadFinish();
  }
}

function hideQuestions(){
  divQuestion1.style.display = 'none';
  divQuestion2.style.display = 'none';
  divQuestion3.style.display = 'none';
  divQuestion4.style.display = 'none';
  divQuestion5.style.display = 'none';
  correct.style.display = 'none';
  incorrect.style.display = 'none';
}

// correct answer function
function correctAnswer() {
    incorrect.style.display = 'none';
    correct.style.display = 'block';
    currentQuestion++;
    playerScore++;
    loadQuestion(currentQuestion);
  }

function incAnswer(){
    correct.style.display = 'none';
    incorrect.style.display = 'block';
    timerCount = timerCount - 10;
    currentQuestion++;
    playerScore--;
    loadQuestion(currentQuestion);
  }

// start timer function
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount <= 0) {
      clearInterval(timer);
      loadFinish();
    }
  }, 1000);
}

function renderLastRegistered() {
  var initials = localStorage.getItem("initials"); 
  if (initials !== null) {
    userInitialsSpan.textContent = initials;
  }
}

submitButton.addEventListener("click", function() {
  var initials = document.querySelector("#initials").value;
  if (initials === "") {
    displayMessage("error", "Cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
    localStorage.setItem("initials", initials)
    renderLastRegistered();
  }
});

function loadFinish(){
  hideQuestions();
  score.textContent = playerScore;
  divFinish.style.display = 'block';
}

//Clear highscores- clears the board
//Submit nothing in initials- needs to show error- POP UP ALERT- you need to put something in
//Sound for wrong or right
// Initials are stored in local storage to show on leader board
// Go back repeats quiz
