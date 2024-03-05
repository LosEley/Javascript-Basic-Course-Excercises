/* ## Variables #1

1. create "firstName" and "last_name" variables
2. assign your values
3. create "address" variable and assign "main street"
   value to it
4. re-assign address to "first street" later
5. log all values in the console */

// const firstName = "Erick";
// const last_name = "Ley";

// let address = "main street";
// address = "first street";

// console.log(firstName, last_name, address);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

/* ## Concatenate Strings #2

1. create "street" and "country" variables
2. assign your values
3. create "fullMailingAddress" variable and assign
   the result of "street + country"
4. remember about the space
5. log "fullMailingAddress" in the console */

// const street = "S. Flower Street";
// const country = "United States";
// let fullMailingAddress = street + ", " + country;

// console.log(fullMailingAddress);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

/* ## Numbers #3

1. create "score1", "score2", "score3" variables and
   assign values (0-100)
2. calculate total score and average score, and assign them to the variables.
3. log total score and average score

4. create "plates" variable and assign 20
5. create "people" variable and assign 7
6. calculate remaining plates and assign to the variable
7. add one to remaining plates
8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
9. log message */

// const score1 = 98;
// const score2 = 75;
// const score3 = 45;

// const totalScore = score1 + score2 + score3;
// const averageScore = totalScore / 3;

// console.log(totalScore, averageScore);

// const plates = 20;
// const people = 7;

// let remaningPlates = plates % people;
// remaningPlates++;

// let message = "There are " + remaningPlates + " plates availables";

// console.log(message);

/* ## Arrays #4

1. create "fruits" array and store some fruit values
2. setup the last item as number (random)
3. assign first fruit to the variable
4. re-assign last array item to the actual fruit
5. log both first fruit variable and entire fruits array */

// const fruits = ["apple", "orange", "pear", "banana", 45];

// let myFavorite = fruits[0];
// fruits[4] = "berry";
// console.log(myFavorite, fruits);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

/* ## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters
4. create 3 vars "order1","order2","order3"
5. call calculateTotal, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression */

// function calculateTotal(subtotal, tax) {
//   return subtotal + tax;
// }
// console.log(calculateTotal(200, 20));

// const order1 = calculateTotal(100, 10);
// const order2 = calculateTotal(50, 5);
// const order3 = calculateTotal(25, 5);

// console.log(order1, order2, order3);

// const calculateTotal = function (subtotal, tax) {
//   return subtotal + tax;
// };

// const order1 = calculateTotal(100, 10);
// const order2 = calculateTotal(50, 5);
// const order3 = calculateTotal(25, 5);

// console.log(order1, order2, order3);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// ## Objects #6

// 1. create car object
// 2. add make, model, year, colors (array),hybrid (boolean) keys
// 3. add two methods (drive and stop)
// 4. in the function body setup log with random text
// 5. log make
// 6. log first color
// 7. invoke both methods

// const car = {
//   make: "Toyota",
//   model: "Prius",
//   year: 2018,
//   color: "white",
//   hybrid: true,
//   drive(name) {
//     return console.log("This is my: " + name);
//   },
//   stop(breaks) {
//     return console.log("push the " + breaks + "now");
//   },
// };

// name = "erick";
// breaks = "pedals";

// car.make;
// car.color;
// drive(name);
// stop(breaks);

// const car = {
//   make: "toyota",
//   model: "prius",
//   year: 2018,
//   colors: ["white", "silver"],
//   hybrid: true,
//   drive: function () {
//     console.log("driving...");
//   },
//   stop() {
//     console.log("stoooooop");
//   },
// };

// console.log(car.make);
// console.log(car.colors[0]);
// car.drive();
// car.stop();

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// ## Conditional Statements #7

// 1. create two objects "person1", "person2"
// 2. setup name,age (15-25),
//    status ('resident', 'tourist') keys

// 3. setup if else, condition where
//    age must be bigger than 18 and status must be
//    equal to 'resident'
// 4. test with both objects

// const person1 = {
//   name: "erick",
//   age: 32,
//   status: "resident",
// };

// const person2 = {
//   name: "margarita",
//   age: 58,
//   status: "tourist",
// };

// if (person1.age >= 18 && person1.status == "resident") {
//   console.log("welcome to your home");
// } else {
//   console.log("you do not meet the requirements ");
// }

// if (person2.age > 18 && person2.status == "resident") {
//   console.log("welcome to your home");
// } else {
//   console.log("you do not meet the requirements ");
// }

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// // ## Strings #8

// // 1. create function fullName
// // 2. accept two parameters "firstName", "lastName"
// // 3. add them together (concat) and return result in uppercase
// // 4. invoke fullName and pass some values
// // 5. log result

// // 6. change the order of arguments
// // 7. refactor to object parameter

// function fullName({ firstName, lastName }) {
//   const fullName = `${firstName} ${lastName} `;
//   return fullName.toLocaleUpperCase();
// }

// // function fullName(firstName, lastName) {
// //   const fullName = `${firstName} ${lastName} `;
// //   return fullName.toLocaleUpperCase();
// // }

// console.log(fullName({ lastName: "jordan", firstName: "peter" }));

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// ## Array Methods #9

// Multiple Videos

// #### Create Students Array

// 1. setup students array with 5 students
//    {
//    id: 1,
//    name: 'peter',
//    score: 80,
//    favoriteSubject: 'math',
//    },

// const students = [
//   { id: 1, name: "peter", score: 80, favoriteSubject: "math" },
//   { id: 2, name: "susan", score: 99, favoriteSubject: "history" },
//   { id: 3, name: "anna", score: 85, favoriteSubject: "math" },
//   { id: 4, name: "john", score: 34, favoriteSubject: "art" },
//   { id: 5, name: "bobo", score: 74, favoriteSubject: "math" },
// ];

// #### Use Multiple Files

// - easer to manage code base (file, project)
// - order matters
// - other ways to achieve the same result (ES6 modules, fetch DB )
// - not limited to just static data

// console.log(students);

// #### updatedStudents

// 1. add role:'student' property to each object
//    using MAP method
// 2. assign to 'updatedStudents' variable and log

const updatedStudents = students.map(function (student) {
  //   console.log(student);
  student.role = "student";
  return student;
});

console.log(updatedStudents);

// #### highScores

// 1. filter array and return only scores >= 80
// 2. assign to 'highScores' variable and log

const highScores = students.filter(function (student) {
  //   if (student.score >= 80) {
  //     return student;
  //   if (student.score >= 80) return student;
  return student.score >= 80;
});

console.log(highScores);

// #### specificId

// 1. find specific id in array
// 2. assign to 'specificId' variable and log

const specificID = students.find(function (student) {
  return student.id === 1;
});

console.log(specificID);

// #### averageScore

// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to 'averageScore' and log

const averageScore =
  students.reduce(function (scoresTotal, student) {
    //   console.log(students);
    //  console.log(scoresTotal);
    return scoresTotal + student.score;
  }, 0) / students.length;

console.log(averageScore);

// #### survey

// 1. list favorite subjects with reduce
//    {
//    english: 1
//    history: 1
//    math: 3
//    }
// 2. assign to survey and log

const subject = "art";

const total = {};
total[subject] = "some value";
console.log(total);

const survey = students.reduce(function (survey, student) {
  // console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});

console.log(survey);
