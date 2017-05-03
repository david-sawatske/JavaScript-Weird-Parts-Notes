// 26 //

// Objects have a place in memory and refs to other things in mem connected to it
//  => primitive 'property' - boolean, number, string, etc
//  => object 'property' - another name value pair collection
//  => function 'method' - functions attached to objects are called methods

// Creating an Object (not the best way)

var person = new Object();

// Add properties and methods computed member access operator ([]) cmao
person["firstname"] = "Tony"; // creating the firstname property
// => creates spot in memory for the [key] and the person obj will get ref to
//    that location in memory

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person[firstNameProperty]); // => 'Tony'
// => the cmao [] takes the person obj and looks for prop with the name firstNa..


// Add properties using the dot operator (second in precidence)
console.log(person.firstname); // => 'Tony' (primitive)
// => AKA member access operator (members of the object)
// => goes out and found the mem loc associated with firstname

// Can add reference to another object
person.address = new Object(); // creates an object sitting inside an object
person.address.street = "123 Happy St."; // add properties to child object
// => . has left to right associtivity so the person.address is exicuted first

console.log(person.address.street) // => 123 Happy St.


// 27 //

// Object Literals {} (not an operator)
var person = {};
  // => the JS engine parses the {} as the creation of a new object

// The object can also be initialized and set up properties/ methods on one line
var person = { firstname: 'Tony', lastname: 'Alicea' }; // gives 2 props to obj

// properties, methods and other objects can be dropped in using this syntax
var Tony = {
    firstname: 'Tony',
    lastname: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};


function greet(person) {   // this greet funct expects an obj with a firstname pro
    console.log('Hi ' + person.firstname);
}

greet(Tony); // => 'Hi Tony'

// you can call the greet function that creates new obj at moment of exectution
// of that function
greet({
    firstname: 'Mary',
    lastname: 'Doe'
});

// add new properties to object with the dot operator using an object literal
//  => mix of methodology works because the engine stores in mem the same for both
Tony.address2 = {
    street: '333 Second St.'
}
