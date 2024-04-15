// TODO: Import yellow robot image as Yellow
// TODO: Import blue robot image as Blue

export const boxClick = () => {
  const box = document.getElementById('box');
  // import images into the `index.js` and `box.js` files as `Blue` and `Yellow`
  // set the `#box` element's src to `Yellow` to provide a default image when the page loads
  if (box.src === Yellow) {
    box.src = Blue;
  } else {
    box.src = Yellow;
  }
};
