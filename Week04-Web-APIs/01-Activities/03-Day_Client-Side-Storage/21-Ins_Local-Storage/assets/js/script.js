var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract"); // 3 variables grabbing HTML elements by ID

var count = localStorage.getItem("count"); // keyword localStorage, key is "count", stored in variable count

counter.textContent = count;

addButton.addEventListener("click", function() {
  if (count < 24) {
    count++;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

subtractButton.addEventListener("click", function() {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count); // setting count key to value of "count", creates new key if doesn't already exist
  }
});

// working with key value pairs
// "set item" sets the value, "get item" returns the item
// stored inside the browser, in local storage
// in dev tools- go to application in top ribbon > local storage > file://