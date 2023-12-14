var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password"); // 6 variables grabbing HTML elements by ID

renderLastRegistered(); // calling the function as soon as page loads

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

// TODO: Retrieve the last email and password and render it to the page
function renderLastRegistered() { // as soon as page loads, this function is called (line 8)
  var email = localStorage.getItem("email"); 
  var password = localStorage.getItem("password");
  if (email !== null && password !== null) { // if email and password are not null, set text contents to values of variables
    userEmailSpan.textContent = email;
    userPasswordSpan.textContent = password;
  }
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault(); // prevents form reloading accidentally

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // TODO: Save email and password to localStorage and render the last registered user
  // setting item to store to local
  // setting key as values
  localStorage.setItem("email", email)
  localStorage.setItem("password", password)
  renderLastRegistered(); // envoke renderLastRegistered function tosave
  }
});


// Password key and email key would be set as keys if trying to login to new page