// Highlight which elements in the DOM are the children of the parent element
// Uncomment the following two lines to see the which elements are the children to the #top
$('#top').children().css('color', 'yellow');
console.log($('#top').children());

// Uncomment the following line to see the which element is the first direct child of the <main>
$('#top').children().eq(0).addClass('boxy'); // grabbing first child of array, adding class 'boxy'

// Uncomment the following line to add a list item to the list
$('#top').children().eq(4).append($('<li>Classmates</li>')); // grabbing top element, grabbing children, grabbing 5th child (ul), appending list item

// Uncomment the following line to style the list items
$('#top').children('ul').children().addClass('bg-primary text-dark mb-3 p-3').css('border-radius', '.4rem');
// element id of top (ul), children of list (li), parsein css selector bg-primary...
