 // 15 //

// Scope - where a var is available in your code

// ES6 has a new way of declaring vars (let) that allows block scoping
// => still placed into memory and set to undefined
//    - but you can't use until that line is run during the exicution phase
// => these vars are only available within that block

if (a > b) {
  let c = true;
}


// 16 //

// Asynchronous Callbacks - the engine is executing more than one piece of code at a time
// The browser does not only have JS engine running, simultaneous things are happening
// => JS is synchronous, but has an event queue which is run when stack queue is empty

// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');

// here there is a funct that takes 3 secs to complete and a funct to register clicks
// => When run w/o clicks, the return is
//    'finish function'
//    'finish execution'
// => When run with a click, the return is
//    'finish function'
//    'finish execution'
//    'click event'
// So, even though the click happened when the 3 sec fuct was running, the click
// event was placed on the event queue and run after the stack queue was complete
