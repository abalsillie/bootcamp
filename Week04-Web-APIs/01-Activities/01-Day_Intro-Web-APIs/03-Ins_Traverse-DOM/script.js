// Starting from head element, walking down the DOM ("traversing the DOM"), first with root element
// then first parent, then through all it's children, then onto second parent
console.log("Document Body: ")
console.log(document.body);

// Children of the body- i.e. h1, ul and script
console.log("Children of Document Body: ")
console.log(document.body.children);

// First child of the body is h1
console.log("First child of body: ")
console.log(document.body.children[0]);

// Asking for the children of the ul- i.e. the first item of the list items
console.log("First child of the ul: ")
console.log(document.body.children[1].children[0]);

// Accessing element by id
// Input ID you want to look for, in this case the first child of ul
var firstChildUl = document.getElementById("first-child-ul");
console.log(firstChildUl)

// Setting style of element
// Change the element now that you've logged it, in this case chanding to green
firstChildUl.style.color = "green";
