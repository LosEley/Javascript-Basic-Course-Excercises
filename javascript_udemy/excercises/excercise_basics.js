////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "LET_VS_CONST_VS_VAR";

// using var (outdated, no one uses it anymore)
// var value = "some value";
// value = "some other value";
// // using let
// let name = "john";
// name = "peter";
// // usint const (CONSTANT) - can't re-assign
// const lastName = "smith";
// // small excercise
// const firstName = "erick";
// let address = "main street";
// address = "7th street";

// console.log(firstName);
// console.log(value, name, lastName, firstName, address);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "String_concatenation__combine_string_values";
// `` - backticks (template strings) easier option.

// const myname = "rafael";
// const mylastname = "garcia";
// let myfullname = myname + " " + mylastname;

// console.log("Hello there your full name is: " + myfullname);

// const website = "google";
// const url = "https://www." + website + ".com";
// console.log(url);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "Numberss";
// Loosely Typed = don't declare type

// const number = 34;
// let pants = 2.466;
// // pants = "are great";
// const number2 = 2.456;
// const number3 = "2.456";

// const add = number + number2;
// const sub = number - number2;
// const mult = number * number2;
// const div = number / number2;

// console.log(add);
// console.log(sub);
// console.log(mult);
// console.log(div);
// console.log(number3);

// Numbers
// +=, -=, /=, *=, ++, --, %
// Modulus (%) operator returns the remainder after integer division

// let number = 40;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number -= 5;
// number++;
// number--;
// number--;
// number--;

// const slices = 10;
// const children = 4;
// const amount = slices % children;

// const random = 4 + 6 + 10 * 10;
// const random2 = (4 + 6 + 10) * 10;

// console.log(random);
// console.log(random2);
// console.log(amount);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "Implicit_type_conversion";

// const name = "john";
// const lastName = "jordan";
// const fullName = name + " " + lastName;
// console.log(fullName);

// const number = 4;
// const number2 = 10;
// const result = number + number2;
// console.log(result);

// const value = name - lastName;
// console.log(value);

// let number3 = 10;
// let number4 = 23;
// // 100 lunes
// number4 = "23";
// const result2 = number3 + number4;
// console.log(result2);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "Data_Types_7_total";
// // Primitive - String, Number, Boolean, Null, Undefined, Symbol
// // Object - Arrays, Functions, Objects

// // typeof - operator (typeof variable) (typeof value)

// // String
// const text = "Some text here";
// // Number
// const number = 45;
// // Boolean
// let value1 = true;
// let value2 = false;
// // Null
// const result = null;
// // Undefined
// let name;
// // Symbol(ES6)
// console.log(typeof text);
// console.log(typeof number);
// console.log(typeof value1);
// console.log(typeof value2);
// console.log(typeof null);
// console.log(typeof name);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "Arrays_Functions_and_Objects";
// // Arrays - [], 0 index based

// const friend1 = "ana";
// const friend2 = "ana";
// const friend3 = "ana";
// const friend4 = "ana";

// const friends = ["john", "peter", "bob", "susy", 45, undefined, null];

// let bestFriend = friends[2];
// friends[4] = "anna";
// console.log(friends);
// console.log(friends[4]);

// // Arrays, Functions and Objects
// // Functions - declare, incoke

// function hello() {
//   // logic
//   console.log("hello there bob");
//   console.log("hello there anna");
//   console.log("hello there susy");
// }

// // some code here....
// hello();

// // some code here....
// hello();

// // some code here....
// hello();

// // Arrays, Functions and Objects
// // params - when declare/define
// // placeholders, local vars
// // arguments - when invoke/call/run
// // use vars/values, multiple params, undefined

// function greet(name) {
//   console.log("hello there" + name);
// }

// // greet bob
// greet(" bob");
// // greet ana
// greet(" anna");
// // greet susy
// greet(" susy");

