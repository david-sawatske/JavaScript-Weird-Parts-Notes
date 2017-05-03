// 30 //

// First Class Funcions - Everything that you can do with other types, you can do with functions.
//  => Assign then to variables, pass them around, create them on the fly

// Functions are objects - has all features of object, plus special properties
//  => can attach primitives, objects, other functs
//  => also can have optional name, invocable code (where the lines of code are written)

function greet() {      // this is creating a function object with the special
    console.log('hi');  // properties of name ('greet') and code (console.log('hi'));
}

// since the function is an object, we can add properties for it with dot notation
greet.language = 'english';
console.log(greet);           // => { [Function: greet] language: 'english' }
console.log(greet.language);  // => english


// 31 //

// Function Statements and Function Expressions

// Expression - a unit of code that results in a value (doesn't have to be saved to var)

// Statements - a unit of code that does work w/o returning an obj

a = 3; 1 + 2; a = { greeting: 'hi' }; // these are all expressions (returns value)

if (a === 3) {  // the if statement itself is a statement
                //  => even though the (a === 3) within the statement is an
}               //     expression


// Function Statement ex - it is placed in memory (hoisted) with name but does
//                         not return a value until statement is executed
//                         ie the invocation of the special code property
function greet() {
  console.log('hi');
}

// Function Expressions - function object is created is placed into memory by = operator and knows
//                        the location of the variable. without a name property (anonymous function),
//                        but  with the code property (console.log('hi');)
var anonymousGreet = function() {
  console.log('hi');
}

// to envoke the anonymous function, need to point at it and tell to run it's code
anonymous(); // the variable knows where the funciton object lives in memory
//  => the envocation must happen after the creation because the var anonymousGreet
//     is initially set to undefined as only the variable has been hoisted


// Another Function Statement
function log(a) {
  console.log(a);
}
// literals that are created on the fly
log(3);
log('hello');

// object created on the fly
log({
  greeting: 'hi'
});

// function expression create function object on the fly
log(function() {
    console.log('hi');
});
