fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  method: 'GET', // GET is the default, used to retrieve dats, others include POST/ PATCH/ UPDATE/ DELETE
  credentials: 'same-origin', // credentials provided to this server, include same-origin (within the same domain/ website), omit (never provide the credentials)
  redirect: 'follow', // API is redirected by the server, follow it, this is the default, also error, manual (get response and can select what you want), follow (automatic)
})
// object parametre with singular values attached, init parametre for the fetch request
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
