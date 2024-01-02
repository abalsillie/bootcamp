var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function (name, date) {
  var listEl = $('<li>'); // creating element tag
  var listDetail = name.concat(' on ', date); // joining the name of the skill and the date
  listEl.addClass('list-group-item').text(listDetail); // adding class and text into element tag
  listEl.appendTo(skillsListEl); // particular element is being appended to another element tag
};

var handleFormSubmit = function (event) {
  event.preventDefault(); // preventing page from reloading

  var nameInput = nameInputEl.val(); // emptying the text box after you press submit
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit); // handleform has been called

// Autocomplete widget
$(function () {
  var skillNames = [
    'Bootstrap',
    'C',
    'C++',
    'CSS',
    'Express.js',
    'Git',
    'HTML',
    'Java',
    'JavaScript',
    'jQuery',
    'JSON',
    'MySQL',
    'Node.js',
    'NoSQL',
    'PHP',
    'Python',
    'React',
    'Ruby',
  ];
  $('#skill-name').autocomplete({
    source: skillNames,
  });
});

// Datepicker widget
$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

// Add interaction here
$(function() {
  $('#skills-list').sortable({ // making the skills-list sortable
    placeholder: "ui-state-highlight" // making placeholder text colour (pulled from jquery)
  });
});

// Skills can be sorted using drag-and-drop
// Placeholder text fills empty space where dragged element is placed
