// install inquirer v 8.2.4
// npm i inquirer@8.2.4
const inquirer = require('inquirer'); // require inquirer
const fs = require('fs'); // require fs
const generateMarkdown = require('./utils/generateMarkdown.js'); // linking to generateMarkdown js file

// refer to npmjs.com/package/inquirer documentation
// generate prompt questions
const questions = () => {
    return inquirer.prompt([
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
    ]);
};

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile('./README.md', fileName, data);
}

// Function to initialize app
function init() {
    questions()
        .then((answers) => writeToFile('README.md', generateMarkdown(answers)))
        // "generating README" message will show
        .then(() => console.log('Generating README...'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
