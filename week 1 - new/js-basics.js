console.clear(); // clears the console on each refresh
// I'm a single line comment looking for love
/*
  I'm a multi-line comment who can't catch a break
*/


// Mutable (can change) variable
var dontUseTheseAnymore = true;
let useThisInstead = "'let' indicates the value can mutate and is scoped to the block {} it's contained in.";
useThisInstead = "We changed it";
console.log(useThisInstead);

// Constants (cannot change)
const useTheseAsMuchAsPossible = "'const' indicates the value cannot mutate and is scoped to the block {} it's contained in.";
// Error handling
try {
  useTheseAsMuchAsPossible = 'new value';
} catch (e) {
  console.error(e.toString());
}

// Block scope
// Variables declared outside the block {} are available inside the block
let outsideBlock = "Look at me";
{
  console.log(outsideBlock);

  // Variables declared inside the block cannot be seen outside the block
  let insideBlock = "You can't see me";
}
try {
  console.log(insideBlock);
} catch (e) {
  console.error(e.toString());
}

// This is applicable to ALL block structures
// (if, for, function, try/catch, while, etc...)
if (true) {
  let name = "This is my name";
}

try {
  console.log(name);
} catch (e) {
  console.error(e.toString());
}

/*
  Arrays:
    'arr' is a constant meaning the array value assigned to 'arr'
    cannot be changed to any other data type. However, the values
    in the array can be changed.
*/
const arr = [1, 2, 3, 4];
try {
  arr = false;
} catch (e) {
  console.error(`arr cannot be changed: ${e}`);
}
console.log('arr before mutation', arr);
arr[0] = 5;
console.log('arr after mutation', arr);

/*
  Objects:
    'obj' is a constant meaning the object value cannot be changed.
    However, again, the properties and values inside the object
    can be changed.
*/
// An object literal
const obj = {
  name: 'Shaun',
  age: 41,
  dob: (new Date(1978, 11, 22)).toString()
};

/*
  Control structures:
    JavaScript supports if/else if/else statements as
    well as switch statements for controlling
    application flow
*/
let direction;
if (obj.age > 20) {
  direction = "down";
} else {
  direction = "up";
}
console.log("It's all " + direction + " hill from here.");
console.log(`It's all ${direction} hill from here.`);
console.log(`
    Hello, Linh!
    How are you today?
`);



switch (direction) {
  case 'up':
    console.log("Go get em tiger!");
  default:
    console.log("You better rest. Don't strain yourself.");
}

/*
  Loops:
    There are several different ways to do loops
    but the 3 most common ones we'll be using
    are for, for/of, and for/in
*/
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let item of arr) {
  console.log(item);
}

for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
}

/*
  Functions:
    Function declaration in JavaScript is quite simple.
    However, it's important to understand that a function
    definition (the code that makes up the function) is
    simply a value and can be passed around
*/
function sayHello (name) {
  console.log("Hello, " + name);
}
const helloFunc = sayHello; // notice them missing parenthesis
sayHello('Shaun');
helloFunc('Kevin');

//to show the definition of the function in console
console.log(helloFunc);
