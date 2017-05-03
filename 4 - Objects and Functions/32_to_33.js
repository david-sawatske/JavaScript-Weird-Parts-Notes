// 32 //

// By Value (primitives) - referencing one value to another by copying the value
//                         into two spots in memory
var a = 3;
var b;

b = a; // these point to two different spots in memory
a = 2; // changing the value for a

console.log(a); // => 2
console.log(b); // => 3

// By Reference (all objects) - two things point to the same place in memory
var c = { greeting: 'hi'};
var d;

d = c; // this is pointing d to the same place in memory as does c

c.greeting = 'hey there'

console.log(c); // => { greeting: 'hey there' }
console.log(d); // => { greeting: 'hey there' }


// By Reference (even as parameters)
function changeGreeting(obj) {
  obj.greeting = 'Hola'; // mutating the object
}

changeGreeting(d); // parameters to a funct are passed by reference, not value
console.log(c); // => { greeting: 'Hola' }
console.log(d); // => { greeting: 'Hola' }


// equals operator sets up new memory space (new address in mem)
c = { greeting: 'howdy'} // this is setting 'c' to a new value with new location in memory
console.log(c); // => { greeting: 'howdy' } this is the new value that was created with =
console.log(d); // => { greeting: 'Hola' } remains pointing to the original value


// 33 //

// Objects, Function and 'this'

// Execution Context is created (CREATION PHASE) - focuses on the running on the code
//                                                 portion of the function object
// has Variable Enviornment (where vars created inside that function live)
// has refernce to it's Outer Lexial Enviornment (tells how to look down scope chain)
// also gives us the variable 'this' who's pointing depends on how the funct is invoked

// What will 'this' be in function expression?
console.log(this); // in browser, shows Window object as 'this' points to the global object

function a() {
  console.log(this);
}
// now invoke 'a' (run the code property, creating the execution context
// which creates 'this')
a(); // also Window object when simply invoking the function

var b = function() {
  console.log(this);
}
b(); // also Window object when simply invoking the function


// What about an object method?
// when a function is a method attached to an object, the 'this' keyword is
// attached to the object inside which the method resides
var c = {
  name: 'the c object',
  log: function() {
    this.name = 'Updated c object';
    console.log(this);
  }
}

c.log(); //returns the object
// => { name: 'Updated c object', log: [Function: log] }


// Bug in JS?

var c = {
  name: 'the c object',
  log: function() {
    this.name = 'Updated c object';
    console.log(this);

    var setname = function(newname) {
      this.name = newname;
    }
    setname('update c object again');
    console.log(this);
  }
}

c.log();
// => { name: 'Updated c object', log: [Function: log] }
// => { name: 'Updated c object', log: [Function: log] }
// this idicates that 'the setname('update c object again');' didn't do anything
//  => looking into it, on line 94, the = created and added the name property
//     on the global object. meaning that 'this' points to the global object

// what to do to ensure unintended error?
var c = {
  name: 'the c object',
  log: function() {
    var self = this; // the 'self' var will point to same spot as 'this' keyword
                     // which is pointing to the 'c' object
    self.name = 'Updated c object';
    console.log(self);

    var setname = function(newname) {
      self.name = newname;  // engine looks down the scope chain to find 'self'
    }
    setname('update c object again');
    console.log(self);
  }
}

c.log();
// => { name: 'Updated c object', log: [Function: log] }
//    { name: 'update c object again', log: [Function: log] }
