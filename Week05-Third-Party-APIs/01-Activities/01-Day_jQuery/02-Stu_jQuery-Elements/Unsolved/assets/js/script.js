// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/
var rootElement = $('#root'); // calling the root element, which has an ID of root
// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
var authorElement = $('<p>') // <> clarifies HTML element
// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
authorElement.text('~ Carol Dweck'); // adding text to author element
// TODO: Add the class `plain` to the author element
authorElement.addClass('plain'); // adding CSS class to the author element
// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
var quoteElement = $('<h1>'); // create a heading
// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
quoteElement.text('Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.');
// TODO: Apply the class `fancy` to the quote element
quoteElement.attr('class','fancy');
// TODO: Append the author element to the quote element
quoteElement.append(authorElement);
// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
rootElement.append(quoteElement);