// Declare the object
var customerDrink = {
    // Define the properties
    name: "latte",
    // Number
    sugarNumber: 2,
    // Boolean
    orderReady: true,
  }

// Log the object
  console.log(customerDrink);

// Check the order
  if(customerDrink.orderReady) {
    console.log("Ready for pick-up " + customerDrink.name);
  }  else {
     console.log("Still in order queue " + customerDrink.name);
  }

  // Access 3rd item in an array property (if there was one)
  // customerDrink.X[2]
