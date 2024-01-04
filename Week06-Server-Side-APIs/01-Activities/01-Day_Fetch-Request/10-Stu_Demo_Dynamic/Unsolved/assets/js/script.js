var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button'); // selecting HTML element by ID

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (var i = 0; i < data.length; i++) {
        var userName = document.createElement('h3'); // create new element to the h3
        var userURL = document.createElement('p'); // 2 new elements
        userName.textContent = data[i].user.login; // grab user log in
        userURL.textContent = data[i].html_url; // added text to the elements but not yet visibile to the page
        userContainer.append(userName); // append user name to issue container
        userContainer.append(userURL);
      }
    });
}
fetchButton.addEventListener('click', getApi); // when button is clicked, call get API function
