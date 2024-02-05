// install inquirer v 8.2.4
// npm i inquirer@8.2.4
const inquirer = require('inquirer'); // require inquirer
const fs = require('fs'); // require fs
const generateMarkdown = require('./utils/generateMarkdown.js'); // linking to generateMarkdown js file

// refer to npmjs.com/package/inquirer documentation
// generate prompt questions
const questions = [
    // What is your github username?
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
    },
    // What is your email address?
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    // What is your project name? # (Project Title)
    {
        type: 'input',
        name: 'project',
        message: 'What is your project name?',
    },
    // What is your project description? (## Description)
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
    },
    // What are the steps required to install this app? (## Installation)
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install this app?',
    },
    // What are the steps to use this app? (## Usage)
    {
        type: 'input',
        name: 'usage',
        message: 'What are the steps to use this app?',
    },
    // Who are the collaborators? (## Credits)
    {
        type: 'input',
        name: 'credits',
        message: 'Who are the collaborators?',
    },
    // What kind of license should your project have? (## License)
    {
        type: 'input',
        name: 'license',
        message: 'What kind of license should your project have?',
    },
    // What does the user need to know about contributing? (## How to Contribute)
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing?',
    },
    // How should the user test this app? (## Tests)
    {
        type: 'input',
        name: 'tests',
        message: 'How should the user test this app?',
    },
];

// function to write README file
// fs.writeFileSync will find the README and populate data https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// function to prompt questions and store user inputs
function init() {
// questions are prompted and the answers are parsed in to the generateMarkdown js file, and written to the README
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', generateMarkdown(answers));
        // "generating README" message should show
        console.log('Generating README...')
    });
}

// call initialise function
init();
