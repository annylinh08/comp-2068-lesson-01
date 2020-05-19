console.clear(); // clears the console on each refresh

/*
  Destructuring:
    Destructuring is used to unpack values from arrays,
    or properties from objects, into distinct varaibles:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/
// Array destructuring
const arr = ['Diablo 3', 'Movies', 'Music'];
// Notice the variables are wrapped in square brackets
// You get to choose the variable names to represent the values
const [fav_hob_1, fav_hob_2, fav_hob_3] = arr;
console.log(fav_hob_1, fav_hob_2, fav_hob_3);

// Object destructuring
const obj = {
  name: 'Shaun',
  age: 41,
  dob: (new Date(1978, 11, 12)).toString()
};
// Notice the variables are wrapped in curly braces
// and are the same name as the properties in the object
const {name, age, dob} = obj;
console.log(name, age, dob);

/*
  Destructuring allows for default values as well
*/
const obj2 = {alias: 'Super Bob'};
const {alias, aka = 'Tim', race = 'unknown'} = obj2;
console.log(alias, aka, race);

/*
  Destructuring can also be done with nested values
*/
const obj3 = {
  fullname: 'Shaun McKinnon',
  hobbies: arr, // our hobbies array from earlier
  favBook: {
    title: "Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    quote: "42"
  }
};
const {
  fullname,
  hobbies: [hob1, hob2, hob3],
  favBook: {title, author, quote}
} = obj3;
console.log(fullname, hob1, hob2, hob3, title, author, quote);

/*
  Destructuring arrays allows for custom varaible names.
  You can do the same with objects, but the syntax
  requires a tweak.

  This is important to know as sometimes you may have to
  tweak a name if you're using two objects that have the
  same properties
*/
const {
  name: myName,
  age: myAge,
  dob: myDOB
} = obj;
console.log(myName, myAge, myDOB);

/*
  Spread Operator:
    The spread operator allows for arrays and objects
    to be expanded where arguments or elements are
    expected to be
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/
// Spreading arrays
const arr2 = [42, 35, 67];
const arr3 = [...arr2, 76, 98];
console.log(arr3);

// Spreading objects
const person = {name: "Bob", spouse: "Linda", children: 4};
const hobbies = {fav: "Walking the dog", secFav: "Food"};
const completePerson = {...person, hobbies: {...hobbies}};
console.log(completePerson);

/*
  Spreading arguments is cool, but you can only
  use arrays of values
*/
function sayHello (name, age, dob) {
  console.log(`Hello, ${name}. You are ${age} years old and you were born on ${dob}`);
}
const personArr = ['Shaun', 41, (new Date(1978, 11, 22).toString())];
sayHello(...personArr);

/*
  If you want to do it with an object,
  you need to first extract the values
*/
sayHello(...Object.values(obj));

/*
  Arrow Functions:
    Arrow functions are very common now as they
    don't alter the context of 'this'. In regular
    functions, when you reference 'this' it's context
    is the function you're within. In an arrow function
    the context is the function it's contained within.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
// Simple arrow function
const func = () => {
  console.log('I am a simple arrow function');
};
func();

// Arrow function with arguments
const func2 = (param1, param2) => {
  console.log(`I am a simple arrow function with ${param1} and ${param2}`);
};
func2('pizzaz', 'style');

// Arrow function with a single argument
const func3 = param1 => {
  console.log(`Just the one param; ${param1}`);
};
func3('lonely');

// Arrow function and destructuring mixed
const func4 = ({name, age, dob}) => {
  console.log(name, age, dob);
};
func4(obj);

/*
  Arrow functions are great when you need
  simple one liners
*/
const peopleArr = [
  {name: 'Bob', age: 63},
  {name: 'Amrit', age: 24},
  {name: 'Artem', age: 43},
  {name: 'Riya', age: 33},
];
const names = peopleArr.map(person => person.name.toUpperCase());
console.log(names);

/*
  Promises & Async/Await:
    You have likely heard that JavaScript is a non-blocking
    language. In fact, most operations in JavaScript are blocking.
    Just the fun stuff is non-blocking, like events, ajax, intervals/timeouts, and
    IO reading/writing. The way to deal with these in the past
    was to use callbacks. Callbacks are functions that are called
    within a function. This generally lead to a ridiculous mess
    of nested callbacks, reducing readability and impairing
    maintainability.

    Promises allow us to wrap an asynchronous operation
    and perform actions once it has completed:
*/
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Done like dinner");
    resolve();
  }, 2000);
})
.then(() => console.log("It finished"));
console.log("I'm happening before the promise has completed");

/*
  Definitely cleaner than "callback hell", but still
  technically a callback. If you still require things to
  happen in a certain order you're still going to wind
  up with a mess of Promises and then statements. Hence
  Async/Await. These block operations from continuing
  until they have completed their operation. No need
  for Promise.then. The catch is that await can only
  be called within an async function. This does require
  you to think about your code structure a little more
  closely:
*/
// An async function
const asyncFunc = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I'll get to it'");
      resolve();
    }, 5000);
  })
  console.log("I will await my turn");
};
asyncFunc();
console.log("I'm still going to happen whenever I want because I'm a special snowflake");
/*
  Some functions support the 'await' command natively.
  setTimeout, unfortunately, does not, but we can wrap
  those in a Promise and still get the clean syntax.
*/

/*
  IIFE:
    An IIFE is an instantly invoked function.
    This means it executes instantly. They were used
    to enclose scope, but now with let and const that
    isn't as common.
*/
((param1, param2) => {
  console.log(param1, param2);
})('arg1', 'arg2');

/*
  Async IIFE:
    However, async IIFEs are way more common. They
    allow us to use async/await with code that isn't
    contained within a function
*/
(async (brat1, brat2) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(brat2);
      resolve();
    }, 7000);
  });

  console.log(brat1);
})('I want to go first', 'No I want to go first');