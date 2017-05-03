// 20 //

// Operator Precedence - which operator gets called first on same line of code
// => higher precedence wins (* / % + -)

// Associativity - in what order an operator gets called (left to right/ r to l)
// => when functions have the same precedence

var a = 2, b = 3, c = 4;

a = b = c;

console.log(a); // => 4
console.log(b); // => 4
console.log(c); // => 4
// because assignment operatiors have right to left associativity


// 21 //

// Coercion - converting a value from one type to another

var a = 1 + '2'
console.log(a) // => '12' the 1 is coerced into the string '1'


// 22 //

// Comparitive Operators

console.log(3 < 2 < 1); // => true

// comparitive operators have left to right associativity. It's like saying
console.log(false < 1); // => true

// the false is coerced into 0. the computer parses the comparison below
console.log(0 < 1);

// true is coerced into 1
console.log(1 < 2 < 3); // parsed to
console.log(1 < 3)

Number(undefined) // => Nan (not a number)
Number(null) // => 0 (but not for comparison)
null == 0 // => false


// Equality comparison operator
3 == '3' // => true (the 3 is coerced into '3')
// this causes problems when trying to debug
var a = false;
a == 0; // => true

// Strict Equality comparison operator
// => compares two things, without coersion
3 === '3' // => false
