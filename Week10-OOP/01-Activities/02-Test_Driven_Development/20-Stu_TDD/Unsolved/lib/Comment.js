const ForumItem = require('./ForumItem.js');

class Comment extends ForumItem { // Comment class inherits all properties of ForumItem, Comment is the child and ForumItem is the parent
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }

  printMetaData() {
    return `Created by ${this.authorName} on ${this.createdOn} ${this.reaction}`;
  }
}
// if child and parent have the same function, the parent will be overridden by the child class

module.exports = Comment;
