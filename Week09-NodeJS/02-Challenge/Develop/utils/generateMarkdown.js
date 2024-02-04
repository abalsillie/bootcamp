// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## License
  ${data.license}
  ## How to Contribute
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## Questions
  For questions, please contact: ${data.email}
  Review full github repo here: ${data.username};
};

module.exports = generateMarkdown;
