// 58 //
// Arrays and 'for in' loops

Array.prototype.myCustomFeature = 'cool!';

var arr = ['john', 'jane', 'jim'];

for (var prop in arr) {
  console.log(prop + ': ' + arr[prop]);
}
// => 0: john
//    1: jane
//    2: jim
//    myCustomFeature: cool! - the extra property added to Array.prototype (the
//                             proto for arr) it is returned from a for in loop
//                             because it is a property of the arr object

// Can use regular 'for' loop
for (var i = 0; i < arr.length; i++) {
  console.log(i + ': ' + arr[i])
}
// => 0: john
//    1: jane
//    2: jim


// 59 //

// JS uses Pure Prototypal Inheritance using Object.create

// Prototypal Inheritance - make objects that forms basis for creating other
//                          objects, create new objects from them, defining
//                          special properties and methods to it,
//                          pointing to other objects as their prototype.
//                          i.e.
//                          if you want to define a new object you create it
//                          and it becomes the basis for all others. then
//                          override props and methods on created objects

var person = {
  first: 'default',
  // last: 'default',
  // greet: function() {
    return 'Hi ' + this.first;
  }
}

// Using Object.create to create new objects (available in modern browsers)
// => creates an empty object w- proto to whatever you passed in to Object.create
var john = Object.create(person);
console.log(john)
// => {} - an empty object with __proto__ is the person object

// need to add desired properties/ methods to the created Object
john.first = "john";
john.last = "doe";
console.log(john)
// => { first: 'john', last: 'doe' }
console.log(john.greet())
// => Hi john


// What if the browser does not support Object.create? Use polyfill

// Polyfill - code that adds a feature which the engine may lack
// this will be skipped if this exists in the brpwser
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}
