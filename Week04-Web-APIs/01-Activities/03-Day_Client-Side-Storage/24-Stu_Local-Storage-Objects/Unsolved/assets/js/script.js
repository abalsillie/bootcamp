var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up"); // element variables

signUpButton.addEventListener("click", function(event) { // event listener on the sign up
  event.preventDefault();
  // TODO: Create user object to store submission info
  var user = {
    firstName: firstNameInput.value.trim(), // trim gets rid of white space
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  // TODO: Set new submission to local storage 
  localStorage.setItem("user", JASON.stringify(user));
});

// Don't need to convert back at this stage, just saving to local storage
