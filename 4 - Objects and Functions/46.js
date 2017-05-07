// 46 //

// Functions - a special type of object
//  all have acces to:
//  => name - optional
//  => invokable code
//  * also have access to special methods *
//  => call()  // these three methods below are have to
//  => apply() //  do with the 'this' var and the arguments
//  => bind()  //  you pass to the function

var person = {                 // defined using Object literal syntax
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {  // function expression

        var fullname = this.firstname + ' ' + this.lastname; // 'this' points to the
        return fullname;                                     // person obj
    }
}


var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());  // 'this' points to Global Obj
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');

}

logName(); // => fails as 'this' does not poin to the person object, for which
           //    the getFullName() function exists


// How to control what the 'this' keyword points to?
var logPersonName = logName.bind(person); // calling the method bind on the obj logName
                                          // and pass what obj we want as the 'this' var
                                          // by making a copy of the funt as new obj
logPersonName('en'); // call copy of funct created with 'bind'

// Could also have created the function on the fly and called 'bind(person)'
var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());  // 'this' points to Global Obj
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');

}.bind(person);

logName(); // this point to a copy of 'logName' with 'this' var bound to 'person'


// Other way to specifiy 'this' var
logName.call(person, 'en', 'es');    // call lets you decide the 'this' var
                                     // does not create copy, just executes
logName.apply(person, ['en', 'es']); // same as call, but want array of params
                                     // array can be more useful (math etc)

// Can also be done on the fly by wrapping ()
//  => parser then knows it a Funct Statement, not normal Funct Expression
(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');

}).apply(person, ['es', 'en']); // envoked with '.apply' or '.call'


// When would this be used?

// function borrowing - grab and use functions from other objects
var person2 = {         // without getFullName method
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));
// this borrows getFullName function from person object


// Function Currying - creating a copy of a funct with preset parameters
//   => this sets permanent values of the params when the copy is made

function multiply(a, b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2); // says var 'a' will always be a 2
console.log(multipleByTwo(4)); // => 8 - sets second param 'b' = 4

// what the above is essentially doing, setting var 'a' = 2
function multipleByTwo(b) {
  var a = 2;
  return a*b;
}

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4)); // => 12
