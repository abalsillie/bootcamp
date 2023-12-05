var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

// "Canis Major" is added as the first element of the constellations array
// Shift removes from front of array
constellations.unshift("Canis Major");

// "Venus" is removed from the Planets array
// automatically starts from the end, so don't need to define Venus
// use Push to add one to the end of the array
planets.pop();

// Constellations and Planets are joined to form a new array named Galaxy
var galaxy = constellations.concat(planets);

// String "polaris" is converted into all capital letters and the new string is stored in a variable
var POLARIS = star.toUpperCase();
