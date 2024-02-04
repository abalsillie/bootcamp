function Animal(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.nap = function () {
    console.log('Zzzzzzzzz');
  };
  this.getLives = function () { // getLives function defined
    return 1;
  };
}

function Dog(name, age, breed, puppies) {
  Animal.call(this, name, age, breed);
  this.puppies = puppies; // copying from Animal, adding puppies to new function Dog
}

Dog.prototype.bark = function () {
  console.log('Woof!'); // adding bark function to Dog function using prototype to streamline code
};

function Cat(name, age, breed, kittens) {
  Animal.call(this, name, age, breed);
  this.kittens = kittens; // copying from Animal, adding kittens to new function Cat
  // 'getLives()' method is overriden to provide Cat with a different functionality
  this.getLives = function () { // original getLives is overriden because this is more specific to the Cat function
    return 9;
  };
}

Cat.prototype.meow = function () {
  console.log('Meow!'); // adding meow function to Cat function using prototype to streamline code
};

const dog = new Dog('Rex', 2, 'Bulldog', ['Baxter', 'Marley', 'Scooby']);
const cat = new Cat('Tom', 2, 'Shorthair', ['Garfield', 'Felix', 'Salem']);

console.log(dog.getLives()); // will return 1 from Animal function
console.log(cat.getLives()); // will return 9 as specified in Cat function
