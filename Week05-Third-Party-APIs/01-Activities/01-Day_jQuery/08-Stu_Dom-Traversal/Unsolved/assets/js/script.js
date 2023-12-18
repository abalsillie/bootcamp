// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootEl.children('ul').children().css('background-color', 'white');
// grabs the child of the root element (ul) > ul children (li) > change background colour to white instead of black

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
rootEl.children('ul').eq(2).children().eq(0).text('O');
// grabs the 3rd child of the root element (3rd ul/ 3rd row) > ul 1st child (1st li/ first column) > adding O text
