// TODO: Add a comment explaining role of the index.js file and import statements

import { boxClick } from './box';
import { headerClick } from './header';
// importing funcs from other js file, into single file, for use across the application
document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
// adding event listeners to html ids
