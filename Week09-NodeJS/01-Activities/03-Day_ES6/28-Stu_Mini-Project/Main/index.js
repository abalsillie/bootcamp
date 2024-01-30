// npmjs.com/package/inquirer documentation

const inquirer = require('inquirer'); // require inquirer
const fs = require('fs'); // require fs

// referring to documentation there are mandatory properties, e.g. list (type, name, message are mandatory)

const generateHTML = ({ name, location, github, linkedin }) => // properties collected from prompts below
// passes objects as parametres, instead of individual values
// generateHTML is a function AFTER we get the input
// will actually generate the HTML file
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${location}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;

// copy from documentation npmjs.com/package/inquirer and then begin to edit
inquirer
  .prompt([ // input = text field
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  // store answers in the .then, automatic flow via inquirer, doesn't have to be called answers, could be anything
  .then((answers) => {
    const htmlPageContent = generateHTML(answers); // storing answers in a variable, passing in answers
  // generates HTML code and puts answers in file
  // fs writeFile is writing the file, adding page content from answer input, and adding an error
    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!') // message will log in the terminal
    );
  });
