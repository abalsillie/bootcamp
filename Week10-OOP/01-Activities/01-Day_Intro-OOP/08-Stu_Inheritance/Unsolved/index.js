// TODO: Create a class constructor named ForumItem that takes in 'authorName' and 'createdOn'.
class ForumItem {
  constructor(authorName, createdOn) {
    this.authorName = authorName;
    this.createdOn = createdOn;
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
// use EXTENDS keyword for classes, to inherit
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, createdOn);
    this.title = title;
    this.text = text;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn) {
    super(authorName, createdOn);
    this.text = text;
  }
}

// TODO: Create a new object using the Comment class constructor.
const comment = new Comment('Tom', 'Silly Billy', 'January'); 

// TODO: Create a new object using the BlogPost class constructor.
const post = new BlogPost('Alex', 'The Big Collab', 'Is Amazing', 'July'); 

// TODO: Log both newly created BlogPost and Comment to the console.
console.log(comment);
console.log(post);
