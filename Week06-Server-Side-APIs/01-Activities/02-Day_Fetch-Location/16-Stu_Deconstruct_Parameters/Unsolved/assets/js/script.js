fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
// query string with query parametres
// bring up issues documentation: https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28
// per_page- limits results to 10 per page
// state- state of issues to return, lists open issues only
// sort- how to sort results, set to date created
// direction- direction to sort, ascending or descending

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// / makes it a path
// after? is the key
// after= is the value
// & is the separator