// // Arrays, Functions and Objects
// // return
// // default undefined, shortcuts, ignores after
// // 1 inch 2.5cm
// const wallHeight = 80;

// function calculate(value) {
// // const newValue = value * 2.54;
// // console.log("the value in cm is:" + value * 2.54 + " cm");
//   return value * 2.54;
// }

// const width = calculate(100);
// const height = calculate(wallHeight);

// const dimensions = [width, height];
// console.log(dimensions);

// // Arrays, Functions and Objects
// // expressions - another way to define a function
// // create a variable, assign to FUNCTION (not value), use var
// // diff - hosting, use - arrow func, libraries,

// // function definition-declaration
// function addValues(num1, num2) {
//   return num1 + num2;
// }

// const firstValue = addValues(3, 4);
// const secondValue = addValues(12, 34);

// // function expression
// const add = function (num1, num2) {
//   return num1 + num2;
// };
// //  const thirdvalue
// const thirdValue = add(5, 6);
// const values = [firstValue, secondValue, thirdValue];
// console.log(values);

// const multiply = (num1, num2) => num1 * num2;

// // Arrays, Functions and Objects
// // objects - key/values pairs methods
// // dot notation

// const person = {
//   name: "john",
//   lastName: "peters",
//   age: 40,
//   education: false,
//   married: true,
//   siblings: ["anna", "susan", "peter"],
//   greetings: function () {
//     console.log("hello my name is john");
//   },
// };

// const age = person.age;
// console.log(age);
// person.name = "bob";

// console.log(person.name);
// console.log(person.siblings[2]);
// person.greetings();

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "Conditional_Statements";
// // >, <, >=, <=, ==, ===, !=, !===
// // else if and !
// // == checks only value
// // === checks value and type

// const value = 2 > 1;
// // console.log(typeof value);
// const value2 = 1 > 2;
// if (value2) {
//   console.log("hello world");
// } else {
//   console.log("Hello people");

// const num1 = 6;
// const num2 = 6;
// const result = num1 >= num2;

// const value = false;

// if (!value) {
//   console.log("value is true");
// }

// if (num1 > num2) {
//   console.log("number is bigger than second");
// } else if (result) {
//   console.log("first number equal to second");
// } else {
//   console.log("second number is bigger thab first");
// }

// const num1 = 6;
// const num2 = "6";

// const value = num1 != num2;
// const value2 = num1 !== num2;

// console.log(value);
// console.log(value2);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "Logical_Operators";
// // (|| - OR), (&& - AND), !

// const name = "peter";
// const age = 24;

// if (name !== "bob" && age === 24) {
//   console.log("hello there user");
// } else {
//   console.log("wrong values");
// }

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "switch";
// // dice values: 1- 6

// const dice = 4;

// switch (dice) {
//   case 1:
//     console.log("you got one");
//     break;
//   case 2:
//     console.log("you got two");
//     break;
//   case 3:
//     console.log("you got three");
//     break;
//   default:
//     console.log("you didn't roll the dice");
// }

// // else if
// const dice = 0;
// if (dice === 1) {
//   console.log("you got one");
// } else if (dice === 2) {
//   console.log("you got two");
// } else {
//   console.log("you didn't role the dice");
// }

//  all if
// if (dice === 1) {
//   console.log("you got one");
// }
// if (dice === 2) {
//   console.log("you got two");
// }
// if (dice < 1 || dice > 6) {
//   console.log("you didn't role the dice");
// }

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "loops";
// // repeatedly run a block of code while condition is true
// // while loop
// // TURN OFF AUTOSAVE

// LOOPS
// let amount = 10;

// while (amount > 0) {
//   console.log("I have " + amount + " lets go to the mall");
//   amount--;
// }

// // repeadly run a block of code while condition is true
// // do while loop
// // code block first, condition second
// // runs at least

// WHILE LOOPS
// let money = 12;

// do {
//   console.log("you have " + money + " dollars");
//   money++;
// } while (money < 10);

