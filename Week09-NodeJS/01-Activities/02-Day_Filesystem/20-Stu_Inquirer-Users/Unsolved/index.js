const inquirer = require('inquirer'); // setting inquirer var
const fs = require('fs'); // making use of fs

// read inquirer documentation
// tells us we need type, name, message

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'checkbox',
            message: 'What languages do you know?',
            name: 'languages',
            choices: ['HTML', 'JS', 'CSS'],
        },
        {
            type: 'checkbox',
            message: 'What is your preferred method of communication?',
            name: 'comms',
            choices: ['Phone', 'Email', 'Mail'],
        }
    ])
    .then((answers) => {
        console.log('Name: ${answers.name}, Languages: ${answers.languages[0]}, Comms: $(answers.comms)'
        );
        // const fileName = '${answers.name.toLowerCase().split(' ').join('')}.json'; // parametres changed to variables
        fs.writeFile(fileName, JSON.stringify(answers), (err) => // name of file, data to be written, callback after
            err ? console.error(err) : console.log('Success')
      );
    });
