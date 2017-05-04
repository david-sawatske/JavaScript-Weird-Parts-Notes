// 42 //

// Closures - Execution Context has 'closed in' it's outer variables

function greet(whattosay) {

  return function(name) {
    console.log(whattosay + ' ' + name);
  }
}
// here we invoke a function (greet) that returns an anonymous function, which
// is then invoked with '('Tony')'
greet('Hi')('Tony');


// To better see what is going on:
function greet(whattosay) {

  return function(name) {
    console.log(whattosay + ' ' + name);
  }
}

var sayHi = greet('Hi'); // set var to the return (anonymous fuct) of funct greet
sayHi('Tony'); // => 'Hi Tony' still works!

// how does the sayHi function know the value of the 'whattosay' var?
//  => that var exists in the greet(whattosay) function which has already executed

// the Execution Stack
// 1. Global Execution Context
// 2. var sayHi ... when hit, invokes new greet() Execution Context (top of stack)
//    => 'whattosay' variable is in its Variable Enviornment
//    => creates new function object (on the fly) and returns it
//  ** the greet() Execution Context is popped off the stack **
//  ** back inside the Global Execution Context **
// BUT the memory space which holds greet() Variable Enviornment is still there
// 3. invoke anonymous function that 'sayHi' is pointing at, creating new Exe Context
//    => the engine looks for the 'whattosay' var up the scope chain through
//       the outer lexial enviornment reference (oler)
//    => the 'sayHi' Exe Cont still has a oler to greet() Variable Enviornment

// This is to say that Exe Cont has 'closed in' it's outer variables
// The JS engine will always make sure the current Ex Cont will have access
// to the variables it needs to (scope is intact)


// 43 //

// Closure Example - pushing three fuct objs into array with in a loop
function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {   // this line only creates with the code property
        arr.push(function() {       // object, but does not execute the function.
            console.log(i);         // they invoked starting on line 68, at which
        });                         // time, i === 3
    }

    return arr;
}

var fs = buildFunctions(); // set the array output to var fs

// What happens when the functions created in the loop are invoked?
fs[0](); // => 3
fs[1](); // => 3
fs[2](); // => 3

// Under the hood:
// 1. Global Execution Context
//    => includes variables 'buildFunctions' and 'fs'
// 2. buildFunctions() Execution Context
//    => includes variables 'i' and 'arr'
//    => the loop runs and creates 3 anonymous functions and pushes them to arr
//  ** the  buildFunctions() Execution Context is popped off stack **
//  ** back inside the Global Execution Context **
// AGAIN the memory space which holds buildFunctions() Variable Enviornment is still there
// 3. fs[0], fs[1], fs[2] are invoked, one after the other
//    => it goes up the Scope Chain (it's Outer Reference) to find the var 'i'
//    => finds 'i' because the Variable Enviornment for buildFunctions() is still in memory


// What if we did want the output to equal 0, 1, 2?
// In new ES6
function buildFunctions2() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        let j = i;                    // this var j will be scoped to the block
        arr.push(function() {         // and will be a new var in memory
                    console.log(j);
                }
        )

    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

// Older solution for ES5
// a seperate Execution Context is needed for each of the functions pushed to arr
//   => we need to execute a function on the fly
//      - Immediately Invoked Funciton Expression (IIFE)
function buildFunctions2() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(                    // pushing the result of the funciton(j)
            (function(j) {           // creation of the IIFE (new Ex Context)
                return function() {
                    console.log(j);  // 'j' is found within it's own Exe Context
                }
            }(i))                    // invocation of the IIFE, pushing
        )                            // console.log(j); to the arr
    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();
