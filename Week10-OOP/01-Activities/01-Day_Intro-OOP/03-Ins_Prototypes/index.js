// Prototype methods on constructor function
function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
} // same as before

Dog.prototype.nap = function () { // instead of this.nap inside the function, refers to Constructor function Dog, prototype
  console.log('Zzzzzzzzz');
}; // function isn't on the object, it's on the prototype
// in that example, each time you create a new dog, you create a new function that is exactly the same

const dog = new Dog('Rex', 2, 'Bulldog'); // same object declaration as before
// Logging the dog object to show that in the browser, the nap method is now a prototype method and not a property of the object
console.log(dog); // returned in terminal

dog.nap();
