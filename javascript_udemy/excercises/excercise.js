// LET VS CONST VS VAR

// using var (outdated, no one uses it anymore)
var value = "some value";
value = "some other value";
// using let
let name = "john";
name = "peter";
// usint const (CONSTANT) - can't re-assign
const lastName = "smith";
// small excercise
const firstName = "erick";
let address = "main street";
address = "7th street";

console.log(firstName);
console.log(value, name, lastName, firstName, address);

////////////////////////////////////////////

// String concatenation - combine string values
// `` - backticks (template strings) easier option.

const myname = "rafael";
const mylastname = "garcia";
let myfullname = myname + " " + mylastname;

console.log("Hello there your full name is: " + myfullname);

const website = "google";
const url = "https://www." + website + ".com";
console.log(url);

////////////////////////////////////////////

// Numbers
// Loosely Typed = don't declare type

const number = 34;
// let pants = 2.466;
// pants = "are great";
const number2 = 2.456;
const number3 = "2.456";

const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);
console.log(number3);

////////////////////////////////////////////

// Numbers
// +=, -=, /=, *=, ++, --, %
// Modulus (%) operator returns the remainder after integer division
