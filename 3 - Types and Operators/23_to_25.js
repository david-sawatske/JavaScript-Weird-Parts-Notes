// 23 //

// Existance & Boolean

// all implied lack of existance are covert to false
Boolean(undefined) // => false
Boolean(null) // => false
Boolean('') // => false

// how to use to you advantage?

var a; // initally set to undefined
// code to get some value from the internet
if (a) {
  console.log('Something is there.')
}
// a = undefined unless the value for a is found

// one caveat, since:
Boolean(0) // => false

var a;
// code to get some value from the internet
if (a || a === 0) {
  console.log('Something is there.')
}


// 24 //

// Default Values

function greet(name) {
    name = name;
    console.log('Hello ' + name);
}
greet('Tony'); // => Hello Tony
greet(); // => Hello undefined (the + operator coerced undefined to 'undefined')

// to set a default value
function greet(name) {
    name = name || '<Your name here>';
    console.log('Hello ' + name);
}
greet('Tony'); // => Hello Tony (because 'Tony' can be coerced to true)
greet(); // => Hello <Your name here> (because <Your...> can be coerced into true)

// the || (or) operator/ function
undefined || 'hello' // => 'hello' (returns the value that can be coerced to true)
'hi' || 'hello'      // => returns the first that is coerced to true


// 25 //
// Framework Aside - see video about colisions
