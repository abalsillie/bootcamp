// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
class BlogPost {
    constructor(authorName, title, text, createdOn) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
        // TODO: Give BlogPost a property called 'comments' that is set to an empty array.
        this.comments = [];
    };

    // TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.
    printMetaData() {
        console.log(`Created by ${this.authorName} in ${this.createdOn}`);
    };
    // TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.
    addComment(comment) {
        this.comments.push(comment);
    };
};

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', and 'createdOn'.
class Comment {
    constructor(authorName, text, createdOn) {
        this.authorName = authorName;
        this.text = text;
        this.createdOn = createdOn;
    };
    // TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) with (text)'.
    printMetaData() {
        console.log(`Created by ${this.authorName} in ${this.createdOn} with ${this.text}`);
    };
};

// TODO: Create a new object using the Comment class constructor.
const comment = new Comment('Alex', 'Typewriter', 'July');

// TODO: Create a new object using the BlogPost class constructor.
const post = new BlogPost('Tom', 'Loves Gaming', 'So Much!', 'January');

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.
post.addComment(comment);

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
post.printMetaData();
comment.printMetaData();