// // repeatedly run a block of code while condition is true
// FOR LOOP

// let i;
// for (i = 0; i < 10; i++) {
//   console.log("the number is:" + i);
// }

// for (let number = 11; number >= 0; number--) {
//   console.log("the number is:" + number);
// }

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "String properties and methods";
// // wrapper String object, don't memorize methods

// let text = " Peter Jordan";
// let result = text.length;
// console.log(result);

// console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(0));
// console.log(text.charAt(text.length - 1));
// console.log(text.indexOf("e"));
// console.log(text);
// console.log(text.trim());
// console.log(text.trim().toLocaleLowerCase().startsWith("peter"));
// console.log(text.includes("eter"));
// console.log(text.slice(-4));

// const person = {
//   name: "peter", // property
//   greeting() {
//     // method
//     console.log("Hey, I'm Peter");
//   },
// };

// console.log(person);

// console.log(person.name);
// person.greeting();

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "Template Literals";
// // Template literals - ES6
// // Backtick characters `` - above tab(left from one)
// // Interpolation ${} - insert expression(value)

// const name = "john";
// const age = 25;
// const sentence = "Hey it's " + name + " and he is " + age + " years old";

// const value = `Hey it's ${name} and he is ${age} years old. And here is some simple math ${
//   2 * 4
// }`;
// console.log(value);
// console.log(sentence);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "Array Properties and Methods";

// let names = ["john", "bobo", "barry", "olga", "ben"];

// // length
// console.log(names.length);
// console.log(names[names.length - 1]);

// // concat
// const lastNames = ["pepper", "onion", "bananas"];
// const allNames = names.concat(lastNames);
// console.log(allNames);

// // reverse
// console.log(allNames.reverse());

// // unshift
// allNames.unshift("sussy");
// allNames.unshift("anna");
// console.log(allNames);

// // shift
// allNames.shift();
// allNames.shift();
// allNames.shift();
// allNames.shift();
// console.log(allNames);

// // push
// allNames.push("sussy");
// console.log(allNames);

// // pop
// allNames.pop();
// // allNames.pop();
// // allNames.pop();
// // allNames.pop();
// console.log(allNames);

// // splice - mutates original array
// const specificNames = allNames.splice(0, 3);
// console.log(specificNames);
// console.log(allNames);

course = "Array Pand for loop";

// const names = ["anna", "sussy", "bob", "john", "susan"];
// const lastName = "shakeandbake";
// let newArray = [];

// // for loop
// for (let i = 0; i < names.length; i++) {
//   console.log(i);
//   console.log(names[i]);
//   const fullName = `${names[i]} ${lastName}`;
//   newArray.push(fullName);
// }

// console.log(names);
// console.log(newArray);

course = "Functions, return, if, arrays, for loop";

// const gas = [20, 40, 100, 30];
// const food = [10, 40, 50];

// function calculateTotal(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   if (total > 100) {
//     console.log(`you are spengind a lot`);
//     return total;
//   }
//   console.log(`you are not expending more than 100`);

//   return total;
// }

// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([200, 4000, 500, 1]);

// console.log({
//   gas: gasTotal,
//   food: foodTotal,
//   random: randomTotal,
// });

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "Reference vs Value";
// // // Primitive data types
// // // String, Number, Symbol, Boolean, Undefined, Null,
// // // Arrays, Functions, Objects = object
// // // typeof

// // // when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value.

// // // when assigning non-primitive data type value to variable is done by reference so any changes will affect all the references.

// const number = 1;
// let number2 = number;
// number2 = 7;
// console.log(`the first vlaue is ${number}`);
// console.log(`the second vlaue is ${number2}`);

// let person = { name: "bob" };
// let person2 = { ...person }; // this makes a copy
// person2.name = "susy";
// console.log(`the name of the first person is ${person.name}`);
// console.log(`the name of the first person is ${person2.name}`);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "Null and Undefined part 1";
// // // both represent "no value"

