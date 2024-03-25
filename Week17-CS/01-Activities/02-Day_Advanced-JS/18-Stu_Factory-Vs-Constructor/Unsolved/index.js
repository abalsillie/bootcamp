// TODO: Refactor the class to a factory function.

// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
// }

const getInfo = (state) => ({
  information: () => console.log(this.title, this.description),
});

// Store the arguments in an object so that we can pass them to the correct functions we return.
const lesson = (title, description) => {
  const state = { // title and desc stored in state var, pass in singular object for action func
    title,
    description,
  };
  // Return the action functions we want our `Phone` to use.
  return { ...getInfo(state) };
};

const csForJS = lesson('Module 17 - Computer Science');
csForJS.information();
