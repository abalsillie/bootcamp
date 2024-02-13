// jest shape test
// run 'npm test' in the terminal to ensure objects rendered match what is defined in shapes.js

const { Triangle, Circle, Square } = require("./shapes.js") // import classes from shapes.js

// refer to code given in README to test
// triangle
describe('triangle', () => {
  test('correct', () => {
    const shape = new Triangle();
    var color = ('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon height="200" width="300" points="150, 18 244, 182 56, 182" fill="${color}"/>`);
  });
});

// circle
describe('circle', () => {
  test('correct', () => {
    const shape = new Circle();
    var color = ('blue');
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle height="200" width="300" cx="150" cy="100" r="80" fill="${color}"/>`);
  });
});

// square
describe('square', () => {
  test('correct', () => {
    const shape = new Square();
    var color = ('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect height="200" width="200" x="50" fill="${color}"/>`);
  });
});
