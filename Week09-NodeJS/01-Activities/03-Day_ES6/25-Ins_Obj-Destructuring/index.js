const arya = { // object with properties
  name: 'Arya Stark',
  parents: ['Eddard Stark', 'Catelyn Stark'], // array
}; // name and parents are keys, can be pulled off and used in functions

const jaime = {
  name: 'Jaime Lannister',
  parents: ['Tywin Lannister', 'Joanna Lannister'],
};

// In the past, if we wanted to pull off an object's property we'd have to do something like this:
const aryaName = arya.name;
const aryaParents = arya.parents;

console.log(aryaName); // logs `"Arya Stark"`
console.log(aryaParents); // logs `["Eddard Stark", "Catelyn Stark"]`

// Now with ES6 object destructuring syntax, we can do this:
// object destructuring
const { name, parents } = jaime; // going direct to name and parents

console.log(name); // pass in name, logs `"Jaime Lannister"`
console.log(parents); // pass in parents, logs `["Tywin Lannister", "Joanna Lannister"]`

// We can also rename our destructured properties like so:
const { name: jaimeName } = jaime; // we want to redefine name as Jamie Name
console.log(jaimeName); // logs `"Jaime Lannister"`

// We can also destructure parameters using the same feature. e.g. previously we might have done something like this:
const logCharacter = (character) =>
  console.log(
    `${character.name}'s parents are: ${character.parents[0]} and ${character.parents[1]}.` // had to define object as character
  );

logCharacter(arya);

// But now we can do this:
const betterLogCharacter = ({ name, parents }) => // don't have to reference character, just going direct to parametres
  console.log(`${name}'s parents are: ${parents[0]} and ${parents[1]}.`);

betterLogCharacter(jaime);
// no longer beholdent to exact position of the parametre in the object

// We can also use array destructuring to pull off an array's elements
const locations = ['Winterfell', 'Casterly Rock', 'Kings Landing'];
const [winterfell, casterlyRock, kingLanding] = locations; // pull by position [0,1,2]

console.log(winterfell); // logs `"Winterfell"`
console.log(casterlyRock); // logs `"Casterly Rock"`
console.log(kingLanding); // logs `"Kings Landing"`

// const transport = ['car', 'train']

// old way
// const car = transport[0];
// const train = transport[1];

// new way through restructuring
// const [car, train] = transport; (could be named anything, follow array number)

// knows where it is in array
