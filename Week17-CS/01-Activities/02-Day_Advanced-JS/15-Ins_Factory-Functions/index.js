// Create a function which accepts three arguments name, age, and city.
// We will be creating an object with a function instead of a class.
function createUser(name, age, city) { // name, age and city parametres must be used in this func
    // Create an user object and map the function arguments to a key in the object.
    const user = {
        name: name,
        age: age,
        city: city
    } // user object, privacy means cannot be accessed outside this function

    // example of closure
    // Return two inner functions.
    return { // returns object with 2 functions, introduce and location
        introduceSelf: function() {
            // Instead of using the `this` keyword, we use the object we created in the outer function's scope.
            return console.log(`Hi my name is ${user.name} and I am currently ${user.age} years old!`)
        },

        location: function() {
            return console.log(`${user.name} is located in ${user.city}`)
        }
    }
}

// Create a user without using the `new` keyword different from how we do it with classes.
const userOne = createUser('Beverly', 58, 'Phoenix')

// Call the two methods attached to our `createUser` function to see if the user object is logging the correct values.
userOne.introduceSelf()
userOne.location()

// factory is a function that returns an object
// user factory this example
