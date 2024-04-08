const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      virtuals: true, // allowing virtuals
      // TODO: Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
    },
    id: false,
  }
);

// TODO: Create a virtual property `fullName` on the userSchema
userSchema.virtual('fullName')
  // TODO: Create a getter for the virtual that returns the full name of the user (first + last)
  .get(function () {
    return `${this.first} + ${this.last}`; // this refers to given instance of userSchema
  })
  // TODO: Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`
  .set(function (fullName) { // set full name as new property
    // don't use return when setting something
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    this.set({ first, last });
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
