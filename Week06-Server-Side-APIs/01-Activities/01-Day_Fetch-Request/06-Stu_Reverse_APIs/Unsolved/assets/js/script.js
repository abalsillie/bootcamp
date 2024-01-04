var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// 3 different ways to achieve the same thing

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
$.ajax({ // $ refers to JQuery, creating an object for ajax
  url: requestUrl, // 
  method: 'GET', // parsein property called method, to get URL
}).then(function (response) { // function takes in response parametre
  console.log('AJAX Response \n-------------'); // console log
  console.log(response); // console log the response that comes back, array/ object
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
fetch(requestUrl) // fetch allows you to make a request to a server, specific URL
  .then(function (response) { // action response function
    return response.json(); // turning back to JS object and return it
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
