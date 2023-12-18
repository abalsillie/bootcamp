var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// check jquery link in HTML- done

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
    event.preventDefault(); // prevent refresh

    // receive value from input id "shopping input"
    var shoppingItem = $('input[name="shopping-input"]').val() // grab item and add value

    // check for empty value
    if (!shoppingItem) {
        console.log("Error");
        return;
    }

    var liEL = $('<li>');
    liEL.text(shoppingItem);
    shoppingListEl.append(liEl);

    $('input[name="shopping-input"]').val(''); // parsein with nothing inside, resets fields
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
// form can be submitted- submit event when 'add item' is clicked
shoppingFormEl.on('submit', handleFormSubmit);
