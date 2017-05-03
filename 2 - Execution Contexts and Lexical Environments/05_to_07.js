// 05 //
// Syntax Parser - Prog that reads code and determines what it does and if
//                 the grammar is valid
// your code => compiler/ interpreter (parser is a part) => computer instructions
//   => your code is not being given to the computer, rather the translation
//      as passed by the compilier/ interpreter

// Lexical Enviornment - Where something sits physically in the written code

// Execution Context - A wrapper to help manage the code that is running
//   => the lexical env that is currently running


// 06 //
// Name/ Value Pair - A name that maps to a unique value

// Object (in JS) - A collection of name value pairs



// 07 //
// Global Execution Context

// Creates for you a Global Object (key, val pairs) and 'this' variable
//   => in browser, the global object is the window object
//   => at global level global object === 'this' (ie window object)

// these vars and functions are not within a funtion, so they are global in
// scale and are attached to the global object.
var a = 'hello';

function b() {

}

// Execution Context - is created when JS code is executed
// contains Object, 'this' var, Outer Env., Your Code
//    => When global, no Outer Env.
