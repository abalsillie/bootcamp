// TODO: Fix the `greet` function so that it returns the correct values.
function student(name, gradeYear) {
  const studentInfo = {
    name,
    gradeYear,
  };

  return {
    greet() {
      console.log(
        `My name is ${studentInfo.name} and I am in ${studentInfo.gradeYear} grade`
        // 'this' refers to global variable, so won't work
        // 'this' refers to greet function
      );
    },
  };
}

const newStudent = student('Dominique', '11th');
newStudent.greet();

module.exports = student;
