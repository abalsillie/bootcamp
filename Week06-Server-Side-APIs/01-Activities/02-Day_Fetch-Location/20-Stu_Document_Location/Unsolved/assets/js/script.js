var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html'; // once page loads, automatic redirection to 404 error page

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.
  if (response.status === 404) {
    document.location.replace(redirectUrl);
  } else {
    return response.json(); // if it doesn't go to 404, convert to json
  }
});

// read me: https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
