// THE DOM

// Similar to css

// Select the element or group of elements the you, we want to affect
// Decide the effect we want to apply to the selection

// window object = browser api
// document
// donsole.dir

// getElementByID('element') ----------- IMPORTANT
// Select the element or group of elements
// Decide the element or gorup of elements we want

// const h1 = document.getElementById("title");
// h1.style.color = "red";

// // document.getElementById("btn").style.backgroundColor = "blue";
// // document.getElementById("btn").style.color = "white";

// const btn = document.getElementById("btn");
// btn.style.backgroundColor = "blue";
// btn.style.color = "white";

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// Select the element or group of elements the you, we want to affect
// Decide the effect we want to apply to the selection

// getElementByID('tagname') ----------- IMPORTANT BUT USE QUERY SELECTOR
// HTMLCollection = array-like object
// index, length property but not array methods (forEach)

// querySelectorAll() in most cases ---- THIS IS THE IMPORTANT
// NodeList - Objects are collections of nodes
// can run forEach
// turn them into array - spread operator [...]
// after that can use any array properties

// const headings = document.getElementsByTagName("h2");
// headings[0].style.color = "red";
// // console.log(headings.length);

// const items = document.getElementsByTagName("li");
// items[2].style.color = "orange";
// const betterItems = [...items];

// betterItems.forEach(function (item) {
//   console.log(item);
// });

// console.log(items);
// console.log(betterItems);

// getElementsByClassName('classname); ------ IMPORTANT

// select the element or group of elements we want
// decide the effect we want to apply to that selectiton

// HTML collection

// const specials = document.getElementsByClassName("special");
// specials[2].style.color = "blue";
// console.log(specials);

// querySelector('any css'); - select single ---- IMPORTANT
// querySelectorAll('any css') - selects all ---- IMPORTANT

// select the element or group of elements we want
// decide the effect we want to apply to the selection

// const result = document.querySelector("#result");
// result.style.backgroundColor = "blue";

// const item = document.querySelector(".special");
// // console.log(item);

// const lastItem = document.querySelector("li:last-child");
// // console.log(lastItem);

// const list = document.querySelectorAll(".special");
// console.log(list);

// list.forEach(function (item) {
//   console.log(item);
//   item.style.color = "yellow";
// });

// childNodes - Returns all childNodes including whitespace which is treated as text node

// children
// firstChild
// lastChihld

// select the element or group of elements we want
// decide the effect we want to apply to the selection

// const result = document.querySelector("#result");
// const allChildren = result.childNodes;
// console.log(allChildren);

// const children = result.children;
// console.log(children);

// console.log(result.firstChild);
// console.log(result.lastChild);

// parent element

// const heading = document.querySelector("h2");
// // console.log(heading.parentElement.parentElement.parentElement.parentElement);

// const parent = heading.parentElement;
// parent.style.color = "red";

// previousSibling ----- IMPORTANT
// nextSibling ----- IMPORTANT
// return whitespace ----- IMPORTANT
// previousElementSibling
// nextElementSibling

// const first = document.querySelector(".first");
// console.log(first);
// const second = (first.nextSibling.nextSibling.style.color = "red");
// console.log(second);

// const lastElement = document.querySelector("#last");
// const third = lastElement.previousSibling.previousSibling;
// console.log(lastElement);
// console.log(lastElement.nextSibling.nextSibling);

// previousElementSibling ----- IMPORTANT
// nextElementSibling ----- IMPORTANT

// const first = document.querySelector(".first");
// first.nextElementSibling.style.color = "red";
// const last = document.querySelector("#last");

// nodeValue ----- IMPORTANT
// textContent ----- IMPORTANT

// const item = document.getElementById("special");
// const value = item.firstChild.nodeValue;
// const easyValue = item.textContent;

// console.log(easyValue);

// getAttribute(); ----- IMPORTANT
// setAttribute(); ----- IMPORTANT

// const first = document.querySelector(".first");
// const idValue = first.getAttribute("id");
// // console.log(idValue);

