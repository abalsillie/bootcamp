// npm i
// npm run build installs dist file
// open html in live server

export const buttonClick = () => { // export button click function
  const header = document.getElementById('header1'); // header1 id
  if (header.textContent == '') {
    header.textContent = 'Webpack is Working!';
  } else {
    header.textContent = '';
  }
};
