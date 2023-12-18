var formEl = $('#pizza-form');
var firstNameEl = $('input[name="first-name"]');
var lastNameEl = $('input[name="last-name"]');
var emailEl = $('input[name="email"]');
var githubEl = $('input[name="github"]');

function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  console.log('First Name:', firstNameEl.val());
  console.log('Last Name:', lastNameEl.val());
  console.log('Email:', emailEl.val());
  console.log('GitHub:', githubEl.val());

  // Select all checked options
  var checkedEl = $('input:checked');
  var selected = [];

  // Loop through checked options to store in array
  // pushing everything from checked into selected array
  $.each(checkedEl, function () {
    selected.push($(this).val()); // this array, adding another element at the end
  });
  console.log('Toppings: ', selected.join(', ')); // joining everything by comma and space

  // Clear input fields
  $('input[type="text"]').val(''); // parsein with nothing inside, resets fields
  $('input[type="email"]').val('');
  $('input[type="checkbox"]').prop('checked', false); // setting default property
}

// Submit event on the form
formEl.on('submit', handleFormSubmit);
