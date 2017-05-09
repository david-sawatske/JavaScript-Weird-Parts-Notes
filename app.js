var a1 = [1,2,3];

function mapForEach(arr, fn) {
  var newArr = [];
  for (var i=0; i < arr.length; i++) {
    newArr.push(fn(arr[i]))
  }

  return newArr
}

var checkPastLimit = function(limiter) {
  return function(limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

var a2 = mapForEach(a1, checkPastLimit(1));
console.log(a2)
