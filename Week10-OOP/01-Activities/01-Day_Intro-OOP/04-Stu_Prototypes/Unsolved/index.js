// TODO: Add a comment describing what kind of function this is
// constructor function
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = []; // empty array, to be added to later
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`); // function printMetaData, logging name and created on
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
BlogPost.prototype.addComment = function(comment) {
  this.comments.push(comment); // creates a new function "addComment" which will push the given comment to the array, once an object is created
}; // this.comments refers to the array in the BlogPost function, and pushes the new comment to that array
// any new blogpost will reference this function 'comment' above

const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
); // creates a new object post, declaring variables name, title, text and created on

post.addComment('Nice post, I like it!'); // call addComment function on this 'post'

// TODO: Add a comment describing what you expect to see printed in the console
console.log(post.comments); // expect to see the comment on the post, i.e. 'Nice post, I like it!'
