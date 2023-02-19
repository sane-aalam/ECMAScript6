
// it used to give default value as parameter

/*
function addNumber(){
    return 10 + 11;
}

let value = addNumber();
console.log(value);

*/

// case - 1;

// function addNumber(value1, value2) {
//     let add = value1 + value2;
//     return add;
// }

// let value = addNumber(11,111);
// console.log(value);



function addNumber(value1, value2=111) {
    let add = value1 + value2;
    return add;
}

let value = addNumber(11);
console.log(value);