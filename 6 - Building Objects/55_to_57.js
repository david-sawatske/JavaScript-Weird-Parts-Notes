// 55 //

// 'new' and Functions

// when creating a Function Constructors, what if you forget 'new'
var jane = new Person('jane', 'doe');
var jane = person('jane', 'doe');
// still a function and gets executed and var gets set to undefined

// Follow the convention of capitalizing the names of Function Constructors


// 56 //

// Built-In Function Constructors - create objects that contain primitives

var a = new Number(3);

console.log(a); // => [Number: 3]
//  Returns Number Object (with prototype) with Primitive Value of 3 boxed inside
//    => can call build in methods for the prototype
console.log(a.toFixed(2)) // => "3.00"

var a = new String("john");
//  Returns String Object (with prototype) Primitive Value of 'john'
//    => can call build in methods for the prototype
console.log(a.indexOf('h')) // => 2


// How to add a feature to all strings?
String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
}
console.log("John".isLengthGreaterThan(3)); // => true


// 57 //

// Built-In Function Constructors - dangerous for primitive data types

var a = 3
var b = new Number(3)

console.log(a == b)  // => true  - uses coersion
console.log(a === b) // => false - not even same type