// // // undefined - "javascript can not find value for this"

// // // variable without value
// // // missing function arguments
// // // missing object properties

// // // null - "developer sets the value"

// let number = 20 + null; // 20 + 0;
// console.log(number);

// let number2 = 20 + undefined;
// console.log(number2);

course = "Null and Undefined part 2 ";
// // // "", '', ``, 0, -0, NaN, false, null, undefined

// const bool1 = true;
// const bool2 = 2 > 1;

// const text = "";

// if (text) {
//   console.log("the value is trthy");
// } else {
//   console.log("the value is falsy");
// }

// // if (true) {
// //   console.log(`hey it works!`);
// // }
// // if (2 > 1) {
// //   console.log(`hey it also works!`);
// // }

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// course = "Ternary operator";

// // unary operator - typeof"
// let text = "some text";
// console.log(typeof text); // operand
// // binary operator - assignment
// let number = 3;
// let number2 = 2 + 5;

// // ternary operator //
// // condition ? (runs if true) : (runs if false)

// const value = 1 < 0;

// value ? console.log("value is true") : console.log("value is false");

// // if (value) {
// //   console.log("value is true");
// // } else {
// //   console.log("the value is false");
// // }

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "Global Scope vs Local Scope";

// // any variable outside code block {} is said to be in global scope
// // can be access anywhere in the program
// // gotchas:name collisions, modify by mistake

// let name = "bobo";
// name = "peter";

// function calculate() {
//   // some other code...
//   console.log(name);
//   name = "orange";
//   function inner() {
//     name = "inner name value";
//     console.log(`this is from inner function ${name} `);
//   }
//   inner();
// }
// calculate();

// if (true) {
//   console.log(name);
//   name = "pants";
// }
// console.log(`my name is ${name} and i'm awesome`);

course = "Local Scope";

// can not be access from outside code blocks
// if - NOT VAR

// let name = "bobo";

// function calculate() {
//   const name = "john";
//   const age = 25;
//   // code goes here
//   becomesGlobal = "global variable";
// }

// calculate();
// console.log(becomesGlobal);

// if (true) {
//   const name = "john";
// }
// {
//   const name = "john";
//   const special = "special";
// }

// console.log(special);
// console.log(`my name is ${name} and i'm awesome`);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "Variable Lookup";
// // {} - code block

// const globalNumber = 5;

// function add(num1, num2) {
//   const globalNumber = 20;
//   const result = num1 + num2 + globalNumber;
//   function multiply() {
//     const globalNumber = 100;
//     const muliplyResult = result * globalNumber;
//     console.log(muliplyResult);
//   }
//   multiply();
//   return result;
// }

// console.log(add(3, 4));

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course =
  "Callback Functions, Higher Order Functions, Functions as First Class Objects / Citizens";

// // // Functions are first class objects - stored in a variable(expression), passed as an argument to another function, return from the function (closure)

// // // Higher Order Function - accepts another function as an argument or return another function as a result

// // // Callback Function - passed to a another function as an argument and executed inside that funcion

// function morning(name) {
//   return `good morning bob ${name.toUpperCase()}`;
// }
// function afternoon(name) {
//   return `good afternoon ${name.repeat(3)}`;
// }

// function greet(name, cb) {
//   const myName = "john";
//   console.log(`${cb(name)}, my name is ${myName}`);
// }
// greet("peter", morning);
// greet("facu", afternoon);

// // function greetMorning(name) {
// //   const myName = "john";
// //   console.log(`Good morning ${name}, my name is ${myName}`);
// // }
// // function greetAfternoon(name) {
// //   const myName = "john";
// //   console.log(`Good afternoon ${name}, my name is ${myName}`);
// // }
// // greetMorning("peter");
// // greetAfternoon("facu");

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "Powerfull Array Methods";

// // // forEach, map, filter, find, reduce
// // // Iterate over array - no for loop required
// // // Accept CALLBACK function as an argyment, calls callback agains each item in a array. Reference Item in the Callback parameter.

