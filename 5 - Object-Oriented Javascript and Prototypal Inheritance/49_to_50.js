// 49 //

// Inheritance - one object gets access to the properties and methods of another

// Classical Inheritance - the most popular way things had been done
//    => very verbose

// Prototypal Inheritance - in JS
//    => flexible, extensible and easy to understand


// 50 //

// Prototype - all objects in JS (including functions) have a prototype property
//    => a reference to another object (could call proto)
//    => can itself point to another prototype
//       - prototype is on object, objects have prototypes
//    => objects can share the same prototype

// obj has a property (prop1)/ it's proto has property (prop2)
// call obj.prop2
//    1. dot operator looks down prototype chain for prop2 referenced on obj
//    2. next looks in obj's proto and looks for prop2 (found and returned)
//  * it looks like prop2 in on obj, but it is on obj's prototype
// obj's prototype has a prototype with a property prop3
//    => obj can then call obj.prop3

// if we have obj2 that points to the proto that holds prop2
//    => obj.prop2 & pbj.prop2 point to the same spot in memory
//       - objects can share the same prototype through prototype chain



var person = {
  first: 'default',
  last: 'default',
  getFullName: function() {
    return this.first + ' ' + this.last; // the Exe Cont when it creates the
                                         // 'this' var will knows what obj
  }                                      // originated the call
}                                        // ie the not person, but john below

var john = {
  first: 'John',
  last: 'Doe'
}

// Don't do this EVER! causes performance issue
john.__proto__ = person;  // sets proto for john obj to person obj (inherits)
console.log(john.getFullName());  // => John Doe
console.log(john.first);    // => John
// first is found in the john object and does not need to look further
//  => the JS engine starts at the top of the chain and stops when found

var jane = {
  first: 'Jane'
}

jane.__proto__ = person; // points to the same spot as john
console.log(jane.getFullName()); // => Jane default
// first is found in jane, but searches down the chain for last
