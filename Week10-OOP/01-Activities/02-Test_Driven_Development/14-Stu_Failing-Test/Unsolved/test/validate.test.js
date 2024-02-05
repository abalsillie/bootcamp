// documentation for jest - https://jestjs.io/docs/getting-started
// provide values for specific function to run, with expected result, to test that it works
// e.g. write test, add description, pass 2 values, with expected result
// by passing 1 and 2 as parametres, expected result is 3, because it's a sum
// test('adds 1 + 2 to equal 3', () => {
    // expect(sum(1, 2)).toBe(3);
// });

// write test function before main function

// TODO: Import the Validate class.
const Validate = require('../validate.js');

// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe('Validate', () => {
    describe('invalid', () => {
        it('checking whether password is empty', () => {
            const passwordString = ''; // pass as a value to the test
            const result = new Validate().isPassword(passwordString);
            expect(result).toEqual(false); // if user passes empty string, should give us false
        });
    });
});

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
