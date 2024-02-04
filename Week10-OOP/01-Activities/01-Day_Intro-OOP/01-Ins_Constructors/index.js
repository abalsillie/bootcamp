// Example dog object made from scratch. Writning 100 of these from scratch would take a long time.
const dogs = {
  name: 'Rex',
  age: 2,
  breed: 'Bulldog'
}
// what if I wanted 100 dogs? Not going to write out 100 times

// Constructor function can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
function Dog(name, age, breed) { // take in the parametres here, name, age, breed
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.nap = function () {
    console.log('Zzzzzzzzz'); // nap function returns Zzzzzzz to show dog is sleeping
  };
}
// special function, must be capitalised, uses 'this', no return- return is implicit
// created a 'nap' function

// Sets the variable "dog" to a Dog object and initializes with name, age, and breed properties
const dog = new Dog('Rex', 2, 'Bulldog');
// to create new dog object, use keyword 'new'
// would keep redoing for new dog, instead of creating new object each time, using the Dog special constructor function

// Calling dog's nap method
dog.nap(); // prints out Zzzzzzz in the terminal
console.log(dog.name); // will print dog name Rex
