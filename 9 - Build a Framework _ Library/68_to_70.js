// 69 //

// Structure safe code so it can be used within any application
//   => only expose to the Global context what we want
//   => how do we trick the JS parser?

// 1. create a new execution context with an IIFE and pass to it what is needed
//    => needs the global variable 'window' and jQuery variable '$'
//    => hint - it's an imedeatly invoked function

(function(global, $) {  // when invocated below, a new Exe Context is created
                        // giving the vars 'global' and '$'

}(window, $));          // the immedeate invocation of the function

// wrapping the IIFE in (funct..); tricks the parser insuring that code does not
// interfere with, crash into, or be interfered by any other code in the application
//  => 'tricks' parser by making 'function' not the first thing it sees on that line
//      - make the grouping operator '(' the first thing on a line of code
//  => when the parser sees (), it knows that what is inside returns something,
//     a.k.a an expression
//     - so it assumes that what's inside is a function expression which will
//       be invoked on the fly (when the line of code is executed)

// 70 //

// Setup Greetr object like jQuery objects are set up
//    => to create a Greetr object - G$(firstName, lastName, language)
//       - without needing to call new every time we want a new object


// how can we have the Greetr funct return the results of a diff Funct Const?
//   => saves us from having to write 'new' with new obj creation

(function(global, $) {

  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language); // returns the object
  }                                                        // created by the Funct
                                                           // Const 'new Greetr...'

  Greetr.init = function(firstName, lastName, language) {  // creates Funct Const
                                                           // used above
    // set up some default properties in the Funct Const
    //  => we want to assign the values to the empty object created by 'new'
    //     in the Function Constructor 'new Greetr.init(firstName, ...'
    var self = this; // insure self will always point the the empty object
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  }

}(window, $));


// Next Step //
// what about the prototype for the object that is created by new Greetr.init ...
(function(global, $) {

  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }


  Greetr.prototype = {}; // this is what we want to make it easier to call
                         //   => here is where any methods for the obj will go

  // but how do we assign the object created below to that prototype?
  //   => by default, where will that object's __proto__ property point?
  //      - Greetr.init.prototype (the .prototype of the function that created it)
  Greetr.init = function(firstName, lastName, language) {

    var self =  this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    }

    Greetr.init.prototype = Greetr.prototype
    // now all objects created with new Greetr.init(... will have their __proto__
    // point to Greetr.prototype (for their prototype chain)
    //    => makes adding properties and methods to Greetr.prototype look cleaner

  }(window, $));


// Next step //
// how to expose Greetr to outside world (also create alias G$)
//    => attach to the global object

(function(global, $) {

  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }

  Greetr.prototype = {};

  Greetr.init = function(firstName, lastName, language) {

    var self =  this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    }

    Greetr.init.prototype = Greetr.prototype

    // 'global' was passed into the function and envoked with 'window'
    // 'global.G$' sets the alais
    // 'Greetr' is the function defined on line 89. this is what we wanted to expose
    global.Greetr = global.G$ = Greetr;

  }(window, $));
