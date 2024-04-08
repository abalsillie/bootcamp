const { Schema, model } = require('mongoose');

// Schema to create Post model
const postSchema = new Schema( // new schema stores text, username and comments array
  {
    text: String,
    username: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
  },
  {
    toJSON: {
      virtuals: true, // virtual comment tells what length of comments is
    },
    id: false,
  }
);

// user stores first and last name
// options are to concat first and last or store first and last together as it's own var
// OR
// Create a virtual property `commentCount` that gets the amount of comments per post
postSchema.virtual('commentCount').get(function () { // commentCount function is a virtual property
  return this.comments.length; // .get accesses comment count
});

// Initialize our Post model
const Post = model('post', postSchema); // calling post model

module.exports = Post;
