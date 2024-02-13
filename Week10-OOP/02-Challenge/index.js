const inquirer = require("inquirer"); // pull in inquirer
const fs = require("fs"); // pull in fs for write to file function
const { Triangle, Circle, Square } = require("./lib/shapes.js"); // pull in shape classes from library

// generate prompt questions
const questions = [
	// Enter text for the logo (up to 3 characters)
	{
		type: 'input',
		name: 'text',
		message: 'Enter text for the logo (up to 3 characters)',
	},
	// Enter a text colour (keyword or hexadecimal number)
	{
		type: 'input',
		name: 'text-color',
		message: 'Enter a text colour (keyword or hexadecimal number)',
	},
	// Select a shape for the logo
	{
		type: 'list',
		choices: ['Circle', 'Triangle', 'Square'],
		name: 'shape-type',
		message: 'Select a shape for the logo',
	},
	// Enter a shape colour (keyword or hexadecimal number)
	{
		type: 'input',
		name: 'shape',
		message: 'Enter a shape colour (keyword or hexadecimal number)',
	},
];

// constructor function to render text and shape elements to logo.svg file
class Svg {
	constructor() {
		this.textElement = ''
		this.shapeElement = ''
	}
	setShapeElement(shape) {
		this.shapeElement = shape.render()
	}
	setTextElement(text, color) {
		this.textElement = `<text text-anchor="middle" x="150" y="125" font-size="60" fill="${color}">${text}</text>`
	}
	render() {
		return `<svg width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
	}
}

// write data to file
function writeToFile(fileName, data) {
	return fs.writeFileSync(fileName, data);
}

// function to prompt questions and store user inputs
async function init() {
	var svgString = ""; // empty string to save info
	var logoSvg = "logo.svg"; // logo file

	// questions are prompted
	const answers = await inquirer.prompt(questions);

	// text input
	user_text = answers.text;

	// text colour input
	user_text_color = answers["text-color"];

	// shape type input
	user_shape_type = answers["shape-type"];

	let user_shape;
	if (user_shape_type === "Square") {
		user_shape = new Square();
	}
	else if (user_shape_type === "Circle") {
		user_shape = new Circle();
	}
	else if (user_shape_type === "Triangle") {
		user_shape = new Triangle();
	}

	// shape colour input
	user_shape_color = answers.shape;
	user_shape.setColor(user_shape_color);

	// add the shape and text elements to svg
	var svg = new Svg();
	svg.setShapeElement(user_shape);
	svg.setTextElement(user_text, user_text_color);
	svgString = svg.render();

	// call write to file function and pass in data
	writeToFile(logoSvg, svgString);
	// “Generated logo.svg” message shows
	console.log('Generated logo.svg');
}

init(); // call initialise function
