// Import buttonClick function as dependency into entry point
import { buttonClick } from "./button"; // from button.js file

document.getElementById("btn").addEventListener("click", buttonClick);
// add event listener to index.html file