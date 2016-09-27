//What number is bigger Challenge

//purpose takes 2 integers, compares integers, returns larger integer.
//(integer1,integer2)-> larger integer
// Example  greaterNum(9,654) -> 654
            // greaterNum(7, 1) -> 7

function greaterNum(int1, int2) {
  //TO DO take two integers.
  //return larger integer

  if (int1 > int2) {
    alert("The larger number is " + int1);
  };

  if (int2 > int1) {
  alert("The larger number is " + int2);
  };
};


//World Translator Challenge


// Purpose: Takes language code from user. Translates String to chosen language. returns string. if language code not recognized , returns defualt english string.
//Signature: (langCode) -> "Bonjour le Monde"
//example: helloWorld("fr") -> "Bonjour Monde"
//helloWorld("es") -> "Hola Mundo"
//helloWorld("wel") -> "Helo Byd"

function helloWorld() {

var langCode = prompt("Pick a language code: en | es | fr | wel");

  if (langCode === "en" || langCode === "es" || langCode === "fr" || langCode === "wel") {
    if (langCode === "es") {
      alert("Hold Mundo!");
    };
    if (langCode === "fr") {
      alert("Bonjour Monde!");
    };
    if (langCode === "wel") {
      alert("Helo Byd!");
    };
    if (langCode === "en"){
        alert("Hello World!")
      };
    }
  else {
    alert("This is not a valid language");
    alert("Hello World!");
  };
};


//Grade Assigner Challenge

//purpose:Convert a given number score to letter grade
//signature: (integer) -> "string"
//Example: assignGrade(76) -> "C"
// assignGrade(34) -> "F"

function assignGrade(score) {
  var score = prompt("Enter your score PLEAZ");

  if (score >=90) {
    alert("Your letter grade is A");
  };

  if (score >=80 && score <90) {
    alert("Your letter grade is B");
  };
  if (score >=70 && score <80) {
    alert("Your letter grade is C");
  };
  if (score >=60 && score <70) {
    alert("Your letter grade is D");
  };
  if (score < 60) {
    alert("You FAIL! Go back to school, kid.")
  };
};

//Pluralizer Challenge

//Purpose: concatenate given number and string. pluralize string if > 1. return result .
//Signature: (string, int) --> int + pl-string
//Example: ("dragon", 8) -> "8 Dragons"
//         ("red ballons", 99) -> "99 red ballons"
          //  ("duck", 1) -> "1 duck"
          // ("geese", 1) -> "1 goose"

function pluralizeNoun (noun, number) {

  while (number > 1 && (noun === "person" || noun === "sheep" || noun === "goose")) {


  if (noun === "person") {
    return number + " people";
  };
  if (noun === "sheep") {
    return number + " sheep";
  };
  if (noun === "goose") {
    return number + " geese";
    };
  };

    var resultingString = number + " " + noun;

  if (number > 1) {
    return resultingString + "s"
    }

 else {
   return resultingString;
 };
};

//Odd/Even Challenge
//Purpose: iterate from 0-15. For each interation test if odd or even. display result.
//Signature: (integer) -> "Integer is Odd/Even"
//Example: oddEven(6) -> "6 is even"
// oddEven(0)---> "0 is even"
// oddEven(3)--> "3 is odd"

function oddEven() {
  var num = 0;

  while (num <= 15) {
    if (num === 0) {
      alert("0 is even");
    };

    if (num % 2 === 0) {
      alert(num + " is even.");
    } else {
      alert(num + " is odd.");
    };
   num ++
 };
};


// The Fizz Buzz Challenge

//Purpose: iterate 1 to 100. print fizz for multiples of 3. Print buzz for mutliples of 5. print fizzbuzz for multpiples of 3 and 5 (aka 15).
//Signature: "Fizz/Buzz/FizzBuzz"
//Example: fizzBuzz(60) -> "FizzBuzz"
// fizzBuzz(36) -> "Fizz"
// fizzBuzz(10) -> "Buzz"
// fizzBuzz(98) -> " "

function fizzBuzz() {
  var num = 1;
  while (num <= 100) {

    if (num % 15 === 0) {
      console.log("FizzBuzz");
    } else if (num % 5 === 0) {
          console.log("Buzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(num);
    };

  num ++

  };
};

//JS Hi/Lo game


//purpose: Find secret number
//signature: (integer)--> "string"
//Example:
// myNum = 52 pickNum(60)--->"too high"
//            pickNum(40)---> "too low"
            // pickNum(52) -> "You got it!!!"

function pickNum() {
  alert("The game starts now")
  var userName = prompt("What's your name??")

  var userNum = prompt("I'm thinking of a number between 1 and 100. What is it?");

  var myNum = Math.floor(Math.random()*101);

    counter = 1
  while (userNum != myNum && counter < 7) {
      if (userNum > myNum) {
        alert("Your guess is too high");
      };
      if (userNum < myNum) {
        alert("Your number is too low");
      };
      var userNum = prompt("Guess again!");

      counter ++

      if (counter === 7) {
        alert("You have run out of guesses. No more games for you!");
      };

      if (counter === 6) {
        alert("Warning! You have one guess left");
      };
    };

    if (parseInt(userNum) === myNum) {
      alert( userName + ", you win a million dollars!");
    };
  };
