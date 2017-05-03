// Another Function Statement
function log(a) {
  console.log(a);
}
// literals that are created on the fly
log(3);
log('hello');

// object created on the fly
log({
  greeting: 'hi'
});

// function expression create function object on the fly
log(function() {
    console.log('hi');
});
