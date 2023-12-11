// Refers to browser Window, all elements can be called in browser Window
console.log(this);

// Refers to Window object/ global object
function helloThis() { 
   console.log("Inside this function, this is " + this);
   }

// This is only for this particular object only, child object
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10);
   }
};

// This is only for this particular object only, investment object, inside investor object
var investor = {  
  name: "Cash Saver",
  investment: { // A sub-object of investor
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// Calling the function helloThis
helloThis();

child.ageTenYears(); // Calling function inside child object
investor.investment.investmentGrowth(); // Calling investment growth function inside investment object, which is inside investor object