// const link = document.getElementById("link");
// const showLink = link.getAttribute("href");
// console.log(showLink);

// const last = link.nextElementSibling;
// last.setAttribute("class", "first");
// last.textContent = "i also have a class of first";
// console.log(last);

// const links = document.querySelectorAll(".first");
// console.log(links);

// className ----- IMPORTANT
// classList ----- IMPORTANT

// const first = document.getElementById("first");
// const second = document.getElementById("second");
// const third = document.getElementById("third");

// // const classValue = first.className;
// // console.log(classValue);

// second.className = "colors text";

// // third.classList.add("colors");
// // third.classList.add("text");
// third.classList.add("text", "colors");
// third.classList.remove("text");

// let result = third.classList.contains("colors");
// if (result) {
//   console.log("hello world");
// } else {
//   console.log("does not have the class");
// }
// const classValue = third.classList;
// console.log(classValue);

// createElement('element") ----- IMPORTANT
// createTextNode('text content') ----- IMPORTANT
// element.appendChild(childElement') ----- IMPORTANT

// insertBefore('element', 'location') ----- IMPORTANT

// replaceChild('new', 'old') ----- IMPORTANT

// const result = document.querySelector("#result");
// const first = document.querySelector(".red");
// // create empty element
// const bodyDiv = document.createElement("div");

// // create text node
// const text = document.createTextNode("a simple body div");
// bodyDiv.appendChild(text);
// document.body.insertBefore(bodyDiv, result);
// const heading = document.createElement("h2");
// const headingText = document.createTextNode("dynamic heading");
// heading.appendChild(headingText);
// heading.classList.add("blue");

// result.insertBefore(heading, first);

// const smallHeading = document.createElement("h6");
// const smallText = document.createTextNode(`im small heading text`);
// smallHeading.classList.add("red");
// smallHeading.appendChild(smallText);
// document.body.replaceChild(smallHeading, bodyDiv);

// console.log(result.children);

// prepend ----- IMPORTANT
// innerText ----- IMPORTANT

// const heading = document.createElement("h2");
// heading.innerText = `i'm a dynamic heading`;
// document.body.prepend(heading);

// remove ----- IMPORTANT
// removeChild ----- IMPORTANT

// const result = document.querySelector("#result");
// // result.remove();
// const heading = result.querySelector("h1");
// result.removeChild(heading);
// console.log(heading);

// innerHTML ----- IMPORTANT
// textContent ----- IMPORTANT

// const list = document.getElementById("first");
// const div = document.getElementById("second");
// const item = document.querySelector(".item");

// console.log(div.textContent);
// console.log(list.innerHTML);
// console.log(list.textContent);

// const randomVar = "random value";

// const ul = document.createElement("ol");
// ul.innerHTML = `<li class="item">${randomVar}</li>
//       <li>list item</li> <li>list item</li>`;
// document.body.appendChild(ul);

// div.textContent = "hello world";
// div.innerHTML = "hello people";

// const random = document.querySelector(".random");
// // random.style.backgroundColor = "blue";
// // random.style.color = "white";
// // random.style.fontSize = "3rem";
// // random.style.textTransform = "caipitalized";

// random.classList.add("title");

// select elemnt
// addEventListener() ----- IMPORTANT
// what event, what to do

// const btn = document.querySelector(".btn");
// const heading = document.querySelector("h2");

// function changeColors() {
//   let hasClass = heading.classList.contains("red");
//   if (hasClass) {
//     heading.classList.remove("red");
//   } else {
//     heading.classList.add("red");
//   }
// }

// btn.addEventListener("click", changeColors);

// click - fires after full action occurs
// mousedown - button is pressed ----- IMPORTANT
// mousedown - button is released ----- IMPORTANT
// mouseenter - moved onto an element ----- IMPORTANT
// mouseleave - moved out of an element ----- IMPORTANT

// const heading = document.querySelector("h1");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   console.log("you clicked me");
// });
// btn.addEventListener("mousedown", function () {
//   console.log("down");
// });
// btn.addEventListener("mouseup", function () {
//   console.log("up");
// });

