// function 'wait()' is scaled to return a new promise
const wait = () => { // function call
  const myPromise = new Promise((resolve, reject) => { // returning new promise object
    // a timeout of 3 seconds is initialized
    setTimeout(() => { // setting timeout, 3000 miliseconds
      // after 3 seconds a random number is generated
      const randNum = Math.floor(Math.random() * 100);
      // if the random number is even the 'resolve()' sends data through to the '.then()' of the promise
      if (randNum % 2 === 0) {
        resolve(`Success! Even number ${randNum} generated`);
        // if the random number is odd the 'reject()' sends data through to the the '.catch()' of the promise
      } else {
        reject(new Error(`Oops! Odd number ${randNum} generated`));
      }
    }, 3000);
  });

  return myPromise;
};

// execution of the 'wait()' function promise
wait()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

  

// first parametre 'resolve' = successful ---> goes to then block
// second parametre 'reject' = unsuccessful ---> goes to catch block
