requestUrl = 'https://api.github.com/orgs/nodejs/repos';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  // 200 status = loaded perfectly
  // dev tools show error on html line 34
  // path to link to js script was incorrect
  // once correctly loaded can see fetch has also started to load on line 3