// heading.addEventListener("mouseenter", function () {
//   heading.classList.add("blue");
// });

// heading.addEventListener("mouseleave", function () {
//   heading.classList.remove("blue");
// });

// keypress - when key is pressed ----- IMPORTANT
// keydown - when key is down ----- IMPORTANT
// keyup - when key is released ----- IMPORTANT

// const nameInput = document.getElementById("name");

// // nameInput.addEventListener("keypress", function () {
// //   console.log("you pressed a key");
// // });

// // nameInput.addEventListener("keydown", function () {
// //   console.log("you pressed a key");
// // });

// nameInput.addEventListener("keyup", function () {
//   console.dir(nameInput.value);
// });

// event obeject argument e, evt
// info about triggered event
// event,type
// event.currentTarget
// this keyword
//  preventDefault() - prevents default behavior

// const heading = document.querySelector("h1");
// const btn = document.querySelector(".btn");
// const link = document.getElementById("link");
// heading.addEventListener("click", (event) => {
//   console.log(event.currentTarget);
//   console.log(this);
// });
// btn.addEventListener("click", function (event) {
//   event.currentTarget.classList.add("blue");
//   console.log(event.type);
// });

// function someFunc(e) {
//   e.preventDefault();
// }

// link.addEventListener("click", someFunc);

// currentTarget - always refers to the element to which event has been attached to
// target - identifies the element on which the event occured

// const btns = document.querySelectorAll(".btn");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // console.log(e.currentTarget);
//     // e.currentTarget.style.color = "green";
//     console.log("target", e.target);
//     e.target.style.color = "green";
//   });
// });

// allows select dynamic elements
// event propagation - order the events are fired  ----- IMPORTANT
// event bubbling - clicked element first then bubbles up -- default  ----- IMPORTANT
// event capturing - fires at the root and fires until reaches target  ----- IMPORTANT

// const container = document.querySelector(".container");
// const list = document.querySelector(".list-items");

// function showBubbling(e) {
//   console.log("current target", e.currentTarget);
//   //   console.log(" target", e.target);
//   //   if (e.target.classList.contains("link")) {
//   //     console.log("you clicked on the link");
//   //   }
// }
// function stopPropagation(e) {
//   console.log("you clicked on list");
//   e.stopPropagation();
// }

// list.addEventListener("click", showBubbling, { capture: true });
// container.addEventListener("click", showBubbling, { capture: true });
// document.addEventListener("click", showBubbling, { capture: true });
// window.addEventListener("click", showBubbling, { capture: true });

// // allows select dynamic elements
// // event propagation - order the events are fired
// // event bubbling - clicked element first theb bubbles up -- default

// const container = document.querySelector(".container");
// const btn = document.querySelector(".btn");
// // const heading = document.querySelector(".heading");
// // console.log(heading);

// function sayHello() {
//   console.log("hello there");
// }

// btn.addEventListener("click", function () {
//   const element = document.createElement("h1");
//   element.classList.add("heading");
//   element.textContent = `im inside the container`;
//   container.appendChild(element);
// });
// container.addEventListener("click", function (e) {
//   if (event.target.classList.contains("heading")) {
//     console.log("hello there");
//   }
// });

// // heading.addEventListener("click", sayHello);

// // submit event listener
// // prevent default behavior
// // how to get value

// const form = document.getElementById("form");
// const name = document.getElementById("name");
// const password = document.getElementById("password");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("form submitted");
//   console.log(name.value);
//   console.log(password.value);
// });

// web storage API - provided by browser
// session storage, local storage
// setItem, getItem. removeItem, clear ----- IMPORTANT

// localStorage.setItem('name','john'); ----- IMPORTANT
// sessionStorage.setItem('name','john'); ----- IMPORTANT

// // localStorage.setItem("name", "john");
// // sessionStorage.setItem("name", "john");

