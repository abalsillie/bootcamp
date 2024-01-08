$(function () {

  // define elements
  var currentDayEl = $('#currentDay'); // current day display element
  var scheduleDisplayEl = $('#container-lg'); // schedule display element
  var scheduleTextEl = $('.description'); // schedule text element
  var scheduleBlockEl = $('.time-block'); // time block element
  var saveBtn = $('.saveBtn'); // save button element

  // display current date at top of page
  function displayDay() {
    var rightNow = dayjs().format('dddd, MMMM D, YYYY');
    currentDayEl.text(rightNow);
  }

  var presentTime = dayjs().format('H'); // define the hour right now

  // display row colour based on whether the time is in the past, present or future
  function colourDisplay() {
    scheduleBlockEl.each(function() {
      var scheduleHour = parseInt(this.id);
      if (scheduleHour == presentTime) {
        $(this).addClass('present');
      } else if (scheduleHour < presentTime) {
        $(this).addClass('past');
      } else {
        $(this).addClass('future');
      }
    });
  };

  // listener for click events on the save button, save user input to local storage
  function scheduleSave(event) {
    event.preventDefault(); // prevents page refresh
    saveBtn.on('submit', function() {
      var scheduleTime = $(this).parent().attr('id');
      var scheduleText = $(this).siblings(scheduleTextEl).val().trim;
      localStorage.setItem(scheduleTime, scheduleText);
    });
  };

  // reads schedule from local storage and returns text
  scheduleBlockEl.each(function() {
    var scheduleTime = $(this).attr('id');
    var scheduleText = localStorage.getItem(scheduleTime);
    $(this).children(scheduleTextEl).val(scheduleText).trim;
  });

  displayDay(); // call display day function
  colourDisplay(); // call the colour display function
  scheduleSave(); // call the schedule save function
  displaySchedule(); // call the display schedule function
});
