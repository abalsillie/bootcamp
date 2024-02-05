// Constructor Arithmetic is imported.
const Arithmetic = require('../arithmetic.js'); // importing arithmetic js, so we can access function on line 25

// A testing suite for Arithmetic is created.
// describe function is a global variable, to create a suite to describe the test
// pass in the name of the suite and pass in the function
describe('Arithmetic', () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  describe('modulus', () => {
    it('should take two numbers, divide them, and return the remainder', () => {
      const total = 0;
      const arithmetic = new Arithmetic();
      expect(arithmetic.modulus(2, 2)).toEqual(total); // access the arguments by passing in numbers
    });
  });
});

describe('suit', () => {
  describe('Test1', () => {
    it('should give me modulus result', () => {
      const arithmetic = new Arithmetic();
      const result = arithmetic.modulus(2, 2); // 2 modulus 2, i.e. 2/2 = 0
      expect(result).toEqual();
    });

  });
});