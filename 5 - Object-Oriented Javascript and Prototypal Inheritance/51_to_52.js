// 51 //

// Everything in JS is an Object (or a primitive)
//    => all have a prototype (except base object)

var a = {};
var b = function() { };
var c = [];

console.log(a.__proto__) // => Object{} (this is the base object)
                         //    - the bottom of the prototype chain
                         //    - has properties and methods

console.log(b.__proto__) // => function Empty() {} (empty function obj)
                         //    - this is the prototype of all functions
                         //    - has familiar methods apply, bind, call

console.log(c.__proto__) // => []
                         //    - this is the prototype of all arrays
                         //    - has properties and methods (push, length etc)

console.log(c.__proto__.__proto__) // => Object{} (this is the base object)


// 52 //

// Reflection - an object can look at itself, listing and changing its
//              it's properties and methods
// the object looks at is metadata to reflect

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

for (var prop in john) {  // loops over every member of the obj john/ assign to prop
  console.log(prop + ': ' + john[prop]); // grabs value on prop in john object
}

// the for in reached out for all props and method in the protos as well
// => firstname: John
//    lastname: Doe
//    getFullName: function () {
//         return this.firstname + ' ' + this.lastname;
//      }

// what if you just want the props and methods for the object (not it's protos)
for (var prop in john) {
  if (john.hasOwnProperty(prop)) {  // this method (hasO..) sits on base object
    console.log(prop + ': ' + john[prop]); // only log prop in on john object
  }
}


// Extend
//

for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

// jim and jane are not in the prototype chain
//    => useful individually, but not as protos of eachother
var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}

// use the underscore library to extend
_.extend(john, jane, jim); // takes props and methods of jane/ jim, adds to john
console.log(john);
// this phycally places the properties on the john object
//  - not just a reference
