// 'use strict'
// In the browser, the keyword 'this' in the Global Execution Context is the window object
const globalThis = this;
function myFuncA() {
  console.log('globalThis', globalThis); // calling globalThis function
  console.log('myFuncAThis', this); // calling this, determined when it's envoked
  // since this was not assigned by the call, it will default to the global object
  console.log(globalThis === this); // globalThis and this are equal, because this defaults to global object
}

myFuncA(); // add to the stack

const objB = { // stored in object objB
  myFuncB: function () {
    console.log('globalThis', globalThis); // globalThis is the window
    console.log('myFuncBThis', this); // this is the object in this case
    // In the FEC, a new reference to this is created
    console.log("myFuncB: ", globalThis === this);
  }
};

// keyword this reference depends on how the function is called
objB.myFuncB(); // adds to the stack
// this was called by this object here objB
