var searchFormEl = document.querySelector('#search-form'); // search-form element

function searchApi(searchInput, formatInput) {
  var requestUrl = 'https://www.loc.gov/search/?fo=json';
  if (formatInput) {
    requestUrl = 'https://www.loc.gov/' + formatInput + '/?fo=json';
  }
  requestUrl = requestUrl + "&q=" + searchInput; // and q equals the search input
  fetch(requestUrl)
    .then(function(response) {
      if(response.ok) {
        return response.json();
      }
        throw response.json(); // because there is a throw, there needs to be an error
    })
    .then(function(data) {
      for(var i = 0; i < data.results.length; i++) {}
    })
    .catch(function(error){
      alert('API had an error' + error);
    }); // only runs if the 'thens' fail
}

function handleSearchFormSubmit(event) { // create event function for the listener
  event.preventDefault(); // prevent refresh

  var searchInputVal = document.querySelector('#search-input').value; // search-input element (first search box)
  var formatInputVal = document.querySelector('#format-input').value; // format-input element (second box)

  if (!searchInputVal) { // if value is empty, return an error
    console.error('You need a search input value!');
    return;
  }

  searchApi(searchInput, formatInput);

  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit); // event listener for the submit button
