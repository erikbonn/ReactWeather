///// Examples of arrow functions:

var names = ['Andrew', 'Julie', 'Jen'];

names.forEach(function (name) {
  console.log('forEach', name);
});

// /////now simplify it with arrow functions
names.forEach((name) => {console.log('arrowFunc', name)});
//
// /////even more concise:
names.forEach((name) => console.log(name));


///////// The return value is always whatever comes of the code after the arrow:
var returnMe = (name) => name + '!';
console.log(returnMe('Erik'));

//////// arrow functions take on their parent's 'this' binding.
//////// old way won't work cuz this refer's to parent's this, which it doesn't have access to inside the inner function:
var person = {
  name: 'Andrew',
  greet: function () {
    names.forEach(function (name) {
      console.log(this.name + ' says hi to ' + name)
    });
  }
};

///////arrow function way:
var person = {
  name: 'Andrew',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    });
  }
};

person.greet();

///////boring way:
function add (a, b) {
  return a + b;
}
console.log(add(1,3));
console.log(add(9,0));

////// Cool way:
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(2, 4), "cool way");

///// Coolest way:
var addExpression = (a,b) => a + b;
console.log(addExpression(1, 7), 'COOLEST WAY');
