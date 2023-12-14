var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count"); // selecting first HTML element by ID

var todos = []; // creating todos array

function renderTodos() { // rendering out/ showing todos
  todoList.innerHTML = ""; // resetting the todo list
  todoCountSpan.textContent = todos.length; // showing the count of todos
  
  for (var i = 0; i < todos.length; i++) { // for the length of the todo list...
    var todo = todos[i]; // for each to do it's 

    var li = document.createElement("li"); // creating todos (li items)
    li.textContent = todo;
    li.setAttribute("data-index", i); // attribute assigned as 'data index'

    var button = document.createElement("button"); // create a button
    button.textContent = "Complete ✔️"; // creating button text item

    li.appendChild(button); // appending the todo item to the list
    todoList.appendChild(li);
  }
}

function init() { // initialises the page
  var storedTodos = JSON.parse(localStorage.getItem("todos")); // converting local storage todos into an object
  if (storedTodos !== null) { // compares object to ensure it's not equal to null
    todos = storedTodos; // if there is something in local storage, put it into storedtodos and render them
  }
  renderTodos(); // calls the function above
}

function storeTodos() {
  localStorage.setItem("todos", JSON.stringify(todos)); // store object in local storage and JSON.stringify to convert it as a string
}
todoForm.addEventListener("submit", function(event) {
  event.preventDefault(); // stop refreshing, prevent default
  var todoText = todoInput.value.trim(); // get the text from the input

  if (todoText === "") { // if todo is empty, end the function
    return;
  }

  todos.push(todoText); // add to todo list
  todoInput.value = ""; // reset to empty string- clear out the input
 
  storeTodos(); // envoke stored todos- store into object
  renderTodos(); // envoke render todos- convert into list
});

todoList.addEventListener("click", function(event) { // acts on the ul not li
  var element = event.target; // event.target is where event originated- complete button

  if (element.matches("button") === true) { // if element is a button, use parent element
    var index = element.parentElement.getAttribute("data-index"); // get attribute of data index
    todos.splice(index, 1); // splice index 1, from where element exists in the todo list, cut off one
    storeTodos(); // envoke stored todos- store it again
    renderTodos(); // render it again
  }
});

init();
