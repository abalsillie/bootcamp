const buttons = document.getElementsByTagName('button'); // attached to button div

const clickHandler = function () {
  let count = 0; // click count starts from 0
  return function () { // function has 2 purposes
    count++; // adds click count by one
    this.textContent = `Clicks: ${count}`; // rendering click count to button text, 'this' refers to buttons
  };
};
// 'this' refers to global variable, which is defined outside this function, buttons (line 1)

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
// adding event listener to each button in the div