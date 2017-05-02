// 08 //
// Creation and Hoisting //

// Will this throw error?
b();
console.log(a);

var a = 'hello';

function b() {
  console.log("called b")
}
// due to Hoisting this returns 'undefined' for console.log(a), not error or 'hello'

// Execution Context - Two Phases//
// CREATION PHASE - we have Global Object, 'this', Out Env
// => parser recognizes where/ sets up memory space for vars and functs that
//    have been created (this is called Hoisting)
// => for a function, it's name and the code are stored in mem space
// => for a var, the value of the var is not set up until execution phase
//    - all vars are set to placeholder 'undefined' until then


// 09 //
// undefined - a special value in JS stating the var has not been set

// 10 //
// EXECUTION PHASE - has everything in CREATION, now it runs our code
// => code run line by line, and compiled for the computer

function b() {
  console.log("called b")
}
b();              // => "called b"

console.log(a);   // => indefined (var in creation phase)

var a = 'hello';
console.log(a);   // => "hello" (var in execution phase)


// 11 //
// Single Threaded - one command is executed at a time
// Syncronous Execution - one line executed at a time in order
