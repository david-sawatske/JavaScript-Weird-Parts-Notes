

// 29 //

// JSON - JavaSript Object Notation
//  => all JSON is valid JS object literal syntax, but not visa versa (JSON) stricter
//     - this was developed to reduce the bandwith needed to transfer info over internet
//  => easier transition in pushing data from client to server

var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}
// since they are so close, JS has a way to turn object into JSON string
console.log(JSON.stringify(objectLiteral));

// and convert from a JSON string to a JS object
var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log(jsonValue);
