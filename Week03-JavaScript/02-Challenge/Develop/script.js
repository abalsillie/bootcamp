// Generates the button by selecting the first HTML element with ID "generate" 
var generateBtn = document.querySelector("#generate");

// Log character arrays
var lowercaseList = ["a","b","c","d","e","f","g","h","i","j"];
var uppercaseList = ["A","B","C","D","E","F","G","H","I","J"];
var numericalList = [0,1,2,3,4,5,6,7,8,9];
var specialList = ["!","@","#","$","%","&","*","(",")"];

// Generating the password text through the generatePassword function, by selecting the first HTML element with ID "password"
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");
 passwordText.value = password;
}

// In the event of a click, write password function is envoked
generateBtn.addEventListener("click", writePassword);

// Declaring the generatePassword function
function generatePassword() {
  // Generating a new array from character arrays above
  var possibleChoices = [];
  // Prompt box for password length criteria
  var userChoice = window.prompt("How many characters would you like your password to contain? (Between 8 - 128 characters)");
    // Error shows if input is outside limits
    if (userChoice < 8 || userChoice > 128) {
      window.alert("Please select a number between 8 and 128");
      return "Please select a number between 8 and 128";
    // Error shows if input is not numerical value
    } else if (isNaN(userChoice)) {
      window.alert("Please select a numerical value");
      return "Please select a numerical value";
    // If user presses Cancel, prompt box closes
    } else if (!userChoice) {
      window.alert("You must select a password length");
      return "You must select a password length";
    };

  // Password lowercase criteria
  var lowercase = window.confirm("Click OK to include lowercase characters in your password");
    if (lowercase === true) {
      possibleChoices = possibleChoices.concat(lowercaseList);
    };

  // Password uppercase criteria
  var uppercase = window.confirm("Click OK to include uppercase characters in your password");
    if (uppercase === true) {
      possibleChoices = possibleChoices.concat(uppercaseList);
    };

  // Password numerical characters
   var numerical = window.confirm("Click OK to include numerical characters in your password");
    if (numerical === true) {
      possibleChoices = possibleChoices.concat(numericalList);
    };

  // Password special characters
  var special = window.confirm("Click OK to include special characters in your password");
    if (special === true) {
      possibleChoices = possibleChoices.concat(specialList);
    };

  // If no criteria chosen, error message will show
  if (lowercase === false && uppercase === false && numerical === false && special === false) {
    window.alert("Please select at least one character type for your password");
    return "Please select at least one character type for your password";
  };

  // Random variable index is selected
  var i = Math.floor(Math.random() * possibleChoices.length);
  var computerChoice = possibleChoices[i];
  console.log(computerChoice);
 
  // For loop is created for the length of password selected
  for (var i = 0; i < userChoice; i++) { 
    password= possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
  };

  console.log(password);
}
