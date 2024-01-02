// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
var graduationDate = dayjs('2025-07-12').format('MMM D YYYY'); // store the date in a variable, dayjs calls the library
$('#1a').text(graduationDate); // selecting ID 1a in HTML, inputting text

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
var dayName = dayjs('2027-01-01', 'YYYY-D-M').format('dddd');
$('#2a').text(dayName);

// TODO: 3. What is the current time in the format: hours:minutes:seconds
var currentTime = dayjs().format('hh:mm:ss');
$('#3a').text(currentTime);

// TODO: 4. What is the current Unix timestamp?
var unix = dayjs().unix();
$('#4a').text(unix);

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = dayjs.unix(1318781876).format('MMM D YYYY')
$('#5a').text(unixFormat);

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)
var targetDate = dayjs('2027-05-04')
var today = dayjs()
var days = targetDate.diff(today)
$('#6a').text(days);