// const numbers = [0, 1, 2, 3, 4];

// // show all numbers

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

course = "Powerfull Array Methods - FOR EACH";

// // does not return new array

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "bob", age: 25, position: "designer" },
//   { name: "bob", age: 30, position: "the boss" },
// ];

// function showPerson(person) {
//   console.log(person.position.toUpperCase());
// }

// // people.forEach(showPerson);

// people.forEach(function (item) {
//   console.log(item.position.toUpperCase());
// });

course = "Powerfull Array Methods - MAP";

// // // does return a new array
// // // does not change size of original array
// // // uses values from original array when making new one

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "peter", age: 25, position: "designer" },
//   { name: "susy", age: 30, position: "the boss" },
//   { name: "anna", age: 35, position: "the boss" },
// ];

// const ages = people.map(function (person) {
//   return person.age + 20;
// });

// const newPeople = people.map(function (person) {
//   return { firstName: person.name.toUpperCase(), oldAge: person.age + 20 };
// });

// const names = people.map(function (person) {
//   return `<h1>${person.name}</h1>`;
// });

// document.body.innerHTML = names.join("");

// console.log(names);

course = "Powerfull Array Methods - FILTER";
// // // does return a new array
// // // can manipulate the size of new array
// // // return based on condition

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "peter", age: 25, position: "designer" },
//   { name: "susy", age: 30, position: "the boss" },
//   { name: "anna", age: 35, position: "the boss" },
// ];

// const youngPeople = people.filter(function (person) {
//   return person.age <= 25;
// });

// const developers = people.filter(function (person) {
//   return person.position === "senior developer";
// });

// console.log(developers);

course = "Powerfull Array Methods - FIND";
// // // returns single instance - (in this case object)
// // // returns first match, if no match undefined
// // // great for getting unique value

// const people = [
//   { name: "bob", age: 20, position: "developer", id: 1 },
//   { name: "peter", age: 25, position: "designer", id: 2 },
//   { name: "susy", age: 30, position: "the boss", id: 3 },
//   { name: "anna", age: 35, position: "the boss", id: 4 },
// ];

// const names = ["bob", "peter", "susy"];
// console.log(
//   names.find(function (name) {
//     return name === "zelda";
//   })
// );

// const person = people.find(function (person) {
//   return person.id === 3;
// });

// console.log(person.name);

// const person2 = people.filter(function (person) {
//   return person.id === 3;
// });
// console.log(person2[0].name);

course = "Powerfull Array Methods - REDUCE";
// // iterates, callback function
// // reduces to a single value - number, array, object
// // 1 parameter ('acc') - total of calculations
// // 2 parameter ('curr') - current iteration/value

// const people = [
//   { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
//   { name: "peter", age: 25, position: "designer", id: 2, salary: 300 },
//   { name: "susy", age: 30, position: "the boss", id: 3, salary: 500 },
//   { name: "anna", age: 35, position: "the boss", id: 4, salary: 500 },
// ];

// const total = people.reduce(function (acc, currItem) {
//   console.log(`total ${acc}`);
//   console.log(`current money ${currItem.salary}`);
//   acc += currItem.salary;
//   return acc;
// }, 500);

// console.log(total);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "Math";
// standard built-in objects - always available

// const number = 4.56789;
// const result = Math.floor(number);

// const number = 4.122222;
// const result = Math.ceil(number);

// const number = 25;
// const result = Math.sqrt(number);

// const result = Math.PI;

// const result = Math.min(4, 5, 6, 7, 9);

// const result = Math.max(4, 5, 6, 7, 9);

// const result = Math.floor(Math.random() * 10 + 1);

// console.log(result);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

course = "Date";

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// const date = new Date();
const date = new Date("1/12/2004");
const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ,${date.getFullYear()}`;

console.log(sentence);

document.body.innerHTML = sentence;
