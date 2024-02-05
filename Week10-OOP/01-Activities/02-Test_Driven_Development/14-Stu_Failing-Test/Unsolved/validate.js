// TODO: Define a Validate class with an isPassword() function that takes in a password parameter.
class Validate {}
// don't necessarily have to provide a constructor

// TODO: Export the Validate class from this file.
Validate.prototype.isPassword = function (password) {
    if(password.length > 5 && password.substring(password.length - 1) === '$') {
        return true;
    }
    return false;
};
module.exports = Validate; // validate export to be used in validate.test file
