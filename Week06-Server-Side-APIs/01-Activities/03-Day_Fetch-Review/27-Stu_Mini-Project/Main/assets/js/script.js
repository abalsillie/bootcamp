var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) { // create event function for the listener
  event.preventDefault(); // prevent refresh

  var searchInputVal = document.querySelector('#search-input').value; // search-input element (first search box)
  var formatInputVal = document.querySelector('#format-input').value; // format-input element (second box)

  if (!searchInputVal) { // if value is empty, return an error
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit); // event listener for the submit button
