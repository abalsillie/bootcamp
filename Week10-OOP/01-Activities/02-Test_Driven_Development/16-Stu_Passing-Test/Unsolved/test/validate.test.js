const Validate = require('../validate.js');

describe('Validate', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  describe('password length', () => {
    it('returns false when the password is less than 8 characters', () => {
      const validate = new Validate(); // create object
      const result = validate.isPassword('passwor'); // pass as a value to the test
      expect(result).toEqual(false); // if user passes empty string, should give us false
    });  
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  describe('uppercase', () => {
    it('returns false when the password does not contain at least 1 uppercase', () => {
      const validate = new Validate(); // create object
      const result = validate.isPassword('password1'); // pass as a value to the test
      expect(result).toEqual(false); // if user passes empty string, should give us false
    });  
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  describe('lowercase', () => {
    it('returns false when the password does not contain at least 1 lowercase', () => {
      const validate = new Validate(); // create object
      const result = validate.isPassword('PASSWORD1'); // pass as a value to the test
      expect(result).toEqual(false); // if user passes empty string, should give us false
    });  
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  describe('number', () => {
    it('returns false when the password does not contain at least 1 number', () => {
      const validate = new Validate(); // create object
      const result = validate.isPassword('Password'); // pass as a value to the test
      expect(result).toEqual(false); // if user passes empty string, should give us false
    });  
  });
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
  describe('true', () => {
    it('returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number', () => {
      const validate = new Validate();
      const result = validate.isPassword('Password1');
      expect(result).toEqual(true);
    });  
  });
});
