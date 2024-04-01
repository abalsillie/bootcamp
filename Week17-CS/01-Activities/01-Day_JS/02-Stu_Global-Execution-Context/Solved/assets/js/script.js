// 1) Where is carNoise stored? // global
const carNoise = 'Honk';
// 2) Where is goFast stored? // global
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored? // function envoked, speed passed in
  // 5) Where is makeNoise stored? // in the function goFast
  const makeNoise = sound => {
    // carNoise is then assigned to sound in the function execution context of makeNoise
    // console.log is then placed on the call stack which then logs the statement
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // makeNoise is placed on the call stack which creates a new function execution context
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// confirm is a pop up Web API, if true, calls goFast func, added to stack
if(confirm("Do you want to go fast?")) {
  goFast(80); // function envoked, speed passed in
}
