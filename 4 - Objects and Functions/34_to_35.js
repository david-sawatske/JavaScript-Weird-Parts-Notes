// 34 //

// Arrays - collections of anything

var arr = [
    1,                                 // number
    false,                             // boolean
    {
      name: 'Tony',                    // object
      address: '111 Main St.'
    },
    function(name) {                   // expression, not statement because it is
      var greeting = 'Hello ';         // inside the array deloration
      console.log(greeting + name);
    },
    "Hi there"                         // string
];

// call the function with the name attribute of the object stored in the array
arr[3](arr[2].name)


// 35 //

// 'arguments' and SPREAD

// When Execution Context is created - Var Env, Outside Env, 'this', 'arguments'
//  => arguments contains a list of all the parameters passed to a function
//  => JS gives you a keyword 'arguments' that contains them all

function greet(firstname, lastname, language = 'en') {  // sets default for english
  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);     // given automatically by JS
  console.log(arguments[0]);  // asking for the first element
}

greet('John'); // although we aren't passing the expected args, JS will not error
         // because hoisting sets them
// => John
//    undefined
//    en
//    { '0': 'John' } this is all the passed params in an array like structure
//    John


// Spread Parameters (new thing)
function greet(firstname, lastname, language, ...other) {
  console.log(other)
}
// now if additional params are added, a JS array of those params is created
greet('John', 'Doe', 'es', '11 Main St.', 'NY')
// => [ '11 Main St.', 'NY' ]
