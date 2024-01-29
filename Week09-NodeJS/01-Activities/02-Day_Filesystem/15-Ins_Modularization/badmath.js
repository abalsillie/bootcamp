const pie = 'apple'; // variable apple

const predictable = () => 1; // function that always gives us 1

// module.exports is an object we use to store variables or methods
module.exports = { // object, pie property, function property predictable
  pie,
  predictable,
}; // enables these to be used outside
// another script cannot explicitly access another script
// in node, module is a reference to the current module, exports is an object that makes the object publicly accessible