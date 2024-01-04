var issueContainer = document.getElementById('issues');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/repos/nodejs/node/issues?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) { // access to the data
      console.log(data); // log out the data in an array
      for (var i = 0; i < data.length; i++) {
        var userName = document.createElement('h3'); // create new element to the h3
        var issueTitle = document.createElement('p');
        userName.textContent = data[i].user.login; // grab user log in
        issueTitle.textContent = data[i].title;
        issueContainer.append(userName); // append user name to issue container
        issueContainer.append(issueTitle);
      }
    });
}
fetchButton.addEventListener('click', getApi);
