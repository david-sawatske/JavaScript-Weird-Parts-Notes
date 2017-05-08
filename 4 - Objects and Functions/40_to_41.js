// 40 //

// Immediately Invoked Funciton Expression (IIFE)

// we've seen:

// Function Statement - put in memory when seen during execution
function greet(name) {
  console.log('hello ' + name);
}
greet('John'); // must be invoked to actually execute the code

// Funciton Expression - not put into memory initially, rather during execution
//  => creates object on the fly (function literal)
var greetFunc = function(name) { // here is when a funct obj is created
  console.log('howdy ' + name);
}
greetFunc('John'); // invoked using variable that points to that memory location


// Immediately Invoked Funciton Expression (IIFE)
// funciton is obj, so how can we invoke it at the point of creation (on the fly)
var greeting = function(name)  {
    return 'hi ' + name;
}('John'); // the parenthesis invokes function immedeatly after it's creation

console.log(greeting);

// These are vaid JS and do not throw an error (but don't do anything)
'test string';
3;
{ name: 'John'}

// a plain function would error as the parser saw 'function' and expects that it
// is a non-annomous function statment (seen above)
//  => 'trick' parser by making 'function' not the first thing it sees on that line

// Classic IFFE use
// this is for when you want a funciton expression, instead of a function statement
//   => JS engine knows that only expressions use parenthesis
(function(name) {
    var greeting = 'sup';
    console.log(greeting + ' ' + name);
}('John')); // () makes it an IIFE which creates function and runs it at the same time


// 41 //

// IIFE and Safe Code - making code safe for reuse (common in libraries and functions)

(function(name) {
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
}('John'));

// What is happening under the hood?
// 1. Global Execution Context when code is first loaded (nothing is in it)
// 2. it hits the func expression part, the anonymous funct obj is created
// 3. then it sees the invocation, execution context is added to execution stack
//    => the code is run, line-by-line
//      - var greeting is added to that exe context's variable enviornment (not the global)

// Take away - wrapping in IIFE insures that code does not interfere with, crash
//             into, or be interfered by any other code in the application


// IIFE protects from putting something into global context, but what if we want to?
//  => pass reference to it into the IIFE

(function(global, name) {
    var greeting = 'Hello';
    global.greeting = 'Changed'; // *intentionally* affect the global object
    console.log(greeting + ' ' + name);
}(window, 'John'));  // window is the global context in the browser
