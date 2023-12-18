var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list'); // taking ID elements, assigning to var

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val(); // value from text box is received

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return; // if empty, returns
  }

  var shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem); // adds new item to list tag

  // add delete button to remove shopping list item
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  ); // button is being added, appends to the ul tag
  // when this button is clicked need new function to delete item from the list

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val(''); // clear text box
}

// TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked
function handleRemoveItem(event) {
  var btnClicked = $(event.target);
  btnClicked.parent('li').remove();
}
// if button is clicked- remove it's parent (the whole list item, not just the button)

// TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above
shoppingListEl.on('click', '.delete-item-btn', handleRemoveItem);
// because button is inside ul tag, ul with delete item btn tag, envoke function handleRemoveItem

shoppingFormEl.on('submit', handleFormSubmit); // event is submit, calls handleFormSubmit function
