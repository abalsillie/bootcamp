// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var projectDateInputEl = $('#project-date-input');

// handle displaying the time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

// Reads projects from local storage and returns array of project objects.
// Returns an empty array ([]) if there aren't any projects.
function readProjectsFromStorage() {
  var projects = localStorage.getItem('projects');
  if (projects) {
    projects = JSON.parse(projects);
  } else {
    projects = [];
  }
  return projects;
} // saving object with 3 variables (line 95) into string and then convert back to an object

// Takes an array of projects and saves them in localStorage.
function saveProjectsToStorage(projects) {
  localStorage.setItem('projects', JSON.stringify(projects)); // replacing old set item with new one
}

// Gets project data from local storage and displays it
function printProjectData() {
  // clear current projects on the page
  projectDisplayEl.empty();

  // get projects from localStorage
  var projects = readProjectsFromStorage();

  // loop through each project and create a row
  for (var i = 0; i < projects.length; i += 1) {
    var project = projects[i];
    var projectDate = dayjs(project.date);
    // get date/time for start of today
    var today = dayjs().startOf('day');

    // Create row and columns for project
    var rowEl = $('<tr>'); // selecting tr element
    var nameEL = $('<td>').text(project.name); // selecting td element
    var typeEl = $('<td>').text(project.type);
    var dateEl = $('<td>').text(projectDate.format('MM/DD/YYYY'));

    // Save the index of the project as a data-* attribute on the button. This
    // will be used when removing the project from the array.
    var deleteEl = $(
      '<td><button class="btn btn-sm btn-delete-project" data-index="' +
        i +
        '">X</button></td>'
    );

    // add class to row by comparing project date to today's date
    if (projectDate.isBefore(today)) {
      rowEl.addClass('project-late');
    } else if (projectDate.isSame(today)) {
      rowEl.addClass('project-today');
    }

    // append elements to DOM to display them
    rowEl.append(nameEL, typeEl, dateEl, deleteEl);
    projectDisplayEl.append(rowEl);
  }
}

// Removes a project from local storage and prints the project data
function handleDeleteProject() {
  var projectIndex = parseInt($(this).attr('data-index'));
  var projects = readProjectsFromStorage();
  // remove project from the array
  projects.splice(projectIndex, 1);
  saveProjectsToStorage(projects);

  // print projects
  printProjectData();
}

// Adds a project to local storage and prints the project data
function handleProjectFormSubmit(event) { // event is 'submit' see below line 115
  event.preventDefault(); // prevent refresh

  // form input variables
  var projectName = projectNameInputEl.val().trim(); // trim name incase of space as text field
  var projectType = projectTypeInputEl.val(); // don't need to trim select input as is drop down
  var projectDate = projectDateInputEl.val(); // date input

  var newProject = { // create a new object, makes it easier to save in local storage
    name: projectName,
    type: projectType,
    date: projectDate,
  };

  // add object to local storage
  var projects = readProjectsFromStorage(); // calling function above (line 17) to load existing records
  projects.push(newProject); // pushing new project to string, replacing in local storage
  saveProjectsToStorage(projects); // function to save project to local storage

  // print project data
  printProjectData();

  // clear the form inputs
  projectNameInputEl.val('');
  projectTypeInputEl.val('');
  projectDateInputEl.val('');
}

projectFormEl.on('submit', handleProjectFormSubmit); // if event submit is triggered, then call handleProject function

// Use jQuery event delegation to listen for clicks on dynamically added delete
// buttons.
projectDisplayEl.on('click', '.btn-delete-project', handleDeleteProject);

displayTime(); // calling display time function
setInterval(displayTime, 1000); // setting interval to be 1000 miliseconds

printProjectData();
