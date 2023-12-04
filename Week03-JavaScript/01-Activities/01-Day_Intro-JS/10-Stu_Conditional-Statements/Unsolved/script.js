// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25); // false 50 > 25
var expression2 = (x > 50); // false 50 >= 50

// If 1 AND 2 are true
if (expression1 && expression2) {
    console.log("True ✅ True ✅")

// If just 1 is true
  } else if (expression1) {
    console.log("True ✅ False ❌")

// If just 2 is true
  } else if (expression2) {
    console.log("False ❌ True ✅")
// If both are false
  } else {
    console.log("False ❌ False ❌")
  }