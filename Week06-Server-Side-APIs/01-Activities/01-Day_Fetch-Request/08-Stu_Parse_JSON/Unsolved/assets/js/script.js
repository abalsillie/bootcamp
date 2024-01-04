// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    for (var i = 0; i < data.length; i++) { // TODO: loop through the response 
      console.log(data[i].html_url); // TODO: Console log each issue's URL and each user's login
      console.log(data[i].user.login); // for loop is not an asynchronis process
  }
});
