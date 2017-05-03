// 14 //

// Scope Chain - the links of outer enviornment refs that are searched for a variable

function b() {         // lexically in the global enviornment
  console.log(myVar);
}
function a() {
  var myVar = 2;
  b();
}

var myVar = 1;        // lexically in the global enviornment
a();  // => returns 1

// With the invocation of a(), JS does not find myVar within the b() execution context
// => so it looks for the var in the outer enviornment somewhere in the stack below
//    - function b() sits lexicly at the global level where myVar = 1, not inside function a()

// The JS engine sees that both function b() and myVar = 1 are in the same lexical env
// => the outer ref is the global execution context variable enviornment

function a() {

  function b() {         // lexical enviornment is a()
    console.log(myVar);
  }

  var myVar = 2;         // lexical enviornment is a()
  b();
}

var myVar = 1;
b(); // => gives 'b is not defined' error because it is not in the global exicu context
a(); // => 2 because b()'s outer lexial env is now a()
