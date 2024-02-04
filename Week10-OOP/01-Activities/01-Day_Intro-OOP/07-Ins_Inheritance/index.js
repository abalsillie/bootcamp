// Constructor can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
function Animal(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.nap = function () {
    console.log('Zzzzzzzzz');
  };
}

// Dog constructor can use the Animal constructor's call method to inherit properties "name", "age", "breed", and the "nap()" function
function Dog(name, age, breed, puppies) { // define all properties, including puppies just added
  Animal.call(this, name, age, breed); // calls parent instructor, will inherit Animal properties and function IF passed in
  this.puppies = puppies; // adds new property, puppies, to Dog function
}

Dog.prototype.bark = function () {
  console.log('Woof!');
}; // adding a function bark to the Dog function, logging 'woof', using prototype to streamline

// Cat constructor can use the Animal constructor's call method to inherit properties "name", "age", "breed", and the "nap()" function
function Cat(name, age, breed, kittens) {
  Animal.call(this, name, age, breed); // calls parent instructor, will inherit Animal properties and function IF passed in
  this.kittens = kittens; // adds new property, kittens, to Cat function
}

Cat.prototype.meow = function () {
  console.log('Meow!');
}; // adding a function meow to the Cat function, logging 'meow', using prototype to streamline

const dog = new Dog('Rex', 2, 'Bulldog', ['Baxter', 'Marley', 'Scooby']); // takes in these properties, array is puppy names
const cat = new Cat('Tom', 2, 'Shorthair', ['Garfield', 'Felix', 'Salem']); // takes in these properties, array is kitten names

dog.bark(); // envoke bark function for object 'dog' above on line 31
cat.meow(); // envoke meow function for object 'cat' above on line 32
