var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// Ordered list containing four favorite foods is visible in the HTML below the text "My favorite foods are:"
var list = document.createElement('ol');

// Set background colour by setting attribute
list.setAttribute("style","background: blue; padding: 20px");

var listItem1 = document.createElement('li');
listItem1.setAttribute("style","colour: white; background:green; padding: 5px; margin-left: 35px")
var listItem2 = document.createElement('li');
listItem2.setAttribute("style","colour: white; background:green; padding: 5px; margin-left: 35px")
var listItem3 = document.createElement('li');
listItem3.setAttribute("style","colour: white; background:green; padding: 5px; margin-left: 35px")
var listItem4 = document.createElement('li');
listItem4.setAttribute("style","colour: white; background:green; padding: 5px; margin-left: 35px")

// Define list items
listItem1.textContent = "Ramen";
listItem2.textContent = "Pizza";
listItem3.textContent = "Pasta";
listItem4.textContent = "Ice Cream";

// Append items to list items (can't be to the body as it's not the direct parent)
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);
list.appendChild(listItem4);

favouriteEl.appendChild(list);
