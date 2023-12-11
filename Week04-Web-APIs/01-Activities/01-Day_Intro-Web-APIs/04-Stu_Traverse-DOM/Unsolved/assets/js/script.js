// Access element using id
// Accessing articles section
var articlesDiv = document.getElementById("articles");
// Accessing header section
var headerDiv = document.getElementById("header");

// Change style by accessing style object's properties
// Only one child inside articles div (<article>), therefore change [2] to [0]
articlesDiv.children[0].style.fontSize = "50px";
// Trying to change the header directly, need to change the child record, add "children[0]"
headerDiv.children[0].style.color = "white";


// EXTRA: if you wanted to make a change to all the children in a parent record, could use the for loop function
for (var i=0; i < headerDiv.children.length; i++) {
    headerDiv.children[i].style.color = 'white';
}