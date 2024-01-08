fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', { // resource
  cache: 'reload', // set cache to reload
  method: 'GET' // used when we are trying to submit a form
})

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch in readme