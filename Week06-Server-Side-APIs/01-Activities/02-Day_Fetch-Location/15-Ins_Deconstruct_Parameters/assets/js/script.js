fetch('https://api.github.com/gists/public?since=2021-06-01&per_page=100') // query string with query parametres
// parametres we are parsing in
// since 2021, gists, 100 per page
// start query string with ?
// = sign is parsing in value

  .then(function (response) { 
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  // 100 items in array