export const headerClick = () => { // export headerClick func for use in index.js file
  const header = document.getElementById('header'); // selects header id in html
  if (header.style.color === 'blue') { // if blue
    header.style.color = 'black'; // turn black on click
  } else {
    header.style.color = 'blue'; // else, stay blue
  }
};
