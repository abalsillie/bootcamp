// TODO: Add a comment explaining the role of `export` in this function `boxClick()`

export const boxClick = () => { // exports the boxClick func for use in index.js file
  const box = document.getElementById('box'); // gets element by id box from html file
  if (box.style.backgroundColor === 'blue') { // if blue, turn yellow on click
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'blue'; // else, stay blue
  }
};
