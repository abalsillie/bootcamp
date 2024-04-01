// // function to block the stack for x number of milliseconds
// const pause = milliSeconds => {
//   // get the current time
//   var startTime = new Date().getTime(); 
//   // block stack until time's up
//   while (new Date().getTime() < startTime + milliSeconds); 
// }

// pause(8000); // pass in pause for 8000ms

setTimeout(() => {
  document.querySelector('btn').classList.remove('display-none');
}, 8000);
