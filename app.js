function greet(firstname, lastname, language = 'en') {  // sets default for english
  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments); // given automatically by JS
}

greet('John'); // although we aren't passing the expected args, JS will not error
         // because hoisting sets them
// => John
//    undefined
//    en
