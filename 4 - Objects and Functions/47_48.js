// 47 //

// Functional Programming

// create a new array that doubles the values of the numbers in the first
//    => a lot of non repeatable code
var arr1 = [1,2,3];
console.log(arr1);

var arr2  = [];
for (var i=0; i < arr1.length; i++) {

  arr2.push(arr1[i] * 2);

}

console.log(arr2); // => [ 1, 2, 3 ]
                   //    [ 2, 4, 6 ]

// to limit the amount of code that has to be written, we put things into functions
// since we are using first class functions, we can pass functs around as objects

function mapForEach(arr, fn) {

    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(    // what is pushed to the new array is processed
            fn(arr[i])  // by the fn passed in the params
        )
    };

    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);


var arr2 = mapForEach(arr1, function(item) { // here, in the params, we can pass
  return item * 2;                           // the fn that provides the work to
});                                          // do to each item in arr1 (item * 2)
console.log(arr2);


var arr3 = mapForEach(arr1, function(item) { // now we can do something competely
  return item > 2;                           // different
});
console.log(arr3); // => [ false, false, true ]


// use mapForEach to check of something is passed a limit
//  => but make the limiter a var so it is reuseable
var checkPastLimit = function(limiter, item) {
    return item > limiter;
}
// but checkPastLimit takes 2 params, fn(arr[1]) in mapForEach takes 1
// how would we preset a parameter for limiter so that the item from arr1 is
// the only thing passed to fn(arr[1])?
//    => use bind() to create a copy of checkPastLimit with a preset for limiter
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1)); // sets limiter to 1 for
console.log(arr4); // => [ false, true, true ]                every subsequent call


// create a funct where you only pass in the limiter
var checkPastLimitSimplified = function(limiter) { // takes in limiter, returns function
    return function(limiter, item) { // all this is doing is creating a function
        return item > limiter;
    }.bind(this, limiter); // this presets the initial value for limiter
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5); // => [ false, true, true ]
