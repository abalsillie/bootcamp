// Select the container which holds our buttons that we want to add our event listener too.
const containerEl = document.getElementById('container');

const clickHandler = function(event) {
  // Convert the `data-count` attribute from a string to an integer.
  let count = parseInt(event.target.getAttribute('data-count')); // save data count as count attribute where click came from

  // Check to see if the element is a button.
  if (event.target.matches('button')) { // is target a button? if so add click count 'count++'
    // Increase our `data-count` attribute by one.
    count++;
    
    // Set the newly incremented `count` variable to the `data-count` attribute.
    event.target.setAttribute('data-count', count); // add to click content

    // Update what the button's display to show the correct amount of clicks.
    event.target.textContent = `Clicks: ${count}`; // add to display html
  }

};

// Add the click handler to the container that holds our buttons.
containerEl.addEventListener('click', clickHandler); // click event is attached to div, not specific buttons

// target is where event came from