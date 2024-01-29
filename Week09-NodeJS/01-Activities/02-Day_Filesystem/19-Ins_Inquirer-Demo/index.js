const inquirer = require('inquirer');

inquirer // takes in array of object to be asked of user
  .prompt([ // prompt is a function of the library
    {
      type: 'input', // objects, documentation might expect a type, message and name properties
      message: 'What is your user name?', // shown to user
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) => // after above thing finished, this will run, arrow function
    response.confirm === response.password
      ? console.log('Success!') // response
      : console.log('You forgot your password already?!')
  );
