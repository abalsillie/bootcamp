var a = "50"; // string
var b = 50; // number
var c = 100; // number
// modulus means remaining value e.g. 41/5 = 8, 41%5 = 1
var d = c % b; // number 0
var e = c / 2; // number 50

var expression1 = (b === e); // 50 === 50 true
var expression2 = (e < d); // 50 < 0 false
    var expression2 = (e > d); // e > d to be true

// Use comparison operators so all expressions below log to the console as true
console.log(a === b); // false, one is string one is number
    console.log(a == b); // make loosely equal
console.log(b !== e); // false, they are strictly equal
    console.log(b === e); // make strictly equal
console.log(c < b); // false, 100 > 50 
    console.log(c > b); // change to c > b to be true
console.log(d > 0); // false, 0 === 0
    console.log(d === 0); // change to strictly equal 

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && expression2); // true now we've made all the above true
console.log( !expression1 || expression2); // true now we've made all the above true
