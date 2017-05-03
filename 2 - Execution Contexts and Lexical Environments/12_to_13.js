// 12 //

// Invocation - running/ calling a function (tell engine to run it)
// => done in JS by using ()

function b() {
}
function a() {
  b();
}

a();

// When this is run, a Global Execution Context is created
// => Parser parses code, the compiler creates functs/ vars and stores in memory
// The invocation first happens on line 12 (both create and execute for all invos)
//  1. New execution contextfor a() is placed on top of the execution stack
//  2. Another new execution context for b() is placed on top of the the execution stack
//     => only when b() is finished, it is popped off the stack (back to a())


// 13 //

// Variable Enviornment - where the var lives and how they relate to each other in memory

function b() {
  var myVar;
}
function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();

// 1. Glob Ex Cont is created (var myVar = 1; is put into memory)
// 2. Hits invocation of a() an new Ex Cont is created
//    => the myVar is put into a() variable context enviornment (var myVar = 2)
// 3. b() excution context with own var env (var myVar = undefined)
//    => each ex cont has own memory space for it's variables
