const BlogPost = require('../blogPost.js'); // main function given in blogPost.js, write the test function

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  describe('author length', () => { // use arrow functions for testing
    it('throws an error when the authorName provided is less than 2 characters long', () => {
      const length = () => new BlogPost('a');
      const err = new Error('authorName should be at least 2 characters long');
      expect(length).toThrow(err)
    });  
  });
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
  describe('author characters', () => { // use arrow functions for testing
    it('throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores', () => {
      const characters = () => new BlogPost('johndoe!');
      const err = new Error('authorName must only contain uppercase, lowercase, numbers, dashes, and underscores');
      expect(characters).toThrow(err)
    });  
  });
});
