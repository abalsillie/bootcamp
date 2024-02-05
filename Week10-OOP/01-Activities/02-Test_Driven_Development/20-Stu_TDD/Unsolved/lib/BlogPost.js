// code broken into multiple files

const ForumItem = require('./ForumItem.js');

class BlogPost extends ForumItem { // BlogPost class inherits all properties of ForumItem, BlogPost is the child and ForumItem is the parent
  constructor(authorName, title, text, createdOn) { // constructor
    super(authorName, text, createdOn);
    this.title = title;
    this.comments = []; // instance of blockpost is empty, adding into this object 'initialise comments' on line 60
  }

  addComment(comment) { // addComment function
    this.comments.push(comment);
  }
}

module.exports = BlogPost;
