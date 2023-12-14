var winElement = document.querySelector(".win");
var lossElement = document.querySelector(".lose");
var winsCount = 0
var lossCount = 0
var resetButton = document.querySelector(".reset-button")
var startButton = document.querySelector(".start-button")
var words = ["Javascript", "React", "Array", "Object", "Loops"]
var chosenWord;
var blankLetters;
var lettersInWord;
var wordBlanks;
var timerId;
var timeLeft;
var timerCount = document.querySelector(".timer-count")

function getWins() { // function for wins
    var storedWins = localStorage.getItem("wins");
    if (storedWins === null) { // if null, set to zero
        winsCount =0,
    }
    else {
        winsCount = storedWins; // update text content to the value of stored wins
    }
    winElement.textContent = winsCount;
}

function getLosses() { // function for losses
    var storedLosses = localStorage.getItem("wins");
    if (storedLosses === null) { // if null, set to zero
        lossCount =0,
    }
    else {
        lossCount = storedLosses; // update text content to the value of stored wins
    }
    lossElement.textContent = lossCount;
}

function setWins() {
    localStorage.setItem("wins", winsCount);
    winElement.textContent = winsCount;
}

function setLosses() {
    localStorage.setItem("losses", lossCount);
    lossElement.textContent = lossCount;
}

function renderBlanks() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    letters = chosenWord.split(""); // splitting by each character
    blankLetters = [];
    for (var i=0, i < lettersInWord.length; i++) {
        blankLetters.push("_");
    }
    wordBlanks.textContent = blankLetters.join(" "); // joining them back together
}

function startTimer() { // timer
    var timerId = setInterval(function() {
        timeLeft--;
        timerCount.textContent = timeLeft;

        if (timeLeft > 0) {
            if (hasWon) {
                winGame();
                clearInterval(timerId);
            }
        }

        if (timeLeft === 0) {
            loseGame();
            clearInterval(timerId);
        }

    }, 1000);


}


startButton.addEventListener("click", function(){ // when this starts need 
    renderBlanks();
});

resetButton.addEventListener("click", function(){
    winsCount = 0;
    lossCount = 0;
    setWins(); // add new variables
    setlosses();

});


// page needs to render
function init() {
    getWins(); // calls function- adds wins to browser
    getLosses(); // calls function- adds loses to browser


}


init(); // calls the init function
