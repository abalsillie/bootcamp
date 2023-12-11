// Define the object "chosen pet name"
var chosenPet = "Lulu";

// Define the object "shelter"
var shelter = {
  // Array
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  // Array
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  // Function
  apptMessage: function () {
    console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
  }
};

function dogMessage() {
   console.log("Congrats! " + chosenPet + ", a great dog, is available for adoption!");
   shelter.apptMessage();
}

function catMessage() {
  console.log("Congrats! " + chosenPet + ", an awesome cat, is available for adoption!");
  shelter.apptMessage();
}

// If dogs available includes Lulu, return the dog message in row 16
if (shelter.dogs.includes(chosenPet)) {
  dogMessage();
// Else if cats available includes Lulu, return the cat message in row 21
} else if (shelter.cats.includes(chosenPet)) {
  catMessage();
} else {
  console.log("It looks like the pet is not available.");
  console.log("Check out our featured dog, " + shelter.dogs[0] + ". or our featured cat, " + shelter.cats[0]);
}
