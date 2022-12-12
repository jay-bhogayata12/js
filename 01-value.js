// number
15;
2.56;

// bigint
// BigInt values represent numeric values which are too large to be represented by the number primitive.(MDN)
let largeNumber = BigInt(1111111155555555555555666666);
console.log(typeof largeNumber);

// string
("jay");
("india");
`javascript`;

// boolean
true;
false;
console.log(typeof true);

// null
let a = null;
console.log(typeof a); // give object

//undefined
let b;
console.log(typeof b);

// symbol
const c = Symbol("jay");
const d = Symbol("jay");
console.log(c == d);
console.log(typeof c);

// NaN (not a number)
console.log(typeof NaN);
console.log(`a===NAN ${"a" === NaN}`);

/* 
7 primitive data type in js
    - number
    - bigint
    - string
    - boolean
    - null
    - undefined
    - symbol
*/

// everything else in js is object
/* non primitive data type in js
- function
- array
- date
- Regexp
- error

*/
// In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object.
//Functions aren't special data structures in JavaScript — they are just a special type of object that can be called.

//array
let numbers = [1, 2, 4, 67, 89];
console.log(typeof numbers);

//object
let proglang = {
  py: "python",
  js: "javascript",
  rb: "ruby",
};
console.log(typeof proglang);

//function
function printName() {
  console.log("jay");
}
console.log(typeof printName);

// date
console.log(typeof Date);

//regexp
console.log(typeof RegExp);

// error
console.log(typeof Error);

// falsy value in js
/*
1. ""
2. NaN
3. null
4. undefined
5. false
*/
// all other value in js true
