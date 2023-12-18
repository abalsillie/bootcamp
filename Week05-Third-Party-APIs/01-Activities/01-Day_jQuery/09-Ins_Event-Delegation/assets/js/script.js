var displayEl = $('#display');
var showLettersBtnEl = $('#show-letters-btn');
var buttonListEl = $('#buttons');
var clearEl = $('#clear');

// Immediately hide the clear button
clearEl.hide();

// function renders the buttons
function renderLetters() {
  var letters = [ // array of letters
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '_',
  ];

  // Dynamically create buttons
  // Create a for-loop to iterate through the letters array.
  for (var i = 0; i < letters.length; i++) {
    // Create button
    var letterBtn = $('<button>'); // create a button for each letter
    // Assign style to the button
    letterBtn.addClass('letter-button btn btn-info');
    // Assign the letter to the data-letter attribute
    letterBtn.attr('data-letter', letters[i]);
    // Display the letter
    letterBtn.text(letters[i]);
    // Attach the letter element
    buttonListEl.append(letterBtn);
  }
}

// Delegate event listener to the parent element, <div id="buttons">
buttonListEl.on('click', '.letter-button', function (event) { // delegating function to button list element, from child to parent
  var displayLetterEl = $('<div>');

  displayLetterEl.addClass('letter'); // add class to display letter argument

  // get letter from clicked letter button's `data-letter` attribute and use it for display
  displayLetterEl.text($(event.target).attr('data-letter'));
  displayEl.append(displayLetterEl); // append display letter element to display element
});

// Renders the letter buttons on click
// when we hit button, run render letters function
showLettersBtnEl.on('click', function () {
  // render letters
  renderLetters();
  // hide show letters button
  showLettersBtnEl.hide();
  // display clear button
  clearEl.show();
});

// Clears the message board of letters on click
// event listener
clearEl.on('click', function () {
  displayEl.empty();
});
