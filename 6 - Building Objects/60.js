// 60 //

// ES6 and Classes - new way to create object and set prototype

// the class Person is an object and you create new objects from it
class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  greet() {
    return 'Hi ' + first;
  }
}

var john = new Person('john', 'doe');
console.log(john); // => Person { first: 'john', last: 'doe' }

// how to set prototype? use keyword 'extends'

class InformalPerson extends Person {
  constructor(first, last) {
    super(first, last); // keyword 'super' calls the contructor of the object
  }                     // that is the prototype

  greet() {
    return 'Yo,' + first;
  }
}
console.log(john.__proto__); // => Person {}
