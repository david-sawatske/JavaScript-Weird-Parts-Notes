// 44 //

// Function Factories - a function that makes/ returns things for us

// here we are passing the 'language' parameter to outer function and
// returning the inner function
//   => as seen, 'language' will be trapped in the closure and available
//      up the Scope Chain even though makeGreeting() Ex Context is gone
function makeGreeting(language) {
  return function(firstname, lastname) {
    if (language === 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }
//
    if (language === 'es') {
        console.log('Hola ' + firstname + ' ' + lastname);
    }
  }
}

// the two below have their own Execution Context (diff spots in memory)
//   => even though it is the same makeGreeting() function, new Exe Context
//   => the function that is returned from each depends on what language is passed
var greetEnglish = makeGreeting('en'); // there are closures inside each of the functs
var greetSpanish = makeGreeting('es'); // pointed to by the vars. this makes available
                                       // the language variable (specific to that closure)
                                       // during the function calls below

// now we can call the functions with the vars that point to those indiv spots in memory
//    => the vars know to which Ex Cont. to point to, even though it no longer exists
greetEnglish('John', 'Doe'); // => 'Hello John Doe' - finds 'en' in the scope chain
greetSpanish('John', 'Doe'); // => 'Hola John Doe' finds 'es' in the scope chain


// 45 //

function sayHiLater() {
  var greeting = 'Hi';

  setTimeout(function() {  // built in JS function

    console.log(greeting); // thanks to the closure, it has access to greeting var
                           // even though sayHiLater has already been executed
  }, 3000);

}
sayHiLater();
