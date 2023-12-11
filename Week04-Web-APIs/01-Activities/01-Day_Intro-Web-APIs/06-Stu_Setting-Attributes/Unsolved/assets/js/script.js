var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Write Your Code Below

// All the h4 elements are selected and stored in a single variable
// querySelectorAll goes straight to the HTML and is trying to find all the h4 elements
var sites = document.querySelectorAll("h4");

// The text of each h4 is set to `blue`, the font size is `30px`, the text is `bold`, the padding to the left is set to `10px` and the margin is set to `0`
// A quicker way to set attributes is to create a for loop instead
// sites.children[0]... 1, 2, 3 etc
for (var i = 0; i < sites.length; i++) {
    sites[i].setAttribute("style", "color:blue; font-weight:bolder; font-size:30px; padding-left:10px; margin:0");
   }
   