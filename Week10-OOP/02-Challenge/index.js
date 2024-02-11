// install inquirer v 8.2.4
// npm i inquirer@8.2.4
const inquirer = require('inquirer'); // require inquirer
const fs = require('fs'); // require fs

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
        name: 'textColour',
        message: 'Enter a text colour (keyword or hexadecimal number)',
    },
    // Select a shape for the logo
    {
        type: 'checkbox',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape',
        message: 'Select a shape for the logo',
    },
    // Enter a shape colour (keyword or hexadecimal number)
    {
        type: 'input',
        name: 'shapeColour',
        message: 'Enter a shape colour (keyword or hexadecimal number)',
    },
];

// Generates logo.svg file, should match the instructions and be 200 x 300 px
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// function to prompt questions and store user inputs
function init() {
// questions are prompted and the answers are parsed in to the generateMarkdown js file, and written to the README
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', generateMarkdown(answers));
        // “Generated logo.svg” message shows
        console.log('Generated logo.svg')
    });
}

// call initialise function
init();