// localStorage.setItem("name", "john");
// localStorage.setItem("friend", "peter");
// localStorage.setItem("job", "developer");
// localStorage.setItem("address", "street 123");

// const name = localStorage.getItem("name");
// console.log(name);
// localStorage.removeItem("name");
// const anotherName = localStorage.getItem("name");
// console.log(anotherName);
// localStorage.clear();

// JSON.stringfy(),JSON.parse() ----- IMPORTANT

// const friends = ["john", "peter", "bob"];

// localStorage.setItem("friends", JSON.stringify(friends));

// const values = JSON.parse(localStorage.getItem("friends"));
// console.log(values[2]);

// let fruits;

// if (localStorage.getItem("fruits")) {
//   fruits = JSON.parse(localStorage.getItem("fruits"));
// } else {
//   fruits = [];
// }
// console.log(fruits);
// fruits.push("oprange");
// // fruits.push("apple");
// localStorage.setItem("fruits", JSON.stringify(fruits));

// // setTimeout - runs function once after specific time ----- IMPORTANT

// // pass function reference
// // duration in ms (1000 ms = 1 second)
// // default 0, will cover more extensively in async/await section
// // returns unique identifier
// // clearTimeout to cancel
// // on window object

// function sayHello() {
//   console.log("hello john");
// }

// // setTimeout(sayHello, 2000);

// // // will not work
// // setTimeout(sayHello(), 2000);

// // alternative approach, ES6 arrouw functions

// // setTimeout(function () {
// //   console.log("john, hello");
// // }, 2000);

// // pass argunments

// function showScore(name, score) {
//   console.log(`hello ${name}, your score is ${score}`);
// }

// // setTimeout(showScore, 1000, "john", 134);

// const firstID = setTimeout(showScore, 1000, "john", 134);
// const secondID = setTimeout(showScore, 1000, "peter", 88);
// console.log(firstID);
// console.log(secondID);

// clearTimeout(firstID);

// setInterval - runs function repeatedly, at specific intervals

// pass function reference
// duration in ms(1000 = 1 second)
// default 0, will cover more extensively in async/await section
// returns unique identifier
// clearInterval to cancel

// function showScore(name, score) {
//   console.log(`hello ${name}, your score is ${score}`);
// }

// // setInterval(showScore, 2000);

// const firstID = setInterval(showScore, 1000, "BOBO", 45);
// const secondID = setInterval(showScore, 4000, "susan", 88);
// clearInterval(firstID);

// the DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

// window.addEventListener('DOMContentLoaded', function(){
// your code house here
// });

// // document.addEventListener.....

// window.addEventListener("DOMContentLoaded", function () {
// //   const heading = document.querySelector("h1");
// //   console.log(heading);
// //   heading.style.color = "red";
// //   console.log("hello world");
// });

// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images. this ios in contrast to DOMContentLoaded, which is fired as soon as the pafe DOM has been loaded, without waiting for resources to finish loading.

// window.addEventListener('load',funcion(){
//     // add your code here
// });

// // Scroll Event - on element or document

// window.addEventListener('scroll',function(){
//     console.log(window.scrollY + 'px');
//     console.log(window.scrollX + 'px');
// });

// document

// // scrollY - returns the number of pixels the document is currently scrolled along the vertical axis (pageYOffset)

// // scrollX - returns the number of pixels scrolled along the horizontal axis (pageXOffset)

// // innerWidth - The read-only window property the interior width of the window in pixels

// // innerHeight - the read-only property of the window interface returns the interior height of the window in pixels

// // the Element.getBoudingClientRect() method returns a DomRect object providing information about the size of an element and its position relative to the viewport

// console.log("height : " + window.innerHeight);
// console.log("width : " + window.innerWidth);

// const btn = document.querySelector(".btn");
// const box = document.querySelector(".box");

// btn.addEventListener("click", function () {
//   const values = box.getBoundingClientRect();
//   console.log(values);
// });

// the resize event fires when the document view (window) has been resized.

// window.addEventListener("resize", function () {
//   console.log(window.innerWidth);
// });
