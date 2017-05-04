// 36 //

// Function Overloading - having funct of same name w- diff number of params
//   => does not work if JS as functions are objects

function greet(firstname, lastname, language) {

    language = language || 'en';

    if (language === 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }

    if (language === 'es') {
        console.log('Hola ' + firstname + ' ' + lastname);
    }

}
// a more simple function call version where less information is passed
function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'es');
}

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');


// 37 //

// Syntax Parsers - intermediate that translates code so the computer can understand
//  => done by the JS engine in the browser
//  => goes through char by char, throws error if necessary, even makes changes
//     - this happens before code execution


// 38 //

// Why is it 'optional' (not truly) to type semicolons?
// Automatic Semicolon Insertion - knowing what the language expects, when the JS
//                                 engine sees a character turn (enter hit) that is
//                                 not allowed, it inserts a semicolon

function getPerson() {

    return   // the parser sees char turn, inserts a ;, causing a return of undefined
    {        // to fix, bring curly brace up a line 'return { ...'
        firstname: 'Tony'
    }

}

console.log(getPerson()); // => undefined


// 39 //

// Whitespace - invisable chars that create literal 'space' in your code
//  => carriage returns, tabs, spaces
//  => the JS syntax parser is very liberal in what it allows

var
  // comment about code for future ref <- this is ignored
  firstname,
  // more to be ignored by parser
  lastname,
  // two lines
  // to be ignored
  language;

var person = {
  // can even be done inside object literal syntax
  firstname: 'John',
  lastname: 'Doe'
}

console.log(person);
