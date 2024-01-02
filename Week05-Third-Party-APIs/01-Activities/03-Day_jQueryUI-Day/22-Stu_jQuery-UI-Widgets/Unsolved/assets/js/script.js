var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// provide js link and css link (jquery UI uses CSS features)
// autocomplete widget, select from list of skills (refer to link)
$(function() {
  var skillList = ['JS', 'HTML', 'CSS'];
  $('#skill-name').autocomplete({ // selecting element with ID skill-name and changing it to autocomplete
    source: skillList
  });
});

// datepicker widget, select by month and year
// $(document).ready(function(){
  // insert jquery methods
// });
// OR
$(function() {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});