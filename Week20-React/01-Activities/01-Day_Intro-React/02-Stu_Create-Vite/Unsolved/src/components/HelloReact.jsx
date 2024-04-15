// TODO: Add a comment explaining what a react component is
// little piece of user interface (UI), splitting things up into their smallest pieces, this is a header
function HelloReact() {
  const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // jsx is basically handlebars (a syntax), returning html and js together to describe the UI
  return <h2>Hello World! Here is {text}</h2>;
}

// can write js inside of curly brace

export default HelloReact;
