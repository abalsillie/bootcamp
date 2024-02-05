class BlogPost {
  constructor(authorName) { // constructor block
    // Checks to see that the password is at least 2 characters long.If it's not an error is thrown.
    if (authorName.length < 2) {
      throw new Error('Author must be at least 2 characters long.'); // throw method
    }

    // Regex for only allowing uppercase, lowercase, numbers, dashes, and underscores.
    const pattern = new RegExp('([A-Za-z0-9_-]+$)');

    // Checks to see that authorName matches Regex pattern. If it doesn't an error is thrown.
    if (!pattern.test(authorName)) {
      throw new Error( // throw method
        'Author must only contain letters, numbers, dashes, and underscores.'
      );
    }

    this.authorName = authorName;
  }
}

module.exports = BlogPost;
