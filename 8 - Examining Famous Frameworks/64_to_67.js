// 64 //

// Learn from others code
//    => GitHub (go to src folder)
//    => the libraries website (uncompressed versions)


// 65 //

// Deep Dive into JQuery Source Code
// JQuery allows you to manipulate the DOM (Document Object Model) inside Browser
//    => DOM - looks at HTML and decides how to render it (not the JS engine)
//          - stores a (tree like) representationof your HTML
//    => JQuery can change structure of HTML page after it has been loaded
//          - finds elements in DOM tree and manipulates them

var q = $("ul.people li"); // find all li children of  ul's with class of People
console.log(q); // returns JQuery object w- __proto__ w- a lot of methods on it


// In jQuery code

// line 94
// the jQuery function is a function that returns a call from a function constructor
//    => it returns an object by calling a function constructor - new jQuery.fn.init(...)
//    => that's why we don't need to use the 'new' operator - var q = $("");
jQuery = function( selector, context ) {
  return new jQuery.fn.init( selector, context ); // returns new object created
},                                                // with 'new' keyword and the
                                                  // function constructor 'jQuery.fn.init'
                                                  // ('fn.init' __proto__ in console)
// line 114
// this is aliasing .fn for .prototype and overwritten with a new object
jQuery.fn = jQuery.prototype = { // object literal syntax

// The current version of jQuery being used
jquery: version,

constructor: jQuery,

// The default length of a jQuery object is 0
length: 0,

toArray: function() {
	return slice.call( this );
},


// line 195
// alaising and adding properties and methods to one object from other object
jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {}, // looks like the first arg will recieve the
		i = 1,                         // properties and methods. the rest of the
		length = arguments.length,     // objects in the args must provide them
		deep = false; ...


// line 2960 cont on 3056
// this is the constructor function that is calling 'new jQuery.fn.init' above
init = jQuery.fn.init = function( selector, context, root ) {
  var match, elem; ... // bunch of functionality follows 'this. ...'

// here is the end of the function constructor at line 3056
// it's calling new on a function, then returning a value
  return jQuery.makeArray( selector, this );
// the 'this' is the empty object created with new as a function constructor
//    => the code between these is adding properties and methods to 'this'
//      - 'this' object is then passed to the makeArray function
//    => basically, instead of just returning the 'this' var, we are first
//       messing around with it (make into an array) and then returning it

// line 3060
// this sets the prototype of any object created from init function constructor
//    => even though we create a new object inside this init function constructor,
//       this makes sure that it's prototype is same memory spot as the
//       jQuery.prototype (see alais on line 33 of this file) have same funct and props
init.prototype = jQuery.fn;


// 67 //

// jQuery allows method chaining - each method affects the parent object
var q = $("ul.people li").addClass("newClass").removeClass("people")

// let's fine the 'addClass' method in the jQuery source code

jQuery.fn.extend( {       // added to prototype via the extend method
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;  // so it does the work above and returns a value for 'this'
	},              //     => 'return this' is what makes methods chainable
//  the methods above are methods attached to the prototype
//  when the method is not found on the object, looks down the prototype chain
//    => 'this' var points at the originating object (the obj that made the call)
  var q = $("ul.people li").addClass("newClass") // ul.people li jQuery object
// to make methods chainable, return 'this' variable in last line of method
