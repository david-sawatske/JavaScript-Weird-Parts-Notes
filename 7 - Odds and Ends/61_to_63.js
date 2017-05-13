// 61 //

// Initialization - dont be intimidated by large initializations
//    => they are a good way to set up a lot of info quickly

var people = [
    {
        // the 'john' object
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main St.',
            '222 Third St.'
        ]
    },
    {
        // the 'jane' object
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '333 Main St.',
            '444 Fifth St.'
        ],
        greet: function() {
            return 'Hello!';
        }
    }
]

console.log(people);


// 62 //

// typeof, instanceof

var a = 3;
console.log(typeof a); // => number (primative type (as a string))

var b = "Hello";
console.log(typeof b); // => string

var c = {};
console.log(typeof c); // => object

var d = [];
console.log(typeof d); // => object (because an array is an object)
console.log(Object.prototype.toString.call(d)); // => [object Array] (in a string)

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);              // => object
console.log(e instanceof Person);   // => true
// 'instanceof' tells if any instances of Person are found
// down the prototype chain

console.log(typeof undefined); // => undefined
console.log(typeof null);      // => object (a bug that has been around)

var z = function() { };
console.log(typeof z);    // => function


// 63 //

// Strict Mode - telling engine to implement extra rules
//    => one thing is that you must declare a var in order to set it
//    => must go on top of file or top of function

function logNewPerson() {
    "use strict";

    var person2;
    persom2 = {};
    console.log(persom2);
}

var person;
persom = {};
console.log(persom); // => ReferenceError: persom2 is not defined
logNewPerson();

// if 'use strict' was not present, persom is an empty object and person is
// undefined
