
// Is hoisting only in JavaScript?

// Image result for hoisting in js
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

// let's take example

// step - 01
var city = "Noida";
console.warn(city);

// step - 02
console.warn(village);
var village = "TiToli";


// but i'm using let keyword

// step - 03
let consistue = 1111;
console.log(consistue);

// step - 04
console.log(consider);
let consider = 1111; // error




