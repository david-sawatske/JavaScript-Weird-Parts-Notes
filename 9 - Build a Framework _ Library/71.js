// 71 //


// Adding properties and chainable methods to object and some setup features
// that are not exposed to the outside world

// let's put some methods an properties on the prototype (Greetr.prototype = {};)
//  => this way they are shared, taking less memory space

// also create logic (variables and concepts) not exposed

(function(global, $) {

    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }


    // this var supportedLangs is only inside the memory space of this function
    //  => not a property nor method of the object
    var supportedLangs = ['en', 'es'];
    // because of closures, objs created by this function *will have access to them
    //  => the object's Lexical Enviornment is the whole function which contains
    //     those variables
    //     - the memory space which holds Variable Enviornment exists even when
    //       the Execution Context of the method is popped off the Exec Stack

    // how can we reference an objects property with a string (in this case,
    // the name of the language)? Don't use arrays!!

    // with the 3 vars below, we can reference object properties like this:
    //   => greetings['en'] or formalGretings['es'] or logMessages['en']
    //      - if ther is a .en or .es property it will find it
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGretings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Iniciar la sesión'
    };


    // Now we add things that will be exposed though this prototype object
    //    => adding functionality to the objects create
    Greetr.prototype = {
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        // create a function that the language is supported
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid Language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!'
        },

        formalGreeting: function() {
            return formalGretings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to 'false' and return
            // informal greeting
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {          // makes sure console object is available
                console.log(msg);   //  => for I.E.
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;  // chainable
        },

        // change languages on the fly
        setLang: function(lang) {
            this.language = lang;   // update the language on the object with
                                    // the passed in lang
            this.validate();        // make sure the language is valid

            return this;            // chainable
        }
    };

    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, $));
