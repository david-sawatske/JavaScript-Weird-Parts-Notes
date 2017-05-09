// 53 //

// Function Constructors - a normal function that is used to construct objects
//    => 'this' variable points to a new empty object, which is returned automatically

// To build an object: create it, give it properties/ methods and set it's prototype

function Person() {
  this.first = 'john';
  this.last = 'doe';
}

// create new object using the 'new' operator
//    => when we say 'new', an empty object is created.
//    => then it invokes the function
//       - invocation creates 'this', which points to the new empty object
//       - first and last are added to the empty object
//    => returns object created by new operator, unless something else specified

var john = new Person();
console.log(john); // => Person { first: 'john', last: 'doe' }

// what  if you want to create more people with same properties and methods?
//    => this is a new Person object, but it has the same first/ last as above
var jane = new Person();
console.log(jane); // => Person { first: 'john', last: 'doe' }

// have the function accept params that we can set, per object
//    => use parameters to tell funct what vals to place when constructing object
//    => each invocation using 'new' operator creates a new object
function Person(first, last) {
  this.first = first;
  this.last = last;
}

var jane = new Person('jane', 'doe');
console.log(jane); // => Person { first: 'jane', last: 'doe' }


// 54 //

// Function Constructors and .prototype
// All Functions have name (optional), invokable code, prototype (empty object)
//    => prototype is only used by the 'new' operator (as a Function Constructor)
//    => the prototype property of a function is *not* the prototype of the function
//       - it's prototype of any object created by the Function Constructor

function Person(first, last) {
  this.first = first;
  this.last = last;
}

Person.prototype.getFullName = function() {
  return this.first + ' ' + this.last;
}

// john and jane both point to Person.prototype as their __proto__
//    => both get access to the getFullName() method
var john = new Person('john', 'doe');
console.log(john);

var jane = new Person('jane', 'doe');
console.log(jane);

console.log(john.getFullName()); // => john doe
console.log(jane.getFullName()); // => jane doe

// we can add to the features to the Person.prototype at any time
//    => adds those features created by that Funct Const at once!
//    => john/ jane object looks down it's prototype chain
Person.prototype.getFormalFullName = function() {
  return this.last + ', ' + this.first;
}
console.log(john.getFormalFullName()); // => doe, john
console.log(jane.getFormalFullName()); // => doe, jane

// In good JS code you will see properties are set up inside Function Constructors
// but methods are sitting on the prototype

// Why not add getFullName() method in the 'Person' Funct Const?
//    => the Funct Const creates a new obj, so every obj would create its own copy
//       - this would add to each obj, taking up more memory space
// When added to the prototype, only one takes up memory space
