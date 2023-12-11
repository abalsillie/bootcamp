// Alert, conform, prompt- built in elements to JS
// Step 1: provide user a box to enter R, P or S
// Step 2: allow input for R, P, S by storing them into variables
// Step 3: generate R, P or S for the computer
// Step 4: generate the result- winner or loser
// Step 5: show the user the result
// Step 6: repeat the game until user says to stop
// Step 7: display total wins, ties, and losses after each round

var options = ["R", "P", "S"]
options[0]
options[1]
options[2]

var wins =0;
var ties = 0;
var losses = 0;

var playGame =  function() { // Function expression
    var userChoice = window.prompt("Enter R, P or S"); // Whatever value the user enters gets stored in 'user choice'
    console.log(userChoice);

    if(userChoice) {
        return;  // If it's not a defined value or if it's null, it will exit the function
    };
    
    userChoice.toUpperCase(); // Changing all input to upper case just to be sure

    var index = math.floor(math.random() + options.length); // math random generates random number

    alert("The computer chose " + computerChoice)
    console.log(index)
    
    if(computerChoice === userChoice) {
        ties++;
        window.alert("It's a tie!");
        else if ((userChoice == "R" && computerChoice == "S") || (userChoice == "S" && computerChoice == "P") || (userChoice == "P" && computerChoice == "R"))
        wins++;
        window.alert("You win");
        else (losses++);
        window.alert("You lose");
    };

        window.alert("Stats \n: win.. losses.. ties..");

        var playAgain = window.confirm("Play again?");

        if(playAgain) {   
        }

};

playGame();
