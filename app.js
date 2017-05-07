var person = {                 // defined using Object literal syntax
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {  // function expression

        var fullname = this.firstname + ' ' + this.lastname; // 'this' points to the
        return fullname;                                     // person obj
    }
}

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());  // 'this' points to Global Obj
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');

}.bind(person)



logName();
